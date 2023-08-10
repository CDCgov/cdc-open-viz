import React, { forwardRef, useContext, useEffect, useRef, useState, useMemo } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

// Libraries
import { AxisLeft, AxisBottom, AxisRight, AxisTop } from '@visx/axis'
import { bisector } from 'd3-array'
import { Group } from '@visx/group'
import { Line, Bar } from '@visx/shape'
import { localPoint } from '@visx/event'
import { scaleTime, scaleLinear, scaleLog } from '@visx/scale'
import { Brush } from '@visx/brush'
import { Bounds } from '@visx/brush/lib/types'
import BaseBrush, { BaseBrushState, UpdateBrush } from '@visx/brush/lib/BaseBrush'
import { PatternLines } from '@visx/pattern'
import { LinearGradient } from '@visx/gradient'
import { max, extent } from 'd3-array'
import { BrushHandleRenderProps } from '@visx/brush/lib/BrushHandle'
import { Text } from '@visx/text'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'

// CDC Components
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import ConfigContext from '../ConfigContext'
import CoveBoxPlot from './BoxPlot'
import CoveScatterPlot from './ScatterPlot'
import DeviationBar from './DeviationBar'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Forecasting from './Forecasting'
import LineChart from './LineChart'
import ForestPlot from './ForestPlot'
import PairedBarChart from './PairedBarChart'
import useIntersectionObserver from './useIntersectionObserver'

// Hooks
import useMinMax from '../hooks/useMinMax'
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import useScales from '../hooks/useScales'
import useTopAxis from '../hooks/useTopAxis'
import { curveMonotoneX } from '@visx/curve'

// styles
import { defaultStyles } from '@visx/tooltip'
import '../scss/LinearChart.scss'

export default function LinearChart() {
  const { isEditor, isDashboard, transformedData: data, dimensions, config, parseDate, formatDate, currentViewport, formatNumber, handleChartAriaLabels, updateConfig, handleLineType, rawData, capitalize, setSharedFilter, setSharedFilterValue, getTextWidth, isDebug } = useContext(ConfigContext)

  // todo: start destructuring this file for conciseness
  const { visualizationType, visualizationSubType, orientation, xAxis, yAxis, runtime, debugSvg } = config

  const getDate = d => new Date(d[config.xAxis.dataKey])

  const initBrushData = () => {
    let brushFilteredData = new Set()
    config.data.filter(s => {
      const x = getDate(s).getTime()
      brushFilteredData.add(x) // just adds the time data x point not the entire data record
    })
    return brushFilteredData
  }

  // Initialize Brush variables - here for now
  const [xAxisBrushData, setXAxisBrushData] = useState(data) // initBrushData
  const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 }
  const chartSeparation = 30
  const PATTERN_ID = 'brush_pattern'
  const GRADIENT_ID = 'brush_gradient'
  const accentColor = '#ddd' // color of pattern slants '#ddd' // '#f6acc8' // light pink crosshairs
  const background = '#584153' // dark purple
  const background2 = '#af8baf' // light purple
  const selectedBrushStyle = {
    fill: `url(#${PATTERN_ID})`,
    stroke: 'red', // GRADIENT_ID,
    strokeWidth: 2 // does nothing
  }
  const styles = {
    border: '1px solid red'
  }
  const compact = false // do we even need this?

  // configure width
  let [width] = dimensions
  let originalWidth = width
  if (config && config.legend && !config.legend.hide && config.legend.position !== 'bottom' && ['lg', 'md'].includes(currentViewport)) {
    width = width * 0.73
  }
  //  configure height , yMax, xMax
  const { horizontal: heightHorizontal } = config.heights
  const isHorizontal = orientation === 'horizontal'
  const shouldAbbreviate = true
  let height = config.aspectRatio ? width * config.aspectRatio : config.visualizationType === 'Forest Plot' ? config.heights['vertical'] : config.heights[orientation]
  const xMax = width - runtime.yAxis.size - (visualizationType === 'Combo' ? config.yAxis.rightAxisSize : 0)
  let yMax = height - (orientation === 'horizontal' ? 0 : runtime.xAxis.size)

  if (config.visualizationType === 'Forest Plot') {
    height = height + config.data.length * config.forestPlot.rowHeight
    yMax = yMax + config.data.length * config.forestPlot.rowHeight
  }

  // MIGHT NOT NEED ALL OF THESE
  const innerHeight = height
  const topChartBottomMargin = compact ? chartSeparation / 2 : chartSeparation + 10
  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation
  const xMaxBrush = xMax
  let dynamicMarginTop = 0 || config.dynamicMarginTop // need to init this up top so calc for height can work
  const marginTop = 20
  let yMaxBrush = config.isResponsiveTicks && config.showChartBrush ? yMax + config.dynamicMarginTop / 4 + marginTop : yMax
  // account for brush data changes
  const brushData = undefined !== xAxisBrushData && xAxisBrushData.length ? xAxisBrushData : data

  // hooks  % states
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, brushData)
  // make brush set one time up front on original data
  const { minValue: minValueBrush, maxValue: maxValueBrush, existPositiveValue: existPositiveValueBrush, isAllLine: isAllLineBrush } = useMemo(() => useReduceData(config, data))
  const { yScaleRight, hasRightAxis } = useRightAxis({ config, yMax, data, updateConfig })
  const { hasTopAxis } = useTopAxis(config)
  const [animatedChart, setAnimatedChart] = useState(false)

  // refs
  const triggerRef = useRef()
  const svgRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })
  const brushRef = useRef(BaseBrush)

  // getters & functions
  const getXAxisData = d => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
  const getYAxisData = (d, seriesKey) => d[seriesKey]
  const xAxisDataMapped = brushData.map(d => getXAxisData(d))
  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'
  const properties = { data: brushData, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped, xMax, yMax }
  const { min, max } = useMinMax(properties)
  const { xScale, yScale, seriesScale, g1xScale, g2xScale, xScaleNoPadding } = useScales({ ...properties, min, max })

  // values sent to Brush dont change after initial render
  const isBrush = true
  const xAxisDataMappedBrush = data.map(d => getXAxisData(d))
  const propertiesBrush = { data, config, minValue: minValueBrush, maxValue: maxValueBrush, isAllLine: isAllLineBrush, existPositiveValue: existPositiveValueBrush, xAxisDataMapped: xAxisDataMappedBrush, xMax: xMaxBrush, yMax: yMaxBrush, isBrush }
  const { min: minBrush, max: maxBrush } = useMinMax(propertiesBrush)
  const { xScale: xScaleBrush, yScale: yScaleBrush, seriesScale: seriesScaleBrush, g1xScale: g1xScaleBrush, g2xScale: g2xScaleBrush, xScaleNoPadding: xScaleNoPaddingBrush, yScaleBrushTest } = useScales({ ...propertiesBrush, min: minBrush, max: maxBrush })

  // Helper for getting data to the closest date/category hovered.
  const getXValueFromCoordinateDate = x => {
    if (config.xAxis.type === 'categorical' || config.visualizationType === 'Combo') {
      let eachBand = xScale.step()
      let numerator = x
      const index = Math.floor(Number(numerator) / eachBand)
      return xScale.domain()[index - 1] // fixes off by 1 error
    }

    if (config.xAxis.type === 'date' && config.visualizationType !== 'Combo') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(xScale(x)) // GETTING INVALID DATE ****
      const index = bisectDate(config.data, x0, 1)
      const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
      return val
    }
  }

  const onBrushChange = domain => {
    if (!domain) return
    const { x0, x1 } = domain
    console.log('## onBrushChange domain x0, x1', domain, x0, x1)
    let brushFilteredData = []
    brushFilteredData = config.data.filter(s => {
      const x = getDate(s).getTime()
      console.log('# onBrushChange testing x0,x,x1, s', x0, x, x1, s)
      if (x > x0 && x < x1) {
        let date = formatDate(getXValueFromCoordinateDate(x))
        console.log('YES ADD', date)
        return s
      } else {
        console.log('### x not within brush bounds', x)
      }
    })

    // dont let the number of points go below config.xAxis.numTicks ??? (TT)
    if (undefined !== brushFilteredData && brushFilteredData.length >= 1) {
      console.log('Set new xAxisBrushdata to', brushFilteredData)
      setXAxisBrushData(brushFilteredData)
    }
  }

  // a unique id is needed for tooltips.
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`

  // sets the portal x/y for where tooltips should appear on the page.
  const [chartPosition, setChartPosition] = useState(null)
  useEffect(() => {
    setChartPosition(svgRef?.current?.getBoundingClientRect())
  }, [svgRef, config.legend])

  // resolved an issue here with Object.entries, label no longer used.
  const TooltipListItem = ({ item }) => {
    const [index, keyValue] = item
    const [key, value] = keyValue

    /**
     * find the original series and use the name property if available
     * otherwise default back to the original column name.
     * @param {String} input - original columnName
     * @returns user defined series name.
     */
    const getSeriesNameFromLabel = originalColumnName => {
      let series = config.series.filter(s => s.dataKey === originalColumnName)
      if (series[0]?.name) return series[0]?.name
      return originalColumnName
    }

    if (visualizationType === 'Forest Plot') {
      if (key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.xAxis.dataKey ? `${config.xAxis.dataKey}: ` : '')} ${config.yAxis.type === 'date' ? formatDate(parseDate(key, false)) : value}`}</li>
      return <li className='tooltip-body'>{`${getSeriesNameFromLabel(key)}: ${formatNumber(value, 'left')}`}</li>
    }

    if (key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ` : '')} ${config.xAxis.type === 'date' ? value : key}`}</li>
    return <li className='tooltip-body'>{`${getSeriesNameFromLabel(key)}: ${formatNumber(value, 'left')}`}</li>
  }

  const handleLeftTickFormatting = (tick, index) => {
    if (config.useLogScale && tick === 0.1) {
      //when logarithmic scale applied change value of first tick
      tick = 0
    }

    if (!config.data[index] && visualizationType === 'Forest Plot') return
    if (config.visualizationType === 'Forest Plot') return config.data[index][config.xAxis.dataKey]
    if (runtime.yAxis.type === 'date') return formatDate(parseDate(tick))
    if (orientation === 'vertical') return formatNumber(tick, 'left', shouldAbbreviate)
    return tick
  }

  const handleBottomTickFormatting = tick => {
    if (config.useLogScale && tick === 0.1) {
      // when logarithmic scale applied change value FIRST  of  tick
      tick = 0
    }
    if (runtime.xAxis.type === 'date') return formatDate(tick)
    if (orientation === 'horizontal') return formatNumber(tick, 'left', shouldAbbreviate)
    if (config.xAxis.type === 'continuous') return formatNumber(tick, 'bottom', shouldAbbreviate)
    return tick
  }

  const countNumOfTicks = axis => {
    const { numTicks } = runtime[axis]
    //console.log('xAxis, numTicks', config.runtime[axis], numTicks)
    let tickCount = undefined

    if (axis === 'yAxis') {
      tickCount = isHorizontal && !numTicks ? brushData.length : isHorizontal && numTicks ? numTicks : !isHorizontal && !numTicks ? undefined : !isHorizontal && numTicks && numTicks
      // to fix edge case of small numbers with decimals
      if (tickCount === undefined && !config.dataFormat.roundTo) {
        // then it is set to Auto
        if (Number(max) <= 3) {
          tickCount = 2
        } else {
          tickCount = 4 // same default as standalone components
        }
      }
      if (Number(tickCount) > Number(max)) {
        // cap it and round it so its an integer
        tickCount = Number(min) < 0 ? Math.round(max) * 2 : Math.round(max)
      }
    }

    if (axis === 'xAxis') {
      tickCount = isHorizontal && !numTicks ? undefined : isHorizontal && numTicks ? numTicks : !isHorizontal && !numTicks ? undefined : !isHorizontal && numTicks && numTicks
      //console.log('xAxis TERNARY tickCount=', tickCount)
      if (isHorizontal && tickCount === undefined && !config.dataFormat.roundTo) {
        // then it is set to Auto
        // - check for small numbers situation
        if (max <= 3) {
          tickCount = 2
        } else {
          tickCount = 4 // same default as standalone components
        }
      }
      //console.log('xAxis LAST tickCount=', tickCount)
    }
    return tickCount
  }

  // Tooltip helper for getting data to the closest date/category hovered.
  const getXValueFromCoordinate = x => {
    if (xScale.type === 'point') {
      // Find the closest x value by calculating the minimum distance
      let closestX = null
      let minDistance = Number.MAX_VALUE
      let offset = x - yAxis.size

      data.forEach(d => {
        const xPosition = xAxis.type === 'date' ? xScale(parseDate(d[xAxis.dataKey])) : xScale(d[xAxis.dataKey])
        const distance = Math.abs(Number(xPosition - offset))

        if (distance < minDistance) {
          minDistance = distance
          closestX = xAxis.type === 'date' ? parseDate(d[xAxis.dataKey]) : d[xAxis.dataKey]
        }
      })
      return closestX
    }

    if ((config.xAxis.type === 'categorical' || visualizationType === 'Combo') && visualizationType !== 'Forest Plot') {
      let eachBand = xScale.step()
      let numerator = x
      const index = Math.floor(Number(numerator) / eachBand)
      return xScale.domain()[index - 1] // fixes off by 1 error
    }

    if (config.xAxis.type === 'date' && visualizationType !== 'Combo') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(x)
      const index = bisectDate(config.data, x0, 1)
      const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
      return val
    }
  }

  // visx tooltip hook
  const { tooltipData, showTooltip, hideTooltip, tooltipOpen } = useTooltip()

  /**
   * handleTooltipClick - used on dashboard filters
   *  with visx tooltips, the handler is overwritten and we have to get the closest
   *  x axis value.
   * TODO: move tooltip handlers to there own hook.
   * @param {*} e
   * @param {*} data
   */
  const handleTooltipClick = (e, data) => {
    try {
      // Get the closest x axis value from the pointer.
      // After getting the closest value, return the data entry with that x scale value.
      // Pass the config.visual uid (not uuid) along with that data entry to setSharedFilters
      const eventSvgCoords = localPoint(e)
      const { x } = eventSvgCoords
      if (!x) throw new Error('COVE: no x value in handleTooltipClick.')
      let closestXScaleValue = getXValueFromCoordinate(x)
      if (!closestXScaleValue) throw new Error('COVE: no closest x scale value in handleTooltipClick')
      let datum = config.data.filter(item => item[config.xAxis.dataKey] === closestXScaleValue)

      if (setSharedFilter) {
        setSharedFilter(config.uid, datum[0])
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message)
    }
  }

  // cant do this in handleTooltipMouseOver bc isBrush set manually into the charts below
  const disableMouseOver = (e, data) => {
    return () => null
  }

  // Tooltip helper for getting data to the closest y value hovered.
  const handleForestPlotMouseOver = (e, inputData) => {
    const eventSvgCoords = localPoint(e)

    if (!eventSvgCoords) return
    const { x, y } = eventSvgCoords

    // Function to get the closest y-axis value from the cursor's position
    // Function to get the closest y-axis value from the cursor's position
    const getClosestYValue = yPosition => {
      let minDistance = Number.MAX_VALUE
      let closestYValue = null

      data.forEach((d, index) => {
        const yPositionOnPlot = yScale(index)
        const distance = Math.abs(yPositionOnPlot - yPosition)

        if (distance < minDistance) {
          minDistance = distance
          closestYValue = d[config.xAxis.dataKey]
        }
      })
      return closestYValue
    }

    const xValue = data.filter(d => d[xAxis.dataKey] === getClosestYValue(y))[0][config.forestPlot.estimateField]

    let standardLoopItems = [
      [config.xAxis.dataKey, getClosestYValue(y)],
      ['Estimate', xValue]
    ]

    let initialTooltipData = standardLoopItems ? standardLoopItems : {}

    let tooltipData = {}
    tooltipData.data = initialTooltipData
    tooltipData.dataXPosition = isEditor ? x - 300 + 10 : x + 10
    tooltipData.dataYPosition = y

    let tooltipInformation = {
      tooltipData: tooltipData,
      tooltipTop: 0,
      tooltipValues: 'test',
      tooltipLeft: x
    }

    showTooltip(tooltipInformation)
  }

  /**
   *
   * @param {*} closestXScaleValue
   * @param {*} includedSeries
   * @returns an array of objects with the closest x and y series data items
   * see example below
   * [{
        "Data 1": "foo",
        "Data 2": "1350",
        "Data 3": "300",
        "Data 4": "950",
        "Data 5": "1200",
        "Data 6": "3100",
        "Date": "1/15/2016"
      }]
   */
  const getYScaleValues = (closestXScaleValue, includedSeries) => {
    const formattedDate = formatDate(closestXScaleValue)

    let dataToSearch
    if (xAxis.type === 'categorical') {
      dataToSearch = data.filter(d => d[xAxis.dataKey] === closestXScaleValue)
    } else {
      dataToSearch = rawData.filter(d => formatDate(parseDate(d[xAxis.dataKey])) === formattedDate)
    }

    // Return an empty array if no matching data is found.
    if (!dataToSearch || dataToSearch.length === 0) {
      return []
    }

    const yScaleValues = dataToSearch.map(object => {
      return Object.fromEntries(Object.entries(object).filter(([key, value]) => includedSeries.includes(key)))
    })

    return yScaleValues
  }

  const getIncludedTooltipSeries = () => {
    let standardLoopItems

    let stageColumns = []
    let ciItems = []

    // loop through series for items to add to tooltip.
    // there is probably a better way of doing this.
    config.series?.forEach(s => {
      if (s.type === 'Forecasting') {
        stageColumns.push(s.stageColumn)

        // greedy fn 😭
        s?.confidenceIntervals.forEach(ci => {
          if (ci.showInTooltip === true) {
            ciItems.push(ci.low)
            ciItems.push(ci.high)
          }
        })
      }
    })

    if (!config.dashboard) {
      switch (visualizationType) {
        case 'Combo':
          standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.barSeriesKeys, ...runtime?.lineSeriesKeys, ...stageColumns, ...ciItems]
          break
        case 'Forecasting':
          standardLoopItems = [runtime.xAxis.dataKey, ...stageColumns, ...ciItems]
          break
        case 'Line':
          standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.seriesKeys]
          break
        case 'Bar':
          standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.seriesKeys]
          break
        default:
          console.info('COVE: no visualization type found in handleTooltipMouseOver')
          break
      }
    }

    if (config.dashboard) {
      standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.barSeriesKeys, ...runtime?.lineSeriesKeys, ...stageColumns, ...ciItems]
    }

    return standardLoopItems
  }

  // todo: combine mouseover functions
  const handleTooltipMouseOver = async (e, data) => {
    // get the svg coordinates of the mouse
    const eventSvgCoords = localPoint(e)
    const { x, y } = eventSvgCoords

    // get the closest x value & format the date if
    let closestXScaleValue = getXValueFromCoordinate(x)

    //  keep track of the series that have tooltip.show equals true.
    // and remember to push the xaxis data key on top
    let includedSeries = config.series.filter(series => series.tooltip === true).map(item => item.dataKey)
    includedSeries.push(config.xAxis.dataKey)

    // returns ALL data closest object with key value paris of thes series.
    const yScaleValues = getYScaleValues(closestXScaleValue, includedSeries)

    // standard loop items format ['Date', 'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6']
    const standardLoopItems = getIncludedTooltipSeries()

    let seriesToInclude = []

    standardLoopItems.map(seriesKey => {
      if (!seriesKey) return false
      if (!yScaleValues[0]) return false
      for (const series of Object.entries(yScaleValues[0])) {
        if (series[0] === seriesKey) {
          seriesToInclude.push(series)
        }
      }
    })

    // filter out the series that aren't added to the map.
    if (!seriesToInclude) return
    let initialTooltipData = seriesToInclude ? seriesToInclude : {}

    let tooltipData = {}
    tooltipData.data = initialTooltipData
    tooltipData.dataXPosition = isEditor ? x - 300 + 10 : x + 10
    tooltipData.dataYPosition = y

    let tooltipInformation = {
      tooltipData: tooltipData,
      tooltipTop: 0,
      tooltipValues: yScaleValues,
      tooltipLeft: x
    }

    showTooltip(tooltipInformation)
  }

  const handleTooltipMouseOff = () => {
    if (config.visualizationType === 'Area Chart') {
      setTimeout(() => {
        hideTooltip()
      }, 3000)
    } else {
      hideTooltip()
    }
  }

  // Make sure the chart is visible if in the editor
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const element = document.querySelector('.isEditor')
    if (element) {
      // parent element is visible
      setAnimatedChart(prevState => true)
    }
  }) /* eslint-disable-line */

  // If the chart is in view, set to animate if it has not already played
  useEffect(() => {
    if (dataRef?.isIntersecting === true && config.animate) {
      setTimeout(() => {
        setAnimatedChart(prevState => true)
      }, 500)
    }
  }, [dataRef?.isIntersecting, config.animate])

  const chartHasTooltipGuides = () => {
    const { visualizationType } = config
    if (visualizationType === 'Combo' && runtime.forecastingSeriesKeys > 0) return true
    if (visualizationType === 'Area Chart') return true
    if (visualizationType === 'Line') return true
    if (visualizationType === 'Bar') return true
    return false
  }

  // todo: combine mouse over functions
  const handleAreaTooltipMouseOver = (e, data) => {
    // get the svg coordinates of the mouse
    // and get the closest values
    const eventSvgCoords = localPoint(e)
    const { x, y } = eventSvgCoords
    let closestXScaleValue = getXValueFromCoordinate(x)

    let formattedDate = formatDate(closestXScaleValue)

    let yScaleValues
    if (config.xAxis.type === 'categorical') {
      yScaleValues = data.filter(d => d[config.xAxis.dataKey] === closestXScaleValue)
    } else {
      yScaleValues = data.filter(d => formatDate(parseDate(d[config.xAxis.dataKey])) === formattedDate)
    }

    let seriesToInclude = []
    let yScaleMaxValues = []
    let itemsToLoop = [runtime.xAxis.dataKey, ...runtime.seriesKeys]

    itemsToLoop.map(seriesKey => {
      if (!seriesKey) return false
      if (!yScaleValues[0]) return false
      for (const item of Object.entries(yScaleValues[0])) {
        if (item[0] === seriesKey) {
          seriesToInclude.push(item)
        }
      }
    })

    // filter out the series that aren't added to the map.
    seriesToInclude.map(series => yScaleMaxValues.push(Number(yScaleValues[0][series])))
    if (!seriesToInclude) return
    let tooltipDataFromSeries = seriesToInclude ? seriesToInclude : {}

    let tooltipData = {}
    tooltipData.data = tooltipDataFromSeries
    tooltipData.dataXPosition = x + 0
    tooltipData.dataYPosition = y

    let tooltipInformation = {
      tooltipData: tooltipData,
      tooltipTop: 0,
      tooltipValues: yScaleValues,
      tooltipLeft: x
    }
    showTooltip(tooltipInformation)
  }

  const tooltipStyles = tooltipData => {
    const { dataXPosition, dataYPosition } = tooltipData

    return {
      opacity: config.tooltips.opacity ? config.tooltips.opacity / 100 : 1,
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: '4px',
      transform: `translate(${dataXPosition}px, ${Number(dataYPosition)}px)`
    }
  }

  // We need to manually offset the handles for them to be rendered at the right position
  function BrushHandle(BrushHandleRenderProps) {
    const x = BrushHandleRenderProps.x
    const height = BrushHandleRenderProps.height
    const isBrushActive = BrushHandleRenderProps.isBrushActive
    const pathWidth = 8
    const pathHeight = 15
    if (!isBrushActive) {
      return null
    }
    return (
      <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
        <path fill='#f2f2f2' d='M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12' stroke='#999999' strokeWidth='1' style={{ cursor: 'ew-resize' }} />
      </Group>
    )
  }

  // this controls where the brush handles are intiially
  // - 0, xMax basically have the handles flush to each end of the area
  const initialBrushPosition = useMemo(
    () => ({
      start: { x: 0 },
      end: { x: xMax }
    }),
    [xScale]
  )

  const padding = orientation === 'horizontal' ? Number(config.xAxis.size) : Number(config.yAxis.size)

  const getChartHeight = useMemo(() => {
    if (isNaN(height)) return 0

    let tmpHeight = height // bc height is const
    // I dont know why but the math setting height does not add up and needs adjustments
    let xtraBuffer = 0
    if (Number(runtime.xAxis.size) > 50) {
      xtraBuffer = ((runtime.xAxis.size - 50) / 10) * 3.1
      if (isEditor) {
        if (!config.isResponsiveTicks) {
          xtraBuffer -= 2 // dont know why but its off
        } else {
          xtraBuffer += ((runtime.xAxis.size - 60) / 10) * 3
          if (Number(runtime.xAxis.size) > 80) {
            xtraBuffer -= ((runtime.xAxis.size - 80) / 10) * 2 // yes subtract it
          }
        }
      }
      if (isDashboard) {
        if (!config.isResponsiveTicks) {
          xtraBuffer -= 2 // dont know why but its off
        } else {
          xtraBuffer += (runtime.xAxis.size - 50) / 10 // + 1
          if (Number(runtime.xAxis.size) >= 80) {
            xtraBuffer -= 2 // += ((runtime.xAxis.size - 80) / 10) * 2 // yes subtract it
          }
        }
      }
    }
    if (Number(runtime.xAxis.size) < 50) {
      xtraBuffer = ((50 - runtime.xAxis.size) / 10) * 4.2
      if (isEditor) {
        if (!config.isResponsiveTicks) {
          xtraBuffer -= ((50 - runtime.xAxis.size) / 10) * 3 // dont know why but its off
          if (Number(runtime.xAxis.size) < 25) {
            xtraBuffer += 2
          }
        } else {
          xtraBuffer += (60 - runtime.xAxis.size) / 10
        }
      }
      if (isDashboard) {
        if (!config.isResponsiveTicks) {
          xtraBuffer -= (50 - runtime.xAxis.size) / 10 // * 3 // dont know why but its off
          if (Number(runtime.xAxis.size) < 25) {
            xtraBuffer += 2
          }
        } else {
          xtraBuffer += ((50 - runtime.xAxis.size) / 10) * 2 + 1
        }
      }
    }
    if (config.showChartBrush) {
      // need to account for SIZE (HEIGHT) which is mapped to padding?
      if (runtime.xAxis.size > 50) {
        tmpHeight -= runtime.xAxis.size - 50
      } else {
        tmpHeight += 50 - runtime.xAxis.size
      }
      //console.log('padding config.yAxis.size runtime.XAxis.size tmpHeight xtraBuffer', padding, config.yAxis.size, config.runtime.xAxis.size, tmpHeight, xtraBuffer)
      if (!config.isResponsiveTicks) {
        return runtime.xAxis.size > 50 ? (tmpHeight - xtraBuffer) * 1.3 : (tmpHeight + xtraBuffer) * 1.3
      } else {
        tmpHeight = (tmpHeight + dynamicMarginTop) * 1.3 - yMaxBrush * 0.25 - marginTop / 4
        return runtime.xAxis.size > 50 ? tmpHeight - xtraBuffer : tmpHeight + xtraBuffer
      }
    } else {
      return tmpHeight
    }
  })

  const handleNumTicks = () => {
    // On forest plots we need to return every "study" or y axis value.
    if (config.visualizationType === 'Forest Plot') return config.data.length
    return countNumOfTicks('yAxis')
  }

  return isNaN(width) ? (
    <React.Fragment></React.Fragment>
  ) : (
    <ErrorBoundary component='LinearChart'>
      {/* width has to accommodate brush handle on right if enabled */}
      <svg width={config.showChartBrush ? width + 5 : width} height={getChartHeight} className={`linear ${config.animate ? 'animated' : ''} ${animatedChart && config.animate ? 'animate' : ''} ${debugSvg && 'debug'}`} role='img' aria-label={handleChartAriaLabels(config)} tabIndex={0} ref={svgRef}>
        <Bar width={width} height={getChartHeight} fill={'transparent'}></Bar>
        {/* Highlighted regions */}
        {config.regions
          ? config.regions.map(region => {
              if (!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null

              let from
              let to
              let width

              if (config.xAxis.type === 'date') {
                from = xScale(parseDate(region.from).getTime())
                to = xScale(parseDate(region.to).getTime())
                width = to - from
              }

              if (config.xAxis.type === 'categorical') {
                from = xScale(region.from)
                to = xScale(region.to)
                width = to - from
              }

              if (!from) return null
              if (!to) return null

              return (
                <Group className='regions' left={Number(runtime.yAxis.size)} key={region.label}>
                  <path
                    stroke='#333'
                    d={`M${from} -5
                          L${from} 5
                          M${from} 0
                          L${to} 0
                          M${to} -5
                          L${to} 5`}
                  />
                  <rect x={from} y={0} width={width} height={yMax} fill={region.background} opacity={0.3} />
                  <Text x={from + width / 2} y={5} fill={region.color} verticalAnchor='start' textAnchor='middle'>
                    {region.label}
                  </Text>
                </Group>
              )
            })
          : ''}
        {/* Y axis */}
        {!['Spark Line', 'Forest Plot'].includes(visualizationType) && (
          <AxisLeft scale={yScale} tickLength={config.useLogScale ? 6 : 8} left={Number(runtime.yAxis.size) - config.yAxis.axisPadding} label={runtime.yAxis.label} stroke='#333' tickFormat={(tick, i) => handleLeftTickFormatting(tick, i)} numTicks={handleNumTicks()}>
            {props => {
              const axisCenter = runtime.horizontal ? (props.axisToPoint.y - props.axisFromPoint.y) / 2 : (props.axisFromPoint.y - props.axisToPoint.y) / 2
              const horizontalTickOffset = yMax / props.ticks.length / 2 - (yMax / props.ticks.length) * (1 - config.barThickness) + 5
              return (
                <Group className='left-axis'>
                  {props.ticks.map((tick, i) => {
                    const minY = props.ticks[0].to.y
                    const barMinHeight = 15 // 15 is the min height for bars by default
                    const showTicks = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
                    const tickLength = showTicks === 'block' ? 7 : 0
                    const to = { x: tick.to.x - tickLength, y: tick.to.y }

                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                        {!runtime.yAxis.hideTicks && <Line key={`${tick.value}--hide-hideTicks`} from={tick.from} to={config.useLogScale ? to : tick.to} stroke={config.yAxis.tickColor} display={runtime.horizontal ? 'none' : 'block'} />}

                        {runtime.yAxis.gridLines ? <Line key={`${tick.value}--hide-hideGridLines`} display={(config.useLogScale && showTicks).toString()} from={{ x: tick.from.x + xMax, y: tick.from.y }} to={tick.from} stroke='rgba(0,0,0,0.3)' /> : ''}

                        {orientation === 'horizontal' && visualizationSubType !== 'stacked' && config.yAxis.labelPlacement === 'On Date/Category Axis' && !config.yAxis.hideLabel && (
                          <Text
                            transform={`translate(${tick.to.x - 5}, ${config.isLollipopChart ? tick.to.y - minY : tick.to.y - minY + (Number(config.barHeight * config.series.length) - barMinHeight) / 2}) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation || 0 : 0})`}
                            verticalAnchor={'start'}
                            textAnchor={'end'}
                          >
                            {tick.formattedValue}
                          </Text>
                        )}

                        {orientation === 'horizontal' && visualizationSubType === 'stacked' && config.yAxis.labelPlacement === 'On Date/Category Axis' && !config.yAxis.hideLabel && (
                          <Text transform={`translate(${tick.to.x - 5}, ${tick.to.y - minY + (Number(config.barHeight) - barMinHeight) / 2}) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`} verticalAnchor={'start'} textAnchor={'end'}>
                            {tick.formattedValue}
                          </Text>
                        )}

                        {orientation === 'horizontal' && visualizationType === 'Paired Bar' && !config.yAxis.hideLabel && (
                          <Text transform={`translate(${tick.to.x - 5}, ${tick.to.y - minY + Number(config.barHeight) / 2}) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`} textAnchor={'end'} verticalAnchor='middle'>
                            {tick.formattedValue}
                          </Text>
                        )}
                        {orientation === 'horizontal' && visualizationType === 'Deviation Bar' && !config.yAxis.hideLabel && (
                          <Text transform={`translate(${tick.to.x - 5}, ${config.isLollipopChart ? tick.to.y - minY + 2 : tick.to.y - minY + Number(config.barHeight) / 2}) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`} textAnchor={'end'} verticalAnchor='middle'>
                            {tick.formattedValue}
                          </Text>
                        )}

                        {orientation === 'vertical' && visualizationType !== 'Paired Bar' && !config.yAxis.hideLabel && (
                          <Text
                            display={config.useLogScale ? showTicks : 'block'}
                            dx={config.useLogScale ? -6 : 0}
                            x={config.runtime.horizontal ? tick.from.x + 2 : tick.to.x}
                            y={tick.to.y + (config.runtime.horizontal ? horizontalTickOffset : 0)}
                            angle={-Number(config.yAxis.tickRotation) || 0}
                            verticalAnchor={config.runtime.horizontal ? 'start' : 'middle'}
                            textAnchor={config.runtime.horizontal ? 'start' : 'end'}
                            fill={config.yAxis.tickLabelColor}
                          >
                            {tick.formattedValue}
                          </Text>
                        )}
                      </Group>
                    )
                  })}
                  {!config.yAxis.hideAxis && <Line from={props.axisFromPoint} to={runtime.horizontal ? { x: 0, y: config.visualizationType === 'Forest Plot' ? height : Number(heightHorizontal) } : props.axisToPoint} stroke='#000' />}
                  {yScale.domain()[0] < 0 && <Line from={{ x: props.axisFromPoint.x, y: yScale(0) }} to={{ x: xMax, y: yScale(0) }} stroke='#333' />}
                  {visualizationType === 'Bar' && orientation === 'horizontal' && xScale.domain()[0] < 0 && <Line from={{ x: xScale(0), y: 0 }} to={{ x: xScale(0), y: yMax }} stroke='#333' strokeWidth={2} />}
                  <Text className='y-label' textAnchor='middle' verticalAnchor='start' transform={`translate(${-1 * runtime.yAxis.size}, ${axisCenter}) rotate(-90)`} fontWeight='bold' fill={config.yAxis.labelColor}>
                    {props.label}
                  </Text>
                </Group>
              )
            }}
          </AxisLeft>
        )}
        {/* Right Axis */}
        {hasRightAxis && (
          <AxisRight scale={yScaleRight} left={Number(width - config.yAxis.rightAxisSize)} label={config.yAxis.rightLabel} tickFormat={tick => formatNumber(tick, 'right')} numTicks={runtime.yAxis.rightNumTicks || undefined} labelOffset={45}>
            {props => {
              const axisCenter = runtime.horizontal ? (props.axisToPoint.y - props.axisFromPoint.y) / 2 : (props.axisFromPoint.y - props.axisToPoint.y) / 2
              const horizontalTickOffset = yMax / props.ticks.length / 2 - (yMax / props.ticks.length) * (1 - config.barThickness) + 5
              return (
                <Group className='right-axis'>
                  {props.ticks.map((tick, i) => {
                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className='vx-axis-tick'>
                        {!runtime.yAxis.rightHideTicks && <Line from={tick.from} to={tick.to} display={runtime.horizontal ? 'none' : 'block'} stroke={config.yAxis.rightAxisTickColor} />}

                        {runtime.yAxis.rightGridLines ? <Line from={{ x: tick.from.x + xMax, y: tick.from.y }} to={tick.from} stroke='rgba(0,0,0,0.3)' /> : ''}

                        {!config.yAxis.rightHideLabel && (
                          <Text x={tick.to.x} y={tick.to.y + (runtime.horizontal ? horizontalTickOffset : 0)} verticalAnchor={runtime.horizontal ? 'start' : 'middle'} textAnchor={'start'} fill={config.yAxis.rightAxisTickLabelColor}>
                            {tick.formattedValue}
                          </Text>
                        )}
                      </Group>
                    )
                  })}
                  {!config.yAxis.rightHideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                  <Text className='y-label' textAnchor='middle' verticalAnchor='start' transform={`translate(${config.yAxis.rightLabelOffsetSize ? config.yAxis.rightLabelOffsetSize : 0}, ${axisCenter}) rotate(-90)`} fontWeight='bold' fill={config.yAxis.rightAxisLabelColor}>
                    {props.label}
                  </Text>
                </Group>
              )
            }}
          </AxisRight>
        )}
        {hasTopAxis && config.topAxis.hasLine && (
          <AxisTop
            stroke='#333'
            left={Number(runtime.yAxis.size)}
            scale={xScale}
            hideTicks
            hideZero
            tickLabelProps={() => ({
              fill: 'transparent'
            })}
          />
        )}
        {/* X axis */}
        {visualizationType !== 'Paired Bar' && visualizationType !== 'Spark Line' && (
          <AxisBottom
            top={runtime.horizontal && config.visualizationType !== 'Forest Plot' ? Number(heightHorizontal) + Number(config.xAxis.axisPadding) : config.visualizationType === 'Forest Plot' ? yMax + Number(config.xAxis.axisPadding) : yMax + Number(config.xAxis.axisPadding)}
            left={Number(runtime.yAxis.size)}
            label={runtime.xAxis.label}
            tickFormat={handleBottomTickFormatting}
            scale={xScale}
            stroke='#333'
            numTicks={countNumOfTicks('xAxis')}
            tickStroke='#333'
          >
            {props => {
              const axisCenter = config.visualizationType !== 'Forest Plot' ? (props.axisToPoint.x - props.axisFromPoint.x) / 2 : width / 2
              const containsMultipleWords = inputString => /\s/.test(inputString)
              const ismultiLabel = props.ticks.some(tick => containsMultipleWords(tick.value))

              // Calculate sumOfTickWidth here, before map function
              const fontSize = { small: 16, medium: 18, large: 20 }
              const defaultTickLength = 8
              const tickWidthMax = Math.max(...props.ticks.map(tick => getTextWidth(tick.formattedValue, `normal ${fontSize[config.fontSize]}px sans-serif`)))
              // const marginTop = 20 // moved to top bc need for yMax calcs
              const accumulator = ismultiLabel ? 180 : 100

              const textWidths = props.ticks.map(tick => getTextWidth(tick.formattedValue, `normal ${fontSize[config.fontSize]}px sans-serif`))
              const sumOfTickWidth = textWidths.reduce((a, b) => a + b, accumulator)
              const spaceBetweenEachTick = (xMax - sumOfTickWidth) / (props.ticks.length - 1)

              // Check if ticks are overlapping
              // Determine the position of each tick
              let positions = [0] // The first tick is at position 0
              for (let i = 1; i < textWidths.length; i++) {
                // The position of each subsequent tick is the position of the previous tick
                // plus the width of the previous tick and the space
                positions[i] = positions[i - 1] + textWidths[i - 1] + spaceBetweenEachTick
              }

              // Check if ticks are overlapping
              let areTicksTouching = false
              textWidths.forEach((_, i) => {
                if (positions[i] + textWidths[i] > positions[i + 1]) {
                  areTicksTouching = true
                  return
                }
              })

              dynamicMarginTop = areTicksTouching && config.isResponsiveTicks ? tickWidthMax + defaultTickLength + marginTop : 0
              config.dynamicMarginTop = dynamicMarginTop

              return (
                <Group className='bottom-axis'>
                  {props.ticks.map((tick, i, propsTicks) => {
                    // when using LogScale show major ticks values only
                    const showTick = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
                    const tickLength = showTick === 'block' ? 16 : defaultTickLength
                    const to = { x: tick.to.x, y: tickLength }
                    let textWidth = getTextWidth(tick.formattedValue, `normal ${fontSize[config.fontSize]}px sans-serif`)
                    let limitedWidth = 100 / propsTicks.length
                    //reset rotations by updating config
                    config.yAxis.tickRotation = config.isResponsiveTicks && config.orientation === 'horizontal' ? 0 : config.yAxis.tickRotation
                    config.xAxis.tickRotation = config.isResponsiveTicks && config.orientation === 'vertical' ? 0 : config.xAxis.tickRotation
                    //configure rotation

                    const tickRotation = config.isResponsiveTicks && areTicksTouching ? -Number(config.xAxis.maxTickRotation) || -90 : -Number(config.runtime.xAxis.tickRotation)

                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                        {!config.xAxis.hideTicks && <Line from={tick.from} to={orientation === 'horizontal' && config.useLogScale ? to : tick.to} stroke={config.xAxis.tickColor} strokeWidth={showTick === 'block' ? 1.3 : 1} />}
                        {!config.xAxis.hideLabel && (
                          <Text
                            dy={config.orientation === 'horizontal' && config.useLogScale ? 8 : 0}
                            display={config.orientation === 'horizontal' && config.useLogScale ? showTick : 'block'}
                            x={tick.to.x}
                            y={tick.to.y}
                            angle={tickRotation}
                            verticalAnchor={tickRotation < -50 ? 'middle' : 'start'}
                            textAnchor={tickRotation ? 'end' : 'middle'}
                            width={areTicksTouching && !config.isResponsiveTicks && !Number(config[section].tickRotation) ? limitedWidth : textWidth}
                            fill={config.xAxis.tickLabelColor}
                          >
                            {tick.formattedValue}
                          </Text>
                        )}
                      </Group>
                    )
                  })}
                  {!config.xAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                  <Text x={axisCenter} y={config.orientation === 'horizontal' ? dynamicMarginTop || config.xAxis.labelOffset : dynamicMarginTop || config.xAxis.size} textAnchor='middle' fontWeight='bold' fill={config.xAxis.labelColor}>
                    {props.label}
                  </Text>
                </Group>
              )
            }}
          </AxisBottom>
        )}

        {visualizationType === 'Paired Bar' && (
          <>
            <AxisBottom top={yMax} left={Number(runtime.yAxis.size)} label={runtime.xAxis.label} tickFormat={runtime.xAxis.type === 'date' ? formatDate : formatNumber} scale={g1xScale} stroke='#333' tickStroke='#333' numTicks={runtime.xAxis.numTicks || undefined}>
              {props => {
                return (
                  <Group className='bottom-axis'>
                    {props.ticks.map((tick, i) => {
                      const angle = tick.index !== 0 ? config.yAxis.tickRotation : 0
                      const textAnchor = tick.index !== 0 && config.yAxis.tickRotation && config.yAxis.tickRotation > 0 ? 'end' : 'middle'
                      return (
                        <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                          {!runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                          {!runtime.yAxis.hideLabel && (
                            <Text x={tick.to.x} y={tick.to.y} angle={-angle} verticalAnchor='start' textAnchor={textAnchor}>
                              {formatNumber(tick.value, 'left')}
                            </Text>
                          )}
                        </Group>
                      )
                    })}
                    {!runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                  </Group>
                )
              }}
            </AxisBottom>
            <AxisBottom
              top={yMax}
              left={Number(runtime.yAxis.size)}
              label={runtime.xAxis.label}
              tickFormat={runtime.xAxis.type === 'date' ? formatDate : runtime.xAxis.dataKey !== 'Year' ? formatNumber : tick => tick}
              scale={g2xScale}
              stroke='#333'
              tickStroke='#333'
              numTicks={runtime.xAxis.numTicks || undefined}
            >
              {props => {
                return (
                  <>
                    <Group className='bottom-axis'>
                      {props.ticks.map((tick, i) => {
                        const angle = tick.index !== 0 ? config.yAxis.tickRotation : 0
                        const textAnchor = tick.index !== 0 && config.yAxis.tickRotation && config.yAxis.tickRotation > 0 ? 'end' : 'middle'
                        return (
                          <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                            {!runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                            {!runtime.yAxis.hideLabel && (
                              <Text x={tick.to.x} y={tick.to.y} angle={-angle} verticalAnchor='start' textAnchor={textAnchor}>
                                {formatNumber(tick.value, 'left')}
                              </Text>
                            )}
                          </Group>
                        )
                      })}
                      {!runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                    </Group>
                    <Group>
                      <Text x={xMax / 2} y={config.xAxis.labelOffset} stroke='#333' textAnchor={'middle'} verticalAnchor='start'>
                        {runtime.xAxis.label}
                      </Text>
                    </Group>
                  </>
                )
              }}
            </AxisBottom>
          </>
        )}
        {visualizationType === 'Deviation Bar' && <DeviationBar xScale={xScale} yScale={yScale} width={xMax} height={yMax} />}
        {visualizationType === 'Paired Bar' && <PairedBarChart originalWidth={width} width={xMax} height={yMax} />}
        {visualizationType === 'Scatter Plot' && <CoveScatterPlot xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />}
        {visualizationType === 'Box Plot' && <CoveBoxPlot xScale={xScale} yScale={yScale} />}
        {(visualizationType === 'Area Chart' || visualizationType === 'Combo') && (
          <AreaChart xScale={xScale} yScale={yScale} yMax={yMax} xMax={xMax} brushData={brushData} chartRef={svgRef} width={xMax} height={yMax} handleTooltipMouseOver={handleAreaTooltipMouseOver} handleTooltipMouseOff={handleTooltipMouseOff} tooltipData={tooltipData} showTooltip={showTooltip} />
        )}
        {(visualizationType === 'Bar' || visualizationType === 'Combo') && (
          <BarChart
            xScale={xScale}
            yScale={yScale}
            seriesScale={seriesScale}
            xMax={xMax}
            yMax={yMax}
            getXAxisData={getXAxisData}
            getYAxisData={getYAxisData}
            animatedChart={animatedChart}
            visible={animatedChart}
            handleTooltipMouseOver={handleTooltipMouseOver}
            handleTooltipMouseOff={handleTooltipMouseOff}
            handleTooltipClick={handleTooltipClick}
            tooltipData={tooltipData}
            showTooltip={showTooltip}
            chartRef={svgRef}
          />
        )}
        {(visualizationType === 'Line' || visualizationType === 'Combo') && (
          <LineChart
            xScale={xScale}
            yScale={yScale}
            getXAxisData={getXAxisData}
            getYAxisData={getYAxisData}
            xMax={xMax}
            yMax={yMax}
            seriesStyle={config.series}
            handleTooltipMouseOver={handleTooltipMouseOver}
            handleTooltipMouseOff={handleTooltipMouseOff}
            handleTooltipClick={handleTooltipClick}
            tooltipData={tooltipData}
            showTooltip={showTooltip}
            chartRef={svgRef}
          />
        )}
        {(visualizationType === 'Forecasting' || visualizationType === 'Combo') && (
          <Forecasting
            showTooltip={showTooltip}
            tooltipData={tooltipData}
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            le
            height={yMax}
            xScaleNoPadding={xScaleNoPadding}
            chartRef={svgRef}
            getXValueFromCoordinate={getXValueFromCoordinate}
            handleTooltipMouseOver={handleTooltipMouseOver}
            handleTooltipMouseOff={handleTooltipMouseOff}
            isBrush={false}
          />
        )}
        {/* brush */}
        {config.showChartBrush && (config.visualizationType === 'Area Chart' || config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && (
          <>
            <AreaChart className='brushChart' xScale={xScaleBrush} yScale={yScaleBrush} yMax={yMaxBrush} xMax={xMaxBrush} height={yMaxBrush / 4} chartRef={svgRef} handleTooltipMouseOver={disableMouseOver} handleTooltipMouseOff={disableMouseOver} isDebug={isDebug} isBrush={true}>
              <PatternLines id={PATTERN_ID} height={8} width={8} stroke={accentColor} strokeWidth={1} orientation={['diagonal']} style={styles} />
              <Brush
                id='theBrush'
                className='theBrush'
                xScale={xScaleBrush}
                yScale={yScaleBrush}
                width={xMaxBrush}
                height={yMaxBrush / 4}
                margin={0}
                handleSize={8}
                innerRef={brushRef}
                resizeTriggerAreas={['left', 'right']}
                brushDirection='horizontal'
                initialBrushPosition={initialBrushPosition}
                onChange={onBrushChange}
                selectedBoxStyle={selectedBrushStyle}
                useWindowMoveEvents
                renderBrushHandle={props => <BrushHandle {...props} />}
                style={styles}
              />
            </AreaChart>
          </>
        )}

        {/* y anchors */}
        {config.yAxis.anchors &&
          config.yAxis.anchors.map(anchor => {
            return <Line strokeDasharray={handleLineType(anchor.lineStyle)} stroke='rgba(0,0,0,1)' className='customAnchor' from={{ x: 0 + config.yAxis.size, y: yScale(anchor.value) }} to={{ x: xMax, y: yScale(anchor.value) }} display={runtime.horizontal ? 'none' : 'block'} />
          })}
        {visualizationType === 'Forest Plot' && (
          <ForestPlot
            xScale={xScale}
            yScale={yScale}
            seriesScale={seriesScale}
            width={xMax}
            height={yMax}
            maxWidth={width}
            maxHeight={height}
            getXAxisData={getXAxisData}
            getYAxisData={getYAxisData}
            animatedChart={animatedChart}
            visible={animatedChart}
            handleTooltipMouseOver={handleForestPlotMouseOver}
            handleTooltipMouseOff={handleTooltipMouseOff}
            handleTooltipClick={handleTooltipClick}
            tooltipData={tooltipData}
            showTooltip={showTooltip}
            chartRef={svgRef}
            config={config}
          />
        )}

        {/* Line chart */}
        {/* TODO: Make this just line or combo? */}
        {visualizationType !== 'Bar' && visualizationType !== 'Paired Bar' && visualizationType !== 'Box Plot' && visualizationType !== 'Area Chart' && visualizationType !== 'Scatter Plot' && visualizationType !== 'Deviation Bar' && visualizationType !== 'Forecasting' && (
          <>
            <LineChart xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} xMax={xMax} yMax={yMax} seriesStyle={config.series} />
          </>
        )}

        {/* y anchors */}
        {config.yAxis.anchors &&
          config.yAxis.anchors.map((anchor, index) => {
            let anchorPosition = yScale(anchor.value)
            // have to move up
            // const padding = orientation === 'horizontal' ? Number(config.xAxis.size) : Number(config.yAxis.size)
            if (!anchor.value) return
            const middleOffset = orientation === 'horizontal' && visualizationType === 'Bar' ? config.barHeight / 4 : 0

            if (!anchorPosition) return

            return (
              // prettier-ignore
              <Line
                key={`yAxis-${anchor.value}--${index}`}
                strokeDasharray={handleLineType(anchor.lineStyle)}
                stroke={anchor.color ? anchor.color : 'rgba(0,0,0,1)'}
                className='anchor-y'
                from={{ x: 0 + padding, y: anchorPosition - middleOffset}}
                to={{ x: width - config.yAxis.rightAxisSize, y: anchorPosition - middleOffset }}
              />
            )
          })}
        {/* x anchors */}
        {config.xAxis.anchors &&
          config.xAxis.anchors.map((anchor, index) => {
            let newX = xAxis
            if (orientation === 'horizontal') {
              newX = yAxis
            }

            let anchorPosition = newX.type === 'date' ? xScale(parseDate(anchor.value, false)) : xScale(anchor.value)

            // have to move up
            // const padding = orientation === 'horizontal' ? Number(config.xAxis.size) : Number(config.yAxis.size)

            if (!anchorPosition) return

            return (
              // prettier-ignore
              <Line
                key={`xAxis-${anchor.value}--${index}`}
                strokeDasharray={handleLineType(anchor.lineStyle)}
                stroke={anchor.color ? anchor.color : 'rgba(0,0,0,1)'}
                fill={anchor.color ? anchor.color : 'rgba(0,0,0,1)'}
                className='anchor-x'
                from={{ x: Number(anchorPosition) + Number(padding), y: 0 }}
                to={{ x: Number(anchorPosition) + Number(padding), y: yMax }}
              />
            )
          })}

        {chartHasTooltipGuides && showTooltip && tooltipData && config.visual.verticalHoverLine && (
          <Group key='tooltipLine-vertical' className='vertical-tooltip-line'>
            <Line from={{ x: tooltipData.dataXPosition, y: 0 }} to={{ x: tooltipData.dataXPosition, y: yMax }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='vertical-tooltip-line' />
          </Group>
        )}

        {chartHasTooltipGuides && showTooltip && tooltipData && config.visual.horizontalHoverLine && (
          <Group key='tooltipLine-horizontal' className='horizontal-tooltip-line' left={config.yAxis.size ? config.yAxis.size : 0}>
            <Line from={{ x: 0, y: tooltipData.dataYPosition }} to={{ x: xMax, y: tooltipData.dataYPosition }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='horizontal-tooltip-line' />
          </Group>
        )}
      </svg>
      {tooltipData && Object.entries(tooltipData.data).length > 0 && tooltipOpen && showTooltip && tooltipData.dataYPosition && tooltipData.dataXPosition && (
        <TooltipWithBounds key={Math.random()} className={'tooltip cdc-open-viz-module'} style={tooltipStyles(tooltipData)} width={width}>
          <ul>{typeof tooltipData === 'object' && Object.entries(tooltipData.data).map((item, index) => <TooltipListItem item={item} key={index} />)}</ul>
        </TooltipWithBounds>
      )}
      {(config.orientation === 'horizontal' || config.visualizationType === 'Scatter Plot' || config.visualizationType === 'Box Plot') && (
        <ReactTooltip id={`cdc-open-viz-tooltip-${runtime.uniqueId}`} variant='light' arrowColor='rgba(0,0,0,0)' className='tooltip' style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }} />
      )}
      <div className='animation-trigger' ref={triggerRef} />
    </ErrorBoundary>
  )
}
