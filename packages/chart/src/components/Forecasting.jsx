import React, { useContext, useEffect, useState } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area, LinePath, Line } from '@visx/shape'
import { Group } from '@visx/group'

const Forecasting = ({ xScale, yScale, height, width, chartRef, handleTooltipMouseOver, tooltipData, showTooltip, handleTooltipMouseOff }) => {
  const { transformedData: data, rawData, config, seriesHighlight, formatNumber } = useContext(ConfigContext)
  const { xAxis, yAxis, legend, runtime } = config
  const DEBUG = false

  // sets the portal x/y for where tooltips should appear on the page.
  const [chartPosition, setChartPosition] = useState(null)
  useEffect(() => {
    setChartPosition(chartRef.current.getBoundingClientRect())
  }, [chartRef])

  // a unique id is needed for tooltips.
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`

  // it appears we need to use TooltipInPortal.
  const { TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true
  })

  const TooltipListItem = ({ item }) => {
    const [label, value] = item
    return label === config.xAxis.dataKey ? `${label}: ${value}` : `${label}: ${formatNumber(value, 'left')}`
  }

  return (
    data && (
      <ErrorBoundary component='ForecastingChart'>
        <Group className='forecasting-items' key='forecasting-items-wrapper' left={yAxis.size}>
          {runtime.forecastingSeriesKeys?.map((group, index) => {
            if (!group || !group.stages) return
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

          {tooltipData && Object.entries(tooltipData.data).length > 0 && (
            <TooltipInPortal key={Math.random()} top={tooltipData.dataYPosition + chartPosition?.top} left={tooltipData.dataXPosition + chartPosition?.left} style={defaultStyles}>
              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 'unset',
                  fontFamily: 'sans-serif',
                  margin: 'auto',
                  lineHeight: '1rem'
                }}
                data-tooltip-id={tooltip_id}
              >
                {typeof tooltipData === 'object' &&
                  Object.entries(tooltipData.data).map((item, index) => (
                    <li style={{ padding: '2.5px 0' }} key={`li-${index}`}>
                      <TooltipListItem item={item} />
                    </li>
                  ))}
              </ul>
            </TooltipInPortal>
          )}
          <Group key='tooltip-hover-section'>
            <Bar key={'bars'} width={Number(width)} height={Number(height)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleTooltipMouseOver(e, data)} onMouseOut={handleTooltipMouseOff} />
          </Group>
        </Group>

        {showTooltip && tooltipData && config.visual.verticalHoverLine && (
          <Group key='tooltipLine-vertical' className='vertical-tooltip-line'>
            <Line from={{ x: tooltipData.dataXPosition - 10, y: 0 }} to={{ x: tooltipData.dataXPosition - 10, y: height }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='vertical-tooltip-line' />
          </Group>
        )}

        {showTooltip && tooltipData && config.visual.horizontalHoverLine && (
          <Group key='tooltipLine-horizontal' className='horizontal-tooltip-line' left={config.yAxis.size ? config.yAxis.size : 0}>
            <Line from={{ x: 0, y: tooltipData.dataYPosition }} to={{ x: width, y: tooltipData.dataYPosition }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' className='horizontal-tooltip-line' />
          </Group>
        )}
      </ErrorBoundary>
    )
  )
}

export default Forecasting
