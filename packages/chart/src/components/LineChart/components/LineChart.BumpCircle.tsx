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

  const checkBandScale = xValue => {
    return xScale.bandwidth ? xScale.bandwidth() / 2 + Number(xValue) : Number(xValue)
  }

  const getListItems = dataRow => {
    console.log('dataRow', dataRow)
    const listItems = []
    Object.values(config.columns)?.forEach(column => {
      if (!column.tooltips) return
      console.log('c', column)
      if (!column.label) {
        listItems.push(
          `<li className='tooltip-body'>
            <strong>${column?.name}</strong>: ${dataRow[column.name]}
          </li>`
        )
      } else {
        listItems.push(
          `<li className='tooltip-body'>
            <strong>${column?.label}</strong>: ${dataRow[column.name]}
          </li>`
        )
      }
    })
    return listItems.join(' ')
  }

  // console.log('getListItems', getListItems())
  const getTooltip = dataRow => `<ul>
                  <li class="tooltip-heading">${tooltipID}</li>
                  ${getListItems(dataRow)}
</ul>`

  // get xScale and yScale...
  if (!config.series) return

  const circles = config?.series.map((series, seriesIndex) => {
    return config.data.map((d, dataIndex) => {
      return (
        <>
          <Group left={Number(config.runtime.yAxis.size)}>
            {d[series.dataKey] && (
              <>
                <circle data-tooltip-html={getTooltip(d)} data-tooltip-id={`bump-chart`} r={10} cx={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey]))))} cy={Number(yScale(d[series.dataKey]))} stroke='#CACACA' strokeWidth={1} fill='#E5E4E2' />
                {d[series.dataKey].toString().length === 2 ? (
                  // prettier-ignore
                  <text
                  x={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey])))) - 7}
                  y={Number(yScale(d[series.dataKey])) + 4}
                  fill='#000000'
                  fontSize={11.5}
                  >
                  {d[series.dataKey]}
                </text>
                ) : (
                  // prettier-ignore
                  <text
                  x={Number(checkBandScale(xScale(handleX(d[config.xAxis.dataKey])))) - 4}
                  y={Number(yScale(d[series.dataKey])) + 4}
                  fill='#000000'
                  fontSize={11.5}
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
