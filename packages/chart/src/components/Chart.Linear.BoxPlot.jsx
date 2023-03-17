import React from 'react'

// Third Party
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'

// Data
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Components - Core
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'

// Visualization
const ChartLinearBoxPlot = ({ xScale, yScale }) => {
  const { config } = useVisConfig()

  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'

  // Tooltips
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const handleTooltip = d => (`
      <strong>${d.columnCategory}</strong></br>
      ${config.boxplot.labels.q1}: ${d.columnFirstQuartile}<br/>
      ${config.boxplot.labels.q3}: ${d.columnThirdQuartile}<br/>
      ${config.boxplot.labels.iqr}: ${d.columnIqr}<br/>
      ${config.boxplot.labels.median}: ${d.columnMedian}
    `)

  return (
    <ErrorBoundary component="BoxPlot">
      <Group className="boxplot" key={`boxplot-group`}>
        {config.boxplot.plots.map(
          (d, i) => {
            const offset = boxWidth - constrainedWidth
            const radius = 4
            return (<>
              {config.boxplot.plotNonOutlierValues && d.nonOutlierValues.map(
                (value) => (
                  <circle
                    cx={xScale(d.columnCategory) + config.yAxis.size + boxWidth / 2}
                    cy={yScale(value)}
                    r={radius}

                    style={{ opacity: 1, fillOpacity: 1, stroke: 'black' }}
                    fill={'#ccc'}
                  />
                )
              )}
              <BoxPlot
                min={d.columnMin}
                max={d.columnMax}
                median={d.columnMedian}
                firstQuartile={d.columnFirstQuartile}
                thirdQuartile={d.columnThirdQuartile}
                valueScale={yScale}

                boxWidth={constrainedWidth}
                fill={color_0}
                fillOpacity={0.5}
                stroke="black"
                data-left={xScale(d.columnCategory) + config.yAxis.size + offset / 2 + 0.5}
                left={xScale(d.columnCategory) + config.yAxis.size + offset / 2 + 0.5}

                outliers={config.boxplot.plotOutlierValues ? d.columnOutliers : []}
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
                    strokeWidth: config.boxplot.borders === 'true' ? 1 : 0
                  },
                  'data-tooltip-html': 'cool'
                }}
                maxProps={{
                  style: {
                    stroke: 'black'
                  }
                }}
                container
                containerProps={{
                  'data-tooltip-html': handleTooltip(d),
                  'data-tooltip-id': tooltip_id
                }}
                key={`box-plot-${i}`}
              />
            </>)
          }
        )}
      </Group>
    </ErrorBoundary>
  )
}

export default ChartLinearBoxPlot
