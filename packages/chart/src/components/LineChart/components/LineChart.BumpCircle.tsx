import React from 'react'

const LineChartBumpCircle = props => {
  const { config, d, displayArea, seriesKey, tooltipData, xScale, yScale, colorScale, parseDate, yScaleRight, data, circleData, dataIndex, mode } = props

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

  // get xScale and yScale...
  if (!config.series) return
  return config?.series.map((series, seriesIndex) => {
    return config.data.map((d, dataIndex) => {
      console.log(xScale(d[config.xAxis.dataKey]))
      return <circle className='bump-circle' r={10} cx={Number(xScale(handleX(d[config.xAxis.dataKey])))} cy={Number(yScale(d[series.dataKey]))} stroke='#CACACA' strokeWidth={1} fill='none' style={{ zIndex: 2 }} />
    })
  })
}

export default LineChartBumpCircle
