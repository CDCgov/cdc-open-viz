import React, { useContext, useEffect, useState } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area, LinePath, Line } from '@visx/shape'
import { Group } from '@visx/group'
import { localPoint } from '@visx/event'

const Forecasting = ({ xScale, yScale, height, width, chartRef }) => {
  const { transformedData: data, rawData, config, seriesHighlight, parseDate, formatDate, formatNumber } = useContext(ConfigContext)
  const { xAxis, yAxis, legend, runtime } = config
  const DEBUG = false

  // sets the portal x/y for where tooltips should appear on the page.
  const [chartPosition, setChartPosition] = useState(null)
  useEffect(() => {
    setChartPosition(chartRef.current.getBoundingClientRect())
  }, [chartRef])

  // a unique id is needed for tooltips.
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`

  // import tooltip helpers
  const { tooltipData, showTooltip, hideTooltip } = useTooltip()

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

  // Tooltip helper for getting data to the closest date/category hovered.
  const getXValueFromCoordinate = x => {
    if (xScale.type === 'point') {
      // Find the closest x value by calculating the minimum distance
      let closestX = null
      let minDistance = Number.MAX_VALUE
      let offset = x - yAxis.size

      data.forEach(d => {
        const xPosition = xAxis.type === 'date' ? xScale(parseDate(d[xAxis.dataKey])) : xScale(d[xAxis.dataKey])
        const distance = Math.abs(Number(xPosition - offset))

        if (distance < minDistance) {
          minDistance = distance
          closestX = xAxis.type === 'date' ? parseDate(d[xAxis.dataKey]) : d[xAxis.dataKey]
        }
      })
      return closestX
    }
  }

  const handleMouseOff = () => {
    hideTooltip()
  }

  const handleMouseOver = (e, data) => {
    // get the svg coordinates of the mouse
    // and get the closest values
    const eventSvgCoords = localPoint(e)
    const { x, y } = eventSvgCoords

    let closestXScaleValue = getXValueFromCoordinate(x)
    let formattedDate = formatDate(closestXScaleValue)

    let yScaleValues
    if (xAxis.type === 'categorical') {
      yScaleValues = data.filter(d => d[xAxis.dataKey] === closestXScaleValue)
    } else {
      yScaleValues = rawData.filter(d => formatDate(parseDate(d[xAxis.dataKey])) === formattedDate)
    }

    let seriesToInclude = []
    let stageColumns = []
    let ciItems = []

    // loop through series for items to add to tooltip.
    // there is probably a better way of doing this.
    config.series?.map(s => {
      if (s.type === 'Forecasting') {
        stageColumns.push(s.stageColumn)

        // greedy fn 😭
        s?.confidenceIntervals.map(ci => {
          if (ci.showInTooltip === true) {
            ciItems.push(ci.low)
            ciItems.push(ci.high)
          }
        })
      }
    })

    let standardLoopItems = []

    if (config.visualizationType === 'Combo') {
      standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.barSeriesKeys, ...stageColumns, ...ciItems]
    } else {
      standardLoopItems = [runtime.xAxis.dataKey, ...stageColumns, ...ciItems]
    }

    standardLoopItems.map(seriesKey => {
      if (!seriesKey) return false
      if (!yScaleValues[0]) return false
      for (const item of Object.entries(yScaleValues[0])) {
        if (item[0] === seriesKey) {
          seriesToInclude.push(item)
        }
      }
    })

    // filter out the series that aren't added to the map.
    if (!seriesToInclude) return
    let initialTooltipData = Object.fromEntries(seriesToInclude) ? Object.fromEntries(seriesToInclude) : {}

    let tooltipData = {}
    tooltipData.data = initialTooltipData
    tooltipData.dataXPosition = x + 10
    tooltipData.dataYPosition = y

    let tooltipInformation = {
      tooltipData: tooltipData,
      tooltipTop: 0,
      tooltipValues: yScaleValues,
      tooltipLeft: x
    }

    showTooltip(tooltipInformation)
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

                    console.log('group', ciGroup)

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
                  Object.entries(tooltipData.data).map(item => (
                    <li style={{ padding: '2.5px 0' }}>
                      <TooltipListItem item={item} />
                    </li>
                  ))}
              </ul>
            </TooltipInPortal>
          )}
          <Group key='tooltip-hover-section'>
            <Bar key={'bars'} width={Number(width)} height={Number(height)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleMouseOver(e, data)} onMouseOut={handleMouseOff} />
          </Group>
        </Group>

        {showTooltip && tooltipData && (
          <Group key='tooltipLine' className='tooltip-line'>
            <Line from={{ x: tooltipData.dataXPosition - 10, y: 0 }} to={{ x: tooltipData.dataXPosition - 10, y: height }} stroke={'black'} strokeWidth={1} pointerEvents='none' strokeDasharray='5,5' />
          </Group>
        )}
      </ErrorBoundary>
    )
  )
}

export default Forecasting
