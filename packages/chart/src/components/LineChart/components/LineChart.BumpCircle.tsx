import { useState } from 'react'
import { Group } from '@visx/group'
import { type Column } from '@cdc/core/types/Column'
import React from 'react'
import { type ChartConfig } from '../../../types/ChartConfig'

type LineChartBumpCircleProp = {
    config: ChartConfig, 
    xScale: any, 
    yScale: any, 
    parseDate: any 
  }

const LineChartBumpCircle = (props: LineChartBumpCircleProp) => {
  const { config, xScale, yScale, parseDate } = props

  // get xScale and yScale...
  if (!config.series) return

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

  
  // const getListItems = dataRow => {
  //   const columns: Column[] = config.columns || [] as Column[]
  //   return Object.values(columns).filter(col => col.tooltips).map(column => {
  //     const label = column.label || column.name;
  //     return <li className='tooltip-body'> <strong>${label}</strong>: ${dataRow[column.name]} </li>
  //   })
  // }

  const getListItems = dataRow => {
    const listItems = []

    Object.values(config.columns)?.forEach((column: Column) => {
      if (!column.tooltips) return
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

  const getTooltip = dataRow => `<ul> ${getListItems(dataRow)} </ul>`

  const circles = config.series.map((series) => {
    return config.data.map((d, dataIndex) => {
      let series_dataKey = d[series.dataKey]
      let axis_dataKey = d[config.xAxis.dataKey]
      return (
        <React.Fragment key={`bump-circle-${series_dataKey}-${dataIndex}`}>
          <Group left={Number(config.runtime.yAxis.size)}> 
            {series_dataKey && (
              <>
                <circle 
                  key={`bump-circle-${series_dataKey}-${dataIndex}`}
                  data-tooltip-html={getTooltip(d)} 
                  data-tooltip-id={`bump-chart`} 
                  r={10} 
                  cx={Number(checkBandScale(xScale(handleX(axis_dataKey))))} 
                  cy={Number(yScale(series_dataKey))} 
                  stroke='#CACACA' 
                  strokeWidth={1} 
                  fill='#E5E4E2' 
                />
                {series_dataKey.toString().length === 2 ? (
                  // prettier-ignore
                  <text
                  x={Number(checkBandScale(xScale(handleX(axis_dataKey)))) - 7}
                  y={Number(yScale(series_dataKey)) + 4}
                  fill='#000000'
                  fontSize={11.5}
                  >
                  {series_dataKey}
                </text>
                ) : (
                  // prettier-ignore
                  <text
                  x={Number(checkBandScale(xScale(handleX(axis_dataKey)))) - 4}
                  y={Number(yScale(series_dataKey)) + 4}
                  fill='#000000'
                  fontSize={11.5}
                  >
                  {series_dataKey}
                </text>
                )}
              </>
            )}
          </Group>
        </React.Fragment>
      )
    })
  })

  return <>{circles}</>
}

export default LineChartBumpCircle
