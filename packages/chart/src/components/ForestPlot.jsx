import React, { useContext } from 'react'
import { Group } from '@visx/group'
import { Line, Bar, Circle } from '@visx/shape'
import { Text } from '@visx/text'
import ConfigContext from '../ConfigContext'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

const ForestPlot = props => {
  const { rawData: data } = useContext(ConfigContext)
  const { xScale, yScale, config, yMax, height } = props
  const { forestPlot } = config

  // TODO: pull from editor settings
  const columns = {
    upper: forestPlot.upper,
    lower: forestPlot.lower,
    estimate: forestPlot.estimateField,
    series: 'Author(s) and Year' // just a column name
  }

  const fontSize = 12

  return (
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
            {/* <Line from={{ x: xScale(Number(d[columns.lower])), y: yScale.bandwidth() / 4 }} to={{ x: xScale(Number(d[columns.upper])), y: yScale.bandwidth() / 4 }} stroke='black' /> */}

            {/* bottom accent line */}
            {/* <Line from={{ x: xScale(Number(d[columns.lower])), y: yScale.bandwidth() * 0.75 }} to={{ x: xScale(Number(d[columns.upper])), y: yScale.bandwidth() * 0.75 }} stroke='black' /> */}

            <Bar x={barX} y={yScale.bandwidth() / 4} width={barWidth} height={yScale.bandwidth() / 2} fill={colorPalettesChart[config.palette][0]} opacity={1} />

            {forestPlot.showRadiusAsNumber && (
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
  )
}

export default ForestPlot
