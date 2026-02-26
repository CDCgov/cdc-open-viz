import React, { useContext } from 'react'
import { AxisLeft } from '@visx/axis'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import ConfigContext from '../../ConfigContext'

interface LeftAxisGridlinesProps {
  yScale: any
  xMax: number
  yAxisWidth: number
  numTicks: number
  yLabelOffset: number
  axisLabelFontSize: number
}

const LeftAxisGridlines: React.FC<LeftAxisGridlinesProps> = ({
  yScale,
  xMax,
  yAxisWidth,
  numTicks,
  yLabelOffset,
  axisLabelFontSize
}) => {
  const { config } = useContext(ConfigContext)
  const { runtime } = config

  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'

  return (
    <AxisLeft scale={yScale} left={yAxisWidth - config.yAxis.axisPadding} numTicks={numTicks}>
      {props => {
        const axisCenter =
          config.orientation === 'horizontal'
            ? Math.abs(props.axisToPoint.y - props.axisFromPoint.y) / 2
            : (props.axisFromPoint.y - props.axisToPoint.y) / 2
        return (
          <Group className='left-axis'>
            {props.ticks.map((tick, i) => {
              const showTicks = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
              const hideFirstGridLine = tick.index === 0 && tick.value === 0 && config.xAxis.hideAxis

              return (
                <Group key={`vx-tick-${tick.value}`} className={'vx-axis-tick'}>
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
              transform={`translate(${-1 * yAxisWidth + yLabelOffset}, ${axisCenter}) rotate(-90)`}
              fontWeight='bold'
              fill={config.yAxis.labelColor}
              fontSize={axisLabelFontSize}
            >
              {!config.hideYAxisLabel ? props.label : null}
            </Text>
          </Group>
        )
      }}
    </AxisLeft>
  )
}

export default LeftAxisGridlines
