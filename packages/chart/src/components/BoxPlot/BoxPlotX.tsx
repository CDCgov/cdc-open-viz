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

const BoxPlotChart = ({ xMax, yMax, yScale, xScale, seriesScale }) => {
  const { config, colorScale } = useContext(ConfigContext)

  const xSeriesScale = scaleBand({
    domain: config.runtime.seriesLabelsAll,
    range: [0, xScale.bandwidth()]
  })
  const yScaleSeries = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [min, max]
  })
  const getYScale = (min, max) => {
    return scaleLinear({
      range: [yMax, 0],
      round: true,
      domain: [min, max]
    })
  }
  const constrainedWidth = Math.min(40, seriesScale.bandwidth())
  return (
    <Group className='hahahah' left={Number(config.yAxis.size)}>
      {config.boxplot.plots.map((plot, i) => (
        <Group className='Hajjy' key={`group-${i}`} left={Number(xScale(plot.columnCategory))}>
          {config.series.map((item, j) => {
            const metricValues = plot.keyValues[item.dataKey].sort((a, b) => a - b)
            const min = metricValues[0]
            const max = metricValues[metricValues.length - 1]
            const median = metricValues[Math.floor(metricValues.length / 2)]
            const firstQuartile = metricValues[Math.floor(metricValues.length / 4)]
            const thirdQuartile = metricValues[Math.floor((metricValues.length * 3) / 4)]

            return (
              <BoxPlot
                className='murad'
                key={`boxplot-${item.dataKey}-${i}`}
                min={min}
                max={max}
                firstQuartile={firstQuartile}
                thirdQuartile={thirdQuartile}
                median={median}
                boxWidth={33}
                fill={colorScale(item.dataKey)}
                stroke='black'
                valueScale={yScale}
              />
            )
          })}
        </Group>
      ))}
    </Group>
  )
}

export default BoxPlotChart

// columnCategory: 'Group A'
// columnFirstQuartile: '20'
// columnIqr: '105'
// columnLowerBounds: 10
// columnMax: 177.5
// columnMean: '73'
// columnMedian: '40'
// columnMin: 10
// columnOutliers: []
// columnSd: '87'
// columnThirdQuartile: '125'
// columnTotal: 290
// columnUpperBounds: 177.5
// nonOutlierValues: (4)[(10, 30, 50, 200)]
// values: (4)[(10, 30, 50, 200)]
