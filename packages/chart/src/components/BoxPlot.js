import React, { useContext, useEffect } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

const CoveBoxPlot = ({ xScale, yScale }) => {
  const { transformedData: data, config, setConfig } = useContext(Context)

  useEffect(() => {
    if (config.visualizationType === 'Box Plot') {
      setConfig({
        ...config,
        legend: {
          ...config.legend,
          hide: true
        }
      })
    }
  }, [])

  const {
    boxplot: { columnFirstQuartile, columnThirdQuartile, columnMax, columnMin, columnMedian, columnOutliers },
    width,
    height
  } = config

  const boxWidth = xScale.bandwidth()
  console.log('bw', boxWidth)
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'

  // tooltips
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const handleTooltip = d => {
    return `
      <strong>${d.columnCategory}</strong></br>
      ${config.boxplot.labels.q1}: ${d.columnFirstQuartile}<br/>
      ${config.boxplot.labels.q3}: ${d.columnThirdQuartile}<br/>
      IQR: ${d.columnIqr}<br/>
      Median: ${d.columnMedian}
    `
  }
  return (
    <ErrorBoundary component='BoxPlot'>
      <Group className='boxplot' key='boxplot-wrapper'>
        {config.boxplot.plots.map((d, i) => {
          const offset = boxWidth - constrainedWidth
          return (
            <BoxPlot
              key={`box-plot-${i}`}
              min={d.columnMin}
              max={d.columnMax}
              left={xScale(d.columnCategory) + config.yAxis.size + offset / 2 + 0.5}
              firstQuartile={d.columnFirstQuartile}
              thirdQuartile={d.columnThirdQuartile}
              median={d.columnMedian}
              boxWidth={constrainedWidth}
              fill={color_0}
              fillOpacity={0.5}
              stroke='black'
              valueScale={yScale}
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
                'data-tip': 'cool'
              }}
              maxProps={{
                style: {
                  stroke: 'black'
                }
              }}
              container
              containerProps={{
                'data-tip': handleTooltip(d),
                'data-for': tooltip_id
              }}
            />
          )
        })}
      </Group>
    </ErrorBoundary>
  )
}

export const CONSTANTS = {
  firstQuartile: 'First Quartile',
  thirdQuartile: 'Third Quartile',
  q1: 'Q1',
  q3: 'Q3',
  median: 'Median',
  mode: 'Mode',
  mean: 'Mean',
  groupName: 'Measures',
  maximum: 'Maximum',
  minimum: 'Minimum',
  standardDeviation: 'Standard Deviation',
  count: 'Count',
  outlierValues: 'Outlier Values'
}

export default CoveBoxPlot
