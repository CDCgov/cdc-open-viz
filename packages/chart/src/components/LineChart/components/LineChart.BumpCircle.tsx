import { Group } from '@visx/group'
import React from 'react'
import { type ChartConfig } from '../../../types/ChartConfig'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'

type LineChartBumpCircleProp = {
  config: ChartConfig
  xScale: any
  yScale: any
}

const LineChartBumpCircle = (props: LineChartBumpCircleProp) => {
  const { config, xScale, yScale } = props

  // get xScale and yScale...
  if (!config?.runtime?.series) return

  const handleX = xValue => {
    if (config.xAxis.type === 'date' || config.xAxis.type === 'date-time') {
      return new Date(xValue)
    }
    if (config.xAxis.type === 'categorical') {
      return xValue
    }
  }

  const checkBandScale = xValue => {
    return xScale.bandwidth ? xScale.bandwidth() / 2 + Number(xValue) : Number(xValue)
  }

  const getTooltip = (dataRow, series) => {
    const xAxisLabel = config.xAxis.label || config.xAxis.dataKey
    const xValue = dataRow[config.xAxis.dataKey]
    const seriesLabel = series.label || series.dataKey
    const rank = dataRow[series.dataKey]

    const columnItems = Object.values(config.columns)
      ?.filter(column => column.tooltips)
      .map(column => {
        const label = column.label || column.name
        return `<li class='tooltip-body'><strong>${label}</strong>: ${dataRow[column.name]}</li>`
      })
      .join('')

    return `<ul>
      <li class='tooltip-body'><strong>${xAxisLabel}</strong>: ${xValue}</li>
      <li class='tooltip-body'><strong>${seriesLabel}</strong>: ${rank}</li>
      ${columnItems}
    </ul>`
  }

  const circles = config.runtime?.series.map(series => {
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
                  data-tooltip-html={getTooltip(d, series)}
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
                  fill={APP_FONT_COLOR}
                  fontSize={11.5}
                  >
                  {series_dataKey}
                </text>
                ) : (
                  // prettier-ignore
                  <text
                  x={Number(checkBandScale(xScale(handleX(axis_dataKey)))) - 4}
                  y={Number(yScale(series_dataKey)) + 4}
                  fill={APP_FONT_COLOR}
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
