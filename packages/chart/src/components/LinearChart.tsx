import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react'

// Libraries
import { AxisLeft, AxisBottom, AxisRight, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { Line, Bar } from '@visx/shape'
import { Text } from '@visx/text'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import BrushChart from './BrushChart'
// CDC Components
import { AreaChart, AreaChartStacked } from './AreaChart'
import BarChart from './BarChart'
import ConfigContext from '../ConfigContext'
import BoxPlot from './BoxPlot'
import ScatterPlot from './ScatterPlot'
import DeviationBar from './DeviationBar'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Forecasting from './Forecasting'
import LineChart from './LineChart'
import ForestPlot from './ForestPlot'
import PairedBarChart from './PairedBarChart'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import Regions from './Regions'
import CategoricalYAxis from './Axis/Categorical.Axis'

// Helpers
import { isConvertLineToBarGraph } from '../helpers/isConvertLineToBarGraph'
import { isLegendWrapViewport } from '@cdc/core/helpers/viewports'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { calcInitialHeight } from '../helpers/sizeHelpers'

// Hooks
import useMinMax from '../hooks/useMinMax'
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import useScales, { getTickValues, filterAndShiftLinearDateTicks } from '../hooks/useScales'
import useTopAxis from '../hooks/useTopAxis'
import { useTooltip as useCoveTooltip } from '../hooks/useTooltip'
import { useEditorPermissions } from './EditorPanel/useEditorPermissions'
import Annotation from './Annotations'
import { BlurStrokeText } from '@cdc/core/components/BlurStrokeText'
import { countNumOfTicks } from '../helpers/countNumOfTicks'

type LinearChartProps = {
  parentWidth: number
  parentHeight: number
}

const BOTTOM_LABEL_PADDING = 9
const X_TICK_LABEL_PADDING = 4.5
const DEFAULT_TICK_LENGTH = 8
const MONTH_AS_MS = 1000 * 60 * 60 * 24 * 30
const TICK_LABEL_FONT_SIZE = 16
const TICK_LABEL_MARGIN_RIGHT = 4.5
const GET_TEXT_WIDTH_FONT = `normal ${TICK_LABEL_FONT_SIZE}px Nunito, sans-serif`

const LinearChart = forwardRef<SVGAElement, LinearChartProps>(({ parentHeight, parentWidth }, svgRef) => {
  // prettier-ignore
  const {
    brushConfig,
    colorScale,
    config,
    currentViewport,
    dimensions,
    formatDate,
    formatNumber,
    handleChartAriaLabels,
    handleLineType,
    handleDragStateChange,
    isDraggingAnnotation,
    legendRef,
    parseDate,
    parentRef,
    tableData,
    transformedData: data,
    updateConfig,
    seriesHighlight,
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
  const { suffix, onlyShowTopPrefixSuffix } = dataFormat
  const { labelsAboveGridlines, hideAxis } = config.yAxis

  // HOOKS  % STATES
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, data)
  const { visSupportsReactTooltip } = useEditorPermissions()
  const { hasTopAxis } = useTopAxis(config)
  const [animatedChart, setAnimatedChart] = useState(false)
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const [suffixWidth, setSuffixWidth] = useState(0)
  const [yAxisAutoPadding, setYAxisAutoPadding] = useState(0)

  // REFS
  const axisBottomRef = useRef(null)
  const forestPlotRightLabelRef = useRef(null)
  const suffixRef = useRef(null)
  const topYLabelRef = useRef(null)
  const triggerRef = useRef()
  const xAxisLabelRefs = useRef([])
  const xAxisTitleRef = useRef(null)
  const lastMaxValue = useRef(maxValue)

  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  // VARS/MEMOS
  const shouldAbbreviate = true
  const isHorizontal = orientation === 'horizontal' || config.visualizationType === 'Forest Plot'
  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  const isForestPlot = visualizationType === 'Forest Plot'
  const isDateTime = config.xAxis.type === 'date-time'
  const suffixHasNoSpace = !suffix.includes(' ')
  const labelsOverflow = onlyShowTopPrefixSuffix && !suffixHasNoSpace
  const padding = orientation === 'horizontal' ? Number(config.xAxis.size) : Number(config.yAxis.size)
  const yLabelOffset = isNaN(parseInt(`${runtime.yAxis.labelOffset}`)) ? 0 : parseInt(`${runtime.yAxis.labelOffset}`)

  // zero if not forest plot
  const forestRowsHeight = isForestPlot ? config.data.length * config.forestPlot.rowHeight : 0

  // height before bottom axis
  const initialHeight = useMemo(
    () => calcInitialHeight(config, currentViewport),
    [config, currentViewport, parentHeight, config.heights?.vertical, config.heights?.horizontal]
  )
  const forestHeight = useMemo(() => initialHeight + forestRowsHeight, [initialHeight, forestRowsHeight])

  // width
  const width = useMemo(() => {
    const initialWidth = dimensions[0]
    const legendHidden = legend?.hide
    const legendOnTopOrBottom = ['bottom', 'top'].includes(config.legend?.position)
    const legendWrapped = isLegendWrapViewport(currentViewport)

    const legendShowingLeftOrRight = !isForestPlot && !legendHidden && !legendOnTopOrBottom && !legendWrapped

    if (!legendShowingLeftOrRight) return initialWidth

    if (legendRef.current) {
      const legendStyle = getComputedStyle(legendRef.current)
      return (
        initialWidth -
        legendRef.current.getBoundingClientRect().width -
        parseInt(legendStyle.marginLeft) -
        parseInt(legendStyle.marginRight)
      )
    }

    return initialWidth * 0.73
  }, [dimensions[0], config.legend, currentViewport, legendRef.current])

  // Used to calculate the y position of the x-axis title
  const bottomLabelStart = useMemo(() => {
    xAxisLabelRefs.current = xAxisLabelRefs.current?.filter(label => label)
    if (!xAxisLabelRefs.current.length) return
    const tallestLabel = Math.max(...xAxisLabelRefs.current.map(label => label.getBBox().height))
    return tallestLabel + X_TICK_LABEL_PADDING + DEFAULT_TICK_LENGTH
  }, [dimensions[0], config.xAxis, xAxisLabelRefs.current, config.xAxis.tickRotation])

  // xMax and yMax
  const xMax = width - runtime.yAxis.size - (visualizationType === 'Combo' ? config.yAxis.rightAxisSize : 0)
  const yMax = initialHeight + forestRowsHeight

  const isNoDataAvailable = config.filters && config.filters.values.length === 0 && data.length === 0

  const getXAxisData = d =>
    isDateScale(config.runtime.xAxis)
      ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime()
      : d[config.runtime.originalXAxis.dataKey]
  const getYAxisData = (d, seriesKey) => d[seriesKey]
  const xAxisDataMapped =
    config.brush.active && brushConfig.data?.length
      ? brushConfig.data.map(d => getXAxisData(d))
      : data.map(d => getXAxisData(d))
  const section = config.orientation === 'horizontal' || config.visualizationType === 'Forest Plot' ? 'yAxis' : 'xAxis'
  const properties = {
    data,
    tableData,
    config: {
      ...config,
      yAxis: {
        ...config.yAxis,
        scalePadding: labelsOverflow ? yAxisAutoPadding : config.yAxis.scalePadding,
        enablePadding: labelsOverflow || config.yAxis.enablePadding
      }
    },
    minValue,
    maxValue,
    isAllLine,
    existPositiveValue,
    xAxisDataMapped,
    xMax,
    yMax
  }
  const { min, max, leftMax, rightMax } = useMinMax(properties)
  const { yScaleRight, hasRightAxis } = useRightAxis({ config, yMax, data, updateConfig })
  const { xScale, yScale, seriesScale, g1xScale, g2xScale, xScaleNoPadding, xScaleAnnotation } = useScales({
    ...properties,
    min,
    max,
    leftMax,
    rightMax,
    dimensions,
    xMax: parentWidth - Number(config.orientation === 'horizontal' ? config.xAxis.size : config.yAxis.size)
  })

  const [yTickCount, xTickCount] = ['yAxis', 'xAxis'].map(axis =>
    countNumOfTicks({ axis, max, runtime, currentViewport, isHorizontal, data, config, min })
  )
  const handleNumTicks = isForestPlot ? config.data.length : yTickCount

  // Tooltip Helpers
  const { tooltipData, showTooltip, hideTooltip, tooltipOpen, tooltipLeft, tooltipTop } = useTooltip()

  // prettier-ignore
  const {
    handleTooltipMouseOver,
    handleTooltipClick,
    handleTooltipMouseOff,
    TooltipListItem,
    getXValueFromCoordinate
  } = useCoveTooltip({
      xScale,
      yScale,
      showTooltip,
      hideTooltip
  })
  // get the number of months between the first and last date
  const { dataKey } = runtime.xAxis
  const dateSpanMonths =
    data.length && isDateTime
      ? [0, data.length - 1].map(i => parseDate(data[i][dataKey])).reduce((a, b) => Math.abs(a - b)) / MONTH_AS_MS
      : 0
  const useDateSpanMonths = isDateTime && dateSpanMonths > xTickCount

  // GETTERS & FUNCTIONS
  const checkLineToBarGraph = () => {
    return isConvertLineToBarGraph(config.visualizationType, data, config.allowLineToBarGraph)
  }

  const handleLeftTickFormatting = (tick, index, ticks) => {
    if (isLogarithmicAxis && tick === 0.1) {
      //when logarithmic scale applied change value of first tick
      tick = 0
    }

    if (config.data && !config.data[index] && visualizationType === 'Forest Plot') return
    if (config.visualizationType === 'Forest Plot') return config.data[index][config.xAxis.dataKey]
    if (isDateScale(runtime.yAxis)) return formatDate(parseDate(tick))
    if (orientation === 'vertical' && max - min < 3)
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

  const onMouseMove = event => {
    const svgRect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - svgRect.left
    const y = event.clientY - svgRect.top

    setPoint({
      x,
      y
    })
  }

  // EFFECTS

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

  useEffect(() => {
    const suffixEl = suffixRef.current
    if (!suffixEl && !suffixWidth) return
    if (!suffixEl) return setSuffixWidth(0)
    const suffixElWidth = suffixEl.getBBox().width
    setSuffixWidth(suffixElWidth)
  }, [config.dataFormat.suffix, config.dataFormat.onlyShowTopPrefixSuffix])

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
    const brushHeight = brush?.active ? brush?.height : 0
    const forestRowsHeight = isForestPlot ? config.data.length * forestPlot.rowHeight : 0
    const topLabelOnGridlineHeight = topLabelOnGridline ? topYLabelRef.current.getBBox().height : 0
    const additionalHeight = axisBottomHeight + brushHeight + forestRowsHeight + topLabelOnGridlineHeight
    const newHeight = initialHeight + additionalHeight
    if (!parentRef.current) return

    parentRef.current.style.height = `${newHeight}px`

    /* Adding text above the top gridline overflows the bounds of the svg.
    To accommodate for this we need to...
    1. Add the extra height to the svg (done above)
    2. Adjust the viewBox to move the intended top height into focus
    3. if the legend is on the left or right, translate it by
      the label height so it is aligned with the top border */
    if (!topLabelOnGridlineHeight) return

    // Adjust the viewBox for the svg
    const svg = svgRef.current
    if (!svg) return
    const parentWidthFromRef = parentRef.current.getBoundingClientRect().width
    svg.setAttribute('viewBox', `0 ${-topLabelOnGridlineHeight} ${parentWidthFromRef} ${newHeight}`)

    // translate legend match viewBox-adjusted height
    if (!legendRef.current) return
    const legendIsLeftOrRight =
      legend?.position !== 'top' && legend?.position !== 'bottom' && !isLegendWrapViewport(currentViewport)
    legendRef.current.style.transform = legendIsLeftOrRight ? `translateY(${topLabelOnGridlineHeight}px)` : 'none'
  }, [axisBottomRef.current, config, bottomLabelStart, brush, currentViewport, topYLabelRef.current, initialHeight])

  useEffect(() => {
    if (lastMaxValue.current === maxValue) return
    lastMaxValue.current = maxValue

    if (!yAxisAutoPadding) return
    setYAxisAutoPadding(0)
  }, [maxValue])
  useEffect(() => {
    if (orientation === 'horizontal') return

    const maxValueIsGreaterThanTopGridLine = maxValue > Math.max(...yScale.ticks(handleNumTicks))

    if (!maxValueIsGreaterThanTopGridLine || !labelsOverflow) return
    const ticks = yScale.ticks(handleNumTicks)
    const tickGap = ticks.length === 1 ? ticks[0] : ticks[1] - ticks[0]
    const nextTick = Math.max(...yScale.ticks(handleNumTicks)) + tickGap
    const divideBy = minValue < 0 ? maxValue / 2 : maxValue
    const calculatedPadding = (nextTick - maxValue) / divideBy

    // if auto padding is too close to next tick, add one more ticks worth of padding
    const PADDING_THRESHOLD = 0.025
    const newPadding =
      calculatedPadding > PADDING_THRESHOLD ? calculatedPadding : calculatedPadding + tickGap / divideBy

    /* sometimes even though the padding is getting to the next tick exactly,
    d3 still doesn't show the tick. we add 0.1 to ensure to tip it over the edge */
    setYAxisAutoPadding(newPadding * 100 + 0.1)
  }, [maxValue, labelsOverflow, yScale, handleNumTicks])

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
      const accumulator = 100
      const sumOfTickWidth = tickWidthAll.reduce((a, b) => a + b, accumulator)
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
          left={Number(runtime.yAxis.size)}
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
                  const maxTickRotation = Number(config.xAxis.maxTickRotation) || 90
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
                          fontSize={TICK_LABEL_FONT_SIZE}
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
          left={Number(runtime.yAxis.size)}
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
                    const maxTickRotation = Number(config.xAxis.maxTickRotation) || 90
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
                            fontSize={TICK_LABEL_FONT_SIZE}
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
                  >
                    {runtime.xAxis.label}
                  </Text>
                </Group>
              </>
            )
          }}
        </AxisBottom>
      </>
    )
  }

  return isNaN(width) ? (
    <React.Fragment></React.Fragment>
  ) : (
    <ErrorBoundary component='LinearChart'>
      {/* ! Notice - div needed for tooltip boundaries (flip/flop) */}
      <div
        style={{ width: `${parentWidth}px`, overflow: 'visible', position: 'relative' }}
        className='tooltip-boundary'
      >
        <svg
          ref={svgRef}
          onMouseMove={onMouseMove}
          width={parentWidth}
          height={isNoDataAvailable ? 1 : parentHeight}
          className={`linear ${config.animate ? 'animated' : ''} ${animatedChart && config.animate ? 'animate' : ''} ${
            debugSvg && 'debug'
          } ${isDraggingAnnotation && 'dragging-annotation'}`}
          role='img'
          aria-label={handleChartAriaLabels(config)}
          style={{ overflow: 'visible' }}
        >
          {!isDraggingAnnotation && <Bar width={parentWidth} height={initialHeight} fill={'transparent'}></Bar>}{' '}
          {/* GRID LINES */}
          {/* Actual AxisLeft is drawn after visualization */}
          {!['Spark Line', 'Forest Plot'].includes(visualizationType) && config.yAxis.type !== 'categorical' && (
            <AxisLeft
              scale={yScale}
              left={Number(runtime.yAxis.size) - config.yAxis.axisPadding}
              numTicks={handleNumTicks}
            >
              {props => {
                const axisCenter =
                  config.orientation === 'horizontal'
                    ? (props.axisToPoint.y - props.axisFromPoint.y) / 2
                    : (props.axisFromPoint.y - props.axisToPoint.y) / 2
                return (
                  <Group className='left-axis'>
                    {props.ticks.map((tick, i) => {
                      const showTicks = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
                      const hideFirstGridLine = tick.index === 0 && tick.value === 0 && config.xAxis.hideAxis

                      return (
                        <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                          {runtime.yAxis.gridLines && !hideFirstGridLine ? (
                            <Line
                              key={`${tick.value}--hide-hideGridLines`}
                              display={(isLogarithmicAxis && showTicks).toString()}
                              from={{ x: tick.from.x + xMax, y: tick.from.y }}
                              to={tick.from}
                              stroke='#d6d6d6'
                            />
                          ) : (
                            ''
                          )}
                        </Group>
                      )
                    })}
                    <Text
                      className='y-label'
                      textAnchor='middle'
                      verticalAnchor='start'
                      transform={`translate(${-1 * runtime.yAxis.size + yLabelOffset}, ${axisCenter}) rotate(-90)`}
                      fontWeight='bold'
                      fill={config.yAxis.labelColor}
                    >
                      {props.label}
                    </Text>
                  </Group>
                )
              }}
            </AxisLeft>
          )}
          {visualizationType === 'Paired Bar' && generatePairedBarAxis()}
          {visualizationType === 'Deviation Bar' && config.runtime.series?.length === 1 && (
            <DeviationBar animatedChart={animatedChart} xScale={xScale} yScale={yScale} width={xMax} height={yMax} />
          )}
          {visualizationType === 'Paired Bar' && <PairedBarChart originalWidth={width} width={xMax} height={yMax} />}
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
          {visualizationType === 'Box Plot' && (
            <BoxPlot
              seriesScale={seriesScale}
              xMax={xMax}
              yMax={yMax}
              min={min}
              max={max}
              xScale={xScale}
              yScale={yScale}
            />
          )}
          {((visualizationType === 'Area Chart' && config.visualizationSubType === 'regular') ||
            visualizationType === 'Combo') && (
            <AreaChart
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
          {(visualizationType === 'Bar' || visualizationType === 'Combo' || checkLineToBarGraph()) && (
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
          {((visualizationType === 'Line' && !checkLineToBarGraph()) ||
            visualizationType === 'Combo' ||
            visualizationType === 'Bump Chart') && (
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
          {visualizationType === 'Forest Plot' && (
            <ForestPlot
              xScale={xScale}
              yScale={yScale}
              seriesScale={seriesScale}
              width={width}
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
          {/*Brush chart */}
          {config.brush.active && config.xAxis.type !== 'categorical' && <BrushChart xMax={xMax} yMax={yMax} />}
          {/* Line chart */}
          {/* TODO: Make this just line or combo? */}
          {!['Paired Bar', 'Box Plot', 'Area Chart', 'Scatter Plot', 'Deviation Bar', 'Forecasting', 'Bar'].includes(
            visualizationType
          ) &&
            !checkLineToBarGraph() && (
              <>
                <LineChart
                  xScale={xScale}
                  yScale={yScale}
                  getXAxisData={getXAxisData}
                  getYAxisData={getYAxisData}
                  xMax={xMax}
                  yMax={yMax}
                  seriesStyle={config.runtime.series}
                />
              </>
            )}
          {/* y anchors */}
          {config.yAxis.anchors &&
            config.yAxis.anchors.map((anchor, index) => {
              let position = yScale(anchor.value)
              let middleOffset = 0

              if (!anchor.value) return
              if (config.yAxis.labelPlacement === 'Below Bar') {
                const textOffset = -6.5
                middleOffset = textOffset + Number(config.series.length * config.barHeight) / config.series.length
              } else {
                const paddingOffset = 8
                middleOffset = paddingOffset
              }

              if (!position) return

              return (
                // prettier-ignore
                <Line
                  key={`yAxis-${anchor.value}--${index}`}
                  strokeDasharray={handleLineType(anchor.lineStyle)}
                  stroke={anchor.color ? anchor.color : 'rgba(0,0,0,1)'}
                  className='anchor-y'
                  from={{ x: 0 + padding, y: position - middleOffset}}
                  to={{ x: width - config.yAxis.rightAxisSize, y: position - middleOffset }}
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
              width={width}
            />
          )}
          {chartHasTooltipGuides && showTooltip && tooltipData && config.visual.verticalHoverLine && (
            <Group key='tooltipLine-vertical' className='vertical-tooltip-line'>
              <Line
                from={{ x: tooltipData.dataXPosition - 10, y: 0 }}
                to={{ x: tooltipData.dataXPosition - 10, y: yMax }}
                stroke={'black'}
                strokeWidth={1}
                pointerEvents='none'
                strokeDasharray='5,5'
                className='vertical-tooltip-line'
              />
            </Group>
          )}
          {chartHasTooltipGuides && showTooltip && tooltipData && config.visual.horizontalHoverLine && (
            <Group
              key='tooltipLine-horizontal'
              className='horizontal-tooltip-line'
              left={config.yAxis.size ? config.yAxis.size : 0}
            >
              <Line
                from={{ x: 0, y: tooltipData.dataYPosition }}
                to={{ x: xMax, y: tooltipData.dataYPosition }}
                stroke={'black'}
                strokeWidth={1}
                pointerEvents='none'
                strokeDasharray='5,5'
                className='horizontal-tooltip-line'
              />
            </Group>
          )}
          {isNoDataAvailable && (
            <Text
              x={Number(config.yAxis.size) + Number(xMax / 2)}
              y={initialHeight / 2 - (config.xAxis.padding || 0) / 2}
              textAnchor='middle'
            >
              {config.chartMessage.noData}
            </Text>
          )}
          {(config.visualizationType === 'Bar' || checkLineToBarGraph()) &&
            config.tooltips.singleSeries &&
            config.visual.horizontalHoverLine && (
              <Group
                key='tooltipLine-horizontal'
                className='horizontal-tooltip-line'
                left={config.yAxis.size ? config.yAxis.size : 0}
              >
                <Line
                  from={{ x: 0, y: point.y }}
                  to={{ x: xMax, y: point.y }}
                  stroke={'black'}
                  strokeWidth={1}
                  pointerEvents='none'
                  strokeDasharray='5,5'
                  className='horizontal-tooltip-line'
                />
              </Group>
            )}
          {(config.visualizationType === 'Bar' || checkLineToBarGraph()) &&
            config.tooltips.singleSeries &&
            config.visual.verticalHoverLine && (
              <Group key='tooltipLine-vertical' className='vertical-tooltip-line'>
                <Line
                  from={{ x: point.x, y: 0 }}
                  to={{ x: point.x, y: yMax }}
                  stroke={'black'}
                  strokeWidth={1}
                  pointerEvents='none'
                  strokeDasharray='5,5'
                  className='vertical-tooltip-line'
                />
              </Group>
            )}
          <Group left={Number(config.runtime.yAxis.size)}>
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
          {!['Spark Line', 'Forest Plot'].includes(visualizationType) && config.yAxis.type !== 'categorical' && (
            <AxisLeft
              scale={yScale}
              tickLength={isLogarithmicAxis ? 6 : 8}
              left={Number(runtime.yAxis.size) - config.yAxis.axisPadding}
              label={runtime.yAxis.label || runtime.yAxis.label}
              stroke='#333'
              tickFormat={handleLeftTickFormatting}
              numTicks={handleNumTicks}
            >
              {props => {
                const axisCenter =
                  config.orientation === 'horizontal'
                    ? (props.axisToPoint.y - props.axisFromPoint.y) / 2
                    : (props.axisFromPoint.y - props.axisToPoint.y) / 2
                const horizontalTickOffset =
                  yMax / props.ticks.length / 2 - (yMax / props.ticks.length) * (1 - config.barThickness) + 5
                return (
                  <Group className='left-axis'>
                    {!config.yAxis.hideAxis && (
                      <Line
                        from={props.axisFromPoint}
                        to={
                          runtime.horizontal
                            ? {
                                x: 0,
                                y:
                                  config.visualizationType === 'Forest Plot' ? parentHeight : Number(heights.horizontal)
                              }
                            : props.axisToPoint
                        }
                        stroke='#000'
                      />
                    )}
                    {yScale.domain()[0] < 0 && (
                      <Line
                        from={{ x: props.axisFromPoint.x, y: yScale(0) }}
                        to={{ x: xMax, y: yScale(0) }}
                        stroke='#333'
                      />
                    )}
                    {visualizationType === 'Bar' && orientation === 'horizontal' && xScale.domain()[0] < 0 && (
                      <Line
                        from={{ x: xScale(0), y: 0 }}
                        to={{ x: xScale(0), y: yMax }}
                        stroke='#333'
                        strokeWidth={2}
                      />
                    )}
                    {props.ticks.map((tick, i) => {
                      const minY = props.ticks[0].to.y
                      const barMinHeight = 15 // 15 is the min height for bars by default
                      const showTicks = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
                      const tickLength = showTicks === 'block' ? 7 : 0
                      const to = { x: tick.to.x - tickLength, y: tick.to.y }

                      // Vertical value/suffix vars
                      const lastTick = props.ticks.length - 1 === i
                      const hideTopTick = lastTick && onlyShowTopPrefixSuffix && suffix && !suffixHasNoSpace
                      const valueOnLinePadding = hideAxis ? -8 : -12
                      const labelXPadding = labelsAboveGridlines ? valueOnLinePadding : TICK_LABEL_MARGIN_RIGHT
                      const labelYPadding = labelsAboveGridlines ? 4 : 0
                      const labelX = tick.to.x - labelXPadding
                      const labelY = tick.to.y - labelYPadding
                      const labelVerticalAnchor = labelsAboveGridlines ? 'end' : 'middle'
                      const combineDomSuffixWithValue =
                        onlyShowTopPrefixSuffix && labelsAboveGridlines && suffix && lastTick

                      return (
                        <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                          {!runtime.yAxis.hideTicks && !labelsAboveGridlines && !hideTopTick && (
                            <Line
                              key={`${tick.value}--hide-hideTicks`}
                              from={tick.from}
                              to={isLogarithmicAxis ? to : tick.to}
                              stroke={config.yAxis.tickColor}
                              display={orientation === 'horizontal' ? 'none' : 'block'}
                              fontSize={TICK_LABEL_FONT_SIZE}
                            />
                          )}

                          {orientation === 'horizontal' &&
                            visualizationSubType !== 'stacked' &&
                            config.yAxis.labelPlacement === 'On Date/Category Axis' &&
                            !config.yAxis.hideLabel && (
                              <Text
                                transform={`translate(${tick.to.x - 5}, ${
                                  config.isLollipopChart
                                    ? tick.to.y - minY
                                    : tick.to.y -
                                      minY +
                                      (Number(config.barHeight * config.runtime.series.length) - barMinHeight) / 2
                                }) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation || 0 : 0})`}
                                verticalAnchor={'start'}
                                textAnchor={'end'}
                                fontSize={TICK_LABEL_FONT_SIZE}
                              >
                                {tick.formattedValue}
                              </Text>
                            )}

                          {orientation === 'horizontal' &&
                            visualizationSubType === 'stacked' &&
                            config.yAxis.labelPlacement === 'On Date/Category Axis' &&
                            !config.yAxis.hideLabel && (
                              <Text
                                transform={`translate(${tick.to.x - 5}, ${
                                  tick.to.y - minY + (Number(config.barHeight) - barMinHeight) / 2
                                }) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`}
                                verticalAnchor={'start'}
                                textAnchor={'end'}
                                fontSize={TICK_LABEL_FONT_SIZE}
                              >
                                {tick.formattedValue}
                              </Text>
                            )}

                          {orientation === 'horizontal' &&
                            visualizationType === 'Paired Bar' &&
                            !config.yAxis.hideLabel && (
                              <Text
                                transform={`translate(${tick.to.x - 5}, ${
                                  tick.to.y - minY + Number(config.barHeight) / 2
                                }) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`}
                                textAnchor={'end'}
                                verticalAnchor='middle'
                                fontSize={TICK_LABEL_FONT_SIZE}
                              >
                                {tick.formattedValue}
                              </Text>
                            )}
                          {orientation === 'horizontal' &&
                            visualizationType === 'Deviation Bar' &&
                            !config.yAxis.hideLabel && (
                              <Text
                                transform={`translate(${tick.to.x - 5}, ${
                                  config.isLollipopChart
                                    ? tick.to.y - minY + 2
                                    : tick.to.y - minY + Number(config.barHeight) / 2
                                }) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`}
                                textAnchor={'end'}
                                verticalAnchor='middle'
                                fontSize={TICK_LABEL_FONT_SIZE}
                              >
                                {tick.formattedValue}
                              </Text>
                            )}

                          {orientation === 'vertical' &&
                            visualizationType === 'Bump Chart' &&
                            !config.yAxis.hideLabel && (
                              <>
                                <Text
                                  display={config.useLogScale ? showTicks : 'block'}
                                  dx={config.useLogScale ? -6 : 0}
                                  x={config.runtime.horizontal ? tick.from.x + 2 : tick.to.x - 8.5}
                                  y={tick.to.y - 13 + (config.runtime.horizontal ? horizontalTickOffset : 0)}
                                  angle={-Number(config.yAxis.tickRotation) || 0}
                                  verticalAnchor={config.runtime.horizontal ? 'start' : 'middle'}
                                  textAnchor={config.runtime.horizontal ? 'start' : 'end'}
                                  fill={config.yAxis.tickLabelColor}
                                  fontSize={TICK_LABEL_FONT_SIZE}
                                >
                                  {config.runtime.seriesLabelsAll[tick.formattedValue - 1]}
                                </Text>

                                {(seriesHighlight.length === 0 ||
                                  seriesHighlight.includes(
                                    config.runtime.seriesLabelsAll[tick.formattedValue - 1]
                                  )) && (
                                  <rect
                                    x={0 - Number(config.yAxis.size)}
                                    y={tick.to.y - 8 + (config.runtime.horizontal ? horizontalTickOffset : 7)}
                                    width={Number(config.yAxis.size) + xScale(xScale.domain()[0])}
                                    height='2'
                                    fill={colorScale(config.runtime.seriesLabelsAll[tick.formattedValue - 1])}
                                  />
                                )}
                              </>
                            )}
                          {orientation === 'vertical' &&
                            visualizationType !== 'Paired Bar' &&
                            visualizationType !== 'Bump Chart' &&
                            !config.yAxis.hideLabel && (
                              <>
                                {/* TOP ONLY SUFFIX: Dom suffix for 'show only top suffix' behavior */}
                                {/* top suffix is shown alone and is allowed to 'overflow' to the right */}
                                {/* SPECIAL ONE CHAR CASE: a one character top-only suffix does not overflow */}
                                {/* IF VALUES ON LINE: suffix is combined with value to avoid having to calculate varying (now left-aligned) value widths */}
                                {onlyShowTopPrefixSuffix && lastTick && !labelsAboveGridlines && (
                                  <BlurStrokeText
                                    innerRef={suffixRef}
                                    display={isLogarithmicAxis ? showTicks : 'block'}
                                    dx={isLogarithmicAxis ? -6 : 0}
                                    x={labelX}
                                    y={labelY}
                                    angle={-Number(config.yAxis.tickRotation) || 0}
                                    verticalAnchor={labelVerticalAnchor}
                                    textAnchor={suffixHasNoSpace ? 'end' : 'start'}
                                    fill={config.yAxis.tickLabelColor}
                                    stroke={'#fff'}
                                    paintOrder={'stroke'} // keeps stroke under fill
                                    strokeLinejoin='round'
                                    style={{ whiteSpace: 'pre-wrap' }} // prevents leading spaces from being trimmed
                                    fontSize={TICK_LABEL_FONT_SIZE}
                                  >
                                    {suffix}
                                  </BlurStrokeText>
                                )}

                                {/* VALUE */}
                                <BlurStrokeText
                                  innerRef={el => lastTick && (topYLabelRef.current = el)}
                                  display={isLogarithmicAxis ? showTicks : 'block'}
                                  dx={isLogarithmicAxis ? -6 : 0}
                                  x={suffixHasNoSpace ? labelX - suffixWidth : labelX}
                                  y={labelY + (config.runtime.horizontal ? horizontalTickOffset : 0)}
                                  angle={-Number(config.yAxis.tickRotation) || 0}
                                  verticalAnchor={config.runtime.horizontal ? 'start' : labelVerticalAnchor}
                                  textAnchor={config.runtime.horizontal || labelsAboveGridlines ? 'start' : 'end'}
                                  fill={config.yAxis.tickLabelColor}
                                  stroke={'#fff'}
                                  disableStroke={!labelsAboveGridlines}
                                  strokeLinejoin='round'
                                  paintOrder={'stroke'} // keeps stroke under fill
                                  style={{ whiteSpace: 'pre-wrap' }} // prevents leading spaces from being trimmed
                                  fontSize={TICK_LABEL_FONT_SIZE}
                                >
                                  {`${tick.formattedValue}${combineDomSuffixWithValue ? suffix : ''}`}
                                </BlurStrokeText>
                              </>
                            )}
                        </Group>
                      )
                    })}
                    <Text
                      className='y-label'
                      textAnchor='middle'
                      verticalAnchor='start'
                      transform={`translate(${-1 * runtime.yAxis.size + yLabelOffset}, ${axisCenter}) rotate(-90)`}
                      fontWeight='bold'
                      fill={config.yAxis.labelColor}
                    >
                      {props.label}
                    </Text>
                  </Group>
                )
              }}
            </AxisLeft>
          )}
          {config.yAxis.type === 'categorical' && config.orientation === 'vertical' && (
            <CategoricalYAxis
              max={max}
              maxValue={maxValue}
              height={initialHeight}
              xMax={xMax}
              yMax={yMax}
              leftSize={Number(runtime.yAxis.size) - config.yAxis.axisPadding}
            />
          )}
          {/* Right Axis */}
          {hasRightAxis && (
            <AxisRight
              scale={yScaleRight}
              left={Number(width - config.yAxis.rightAxisSize)}
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
                  yMax / props.ticks.length / 2 - (yMax / props.ticks.length) * (1 - config.barThickness) + 5
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
                              fontSize={TICK_LABEL_FONT_SIZE}
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
              innerRef={axisBottomRef}
              top={
                runtime.horizontal && config.visualizationType !== 'Forest Plot'
                  ? Number(heights.horizontal) + Number(config.xAxis.axisPadding)
                  : config.visualizationType === 'Forest Plot'
                  ? yMax + Number(config.xAxis.axisPadding)
                  : yMax
              }
              left={config.visualizationType !== 'Forest Plot' ? Number(runtime.yAxis.size) : 0}
              label={config[section].label}
              tickFormat={handleBottomTickFormatting}
              scale={xScale}
              stroke='#333'
              numTicks={useDateSpanMonths ? dateSpanMonths : xTickCount}
              tickStroke='#333'
              tickValues={
                config.xAxis.manual
                  ? getTickValues(xAxisDataMapped, xScale, isDateTime ? xTickCount : getManualStep(), config)
                  : config.xAxis.type === 'date'
                  ? xAxisDataMapped
                  : undefined
              }
            >
              {props => {
                // For these charts, we generated all ticks in tickValues above, and now need to filter/shift them
                // so the last tick is always labeled
                if (config.xAxis.type === 'date' && !config.xAxis.manual) {
                  props.ticks = filterAndShiftLinearDateTicks(config, props, xAxisDataMapped, formatDate)
                }

                const distanceBetweenTicks =
                  useDateSpanMonths &&
                  xScale
                    .ticks(xTickCount)
                    .map(t => props.ticks.findIndex(tick => tick.value.getTime() === t.getTime()))
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
                const ismultiLabel = filteredTicks.some(tick => containsMultipleWords(tick.value))

                // Calculate sumOfTickWidth here, before map function
                const tickWidthMax = Math.max(
                  ...filteredTicks.map(tick => getTextWidth(tick.formattedValue, GET_TEXT_WIDTH_FONT))
                )
                // const marginTop = 20 // moved to top bc need for yMax calcs
                const accumulator = ismultiLabel ? 180 : 100

                const textWidths = filteredTicks.map(tick => getTextWidth(tick.formattedValue, GET_TEXT_WIDTH_FONT))
                const sumOfTickWidth = textWidths.reduce((a, b) => a + b, accumulator)
                const spaceBetweenEachTick = (xMax - sumOfTickWidth) / (filteredTicks.length - 1)

                // Check if ticks are overlapping
                // Determine the position of each tick
                let positions = [0] // The first tick is at position 0
                for (let i = 1; i < textWidths.length; i++) {
                  // The position of each subsequent tick is the position of the previous tick
                  // plus the width of the previous tick and the space
                  positions[i] = positions[i - 1] + textWidths[i - 1] + spaceBetweenEachTick
                }
                // calculate the end of x axis box
                const axisBBox = axisBottomRef?.current?.getBBox().height
                config.xAxis.axisBBox = axisBBox

                // Check if ticks are overlapping
                let areTicksTouching = false
                textWidths.forEach((_, i) => {
                  if (positions[i] + textWidths[i] > positions[i + 1]) {
                    areTicksTouching = true
                    return
                  }
                })

                // Force wrap when showing years once so it's easier to read
                if (config.xAxis.showYearsOnce) {
                  areTicksTouching = true
                }

                // force wrap it last tick is close to the end of the axis
                const lastTickWidth = textWidths[textWidths.length - 1]
                const lastTickPosition = positions[positions.length - 1] + lastTickWidth
                const lastTickEnd = lastTickPosition + lastTickWidth / 2
                const lastTickEndThreshold = xMax - lastTickWidth

                if (lastTickEnd > lastTickEndThreshold) {
                  areTicksTouching = true
                }

                const dynamicMarginTop =
                  areTicksTouching && config.isResponsiveTicks ? tickWidthMax + DEFAULT_TICK_LENGTH + 20 : 0

                config.dynamicMarginTop = dynamicMarginTop
                config.xAxis.tickWidthMax = tickWidthMax

                return (
                  <Group className='bottom-axis' width={dimensions[0]}>
                    {filteredTicks.map((tick, i, propsTicks) => {
                      // when using LogScale show major ticks values only
                      const showTick = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
                      const tickLength = showTick === 'block' ? 16 : DEFAULT_TICK_LENGTH
                      const to = { x: tick.to.x, y: tickLength }
                      const limitedWidth = 100 / propsTicks.length
                      //reset rotations by updating config
                      config.yAxis.tickRotation =
                        config.isResponsiveTicks && config.orientation === 'horizontal' ? 0 : config.yAxis.tickRotation
                      config.xAxis.tickRotation =
                        config.isResponsiveTicks && config.orientation === 'vertical' ? 0 : config.xAxis.tickRotation
                      //configure rotation

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
                              strokeWidth={showTick === 'block' && isLogarithmicAxis ? 1.3 : 1}
                            />
                          )}
                          {!config.xAxis.hideLabel && (
                            <Text
                              innerRef={el => (xAxisLabelRefs.current[i] = el)}
                              dy={config.orientation === 'horizontal' && isLogarithmicAxis ? 8 : 0}
                              display={config.orientation === 'horizontal' && isLogarithmicAxis ? showTick : 'block'}
                              x={tick.to.x}
                              y={tick.to.y + X_TICK_LABEL_PADDING}
                              angle={tickRotation}
                              verticalAnchor={tickRotation < -50 ? 'middle' : 'start'}
                              textAnchor={tickRotation ? 'end' : 'middle'}
                              width={
                                areTicksTouching && !config.isResponsiveTicks && !Number(config[section].tickRotation)
                                  ? limitedWidth
                                  : undefined
                              }
                              fill={config.xAxis.tickLabelColor}
                              fontSize={TICK_LABEL_FONT_SIZE}
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
                    >
                      {props.label}
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
          tooltipData.dataYPosition &&
          tooltipData.dataXPosition && (
            <>
              <style>{`.tooltip {background-color: rgba(255,255,255, ${
                config.tooltips.opacity / 100
              }) !important;`}</style>
              <style>{`.tooltip {max-width:300px} !important; word-wrap: break-word; `}</style>
              <TooltipWithBounds
                key={Math.random()}
                className={'tooltip cdc-open-viz-module'}
                left={tooltipLeft}
                top={tooltipTop}
              >
                <ul>
                  {typeof tooltipData === 'object' &&
                    Object.entries(tooltipData.data).map((item, index) => <TooltipListItem item={item} key={index} />)}
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
        {visSupportsReactTooltip() && !isDraggingAnnotation && (
          <ReactTooltip
            id={`cdc-open-viz-tooltip-${runtime.uniqueId}`}
            variant='light'
            arrowColor='rgba(0,0,0,0)'
            className='tooltip'
            style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }}
          />
        )}
        <div className='animation-trigger' ref={triggerRef} />
      </div>
    </ErrorBoundary>
  )
})

export default LinearChart
