import React, { useContext } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { handleTooltip, calculateBoxPlotStats, createPlots } from './helpers/index'
import _ from 'lodash'

const CoveBoxPlot = ({ xScale, yScale, seriesScale }) => {
  const { config, colorScale, seriesHighlight, transformedData: data } = useContext(ConfigContext)
  const { boxplot } = config

  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = _.get(colorPalettesChart, [config.palette, 0], '#000')

  return (
    <ErrorBoundary component='BoxPlot'>
      <Group left={Number(config.yAxis.size)} className='boxplot' key={`boxplot-group`}>
        {createPlots(data, config).map((d, i) => {
          const offset = boxWidth - constrainedWidth
          const radius = 4

          return (
            <Group
              key={`boxplotplot-${d.columnCategory}`}
              left={xScale(d.columnCategory) + (xScale.bandwidth() - seriesScale.bandwidth()) / 2}
            >
              {config.series.map((item, index) => {
                const valuesByKey = d.keyValues[item.dataKey]
                const { min, max, median, firstQuartile, thirdQuartile } = calculateBoxPlotStats(valuesByKey)
                let iqr = Number(thirdQuartile - firstQuartile).toFixed(config.dataFormat.roundTo)

                const isTransparent =
                  config.legend.behavior === 'highlight' &&
                  seriesHighlight.length > 0 &&
                  seriesHighlight.indexOf(item.dataKey) === -1
                const displayPlot =
                  config.legend.behavior === 'highlight' ||
                  seriesHighlight.length === 0 ||
                  seriesHighlight.indexOf(item.dataKey) !== -1
                const fillOpacity = isTransparent ? 0.3 : 0.5

                return (
                  <Group key={`boxplotplot-${item.dataKey}-${index}`}>
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
                        min={Number(min)}
                        max={Number(max)}
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
                            boxplot,
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
