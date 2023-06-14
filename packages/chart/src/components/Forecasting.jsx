import React, { useContext } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area, LinePath } from '@visx/shape'
import { Group } from '@visx/group'

const Forecasting = ({ xScale, yScale, height, width, handleTooltipMouseOver, handleTooltipMouseOff }) => {
  const { transformedData: data, rawData, config, seriesHighlight } = useContext(ConfigContext)
  const { xAxis, yAxis, legend, runtime } = config
  const DEBUG = false

  return (
    data && (
      <ErrorBoundary component='ForecastingChart'>
        <Group className='forecasting-items' key='forecasting-items-wrapper' left={yAxis.size}>
          {runtime.forecastingSeriesKeys?.map((group, index) => {
            if (!group || !group.stages) return false
            return group.stages.map((stage, stageIndex) => {
              const { behavior } = legend
              const groupData = rawData.filter(d => d[group.stageColumn] === stage.key)
              let transparentArea = behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(stage.key) === -1
              let displayArea = behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(stage.key) !== -1

              return (
                <Group className={`forecasting-areas-combo-${index}`} key={`forecasting-areas--stage-${stage.key.replaceAll(' ', '-')}-${index}`}>
                  {group.confidenceIntervals?.map((ciGroup, ciGroupIndex) => {
                    const palette = colorPalettesChart[stage.color]

                    return (
                      <Group key={`forecasting-areas--stage-${stage.key.replaceAll(' ', '-')}--group-${stageIndex}-${ciGroupIndex}`}>
                        {/* prettier-ignore */}
                        <Area
                          curve={curveMonotoneX}
                          data={groupData}
                          fill={displayArea ? palette[ciGroupIndex] : 'transparent'}
                          opacity={transparentArea ? 0.1 : 0.5}
                          x={d => xScale(Date.parse(d[xAxis.dataKey]))}
                          y0={d => yScale(d[ciGroup.low])}
                          y1={d => yScale(d[ciGroup.high])}
                        />

                        {ciGroupIndex === 0 && (
                          <>
                            {/* prettier-ignore */}
                            <LinePath
                              data={groupData}
                              x={ d => xScale(Date.parse(d[xAxis.dataKey])) }
                              y={ d => yScale(d[ciGroup.high])}
                              curve={curveMonotoneX}
                              stroke={displayArea ? palette[2] : 'transparent'}
                              strokeWidth={1}
                              strokeOpacity={1}
                            />

                            {/* prettier-ignore */}
                            <LinePath
                              data={groupData}
                              x={ d => xScale(Date.parse(d[xAxis.dataKey])) }
                              y={ d => yScale(d[ciGroup.low])}
                              curve={curveMonotoneX}
                              stroke={displayArea ? palette[2] : 'transparent'}
                              strokeWidth={1}
                              strokeOpacity={1}
                            />
                          </>
                        )}
                      </Group>
                    )
                  })}
                </Group>
              )
            })
          })}
          <Group key='tooltip-hover-section'>
            <Bar key={'bars'} width={Number(width)} height={Number(height)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleTooltipMouseOver(e, data)} onMouseOut={handleTooltipMouseOff} />
          </Group>
        </Group>
      </ErrorBoundary>
    )
  )
}

export default Forecasting
