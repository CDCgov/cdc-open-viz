import React, { useContext } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { handleTooltip, createPlots } from './helpers/index'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import _ from 'lodash'

const BoxPlotVertical = ({ xScale, yScale, seriesScale }) => {
  const { config, colorScale, seriesHighlight, transformedData: data } = useContext(ConfigContext)
  const { boxplot } = config

  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const boxWidth = xScale.bandwidth()

  const bodyStyles = getComputedStyle(document.body)
  const defaultColor = APP_FONT_COLOR
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = _.get(colorPalettesChart, [config.palette, 0], '#000')
  const plots = createPlots(data, config)
  return (
    <ErrorBoundary component='BoxPlot Vertical'>
      <Group left={Number(config.yAxis.size)} className='boxplot' key={`boxplot-group`}>
        {plots.map((d, i) => {
          const offset = boxWidth - constrainedWidth
          const radius = 4

          return (
            <Group
              key={`boxplotplot-${d.columnCategory}`}
              left={xScale(d.columnCategory) + (xScale.bandwidth() - seriesScale.bandwidth()) / 2}
            >
              {config.series.map((item, index) => {
                const isTransparent =
                  config.legend.behavior === 'highlight' &&
                  seriesHighlight.length > 0 &&
                  seriesHighlight.indexOf(item.dataKey) === -1
                const displayPlot =
                  config.legend.behavior === 'highlight' ||
                  seriesHighlight.length === 0 ||
                  seriesHighlight.indexOf(item.dataKey) !== -1
                const fillOpacity = isTransparent ? 0.3 : 0.7
                return (
                  <Group key={`boxplotplot-${item.dataKey}-${index}`}>
                    {boxplot.plotNonOutlierValues &&
                      d.columnNonOutliers[item.dataKey].map((value, index) => {
                        return (
                          <circle
                            display={displayPlot ? 'block' : 'none'}
                            cx={seriesScale(item.dataKey) + seriesScale.bandwidth() / 2}
                            cy={yScale(value)}
                            r={radius}
                            opacity={fillOpacity}
                            fill={defaultColor}
                            style={{ stroke: defaultColor }}
                            key={`boxplot-${i}--circle-${index}`}
                          />
                        )
                      })}
                    {displayPlot && (
                      <BoxPlot
                        display={displayPlot ? 'block' : 'none'}
                        data-left={xScale(d.columnCategory) + config.yAxis.size + offset / 2 + 0.5}
                        key={`box-plot-${i}-${item}`}
                        min={Number(d.min[item.dataKey])}
                        max={Number(d.max[item.dataKey])}
                        left={seriesScale(item.dataKey)}
                        firstQuartile={d.q1[item.dataKey]}
                        thirdQuartile={d.q3[item.dataKey]}
                        median={d.median[item.dataKey]}
                        boxWidth={seriesScale.bandwidth()}
                        fill={colorScale(item.dataKey)}
                        fillOpacity={1}
                        stroke={defaultColor}
                        valueScale={yScale}
                        outliers={boxplot.plotOutlierValues ? _.map(d.columnOutliers[item.dataKey], item => item) : []}
                        outlierProps={{
                          style: {
                            fill: defaultColor,
                            opacity: fillOpacity,
                            stroke: defaultColor
                          }
                        }}
                        medianProps={{
                          style: {
                            opacity: fillOpacity,
                            stroke: defaultColor
                          }
                        }}
                        boxProps={{
                          style: {
                            stroke: defaultColor,
                            strokeWidth: boxplot.borders === 'true' ? 1.5 : 0,
                            opacity: fillOpacity
                          }
                        }}
                        maxProps={{
                          style: {
                            opacity: fillOpacity,
                            stroke: defaultColor
                          }
                        }}
                        container
                        containerProps={{
                          'data-tooltip-html': handleTooltip(
                            boxplot,
                            d.columnCategory,
                            item.dataKey,
                            _.round(d.q1[item.dataKey], config.dataFormat.roundTo),
                            _.round(d.q3[item.dataKey], config.dataFormat.roundTo),
                            _.round(d.median[item.dataKey], config.dataFormat.roundTo),
                            _.round(d.iqr[item.dataKey], config.dataFormat.roundTo),
                            config.xAxis.label,
                            defaultColor
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

export default BoxPlotVertical
