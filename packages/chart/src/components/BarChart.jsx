import React, { useContext } from 'react'

// visx
import { Group } from '@visx/group'
import { Bar } from '@visx/shape'

// cdc
import BarChartType from './BarChartType'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../ConfigContext'

const BarChart = ({ xScale, yScale, seriesScale, xMax, yMax, handleTooltipMouseOver, handleTooltipMouseOff, handleTooltipClick, brushData, children, isBrush, height, totalHeight }) => {
  const { transformedData: data, config, isDebug } = useContext(ConfigContext)
  //console.log('### BarCHART origHeight', height)
  //if (config.showChartBrush && isDebug) console.log('###BARchart BRUSH data in, yMax, xMax, xScale, yScale', data, yMax, xMax, xScale, yScale)
  //if (config.showChartBrush && isDebug) console.log('###BARchart BRUSH data in, seriesScale, data, totalHeight', seriesScale, data, totalHeight)

  return (
    <svg>
      <ErrorBoundary component='BarChart'>
        <Group left={parseFloat(config.runtime.yAxis.size)}>
          <BarChartType.StackedVertical xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} />
          <BarChartType.StackedHorizontal xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} />
          <BarChartType.Vertical xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} seriesScale={seriesScale} isBrush={isBrush} origHeight={height} totalHeight={totalHeight}>
            {children}
          </BarChartType.Vertical>
          <BarChartType.Horizontal xScale={xScale} yScale={yScale} xMax={xMax} yMax={yMax} seriesScale={seriesScale} />

          {/* tooltips */}
          <Bar key={'bars'} width={Number(xMax)} height={Number(yMax)} fill={false ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleTooltipMouseOver(e, data)} onMouseOut={handleTooltipMouseOff} onClick={e => handleTooltipClick(e, data)} />
        </Group>
      </ErrorBoundary>
    </svg>
  )
}

export default BarChart
