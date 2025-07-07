import { DataItem, StyleProps, Style } from './LineChartProps'
import { PreliminaryDataItem } from '../../types/ChartConfig'

import _ from 'lodash'
export const createStyles = (props: StyleProps): Style[] => {
  const {
    preliminaryData,
    data,
    stroke,
    strokeWidth,
    handleLineType,
    lineType,
    seriesKey,
    dynamicCategory,
    originalSeriesKey
  } = props

  const dynamicSeriesKey = dynamicCategory ? originalSeriesKey : seriesKey
  const validPreliminaryData: PreliminaryDataItem[] = preliminaryData.filter(
    pd => pd.seriesKeys?.length && pd.column && pd.value && pd.type && pd.style && pd.type === 'effect'
  )
  const isEffectLine = (pd, dataPoint) => {
    if (dynamicCategory) {
      return (
        pd.type === 'effect' &&
        pd.style !== 'Open Circles' &&
        pd.seriesKeys.includes(seriesKey) &&
        String(dataPoint[dynamicSeriesKey]) === String(pd.value)
      )
    } else {
      return (
        pd.seriesKeys.includes(seriesKey) &&
        dataPoint[pd.column] === pd.value &&
        pd.type === 'effect' &&
        pd.style !== 'Open Circles'
      )
    }
  }

  const getMatchingPd = (point: DataItem): PreliminaryDataItem =>
    validPreliminaryData.find(pd => isEffectLine(pd, point))

  const styles: Style[] = []
  const createStyle = (lineStyle): Style => ({
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: lineStyle
  })

  data.forEach((d, index) => {
    const matchingPd: PreliminaryDataItem = getMatchingPd(d)

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
    ?.filter(item => item.style.includes('Circles') && item.type === 'effect' && item.seriesKeys?.length)
    .map(item => ({
      column: item.column,
      value: item.value,
      seriesKeys: item.seriesKeys,
      circleSize: item.circleSize,
      style: item.style
    }))
  const filteredData = []
  // Process data to find matching items
  data.forEach(item => {
    circlesFiltered.forEach(fc => {
      if (
        item[fc.column] === fc.value &&
        fc.seriesKeys.includes(seriesKey) &&
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
        fc.seriesKeys.includes(seriesKey) &&
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
const handleFirstIndex = ({
  data,
  seriesKey,
  preliminaryData,
  dynamicCategory,
  originalSeriesKey,
  colorScale,
  isSuppressed
}) => {
  let pairCount = '0'
  const result = {
    data: { '0': [] },
    style: '',
    color: ''
  }

  // If data is empty, return the empty result
  if (!data.length) return result

  const firstIndexDataItem = data[0]

  // Find applicable suppression data for the first item
  const suppressionData = (preliminaryData ?? []).find(
    item => item && firstIndexDataItem && isSuppressed(item, firstIndexDataItem)
  )

  if (suppressionData && suppressionData.style) {
    // Modify first item and add to result
    const dynamicSeriesKey = dynamicCategory ? originalSeriesKey : seriesKey

    const modifiedItem = { ...firstIndexDataItem, [dynamicSeriesKey]: 0 }

    result.data[pairCount].push(modifiedItem)
    result.style = suppressionData.style
    result.color = dynamicCategory && modifiedItem ? colorScale(modifiedItem[dynamicCategory]) : ''

    // Find the next calculable item index
    let nextIndex = 1
    while (nextIndex < data.length && !isCalculable(data[nextIndex][dynamicSeriesKey])) {
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

const handleLastIndex = ({
  data,
  seriesKey,
  preliminaryData,
  dynamicCategory,
  originalSeriesKey,
  colorScale,
  isSuppressed
}) => {
  let pairCount = '0'
  const result = {
    data: { '0': [] },
    style: '',
    color: ''
  }
  const lastIndexDataItem = data[data.length - 1]

  const dynamicSeriesKey = dynamicCategory ? originalSeriesKey : seriesKey
  let lastAddedIndex = -1
  preliminaryData?.forEach(pd => {
    if (pd.type === 'effect') return []
    if (isSuppressed(pd, lastIndexDataItem)) {
      const lastIndex = data.length - 1
      const modifiedItem = { ...data[lastIndex], [dynamicSeriesKey]: 0 }
      result.data[pairCount].push(modifiedItem)

      // Find previous calculable item
      let prevIndex = lastIndex - 1
      while (prevIndex >= 0 && !isCalculable(data[prevIndex][dynamicSeriesKey])) {
        prevIndex--
      }
      if (prevIndex >= 0 && lastAddedIndex !== prevIndex) {
        result.data[pairCount].push(data[prevIndex])
        lastAddedIndex = prevIndex
      }
      result.style = pd.style
      result.color = colorScale(modifiedItem[dynamicCategory])
    }
  })

  return result
}

export const handleMiddleIndices = ({
  data,
  seriesKey,
  preliminaryData,
  dynamicCategory,
  originalSeriesKey,
  colorScale,
  isSuppressed
}) => {
  let result = {
    data: {},
    style: '',
    color: 'red'
  }

  //skip processing if data or preliminaryData is not an array
  if (!Array.isArray(data) || !Array.isArray(preliminaryData)) {
    return result
  }

  // Variable to count the number of sibling pairs found
  let pairCount = 1
  const dynamicSeriesKey = dynamicCategory ? originalSeriesKey : seriesKey

  // Loop through the data array to find each occurrence of the target value
  data.forEach((item, index) => {
    preliminaryData.forEach(pd => {
      if (isSuppressed(pd, item)) {
        let siblingBefore = null
        let siblingAfter = null

        // Find the nearest numeric sibling before the current index
        for (let i = index - 1; i >= 0; i--) {
          if (isCalculable(data[i][dynamicSeriesKey])) {
            siblingBefore = data[i]
            break // Stop searching once a valid sibling is found
          }
        }

        // Find the nearest numeric sibling after the current index
        for (let j = index + 1; j < data.length; j++) {
          if (isCalculable(data[j][dynamicSeriesKey])) {
            siblingAfter = data[j]
            break // Stop searching once a valid sibling is found
          }
        }

        // Only add siblings to results if both siblings are found
        if (siblingBefore && siblingAfter) {
          result.style = pd.style
          result.color = colorScale(item[dynamicCategory])
          result.data[pairCount++] = [siblingBefore, siblingAfter]
        }
      }
    })
  })

  return result
}

export const createDataSegments = props => {
  const dynamicData = (props.data ?? []).filter(d => {
    if (!props?.dynamicCategory) return true

    return (props.preliminaryData ?? []).some(pd => d?.[props.dynamicCategory] === props?.seriesKey)
  })
  const isSuppressed = (pd, dataItem) => {
    if (pd.type === 'effect' || pd.hideLineStyle) return false

    if (props.dynamicCategory) {
      return (
        pd.type === 'suppression' &&
        (!pd.column || pd.column === dataItem[props.dynamicCategory]) &&
        pd.value === dataItem[props.originalSeriesKey]
      )
    }
    return (
      pd.type === 'suppression' &&
      pd.value === dataItem[props.seriesKey] &&
      (!pd.column || pd.column === props.seriesKey)
    )
  }
  const firstSegment = handleFirstIndex({ ...props, data: dynamicData, isSuppressed })
  const lastSegment = handleLastIndex({ ...props, data: dynamicData, isSuppressed })
  const middleSegments = handleMiddleIndices({ ...props, data: dynamicData, isSuppressed })

  const segments = [firstSegment, middleSegments, lastSegment]

  // ✅ Filter: keep only segments with real data
  return segments.filter(segment => {
    if (!segment || !segment.data) return false

    // Check if at least one non-empty array exists in `data`
    const hasData = Object.values(segment.data).some(arr => Array.isArray(arr) && arr.length > 0)

    return hasData
  })
}
