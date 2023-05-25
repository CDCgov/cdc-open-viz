import React, { useContext, useEffect, useState } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area, LinePath } from '@visx/shape'
import { Group } from '@visx/group'
import { localPoint } from '@visx/event'
import { bisector } from 'd3-array'
import * as d3 from 'd3'

const Forecasting = ({ xScale, yScale, height, width, chartRef }) => {
  const { transformedData: data, rawData, config, seriesHighlight, parseDate, formatDate, formatNumber } = useContext(ConfigContext)

  // sets the portal x/y for where tooltips should appear on the page.
  const [chartPosition, setChartPosition] = useState(null)
  useEffect(() => {
    setChartPosition(chartRef.current.getBoundingClientRect())
  }, [chartRef])

  // a unique id is needed for tooltips.
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`

  // import tooltip helpers
  const { tooltipData, showTooltip } = useTooltip()

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

  // columns
  const barColumn = config.forecastingChart.barColumn
  const xColumnName = config.xAxis.dataKey
  const DEBUG = true
  let barThickness = width / data.length

  // Tooltip helper for getting data to the closest date/category hovered.
  const getXValueFromCoordinate = x => {
    xScale.padding = 0.4
    let eachBand = xScale.step()
    let numerator = x
    const index = Math.floor(Number(numerator) / eachBand)
    return xScale.domain()[index - 1] // fixes off by 1 error
    // const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
    // const x0 = xScale.invert(x)
    // const index = bisectDate(config.data, x0, 1)
    // const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
    // return val

    // let xPos = x
    // var domain = xScale.domain()
    // var range = xScale.range()
    // var rangePoints = d3.range(range[0], range[1], xScale.step())
    // var yPos = domain[d3.bisect(rangePoints, xPos) - 1]
    // const val = parseDate(yPos)

    // console.log(val)
  }

  const handleMouseOver = (e, data) => {
    // get the svg coordinates of the mouse
    // and get the closest values
    const eventSvgCoords = localPoint(e)
    const { x, y } = eventSvgCoords

    let closestXScaleValue = getXValueFromCoordinate(x)
    let formattedDate = formatDate(closestXScaleValue)

    let yScaleValues
    if (config.xAxis.type === 'categorical') {
      yScaleValues = data.filter(d => d[config.xAxis.dataKey] === closestXScaleValue)
    } else {
      yScaleValues = data.filter(d => formatDate(parseDate(d[config.xAxis.dataKey])) === formattedDate)
    }

    let seriesToInclude = []
    let yScaleMaxValues = []
    let itemsToLoop = [config.runtime.xAxis.dataKey, ...config.runtime.seriesKeys]

    itemsToLoop.map(seriesKey => {
      if (!seriesKey) return
      if (!yScaleValues[0]) return
      for (const item of Object.entries(yScaleValues[0])) {
        if (item[0] === seriesKey) {
          seriesToInclude.push(item)
        }
      }
    })

    // filter out the series that aren't added to the map.
    seriesToInclude.map(series => yScaleMaxValues.push(Number(yScaleValues[0][series])))
    if (!seriesToInclude) return
    let tooltipDataFromSeries = Object.fromEntries(seriesToInclude) ? Object.fromEntries(seriesToInclude) : {}

    let tooltipData = {}
    tooltipData.data = tooltipDataFromSeries
    tooltipData.dataXPosition = x + 20
    tooltipData.dataYPosition = y - 100

    let tooltipInformation = {
      tooltipData: tooltipData,
      tooltipTop: 0,
      tooltipValues: yScaleValues,
      tooltipLeft: x
    }

    showTooltip(tooltipInformation)
  }

  return (
    data &&
    config.forecastingChart.groups && (
      <ErrorBoundary component='ForecastingChart'>
        <Group className='forecasting-items' key='forecasting-items' left={config.xAxis.size}>
          {config.runtime.forecastingSeriesKeys?.map((group, index) => {
            return group.stages.map((stage, stageIndex) => {
              // console.log('GROUP', group)
              const groupData = rawData.filter(d => d[group.stageColumn] === stage.key)
              let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(stage.key) === -1
              let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(stage.key) !== -1

              return (
                <Group className={`forecasting-areas-combo`} key={`forecasting-areas-combo`}>
                  {group.confidenceIntervals.map((ciGroup, ciGroupIndex) => {
                    const palette = colorPalettesChart[stage.color]

                    if (!palette) return null
                    return (
                      <React.Fragment key={`${ciGroupIndex}--${ciGroup}`}>
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
                          <React.Fragment key={`${ciGroupIndex}--${ciGroup}`}>
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
                          </React.Fragment>
                        )}
                      </React.Fragment>
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
          <Group key='bars'>
            <Bar key={'bars'} width={Number(width)} height={Number(height)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleMouseOver(e, data)} />
          </Group>
        </Group>
      </ErrorBoundary>
    )
  )
}

export default Forecasting
