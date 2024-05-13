import { type PreliminaryDataItem, DataItem, StyleProps, Style } from './LineChartProps'

export const createStyles = (props: StyleProps): Style[] => {
  const { preliminaryData, data, stroke, strokeWidth, handleLineType, lineType, seriesKey } = props

  const validPreliminaryData: PreliminaryDataItem[] = preliminaryData.filter(pd => pd.seriesKey && pd.column && pd.value && pd.style)
  const validSuppressedData: PreliminaryDataItem[] = preliminaryData.filter(pd => pd.type === 'suppression' && pd.value && pd.symbol)
  const getMatchingPd = (point: DataItem): PreliminaryDataItem => validPreliminaryData.find(pd => pd.seriesKey === seriesKey && point[pd.column] === pd.value && pd.type === 'effect' && pd.style !== 'Open Circles')
  const getMatchingSp = (point: DataItem): PreliminaryDataItem => validSuppressedData.find(pd => point[seriesKey] === pd.value && (!pd.column || pd.column === seriesKey))
  let styles: Style[] = []
  const createStyle = (lineStyle): Style => ({
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: lineStyle
  })

  data.forEach((d, index) => {
    let matchingPd: PreliminaryDataItem = getMatchingPd(d)
    let matchingSp: PreliminaryDataItem = getMatchingSp(d)

    let style: Style = matchingPd ? createStyle(handleLineType(matchingPd.style)) : createStyle(handleLineType(lineType))
    let styleX: Style = matchingSp ? createStyle(handleLineType(matchingSp.symbol)) : createStyle(handleLineType(lineType))
    if (matchingPd) {
      styles.push(style)
    } else {
      styles.push(styleX)
    }
    // If matchingSP exists, update the previous style if there is a previous element
    if (matchingSp && index > 0 && matchingSp.symbol) {
      styles[index - 1] = createStyle(handleLineType(matchingSp.symbol))
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

  let filteredData: DataItem[] = []

  // Process data to find matching items
  data.forEach(item => {
    if (circlesFiltered.some(d => item[d.column] === d.value && d.seriesKey === seriesKey)) {
      // Add current item
      filteredData.push(item)
    }
  })

  return filteredData
}

const isCalculable = value => !isNaN(parseFloat(value)) && isFinite(value)
const handleFirstIndex = (data, seriesKey, preliminaryData) => {
  let result = {
    data: [],
    symbol: ''
  }
  let lastAddedIndex = -1

  data.forEach((item, index) => {
    preliminaryData.forEach(pd => {
      if (index === 0 && pd.type == 'suppression' && pd.value === item[seriesKey] && (!pd.column || pd.column === seriesKey) && pd.symbol) {
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
        result.symbol = pd.symbol
      }
    })
  })
  return result
}

const handleLastIndex = (data, seriesKey, preliminaryData) => {
  let result = {
    data: [],
    symbol: ''
  }
  let lastAddedIndex = -1 // Tracks the last index added to the result
  preliminaryData.forEach(pd => {
    if (data[data.length - 1][seriesKey] === pd.value && pd.symbol && (!pd.column || pd.column === seriesKey) && pd.type == 'suppression') {
      const lastIndex = data.length - 1
      let modifiedItem = { ...data[lastIndex], [seriesKey]: 0 }
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
    }
    result.symbol = pd.symbol
  })

  return result
}

const findNextCalculableIndex = (data, startIndex, seriesKey) => {
  let nextIndex = startIndex + 1
  while (nextIndex < data.length && !isCalculable(data[nextIndex][seriesKey])) {
    nextIndex++
  }
  return nextIndex < data.length ? nextIndex : -1
}

const findPreviousCalculableIndex = (data, startIndex, seriesKey) => {
  let prevIndex = startIndex - 1
  while (prevIndex >= 0 && !isCalculable(data[prevIndex][seriesKey])) {
    prevIndex--
  }
  return prevIndex >= 0 ? prevIndex : -1
}

const handleMiddleIndices = (data, seriesKey, preliminaryData) => {
  let middleSegments = {
    data: [],
    symbol: ''
  }

  data.forEach((item, index) => {
    preliminaryData.forEach(pd => {
      if (item[seriesKey] === pd.value && index !== 0 && index !== data.length - 1 && pd.symbol && (!pd.column || pd.column === seriesKey) && pd.type == 'suppression') {
        let prevIndex = findPreviousCalculableIndex(data, index, seriesKey)
        let nextIndex = findNextCalculableIndex(data, index, seriesKey)

        if (prevIndex !== -1 && nextIndex !== -1) {
          middleSegments.data.push(data[prevIndex])
          middleSegments.data.push(data[nextIndex])
        }
      }
      middleSegments.symbol = pd.symbol
    })
  })
  return middleSegments
}

// create segments (array of arrays) for building suppressed Lines
export const createDataSegments = (data, seriesKey, preliminaryData) => {
  // Process the first index if necessary
  let firstSegment = handleFirstIndex(data, seriesKey, preliminaryData)

  // Process the last index if necessary
  let lastSegment = handleLastIndex(data, seriesKey, preliminaryData)
  // Process the middle segment
  let middleSegments = handleMiddleIndices(data, seriesKey, preliminaryData)

  // Combine all segments into a single array
  return [firstSegment, middleSegments, lastSegment]
}
