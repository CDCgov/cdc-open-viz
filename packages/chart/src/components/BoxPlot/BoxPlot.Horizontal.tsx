import React, { useContext } from 'react'
import { Group } from '@visx/group'
import { BoxPlot } from '@visx/stats'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../../ConfigContext'
import { handleTooltip, createPlots } from './helpers/index'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import _ from 'lodash'

const BoxPlotHorizontal = ({ xScale, yScale, seriesScale }) => {
  const { config, transformedData: data, colorScale, seriesHighlight } = useContext(ConfigContext)
  const yOffset = Number(config.xAxis.size)
  const defaultColor = APP_FONT_COLOR
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  // generate summary stats
  const plots = createPlots(data, config)
  const { plotNonOutlierValues, plotOutlierValues } = config.boxplot

  return (
    <ErrorBoundary component='BoxPlot Horizontal'>
      <Group left={yOffset} className='boxplot'>
        {plots.map(plot => {
          const category = plot.columnCategory

          return config.series.map(item => {
            const y = (yScale(category) || 0) + seriesScale(item.dataKey) + seriesScale.bandwidth() / 2
            const isTransparent =
              config.legend.behavior === 'highlight' &&
              seriesHighlight.length > 0 &&
              seriesHighlight.indexOf(item.dataKey) === -1
            const displayPlot =
              config.legend.behavior === 'highlight' ||
              seriesHighlight.length === 0 ||
              seriesHighlight.indexOf(item.dataKey) !== -1
            const fillOpacity = isTransparent ? 0.3 : 0.5
            // outlier & non-outlier arrays
            const nonOut = plot.columnNonOutliers?.[item.dataKey] || []
            const out = plot.columnOutliers?.[item.dataKey] || []

            return (
              <Group key={`${category}-${item.dataKey}`} top={y}>
                {displayPlot && (
                  <BoxPlot
                    min={Number(plot.min[item.dataKey])}
                    max={Number(plot.max[item.dataKey])}
                    thirdQuartile={plot.q3[item.dataKey]}
                    firstQuartile={plot.q1[item.dataKey]}
                    median={plot.median[item.dataKey]}
                    horizontal={true}
                    valueScale={xScale}
                    boxWidth={seriesScale.bandwidth()}
                    fill={colorScale(item.dataKey)}
                    fillOpacity={1}
                    stroke={defaultColor}
                    boxProps={{
                      fill: colorScale(item.dataKey),
                      strokeWidth: config.boxplot.borders === 'true' ? 1.5 : 0,
                      stroke: defaultColor
                    }}
                    minProps={{ stroke: colorScale(item.dataKey), strokeWidth: 1, opacity: fillOpacity }}
                    maxProps={{ stroke: colorScale(item.dataKey), strokeWidth: 1, opacity: fillOpacity }}
                    medianProps={{ stroke: defaultColor, strokeWidth: 1, opacity: fillOpacity }}
                    outliers={
                      config.boxplot.plotOutlierValues ? _.map(plot.columnOutliers[item.dataKey], item => item) : []
                    }
                    outlierProps={{
                      style: {
                        fill: 'green',
                        opacity: 1,
                        stroke: 'green'
                      }
                    }}
                    container
                    containerProps={{
                      'data-tooltip-html': handleTooltip(
                        config.boxplot,
                        plot.columnCategory,
                        item.dataKey,
                        _.round(plot.q1[item.dataKey], config.dataFormat.roundTo),
                        _.round(plot.q3[item.dataKey], config.dataFormat.roundTo),
                        _.round(plot.median[item.dataKey], config.dataFormat.roundTo),
                        _.round(plot.iqr[item.dataKey], config.dataFormat.roundTo),
                        config.xAxis.label,
                        defaultColor
                      ),
                      'data-tooltip-id': tooltip_id,
                      tabIndex: -1
                    }}
                  />
                )}

                {/* non-outlier points */}
                {plotNonOutlierValues &&
                  nonOut.map((value, idx) => (
                    <circle
                      display={displayPlot ? 'block' : 'none'}
                      key={`non-${category}-${item.dataKey}-${idx}`}
                      cx={xScale(value)}
                      cy={seriesScale.bandwidth() / 2}
                      r={4}
                      opacity={fillOpacity}
                      fill={defaultColor}
                      style={{ stroke: defaultColor }}
                    />
                  ))}

                {/* outlier points */}
                {plotOutlierValues &&
                  out.map((value, idx) => (
                    <circle
                      display={displayPlot ? 'block' : 'none'}
                      key={`out-${category}-${item.dataKey}-${idx}`}
                      cx={xScale(value)}
                      cy={seriesScale.bandwidth() / 2}
                      r={4}
                      opacity={fillOpacity}
                      fill={defaultColor}
                      style={{ stroke: defaultColor }}
                    />
                  ))}
              </Group>
            )
          })
        })}
      </Group>
    </ErrorBoundary>
  )
}
export default BoxPlotHorizontal
