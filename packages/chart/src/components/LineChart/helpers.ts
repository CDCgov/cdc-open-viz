import { DataItem, StyleProps, Style } from './LineChartProps'
import { PreliminaryDataItem } from '../../types/ChartConfig'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import _ from 'lodash'
export const createStyles = (props: StyleProps): Style[] => {
  const { preliminaryData, data, stroke, strokeWidth, handleLineType, lineType, seriesKey } = props

  const validPreliminaryData: PreliminaryDataItem[] = preliminaryData.filter(
    pd => pd.seriesKey && pd.column && pd.value && pd.type && pd.style && pd.type === 'effect'
  )
  const getMatchingPd = (point: DataItem): PreliminaryDataItem =>
    validPreliminaryData.find(
      pd =>
        pd.seriesKey === seriesKey &&
        point[pd.column] === pd.value &&
        pd.type === 'effect' &&
        pd.style !== 'Open Circles'
    )

  let styles: Style[] = []
  const createStyle = (lineStyle): Style => ({
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: lineStyle
  })

  data.forEach((d, index) => {
    let matchingPd: PreliminaryDataItem = getMatchingPd(d)
    let style: Style = matchingPd
      ? createStyle(handleLineType(matchingPd.style))
      : createStyle(handleLineType(lineType))

    styles.push(style)

    // If matchingPd exists, update the previous style if there is a previous element
    if (matchingPd && index > 0) {
      styles[index - 1] = createStyle(handleLineType(matchingPd.style))
    }
  })
  return styles as Style[]
}

export const filterCircles = (
  preliminaryData: PreliminaryDataItem[],
  data: DataItem[],
  seriesKey: string
): DataItem[] => {
  // Filter and map preliminaryData to get circlesFiltered
  const circlesFiltered = preliminaryData
    ?.filter(item => item.style.includes('Circles') && item.type === 'effect')
    .map(item => ({
      column: item.column,
      value: item.value,
      seriesKey: item.seriesKey,
      circleSize: item.circleSize,
      style: item.style
    }))
  const filteredData = []
  // Process data to find matching items
  data.forEach(item => {
    circlesFiltered.forEach(fc => {
      if (
        item[fc.column] === fc.value &&
        fc.seriesKey === seriesKey &&
        item[seriesKey] &&
        fc.style === 'Open Circles'
      ) {
        const result = {
          data: item,
          size: fc.circleSize,
          isFilled: false
        }
        filteredData.push(result)
      }
      if (
        (!fc.value || item[fc.column] === fc.value) &&
        fc.seriesKey === seriesKey &&
        item[seriesKey] &&
        fc.style === 'Filled Circles'
      ) {
        const result = {
          data: item,
          size: fc.circleSize,
          isFilled: true
        }
        filteredData.push(result)
      }
    })
  })

  return filteredData
}

const isCalculable = value => !isNaN(parseFloat(value)) && isFinite(value)
const handleFirstIndex = (data, seriesKey, preliminaryData) => {
  let pairCount = '0'
  const result = {
    data: { '0': [] },
    style: ''
  }

  // If data is empty, return the empty result
  if (!data.length) return result

  const firstIndexDataItem = data[0]

  // Function to check if a data item matches the suppression criteria
  const isSuppressed = pd => {
    if (pd.type === 'effect' || pd.hideLineStyle) return
    return (
      pd.type == 'suppression' && pd.value === firstIndexDataItem[seriesKey] && (!pd.column || pd.column === seriesKey)
    )
  }

  // Find applicable suppression data for the first item
  const suppressionData = preliminaryData.find(isSuppressed)

  if (suppressionData && suppressionData.style) {
    // Modify first item and add to result
    const modifiedItem = { ...firstIndexDataItem, [seriesKey]: 0 }
    result.data[pairCount].push(modifiedItem)
    result.style = suppressionData.style

    // Find the next calculable item index
    let nextIndex = 1
    while (nextIndex < data.length && !isCalculable(data[nextIndex][seriesKey])) {
      nextIndex++
    }
    if (nextIndex < data.length) {
      result.data[pairCount].push(data[nextIndex])
    }
  } else {
    // If no suppression, just add the first item
    result.data[pairCount].push(firstIndexDataItem)
  }

  return result
}

const handleLastIndex = (data, seriesKey, preliminaryData) => {
  let pairCount = '0'
  const result = {
    data: { '0': [] },
    style: ''
  }
  let lastAddedIndex = -1 // Tracks the last index added to the result
  preliminaryData?.forEach(pd => {
    if (pd.type === 'effect') return
    if (
      data[data.length - 1][seriesKey] === pd.value &&
      pd.style &&
      (!pd.column || pd.column === seriesKey) &&
      pd.type == 'suppression' &&
      !pd.hideLineStyle
    ) {
      const lastIndex = data.length - 1
      const modifiedItem = { ...data[lastIndex], [seriesKey]: 0 }
      result.data[pairCount].push(modifiedItem)

      // Find previous calculable item
      let prevIndex = lastIndex - 1
      while (prevIndex >= 0 && !isCalculable(data[prevIndex][seriesKey])) {
        prevIndex--
      }
      if (prevIndex >= 0 && lastAddedIndex !== prevIndex) {
        result.data[pairCount].push(data[prevIndex])
        lastAddedIndex = prevIndex
      }
      result.style = pd.style
    }
  })

  return result
}

function handleMiddleIndices(data, seriesKey, preliminaryData) {
  // slice data to remove first and last object these no need for handleMiddleIndices

  let result = {
    data: {},
    style: ''
  }
  // Variable to count the number of sibling pairs found
  let pairCount = 1

  // Loop through the data array to find each occurrence of the target value
  data.forEach((item, index) => {
    preliminaryData.forEach(pd => {
      const targetValue = pd.value
      if (item[seriesKey] === targetValue) {
        let siblingBefore = null
        let siblingAfter = null

        // Find the nearest numeric sibling before the current index
        for (let i = index - 1; i >= 0; i--) {
          if (isCalculable(data[i][seriesKey])) {
            siblingBefore = data[i]
            break // Stop searching once a valid sibling is found
          }
        }

        // Find the nearest numeric sibling after the current index
        for (let j = index + 1; j < data.length; j++) {
          if (isCalculable(data[j][seriesKey])) {
            siblingAfter = data[j]
            break // Stop searching once a valid sibling is found
          }
        }

        // Only add siblings to results if both siblings are found
        if (siblingBefore && siblingAfter) {
          result.style = pd.style
          result.data[pairCount++] = [siblingBefore, siblingAfter]
        }
      }
    })
  })
  return result
}

// create segments (array of arrays) for building suppressed Lines
export const createDataSegments = (data, seriesKey, preliminaryData, dataKey) => {
  // Process the first index if necessary
  const firstSegment = handleFirstIndex(data, seriesKey, preliminaryData)
  // Process the last index if necessary
  const lastSegment = handleLastIndex(data, seriesKey, preliminaryData)
  // Process the middle segment
  const middleSegments = handleMiddleIndices(data, seriesKey, preliminaryData)

  // Combine all segments into a single array
  return [firstSegment, middleSegments, lastSegment]
  // return [firstSegment, middleSegments, lastSegment].filter(segment => segment.data.length > 0 && segment.style !== '')
}
