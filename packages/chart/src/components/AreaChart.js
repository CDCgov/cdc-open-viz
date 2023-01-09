import React, { useContext } from 'react'
import { Group } from '@visx/group'
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { AreaClosed } from '@visx/shape'
import { curveMonotoneX } from '@visx/curve'

const CoveAreaChart = ({ xScale, yScale }) => {
  const { transformedData: data, config } = useContext(Context)

  return (
    data && (
      <ErrorBoundary component='AreaChart'>
        <Group className='area-chart' key='boxplot-wrapper' left={config.yAxis.size}>
          {config.series.map((s, index) => {
            let seriesColor = colorPalettesChart[config.palette][index]
            return (
              // prettier-ignore
              <AreaClosed
                curve={curveMonotoneX}
                key={'area-chart'}
                fill={seriesColor}
                data={data}
                x={d => xScale(d[config.xAxis.dataKey])}
                y={d => yScale(d[config.series[index].dataKey])}
                yScale={yScale}
                data-tip={handleTooltip}
                data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
              />
            )
          })}
        </Group>
      </ErrorBoundary>
    )
  )
}

export default CoveAreaChart
