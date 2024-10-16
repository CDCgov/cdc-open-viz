import React, { useContext } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { scaleBand, scaleLinear } from '@visx/scale'
import { max, min, median, quantile } from 'd3-array'
const CoveBoxPlot = ({ xScale, yMax, xMax, min: minValue, max: maxValue, yScale }) => {
  const { config, colorScale } = useContext(ConfigContext)
  const { boxplot } = config

  // tooltips
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`

  const handleTooltip = (d, key, q1, q3, median, iqr) => {
    return `
      <strong>${d.columnCategory}</strong></br>
       <strong>Key:${key}</strong></br>
      ${boxplot.labels.q1}: ${q1}<br/>
      ${boxplot.labels.q3}: ${q3}<br/>
      ${boxplot.labels.iqr}: ${iqr}<br/>
      ${boxplot.labels.median}: ${median}
    `
  }

  const fillOpacity = 0.5
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'
  const seriesScale = scaleBand({
    range: [0, config.barThickness * 100 || 1],
    domain: config.series?.map(item => item?.dataKey)
  })

  const calculateBoxPlotStats = values => {
    if (!values || !values.length) return {}
    const sortedValues = values.sort((a, b) => a - b)
    return {
      min: min(values),
      max: max(values),
      median: median(values),
      firstQuartile: quantile(sortedValues, 0.25),
      thirdQuartile: quantile(sortedValues, 0.75)
    }
  }
  // const yScale = scaleLinear({
  //   range: [yMax, 0],
  //   domain: [minValue, maxValue]
  // })
  return (
    <ErrorBoundary component='BoxPlot'>
      <Group left={Number(config.yAxis.size)} className='boxplot' key={`boxplot-group`}>
        {boxplot.plots.map((d, i) => {
          const offset = boxWidth - constrainedWidth
          const radius = 4

          return (
            <Group key={`boxplotplot-${d.columnCategory}`} left={Number(xScale(d.columnCategory))}>
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
                        'data-tooltip-html': handleTooltip(d, item.dataKey, firstQuartile, thirdQuartile, median, iqr),
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
