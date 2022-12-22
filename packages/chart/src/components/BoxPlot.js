import React, { useContext } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

const CoveBoxPlot = ({ xScale, yScale }) => {
  // accessors
  const x = d => d.x
  const min = d => d.min
  const max = d => d.max
  const median = d => d.median
  const firstQuartile = d => d.firstQuartile
  const thirdQuartile = d => d.thirdQuartile
  const outliers = d => d.outliers

  // Get Data Here
  const { transformedData: data, config } = useContext(Context)

  // Get yMax
  const yMax = config.height - config.runtime.xAxis.size
  const xMax = config.width - config.runtime.yAxis.size - config.yAxis.rightAxisSize

  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)

  const { width, height } = config
  return (
    <ErrorBoundary component='BoxPlot'>
      <Group className='boxplot' key='boxplot-wrapper'>
        {data.map((d, i) => {
          return (
            <BoxPlot
              key={`box-plot-${i}`}
              min={min(d)}
              max={max(d)}
              left={xScale(x(d)) + boxWidth + 0.3}
              firstQuartile={firstQuartile(d)}
              thirdQuartile={thirdQuartile(d)}
              median={median(d)}
              boxWidth={constrainedWidth * 0.4}
              fill={'#005eaa'}
              fillOpacity={0.3}
              stroke='black'
              strokeWidth={1}
              valueScale={yScale}
              outliers={outliers(d)}
              outlierProps={{
                style: {
                  fill: 'black',
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
