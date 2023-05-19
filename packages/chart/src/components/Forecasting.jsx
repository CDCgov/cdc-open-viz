import React, { useContext } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area, LinePath } from '@visx/shape'
import { Group } from '@visx/group'

const Forecasting = ({ xScale, yScale, height }) => {
  const { transformedData: data, rawData, config, seriesHighlight } = useContext(ConfigContext)

  // columns
  const barColumn = config.forecastingChart.barColumn
  const xColumnName = config.xAxis.dataKey
  const { forecastingChart } = config
  // const pallete = colorPalettesChart[config.palette]

  const TESTING_COMBO = true

  return (
    data &&
    config.forecastingChart.groups && (
      <ErrorBoundary component='ForecastingChart'>
        <Group className='forecasting-items' key='forecasting-items'>
          {!TESTING_COMBO && (
            <Group className='forecasting-bars' key='forecasting-bars' left={config.yAxis.size}>
              {config.forecastingChart.showBars &&
                data.map((bar, barIndex) => {
                  let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(config.forecastingChart.barColumn) === -1
                  let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(config.forecastingChart.barColumn) !== -1

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
                      fill={ displayArea  ? forecastingChart.barColor : 'transparent'}
                      opacity={transparentArea ? 0 : 1}
                    />
                  )
                })}
            </Group>
          )}

          {!TESTING_COMBO &&
            config.forecastingChart.groups.map((group, index) => {
              let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(group) === -1
              let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(group) !== -1
              return (
                <Group className={`forecasting-areas`} left={config.yAxis.size}>
                  {forecastingChart.confidenceIntervals.map((ciGroup, ciGroupIndex) => {
                    const palette = colorPalettesChart[config.forecastingChart.colors?.[index]]

                    console.log('ci', ciGroup)

                    // slice the data
                    const groupData = data.filter(d => d[config.forecastingChart.stages] === group)

                    if (!palette) return null
                    return (
                      <>
                        {/* prettier-ignore */}
                        <Area
                          curve={curveMonotoneX}
                          data={groupData}
                          fill={displayArea ? palette[ciGroupIndex] : 'transparent'}
                          opacity={transparentArea ? 0.1 : 0.5}
                          x={d => xScale(Date.parse(d[xColumnName]))}
                          y0={d => yScale(d[ciGroup.low])}
                          y1={d => yScale(d[ciGroup.high])}
                        />

                        {/* prettier-ignore */}
                        <LinePath
                          key={`${ciGroupIndex}`}
                          data={groupData}
                          x={ d => xScale(Date.parse(d[xColumnName])) }
                          y={ d => yScale(d[ciGroup.high])}
                          curve={curveMonotoneX}
                          stroke={'red'}
                          fill={'red'}
                          strokeWidth={1}
                          strokeOpacity={1}
                        />
                      </>
                    )
                  })}
                </Group>
              )
            })}

          {config.runtime.forecastingSeriesKeys?.map((group, index) => {
            return group.stages.map((stage, stageIndex) => {
              // console.log('GROUP', group)
              const groupData = rawData.filter(d => d[group.stageColumn] === stage.key)
              let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(stage.key) === -1
              let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(stage.key) !== -1

              return (
                <Group className={`forecasting-areas-combo`} left={config.yAxis.size}>
                  {group.confidenceIntervals.map((ciGroup, ciGroupIndex) => {
                    const palette = colorPalettesChart[stage.color]

                    if (!palette) return null
                    return (
                      <>
                        {/* prettier-ignore */}
                        <Area
                          curve={curveMonotoneX}
                          data={groupData}
                          fill={displayArea ? palette[ciGroupIndex] : 'transparent'}
                          opacity={transparentArea ? 0.1 : 0.5}
                          x={d => xScale(Date.parse(d[xColumnName]))}
                          y0={d => yScale(d[ciGroup.low])}
                          y1={d => yScale(d[ciGroup.high])}
                        />

                        {ciGroupIndex === 0 && (
                          <>
                            {/* prettier-ignore */}
                            <LinePath
                            key={`${ciGroupIndex}`}
                            data={groupData}
                            x={ d => xScale(Date.parse(d[xColumnName])) }
                            y={ d => yScale(d[ciGroup.high])}
                            curve={curveMonotoneX}
                            stroke={displayArea ? palette[2] : 'transparent'}
                            strokeWidth={1}
                            strokeOpacity={1}
                          />

                            {/* prettier-ignore */}
                            <LinePath
                            key={`${ciGroupIndex}`}
                            data={groupData}
                            x={ d => xScale(Date.parse(d[xColumnName])) }
                            y={ d => yScale(d[ciGroup.low])}
                            curve={curveMonotoneX}
                            stroke={displayArea ? palette[2] : 'transparent'}
                            strokeWidth={1}
                            strokeOpacity={1}
                          />
                          </>
                        )}
                      </>
                    )
                  })}
                </Group>
              )
            })
          })}
        </Group>
      </ErrorBoundary>
    )
  )
}

export default Forecasting
