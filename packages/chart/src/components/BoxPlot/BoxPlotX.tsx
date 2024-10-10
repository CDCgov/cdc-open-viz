import React, { useContext } from 'react'
import { BoxPlot } from '@visx/stats'
import { scaleLinear, scaleBand } from '@visx/scale'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
const data = [
  {
    category: 'Group A',
    value: [10, 200, 30, 50],
    price: [80, 90, 10, 40]
  },
  {
    category: 'Group B',
    value: [40, 90, 60, 80],
    price: [15, 335, 35, 45]
  }
]

const BoxPlotChart = ({ xMax, yMax }) => {
  const { config, colorScale } = useContext(ConfigContext)

  // Define your multiple keys (metrics) to plot
  const metrics = ['value', 'price']
  // xScale for the groups (categories)
  const xScale = scaleBand({
    domain: data.map(d => d.category),
    padding: 0.4,
    range: [0, xMax]
  })

  // xScale for the metrics (series) within each group
  const xSeriesScale = scaleBand({
    domain: metrics,
    padding: 0, // Space between series within each group
    range: [0, xScale.bandwidth()] // Entire space of the group is divided between metrics
  })

  const yScale = scaleLinear({
    domain: [0, 200],
    range: [yMax, 0]
  })

  const boxWidth = xScale.bandwidth() / metrics.length

  return (
    <svg width={xMax} height={yMax}>
      <Group left={0}>
        {data.map((d, i) => (
          <Group key={`group-${i}`} left={xScale(d.category)}>
            {metrics.map((metric, j) => {
              const metricValues = d[metric].sort((a, b) => a - b)
              const min = metricValues[0]
              const max = metricValues[metricValues.length - 1]
              const median = metricValues[Math.floor(metricValues.length / 2)]
              const firstQuartile = metricValues[Math.floor(metricValues.length / 4)]
              const thirdQuartile = metricValues[Math.floor((metricValues.length * 3) / 4)]

              return (
                <BoxPlot
                  key={`boxplot-${metric}-${i}`}
                  min={min}
                  max={max}
                  firstQuartile={firstQuartile}
                  thirdQuartile={thirdQuartile}
                  median={median}
                  boxWidth={xSeriesScale.bandwidth()}
                  fill={colorScale(metric)}
                  stroke='black'
                  valueScale={yScale}
                  left={xSeriesScale(metric)}
                />
              )
            })}
          </Group>
        ))}
      </Group>
    </svg>
  )
}

export default BoxPlotChart
