import React, { useContext } from 'react'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import { AxisLeft } from '@visx/axis'
import { scaleLinear, scaleBand } from '@visx/scale'
import { Bar } from '@visx/shape'
import ConfigContext from '../ConfigContext'

const ForestPlot = props => {
  const { transformedData: data } = useContext(ConfigContext)
  const { yMax: height, xMax: width } = props

  const yScale = scaleBand({
    domain: data.map(d => d['Author(s) and Year']),
    range: [0, height],
    padding: 0.2
  })

  const xScale = scaleLinear({
    domain: [Math.min(...data.map(d => parseFloat(d.Lower))), Math.max(...data.map(d => parseFloat(d.Upper)))],
    range: [0, width]
  })

  return (
    <svg width={width} height={height}>
      <AxisLeft
        scale={yScale}
        tickLabelProps={() => ({
          dy: '0.33em'
        })}
      />
      <Group>
        {data.map(d => {
          const barWidth = Math.abs(xScale(parseFloat(d.Lower)) - xScale(parseFloat(d.Upper)))
          const barX = xScale(Math.min(parseFloat(d.Lower), parseFloat(d.Upper)))

          return (
            <Group key={d['Author(s) and Year']} top={yScale(d['Author(s) and Year'])} left={0}>
              <Line from={{ x: xScale(parseFloat(d.Estimate)), y: yScale.bandwidth() / 2 }} to={{ x: xScale(parseFloat(d.Estimate)), y: yScale.bandwidth() / 2 }} stroke='black' />
              <Line from={{ x: xScale(parseFloat(d.Lower)), y: yScale.bandwidth() / 4 }} to={{ x: xScale(parseFloat(d.Upper)), y: yScale.bandwidth() / 4 }} stroke='black' />
              <Line from={{ x: xScale(parseFloat(d.Lower)), y: yScale.bandwidth() * 0.75 }} to={{ x: xScale(parseFloat(d.Upper)), y: yScale.bandwidth() * 0.75 }} stroke='black' />
              <Bar x={barX} y={yScale.bandwidth() / 4} width={barWidth} height={yScale.bandwidth() / 2} fill='steelblue' opacity={0.5} />
              <Text x={xScale(parseFloat(d.Estimate)) + 5} y={yScale.bandwidth() / 2} verticalAnchor='middle' fontSize={12}>
                {d.Estimate}
              </Text>
            </Group>
          )
        })}
      </Group>
    </svg>
  )
}

export default ForestPlot
