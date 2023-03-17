import React from 'react'

// Third Party
import { Group } from '@visx/group'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Visualization
const ChartLinearScatterPlot = (
  {
    xScale,
    yScale,
    getXAxisData,
    getYAxisData,
    colorScale
  }
) => {
  const { config } = useVisConfig()

  // copied from line chart
  // should probably be a constant somewhere.
  let circleRadii = 4.5

  let pointStyles = {
    filter: 'unset',
    opacity: 1,
    stroke: 'black'
  }

  const handleTooltip = (item, s) => (`
    <div>
     ${config.xAxis.label}: ${item[config.xAxis.dataKey]} <br/>
     ${config.yAxis.label}: ${item[s]}
    </div>
  `)

  return (
    <Group className="scatter-plot" left={config.yAxis.size}>
      {config.data.map(
        (item, dataIndex) => {
          // prettier-ignore
          return config.runtime.seriesKeys.map(
            (s) => (
              <circle
                key={`${dataIndex}`}
                r={circleRadii}
                cx={xScale(item[config.xAxis.dataKey])}
                cy={yScale(item[s])}
                fillOpacity={1}
                opacity={1}
                style={pointStyles}
                fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s] : s) : '#000'}
                data-tooltip-html={handleTooltip(item, s)}
                data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
              />
            )
          )
        }
      )}
    </Group>
  )
}
export default ChartLinearScatterPlot
