import React, { useContext } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

const CoveBoxPlot = ({ xScale, yScale }) => {
  const { transformedData: data, config } = useContext(Context)

  const {
    boxplot: { columnFirstQuartile, columnThirdQuartile, columnMax, columnMin, columnMedian, columnOutliers },
    width,
    height
  } = config

  // accessors
  const x = d => d[config.xAxis.dataKey]
  const min = d => d[columnMin]
  const max = d => d[columnMax]
  const median = d => d[columnMedian]
  const firstQuartile = d => d[columnFirstQuartile]
  const thirdQuartile = d => d[columnThirdQuartile]
  const outliers = d => d[columnOutliers]
  const yMax = config.height - config.runtime.xAxis.size
  const xMax = config.width - config.runtime.yAxis.size - config.yAxis.rightAxisSize
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'

  return (
    <ErrorBoundary component='BoxPlot'>
      <Group className='boxplot' key='boxplot-wrapper'>
        {data.map((d, i) => {
          const offset = boxWidth - constrainedWidth
          return (
            <BoxPlot
              key={`box-plot-${i}`}
              min={min(d)}
              max={max(d)}
              left={xScale(x(d)) + config.yAxis.size + offset / 2}
              firstQuartile={firstQuartile(d)}
              thirdQuartile={thirdQuartile(d)}
              median={median(d)}
              boxWidth={constrainedWidth}
              fill={color_0}
              fillOpacity={0.5}
              stroke='black'
              strokeWidth={1}
              valueScale={yScale}
              outliers={outliers(d)}
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
                }
              }}
              maxProps={{
                style: {
                  stroke: 'black'
                }
              }}
            />
          )
        })}
      </Group>
    </ErrorBoundary>
  )
}

export default CoveBoxPlot
