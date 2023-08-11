import React, { useContext } from 'react'

// visx
import { Group } from '@visx/group'
import { BarGroup, Bar } from '@visx/shape'

// third party

// cdc
import BarChartType from './BarChartType'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../ConfigContext'

const BarChart = ({ xScale, yScale, seriesScale, xMax, yMax, handleTooltipMouseOver, handleTooltipMouseOff, handleTooltipClick }) => {
  const { transformedData: data, config } = useContext(ConfigContext)

  return (
    <ErrorBoundary component='BarChart'>
      <Group left={parseFloat(config.runtime.yAxis.size)}>
        <BarChartType.StackedVertical xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} />
        <BarChartType.StackedHorizontal xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} />
        <BarChartType.Vertical xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} seriesScale={seriesScale} />
        <BarChartType.Horizontal xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} seriesScale={seriesScale} />

        {/* tooltips */}
        {config.orientation !== 'horizontal' && <Bar key={'bars'} width={Number(xMax)} height={Number(yMax)} fill={false ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleTooltipMouseOver(e, data)} onMouseOut={handleTooltipMouseOff} onClick={e => handleTooltipClick(e, data)} />}
      </Group>
    </ErrorBoundary>
  )
}

export default BarChart
