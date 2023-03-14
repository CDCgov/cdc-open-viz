import React, { useContext, useEffect, useRef, useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import { scaleLinear, scalePoint, scaleBand, scaleTime } from '@visx/scale'
import { AxisLeft, AxisBottom, AxisRight, AxisTop } from '@visx/axis'

import CoveScatterPlot from './ScatterPlot'
import BarChart from './BarChart'
import LineChart from './LineChart'
import ConfigContext from '../ConfigContext'
import PairedBarChart from './PairedBarChart'
import useIntersectionObserver from './useIntersectionObserver'
import CoveBoxPlot from './BoxPlot'
import CoveAreaChart from './AreaChart'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import '../scss/LinearChart.scss'
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import useTopAxis from '../hooks/useTopAxis'

// TODO: Move scaling functions into hooks to manage complexity
export default function LinearChart() {
  const { transformedData: data, dimensions, config, parseDate, formatDate, currentViewport, formatNumber, handleChartAriaLabels, updateConfig } = useContext(ConfigContext)
  let [width] = dimensions
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, data)
  const [animatedChart, setAnimatedChart] = useState(false)

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
  }) // eslint-disable-line

  // If the chart is in view, set to animate if it has not already played
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
  const xMax = width - config.runtime.yAxis.size - (config.visualizationType === 'Combo' ? config.yAxis.rightAxisSize : 0)
  const yMax = height - (config.orientation === 'horizontal' ? 0 : config.runtime.xAxis.size)

  const { yScaleRight, hasRightAxis } = useRightAxis({ config, yMax, data, updateConfig })
  const { hasTopAxis } = useTopAxis(config)

  const getXAxisData = d => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
  const getYAxisData = (d, seriesKey) => d[seriesKey]

  let xScale
  let yScale
  let seriesScale

  const { max: enteredMaxValue, min: enteredMinValue } = config.runtime.yAxis
  const isMaxValid = existPositiveValue ? enteredMaxValue >= maxValue : enteredMaxValue >= 0
  const isMinValid = (enteredMinValue <= 0 && minValue >= 0) || (enteredMinValue <= minValue && minValue < 0)

  if (data) {
    let min = enteredMinValue && isMinValid ? enteredMinValue : minValue
    let max = enteredMaxValue && isMaxValid ? enteredMaxValue : Number.MIN_VALUE

    // DEV-3263 - If Confidence Intervals in data, then need to account for increased height in max for YScale
    if (config.visualizationType === 'Bar' || config.visualizationType === 'Combo') {
      let ciYMax = 0
      if (config.hasOwnProperty('confidenceKeys')) {
        let upperCIValues = data.map(function (d) {
          return d[config.confidenceKeys.upper]
        })
        ciYMax = Math.max.apply(Math, upperCIValues)
        if (ciYMax > max) max = ciYMax // bump up the max
      }
    }

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
        default:
          break
      }
    }

    if (config.runtime.horizontal) {
      xScale = scaleLinear({
        domain: [min, max],
        range: [0, xMax]
      })

      yScale =
        config.runtime.xAxis.type === 'date'
          ? scaleLinear({
              domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)]
            })
          : scalePoint({ domain: xAxisDataMapped, padding: 0.5 })

      seriesScale = scalePoint({
        domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
        range: [0, yMax]
      })

      yScale.rangeRound([0, yMax])
    } else {
      min = min < 0 ? min * 1.11 : min

      yScale = scaleLinear({
        domain: [min, max],
        range: [yMax, 0]
      })

      xScale = scalePoint({
        domain: xAxisDataMapped,
        range: [0, xMax],
        padding: 0.5
      })

      seriesScale = scalePoint({
        domain: config.runtime.barSeriesKeys || config.runtime.seriesKeys,
        range: [0, xMax]
      })
    }

    if (config.visualizationType === 'Area Chart' && config.xAxis.type === 'date') {
      xScale = scaleTime({
        domain: [Math.min(...xAxisDataMapped), Math.max(...xAxisDataMapped)],
        range: [0, xMax]
      })
    }

    if (config.visualizationType === 'Paired Bar') {
      const offset = 1.02 // Offset of the ticks/values from the Axis
      let groupOneMax = Math.max.apply(
        Math,
        data.map(d => d[config.series[0].dataKey])
      )
      let groupTwoMax = Math.max.apply(
        Math,
        data.map(d => d[config.series[1].dataKey])
      )

      // group one
      var g1xScale = scaleLinear({
        domain: [0, Math.max(groupOneMax, groupTwoMax) * offset],
        range: [xMax / 2, 0]
      })

      // group 2
      var g2xScale = scaleLinear({
        domain: g1xScale.domain(),
        range: [xMax / 2, xMax],
        nice: true
      })
    }

    if (config.visualizationType === 'Scatter Plot') {
      if (config.xAxis.type === 'continuous') {
        xScale = scaleLinear({
          domain: [0, Math.max.apply(null, xScale.domain())],
          range: [0, xMax]
        })
      }
    }

    // Handle Box Plots
    if (config.visualizationType === 'Box Plot') {
      const allOutliers = []
      const hasOutliers = config.boxplot.plots.map(b => b.columnOutliers.map(outlier => allOutliers.push(outlier))) && !config.boxplot.hideOutliers

      // check if outliers are lower
      if (hasOutliers) {
        let outlierMin = Math.min(...allOutliers)
        let outlierMax = Math.max(...allOutliers)

        // check if outliers exceed standard bounds
        if (outlierMin < min) min = outlierMin
        if (outlierMax > max) max = outlierMax
      }

      // check fences for max/min
      let lowestFence = Math.min(...config.boxplot.plots.map(item => item.columnMin))
      let highestFence = Math.max(...config.boxplot.plots.map(item => item.columnMax))

      if (lowestFence < min) min = lowestFence
      if (highestFence > max) max = highestFence

      // Set Scales
      yScale = scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [min, max]
      })

      xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: config.boxplot.categories,
        padding: 0.4
      })
    }
  }

  const handleLeftTickFormatting = tick => {
    if (config.runtime.yAxis.type === 'date') return formatDate(parseDate(tick))
    if (config.orientation === 'vertical') return formatNumber(tick, 'left')
    return tick
  }

  const handleBottomTickFormatting = tick => {
    if (config.runtime.xAxis.type === 'date') return formatDate(tick)
    if (config.orientation === 'horizontal') return formatNumber(tick, 'left')
    if (config.xAxis.type === 'continuous') return formatNumber(tick, 'bottom')
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

  return isNaN(width) ? (
    <></>
  ) : (
    <ErrorBoundary component='LinearChart'>
      <svg width={width} height={height} className={`linear ${config.animate ? 'animated' : ''} ${animatedChart && config.animate ? 'animate' : ''}`} role='img' aria-label={handleChartAriaLabels(config)} tabIndex={0}>
        {/* Higlighted regions */}
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
          <AxisLeft scale={yScale} left={Number(config.runtime.yAxis.size) - config.yAxis.axisPadding} label={config.runtime.yAxis.label} stroke='#333' tickFormat={tick => handleLeftTickFormatting(tick)} numTicks={countNumOfTicks('yAxis')}>
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
                          <Text transform={`translate(${tick.to.x - 5}, ${tick.to.y - minY + Number(config.barHeight) / 2}) rotate(-${config.runtime.horizontal ? config.runtime.yAxis.tickRotation : 0})`} textAnchor={'end'} verticalAnchor='middle'>
                            {tick.formattedValue}
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
          <AxisBottom
            top={config.runtime.horizontal ? Number(heightHorizontal) + Number(config.xAxis.axisPadding) : yMax + Number(config.xAxis.axisPadding)}
            left={Number(config.runtime.yAxis.size)}
            label={config.runtime.xAxis.label}
            tickFormat={handleBottomTickFormatting}
            scale={xScale}
            stroke='#333'
            tickStroke='#333'
            numTicks={countNumOfTicks('xAxis')}
          >
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
                return (
                  <Group className='bottom-axis'>
                    {props.ticks.map((tick, i) => {
                      const angle = tick.index !== 0 ? config.yAxis.tickRotation : 0
                      const textAnchor = tick.index !== 0 && config.yAxis.tickRotation && config.yAxis.tickRotation > 0 ? 'end' : 'middle'
                      return (
                        <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                          {!config.runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                          {!config.runtime.yAxis.hideLabel && (
                            <Text x={tick.to.x} y={tick.to.y} angle={-angle} verticalAnchor='start' textAnchor={textAnchor}>
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
                return (
                  <>
                    <Group className='bottom-axis'>
                      {props.ticks.map((tick, i) => {
                        const angle = tick.index !== 0 ? config.yAxis.tickRotation : 0
                        const textAnchor = tick.index !== 0 && config.yAxis.tickRotation && config.yAxis.tickRotation > 0 ? 'end' : 'middle'
                        return (
                          <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                            {!config.runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
                            {!config.runtime.yAxis.hideLabel && (
                              <Text x={tick.to.x} y={tick.to.y} angle={-angle} verticalAnchor='start' textAnchor={textAnchor}>
                                {tick.formattedValue}
                              </Text>
                            )}
                          </Group>
                        )
                      })}
                      {!config.runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
                    </Group>
                    <Group>
                      <Text x={xMax / 2} y={config.xAxis.labelOffset} stroke='#333' textAnchor={'middle'} verticalAnchor='start'>
                        {config.runtime.xAxis.label}
                      </Text>
                    </Group>
                  </>
                )
              }}
            </AxisBottom>
          </>
        )}

        {/* Paired Bar chart */}
        {config.visualizationType === 'Paired Bar' && <PairedBarChart originalWidth={width} width={xMax} height={yMax} />}

        {/* Bar chart */}
        {config.visualizationType !== 'Line' && config.visualizationType !== 'Paired Bar' && config.visualizationType !== 'Box Plot' && config.visualizationType !== 'Area Chart' && config.visualizationType !== 'Scatter Plot' && (
          <>
            <BarChart xScale={xScale} yScale={yScale} seriesScale={seriesScale} xMax={xMax} yMax={yMax} getXAxisData={getXAxisData} getYAxisData={getYAxisData} animatedChart={animatedChart} visible={animatedChart} />
          </>
        )}

        {/* Line chart */}
        {config.visualizationType !== 'Bar' && config.visualizationType !== 'Paired Bar' && config.visualizationType !== 'Box Plot' && config.visualizationType !== 'Area Chart' && config.visualizationType !== 'Scatter Plot' && (
          <>
            <LineChart xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} xMax={xMax} yMax={yMax} seriesStyle={config.series} />
          </>
        )}

        {/* Scatter Plot chart */}
        {config.visualizationType === 'Scatter Plot' && <CoveScatterPlot xScale={xScale} yScale={yScale} getXAxisData={getXAxisData} getYAxisData={getYAxisData} />}

        {/* Box Plot chart */}
        {config.visualizationType === 'Box Plot' && <CoveBoxPlot xScale={xScale} yScale={yScale} />}
        {config.visualizationType === 'Area Chart' && <CoveAreaChart xScale={xScale} yScale={yScale} yMax={yMax} xMax={xMax} />}
      </svg>
      <ReactTooltip id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} variant='light' arrowColor='rgba(0,0,0,0)' className='tooltip' />
      <div className='animation-trigger' ref={triggerRef} />
    </ErrorBoundary>
  )
}
