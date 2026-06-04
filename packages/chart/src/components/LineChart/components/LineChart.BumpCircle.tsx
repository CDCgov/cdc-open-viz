import { useContext } from 'react'
import { Group } from '@visx/group'
import React from 'react'
import { type ChartConfig } from '../../../types/ChartConfig'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import ConfigContext from '../../../ConfigContext'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import { buildBumpChartTooltipHtml } from '../../../helpers/bumpChartTooltip'

type LineChartBumpCircleProp = {
  config: ChartConfig
  xScale: any
  yScale: any
  parseDate: any
  yAxisWidth: number
}

const LineChartBumpCircle = (props: LineChartBumpCircleProp) => {
  const { config, xScale, yScale, parseDate, yAxisWidth } = props
  const { colorScale, formatDate, formatTooltipsDate } = useContext(ConfigContext)

  // get xScale and yScale...
  if (!config?.runtime?.series) return

  const handleX = xValue => {
    if (isDateScale(config.xAxis)) {
      return parseDate(xValue).getTime()
    }
    if (config.xAxis.type === 'categorical') {
      return xValue
    }
  }

  const checkBandScale = xValue => {
    return xScale.bandwidth ? xScale.bandwidth() / 2 + Number(xValue) : Number(xValue)
  }

  const tooltipId = `cdc-open-viz-tooltip-${config.runtime.uniqueId}-bump`

  const circles = config.runtime?.series.map(series => {
    return config.data.map((d, dataIndex) => {
      let series_dataKey = d[series.dataKey]
      let axis_dataKey = d[config.xAxis.dataKey]
      return (
        <React.Fragment key={`bump-circle-${series_dataKey}-${dataIndex}`}>
          <Group left={yAxisWidth}>
            {series_dataKey && (
              <>
                <circle
                  key={`bump-circle-${series_dataKey}-${dataIndex}`}
                  data-tooltip-html={buildBumpChartTooltipHtml({
                    config,
                    colorScale,
                    dataRow: d,
                    series,
                    helpers: {
                      formatDate,
                      formatTooltipsDate,
                      parseDate
                    }
                  })}
                  data-tooltip-id={tooltipId}
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
