import React, { useContext, MutableRefObject } from 'react'
import { AxisBottom } from '@visx/axis'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import { ScaleLinear } from 'd3-scale'

import ConfigContext from '../../ConfigContext'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'

// Constants
const BOTTOM_LABEL_PADDING = 9
const X_TICK_LABEL_PADDING = 4.5
const DEFAULT_MAX_TICK_ROTATION = 90
const BASE_TICK_WIDTH_ACCUMULATOR = 100

type PairedBarAxisProps = {
  g1xScale: ScaleLinear<number, number>
  g2xScale: ScaleLinear<number, number>
  yMax: number
  xMax: number
  yAxisWidth: number
  bottomLabelStart: number
  tickLabelFontSize: number
  axisLabelFontSize: number
  axisBottomRef: MutableRefObject<SVGGElement | null>
  xAxisLabelRefs: MutableRefObject<(SVGTextElement | null)[]>
  tickLabelFont: string
}

/**
 * Specialized axis component for Paired Bar charts.
 * Renders two mirrored AxisBottom components with shared tick formatting logic.
 * Extracted from LinearChart.tsx
 */
export const PairedBarAxis: React.FC<PairedBarAxisProps> = ({
  g1xScale,
  g2xScale,
  yMax,
  xMax,
  yAxisWidth,
  bottomLabelStart,
  tickLabelFontSize,
  axisLabelFontSize,
  axisBottomRef,
  xAxisLabelRefs,
  tickLabelFont
}) => {
  const { config, formatDate, formatNumber } = useContext(ConfigContext)
  const { runtime } = config

  const axisMaxHeight = bottomLabelStart + BOTTOM_LABEL_PADDING

  /**
   * Determines if ticks are overlapping to trigger responsive rotation
   */
  const getTickPositions = (ticks: any[], xScale: ScaleLinear<number, number>): boolean => {
    if (!ticks.length) return false

    // Filter out first index
    const filteredTicks = ticks.filter(tick => tick.index !== 0)
    const numberOfTicks = filteredTicks?.length
    const xMaxHalf = xScale.range()[0] || xMax / 2

    const tickWidthAll = filteredTicks.map(tick => getTextWidth(formatNumber(tick.value, 'left', true), tickLabelFont))
    const sumOfTickWidth = tickWidthAll.reduce((a, b) => a + b, BASE_TICK_WIDTH_ACCUMULATOR)
    const spaceBetweenEachTick = (xMaxHalf - sumOfTickWidth) / numberOfTicks

    // Determine the position of each tick
    const positions = [0]
    for (let i = 1; i < tickWidthAll.length; i++) {
      positions[i] = positions[i - 1] + tickWidthAll[i - 1] + spaceBetweenEachTick
    }

    // Check if ticks are overlapping
    let isTicksOverlapping = false
    tickWidthAll.forEach((_, i) => {
      if (positions[i] + tickWidthAll[i] > positions[i + 1]) {
        isTicksOverlapping = true
      }
    })
    return isTicksOverlapping
  }

  /**
   * Renders tick elements for either the left or right paired bar section
   */
  const renderTickGroup = (
    tick: any,
    index: number,
    ticks: any[],
    xScale: ScaleLinear<number, number>,
    isRightSection: boolean
  ) => {
    const isTicksOverlapping = getTickPositions(ticks, xScale)
    const maxTickRotation = Number(config.xAxis.maxTickRotation) || DEFAULT_MAX_TICK_ROTATION
    const isResponsiveTicks = config.isResponsiveTicks && isTicksOverlapping
    const angle = tick.index !== 0 && (isResponsiveTicks ? maxTickRotation : Number(config.yAxis.tickRotation))
    const textAnchor = angle && tick.index !== 0 ? 'end' : 'middle'

    // Skip first tick on right section to avoid overlapping 0's
    if (isRightSection && !index) return <React.Fragment key={`vx-tick-empty-${index}`} />

    return (
      <Group key={`vx-tick-${tick.value}-${index}`} className='vx-axis-tick'>
        {!runtime.yAxis.hideTicks && <Line from={tick.from} to={tick.to} stroke='#333' />}
        {!runtime.yAxis.hideLabel && (
          <Text
            innerRef={!isRightSection ? el => (xAxisLabelRefs.current[index] = el) : undefined}
            x={tick.to.x}
            y={tick.to.y + (isRightSection ? X_TICK_LABEL_PADDING : 0)}
            angle={-angle}
            verticalAnchor={angle ? 'middle' : 'start'}
            textAnchor={textAnchor}
            fontSize={tickLabelFontSize}
          >
            {formatNumber(tick.value, 'left', true)}
          </Text>
        )}
      </Group>
    )
  }

  return (
    <>
      {/* Left section axis */}
      <AxisBottom
        top={yMax}
        left={yAxisWidth}
        label={runtime.xAxis.label}
        tickFormat={isDateScale(runtime.xAxis) ? formatDate : tick => formatNumber(tick, 'left', true)}
        scale={g1xScale}
        stroke='#333'
        tickStroke='#333'
        numTicks={runtime.xAxis.numTicks || undefined}
      >
        {props => (
          <Group className='bottom-axis'>
            {props.ticks.map((tick, i) => renderTickGroup(tick, i, props.ticks, g1xScale, false))}
            {!runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
          </Group>
        )}
      </AxisBottom>

      {/* Right section axis */}
      <AxisBottom
        innerRef={axisBottomRef}
        top={yMax}
        left={yAxisWidth}
        label={runtime.xAxis.label}
        tickFormat={
          isDateScale(runtime.xAxis)
            ? formatDate
            : runtime.xAxis.dataKey !== 'Year'
            ? tick => formatNumber(tick, 'left', true)
            : tick => tick
        }
        scale={g2xScale}
        stroke='#333'
        tickStroke='#333'
        numTicks={runtime.xAxis.numTicks || undefined}
      >
        {props => (
          <>
            <Group className='bottom-axis'>
              {props.ticks.map((tick, i) => renderTickGroup(tick, i, props.ticks, g2xScale, true))}
              {!runtime.yAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
            </Group>
            <Group>
              <Text
                className='x-axis-title-label'
                x={xMax / 2}
                y={axisMaxHeight}
                stroke='#333'
                textAnchor='middle'
                verticalAnchor='start'
                fontSize={axisLabelFontSize}
              >
                {!config.hideXAxisLabel ? runtime.xAxis.label : null}
              </Text>
            </Group>
          </>
        )}
      </AxisBottom>
    </>
  )
}

export default PairedBarAxis
