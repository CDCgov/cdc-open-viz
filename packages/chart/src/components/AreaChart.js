import React, { useContext } from 'react'
import { Group } from '@visx/group'
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { AreaClosed, XYChart, AreaSeries } from '@visx/shape'
import { curveMonotoneX } from '@visx/curve'

const CoveAreaChart = ({ xScale, yScale }) => {
  const { transformedData: data, config } = useContext(Context)

  const yMax = config.height - config.runtime.xAxis.size
  const xMax = config.width - config.runtime.yAxis.size - config.yAxis.rightAxisSize
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(20, boxWidth)

  const getBottomAxisValue = d => d[config.xAxis.dataKey] // bottom axis name
  const getLeftAxisValue = d => d[config.series[0].dataKey] // left axis name

  data.map(d => console.log('bottom', xScale(getBottomAxisValue(d))))
  data.map(d => console.log('left', yScale(getLeftAxisValue(d))))
  console.log('c', config)

  const customTheme = {
    colors: colorPalettesChart[config.palette]
  }

  console.log('customTheme', customTheme)

  return (
    <ErrorBoundary component='AreaChart'>
      <Group className='area-chart' key='boxplot-wrapper'>
        {/* <XYChart xScale={xScale} yScale={yScale} height={yMax} theme={customTheme}>
          {config.series.map((seriesData, i) => {
            console.log('i', i)
            console.log('data', data)
            console.log('xAccessor', config.xAxis.dataKey)
            console.log('yAccessor', seriesData.dataKey)
            return <AreaSeries dataKey={i} data={data} xAccessor={config.xAxis.dataKey} yAccessor={seriesData.dataKey} fillOpacity={0.4} />
          })} */}
        {config.series.map(seriesData => {
          return (
            <AreaClosed key={seriesData.dataKey} fill={'red'} style={{ fillOpacity: '1', opacity: 1 }} data={seriesData} x={d => xScale(getBottomAxisValue(seriesData)) ?? 0} y={d => yScale(getLeftAxisValue(seriesData)) ?? 0} yScale={yScale} strokeWidth={1} data-custom={JSON.stringify(seriesData)} />
          )
        })}
        <AreaClosed key={'outside--loop'} fill={'red'} style={{ fillOpacity: '1', opacity: 1 }} data={data} x={d => xScale(getBottomAxisValue(data)) ?? 0} y={d => yScale(getLeftAxisValue(seriesData)) ?? 0} yScale={yScale} strokeWidth={1} data-custom={JSON.stringify(seriesData)} />
        {/* <AreaClosed data={data} x={d => xScale(getBottomAxisValue(d)) ?? 0} y={d => yScale(getLeftAxisValue(d)) ?? 0} yScale={yScale} strokeWidth={1} stroke='url(#area-gradient)' fill='url(#area-gradient)' curve={curveMonotoneX} /> */}
        {/* </XYChart> */}
      </Group>
    </ErrorBoundary>
  )
}

export default CoveAreaChart
