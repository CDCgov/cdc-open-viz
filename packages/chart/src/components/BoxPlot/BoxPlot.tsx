import React, { useContext } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { scaleBand } from '@visx/scale'
import _ from 'lodash'
import { max, min, median, quantile } from 'd3-array'
const CoveBoxPlot = ({ xScale, yScale }) => {
  const { config, colorScale, seriesHighlight, transformedData: data } = useContext(ConfigContext)
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

  const getValuesBySeriesKey = (group: string) => {
    const allSeriesKeys = config.series.map(item => item?.dataKey)
    const result = {}
    const filteredData = data.filter(item => item[config.xAxis.dataKey] === group)
    allSeriesKeys.forEach(key => {
      result[key] = filteredData.map(item => item[key])
    })

    return result
  }

  interface Plot {
    columnCategory: string
    keyValues: { [key: string]: number[] }
  }
  const createPlots = data => {
    const dataKeys = data.map(d => d[config.xAxis.dataKey])
    const plots: Plot[] = []
    const groups: string[] = _.uniq(dataKeys)
    if (groups && groups.length > 0) {
      groups.forEach(group => {
        plots.push({
          columnCategory: group,
          keyValues: getValuesBySeriesKey(group)
        })
      })
    }
    return plots
  }

  return (
    <ErrorBoundary component='BoxPlot'>
      <Group left={Number(config.yAxis.size)} className='boxplot' key={`boxplot-group`}>
        {createPlots(data).map((d, i) => {
          const offset = boxWidth - constrainedWidth
          const radius = 4

          return (
            <Group
              key={`boxplotplot-${d.columnCategory}`}
              left={xScale(d.columnCategory) + (xScale.bandwidth() - seriesScale.bandwidth()) / 2}
            >
              {config.series.map(item => {
                const valuesByKey = d.keyValues[item.dataKey]
                const { min, max, median, firstQuartile, thirdQuartile } = calculateBoxPlotStats(valuesByKey)
                let iqr = Number(thirdQuartile - firstQuartile).toFixed(config.dataFormat.roundTo)

                const transparentPlot =
                  config.legend.behavior === 'highlight' &&
                  seriesHighlight.length > 0 &&
                  seriesHighlight.indexOf(item.dataKey) === -1
                const displayPlot =
                  config.legend.behavior === 'highlight' ||
                  seriesHighlight.length === 0 ||
                  seriesHighlight.indexOf(item.dataKey) !== -1
                const fillOpacity = transparentPlot ? 0.3 : 0.5

                return (
                  <Group key={`boxplotplot-${item}`}>
                    {boxplot.plotNonOutlierValues &&
                      valuesByKey.map((value, index) => {
                        return (
                          <circle
                            display={displayPlot ? 'block' : 'none'}
                            cx={seriesScale(item.dataKey) + seriesScale.bandwidth() / 2}
                            cy={yScale(value)}
                            r={radius}
                            fill={'#ccc'}
                            style={{ opacity: fillOpacity, fillOpacity: 1, stroke: 'black' }}
                            key={`boxplot-${i}--circle-${index}`}
                          />
                        )
                      })}
                    {displayPlot && (
                      <BoxPlot
                        display={displayPlot ? 'block' : 'none'}
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
                        stroke={fillOpacity ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)'}
                        valueScale={yScale}
                        outliers={boxplot.plotOutlierValues ? d.columnOutliers : []}
                        outlierProps={{
                          style: {
                            fill: `${color_0}`,
                            opacity: fillOpacity
                          }
                        }}
                        medianProps={{
                          style: {
                            stroke: 'black',
                            opacity: fillOpacity
                          }
                        }}
                        boxProps={{
                          style: {
                            stroke: 'black',
                            strokeWidth: boxplot.borders === 'true' ? 1 : 0,
                            opacity: fillOpacity
                          }
                        }}
                        maxProps={{
                          style: {
                            stroke: 'black',
                            opacity: fillOpacity
                          }
                        }}
                        container
                        containerProps={{
                          'data-tooltip-html': handleTooltip(
                            d,
                            item.dataKey,
                            firstQuartile,
                            thirdQuartile,
                            median,
                            iqr
                          ),
                          'data-tooltip-id': tooltip_id,
                          tabIndex: -1
                        }}
                      />
                    )}
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
