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
import { useContext, useMemo } from 'react'
import ConfigContext from '../ConfigContext'
import { ChartConfig } from '../types/ChartConfig'
import { ChartContext } from '../types/ChartContext'
import _ from 'lodash'
import { extent } from 'd3-array'
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
  max: number // maximum value from useMinMax hook
  min: number // minimum value from useMinMax hook
  xAxisDataMapped: Object[] // array of x axis date/category items
  xMax: number // chart svg width
  yMax: number // chart svg height
}

const useScales = (properties: useScaleProps) => {
  let { xAxisDataMapped, xMax, yMax, min, max, config, data } = properties

  const { rawData, dimensions } = useContext<ChartContext>(ConfigContext)
  const sortByRecentDate = config.xAxis.sortByRecentDate
  const [screenWidth] = dimensions
  const seriesDomain = config.runtime.barSeriesKeys || config.runtime.seriesKeys
  const xAxisType = config.runtime.xAxis.type
  const isHorizontal = config.orientation === 'horizontal'
  const { visualizationType, xAxis, forestPlot } = config
  const sortedTs = useMemo(
    () =>
      sortByRecentDate
        ? [...xAxisDataMapped].sort((a, b) => Number(b) - Number(a))
        : [...xAxisDataMapped].sort((a, b) => Number(a) - Number(b)),
    [xAxisDataMapped, sortByRecentDate]
  ).map(Number)

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
    xScale = composeXScale({ min: min * 1.03, ...properties })
    xScale.type = config.yAxis.type === 'logarithmic' ? scaleTypes.LOG : scaleTypes.LINEAR
    yScale = getYScaleFunction(xAxisType, xAxisDataMapped)
    yScale.rangeRound([0, yMax])
    seriesScale = composeScalePoint(seriesDomain, [0, yMax])
  }

  // handle  Vertical bars
  if (!isHorizontal) {
    xScale = composeScaleBand(xAxisDataMapped, [0, xMax], 1 - config.barThickness)
    yScale = composeYScale(properties)
    seriesScale = composeScaleBand(seriesDomain, [0, xScale.bandwidth()], 0)
  }

  // handle Linear scaled viz
  if (config.xAxis.type === 'date' && !isHorizontal) {
    xScale = composeScaleBand(sortedTs, [0, xMax], 1 - config.barThickness)
    xScale.type = scaleTypes.BAND
  }

  if (xAxis.type === 'date-time' || xAxis.type === 'continuous') {
    let xAxisMin = Math.min(...xAxisDataMapped.map(Number))
    let xAxisMax = Math.max(...xAxisDataMapped.map(Number))
    let paddingRatio = config.xAxis.padding ? config.xAxis.padding * 0.01 : 0

    xAxisMin -= paddingRatio * (xAxisMax - xAxisMin)
    xAxisMax += visualizationType === 'Line' ? 0 : paddingRatio * (xAxisMax - xAxisMin)
    const range = sortByRecentDate ? [xMax, 0] : [0, xMax]
    xScale = scaleTime({
      domain: [xAxisMin, xAxisMax],
      range: range
    })

    xScale.type = scaleTypes.TIME

    let minDistance = Number.MAX_VALUE

    for (let i = 0; i < sortedTs.length - 1; i++) {
      let distance = xScale(sortedTs[i + 1]) - xScale(sortedTs[i])

      if (distance < minDistance) minDistance = distance
    }

    if (xAxisDataMapped.length === 1 || minDistance > xMax / 4) {
      minDistance = xMax / 4
    }

    seriesScale = composeScaleBand(seriesDomain, [0, (config.barThickness || 1) * minDistance], 0)
  }

  // handle are chart
  if (config.visualizationType === 'Area Chart') {
    if (config.xAxis.type === 'date') {
      const [xAxisMin, xAxisMax] = extent(sortedTs) as [number, number]
      const domain: [number, number] = sortByRecentDate ? [xAxisMin, xAxisMax] : [xAxisMax, xAxisMin]
      xScale = buildTimeScale(domain, [0, xMax])
      xScale.type = scaleTypes.TIME
    }
    if (config.xAxis.type === 'categorical') {
      xScale = composeScalePoint(xAxisDataMapped, [0, xMax], 0)
      xScale.type = scaleTypes.POINT
    }
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
      xScale = scaleLinear({
        domain: [min, max],
        range: [0, xMax],
        nice: true,
        clamp: true
      })
      yScale = scaleBand({
        domain: cats,
        range: [0, yMax]
      })
      seriesScale = scaleBand({
        domain: seriesKeys,
        range: [0, yScale.bandwidth()],
        padding: Number(config.barHeight) / 100
      })
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
  return { xScale, yScale, seriesScale, g1xScale, g2xScale, xScaleNoPadding, xScaleAnnotation }
}

export default useScales

export const getFirstDayOfMonth = ms => {
  const date = new Date(ms)
  return new Date(date.getFullYear(), date.getMonth(), 1).getTime()
}

export const dateFormatHasMonthButNoDays = dateFormat => {
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

const buildTimeScale = (domain: [number, number], range: [number, number], options: { clamp?: boolean } = {}) => {
  return scaleTime<number>({ domain, range, clamp: options.clamp }).rangeRound(range)
}
