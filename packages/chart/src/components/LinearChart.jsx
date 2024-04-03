import React, { useContext, useEffect, useRef, useState } from 'react'

// Libraries
import { AxisLeft, AxisBottom, AxisRight, AxisTop } from '@visx/axis'
import { Group } from '@visx/group'
import { Line, Bar } from '@visx/shape'
import { Text } from '@visx/text'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import { isDateScale } from '@cdc/core/helpers/cove/date'

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
import useIntersectionObserver from './../hooks/useIntersectionObserver'
import Regions from './Regions'

// Hooks
import useMinMax from '../hooks/useMinMax'
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import useScales from '../hooks/useScales'
import useTopAxis from '../hooks/useTopAxis'
import { useTooltip as useCoveTooltip } from '../hooks/useTooltip'
import { useEditorPermissions } from './EditorPanel/useEditorPermissions'
import Annotations from './Annotations'
// styles
import ZoomBrush from './ZoomBrush'

const LinearChart = props => {
  const { transformedData: data, dimensions, config, parseDate, formatDate, currentViewport, formatNumber, handleChartAriaLabels, updateConfig, handleLineType, getTextWidth } = useContext(ConfigContext)
  // todo: start destructuring this file for conciseness
  const { visualizationType, visualizationSubType, orientation, xAxis, yAxis, runtime, debugSvg } = config

  // configure width
  let [width] = dimensions
  if (config && config.legend && !config.legend.hide && config.legend.position !== 'bottom' && ['lg', 'md'].includes(currentViewport)) {
    width = width * 0.73
  }
  //  configure height , yMax, xMax
  const { horizontal: heightHorizontal } = config.heights
  const isHorizontal = orientation === 'horizontal' || config.visualizationType === 'Forest Plot'
  const shouldAbbreviate = true
  let height = config.aspectRatio ? width * config.aspectRatio : config.visualizationType === 'Forest Plot' ? config.heights['vertical'] : config.heights[orientation]
  const xMax = width - runtime.yAxis.size - (visualizationType === 'Combo' ? config.yAxis.rightAxisSize : 0)
  let yMax = height - (orientation === 'horizontal' ? 0 : runtime.xAxis.size)

  if (config.visualizationType === 'Forest Plot') {
    height = height + config.data.length * config.forestPlot.rowHeight
    yMax = yMax + config.data.length * config.forestPlot.rowHeight
    width = dimensions[0]
  }
  if (config.brush?.active) {
    height = height + config.brush?.height
  }

  // hooks  % states
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, data)
  const { visSupportsReactTooltip } = useEditorPermissions()
  const { hasTopAxis } = useTopAxis(config)
  const [animatedChart, setAnimatedChart] = useState(false)
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const annotationRefs = useRef(null)

  // refs
  const triggerRef = useRef()
  const svgRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  // getters & functions
  const getXAxisData = d => (isDateScale(config.runtime.xAxis) ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
  const getYAxisData = (d, seriesKey) => d[seriesKey]
  const xAxisDataMapped = config.brush.active && config.brush.data?.length ? config.brush.data.map(d => getXAxisData(d)) : data.map(d => getXAxisData(d))
  const section = config.orientation === 'horizontal' || config.visualizationType === 'Forest Plot' ? 'yAxis' : 'xAxis'
  const properties = { data, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped, xMax, yMax }
  const { min, max, leftMax, rightMax } = useMinMax(properties)
  const { yScaleRight, hasRightAxis } = useRightAxis({ config, yMax, data, updateConfig })
  const { xScale, yScale, seriesScale, g1xScale, g2xScale, xScaleNoPadding, xScaleBrush } = useScales({ ...properties, min, max, leftMax, rightMax, dimensions })

  // sets the portal x/y for where tooltips should appear on the page.
  const [chartPosition, setChartPosition] = useState(null)
  useEffect(() => {
    setChartPosition(svgRef?.current?.getBoundingClientRect())
  }, [svgRef, config.legend])

  const handleLeftTickFormatting = (tick, index) => {
    if (config.useLogScale && tick === 0.1) {
      //when logarithmic scale applied change value of first tick
      tick = 0
    }

    if (config.data && !config.data[index] && visualizationType === 'Forest Plot') return
    if (config.visualizationType === 'Forest Plot') return config.data[index][config.xAxis.dataKey]
    if (isDateScale(runtime.yAxis)) return formatDate(parseDate(tick))
    if (orientation === 'vertical') return formatNumber(tick, 'left', shouldAbbreviate)
    return tick
  }

  const handleBottomTickFormatting = tick => {
    if (config.useLogScale && tick === 0.1) {
      // when logarithmic scale applied change value FIRST  of  tick
      tick = 0
    }

    if (isDateScale(runtime.xAxis) && config.visualizationType !== 'Forest Plot') return formatDate(tick)
    if (orientation === 'horizontal' && config.visualizationType !== 'Forest Plot') return formatNumber(tick, 'left', shouldAbbreviate)
    if (config.xAxis.type === 'continuous' && config.visualizationType !== 'Forest Plot') return formatNumber(tick, 'bottom', shouldAbbreviate)
    if (config.visualizationType === 'Forest Plot') return formatNumber(tick, 'left', config.dataFormat.abbreviated, config.runtime.xAxis.prefix, config.runtime.xAxis.suffix, Number(config.dataFormat.roundTo))
    return tick
  }

  const countNumOfTicks = axis => {
    const { numTicks } = runtime[axis]
    let tickCount = undefined

    if (axis === 'yAxis') {
      tickCount = isHorizontal && !numTicks ? data.length : isHorizontal && numTicks ? numTicks : !isHorizontal && !numTicks ? undefined : !isHorizontal && numTicks && numTicks
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
      if (isHorizontal && tickCount === undefined && !config.dataFormat.roundTo) {
        // then it is set to Auto
        // - check for small numbers situation
        if (max <= 3) {
          tickCount = 2
        } else {
          tickCount = 4 // same default as standalone components
        }
      }

      if (config.visualizationType === 'Forest Plot') {
        tickCount = config.yAxis.numTicks !== '' ? config.yAxis.numTicks : 4
      }
    }

    return tickCount
  }

  // Tooltip Helpers
  const { tooltipData, showTooltip, hideTooltip, tooltipOpen, tooltipLeft, tooltipTop } = useTooltip()

  // prettier-ignore
  const {
    handleTooltipMouseOver,
    handleTooltipClick,
    handleTooltipMouseOff,
    tooltipStyles,
    TooltipListItem,
    getXValueFromCoordinateDate,
    getXValueFromCoordinate
  } = useCoveTooltip({
      xScale,
      yScale,
      showTooltip,
      hideTooltip
  })

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

  const padding = orientation === 'horizontal' ? Number(config.xAxis.size) : Number(config.yAxis.size)

  const handleNumTicks = () => {
    // On forest plots we need to return every "study" or y axis value.
    if (config.visualizationType === 'Forest Plot') return config.data.length
    return countNumOfTicks('yAxis')
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

  return isNaN(width) ? (
    <React.Fragment></React.Fragment>
  ) : (
    <ErrorBoundary component='LinearChart'>
      {/* ! Notice - div needed for tooltip boundaries (flip/flop) */}
      <div style={{ width: `${width}px`, height: `${height}px`, overflow: 'visible', touchAction: 'none' }} className='tooltip-boundary'>
        <svg
          // onMouseLeave={() => setPoint(null)}
          onMouseMove={onMouseMove}
          width={'100%'}
          height={'100%'}
          className={`linear ${config.animate ? 'animated' : ''} ${animatedChart && config.animate ? 'animate' : ''} ${debugSvg && 'debug'}`}
          role='img'
          aria-label={handleChartAriaLabels(config)}
          ref={svgRef}
          style={{ overflow: 'visible' }}
        >
          <Bar width={width} height={height} fill={'transparent'}></Bar> {/* Highlighted regions */}
          {/* Y axis */}
          {!['Spark Line', 'Forest Plot'].includes(visualizationType) && (
            <AxisLeft scale={yScale} tickLength={config.useLogScale ? 6 : 8} left={Number(runtime.yAxis.size) - config.yAxis.axisPadding} label={runtime.yAxis.yAxis?.label || runtime.yAxis.label} stroke='#333' tickFormat={(tick, i) => handleLeftTickFormatting(tick, i)} numTicks={handleNumTicks()}>
              {props => {
                const axisCenter = config.orientation === 'horizontal' ? (props.axisToPoint.y - props.axisFromPoint.y) / 2 : (props.axisFromPoint.y - props.axisToPoint.y) / 2
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
                          {!runtime.yAxis.hideTicks && <Line key={`${tick.value}--hide-hideTicks`} from={tick.from} to={config.useLogScale ? to : tick.to} stroke={config.yAxis.tickColor} display={orientation === 'horizontal' ? 'none' : 'block'} />}

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
                const axisCenter = config.orientation === 'horizontal' ? (props.axisToPoint.y - props.axisFromPoint.y) / 2 : (props.axisFromPoint.y - props.axisToPoint.y) / 2
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
              top={runtime.horizontal && config.visualizationType !== 'Forest Plot' ? Number(heightHorizontal) + Number(config.xAxis.axisPadding) : config.visualizationType === 'Forest Plot' ? yMax + Number(config.xAxis.axisPadding) : yMax}
              left={config.visualizationType !== 'Forest Plot' ? Number(runtime.yAxis.size) : 0}
              label={runtime.xAxis.label}
              tickFormat={handleBottomTickFormatting}
              scale={xScale}
              stroke='#333'
              numTicks={countNumOfTicks('xAxis')}
              tickStroke='#333'
            >
              {props => {
                const axisCenter = config.visualizationType !== 'Forest Plot' ? (props.axisToPoint.x - props.axisFromPoint.x) / 2 : dimensions[0] / 2
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

                const dynamicMarginTop = areTicksTouching && config.isResponsiveTicks ? tickWidthMax + defaultTickLength + 20 : 0
                const rotation = Number(config.xAxis.tickRotation) > 0 ? Number(config.xAxis.tickRotation) : 0

                config.dynamicMarginTop = dynamicMarginTop
                config.xAxis.tickWidthMax = tickWidthMax

                return (
                  <Group className='bottom-axis' width={dimensions[0]}>
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
                          {!config.xAxis.hideTicks && <Line from={tick.from} to={orientation === 'horizontal' && config.useLogScale ? to : tick.to} stroke={config.xAxis.tickColor} strokeWidth={showTick === 'block' && config.useLogScale ? 1.3 : 1} />}
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
                    <Text
                      x={axisCenter}
                      y={
                        config.visualizationType === 'Forest Plot'
                          ? config.xAxis.tickWidthMax + 40
                          : config.orientation === 'horizontal'
                          ? dynamicMarginTop || config.xAxis.labelOffset
                          : config.isResponsiveTicks && dynamicMarginTop && !isHorizontal
                          ? dynamicMarginTop
                          : Number(rotation) && !config.isResponsiveTicks && !isHorizontal
                          ? Number(rotation + tickWidthMax / 1.3)
                          : Number(config.xAxis.labelOffset)
                      }
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
          {visualizationType === 'Paired Bar' && (
            <>
              <AxisBottom top={yMax} left={Number(runtime.yAxis.size)} label={runtime.xAxis.label} tickFormat={isDateScale(runtime.xAxis) ? formatDate : formatNumber} scale={g1xScale} stroke='#333' tickStroke='#333' numTicks={runtime.xAxis.numTicks || undefined}>
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
                tickFormat={isDateScale(runtime.xAxis) ? formatDate : runtime.xAxis.dataKey !== 'Year' ? formatNumber : tick => tick}
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
          {visualizationType === 'Deviation Bar' && config.series?.length === 1 && <DeviationBar animatedChart={animatedChart} xScale={xScale} yScale={yScale} width={xMax} height={yMax} />}
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
          {visualizationType === 'Box Plot' && <BoxPlot xScale={xScale} yScale={yScale} />}
          {((visualizationType === 'Area Chart' && config.visualizationSubType === 'regular') || visualizationType === 'Combo') && (
            <AreaChart xScale={xScale} yScale={yScale} yMax={yMax} xMax={xMax} chartRef={svgRef} width={xMax} height={yMax} handleTooltipMouseOver={handleTooltipMouseOver} handleTooltipMouseOff={handleTooltipMouseOff} tooltipData={tooltipData} showTooltip={showTooltip} />
          )}
          {((visualizationType === 'Area Chart' && config.visualizationSubType === 'stacked') || visualizationType === 'Combo') && (
            <AreaChartStacked xScale={xScale} yScale={yScale} yMax={yMax} xMax={xMax} chartRef={svgRef} width={xMax} height={yMax} handleTooltipMouseOver={handleTooltipMouseOver} handleTooltipMouseOff={handleTooltipMouseOff} tooltipData={tooltipData} showTooltip={showTooltip} />
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
              width={width}
              height={height}
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
            />
          )}
          {/*Zoom Brush */}
          {['Line', 'Bar', 'Combo', 'Area Chart'].includes(config.visualizationType) && !isHorizontal && <ZoomBrush xScaleBrush={xScaleBrush} yScale={yScale} xMax={xMax} yMax={yMax} />}
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

              let anchorPosition = isDateScale(newX) ? xScale(parseDate(anchor.value, false)) : xScale(anchor.value)

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
          {/* we are handling regions in bar charts differently, so that we can calculate the bar group into the region space. */}
          {/* prettier-ignore */}
          {config.visualizationType !== 'Bar' && config.visualizationType !== 'Combo' && (
            <Regions xScale={xScale} handleTooltipClick={handleTooltipClick} handleTooltipMouseOff={handleTooltipMouseOff} handleTooltipMouseOver={handleTooltipMouseOver} showTooltip={showTooltip} hideTooltip={hideTooltip} tooltipData={tooltipData} yMax={yMax} width={width} />
          )}
          {chartHasTooltipGuides && showTooltip && tooltipData && config.visual.verticalHoverLine && (
            <Group key='tooltipLine-vertical' className='vertical-tooltip-line'>
              <Line from={{ x: tooltipData.dataXPosition - 10, y: 0 }} to={{ x: tooltipData.dataXPosition - 10, y: yMax }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='vertical-tooltip-line' />
            </Group>
          )}
          {chartHasTooltipGuides && showTooltip && tooltipData && config.visual.horizontalHoverLine && (
            <Group key='tooltipLine-horizontal' className='horizontal-tooltip-line' left={config.yAxis.size ? config.yAxis.size : 0}>
              <Line from={{ x: 0, y: tooltipData.dataYPosition }} to={{ x: xMax, y: tooltipData.dataYPosition }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='horizontal-tooltip-line' />
            </Group>
          )}
          {config.filters && config.filters.values.length === 0 && data.length === 0 && (
            <Text x={Number(config.yAxis.size) + Number(xMax / 2)} y={height / 2 - config.xAxis.size / 2} textAnchor='middle'>
              {config.chartMessage.noData}
            </Text>
          )}
          {config.visualizationType === 'Bar' && config.tooltips.singleSeries && config.visual.horizontalHoverLine && (
            <Group key='tooltipLine-horizontal' className='horizontal-tooltip-line' left={config.yAxis.size ? config.yAxis.size : 0}>
              <Line from={{ x: 0, y: point.y }} to={{ x: xMax, y: point.y }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='horizontal-tooltip-line' />
            </Group>
          )}
          {config.visualizationType === 'Bar' && config.tooltips.singleSeries && config.visual.verticalHoverLine && (
            <Group key='tooltipLine-vertical' className='vertical-tooltip-line'>
              <Line from={{ x: point.x, y: 0 }} to={{ x: point.x, y: yMax }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='vertical-tooltip-line' />
            </Group>
          )}
          <Annotations xScale={xScale} yScale={yScale} xMax={xMax} />
        </svg>
        {tooltipData && Object.entries(tooltipData.data).length > 0 && tooltipOpen && showTooltip && tooltipData.dataYPosition && tooltipData.dataXPosition && !config.tooltips.singleSeries && (
          <>
            <style>{`.tooltip {background-color: rgba(255,255,255, ${config.tooltips.opacity / 100}) !important`}</style>
            <TooltipWithBounds key={Math.random()} className={'tooltip cdc-open-viz-module'} left={tooltipLeft} top={tooltipTop}>
              <ul>{typeof tooltipData === 'object' && Object.entries(tooltipData.data).map((item, index) => <TooltipListItem item={item} key={index} />)}</ul>
            </TooltipWithBounds>
          </>
        )}

        {visSupportsReactTooltip() && <ReactTooltip id={`cdc-open-viz-tooltip-${runtime.uniqueId}`} variant='light' arrowColor='rgba(0,0,0,0)' className='tooltip' style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }} />}
        <div className='animation-trigger' ref={triggerRef} />
      </div>
    </ErrorBoundary>
  )
}

export default LinearChart
