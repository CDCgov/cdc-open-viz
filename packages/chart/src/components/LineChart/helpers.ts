import { type PreliminaryDataItem, DataItem, StyleProps, Style } from './LineChartProps'

export const createStyles = (props: StyleProps): Style[] => {
  const { preliminaryData, data, stroke, strokeWidth, handleLineType, lineType, seriesKey } = props

  const validPreliminaryData: PreliminaryDataItem[] = preliminaryData.filter(pd => pd.seriesKey && pd.column && pd.value && pd.style)
  const validSuppressedData: PreliminaryDataItem[] = preliminaryData.filter(pd => pd.type === 'suppression' && pd.value && pd.style)
  const getMatchingPd = (point: DataItem): PreliminaryDataItem => validPreliminaryData.find(pd => pd.seriesKey === seriesKey && point[pd.column] === pd.value && pd.type === 'effect' && pd.style !== 'Open Circles')
  const getMatchingSp = (point: DataItem): PreliminaryDataItem => validSuppressedData.find(pd => point[seriesKey] === pd.value && (!pd.column || pd.column === seriesKey))
  const styles: Style[] = []
  const createStyle = (lineStyle): Style => ({
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: lineStyle
  })

  data.forEach((d, index) => {
    const matchingPd: PreliminaryDataItem = getMatchingPd(d)
    const matchingSp: PreliminaryDataItem = getMatchingSp(d)

    const style: Style = matchingPd ? createStyle(handleLineType(matchingPd.style)) : createStyle(handleLineType(lineType))
    const styleX: Style = matchingSp ? createStyle(handleLineType(matchingSp.style)) : createStyle(handleLineType(lineType))
    if (matchingPd) {
      styles.push(style)
    } else {
      styles.push(styleX)
    }
    // If matchingSP exists, update the previous style if there is a previous element
    if (matchingSp && index > 0 && matchingSp.style) {
      styles[index - 1] = createStyle(handleLineType(matchingSp.style))
    }

    // If matchingPd exists, update the previous style if there is a previous element
    if (matchingPd && index > 0) {
      styles[index - 1] = createStyle(handleLineType(matchingPd.style))
    }
  })
  return styles as Style[]
}

export const filterCircles = (preliminaryData: PreliminaryDataItem[], data: DataItem[], seriesKey: string): DataItem[] => {
  // Filter and map preliminaryData to get circlesFiltered
  const circlesFiltered = preliminaryData.filter(item => item.style === 'Open Circles' && item.type === 'effect').map(item => ({ column: item.column, value: item.value, seriesKey: item.seriesKey }))
  const filteredData: DataItem[] = []
  // Process data to find matching items
  data.forEach(item => {
    circlesFiltered.forEach(fc => {
      if (item[fc.column] === fc.value && fc.seriesKey === seriesKey) {
        filteredData.push(item)
      }
    })
  })
  return filteredData
}

const isCalculable = value => !isNaN(parseFloat(value)) && isFinite(value)
const handleFirstIndex = (data, seriesKey, preliminaryData) => {
  const result = {
    data: [],
    style: ''
  }
  let lastAddedIndex = -1

  data.forEach((item, index) => {
    preliminaryData.forEach(pd => {
      if (index === 0 && pd.type == 'suppression' && pd.value === item[seriesKey] && (!pd.column || pd.column === seriesKey) && pd.style) {
        const modifiedItem = { ...item, [seriesKey]: 0 } // Modify first item
        result.data.push(modifiedItem)
        lastAddedIndex = index

        // Find next calculable item
        let nextIndex = index + 1
        while (nextIndex < data.length && !isCalculable(data[nextIndex][seriesKey])) {
          nextIndex++
        }
        if (nextIndex < data.length && lastAddedIndex !== nextIndex) {
          result.data.push(data[nextIndex])
          lastAddedIndex = nextIndex
        }
        result.style = pd.style
      }
    })
  })
  return result
}

const handleLastIndex = (data, seriesKey, preliminaryData) => {
  const result = {
    data: [],
    style: ''
  }
  let lastAddedIndex = -1 // Tracks the last index added to the result
  preliminaryData.forEach(pd => {
    if (data[data.length - 1][seriesKey] === pd.value && pd.style && (!pd.column || pd.column === seriesKey) && pd.type == 'suppression') {
      const lastIndex = data.length - 1
      const modifiedItem = { ...data[lastIndex], [seriesKey]: 0 }
      result.data.push(modifiedItem)

      // Find previous calculable item
      let prevIndex = lastIndex - 1
      while (prevIndex >= 0 && !isCalculable(data[prevIndex][seriesKey])) {
        prevIndex--
      }
      if (prevIndex >= 0 && lastAddedIndex !== prevIndex) {
        result.data.push(data[prevIndex])
        lastAddedIndex = prevIndex
      }
      result.style = pd.style
    }
  })

  return result
}

function handleMiddleIndices(data, seriesKey, dataKey, preliminaryData) {
  const result = {
    data: [],
    style: ''
  }

  preliminaryData.forEach(pd => {
    const targetValue = pd.value
    const style = pd.style

    result.style = style

    for (let i = 0; i < data.length; i++) {
      if (data[i][seriesKey] === targetValue) {
        // Skip if the target value is at the first or last index
        if (i === 0 || i === data.length - 1) {
          continue
        }

        // Add previous object if it is calculable
        if (i > 0 && isCalculable(data[i - 1][seriesKey])) {
          result.data.push(data[i - 1])
        }

        // Find the next calculable object
        let nextObject = null
        for (let j = i + 1; j < data.length; j++) {
          if (data[j][seriesKey] !== targetValue && isCalculable(data[j][seriesKey])) {
            nextObject = data[j]
            break
          }
        }

        // Add next calculable object if found
        if (nextObject) {
          result.data.push(nextObject)
        }
      }
    }
  })

  // Remove any duplicates
  result.data = result.data.filter((item, index, self) => index === self.findIndex(t => t[dataKey] === item[dataKey] && t[seriesKey] === item[seriesKey]))

  return result
}

// create segments (array of arrays) for building suppressed Lines
export const createDataSegments = (data, seriesKey, preliminaryData, dataKey) => {
  // Process the first index if necessary
  const firstSegment = handleFirstIndex(data, seriesKey, preliminaryData)
  // Process the last index if necessary
  const lastSegment = handleLastIndex(data, seriesKey, preliminaryData)
  // Process the middle segment
  const middleSegments = handleMiddleIndices(data, seriesKey, dataKey, preliminaryData)
  // Combine all segments into a single array
  return [firstSegment, middleSegments, lastSegment].filter(segment => segment.data.length > 0)
}
