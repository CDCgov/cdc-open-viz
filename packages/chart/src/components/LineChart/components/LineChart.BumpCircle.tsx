import React, { useState } from 'react'
import { Group } from '@visx/group'

const LineChartBumpCircle = props => {
  const { config, xScale, yScale, parseDate } = props

  const handleX = xValue => {
    if (config.xAxis.type === 'date') {
      return parseDate(xValue).getTime()
    }
    if (config.xAxis.type === 'date-time') {
      return new Date(xValue)
    }
    if (config.xAxis.type === 'categorical') {
      return xValue
    }
  }

  const checkBandScale = xValue => {
    return xScale.bandwidth ? xScale.bandwidth() / 2 + Number(xValue) : Number(xValue)
  }
  // get xScale and yScale...
  if (!config.series) return
  return config?.series.map((series, seriesIndex) => {
    return config.data.map((d, dataIndex) => {
      return (
        <Group left={Number(config.runtime.yAxis.size)}>
          {d[series.dataKey] && (
            <>
              <circle r={10} cx={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey]))))} cy={Number(yScale(d[series.dataKey]))} stroke='#CACACA' strokeWidth={1} fill='#E5E4E2' />
              {d[series.dataKey].toString().length === 2 ? (
                <text x={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey])))) - 7} y={Number(yScale(d[series.dataKey])) + 4} fill='#000000' fontSize={12}>
                {d[series.dataKey]}
              </text>
              ) : (
                <text x={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey])))) - 4} y={Number(yScale(d[series.dataKey])) + 4} fill='#000000' fontSize={12}>
                  {d[series.dataKey]}
              </text>
              )}
            </>
            
          )}
          
        </Group>
      )
    })
  })
}

export default LineChartBumpCircle
