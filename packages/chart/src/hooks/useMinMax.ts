import { ChartConfig } from '../types/ChartConfig'
import _ from 'lodash'
import ConfigContext from '../ConfigContext'
import { useContext } from 'react'

type UseMinMaxProps = {
  /** config - standard chart config */
  config: ChartConfig
  /** minValue - starting minimum value */
  minValue: number
  /** maxValue - starting maximum value before transformations */
  maxValue: number
  /** existsPositiveValue - determines if axis should show values above/below 0 */
  existPositiveValue: boolean
  /** data - standard data array */
  data: Object[]
  /** Table data -data array Filtered & Excluded */
  tableData: Object[]
  /** isAllLine: if all series are line type including dashed lines */
  isAllLine: boolean
}

const useMinMax = ({ config, minValue, maxValue, existPositiveValue, data, isAllLine, tableData }: UseMinMaxProps) => {
  let min = 0
  let max = 0

  // Implementation for left and right axis
  let leftMax = 0
  let rightMax = 0

  const { convertLineToBarGraph } = useContext(ConfigContext)

  if (!data) {
    return { min, max }
  }

  const { visualizationType, series } = config
  const { max: enteredMaxValue, min: enteredMinValue } = config.runtime.yAxis
  const paddingAddedToAxis = config.yAxis.enablePadding ? 1 + config.yAxis.scalePadding / 100 : 1
  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  // do validation bafore applying t0 charts
  const isMaxValid = existPositiveValue ? Number(enteredMaxValue) >= maxValue : Number(enteredMaxValue) >= 0
  const isMinValid = isLogarithmicAxis
    ? Number(enteredMinValue) >= 0
    : (Number(enteredMinValue) <= 0 && minValue >= 0) || (Number(enteredMinValue) <= minValue && minValue < 0)

  min = enteredMinValue && isMinValid ? Number(enteredMinValue) : minValue
  max = enteredMaxValue && isMaxValid ? Number(enteredMaxValue) : Number.MIN_VALUE
  const { lower, upper } = config?.confidenceKeys || {}

  if (lower && upper && config.visualizationType === 'Bar') {
    const buffer = min < 0 ? 1.1 : 0
    const maxValueWithCI = Math.max(...data.flatMap(d => [d[upper], d[lower]])) * paddingAddedToAxis
    const minValueWithCIPlusBuffer = Math.min(...data.flatMap(d => [d[upper], d[lower]])) * paddingAddedToAxis * buffer
    max = max > maxValueWithCI ? max : maxValueWithCI
    min = min < minValueWithCIPlusBuffer ? min : minValueWithCIPlusBuffer
  }

  if (config.series.filter(s => s?.type === 'Forecasting')) {
    const {
      runtime: { forecastingSeriesKeys }
    } = config
    if (forecastingSeriesKeys?.length > 0) {
      // push all keys into an array
      let columnNames = []

      forecastingSeriesKeys.forEach(f => {
        f.confidenceIntervals?.map(ciGroup => {
          columnNames.push(ciGroup.high)
          columnNames.push(ciGroup.low)
        })
      })

      // Using the columnNames or "keys" get the returned result
      const result = data.map(obj => columnNames.map(key => obj[key]))

      const highCIGroup = Math.max.apply(
        null,
        result.map(item => item[0])
      )

      const lowCIGroup = Math.min.apply(
        null,
        result.map(item => item[1])
      )

      if (highCIGroup > max) {
        max = highCIGroup
      }
      if (lowCIGroup < min) {
        min = lowCIGroup
      }
    }
  }

  if (visualizationType === 'Combo') {
    try {
      if (!data) throw new Error('COVE: missing data while getting min/max for combo chart.')
      // seperate the left and right axis items & get each sides series keys
      let leftAxisSeriesItems = series.filter(s => s.axis === 'Left')
      let rightAxisSeriesItems = series.filter(s => s.axis === 'Right')

      const findMaxFromSeriesKeys = (data, seriesData, max, axis = 'left') => {
        let stackedBarMax = 0
        let axisSeriesKeys = seriesData.map(i => i.dataKey) || []

        axisSeriesKeys.forEach(key => {
          let _seriesData = seriesData.find(s => s.dataKey === key)
          let _data = data.map(d => d[key])
          let seriesMax = Math.max.apply(null, _data)
          if (config.visualizationSubType === 'stacked' && axis === 'left' && _seriesData.type === 'Bar') {
            stackedBarMax += seriesMax
          }
          if (seriesMax > max) {
            max = seriesMax
          }

          if (max < stackedBarMax) {
            max = stackedBarMax
          }
        })
        return max
      }
      leftMax = findMaxFromSeriesKeys(data, leftAxisSeriesItems, leftMax, 'left')
      rightMax = findMaxFromSeriesKeys(data, rightAxisSeriesItems, rightMax, 'right')

      if (leftMax < Number(enteredMaxValue)) {
        leftMax = Number(enteredMaxValue)
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  // this should not apply to bar charts if there is negative CI data
  if (
    (visualizationType === 'Bar' || convertLineToBarGraph || (visualizationType === 'Combo' && !isAllLine)) &&
    min > 0
  ) {
    min = 0
  }
  if (
    (config.visualizationType === 'Bar' ||
      convertLineToBarGraph ||
      (config.visualizationType === 'Combo' && !isAllLine)) &&
    min < 0
  ) {
    min = min * 1.1
  }

  if (config.visualizationType === 'Combo' && isAllLine) {
    if ((enteredMinValue === undefined || enteredMinValue === null || enteredMinValue === '') && min > 0) {
      min = 0
    }
    if (enteredMinValue) {
      const isMinValid = isLogarithmicAxis
        ? Number(enteredMinValue) >= 0 && Number(enteredMinValue) < minValue
        : Number(enteredMinValue) < minValue
      min = Number(enteredMinValue) && isMinValid ? Number(enteredMinValue) : minValue
    }
  }

  if (config.visualizationType === 'Deviation Bar' && min > 0) {
    const isMinValid = Number(enteredMinValue) < Math.min(minValue, Number(config.xAxis.target))
    min = Number(enteredMinValue) && isMinValid ? Number(enteredMinValue) : 0
  }

  if (config.visualizationType === 'Line' && !convertLineToBarGraph) {
    const numEnteredMin = Number(enteredMinValue)
    const isMinValid = isLogarithmicAxis ? numEnteredMin >= 0 && numEnteredMin < minValue : numEnteredMin < minValue

    const suppressedMinValue = tableData?.some((item, i, arr) =>
      config.preliminaryData?.some(({ type, style, column, value }) => {
        if (type !== 'suppression' || !style) return false

        const values = _.values(_.pick(item, config.runtime?.seriesKeys))
        const dynamicCategory = config.series[0].dynamicCategory

        const match = column ? item[column] === value : values.includes(value)
        const dynamic = dynamicCategory && (item[dynamicCategory] === column || !column)

        return (match || dynamic) && (i === 0 || i === arr.length - 1)
      })
    )

    const isCategorical = config.yAxis.type === 'categorical'

    min = enteredMinValue !== '' && isMinValid ? numEnteredMin : suppressedMinValue ? 0 : isCategorical ? 0 : minValue
  }

  //If data value max wasn't provided, calculate it
  if (max === Number.MIN_VALUE) {
    // if all values in data are negative set max = 0
    max = existPositiveValue ? maxValue : 0
  }

  //Adds Y Axis data padding if applicable
  if (config.runtime.yAxis.paddingPercent) {
    let paddingValue = (max - min) * config.runtime.yAxis.paddingPercent
    min -= paddingValue
    max += paddingValue
  }

  if (config.isLollipopChart && config.yAxis.displayNumbersOnBar) {
    const dataKey = data.map(item => item[config.series[0].dataKey])
    const maxDataVal = Math.max(...dataKey).toString().length

    switch (true) {
      case maxDataVal > 8 && maxDataVal <= 12:
        max = max * 1.3
        break
      case maxDataVal > 4 && maxDataVal <= 7:
        max = max * 1.1
        break
      default:
        break
    }
  }

  if (config.yAxis.enablePadding) {
    if (min < 0) {
      // sets with negative data need more padding on the max
      max *= 1 + (config.yAxis.scalePadding * 2) / 100
      min *= 1 + (config.yAxis.scalePadding * 2) / 100
    } else {
      max *= 1 + config.yAxis.scalePadding / 100
    }
  }

  if (config.visualizationType === 'Area Chart' && config.visualizationSubType === 'stacked') {
    min = 0
  }

  if (config.visualizationType === 'Scatter Plot') {
    max = max * 1.1
    min = min / 1.1
  }

  return { min, max, leftMax, rightMax }
}
export default useMinMax
