import { useState } from 'react'
import { Group } from '@visx/group'
import '../index.scss'

const LineChartBumpCircle = props => {
  const { config, xScale, yScale, parseDate } = props
  const [tooltipID, setTooltipID] = useState<string>('')
  const [yearDate, setYearDate] = useState<string>('')

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

  const handleClick = (label: string, year: string) => {
    var date = "1/1/"
    setTooltipID(label)
    setYearDate(date + year.slice(-2))
  }

  const tooltipRankChange = `${(config.tooltipData?.find(item => item.key === tooltipID && item.additionalInfo2 === yearDate )  || {}).additionalInfo1}`
  const tooltipFrequency = `${(config.tooltipData?.find(item => item.key === tooltipID && item.additionalInfo2 === yearDate )  || {}).additionalInfo3}`
  
  console.log(tooltipRankChange)
  const checkBandScale = xValue => {
    return xScale.bandwidth ? xScale.bandwidth() / 2 + Number(xValue) : Number(xValue)
  }

  //const tooltip = `<div className='tooltip'>${tooltipID}<div>`

  const tooltip = `<ul>
                  <li class="tooltip-heading">${tooltipID}</li>
                  <li class="tooltip-body"><strong>Timestamp:</strong> ${yearDate}</li>
                  <li class="tooltip-body"><strong>Frequency:</strong> ${tooltipFrequency}</li>
                  <li class="tooltip-body"><strong>Rank Change:</strong> ${tooltipRankChange}</li>
                  </li></ul>`

  // get xScale and yScale...
  if (!config.series) return

  const circles = config?.series.map((series, seriesIndex) => {
    return config.data.map((d, dataIndex) => {
      return (
        <>
          <Group left={Number(config.runtime.yAxis.size)}>
            {d[series.dataKey] && (
              <>
                <circle data-tooltip-html={tooltip} data-tooltip-id={`bump-chart`} r={10} cx={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey]))))} cy={Number(yScale(d[series.dataKey]))} stroke='#CACACA' strokeWidth={1} fill='#E5E4E2' />
                {d[series.dataKey].toString().length === 2 ? (
                  // prettier-ignore
                  <text
                  x={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey])))) - 7}
                  y={Number(yScale(d[series.dataKey])) + 4}
                  fill='#000000'
                  fontSize={12}
                  onMouseOver={() => {handleClick(series.dataKey, d[config.xAxis.dataKey])}}>
                  {d[series.dataKey]}
                </text>
                ) : (
                  // prettier-ignore
                  <text
                  x={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey])))) - 4}
                  y={Number(yScale(d[series.dataKey])) + 4}
                  fill='#000000'
                  fontSize={12}
                  onMouseOver={() => handleClick(series.dataKey, d[config.xAxis.dataKey])}>
                  {d[series.dataKey]}
                </text>
                )}
              </>
            )}
          </Group>
        </>
      )
    })
  })

  return <>{circles}</>
}

export default LineChartBumpCircle
