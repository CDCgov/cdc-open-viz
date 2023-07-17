import React, { useContext } from 'react'
import { Group } from '@visx/group'
import { Line, Bar } from '@visx/shape'
import { Text } from '@visx/text'
import ConfigContext from '../ConfigContext'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

const ForestPlot = props => {
  const { rawData: data } = useContext(ConfigContext)
  const { xScale, yScale, config } = props

  // TODO: pull from editor settings
  const columns = {
    upper: 'Upper',
    lower: 'Lower',
    estimate: 'Estimate',
    series: 'Author(s) and Year'
  }

  const fontSize = 12

  console.log(colorPalettesChart[config.palette])

  return (
    <Group>
      {data.map(d => {
        const barWidth = Math.abs(xScale(Number(d[columns.lower])) - xScale(Number(d[columns.upper])))
        const barX = xScale(Math.min(Number(d[columns.lower]), Number(d[columns.upper])))

        return (
          <Group key={`${d[columns.series]}`} top={yScale(d[columns.series])} left={config.yAxis.size}>
            <Line from={{ x: xScale(Number(d[columns.estimate])), y: yScale.bandwidth() / 2 }} to={{ x: xScale(Number(d.Estimate)), y: yScale.bandwidth() / 2 }} stroke='black' />
            <Line from={{ x: xScale(Number(d[columns.lower])), y: yScale.bandwidth() / 4 }} to={{ x: xScale(Number(d[columns.upper])), y: yScale.bandwidth() / 4 }} stroke='black' />
            <Line from={{ x: xScale(Number(d[columns.lower])), y: yScale.bandwidth() * 0.75 }} to={{ x: xScale(Number(d[columns.upper])), y: yScale.bandwidth() * 0.75 }} stroke='black' />
            <Bar x={barX} y={yScale.bandwidth() / 4} width={barWidth} height={yScale.bandwidth() / 2} fill={colorPalettesChart[config.palette][0]} opacity={0.5} />
            <Text x={xScale(Number(d[columns.estimate])) + 5} y={yScale.bandwidth() / 2} verticalAnchor='middle' fontSize={fontSize}>
              {d[columns.estimate]}
            </Text>
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
