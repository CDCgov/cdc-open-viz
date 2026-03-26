import React, {
  forwardRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useCallback
} from 'react'

// Libraries
import { AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { Line, Bar } from '@visx/shape'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Text } from '@visx/text'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import ResizeObserver from 'resize-observer-polyfill'
// CDC Components
import { isDateScale } from '@cdc/core/helpers/cove/date'
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import Regions from './Regions'
import { CategoricalYAxis, LeftAxis, LeftAxisGridlines, BottomAxis, PairedBarAxis, RightAxis } from './Axis'
import BrushSelector from './Brush/BrushSelector'
import VisualizationRenderer from './LinearChart/VisualizationRenderer'
import { TYPES_WITHOUT_GRID, TYPES_WITH_TOOLTIP_GUIDES } from './LinearChart/linearChart.constants'
import { useTickFormatters } from './LinearChart/utils/tickFormatting'

// Helpers
import { isLegendWrapViewport, isMobileFontViewport } from '@cdc/core/helpers/viewports'
import { calcInitialHeight } from '../helpers/sizeHelpers'
import { calculateHorizontalBarCategoryLabelWidth } from '../helpers/calculateHorizontalBarCategoryLabelWidth'
import { calculateLeftYAxisWidth } from '../helpers/calculateLeftYAxisWidth'

// Hooks
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import useScales from '../hooks/useScales'
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
const DEFAULT_LEFT_Y_AXIS_WIDTH = 50

// Font sizes
const TICK_LABEL_FONT_SIZE = 16
const TICK_LABEL_FONT_SIZE_SMALL = 13
const AXIS_LABEL_FONT_SIZE = 18
const AXIS_LABEL_FONT_SIZE_SMALL = 14

// Label positioning constants
const BELOW_BAR_TEXT_OFFSET = -6.5
const LABEL_PADDING_OFFSET = 8

// Brush constants
const BRUSH_HEIGHT = 70
const BRUSH_MARGIN = 10
const BRUSH_MIN_WIDTH = 100

// Tooltip constants
const TOOLTIP_EDGE_BUFFER = 10
const TOOLTIP_OFFSET = 6

// Chart-specific constants
const WARMING_STRIPES_HEIGHT = 78

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
    config,
    currentViewport,
    vizViewport,
    formatDate,
    formatNumber,
    handleChartAriaLabels,
    handleLineType,
    handleDragStateChange,
    interactionLabel,
    isDraggingAnnotation,
    legendRef,
    parseDate,
    parentRef,
    tableData,
    transformedData: data,
  } = useContext(ConfigContext)

  // CONFIG
  // todo: start destructuring this file for conciseness
  const { visualizationType, orientation, xAxis, yAxis, runtime, legend, forestPlot, debugSvg } = config

  const { inlineLabel } = config.yAxis

  // HOOKS  % STATES
  // When brush is active, use tableData (full dataset) for min/max calculation
  // so the y-axis shows the full range, but still use filtered data for rendering
  const dataForMinMax = config.xAxis.brushActive && tableData && tableData.length > 0 ? tableData : data
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, dataForMinMax)

  const { visSupportsSmallMultiples } = useEditorPermissions()
  const { hasTopAxis } = getTopAxis(config)

  // Increment on tableData change to force BrushSelector remount when filters change
  const brushKeyRef = useRef(0)
  const prevTableDataRef = useRef(tableData)
  if (prevTableDataRef.current !== tableData) {
    prevTableDataRef.current = tableData
    brushKeyRef.current += 1
  }

  const [animatedChart, setAnimatedChart] = useState(false)
  const [showHoverLine, setShowHoverLine] = useState(false)
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const [suffixWidth, setSuffixWidth] = useState(0)
  const [calculatedSvgHeight, setCalculatedSvgHeight] = useState<number | null>(null)
  const [axisUpdateKey, setAxisUpdateKey] = useState(0)
  const [axisBottomSizeKey, setAxisBottomSizeKey] = useState(0)
  const [synchronizedXValue, setSynchronizedXValue] = useState<any>(null)

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
    [
      visualizationType,
      currentViewport,
      config.heights?.vertical,
      config.heights?.horizontal,
      config.heights?.mobileVertical,
      config.orientation
    ]
  )
  const forestHeight = useMemo(() => initialHeight + forestRowsHeight, [initialHeight, forestRowsHeight])

  // Used to calculate the y position of the x-axis title
  // Dependencies trigger recalc when axis config changes (affects label rendering/size)
  const bottomLabelStart = useMemo(() => {
    xAxisLabelRefs.current = xAxisLabelRefs.current?.filter(label => label)
    if (!xAxisLabelRefs.current.length) return
    const tallestLabel = Math.max(...xAxisLabelRefs.current.map(label => label.getBBox().height))
    return tallestLabel + X_TICK_LABEL_PADDING + DEFAULT_TICK_LENGTH
  }, [parentWidth, config.xAxis.tickRotation, config.xAxis.hideLabel, xAxisLabelRefs.current, axisUpdateKey])

  const yMax = initialHeight + forestRowsHeight

  const isNoDataAvailable = config.filters?.length > 0 && data.length === 0

  // Memoized data accessors to prevent unnecessary re-renders
  const getXAxisData = useCallback(
    d =>
      isDateScale(config.runtime.xAxis)
        ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime()
        : d[config.runtime.originalXAxis.dataKey],
    [config.runtime.xAxis, config.runtime.originalXAxis.dataKey, parseDate]
  )
  const getYAxisData = useCallback((d, seriesKey) => d[seriesKey], [])

  const xAxisDataMapped = useMemo(() => data.map(d => getXAxisData(d)), [data, getXAxisData])

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

  // Force update x axis ticks when filtering
  useLayoutEffect(() => {
    setAxisUpdateKey(prev => prev + 1)
  }, [data.length, xAxisDataMapped?.[0], xAxisDataMapped?.[xAxisDataMapped.length - 1]])

  // Recompute heights when bottom axis size changes (e.g., font load or wrap).
  useEffect(() => {
    const axisBottomEl = axisBottomRef.current
    if (!axisBottomEl) return
    const observer = new ResizeObserver(() => {
      setAxisBottomSizeKey(prev => prev + 1)
    })
    observer.observe(axisBottomEl)
    return () => observer.disconnect()
  }, [axisBottomRef.current])

  const { yScaleRight, hasRightAxis } = useRightAxis({ config, yMax, data })

  // State for computed left-axis width - shared across all linear-chart types.
  const [currentYAxisWidth, setCurrentYAxisWidth] = useState<number>(DEFAULT_LEFT_Y_AXIS_WIDTH)
  const yAxisWidth = currentYAxisWidth

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
    yScaleAnnotation,
    min,
    max
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

  // Consolidated tick formatters
  const { handleLeftTickFormatting, handleBottomTickFormatting } = useTickFormatters({
    isLogarithmicAxis,
    orientation,
    visualizationType,
    min,
    max,
    shouldAbbreviate
  })

  // Calculate category label space for horizontal category axes
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

  const [yTickCount, xTickCount] = ['yAxis', 'xAxis'].map(axis =>
    countNumOfTicks({ axis, max, runtime, currentViewport, isHorizontal, data, config, min })
  )
  const handleNumTicks = isForestPlot ? config.data.length : yTickCount

  const calculatedYAxisWidth = useMemo(() => {
    if (isHorizontal && config.visualizationType === 'Bar') {
      return categoryLabelSpace + horizontalYAxisLabelSpace
    }

    return calculateLeftYAxisWidth({
      config,
      data,
      yScale,
      numTicks: handleNumTicks,
      parentWidth,
      tickLabelFont: GET_TEXT_WIDTH_FONT,
      axisLabelFontSize,
      handleLeftTickFormatting,
      categoryLabelSpace,
      horizontalYAxisLabelSpace
    })
  }, [
    config,
    data,
    yScale,
    handleNumTicks,
    parentWidth,
    isHorizontal,
    GET_TEXT_WIDTH_FONT,
    axisLabelFontSize,
    handleLeftTickFormatting,
    categoryLabelSpace,
    horizontalYAxisLabelSpace
  ])

  useLayoutEffect(() => {
    if (parentWidth <= 0) return

    if (calculatedYAxisWidth !== currentYAxisWidth) {
      setCurrentYAxisWidth(calculatedYAxisWidth)
    }
  }, [calculatedYAxisWidth, currentYAxisWidth, parentWidth])

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
    yAxisWidth,
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
  const chartHasTooltipGuides = () => {
    const { visualizationType } = config
    if (visualizationType === 'Combo' && runtime.forecastingSeriesKeys > 0) return true
    return TYPES_WITH_TOOLTIP_GUIDES.includes(visualizationType as any)
  }

  const getManualStep = useCallback(() => {
    let manualStep = config.xAxis.manualStep
    if (config.xAxis.viewportStepCount && config.xAxis.viewportStepCount[currentViewport]) {
      manualStep = config.xAxis.viewportStepCount[currentViewport]
    }
    return manualStep
  }, [config.xAxis.manualStep, config.xAxis.viewportStepCount, currentViewport])

  const smallMultiplesSync = useSmallMultipleSynchronization(xMax, yMax, yAxisWidth, getXValueFromCoordinate)

  const onMouseMove = event => {
    const svgRect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - svgRect.left
    const y = event.clientY - svgRect.top

    setPoint({
      x,
      y
    })

    // Warming Stripes handles its own sync at the rect level since
    // getXValueFromCoordinate won't map correctly due to data sampling
    if (visualizationType !== 'Warming Stripes') {
      smallMultiplesSync.onMouseMove?.(event)
    }
  }

  const onMouseLeave = () => {
    if (visualizationType !== 'Warming Stripes') {
      smallMultiplesSync.onMouseLeave?.()
    }
  }

  // Use custom hook to provide programmatic tooltip control for small multiples
  const internalSvgRef = useProgrammaticTooltip({
    svgRef,
    getCoordinateFromXValue,
    config,
    yAxisWidth,
    setPoint,
    setShowHoverLine,
    handleTooltipMouseOver,
    hideTooltip,
    setSynchronizedXValue
  })

  // Make sure the chart is visible if in the editor
  useEffect(() => {
    const element = document.querySelector('.is-editor')
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
    config.xAxis.brushActive,
    currentViewport,
    topYLabelRef.current,
    initialHeight,
    parentWidth,
    axisBottomSizeKey
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
          width={parentWidth}
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
          {!TYPES_WITHOUT_GRID.includes(visualizationType as any) && config.yAxis.type !== 'categorical' && (
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
          {visualizationType === 'Paired Bar' && (
            <PairedBarAxis
              g1xScale={g1xScale}
              g2xScale={g2xScale}
              yMax={yMax}
              xMax={xMax}
              yAxisWidth={yAxisWidth}
              bottomLabelStart={bottomLabelStart}
              tickLabelFontSize={tickLabelFontSize}
              axisLabelFontSize={axisLabelFontSize}
              axisBottomRef={axisBottomRef}
              xAxisLabelRefs={xAxisLabelRefs}
              tickLabelFont={GET_TEXT_WIDTH_FONT}
            />
          )}
          {/* Visualization Renderer - handles all chart type rendering */}
          <VisualizationRenderer
            xScale={xScale}
            yScale={yScale}
            xMax={xMax}
            yMax={yMax}
            seriesScale={seriesScale}
            xScaleNoPadding={xScaleNoPadding}
            min={min}
            max={max}
            parentWidth={parentWidth}
            yAxisWidth={yAxisWidth}
            forestHeight={forestHeight}
            animatedChart={animatedChart}
            tooltipData={tooltipData}
            showTooltip={showTooltip}
            handleTooltipMouseOver={handleTooltipMouseOver}
            handleTooltipMouseOff={handleTooltipMouseOff}
            handleTooltipClick={handleTooltipClick}
            getXAxisData={getXAxisData}
            getYAxisData={getYAxisData}
            svgRef={svgRef}
            forestPlotRightLabelRef={forestPlotRightLabelRef}
            synchronizedXValue={synchronizedXValue}
          />
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
                  from={{ x: Number(yAxisWidth), y: position - middleOffset }}
                  to={{ x: Number(yAxisWidth) + Number(xMax), y: position - middleOffset }}
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
                  from={{ x: Number(anchorPosition) + Number(yAxisWidth), y: 0 }}
                  to={{ x: Number(anchorPosition) + Number(yAxisWidth), y: yMax }}
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
              yAxisWidth={yAxisWidth}
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
              <HoverLine
                xMax={xMax}
                yMax={yMax}
                point={point}
                tooltipData={tooltipData}
                orientation='horizontal'
                yAxisWidth={yAxisWidth}
              />
              <HoverLine
                xMax={xMax}
                yMax={yMax}
                point={point}
                tooltipData={tooltipData}
                orientation='vertical'
                yAxisWidth={yAxisWidth}
              />
            </>
          )}
          <Group left={yAxisWidth}>
            <Annotation.Draggable
              xScale={xScale}
              yScale={yScale}
              xScaleAnnotation={xScaleAnnotation}
              yScaleAnnotation={yScaleAnnotation}
              xMax={xMax}
              yMax={yMax}
              seriesScale={seriesScale}
              svgRef={svgRef}
              onDragStateChange={handleDragStateChange}
            />
          </Group>
          {/* Highlighted regions */}
          {/* Y axis */}
          {/* Horizon charts don't have a grid but should be rendered with a left axis */}
          {(!TYPES_WITHOUT_GRID.includes(visualizationType as any) || visualizationType === 'Horizon Chart') &&
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
            <RightAxis
              yScaleRight={yScaleRight}
              yMax={yMax}
              xMax={xMax}
              yAxisWidth={yAxisWidth}
              tickLabelFontSize={tickLabelFontSize}
              axisLabelFontSize={axisLabelFontSize}
            />
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
            <BottomAxis
              axisBottomRef={axisBottomRef}
              xScale={xScale}
              yMax={yMax}
              xMax={xMax}
              yAxisWidth={yAxisWidth}
              xTickCount={xTickCount}
              tickLabelFontSize={tickLabelFontSize}
              axisLabelFontSize={axisLabelFontSize}
              handleBottomTickFormatting={handleBottomTickFormatting}
              useDateSpanMonths={useDateSpanMonths}
              dateSpanMonths={dateSpanMonths}
              xAxisDataMapped={xAxisDataMapped}
              uniqueXAxisDataMapped={uniqueXAxisDataMapped}
              isDateTime={isDateTime}
              bottomLabelStart={bottomLabelStart}
              parentWidth={parentWidth}
              xAxisLabelRefs={xAxisLabelRefs}
              xAxisTitleRef={xAxisTitleRef}
              getManualStep={getManualStep}
            />
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
                className={'tooltip cove-visualization'}
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
            <BrushSelector key={brushKeyRef.current} xMax={Math.max(xMax, BRUSH_MIN_WIDTH)} yMax={BRUSH_HEIGHT} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
})

export default LinearChart
