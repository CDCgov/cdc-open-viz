import React, { useContext } from 'react'
import { AxisRight as VisxAxisRight } from '@visx/axis'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import { ScaleLinear } from 'd3-scale'

import ConfigContext from '../../ConfigContext'

// Constants
const HORIZONTAL_TICK_OFFSET_ADJUSTMENT = 5

type RightAxisProps = {
  yScaleRight: ScaleLinear<number, number>
  yMax: number
  xMax: number
  yAxisWidth: number
  tickLabelFontSize: number
  axisLabelFontSize: number
}

/**
 * Right Y-axis component for dual-axis charts.
 * Renders a secondary y-axis on the right side with configurable styling.
 * Extracted from LinearChart.tsx
 */
export const RightAxis: React.FC<RightAxisProps> = ({
  yScaleRight,
  yMax,
  xMax,
  yAxisWidth,
  tickLabelFontSize,
  axisLabelFontSize
}) => {
  const { config, formatNumber } = useContext(ConfigContext)
  const { runtime } = config

  const horizontalTickOffset = (ticks: any[]) =>
    yMax / ticks.length / 2 - (yMax / ticks.length) * (1 - config.barThickness) + HORIZONTAL_TICK_OFFSET_ADJUSTMENT

  return (
    <VisxAxisRight
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

        return (
          <Group className='right-axis'>
            {props.ticks.map((tick, i) => (
              <Group key={`vx-tick-${tick.value}`} className='vx-axis-tick'>
                {!runtime.yAxis.rightHideTicks && (
                  <Line
                    from={tick.from}
                    to={tick.to}
                    display={runtime.horizontal ? 'none' : 'block'}
                    stroke={config.yAxis.rightAxisTickColor}
                  />
                )}

                {runtime.yAxis.rightGridLines && (
                  <Line from={{ x: tick.from.x + xMax, y: tick.from.y }} to={tick.from} stroke='#d6d6d6' />
                )}

                {!config.yAxis.rightHideLabel && (
                  <Text
                    x={tick.to.x}
                    y={tick.to.y + (runtime.horizontal ? horizontalTickOffset(props.ticks) : 0)}
                    verticalAnchor={runtime.horizontal ? 'start' : 'middle'}
                    textAnchor='start'
                    fill={config.yAxis.rightAxisTickLabelColor}
                    fontSize={tickLabelFontSize}
                  >
                    {tick.formattedValue}
                  </Text>
                )}
              </Group>
            ))}

            {!config.yAxis.rightHideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}

            <Text
              className='y-label'
              textAnchor='middle'
              verticalAnchor='start'
              transform={`translate(${config.yAxis.rightLabelOffsetSize || 0}, ${axisCenter}) rotate(-90)`}
              fontWeight='bold'
              fill={config.yAxis.rightAxisLabelColor}
              fontSize={axisLabelFontSize}
            >
              {props.label}
            </Text>
          </Group>
        )
      }}
    </VisxAxisRight>
  )
}

export default RightAxis
