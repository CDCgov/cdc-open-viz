import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useCallback
} from 'react'

// Libraries
import { AxisBottom, AxisRight, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { Line, Bar } from '@visx/shape'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Text } from '@visx/text'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import _ from 'lodash'

// CDC Components
import { isDateScale } from '@cdc/core/helpers/cove/date'
import { AreaChartStacked } from './AreaChart'
import BarChart from './BarChart'
import ConfigContext from '../ConfigContext'
import BoxPlotVertical from './BoxPlot/BoxPlot.Vertical'
import BoxPlotHorizontal from './BoxPlot/BoxPlot.Horizontal'
import ScatterPlot from './ScatterPlot'
import DeviationBar from './DeviationBar'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Forecasting from './Forecasting'
import LineChart from './LineChart'
import ForestPlot from './ForestPlot'
import PairedBarChart from './PairedBarChart'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import Regions from './Regions'
import { CategoricalYAxis, LeftAxis, LeftAxisGridlines } from './Axis'
import BrushSelector from './Brush/BrushSelector'
import WarmingStripes from './WarmingStripes'

// Helpers
import { isLegendWrapViewport, isMobileFontViewport } from '@cdc/core/helpers/viewports'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { calcInitialHeight } from '../helpers/sizeHelpers'
import { filterAndShiftLinearDateTicks } from '../helpers/filterAndShiftLinearDateTicks'
import { calculateHorizontalBarCategoryLabelWidth } from '../helpers/calculateHorizontalBarCategoryLabelWidth'

// Hooks
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import useScales, { getTickValues } from '../hooks/useScales'
import { useProgrammaticTooltip } from '../hooks/useProgrammaticTooltip'
import { useSmallMultipleSynchronization } from '../hooks/useSmallMultipleSynchronization'

import getTopAxis from '../helpers/getTopAxis'
import { useTooltip as useCoveTooltip } from '../hooks/useTooltip'
import { useChartHoverAnalytics } from '../hooks/useChartHoverAnalytics'
import { useEditorPermissions } from './EditorPanel/useEditorPermissions'
import Annotation from './Annotations'
import { countNumOfTicks } from '../helpers/countNumOfTicks'
import HoverLine from './HoverLine/HoverLine'
import { SmallMultiples } from './SmallMultiples'

type LinearChartProps = {
  parentWidth: number
  parentHeight: number
}

// Axis and tick constants
const BOTTOM_LABEL_PADDING = 9
const X_TICK_LABEL_PADDING = 4.5
const DEFAULT_TICK_LENGTH = 8
const DEFAULT_MAX_TICK_ROTATION = 90
const TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD = -50
const TICK_BUFFER_SPACING = 40

// Font sizes
const TICK_LABEL_FONT_SIZE = 16
const TICK_LABEL_FONT_SIZE_SMALL = 13
const AXIS_LABEL_FONT_SIZE = 18
const AXIS_LABEL_FONT_SIZE_SMALL = 14

// Logarithmic axis constants
const MAJOR_TICK_LENGTH = 16
const MAJOR_LOG_TICK_STROKE_WIDTH = 1.3
const HORIZONTAL_LOG_DY_OFFSET = 8

// Label positioning constants
const BELOW_BAR_TEXT_OFFSET = -6.5
const LABEL_PADDING_OFFSET = 8
const HORIZONTAL_TICK_OFFSET_ADJUSTMENT = 5
const DYNAMIC_MARGIN_TOP_PADDING = 20

// Brush constants
const BRUSH_HEIGHT = 70
const BRUSH_MARGIN = 10
const BRUSH_MIN_WIDTH = 100

// Tooltip constants
const TOOLTIP_EDGE_BUFFER = 10
const TOOLTIP_OFFSET = 6

// Chart-specific constants
const WARMING_STRIPES_HEIGHT = 78

// Tick width calculation accumulators
const BASE_TICK_WIDTH_ACCUMULATOR = 100
const MULTI_LABEL_ACCUMULATOR = 180

// Time constants
const MONTH_AS_MS = 1000 * 60 * 60 * 24 * 30

type TooltipData = {
  dataXPosition?: number
  dataYPosition?: number
}

type UseTooltipReturn<T = TooltipData> = {
  tooltipData: T | null
  showTooltip: (tooltipData: T) => void
  hideTooltip: () => void
  tooltipOpen: boolean
  tooltipLeft: number | null
  tooltipTop: number | null
}

const LinearChart = forwardRef<SVGAElement, LinearChartProps>(({ parentHeight, parentWidth }, svgRef) => {
  // prettier-ignore
  const {
    colorScale,
    config,
    convertLineToBarGraph,
    currentViewport,
    vizViewport,
    dimensions,
    formatDate,
    formatNumber,
    handleChartAriaLabels,
    handleLineType,
    handleDragStateChange,
    interactionLabel,
    isDraggingAnnotation,
    isEditor,
    legendRef,
    parseDate,
    parentRef,
    tableData,
    transformedData: data,
    seriesHighlight
  } = useContext(ConfigContext)

  // CONFIG
  // todo: start destructuring this file for conciseness
  const {
    heights,
    visualizationType,
    visualizationSubType,
    orientation,
    xAxis,
    yAxis,
    runtime,
    legend,
    forestPlot,
    brush,
    dataFormat,
    debugSvg
  } = config

  const { labelsAboveGridlines, hideAxis, inlineLabel } = config.yAxis

  // HOOKS  % STATES
  // When brush is active, use tableData (full dataset) for min/max calculation
  // so the y-axis shows the full range, but still use filtered data for rendering
  const dataForMinMax = config.xAxis.brushActive && tableData && tableData.length > 0 ? tableData : data
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, dataForMinMax)

  const { visSupportsSmallMultiples } = useEditorPermissions()
  const { hasTopAxis } = getTopAxis(config)
  const [animatedChart, setAnimatedChart] = useState(false)
  const [showHoverLine, setShowHoverLine] = useState(false)
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const [suffixWidth, setSuffixWidth] = useState(0)
  const [calculatedSvgHeight, setCalculatedSvgHeight] = useState<number | null>(null)

  // REFS
  const axisBottomRef = useRef(null)
  const forestPlotRightLabelRef = useRef(null)
  const suffixRef = useRef(null)
  const topYLabelRef = useRef(null)
  const triggerRef = useRef()
  const xAxisLabelRefs = useRef([])
  const xAxisTitleRef = useRef(null)
  const tooltipRef = useRef(null)

  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  // VARS/MEMOS
  const shouldAbbreviate = true
  const isHorizontal = orientation === 'horizontal' || config.visualizationType === 'Forest Plot'
  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  const isForestPlot = visualizationType === 'Forest Plot'
  const isDateTime = config.xAxis.type === 'date-time'
  const inlineLabelHasNoSpace = !inlineLabel?.includes(' ')
  const needsYAxisAutoPadding = inlineLabel && !inlineLabelHasNoSpace
  const padding = orientation === 'horizontal' ? Number(config.xAxis.size) : Number(config.yAxis.size)
  const yLabelOffset = isNaN(parseInt(`${runtime.yAxis.labelOffset}`)) ? 0 : parseInt(`${runtime.yAxis.labelOffset}`)
  const tickLabelFontSize = isMobileFontViewport(vizViewport) ? TICK_LABEL_FONT_SIZE_SMALL : TICK_LABEL_FONT_SIZE
  const axisLabelFontSize = isMobileFontViewport(vizViewport) ? AXIS_LABEL_FONT_SIZE_SMALL : AXIS_LABEL_FONT_SIZE
  const GET_TEXT_WIDTH_FONT = `normal ${tickLabelFontSize}px Nunito, sans-serif`

  // zero if not forest plot
  const forestRowsHeight = isForestPlot ? config.data.length * config.forestPlot.rowHeight : 0

  // height before bottom axis
  const initialHeight = useMemo(
    () =>
      visualizationType === 'Warming Stripes' ? WARMING_STRIPES_HEIGHT : calcInitialHeight(config, currentViewport),
    [config, currentViewport, parentHeight, config.heights?.vertical, config.heights?.horizontal, visualizationType]
  )
  const forestHeight = useMemo(() => initialHeight + forestRowsHeight, [initialHeight, forestRowsHeight])

  // Used to calculate the y position of the x-axis title
  const bottomLabelStart = useMemo(() => {
    xAxisLabelRefs.current = xAxisLabelRefs.current?.filter(label => label)
    if (!xAxisLabelRefs.current.length) return
    const tallestLabel = Math.max(...xAxisLabelRefs.current.map(label => label.getBBox().height))
    return tallestLabel + X_TICK_LABEL_PADDING + DEFAULT_TICK_LENGTH
  }, [parentWidth, config.xAxis, xAxisLabelRefs.current, config.xAxis.tickRotation])

  const yMax = initialHeight + forestRowsHeight

  const isNoDataAvailable = config.filters?.length > 0 && data.length === 0

  const getXAxisData = d =>
    isDateScale(config.runtime.xAxis)
      ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime()
      : d[config.runtime.originalXAxis.dataKey]
  const getYAxisData = (d, seriesKey) => d[seriesKey]
  const xAxisDataMapped = data.map(d => getXAxisData(d))

  // Get unique x-axis values (for cases where multiple series share the same x-axis value)
  // This is important for brush filtering where we want to count unique dates, not total data points
  const uniqueXAxisDataMapped = useMemo(() => {
    const unique = new Set()
    const result: any[] = []
    for (const value of xAxisDataMapped) {
      const key = value instanceof Date ? value.getTime() : typeof value === 'number' ? value : String(value)
      if (!unique.has(key)) {
        unique.add(key)
        result.push(value)
      }
    }
    return result
  }, [xAxisDataMapped])
  const { yScaleRight, hasRightAxis } = useRightAxis({ config, yMax, data })

  // State for computed y-axis width - allows re-render when horizontal bar label space is calculated
  const [computedYAxisWidth, setComputedYAxisWidth] = useState<number | null>(null)

  // Use computed width if available, otherwise fall back to config value
  const yAxisWidth = computedYAxisWidth ?? Number(runtime.yAxis.size)

  // Chart width calculation using the current y-axis width
  const xMax = parentWidth - yAxisWidth - (hasRightAxis ? config.yAxis.rightAxisSize : 0)

  const {
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
  } = useScales({
    data,
    tableData,
    config,
    minValue,
    maxValue,
    isAllLine,
    existPositiveValue,
    xAxisDataMapped,
    yMax,
    xMax,
    needsYAxisAutoPadding,
    currentViewport
  })

  // Calculate category label space for horizontal bar charts
  const categoryLabelSpace = useMemo(() => {
    return calculateHorizontalBarCategoryLabelWidth({
      yScale,
      chartWidth: parentWidth,
      formatDate,
      parseDate,
      tickLabelFont: GET_TEXT_WIDTH_FONT,
      xAxisType: config.runtime.xAxis?.type,
      labelPlacement: config.yAxis.labelPlacement
    })
  }, [isHorizontal, config.visualizationType, config.yAxis.labelPlacement, yScale, parentWidth])

  const horizontalYAxisLabelSpace = runtime.yAxis.label && !config.hideYAxisLabel ? 30 : 0

  // Update y-axis width state when computed value changes (for horizontal bar charts)
  useEffect(() => {
    if (isHorizontal && config.visualizationType === 'Bar') {
      const newWidth = categoryLabelSpace + horizontalYAxisLabelSpace
      if (newWidth !== computedYAxisWidth) {
        setComputedYAxisWidth(newWidth)
      }
    } else if (computedYAxisWidth !== null) {
      // Reset to null for non-horizontal bar charts so we use config value
      setComputedYAxisWidth(null)
    }
  }, [isHorizontal, config.visualizationType, categoryLabelSpace, horizontalYAxisLabelSpace, computedYAxisWidth])

  const [yTickCount, xTickCount] = ['yAxis', 'xAxis'].map(axis =>
    countNumOfTicks({ axis, max, runtime, currentViewport, isHorizontal, data, config, min })
  )
  const handleNumTicks = isForestPlot ? config.data.length : yTickCount

  // Tooltip Helpers

  const { tooltipData, showTooltip, hideTooltip, tooltipOpen, tooltipLeft, tooltipTop } =
    useTooltip<UseTooltipReturn<TooltipData>>()

  // prettier-ignore
  const {
    handleTooltipMouseOver,
    handleTooltipClick,
    handleTooltipMouseOff,
    TooltipListItem,
    getXValueFromCoordinate,
    getCoordinateFromXValue,
  } = useCoveTooltip({
    xScale,
    yScale,
    seriesScale,
    showTooltip,
    hideTooltip,
    interactionLabel
  })

  // Analytics tracking for chart hover
  const { handleChartMouseEnter, handleChartMouseLeave } = useChartHoverAnalytics({
    config,
    interactionLabel
  })

  // get the number of months between the first and last date
  const { dataKey } = runtime.xAxis
  const dateSpanMonths =
    data.length && isDateTime
      ? [0, data.length - 1].map(i => parseDate(data[i][dataKey])).reduce((a, b) => Math.abs(a - b)) / MONTH_AS_MS
      : 0
  const useDateSpanMonths = isDateTime && dateSpanMonths > xTickCount && !config.runtime.xAxis.manual

  // GETTERS & FUNCTIONS
  const handleLeftTickFormatting = (tick, index, ticks) => {
    if (isLogarithmicAxis && tick === 0.1) {
      //when logarithmic scale applied change value of first tick
      tick = 0
    }

    if (config.data && !config.data[index] && visualizationType === 'Forest Plot') return
    if (config.visualizationType === 'Forest Plot') return config.data[index][config.xAxis.dataKey]
    if (isDateScale(runtime.yAxis)) return formatDate(parseDate(tick))
    if (orientation === 'vertical' && max - min < 3 && !config.dataFormat?.roundTo)
      return formatNumber(tick, 'left', shouldAbbreviate, false, false, '1', { index, length: ticks.length })
    if (orientation === 'vertical') {
      // TODO suggestion: pass all options as object key/values to allow for more flexibility
      return formatNumber(tick, 'left', shouldAbbreviate, false, false, undefined, { index, length: ticks.length })
    }
    return tick
  }

  const handleBottomTickFormatting = (tick, i, ticks) => {
    if (isLogarithmicAxis && tick === 0.1) {
      // when logarithmic scale applied change value FIRST  of  tick
      tick = 0
    }

    if (isDateScale(runtime.xAxis) && config.visualizationType !== 'Forest Plot') {
      return formatDate(tick, i, ticks)
    }
    if (orientation === 'horizontal' && config.visualizationType !== 'Forest Plot')
      return formatNumber(tick, 'left', shouldAbbreviate)
    if (config.xAxis.type === 'continuous' && config.visualizationType !== 'Forest Plot')
      return formatNumber(tick, 'bottom', shouldAbbreviate)
    if (config.visualizationType === 'Forest Plot')
      return formatNumber(
        tick,
        'left',
        config.dataFormat.abbreviated,
        config.runtime.xAxis.prefix,
        config.runtime.xAxis.suffix,
        Number(config.dataFormat.roundTo)
      )
    return tick
  }

  const chartHasTooltipGuides = () => {
    const { visualizationType } = config
    if (visualizationType === 'Combo' && runtime.forecastingSeriesKeys > 0) return true
    if (visualizationType === 'Area Chart') return true
    if (visualizationType === 'Line') return true
    if (visualizationType === 'Bar') return true
    return false
  }

  const getManualStep = () => {
    let manualStep = config.xAxis.manualStep
    if (config.xAxis.viewportStepCount && config.xAxis.viewportStepCount[currentViewport]) {
      manualStep = config.xAxis.viewportStepCount[currentViewport]
    }
    return manualStep
  }

  const smallMultiplesSync = useSmallMultipleSynchronization(xMax, yMax, getXValueFromCoordinate)

  const onMouseMove = event => {
    const svgRect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - svgRect.left
    const y = event.clientY - svgRect.top

    setPoint({
      x,
      y
    })

    smallMultiplesSync.onMouseMove?.(event)
  }

  const onMouseLeave = () => {
    smallMultiplesSync.onMouseLeave?.()
  }

  // Use custom hook to provide programmatic tooltip control for small multiples
  const internalSvgRef = useProgrammaticTooltip({
    svgRef,
    getCoordinateFromXValue,
    config,
    setPoint,
    setShowHoverLine,
    handleTooltipMouseOver,
    hideTooltip
  })

  // Make sure the chart is visible if in the editor
  useEffect(() => {
    const element = document.querySelector('.isEditor')
    if (element) {
      setAnimatedChart(true)
    }
  }, [])

  // If the chart is in view, set to animate if it has not already played
  useEffect(() => {
    if (dataRef?.isIntersecting === true && config.animate) {
      setTimeout(() => {
        setAnimatedChart(true)
      }, 500)
    }
  }, [dataRef?.isIntersecting, config.animate])

  useEffect(() => {
    const suffixEl = suffixRef.current
    if (!suffixEl && !suffixWidth) return
    if (!suffixEl) return setSuffixWidth(0)
    const suffixElWidth = suffixEl.getBBox().width
    setSuffixWidth(suffixElWidth)
  }, [config.dataFormat.suffix, inlineLabel])

  // forest plot x-axis label positioning
  useEffect(() => {
    if (!isForestPlot || xAxis.hideLabel) return

    const rightLabel = forestPlotRightLabelRef.current

    if (!rightLabel) return

    const axisBottomY = yMax + Number(config.xAxis.axisPadding)
    const labelRelativeY = rightLabel.getBBox().y - axisBottomY
    const xLabelY = labelRelativeY + rightLabel.getBBox().height + BOTTOM_LABEL_PADDING
    if (!xAxisTitleRef.current) return
    xAxisTitleRef.current.setAttribute('y', xLabelY)
  }, [config?.data?.length, forestRowsHeight])

  // Parent height adjustments
  useEffect(() => {
    if (!axisBottomRef.current) return
    const axisBottomHeight = axisBottomRef.current.getBBox().height

    const isForestPlot = visualizationType === 'Forest Plot'
    const topLabelOnGridline = topYLabelRef.current && yAxis.labelsAboveGridlines

    // Heights to add
    const forestRowsHeight = isForestPlot ? config.data.length * forestPlot.rowHeight : 0
    const topLabelOnGridlineHeight = topLabelOnGridline ? topYLabelRef.current.getBBox().height : 0

    // SVG height (without brush)
    const svgAdditionalHeight = axisBottomHeight + forestRowsHeight + topLabelOnGridlineHeight
    const svgHeight = initialHeight + svgAdditionalHeight

    // Parent container height (includes brush if active)
    const brushHeightWithMargin = config.xAxis.brushActive ? BRUSH_HEIGHT + BRUSH_MARGIN : 0
    const parentHeight = svgHeight + brushHeightWithMargin

    if (!parentRef.current) return
    parentRef.current.style.height = `${parentHeight}px`

    // Set the calculated SVG height via state to ensure it's used on render
    setCalculatedSvgHeight(svgHeight)

    /* Adding text above the top gridline overflows the bounds of the svg.
    To accommodate for this we need to...
    1. Add the extra height to the svg (done above)
    2. Adjust the viewBox to move the intended top height into focus
    3. if the legend is on the left or right, translate it by
      the label height so it is aligned with the top border */
    if (!topLabelOnGridlineHeight) return

    // Adjust the viewBox for the svg
    const svg = internalSvgRef.current
    if (!svg) return
    const parentWidthFromRef = parentRef.current.getBoundingClientRect().width
    svg.setAttribute('viewBox', `0 ${-topLabelOnGridlineHeight} ${parentWidthFromRef} ${svgHeight}`)

    // translate legend match viewBox-adjusted height
    if (!legendRef.current) return
    const legendIsLeftOrRight =
      legend?.position !== 'top' && legend?.position !== 'bottom' && !isLegendWrapViewport(currentViewport)
    legendRef.current.style.transform = legendIsLeftOrRight ? `translateY(${topLabelOnGridlineHeight}px)` : 'none'
  }, [
    axisBottomRef.current,
    config,
    bottomLabelStart,
    config.xAxis.brushActive,
    currentViewport,
    topYLabelRef.current,
    initialHeight
  ])

  useEffect(() => {
    if (!tooltipOpen) return
    if (!tooltipRef.current) return

    const { dataXPosition } = tooltipData as { [key: string]: number }

    if (!dataXPosition) return

    const { width: tooltipWidth } = tooltipRef.current.node.getBoundingClientRect()

    const rightSideRemainingSpace = parentWidth - dataXPosition

    const rightSide = rightSideRemainingSpace <= tooltipWidth && dataXPosition > parentWidth / 2 - TOOLTIP_EDGE_BUFFER
    const maxWidth = rightSide ? dataXPosition - TOOLTIP_EDGE_BUFFER : parentWidth - (dataXPosition + TOOLTIP_OFFSET)
    tooltipRef.current.node.style.maxWidth = `${maxWidth}px`
  }, [tooltipOpen, tooltipData])

  // Check if small multiples are enabled and supported - if so, render SmallMultiples instead
  if (config.smallMultiples?.mode && visSupportsSmallMultiples()) {
    return (
      <SmallMultiples
        config={config}
        data={data}
        svgRef={svgRef}
        parentWidth={parentWidth}
        parentHeight={parentHeight}
      />
    )
  }

  // Render Functions
  const generatePairedBarAxis = () => {
    const axisMaxHeight = bottomLabelStart + BOTTOM_LABEL_PADDING

    const getTickPositions = (ticks, xScale) => {
      if (!ticks.length) return false
      // filter out first index
      const filteredTicks = ticks.filter(tick => tick.index !== 0)
      const numberOfTicks = filteredTicks?.length
      const xMaxHalf = xScale.range()[0] || xMax / 2
      const tickWidthAll = filteredTicks.map(tick =>
        getTextWidth(formatNumber(tick.value, 'left'), GET_TEXT_WIDTH_FONT)
      )
      const sumOfTickWidth = tickWidthAll.reduce((a, b) => a + b, BASE_TICK_WIDTH_ACCUMULATOR)
      const spaceBetweenEachTick = (xMaxHalf - sumOfTickWidth) / numberOfTicks
      // Determine the position of each tick
      let positions = [0]
      for (let i = 1; i < tickWidthAll.length; i++) {
        positions[i] = positions[i - 1] + tickWidthAll[i - 1] + spaceBetweenEachTick
      }

      // Check if ticks are overlapping
      let isTicksOverlapping = false
      tickWidthAll.forEach((_, i) => {
        if (positions[i] + tickWidthAll[i] > positions[i + 1]) {
          isTicksOverlapping = true
          return
        }
      })
      return isTicksOverlapping
    }
    return (
      <>
        <AxisBottom
          top={yMax}
          left={yAxisWidth}
          label={runtime.xAxis.label}
          tickFormat={isDateScale(runtime.xAxis) ? formatDate : formatNumber}
          scale={g1xScale}
          stroke='#333'
          tickStroke='#333'
          numTicks={runtime.xAxis.numTicks || undefined}
        >
          {props => {
            return (
              <Group className='bottom-axis'>
                {props.ticks.map((tick, i) => {
                  const isTicksOverlapping = getTickPositions(props.ticks, g1xScale)
                  const maxTickRotation = Number(config.xAxis.maxTickRotation) || DEFAULT_MAX_TICK_ROTATION
                  const isResponsiveTicks = config.isResponsiveTicks && isTicksOverlapping
                  const angle =
                    tick.index !== 0 && (isResponsiveTicks ? maxTickRotation : Number(config.yAxis.tickRotation))
                  const textAnchor = angle && tick.index !== 0 ? 'end' : 'middle'

                  return (
                    <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                      {!runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                      {!runtime.yAxis.hideLabel && (
                        <Text // prettier-ignore
                          innerRef={el => (xAxisLabelRefs.current[i] = el)}
                          x={tick.to.x}
                          y={tick.to.y}
                          angle={-angle}
                          verticalAnchor={angle ? 'middle' : 'start'}
                          textAnchor={textAnchor}
                          fontSize={tickLabelFontSize}
                        >
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
          innerRef={axisBottomRef}
          top={yMax}
          left={yAxisWidth}
          label={runtime.xAxis.label}
          tickFormat={
            isDateScale(runtime.xAxis) ? formatDate : runtime.xAxis.dataKey !== 'Year' ? formatNumber : tick => tick
          }
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
                    const isTicksOverlapping = getTickPositions(props.ticks, g2xScale)
                    const maxTickRotation = Number(config.xAxis.maxTickRotation) || DEFAULT_MAX_TICK_ROTATION
                    const isResponsiveTicks = config.isResponsiveTicks && isTicksOverlapping
                    const angle =
                      tick.index !== 0 && (isResponsiveTicks ? maxTickRotation : Number(config.yAxis.tickRotation))
                    const textAnchor = angle && tick.index !== 0 ? 'end' : 'middle'
                    if (!i) return <></> // skip first tick to avoid overlapping 0's
                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                        {!runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                        {!runtime.yAxis.hideLabel && (
                          <Text // prettier-ignore
                            x={tick.to.x}
                            y={tick.to.y + X_TICK_LABEL_PADDING}
                            angle={-angle}
                            verticalAnchor={angle ? 'middle' : 'start'}
                            textAnchor={textAnchor}
                            fontSize={tickLabelFontSize}
                          >
                            {formatNumber(tick.value, 'left')}
                          </Text>
                        )}
                      </Group>
                    )
                  })}
                  {!runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                </Group>
                <Group>
                  <Text
                    className='x-axis-title-label'
                    x={xMax / 2}
                    y={axisMaxHeight}
                    stroke='#333'
                    textAnchor={'middle'}
                    verticalAnchor='start'
                    fontSize={axisLabelFontSize}
                  >
                    {!config.hideXAxisLabel ? runtime.xAxis.label : null}
                  </Text>
                </Group>
              </>
            )
          }}
        </AxisBottom>
      </>
    )
  }
  return isNaN(parentWidth) ? (
    <React.Fragment></React.Fragment>
  ) : (
    <ErrorBoundary component='LinearChart'>
      {/* ! Notice - div needed for tooltip boundaries (flip/flop) */}
      <div
        style={{ width: `${parentWidth}px`, overflow: 'visible', position: 'relative' }}
        className='tooltip-boundary'
      >
        <svg
          ref={internalSvgRef}
          onMouseMove={onMouseMove}
          width={parentWidth + config.yAxis.rightAxisSize}
          height={isNoDataAvailable ? 1 : calculatedSvgHeight ?? parentHeight}
          className={`linear ${config.animate ? 'animated' : ''} ${animatedChart && config.animate ? 'animate' : ''} ${
            debugSvg && 'debug'
          } ${isDraggingAnnotation && 'dragging-annotation'}`}
          role='img'
          aria-label={handleChartAriaLabels(config)}
          style={{ overflow: 'visible' }}
          onMouseLeave={() => {
            setShowHoverLine(false)
            handleChartMouseLeave()
            onMouseLeave()
          }}
          onMouseEnter={() => {
            setShowHoverLine(true)
            handleChartMouseEnter()
          }}
        >
          {!isDraggingAnnotation && <Bar width={parentWidth} height={initialHeight} fill={'transparent'}></Bar>}{' '}
          {/* GRID LINES */}
          {/* Actual LeftAxis is drawn after visualization */}
          {!['Spark Line', 'Forest Plot', 'Warming Stripes'].includes(visualizationType) &&
            config.yAxis.type !== 'categorical' && (
              <LeftAxisGridlines
                yScale={yScale}
                xMax={xMax}
                yAxisWidth={yAxisWidth}
                numTicks={handleNumTicks}
                yLabelOffset={yLabelOffset}
                axisLabelFontSize={axisLabelFontSize}
              />
            )}
          {/* Horizontal chart grid lines */}
          {runtime.xAxis.gridLines && orientation === 'horizontal' && (
            <Group left={yAxisWidth}>
              {xScale.ticks(xTickCount).map((tickValue, i) => {
                const tickPosition = xScale(tickValue)
                return (
                  <Line
                    key={`horizontal-gridline-${tickValue}-${i}`}
                    from={{ x: tickPosition, y: 0 }}
                    to={{ x: tickPosition, y: yMax }}
                    stroke='#d6d6d6'
                  />
                )
              })}
            </Group>
          )}
          {visualizationType === 'Paired Bar' && generatePairedBarAxis()}
          {visualizationType === 'Deviation Bar' && config.runtime.series?.length === 1 && (
            <DeviationBar animatedChart={animatedChart} xScale={xScale} yScale={yScale} width={xMax} height={yMax} />
          )}
          {visualizationType === 'Paired Bar' && (
            <PairedBarChart originalWidth={parentWidth} width={xMax} height={yMax} />
          )}
          {visualizationType === 'Scatter Plot' && (
            <ScatterPlot
              xScale={xScale}
              yScale={yScale}
              getXAxisData={getXAxisData}
              getYAxisData={getYAxisData}
              xMax={xMax}
              yMax={yMax}
              handleTooltipMouseOver={handleTooltipMouseOver}
              handleTooltipMouseOff={handleTooltipMouseOff}
              handleTooltipClick={handleTooltipClick}
              tooltipData={tooltipData}
              showTooltip={showTooltip}
            />
          )}
          {visualizationType === 'Warming Stripes' && (
            <WarmingStripes xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} />
          )}
          {visualizationType === 'Box Plot' && config.orientation === 'vertical' && (
            <BoxPlotVertical
              seriesScale={seriesScale}
              xMax={xMax}
              yMax={yMax}
              min={min}
              max={max}
              xScale={xScale}
              yScale={yScale}
            />
          )}
          {visualizationType === 'Box Plot' && config.orientation === 'horizontal' && (
            <BoxPlotHorizontal
              seriesScale={seriesScale}
              xMax={xMax}
              yMax={yMax}
              min={min}
              max={max}
              xScale={xScale}
              yScale={yScale}
            />
          )}
          {((visualizationType === 'Area Chart' && config.visualizationSubType === 'stacked') ||
            visualizationType === 'Combo') && (
            <AreaChartStacked
              xScale={xScale}
              yScale={yScale}
              yMax={yMax}
              xMax={xMax}
              chartRef={svgRef}
              width={xMax}
              height={yMax}
              handleTooltipMouseOver={handleTooltipMouseOver}
              handleTooltipMouseOff={handleTooltipMouseOff}
              tooltipData={tooltipData}
              showTooltip={showTooltip}
            />
          )}
          {(visualizationType === 'Bar' || visualizationType === 'Combo' || convertLineToBarGraph) && (
            <BarChart
              xScale={xScale}
              yScale={yScale}
              seriesScale={seriesScale}
              xMax={xMax}
              yMax={yMax}
              yAxisWidth={yAxisWidth}
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
          {(visualizationType === 'Combo' || visualizationType === 'Bump Chart') && (
            <LineChart
              xScale={xScale}
              yScale={yScale}
              getXAxisData={getXAxisData}
              getYAxisData={getYAxisData}
              xMax={xMax}
              yMax={yMax}
              seriesStyle={config.runtime.series}
              handleTooltipMouseOver={handleTooltipMouseOver}
              handleTooltipMouseOff={handleTooltipMouseOff}
              handleTooltipClick={handleTooltipClick}
              tooltipData={tooltipData}
              showTooltip={showTooltip}
            />
          )}
          {/* Line chart */}
          {/* TODO: Make this just line or combo? */}
          {![
            'Paired Bar',
            'Box Plot',
            'Area Chart',
            'Scatter Plot',
            'Deviation Bar',
            'Forecasting',
            'Bar',
            'Warming Stripes'
          ].includes(visualizationType) &&
            !convertLineToBarGraph && (
              <>
                <LineChart
                  xScale={xScale}
                  yScale={yScale}
                  getXAxisData={getXAxisData}
                  getYAxisData={getYAxisData}
                  xMax={xMax}
                  yMax={yMax}
                  seriesStyle={config.runtime.series}
                  tooltipData={tooltipData}
                  handleTooltipMouseOver={handleTooltipMouseOver}
                  handleTooltipMouseOff={handleTooltipMouseOff}
                />
              </>
            )}
          {(visualizationType === 'Forecasting' || visualizationType === 'Combo') && (
            <Forecasting
              showTooltip={showTooltip}
              tooltipData={tooltipData}
              xScale={xScale}
              yScale={yScale}
              width={xMax}
              height={yMax}
              xScaleNoPadding={xScaleNoPadding}
              chartRef={svgRef}
              handleTooltipMouseOver={handleTooltipMouseOver}
              handleTooltipMouseOff={handleTooltipMouseOff}
            />
          )}
          {visualizationType === 'Forest Plot' && (
            <ForestPlot
              xScale={xScale}
              yScale={yScale}
              seriesScale={seriesScale}
              width={parentWidth}
              height={forestHeight}
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
              config={config}
              forestPlotRightLabelRef={forestPlotRightLabelRef}
            />
          )}
          {/* Brush moved to separate overlay - no longer in main SVG */}
          {/* y anchors */}
          {config.yAxis.anchors &&
            config.yAxis.anchors.map((anchor, index) => {
              let position = yScale(anchor.value)
              let middleOffset = 0

              if (!anchor.value) return
              if (config.yAxis.labelPlacement === 'Below Bar') {
                middleOffset =
                  BELOW_BAR_TEXT_OFFSET + Number(config.series.length * config.barHeight) / config.series.length
              } else {
                middleOffset = LABEL_PADDING_OFFSET
              }

              if (!position) return

              return (
                // prettier-ignore
                <Line
                  key={`yAxis-${anchor.value}--${index}`}
                  strokeDasharray={handleLineType(anchor.lineStyle)}
                  stroke={anchor.color ? anchor.color : 'rgba(0,0,0,1)'}
                  className='anchor-y'
                  from={{ x: yAxisWidth, y: position - middleOffset }}
                  to={{ x: yAxisWidth + xMax, y: position - middleOffset }}
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

              const getAnchorPosition = (): number | undefined => {
                let position: number | undefined

                position = isDateScale(newX) ? xScale(parseDate(anchor.value, false)) : xScale(anchor.value)
                if (config.xAxis.type === 'categorical' || config.xAxis.type === 'date') {
                  position = position
                    ? position + (newX.type === 'categorical' || newX.type === 'date' ? xScale.bandwidth() : 0) / 2
                    : 0
                }
                return position
              }

              let anchorPosition = getAnchorPosition()

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
          {/* we are handling regions in bar charts differently, so that we can calculate the bar group into the region space. */}
          {/* prettier-ignore */}
          {config.visualizationType !== 'Bar' && config.visualizationType !== 'Combo' && (
            <Regions
              xScale={xScale}
              handleTooltipClick={handleTooltipClick}
              handleTooltipMouseOff={handleTooltipMouseOff}
              handleTooltipMouseOver={handleTooltipMouseOver}
              showTooltip={showTooltip}
              hideTooltip={hideTooltip}
              tooltipData={tooltipData}
              yMax={yMax}
              xMax={xMax}
            />
          )}
          {isNoDataAvailable && (
            <Text
              x={yAxisWidth + Number(xMax / 2)}
              y={initialHeight / 2 - (config.xAxis.padding || 0) / 2}
              textAnchor='middle'
            >
              {config.chartMessage.noData}
            </Text>
          )}
          {showHoverLine && (
            <>
              <HoverLine xMax={xMax} yMax={yMax} point={point} tooltipData={tooltipData} orientation='horizontal' />
              <HoverLine xMax={xMax} yMax={yMax} point={point} tooltipData={tooltipData} orientation='vertical' />
            </>
          )}
          <Group left={yAxisWidth}>
            <Annotation.Draggable
              xScale={xScale}
              yScale={yScale}
              xScaleAnnotation={xScaleAnnotation}
              xMax={xMax}
              svgRef={svgRef}
              onDragStateChange={handleDragStateChange}
            />
          </Group>
          {/* Highlighted regions */}
          {/* Y axis */}
          {!['Spark Line', 'Forest Plot', 'Warming Stripes'].includes(visualizationType) &&
            config.yAxis.type !== 'categorical' && (
              <LeftAxis
                yScale={yScale}
                xScale={xScale}
                yMax={yMax}
                xMax={xMax}
                yAxisWidth={yAxisWidth}
                numTicks={handleNumTicks}
                tickLabelFontSize={tickLabelFontSize}
                axisLabelFontSize={axisLabelFontSize}
                handleLeftTickFormatting={handleLeftTickFormatting}
                topYLabelRef={topYLabelRef}
                suffixRef={suffixRef}
                suffixWidth={suffixWidth}
                horizontalYAxisLabelSpace={horizontalYAxisLabelSpace}
                categoryLabelSpace={categoryLabelSpace}
                yLabelOffset={yLabelOffset}
              />
            )}
          {config.yAxis.type === 'categorical' && config.orientation === 'vertical' && (
            <CategoricalYAxis
              yScale={yScale}
              xMax={xMax}
              yMax={yMax}
              leftSize={yAxisWidth - config.yAxis.axisPadding}
            />
          )}
          {/* Right Axis */}
          {hasRightAxis && (
            <AxisRight
              scale={yScaleRight}
              left={yAxisWidth + xMax}
              label={config.yAxis.rightLabel}
              tickFormat={tick => formatNumber(tick, 'right')}
              numTicks={runtime.yAxis.rightNumTicks || undefined}
              labelOffset={45}
            >
              {props => {
                const axisCenter =
                  config.orientation === 'horizontal'
                    ? (props.axisToPoint.y - props.axisFromPoint.y) / 2
                    : (props.axisFromPoint.y - props.axisToPoint.y) / 2
                const horizontalTickOffset =
                  yMax / props.ticks.length / 2 -
                  (yMax / props.ticks.length) * (1 - config.barThickness) +
                  HORIZONTAL_TICK_OFFSET_ADJUSTMENT
                return (
                  <Group className='right-axis'>
                    {props.ticks.map((tick, i) => {
                      return (
                        <Group key={`vx-tick-${tick.value}-${i}`} className='vx-axis-tick'>
                          {!runtime.yAxis.rightHideTicks && (
                            <Line
                              from={tick.from}
                              to={tick.to}
                              display={runtime.horizontal ? 'none' : 'block'}
                              stroke={config.yAxis.rightAxisTickColor}
                            />
                          )}

                          {runtime.yAxis.rightGridLines ? (
                            <Line from={{ x: tick.from.x + xMax, y: tick.from.y }} to={tick.from} stroke='#d6d6d6' />
                          ) : (
                            ''
                          )}

                          {!config.yAxis.rightHideLabel && (
                            <Text
                              x={tick.to.x}
                              y={tick.to.y + (runtime.horizontal ? horizontalTickOffset : 0)}
                              verticalAnchor={runtime.horizontal ? 'start' : 'middle'}
                              textAnchor={'start'}
                              fill={config.yAxis.rightAxisTickLabelColor}
                              fontSize={tickLabelFontSize}
                            >
                              {tick.formattedValue}
                            </Text>
                          )}
                        </Group>
                      )
                    })}
                    {!config.yAxis.rightHideAxis && (
                      <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />
                    )}
                    <Text
                      className='y-label'
                      textAnchor='middle'
                      verticalAnchor='start'
                      transform={`translate(${
                        config.yAxis.rightLabelOffsetSize ? config.yAxis.rightLabelOffsetSize : 0
                      }, ${axisCenter}) rotate(-90)`}
                      fontWeight='bold'
                      fill={config.yAxis.rightAxisLabelColor}
                      fontSize={axisLabelFontSize}
                    >
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
              left={yAxisWidth}
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
              innerRef={axisBottomRef}
              top={
                runtime.horizontal && config.visualizationType !== 'Forest Plot'
                  ? Number(heights.horizontal) + Number(config.xAxis.axisPadding)
                  : config.visualizationType === 'Forest Plot'
                  ? yMax + Number(config.xAxis.axisPadding)
                  : yMax
              }
              left={config.visualizationType !== 'Forest Plot' ? yAxisWidth : 0}
              label={runtime.xAxis.label}
              tickFormat={handleBottomTickFormatting}
              scale={xScale}
              stroke='#333'
              numTicks={useDateSpanMonths ? dateSpanMonths : xTickCount}
              tickStroke='#333'
              tickValues={
                config.runtime.xAxis.manual
                  ? getTickValues(xAxisDataMapped, xScale, isDateTime ? xTickCount : getManualStep(), config)
                  : config.runtime.xAxis.type === 'date'
                  ? xAxisDataMapped
                  : // For date-time with small datasets (e.g., brush-filtered), use explicit tick values
                  // to ensure each data point can have a tick. Otherwise, visx may generate too few.
                  // Use uniqueXAxisDataMapped to handle cases where multiple series share x-axis values
                  isDateTime && uniqueXAxisDataMapped.length > 0 && uniqueXAxisDataMapped.length <= (xTickCount || 15)
                  ? uniqueXAxisDataMapped
                  : undefined
              }
            >
              {props => {
                const hasDynamicCategory = config.series.some(s => s.dynamicCategory)

                // For these charts, we generated all ticks in tickValues above, and now need to filter/shift them
                // so the last tick is always labeled
                // Use uniqueXAxisDataMapped for date filtering to match the tickValues we set
                if (config.runtime.xAxis.type === 'date' && !config.runtime.xAxis.manual && !hasDynamicCategory) {
                  props.ticks = filterAndShiftLinearDateTicks(config, props, uniqueXAxisDataMapped, formatDate)
                }

                const distanceBetweenTicks =
                  useDateSpanMonths &&
                  xScale
                    .ticks(xTickCount)
                    .map(t =>
                      props.ticks.findIndex(
                        tick => (typeof tick.value === 'number' ? tick.value : tick.value.getTime()) === t.getTime()
                      )
                    )
                    .slice(0, 2)
                    .reduce((acc, curr) => curr - acc)

                // filter out every [distanceBetweenTicks] tick starting from the end, so the last tick is always labeled
                const filteredTicks = useDateSpanMonths
                  ? [...props.ticks]
                      .reverse()
                      .filter((_, i) => i % distanceBetweenTicks === 0)
                      .reverse()
                      .map((tick, i, arr) => ({
                        ...tick,
                        // reformat in case showYearsOnce, since first month of year may have changed
                        formattedValue: handleBottomTickFormatting(tick.value, i, arr)
                      }))
                  : props.ticks

                const axisMaxHeight = bottomLabelStart + BOTTOM_LABEL_PADDING

                const containsMultipleWords = inputString => /\s/.test(inputString)
                const isMultiLabel = filteredTicks.some(tick => containsMultipleWords(tick.value))

                // Calculate sumOfTickWidth here, before map function
                const longestTickLength = Math.max(
                  ...filteredTicks.map(tick => getTextWidth(tick.formattedValue, GET_TEXT_WIDTH_FONT))
                )
                // const marginTop = 20 // moved to top bc need for yMax calcs
                const accumulator = isMultiLabel ? MULTI_LABEL_ACCUMULATOR : BASE_TICK_WIDTH_ACCUMULATOR

                const textWidths = filteredTicks.map(tick => getTextWidth(tick.formattedValue, GET_TEXT_WIDTH_FONT))
                const sumOfTickWidth = textWidths.reduce((a, b) => a + b, accumulator)
                const spaceBetweenEachTick = (xMax - sumOfTickWidth) / (filteredTicks.length - 1)
                const bufferBetweenTicks = TICK_BUFFER_SPACING
                const maxLengthOfTick =
                  parentWidth / filteredTicks.length - X_TICK_LABEL_PADDING * 2 - bufferBetweenTicks

                // Determine the position of each tick
                let positions = [0] // The first tick is at position 0
                for (let i = 1; i < textWidths.length; i++) {
                  // The position of each subsequent tick is the position of the previous tick
                  // plus the width of the previous tick and the space
                  positions[i] = positions[i - 1] + textWidths[i - 1] + spaceBetweenEachTick
                }
                // calculate the end of x axis box
                const axisBBox = axisBottomRef?.current?.getBBox().height
                // TODO: Technical debt - This mutation is read by parent/sibling components.
                // Should be refactored to use proper React state management or callbacks.
                config.xAxis.axisBBox = axisBBox

                // force wrap it last tick is close to the end of the axis
                const lastTickWidth = textWidths[textWidths.length - 1]
                const lastTickPosition = positions[positions.length - 1] + lastTickWidth
                const lastTickEnd = lastTickPosition + lastTickWidth / 2
                const lastTickEndThreshold = xMax - lastTickWidth

                const areTicksTouching =
                  textWidths.some(textWidth => textWidth > maxLengthOfTick) || // Force wrap if any tick is too long
                  config.xAxis.showYearsOnce || // Force wrap when showing years once so it's easier to read
                  lastTickEnd > lastTickEndThreshold // Force wrap it last tick is close to the end of the axis

                const dynamicMarginTop =
                  areTicksTouching && config.isResponsiveTicks
                    ? longestTickLength + DEFAULT_TICK_LENGTH + DYNAMIC_MARGIN_TOP_PADDING
                    : 0

                // TODO: Technical debt - These mutations are read by parent/sibling components.
                // Should be refactored to use proper React state management or callbacks.
                config.dynamicMarginTop = dynamicMarginTop
                config.xAxis.tickWidthMax = longestTickLength

                // Compute effective tick rotations without mutating config
                const effectiveYAxisTickRotation =
                  config.isResponsiveTicks && config.orientation === 'horizontal' ? 0 : config.yAxis.tickRotation
                const effectiveXAxisTickRotation =
                  config.isResponsiveTicks && config.orientation === 'vertical' ? 0 : config.xAxis.tickRotation

                return (
                  <Group className='bottom-axis' width={parentWidth}>
                    {filteredTicks.map((tick, i, propsTicks) => {
                      // when using LogScale show major ticks values only
                      const showTick = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
                      const tickLength = showTick === 'block' ? MAJOR_TICK_LENGTH : DEFAULT_TICK_LENGTH
                      const to = { x: tick.to.x, y: tickLength }
                      const limitedWidth = 100 / propsTicks.length

                      // Configure rotation using effective values (computed above without mutations)
                      const tickRotation =
                        config.isResponsiveTicks && areTicksTouching
                          ? -Number(config.xAxis.maxTickRotation) || -90
                          : -Number(config.runtime.xAxis.tickRotation)

                      return (
                        <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                          {!config.xAxis.hideTicks && (
                            <Line
                              from={tick.from}
                              to={orientation === 'horizontal' && isLogarithmicAxis ? to : tick.to}
                              stroke={config.xAxis.tickColor}
                              strokeWidth={showTick === 'block' && isLogarithmicAxis ? MAJOR_LOG_TICK_STROKE_WIDTH : 1}
                            />
                          )}
                          {!config.xAxis.hideLabel && (
                            <Text
                              innerRef={el => (xAxisLabelRefs.current[i] = el)}
                              dy={
                                config.orientation === 'horizontal' && isLogarithmicAxis ? HORIZONTAL_LOG_DY_OFFSET : 0
                              }
                              display={config.orientation === 'horizontal' && isLogarithmicAxis ? showTick : 'block'}
                              x={tick.to.x}
                              y={tick.to.y + X_TICK_LABEL_PADDING}
                              angle={tickRotation}
                              verticalAnchor={
                                tickRotation < TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD ? 'middle' : 'start'
                              }
                              textAnchor={tickRotation ? 'end' : 'middle'}
                              width={
                                areTicksTouching && !config.isResponsiveTicks && !Number(effectiveXAxisTickRotation)
                                  ? limitedWidth
                                  : undefined
                              }
                              fill={config.xAxis.tickLabelColor}
                              fontSize={tickLabelFontSize}
                            >
                              {tick.formattedValue}
                            </Text>
                          )}
                        </Group>
                      )
                    })}
                    {!config.xAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                    <Text
                      innerRef={xAxisTitleRef}
                      className='x-axis-title-label'
                      x={xMax / 2}
                      y={isForestPlot ? 0 /* set via ref */ : axisMaxHeight}
                      textAnchor='middle'
                      verticalAnchor='start'
                      fontWeight='bold'
                      fill={config.xAxis.labelColor}
                      fontSize={axisLabelFontSize}
                    >
                      {!config.hideXAxisLabel ? props.label : null}
                    </Text>
                  </Group>
                )
              }}
            </AxisBottom>
          )}
        </svg>
        {!isDraggingAnnotation &&
          tooltipData &&
          Object.entries(tooltipData.data).length > 0 &&
          tooltipOpen &&
          showTooltip &&
          !tooltipData?.data?.some(subArray => subArray.some(item => item === undefined)) &&
          tooltipData.dataYPosition &&
          tooltipData.dataXPosition &&
          !config.tooltips.singleSeries && (
            <>
              <style>{`.tooltip {background-color: rgba(255,255,255, ${
                config.tooltips.opacity / 100
              }) !important;`}</style>
              <style>{`.tooltip {max-width:300px} !important; word-wrap: break-word; `}</style>
              <TooltipWithBounds
                ref={tooltipRef}
                key={Math.random()}
                className={'tooltip cdc-open-viz-module'}
                left={tooltipLeft}
                top={tooltipTop}
              >
                <ul>
                  {typeof tooltipData === 'object' &&
                    Object.entries(tooltipData.data)
                      .filter(([_, values]) => Array.isArray(values) && !values.includes(undefined))
                      .map((item, index) => <TooltipListItem item={item} key={index} />)}
                </ul>
              </TooltipWithBounds>
            </>
          )}
        {config.visualizationType === 'Bump Chart' && (
          <ReactTooltip
            id={`bump-chart`}
            variant='light'
            arrowColor='rgba(0,0,0,0)'
            className='tooltip'
            style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }}
          />
        )}
        {!isDraggingAnnotation && (
          <ReactTooltip
            id={`cdc-open-viz-tooltip-${runtime.uniqueId}`}
            variant='light'
            arrowColor='rgba(0,0,0,0)'
            className='tooltip'
            style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }}
          />
        )}
        <div className='animation-trigger' ref={triggerRef} />
        {/* SEPARATED BRUSH - Independent SVG overlay */}
        {config.xAxis.brushActive && config.xAxis.type !== 'categorical' && xMax > 0 && (
          <div
            style={{
              position: 'relative',
              marginTop: `${BRUSH_MARGIN}px`,
              left: `${yAxisWidth}px`,
              width: `${Math.max(xMax, BRUSH_MIN_WIDTH)}px`,
              height: `${BRUSH_HEIGHT}px`,
              pointerEvents: 'auto',
              zIndex: 15,
              touchAction: 'none', // Enable touch interactions for brush
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
            className='brush-overlay'
          >
            <BrushSelector xMax={Math.max(xMax, BRUSH_MIN_WIDTH)} yMax={BRUSH_HEIGHT} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
})

export default LinearChart
