import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import ReactTooltip from 'react-tooltip'

import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import { scaleLinear, scalePoint, scaleBand } from '@visx/scale'
import { AxisLeft, AxisBottom, AxisRight, AxisTop } from '@visx/axis'

import CoveScatterPlot from './ScatterPlot'
import BarChart from './BarChart'
import LineChart from './LineChart'
import Context from '../context'
import PairedBarChart from './PairedBarChart'
import useIntersectionObserver from './useIntersectionObserver'
import CoveBoxPlot from './BoxPlot'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import '../scss/LinearChart.scss'
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import useTopAxis from '../hooks/useTopAxis'

// TODO: Move scaling functions into hooks to manage complexity
export default function LinearChart() {
  const { transformedData: data, dimensions, config, parseDate, formatDate, currentViewport, formatNumber, handleChartAriaLabels, updateConfig } = useContext<any>(Context)
  let [width] = dimensions
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, data)
  const [animatedChart, setAnimatedChart] = useState<boolean>(false)

  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })
  // Make sure the chart is visible if in the editor
  useEffect(() => {
    const element = document.querySelector('.isEditor')
    if (element) {
      // parent element is visible
      setAnimatedChart(prevState => true)
    }
  })

  // If the chart is in view and set to animate and it has not already played
  useEffect(() => {
    if (dataRef?.isIntersecting === true && config.animate) {
      setTimeout(() => {
        setAnimatedChart(prevState => true)
      }, 500)
    }
  }, [dataRef?.isIntersecting, config.animate])

  if (config && config.legend && !config.legend.hide && config.legend.position !== 'bottom' && (currentViewport === 'lg' || currentViewport === 'md')) {
    width = width * 0.73
  }
  const { horizontal: heightHorizontal } = config.heights
  const height = config.aspectRatio ? width * config.aspectRatio : config.heights[config.orientation]
  const xMax = width - config.runtime.yAxis.size - config.yAxis.rightAxisSize
  const yMax = height - (config.orientation === 'horizontal' ? 0 : config.runtime.xAxis.size)

  const { yScaleRight, hasRightAxis } = useRightAxis({ config, yMax, data, updateConfig })
  const { hasTopAxis } = useTopAxis(config)

  const getXAxisData = (d: any) => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey]

  let xScale
  let yScale
  let seriesScale

  const { max: enteredMaxValue, min: enteredMinValue } = config.runtime.yAxis
  const isMaxValid = existPositiveValue ? enteredMaxValue >= maxValue : enteredMaxValue >= 0
  const isMinValid = (enteredMinValue <= 0 && minValue >= 0) || (enteredMinValue <= minValue && minValue < 0)

  if (data) {
    let min = enteredMinValue && isMinValid ? enteredMinValue : minValue
    let max = enteredMaxValue && isMaxValid ? enteredMaxValue : Number.MIN_VALUE

    if ((config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && !isAllLine)) && min > 0) {
      min = 0
    }
    if (config.visualizationType === 'Combo' && isAllLine) {
      if ((enteredMinValue === undefined || enteredMinValue === null || enteredMinValue === '') && min > 0) {
        min = 0
      }
      if (enteredMinValue) {
        const isMinValid = +enteredMinValue < minValue
        min = +enteredMinValue && isMinValid ? enteredMinValue : minValue
      }
    }

    if (config.visualizationType === 'Line') {
      const isMinValid = enteredMinValue < minValue
      min = enteredMinValue && isMinValid ? enteredMinValue : minValue
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

    let xAxisDataMapped = data.map(d => getXAxisData(d))

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
      }
    }

    if (config.runtime.horizontal) {
      xScale = scaleLinear<number>({
        domain: [min, max],
        range: [0, xMax]
      })

      yScale =
        config.runtime.xAxis.type === 'date'
          ? scaleLinear<number>({
              domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)]
            })
          : scalePoint<string>({ domain: xAxisDataMapped, padding: 0.5 })

      seriesScale = scalePoint<string>({
        domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
        range: [0, yMax]
      })

      yScale.rangeRound([0, yMax])
    } else {
      min = min < 0 ? min * 1.11 : min

      yScale = scaleLinear<number>({
        domain: [min, max],
        range: [yMax, 0]
      })

      xScale = scalePoint<string>({
        domain: xAxisDataMapped,
        range: [0, xMax],
        padding: 0.5
      })

      seriesScale = scalePoint<string>({
        domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
        range: [0, xMax]
      })
    }

    if (config.visualizationType === 'Paired Bar') {
      let groupOneMax = Math.max.apply(
        Math,
        data.map(d => d[config.series[0].dataKey])
      )
      let groupTwoMax = Math.max.apply(
        Math,
        data.map(d => d[config.series[1].dataKey])
      )

      // group one
      var g1xScale = scaleLinear<number>({
        domain: [0, Math.max(groupOneMax, groupTwoMax)],
        range: [xMax / 2, 0]
      })

      // group 2
      var g2xScale = scaleLinear<number>({
        domain: g1xScale.domain(),
        range: [xMax / 2, xMax]
      })
    }

    if (config.visualizationType === 'Scatter Plot') {
      xScale = scaleLinear({
        domain: [0, max],
        range: [0, xMax]
      })
    }
  }

  const handleLeftTickFormatting = tick => {
    if (config.runtime.yAxis.type === 'date') return formatDate(parseDate(tick))
    if (config.orientation === 'vertical') return formatNumber(tick, 'left')
    return tick
  }

  const countNumOfTicks = axis => {
    // function get number of ticks based on bar type & users value
    const isHorizontal = config.orientation === 'horizontal'
    const { numTicks } = config.runtime[axis]
    let tickCount = undefined

    if (axis === 'yAxis') {
      tickCount = isHorizontal && !numTicks ? data.length : isHorizontal && numTicks ? numTicks : !isHorizontal && !numTicks ? undefined : !isHorizontal && numTicks && numTicks
    }

    if (axis === 'xAxis') {
      tickCount = isHorizontal && !numTicks ? undefined : isHorizontal && numTicks ? numTicks : !isHorizontal && !numTicks ? undefined : !isHorizontal && numTicks && numTicks
    }
    return tickCount
  }

  // Handle Box Plots
  if (config.visualizationType === 'Box Plot') {
    let minYValue
    let maxYValue
    let allOutliers = []
    let allLowerBounds = config.boxplot.map(plot => plot.columnMin)
    let allUpperBounds = config.boxplot.map(plot => plot.columnMax)

    minYValue = Math.min(...allLowerBounds)
    maxYValue = Math.max(...allUpperBounds)

    const hasOutliers = config.boxplot.map(b => b.columnOutliers.map(outlier => allOutliers.push(outlier)))

    if (hasOutliers) {
      let outlierMin = Math.min(...allOutliers)
      let outlierMax = Math.max(...allOutliers)

      // check if outliers exceed standard bounds
      if (outlierMin < minYValue) minYValue = outlierMin
      if (outlierMax > maxYValue) maxYValue = outlierMax
    }

    const seriesNames = data.map(d => d[config.xAxis.dataKey])

    // Set Scales
    yScale = scaleLinear({
      range: [yMax, 0],
      round: true,
      domain: [minYValue, maxYValue]
    })

    xScale = scaleBand({
      range: [0, xMax],
      round: true,
      domain: config.boxplot.categories,
      padding: 0.4
    })
  }

  useEffect(() => {
    ReactTooltip.rebuild()
  })

  const handleTick = tick => {
    return config.runtime.xAxis.type === 'date' ? formatDate(tick) : config.orientation === 'horizontal' ? formatNumber(tick) : tick
  }

  return isNaN(width) ? (
    <></>
  ) : (
    <ErrorBoundary component='LinearChart'>
      <svg width={width} height={height} className={`linear ${config.animate ? 'animated' : ''} ${animatedChart && config.animate ? 'animate' : ''}`} role='img' aria-label={handleChartAriaLabels(config)} tabIndex={0}>
        {/* Higlighted regions */}
        {config.regions
          ? config.regions.map(region => {
              if (!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null

              const from = xScale(parseDate(region.from).getTime())
              const to = xScale(parseDate(region.to).getTime())
              const width = to - from

              return (
                <Group className='regions' left={Number(config.runtime.yAxis.size)} key={region.label}>
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
        {config.visualizationType !== 'Spark Line' && (
          <AxisLeft scale={yScale} left={Number(config.runtime.yAxis.size)} label={config.runtime.yAxis.label} stroke='#333' tickFormat={tick => handleLeftTickFormatting(tick)} numTicks={countNumOfTicks('yAxis')}>
            {props => {
              const axisCenter = config.runtime.horizontal ? (props.axisToPoint.y - props.axisFromPoint.y) / 2 : (props.axisFromPoint.y - props.axisToPoint.y) / 2
              const horizontalTickOffset = yMax / props.ticks.length / 2 - (yMax / props.ticks.length) * (1 - config.barThickness) + 5
              return (
                <Group className='left-axis'>
                  {props.ticks.map((tick, i) => {
                    const minY = props.ticks[0].to.y
                    const barMinHeight = 15 // 15 is the min height for bars by default

                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                        {!config.runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke={config.yAxis.tickColor} display={config.runtime.horizontal ? 'none' : 'block'} />}

                        {config.runtime.yAxis.gridLines ? <Line from={{ x: tick.from.x + xMax, y: tick.from.y }} to={tick.from} stroke='rgba(0,0,0,0.3)' /> : ''}

                        {config.orientation === 'horizontal' && config.visualizationSubType !== 'stacked' && config.yAxis.labelPlacement === 'On Date/Category Axis' && !config.yAxis.hideLabel && (
                          <Text
                            transform={`translate(${tick.to.x - 5}, ${config.isLollipopChart ? tick.to.y - minY : tick.to.y - minY + (Number(config.barHeight * config.series.length) - barMinHeight) / 2}) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`}
                            verticalAnchor={'start'}
                            textAnchor={'end'}
                          >
                            {tick.formattedValue}
                          </Text>
                        )}

                        {config.orientation === 'horizontal' && config.visualizationSubType === 'stacked' && config.yAxis.labelPlacement === 'On Date/Category Axis' && !config.yAxis.hideLabel && (
                          <Text transform={`translate(${tick.to.x - 5}, ${tick.to.y - minY + (Number(config.barHeight) - barMinHeight) / 2}) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`} verticalAnchor={'start'} textAnchor={'end'}>
                            {tick.formattedValue}
                          </Text>
                        )}

                        {config.orientation === 'horizontal' && config.visualizationType === 'Paired Bar' && !config.yAxis.hideLabel && (
                          <Text transform={`translate(${-15}, ${tick.from.y}) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`} verticalAnchor={config.isLollipopChart ? 'middle' : 'middle'} textAnchor={'end'}>
                            {tick.formattedValue}
                          </Text>
                        )}

                        {config.orientation === 'horizontal' && config.visualizationType === 'Paired Bar' && !config.yAxis.hideLabel && (
                          // 17 is a magic number from the offset in barchart.
                          <Text transform={`translate(${-15}, ${tick.from.y}) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`} verticalAnchor={config.isLollipopChart ? 'middle' : 'middle'} textAnchor={'end'}>
                            {formatNumber(tick.formattedValue)}
                          </Text>
                        )}

                        {config.orientation !== 'horizontal' && config.visualizationType !== 'Paired Bar' && !config.yAxis.hideLabel && (
                          <Text
                            x={config.runtime.horizontal ? tick.from.x + 2 : tick.to.x}
                            y={tick.to.y + (config.runtime.horizontal ? horizontalTickOffset : 0)}
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
                  {!config.yAxis.hideAxis && <Line from={props.axisFromPoint} to={config.runtime.horizontal ? { x: 0, y: Number(heightHorizontal) } : props.axisToPoint} stroke='#000' />}
                  {yScale.domain()[0] < 0 && <Line from={{ x: props.axisFromPoint.x, y: yScale(0) }} to={{ x: xMax, y: yScale(0) }} stroke='#333' />}
                  <Text className='y-label' textAnchor='middle' verticalAnchor='start' transform={`translate(${-1 * config.runtime.yAxis.size}, ${axisCenter}) rotate(-90)`} fontWeight='bold' fill={config.yAxis.labelColor}>
                    {props.label}
                  </Text>
                </Group>
              )
            }}
          </AxisLeft>
        )}

        {/* Right Axis */}
        {hasRightAxis && (
          <AxisRight scale={yScaleRight} left={Number(width - config.yAxis.rightAxisSize)} label={config.yAxis.rightLabel} tickFormat={tick => formatNumber(tick, 'right')} numTicks={config.runtime.yAxis.rightNumTicks || undefined} labelOffset={45}>
            {props => {
              const axisCenter = config.runtime.horizontal ? (props.axisToPoint.y - props.axisFromPoint.y) / 2 : (props.axisFromPoint.y - props.axisToPoint.y) / 2
              const horizontalTickOffset = yMax / props.ticks.length / 2 - (yMax / props.ticks.length) * (1 - config.barThickness) + 5
              return (
                <Group className='right-axis'>
                  {props.ticks.map((tick, i) => {
                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className='vx-axis-tick'>
                        {!config.runtime.yAxis.rightHideTicks && <Line from={tick.from} to={tick.to} display={config.runtime.horizontal ? 'none' : 'block'} stroke={config.yAxis.rightAxisTickColor} />}

                        {config.runtime.yAxis.rightGridLines ? <Line from={{ x: tick.from.x + xMax, y: tick.from.y }} to={tick.from} stroke='rgba(0,0,0,0.3)' /> : ''}

                        {!config.yAxis.rightHideLabel && (
                          <Text x={tick.to.x} y={tick.to.y + (config.runtime.horizontal ? horizontalTickOffset : 0)} verticalAnchor={config.runtime.horizontal ? 'start' : 'middle'} textAnchor={'start'} fill={config.yAxis.rightAxisTickLabelColor}>
                            {tick.formattedValue}
                          </Text>
                        )}
                      </Group>
                    )
                  })}
                  {!config.yAxis.rightHideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                  <Text className='y-label' textAnchor='middle' verticalAnchor='start' transform={`translate(${config.yAxis.rightLabelOffsetSize ? config.yAxis.rightLabelOffsetSize : 0}, ${axisCenter}) rotate(90)`} fontWeight='bold' fill={config.yAxis.rightAxisLabelColor}>
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
            left={Number(config.runtime.yAxis.size)}
            scale={xScale}
            hideTicks
            hideZero
            tickLabelProps={() => ({
              fill: 'transparent'
            })}
          />
        )}

        {/* X axis */}
        {config.visualizationType !== 'Paired Bar' && config.visualizationType !== 'Spark Line' && (
          <AxisBottom top={yMax} left={Number(config.runtime.yAxis.size)} label={config.runtime.xAxis.label} tickFormat={handleTick} scale={xScale} stroke='#333' tickStroke='#333' numTicks={countNumOfTicks('xAxis')}>
            {props => {
              const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2
              return (
                <Group className='bottom-axis'>
                  {props.ticks.map((tick, i) => {
                    const tickWidth = xMax / props.ticks.length
                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                        {!config.xAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke={config.xAxis.tickColor} />}
                        {!config.xAxis.hideLabel && (
                          <Text
                            transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${!config.runtime.horizontal ? config.runtime.xAxis.tickRotation : 0})`}
                            verticalAnchor='start'
                            textAnchor={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? 'end' : 'middle'}
                            width={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? undefined : tickWidth}
                            fill={config.xAxis.tickLabelColor}
                          >
                            {tick.formattedValue}
                          </Text>
                        )}
                      </Group>
                    )
                  })}
                  {!config.xAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                  <Text x={axisCenter} y={config.orientation === 'horizontal' ? config.xAxis.labelOffset : config.xAxis.size} textAnchor='middle' fontWeight='bold' fill={config.xAxis.labelColor}>
                    {props.label}
                  </Text>
                </Group>
              )
            }}
          </AxisBottom>
        )}

        {config.visualizationType === 'Paired Bar' && (
          <>
            <AxisBottom top={yMax} left={Number(config.runtime.yAxis.size)} label={config.runtime.xAxis.label} tickFormat={config.runtime.xAxis.type === 'date' ? formatDate : formatNumber} scale={g1xScale} stroke='#333' tickStroke='#333' numTicks={config.runtime.xAxis.numTicks || undefined}>
              {props => {
                const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2
                return (
                  <Group className='bottom-axis'>
                    {props.ticks.map((tick, i) => {
                      const tickWidth = xMax / props.ticks.length
                      return (
                        <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                          {!config.runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                          {!config.runtime.yAxis.hideLabel && (
                            <Text transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${60})`} verticalAnchor='start' textAnchor={'end'} width={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? undefined : tickWidth}>
                              {formatNumber(tick.formattedValue)}
                            </Text>
                          )}
                        </Group>
                      )
                    })}
                    {!config.runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                  </Group>
                )
              }}
            </AxisBottom>
            <AxisBottom
              top={yMax}
              left={Number(config.runtime.yAxis.size)}
              label={config.runtime.xAxis.label}
              tickFormat={config.runtime.xAxis.type === 'date' ? formatDate : config.runtime.xAxis.dataKey !== 'Year' ? formatNumber : tick => tick}
              scale={g2xScale}
              stroke='#333'
              tickStroke='#333'
              numTicks={config.runtime.xAxis.numTicks || undefined}
            >
              {props => {
                const axisCenter = (props.axisToPoint.x - props.axisFromPoint.x) / 2
                return (
                  <>
                    <Group className='bottom-axis'>
                      {props.ticks.map((tick, i) => {
                        const tickWidth = xMax / props.ticks.length
                        return (
                          <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                            {!config.runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                            {!config.runtime.yAxis.hideLabel && (
                              <Text transform={`translate(${tick.to.x}, ${tick.to.y}) rotate(-${60})`} verticalAnchor='start' textAnchor={'end'} width={config.runtime.xAxis.tickRotation && config.runtime.xAxis.tickRotation !== '0' ? undefined : tickWidth}>
                                {tick.formattedValue}
                              </Text>
                            )}
                          </Group>
                        )
                      })}
                      {!config.runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                    </Group>
                    <Group>
                      <Text transform={`translate(${xMax / 2}, ${yMax + 20}) rotate(-${0})`} verticalAnchor='start' textAnchor={'middle'} stroke='#333'>
                        {config.runtime.xAxis.label}
                      </Text>
                    </Group>
                  </>
                )
              }}
            </AxisBottom>
          </>
        )}
        {config.visualizationType === 'Paired Bar' && <PairedBarChart width={xMax} height={yMax} />}

        {/* Bar chart */}
        {config.visualizationType !== 'Line' && config.visualizationType !== 'Paired Bar' && config.visualizationType !== 'Box Plot' && config.visualizationType !== 'Scatter Plot' && (
          <>
            <BarChart xScale={xScale} yScale={yScale} seriesScale={seriesScale} xMax={xMax} yMax={yMax} getXAxisData={getXAxisData} getYAxisData={getYAxisData} animatedChart={animatedChart} visible={animatedChart} />
          </>
        )}

        {/* Line chart */}
        {config.visualizationType !== 'Bar' && config.visualizationType !== 'Paired Bar' && config.visualizationType !== 'Box Plot' && config.visualizationType !== 'Scatter Plot' && (
          <>
            <LineChart xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} xMax={xMax} yMax={yMax} seriesStyle={config.series} />
          </>
        )}

        {config.visualizationType === 'Scatter Plot' && <CoveScatterPlot xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />}

        {config.visualizationType === 'Box Plot' && <CoveBoxPlot xScale={xScale} yScale={yScale} />}
      </svg>
      <ReactTooltip id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} html={true} type='light' arrowColor='rgba(0,0,0,0)' className='tooltip' />
      <div className='animation-trigger' ref={triggerRef} />
    </ErrorBoundary>
  )
}
