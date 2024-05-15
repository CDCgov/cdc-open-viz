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

const handleMiddleIndices = (data, seriesKey, preliminaryData) => {
  const result = {
    data: [],
    style: ''
  }
  data.forEach((item, index) => {
    preliminaryData.forEach(pd => {
      if (item[seriesKey] === pd.value) {
        // Find the previous calculable point
        const prevIndex = index - 1
        if (prevIndex >= 0 && data[prevIndex][seriesKey] !== pd.value) {
          result.data.push(data[prevIndex])
        }

        // Find the next calculable point
        const nextIndex = index + 1
        if (nextIndex < data.length && data[nextIndex][seriesKey] !== pd.value) {
          result.data.push(data[nextIndex])
        }
        result.style = pd.style
      }
    })
  })

  return result
}

// create segments (array of arrays) for building suppressed Lines
export const createDataSegments = (data, seriesKey, preliminaryData) => {
  // Process the first index if necessary
  const firstSegment = handleFirstIndex(data, seriesKey, preliminaryData)
  // Process the last index if necessary
  const lastSegment = handleLastIndex(data, seriesKey, preliminaryData)
  // Process the middle segment
  const middleSegments = handleMiddleIndices(data, seriesKey, preliminaryData)
  // Combine all segments into a single array
  return [firstSegment, middleSegments, lastSegment].filter(segment => segment.data.length > 0)
}
