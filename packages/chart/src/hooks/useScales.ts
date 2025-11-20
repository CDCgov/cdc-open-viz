import {
  LinearScaleConfig,
  LogScaleConfig,
  scaleBand,
  scaleLinear,
  scaleLog,
  scalePoint,
  scaleTime,
  getTicks
} from '@visx/scale'
import { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { ChartConfig } from '../types/ChartConfig'
import { ChartContext } from '../types/ChartContext'
import _ from 'lodash'
import { getYAxisAutoPadding } from '../helpers/getYAxisAutoPadding'
import getMinMax from '../helpers/getMinMax'
import { countNumOfTicks } from '../helpers/countNumOfTicks'

const scaleTypes = {
  TIME: 'time',
  LOG: 'log',
  POINT: 'point',
  LINEAR: 'linear',
  BAND: 'band'
}

export const TOP_PADDING = 10

type useScaleProps = {
  config: ChartConfig // standard chart config
  data: Object[] // standard data array
  tableData: Object[] // table data for getMinMax
  minValue: number // raw minimum value from data
  maxValue: number // raw maximum value from data
  existPositiveValue: boolean // whether data contains positive values
  isAllLine: boolean // whether all series are line type
  xAxisDataMapped: Object[] // array of x axis date/category items
  xMax: number // chart svg width
  yMax: number // chart svg height
  needsYAxisAutoPadding?: boolean // whether Y-axis needs auto padding for label overflow
  currentViewport?: string // current viewport for tick calculation
}

const useScales = (properties: useScaleProps) => {
  let {
    xAxisDataMapped,
    xMax,
    yMax,
    config,
    data,
    tableData,
    minValue,
    maxValue,
    existPositiveValue,
    isAllLine,
    needsYAxisAutoPadding,
    currentViewport
  } = properties

  const context = useContext<ChartContext>(ConfigContext)
  const { rawData, dimensions, convertLineToBarGraph = false } = context

  const [screenWidth] = dimensions
  const isHorizontal = config.orientation === 'horizontal'
  const { visualizationType, xAxis, forestPlot, runtime } = config
  const isForestPlot = visualizationType === 'Forest Plot'

  const minMaxProps = {
    config,
    minValue,
    maxValue,
    existPositiveValue,
    data,
    isAllLine,
    tableData,
    convertLineToBarGraph
  }
  let { min, max, leftMax, rightMax } = getMinMax(minMaxProps)

  const yTickCount = countNumOfTicks({
    axis: 'yAxis',
    max,
    runtime,
    currentViewport,
    isHorizontal,
    data,
    config,
    min
  })
  const handleNumTicks = isForestPlot ? config.data.length : yTickCount

  // Apply auto-padding if needed
  if (needsYAxisAutoPadding && !isHorizontal) {
    for (let i = 0; i < 2; i++) {
      const scale = composeYScale({ min, max, yMax, config, leftMax })
      const padding = getYAxisAutoPadding(scale, handleNumTicks, maxValue, minValue, config)
      const adjustedConfig = { ...config, yAxis: { ...config.yAxis, scalePadding: padding, enablePadding: true } }
      const result = getMinMax({ ...minMaxProps, config: adjustedConfig })
      min = result.min
      max = result.max
      leftMax = result.leftMax
      rightMax = result.rightMax
    }
  }

  const seriesDomain = config.runtime.barSeriesKeys || config.runtime.seriesKeys
  const xAxisType = config.runtime.xAxis.type
  const paddingRange = ['Area Chart', 'Forecasting'].includes(config.visualizationType) ? 1 : 1 - config.barThickness
  //  define scales
  let xScale = null
  let yScale = null
  let g2xScale = null
  let g1xScale = null
  let seriesScale = null
  let xScaleNoPadding = null
  let xScaleAnnotation = scaleLinear({
    domain: [0, 100],
    range: [0, xMax]
  })

  // handle  Horizontal bars
  if (isHorizontal) {
    xScale = composeXScale({ min: min * 1.03, max, xMax, config })
    xScale.type = config.yAxis.type === 'logarithmic' ? scaleTypes.LOG : scaleTypes.LINEAR
    yScale = getYScaleFunction(xAxisType, xAxisDataMapped)
    yScale.rangeRound([0, yMax])
    seriesScale = composeScalePoint(seriesDomain, [0, yMax])
  }

  // handle  Vertical bars
  if (!isHorizontal) {
    xScale = composeScaleBand(xAxisDataMapped, [0, xMax], paddingRange)
    yScale = composeYScale({ min, max, yMax, config, leftMax })
    seriesScale = composeScaleBand(seriesDomain, [0, xScale.bandwidth()], 0)
  }

  // handle Linear scaled viz
  if (config.xAxis.type === 'date' && !isHorizontal) {
    const sorted = sortXAxisData(xAxisDataMapped, config.xAxis.sortByRecentDate)

    xScale = composeScaleBand(sorted, [0, xMax], paddingRange)
    xScale.type = scaleTypes.BAND
  }

  if (xAxis.type === 'date-time' || xAxis.type === 'continuous') {
    let xAxisMin = Math.min(...xAxisDataMapped.map(Number))
    let xAxisMax = Math.max(...xAxisDataMapped.map(Number))
    let paddingRatio = config.xAxis.padding ? config.xAxis.padding * 0.01 : 0

    xAxisMin -= paddingRatio * (xAxisMax - xAxisMin)
    xAxisMax += visualizationType === 'Line' ? 0 : paddingRatio * (xAxisMax - xAxisMin)
    const range = config.xAxis.sortByRecentDate ? [xMax, 0] : [0, xMax]
    xScale = scaleTime({
      domain: [xAxisMin, xAxisMax],
      range: range
    })

    xScale.type = scaleTypes.TIME

    let minDistance = Number.MAX_VALUE
    let xAxisDataMappedSorted = sortXAxisData(xAxisDataMapped, config.xAxis.sortByRecentDate)

    for (let i = 0; i < xAxisDataMappedSorted.length - 1; i++) {
      let distance = xScale(xAxisDataMappedSorted[i + 1]) - xScale(xAxisDataMappedSorted[i])

      if (distance < minDistance) minDistance = distance
    }

    if (xAxisDataMapped.length === 1 || minDistance > xMax / 4) {
      minDistance = xMax / 4
    }

    seriesScale = composeScaleBand(seriesDomain, [0, (config.barThickness || 1) * minDistance], 0)
  }

  // handle Deviation bar
  if (config.visualizationType === 'Deviation Bar') {
    const leftOffset = config.isLollipopChart ? 1.05 : 1.03
    yScale = scaleBand({
      domain: xAxisDataMapped,
      range: [0, yMax]
    })
    xScale = scaleLinear({
      domain: [min * leftOffset, Math.max(Number(xAxis.target), max)],
      range: [0, xMax],
      round: true,
      nice: true
    })
    xScale.type = scaleTypes.LINEAR
  }

  // handle Scatter plot
  if (config.visualizationType === 'Scatter Plot') {
    if (xAxis.type === 'continuous') {
      let min = xAxis.min ? xAxis.min : Math.min.apply(null, xScale.domain())
      let max = xAxis.max ? xAxis.max : Math.max.apply(null, xScale.domain())
      xScale = scaleLinear({
        domain: [min, max],
        range: [0, xMax]
      })
      xScale.type = scaleTypes.LINEAR
    }
    if (xAxis.type === 'categorical') {
      xScale = composeScaleBand(xAxisDataMapped, [0, xMax], 1)
      xScale.type = scaleTypes.BAND
    }
  }

  // handle Box plot
  if (visualizationType === 'Box Plot') {
    const {
      boxplot: { plots, hideOutliers },
      xAxis: { dataKey },
      orientation,
      runtime: { seriesKeys },
      series,
      barThickness
    } = config

    // 1) merge outliers + fences
    let lo = min,
      hi = max
    for (const { columnOutliers = [], columnLowerBounds: lb, columnUpperBounds: ub } of plots) {
      if (!hideOutliers && columnOutliers.length) {
        lo = Math.min(lo, ...columnOutliers)
        hi = Math.max(hi, ...columnOutliers)
      }
      lo = Math.min(lo, lb)
      hi = Math.max(hi, ub)
    }
    ;[min, max] = [lo, hi]

    // 2) unique categories
    const cats = Array.from(new Set(data.map(d => d[dataKey])))

    if (orientation === 'horizontal') {
      xScale = composeXScale({ min, max, xMax, config })
      xScale.type = scaleTypes.LINEAR

      yScale = composeScaleBand(cats, [0, yMax], 0.4)
      seriesScale = composeScaleBand(seriesKeys, [0, yScale.bandwidth()], 0.3)
    } else {
      xScale = composeScaleBand(cats, [0, xMax], 1 - barThickness)
      xScale.type = scaleTypes.BAND

      // numeric → Y
      yScale = composeYScale({ min, max, yMax, config, leftMax: 0 })

      seriesScale = composeScaleBand(
        series.map(s => s.dataKey),
        [0, xScale.bandwidth()],
        0
      )
    }
  }

  // handle Paired bar
  if (visualizationType === 'Paired Bar') {
    const offset = 1.02 // Offset of the ticks/values from the Axis
    let groupOneMax = Math.max.apply(
      Math,
      data.map(d => d[config.series[0]?.dataKey])
    )
    let groupTwoMax = Math.max.apply(
      Math,
      data.map(d => d[config.series[1]?.dataKey])
    )

    // group one
    g1xScale = scaleLinear({
      domain: [0, Math.max(groupOneMax, groupTwoMax) * offset],
      range: [xMax / 2, 0]
    })

    // group 2
    g2xScale = scaleLinear({
      domain: g1xScale.domain(),
      range: [xMax / 2, xMax],
      nice: true
    })
  }

  if (visualizationType === 'Forest Plot') {
    const resolvedYRange = () => {
      if (forestPlot.regression.showDiamond || forestPlot.regression.description) {
        return [0 + forestPlot.rowHeight * 2, yMax - forestPlot.rowHeight]
      } else {
        return [0 + forestPlot.rowHeight * 2, yMax]
      }
    }

    yScale = scaleLinear({
      domain: [0, rawData.length],
      range: resolvedYRange()
    })

    const xAxisPadding = 5

    const leftWidthOffset = (Number(forestPlot.leftWidthOffset) / 100) * xMax
    const rightWidthOffset = (Number(forestPlot.rightWidthOffset) / 100) * xMax

    const rightWidthOffsetMobile = (Number(forestPlot.rightWidthOffsetMobile) / 100) * xMax
    const leftWidthOffsetMobile = (Number(forestPlot.leftWidthOffsetMobile) / 100) * xMax

    if (screenWidth > 480) {
      if (forestPlot.type === 'Linear') {
        xScale = scaleLinear({
          domain: [
            Math.min(...data.map(d => parseFloat(d[forestPlot.lower]))) - xAxisPadding,
            Math.max(...data.map(d => parseFloat(d[forestPlot.upper]))) + xAxisPadding
          ],
          range: [leftWidthOffset, Number(screenWidth) - rightWidthOffset]
        })
        xScale.type = scaleTypes.LINEAR
      }
      if (forestPlot.type === 'Logarithmic') {
        let max = Math.max(...data.map(d => parseFloat(d[forestPlot.upper])))
        let fp_min = Math.min(...data.map(d => parseFloat(d[forestPlot.lower])))

        xScale = scaleLog<LogScaleConfig>({
          domain: [fp_min, max],
          range: [leftWidthOffset, xMax - rightWidthOffset],
          nice: true
        })
        xScale.type = scaleTypes.LOG
      }
    } else {
      if (forestPlot.type === 'Linear') {
        xScale = scaleLinear<LinearScaleConfig>({
          domain: [
            Math.min(...data.map(d => parseFloat(d[forestPlot.lower]))) - xAxisPadding,
            Math.max(...data.map(d => parseFloat(d[forestPlot.upper]))) + xAxisPadding
          ],
          range: [leftWidthOffsetMobile, xMax - rightWidthOffsetMobile],
          type: scaleTypes.LINEAR
        })
      }

      if (forestPlot.type === 'Logarithmic') {
        let max = Math.max(...data.map(d => parseFloat(d[forestPlot.upper])))
        let fp_min = Math.min(...data.map(d => parseFloat(d[forestPlot.lower])))

        xScale = scaleLog<LogScaleConfig>({
          domain: [fp_min, max],
          range: [leftWidthOffset, xMax - rightWidthOffset],
          nice: true,
          base: max > 1 ? 10 : 2,
          round: false,
          type: scaleTypes.LOG
        })
      }
    }
  }
  return {
    xScale,
    yScale,
    seriesScale,
    g1xScale,
    g2xScale,
    xScaleNoPadding,
    xScaleAnnotation,
    min,
    max,
    leftMax,
    rightMax
  }
}

export default useScales

const getFirstDayOfMonth = ms => {
  const date = new Date(ms)
  return new Date(date.getFullYear(), date.getMonth(), 1).getTime()
}

const dateFormatHasMonthButNoDays = dateFormat => {
  return (
    (dateFormat.includes('%b') ||
      dateFormat.includes('%B') ||
      dateFormat.includes('%m') ||
      dateFormat.includes('%-m') ||
      dateFormat.includes('%_m')) &&
    !dateFormat.includes('%d') &&
    !dateFormat.includes('%-d') &&
    !dateFormat.includes('%_d') &&
    !dateFormat.includes('%e')
  )
}

export const getTickValues = (xAxisDataMapped, xScale, num, config) => {
  const xDomain = xScale.domain()

  if (xScale.type === 'time') {
    const xDomainMax = xAxisDataMapped[xAxisDataMapped.length - 1]
    const xDomainMin = xAxisDataMapped[0]

    const step = (xDomainMax - xDomainMin) / (num - 1)
    let tickValues = []
    for (let i = xDomainMax; i >= xDomainMin; i -= step) {
      tickValues.push(i)
    }
    if (tickValues[tickValues.length - 1] !== xDomainMin) {
      tickValues.push(xDomainMin)
    }
    tickValues.reverse()

    // Use first days of months when showing months without days
    if (dateFormatHasMonthButNoDays(config.xAxis.dateDisplayFormat)) {
      tickValues = tickValues.map(tv => getFirstDayOfMonth(tv))
    }

    return tickValues
  }

  if (xDomain.length > 2) {
    const step = num || 1
    const tickValues = []
    for (let i = xDomain.length; i > 0; i -= step) {
      const adjustedIndex = Math.max(Math.round(i) - 1, 0)
      tickValues.push(xDomain[adjustedIndex])
    }
    tickValues.reverse()

    return tickValues
  }
}

/// helper functions
const composeXScale = ({ min, max, xMax, config }) => {
  // Adjust min value if using logarithmic scale
  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  min = isLogarithmicAxis && min >= 0 && min < 1 ? min + 0.1 : min
  // Select the appropriate scale function
  const scaleFunc = isLogarithmicAxis ? scaleLog : scaleLinear
  // Return the configured scale function
  return scaleFunc({
    domain: [min, max],
    range: [0, xMax],
    nice: isLogarithmicAxis,
    zero: isLogarithmicAxis
  })
}

const composeYScale = ({ min, max, yMax, config, leftMax }) => {
  // Adjust min value if using logarithmic scale
  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  min = isLogarithmicAxis && min >= 0 && min < 1 ? min + 0.1 : min
  // Select the appropriate scale function
  const scaleFunc = isLogarithmicAxis ? scaleLog : scaleLinear

  if (config.visualizationType === 'Combo') max = leftMax

  // If the visualization type is a bump chart then the domain and range need different values
  const domainSet = config.visualizationType === 'Bump Chart' ? [1, max] : [min, max]
  const yRange = config.visualizationType === 'Bump Chart' ? [30, yMax] : [yMax, TOP_PADDING]
  // Return the configured scale function
  return scaleFunc({
    domain: domainSet,
    range: yRange,
    nice: isLogarithmicAxis,
    zero: isLogarithmicAxis
  })
}

const getYScaleFunction = (xAxisType, xAxisDataMapped) => {
  if (xAxisType === 'date') {
    return scaleLinear({
      domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)]
    })
  } else {
    return scalePoint({ domain: xAxisDataMapped, padding: 0.5 })
  }
}

const composeScalePoint = (domain, range, padding = 0) => {
  return scalePoint({
    domain: domain,
    range: range,
    padding: padding
  })
}

const composeScaleBand = (domain, range, padding = 0) => {
  return scaleBand({
    domain: domain,
    range: range,
    padding: padding
  })
}

const sortXAxisData = (xAxisData, sortByRecentDate) => {
  if (!xAxisData || xAxisData.length === 0) {
    return []
  }

  // Check if the array has only one item
  if (xAxisData.length === 1) {
    return xAxisData
  }
  if (sortByRecentDate) {
    // Sort from newest to oldes (recent dates first)
    return xAxisData.sort((a, b) => Number(b) - Number(a))
  } else {
    // Sort from oldest to newest
    return xAxisData.sort((a, b) => Number(a) - Number(b))
  }
}
