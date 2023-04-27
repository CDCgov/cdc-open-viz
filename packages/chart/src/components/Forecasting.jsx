import React, { useContext } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area } from '@visx/shape'
import { Group } from '@visx/group'

const Forecasting = ({ xScale, yScale, yMax, xMax, chartRef, width, height, xScaleNoPadding }) => {
  const { transformedData: data, rawData, config, updateConfig } = useContext(ConfigContext)

  // columns
  const barColumn = config.forecastingChart.barColumn
  const xColumnName = config.xAxis.dataKey
  const { forecastingChart } = config
  const pallete = colorPalettesChart[config.palette]
  return (
    data &&
    config.forecastingChart.groups && (
      <ErrorBoundary component='ForecastingChart'>
        <Group className='forecasting-items' key='forecasting-items'>
          <Group className='forecasting-bars' key='forecasting-bars' left={config.yAxis.size}>
            {config.forecastingChart.showBars &&
              data.map((bar, barIndex) => {
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

          {config.forecastingChart.groups.map((group, index) => {
            return (
              <Group className={`forecasting-areas`} left={config.yAxis.size}>
                {forecastingChart.confidenceIntervals.map((ciGroup, ciGroupIndex) => {
                  const palette = colorPalettesChart[config.forecastingChart.colors?.[index]]

                  // slice the data
                  const groupData = rawData.filter(d => d[config.forecastingChart.stages] === group)

                  if (!palette) return null
                  return (
                    <>
                      {/* prettier-ignore */}
                      <Area
                        curve={curveMonotoneX}
                        data={groupData}
                        fill={palette[ciGroupIndex]}
                        fillOpacity={0.5}
                        x={d => xScale(Date.parse(d[xColumnName]))}
                        xScale={xScale}
                        y0={d => yScale(d[ciGroup.low])}
                        y1={d => yScale(d[ciGroup.high])}
                      />
                    </>
                  )
                })}
              </Group>
            )
          })}
        </Group>
      </ErrorBoundary>
    )
  )
}

export default Forecasting
