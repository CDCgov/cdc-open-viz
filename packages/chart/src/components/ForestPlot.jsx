import React, { useContext } from 'react'
import { Group } from '@visx/group'
import { Line, Bar, Circle, LinePath } from '@visx/shape'
import { Text } from '@visx/text'
import ConfigContext from '../ConfigContext'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { scaleLinear } from '@visx/scale'

const ForestPlot = props => {
  const { rawData: data } = useContext(ConfigContext)
  const { xScale, yScale, config, yMax, height } = props
  const { forestPlot } = config

  // TODO: pull from editor settings
  const columns = {
    upper: forestPlot.upper,
    lower: forestPlot.lower,
    estimate: forestPlot.estimateField,
    series: 'Author(s) and Year' // just a column name?
  }

  const fontSize = 12
  const old = false

  return old ? (
    <Group>
      {/* zero line marker */}
      {forestPlot.showZeroLine && <Line from={{ x: Number(config.yAxis.size) + xScale(0), y: 0 }} to={{ x: Number(config.yAxis.size) + xScale(0), y: height }} className='zero-line' stroke='gray' strokeDasharray={'5 5'} />}

      {data.map(d => {
        const barWidth = Math.abs(xScale(Number(d[columns.lower])) - xScale(Number(d[columns.upper])))
        const barX = xScale(Math.min(Number(d[columns.lower]), Number(d[columns.upper])))

        return (
          <Group key={`${d[columns.series]}`} top={yScale(d[columns.series])} left={config.yAxis.size}>
            <Line from={{ x: xScale(Number(d[columns.estimate])), y: yScale.bandwidth() / 2 }} to={{ x: xScale(Number(d.Estimate)), y: yScale.bandwidth() / 2 }} stroke='black' />

            {/* top accent line */}
            <Line from={{ x: xScale(Number(d[columns.lower])), y: yScale.bandwidth() / 4 }} to={{ x: xScale(Number(d[columns.upper])), y: yScale.bandwidth() / 4 }} stroke='black' />

            {/* bottom accent line */}
            <Line from={{ x: xScale(Number(d[columns.lower])), y: yScale.bandwidth() * 0.75 }} to={{ x: xScale(Number(d[columns.upper])), y: yScale.bandwidth() * 0.75 }} stroke='black' />

            <Bar x={barX} y={yScale.bandwidth() / 4} width={barWidth} height={yScale.bandwidth() / 2} fill={colorPalettesChart[config.palette][0]} opacity={0.25} />

            {forestPlot.shape === 'text' && (
              <Text x={xScale(Number(d[columns.estimate])) + 5} y={yScale.bandwidth() / 2} verticalAnchor='middle' fontSize={fontSize}>
                {d[columns.estimate]}
              </Text>
            )}
            {forestPlot.showRadiusAsCircle && <Circle className='radius' cx={xScale(Number(d[columns.estimate]))} cy={yScale.bandwidth() / 2} r={2} fill={colorPalettesChart[config.palette][1]} style={{ opacity: 1 }} />}

            {/* todo: loop through the cols here */}
            <Text x={config.yAxis.size - 10} y={yScale.bandwidth() / 2} verticalAnchor='middle' fontSize={fontSize} textAnchor='end'>
              {d['Timing']}
            </Text>

            <Text x={config.yAxis.size - 30} y={yScale.bandwidth() / 2} verticalAnchor='middle' fontSize={fontSize} textAnchor='end'>
              {d['Confidence']}
            </Text>
          </Group>
        )
      })}
    </Group>
  ) : (
    <Group left={config.yAxis.size}>
      {forestPlot.showZeroLine && <Line from={{ x: xScale(0), y: 0 }} to={{ x: xScale(0), y: height }} className='zero-line' stroke='gray' strokeDasharray={'5 5'} />}

      {data.map((d, i) => {
        // calculate both square and circle size based on radius.min and radius.max
        const scaleRadius = scaleLinear({
          domain: [
            Math.min.apply(
              null,
              data.map(d => d[columns.lower])
            ),
            Math.max.apply(
              null,
              data.map(d => d[columns.upper])
            )
          ],
          range: [forestPlot.radius.min, forestPlot.radius.max]
        })

        // square size
        const rectSize = forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][columns.estimate]) : 4

        // ci size
        const ciEndSize = 4

        return (
          <Group>
            {/* Confidence Interval Paths */}
            <path
              stroke='#333'
              strokeWidth={1}
              className='lower-ci'
              d={`
                    M${xScale(d[columns.lower])} ${yScale(i) - Number(ciEndSize)}
                    L${xScale(d[columns.lower])} ${yScale(i) + Number(ciEndSize)}
                `}
            />

            <path
              stroke='#333'
              strokeWidth={1}
              className='upper-ci'
              d={`
                    M${xScale(d[columns.upper])} ${yScale(i) - Number(ciEndSize)}
                    L${xScale(d[columns.upper])} ${yScale(i) + Number(ciEndSize)}
                `}
            />

            {/* main line */}
            <line stroke={'black'} className={`line-${d[columns.series]}`} key={i} x1={xScale(d[columns.lower])} x2={xScale(d[columns.upper])} y1={yScale(i)} y2={yScale(i)} />
            {forestPlot.shape === 'circle' && <Circle className='forest-plot--circle' cx={xScale(Number(d[columns.estimate]))} cy={yScale(i)} r={forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][columns.estimate]) : 4} fill={'black'} style={{ opacity: 1, filter: 'unset' }} />}
            {forestPlot.shape === 'square' && <rect className='forest-plot--square' x={xScale(Number(d[columns.estimate]))} y={yScale(i) - rectSize / 2} width={rectSize} height={rectSize} fill={'black'} style={{ opacity: 1, filter: 'unset' }} />}
            {forestPlot.shape === 'text' && (
              <Text x={xScale(Number(d[columns.estimate]))} y={yScale(i)} textAnchor='middle' verticalAnchor='middle' fontSize={fontSize}>
                {d[columns.estimate]}
              </Text>
            )}
          </Group>
        )
      })}
    </Group>
  )
}

export default ForestPlot
