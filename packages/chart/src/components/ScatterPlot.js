import React, { useContext } from 'react'
import Context from '../context'
import { Group } from '@visx/group'

const CoveScatterPlot = ({ xScale, yScale, getXAxisData, getYAxisData }) => {
  const { colorPalettes, colorScale, transformedData: data, config } = useContext(Context)

  // copied from line chart
  // should probably be a constant somewhere.
  let circleRadii = 4.5

  let pointStyles = {
    filter: 'unset',
    opacity: 1,
    stroke: 'black'
  }

  const handleTooltip = item => `<div>
 ${JSON.stringify(item)}<br/>
 ${config.xAxis.label}: ${item[config.xAxis.dataKey]} <br/>
 ${config.yAxis.label}: ${item[config.yAxis.dataKey]}
</div>`

  return (
    <Group className='scatter-plot' left={config.yAxis.size}>
      {data.map((item, dataIndex) => {
        // prettier-ignore
        return config.runtime.seriesKeys.map( s => {
            return (
              <circle
                key={`${dataIndex}`}
                r={circleRadii}
                cx={xScale(item[config.xAxis.dataKey])}
                cy={yScale(item[config.yAxis.dataKey])}
                fillOpacity={1}
                opacity={1}
                style={pointStyles}
                fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s] : s) : '#000'}
                data-tip={handleTooltip(item)}
                data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
              />
            )
          })
      })}
    </Group>
  )
}
export default CoveScatterPlot
