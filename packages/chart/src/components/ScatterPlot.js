import React, { useContext } from 'react'
import Context from '../context'
import { Group } from '@visx/group'

const CoveScatterPlot = ({ xScale, yScale, getXAxisData, getYAxisData }) => {
  const { colorPalettes, colorScale, transformedData: data, config } = useContext(Context)

  // copied from line chart
  // should probably be a constant somewhere.
  let circleRadii = 4.5

  // first series key for now
  let seriesKey = config.runtime.seriesKeys[0]

  let pointStyles = {
    filter: 'unset',
    opacity: 1,
    fill: colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000',
    stroke: 'black'
  }

  return data.map((item, dataIndex) => {
    // prettier-ignore
    return (
      <Group left={config.runtime.yAxis.size}>
        <circle
          key={`${dataIndex}`}
          r={circleRadii}
          cx={xScale(item[config.xAxis.dataKey])}
          cy={yScale(item[config.yAxis.dataKey])}
          fill={'black'}
          fillOpacity={1}
          opacity={1}
          style={pointStyles}
          data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
        />
      </Group>
    )
  })
}

export default CoveScatterPlot
