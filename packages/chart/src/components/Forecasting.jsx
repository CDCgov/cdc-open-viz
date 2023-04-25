import React, { useContext, useEffect, useState } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { curveNatural } from '@visx/curve'
import { AreaClosed, LinePath, Bar, Area } from '@visx/shape'
import { Group } from '@visx/group'

const Forecasting = ({ xScale, yScale, yMax, xMax, chartRef, width, height, xScaleNoPadding }) => {
  const [groups, setGroups] = useState([])
  const { transformedData: data, rawData, config } = useContext(ConfigContext)

  // Set the stage grups based on the column in the editor panel.
  useEffect(() => {
    let tempGroups = new Set(rawData.map(item => item[config.forecastingChart.stages])) // [estimate, forecast, etc.]
    tempGroups = Array.from(tempGroups) // convert set to array
    tempGroups = tempGroups.filter(group => group !== undefined) // removes undefined
    setGroups(tempGroups)
  }, [config.forecastingChart])

  // columns
  const barColumn = config.forecastingChart.barColumn
  const xColumnName = config.xAxis.dataKey
  const { forecastingChart } = config
  const pallete = colorPalettesChart[config.palette]
  return (
    data && (
      <ErrorBoundary component='ForecastingChart'>
        <Group className='forecasting-items' key='forecasting-items'>
          <Group className='forecasting-bars' key='forecasting-bars' left={config.yAxis.size}>
            {data.map((bar, barIndex) => {
              return (
                // prettier-ignore

                <Bar
                key={`bar-${barIndex}`}
                data-date={`${bar[xColumnName]}`}
                data-value={`${bar[barColumn]}`}
                className={`forecasting-bar`}
                x={xScale(Date.parse(bar[xColumnName]))}
                y={yScale(bar[barColumn]) - 1}
                width={xScale.bandwidth()}
                height={height - yScale(bar[barColumn])}
                fill={forecastingChart.barColor !== '' ? forecastingChart.barColor : '#918e90'}
              />
              )
            })}
          </Group>

          {groups.map((group, index) => {
            return (
              <Group className='forecasting-areas' left={config.yAxis.size}>
                {/* prettier-ignore */}
                {/* prettier-ignore */}
                <Area
                  data={data}
                  x={d => xScale(Date.parse(d[xColumnName]))}
                  y0={d => yScale(d['lower_90'])}
                  y1={d => yScale(d['upper_90'])}
                  xScale={xScale}
                  fill={pallete[index+1]}
                  fillOpacity={0.35}
                  curve={curveNatural}
                />
                {/* prettier-ignore */}
                <Area
                  data={data}
                  x={d => xScale(Date.parse(d[xColumnName]))}
                  y0={d => yScale(d['lower_20'])}
                  y1={d => yScale(d['upper_20'])}
                  fill={pallete[index+2]}
                  fillOpacity={0.35}
                  curve={curveNatural}
                  xScale={xScale}

                />
                {/* prettier-ignore */}
                <Area
                  data={data}
                  x={d => xScale(Date.parse(d[xColumnName]))}
                  y0={d => yScale(d['lower_50'])}
                  y1={d => yScale(d['upper_50'])}
                  yscale={yScale}
                  fill={pallete[index]}
                  fillOpacity={0.35}
                  curve={curveNatural}
                  xScale={xScale}
                />

                {/* Outer Border Top */}
                <LinePath
                  curve={curveNatural}
                  data={data}
                  x={function (d) {
                    return xScale(Date.parse(d[xColumnName]))
                  }}
                  y={function (d) {
                    return yScale(d['upper_90'])
                  }}
                  stroke={pallete[index]}
                  strokeWidth={1}
                  strokeOpacity={1}
                />

                {/* Outer Border Bottom */}
                <LinePath
                  curve={curveNatural}
                  data={data}
                  x={function (d) {
                    return xScale(Date.parse(d[xColumnName]))
                  }}
                  y={function (d) {
                    return yScale(d['lower_90'])
                  }}
                  stroke={pallete[index]}
                  strokeWidth={1}
                  strokeOpacity={1}
                />
              </Group>
            )
          })}
        </Group>
      </ErrorBoundary>
    )
  )
}

export default Forecasting
