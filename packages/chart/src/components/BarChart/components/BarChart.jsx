import React, { useContext } from 'react'

// visx
import { Group } from '@visx/group'
import { Bar } from '@visx/shape'

// cdc
import BarChartType from './BarChartType'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../../../ConfigContext'
import BarChartContext from './context'

const BarChart = ({
  xScale,
  yScale,
  seriesScale,
  xMax,
  yMax,
  handleTooltipMouseOver,
  handleTooltipMouseOff,
  handleTooltipClick
}) => {
  const { transformedData: data, config, convertLineToBarGraph } = useContext(ConfigContext)

  const contextValues = {
    xScale,
    yScale,
    xMax,
    yMax,
    seriesScale,
    convertLineToBarGraph
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
            onMouseMove={e => handleTooltipMouseOver(e, data)}
            onMouseOut={handleTooltipMouseOff}
            onClick={e => handleTooltipClick(e, data)}
          />
        </Group>
      </BarChartContext.Provider>
    </ErrorBoundary>
  )
}

export default BarChart
