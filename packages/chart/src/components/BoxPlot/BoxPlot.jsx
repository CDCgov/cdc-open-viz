import React, { useContext, useEffect } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { scaleBand, scaleLinear } from '@visx/scale'
import { max, min, median, quantile } from 'd3-array'
const CoveBoxPlot = ({ xScale, xMax, yMax, min: minValue, max: maxValue }) => {
  const { config, setConfig, colorScale } = useContext(ConfigContext)
  const { boxplot } = config

  // tooltips
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const handleTooltip = d => {
    return `
      <strong>${d.columnCategory}</strong></br>
      ${boxplot.labels.q1}: ${d.columnFirstQuartile}<br/>
      ${boxplot.labels.q3}: ${d.columnThirdQuartile}<br/>
      ${boxplot.labels.iqr}: ${d.columnIqr}<br/>
      ${boxplot.labels.median}: ${d.columnMedian}
    `
  }
  const handleTooltipX = (d, key, q1, q3, median, iqr) => {
    return `
      <strong>${d.columnCategory}</strong></br>
       <strong>Key:${key}</strong></br>
      ${boxplot.labels.q1}: ${q1}<br/>
      ${boxplot.labels.q3}: ${q3}<br/>
      ${boxplot.labels.iqr}: ${iqr}<br/>
      ${boxplot.labels.median}: ${median}
    `
  }

  //  accessors & constants
  // const max = d => Number(d.columnMax)
  // const min = d => Number(d.columnMin)
  // const median = d => Number(d.columnMedian)
  // const thirdQuartile = d => Number(d.columnThirdQuartile)
  // const firstQuartile = d => Number(d.columnFirstQuartile)
  const fillOpacity = 0.5
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  console.log(config.barThickness, 'config.barThickness')
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'
  const seriesScale = scaleBand({
    range: [0, config.barThickness * 100 || 1],

    domain: config.series.map(item => item.dataKey)
  })

  const calculateBoxPlotStats = values => {
    const sortedValues = values.sort((a, b) => a - b)
    return {
      min: min(values),
      max: max(values),
      median: median(values),
      firstQuartile: quantile(sortedValues, 0.25),
      thirdQuartile: quantile(sortedValues, 0.75)
    }
  }
  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [minValue, maxValue]
  })
  console.log(xScale.bandwidth() / 2, 'bandWidth')
  return (
    <ErrorBoundary component='BoxPlot'>
      <Group left={Number(config.yAxis.size)} className='boxplot' key={`boxplot-group`}>
        {boxplot.plots.map((d, i) => {
          const offset = boxWidth - constrainedWidth
          const radius = 4

          return (
            <Group key={`boxplotplot-${d.columnCategory}`} left={Number(xScale(d.columnCategory)) + 120}>
              {config.series.map(item => {
                const valuesByKey = d.keyValues[item.dataKey]
                const { min, max, median, firstQuartile, thirdQuartile } = calculateBoxPlotStats(valuesByKey)
                let iqr = Number(thirdQuartile - firstQuartile).toFixed(config.dataFormat.roundTo)
                return (
                  <Group key={`boxplotplot-${item}`}>
                    <BoxPlot
                      data-left={xScale(d.columnCategory) + config.yAxis.size + offset / 2 + 0.5}
                      key={`box-plot-${i}-${item}`}
                      min={min}
                      max={max}
                      left={seriesScale(item.dataKey)}
                      firstQuartile={firstQuartile}
                      thirdQuartile={thirdQuartile}
                      median={median}
                      boxWidth={seriesScale.bandwidth()}
                      fill={colorScale(item.dataKey)}
                      fillOpacity={fillOpacity}
                      stroke='black'
                      valueScale={yScale}
                      outliers={boxplot.plotOutlierValues ? d.columnOutliers : []}
                      outlierProps={{
                        style: {
                          fill: `${color_0}`,
                          opacity: 1
                        }
                      }}
                      medianProps={{
                        style: {
                          stroke: 'black'
                        }
                      }}
                      boxProps={{
                        style: {
                          stroke: 'black',
                          strokeWidth: boxplot.borders === 'true' ? 1 : 0
                        }
                      }}
                      maxProps={{
                        style: {
                          stroke: 'black'
                        }
                      }}
                      container
                      containerProps={{
                        'data-tooltip-html': handleTooltipX(d, item.dataKey, firstQuartile, thirdQuartile, median, iqr),
                        'data-tooltip-id': tooltip_id,
                        tabIndex: -1
                      }}
                    />
                  </Group>
                )
              })}
            </Group>
          )
        })}
      </Group>
    </ErrorBoundary>
  )
}

export default CoveBoxPlot
