import React, { useContext, useEffect } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import ReactTooltip from 'react-tooltip'

const CoveBoxPlot = ({ xScale, yScale }) => {
  const { transformedData: data, config } = useContext(Context)

  const {
    boxplot: { columnFirstQuartile, columnThirdQuartile, columnMax, columnMin, columnMedian, columnOutliers },
    width,
    height
  } = config

  const yMax = config.height - config.runtime.xAxis.size
  const xMax = config.width - config.runtime.yAxis.size - config.yAxis.rightAxisSize
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(20, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'

  // tooltips
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const handleTooltip = d => {
    return `
      <strong>${d.columnCategory}</strong></br>
      Q1: ${d.columnFirstQuartile}<br/>
      Q3: ${d.columnThirdQuartile}<br/>
      IQR: ${d.columnIqr}<br/>
      Median: ${d.columnMedian}
    `
  }
  return (
    <ErrorBoundary component='BoxPlot'>
      <Group className='boxplot' key='boxplot-wrapper'>
        {config.boxplot.map((d, i) => {
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
              strokeWidth={1}
              valueScale={yScale}
              outliers={d.columnOutliers}
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
                  stroke: 'black'
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

export default CoveBoxPlot
