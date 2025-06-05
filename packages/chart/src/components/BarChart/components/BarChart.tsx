import React, { MouseEventHandler, useContext, useState } from 'react'

// visx
import { Group } from '@visx/group'
import { Bar } from '@visx/shape'

// cdc
import BarChartType from './BarChartType'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../../../ConfigContext'
import BarChartContext from './context'
import { useBarChart } from '../helpers/useBarChart'
import { PositionScale } from '@visx/shape/lib/types'

type BarChartProps = {
  xScale: PositionScale
  yScale: PositionScale
  seriesScale: PositionScale
  xMax: number
  yMax: number
  handleTooltipMouseOver: MouseEventHandler<SVGRectElement>
  handleTooltipMouseOff: MouseEventHandler<SVGRectElement>
  handleTooltipClick: MouseEventHandler<SVGRectElement>
}

const BarChart: React.FC<BarChartProps> = ({
  xScale,
  yScale,
  seriesScale,
  xMax,
  yMax,
  handleTooltipMouseOver,
  handleTooltipMouseOff,
  handleTooltipClick
}) => {
  const configContext = useContext(ConfigContext)
  const { transformedData: data, config, convertLineToBarGraph } = configContext
  const barChart = useBarChart(handleTooltipMouseOver, handleTooltipMouseOff, configContext)

  const contextValues = {
    xScale,
    yScale,
    xMax,
    yMax,
    seriesScale,
    convertLineToBarGraph,
    barChart
  }

  return (
    <ErrorBoundary component='BarChart'>
      <BarChartContext.Provider value={contextValues}>
        <Group left={parseFloat(config.runtime.yAxis.size)}>
          <BarChartType.StackedVertical />
          <BarChartType.StackedHorizontal />
          <BarChartType.Vertical />
          <BarChartType.Horizontal />
          <Bar
            key={'bars'}
            display={config.tooltips.singleSeries ? 'none' : 'block'}
            width={Number(xMax)}
            height={Number(yMax)}
            fill={'transparent'}
            fillOpacity={0.05}
            onMouseMove={e => {
              handleTooltipMouseOver(e, data)
            }}
            onMouseOut={handleTooltipMouseOff}
            onClick={e => handleTooltipClick(e, data)}
          />
        </Group>
      </BarChartContext.Provider>
    </ErrorBoundary>
  )
}

export default BarChart
