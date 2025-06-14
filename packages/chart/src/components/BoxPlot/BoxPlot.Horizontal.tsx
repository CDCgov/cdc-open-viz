import React, { useContext } from 'react'
import { Group } from '@visx/group'
import { BoxPlot } from '@visx/stats'
import { scaleLinear, scaleBand } from '@visx/scale'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../../ConfigContext'
import { handleTooltip, createPlots } from './helpers/index'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import _ from 'lodash'
import { fi } from '@faker-js/faker'
// Renders multiple horizontal box plots per category for each series key
export default function BoxPlotHorizontal({ xMax, yMax, min, max }) {
  const { config, transformedData: data, colorScale, seriesHighlight } = useContext(ConfigContext)
  const yOffset = Number(config.yAxis.size)
  const defaultColor = APP_FONT_COLOR
  // generate summary stats
  const plots = createPlots(data, config)
  const categories = plots.map(p => p.columnCategory)
  const { plotNonOutlierValues, plotOutlierValues } = config.boxplot
  // overall min/max come from props in config
  const xScale = scaleLinear({
    domain: [min, max],
    range: [0, xMax],
    nice: true
  })

  // band scale for category rows
  const yScale = scaleBand({
    domain: categories,
    range: [0, yMax],
    padding: 0.3
  })
  // series keys (e.g. ['Value','Price','Distance'])
  const seriesKeys = config.runtime.seriesKeys
  // band scale for series within each category
  const seriesScale = scaleBand({
    domain: seriesKeys,
    range: [0, yScale.bandwidth()],
    padding: 0.1
  })

  return (
    <ErrorBoundary component='BoxPlotHorizontal'>
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
                />
                {/* non-outlier points */}
                {plotNonOutlierValues &&
                  nonOut.map((value, idx) => (
                    <circle
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
