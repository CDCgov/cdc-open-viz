import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { Group } from '@visx/group'

const CoveScatterPlot = ({ xScale, yScale, getXAxisData, getYAxisData }) => {
  const { colorScale, transformedData: data, config } = useContext(ConfigContext)

  // copied from line chart
  // should probably be a constant somewhere.
  let circleRadii = 4.5

  let pointStyles = {
    filter: 'unset',
    opacity: 1,
    stroke: 'black'
  }

  const handleTooltip = (item, s) => `<div>
 ${config.xAxis.label}: ${item[config.xAxis.dataKey]} <br/>
 ${config.yAxis.label}: ${item[s]}
</div>`

  return (
    <Group className='scatter-plot' left={config.yAxis.size}>
      {data.map((item, dataIndex) => {
        // prettier-ignore
        return config.runtime.seriesKeys.map(s => {

          console.log('ITEM', item)
          console.log('series', s)
          return (
            <circle
              key={`${dataIndex}`}
              r={circleRadii}
              cx={xScale(item[config.xAxis.dataKey])}
              cy={yScale(item[s])}
              fillOpacity={1}
              opacity={1}
              style={pointStyles}
              fill={colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s] : s) : '#000'}
              data-tip={handleTooltip(item, s)}
              data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
            />
          )
        })
      })}
    </Group>
  )
}
export default CoveScatterPlot
