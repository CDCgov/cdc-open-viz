import React, { useContext, useEffect, useState } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import * as allCurves from '@visx/curve'
import { AreaClosed, LinePath, Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { useTooltip, useTooltipInPortal, defaultStyles, Tooltip } from '@visx/tooltip'
import { localPoint } from '@visx/event'
import { bisector } from 'd3-array'

const CoveAreaChart = ({ xScale, yScale, yMax, xMax, chartRef }) => {
  // enable various console logs in the file
  const DEBUG = false
  const [chartPosition, setChartPosition] = useState(null)

  useEffect(() => {
    setChartPosition(chartRef.current.getBoundingClientRect())
  }, [chartRef])

  // import data from context
  const { transformedData: data, config, handleLineType, parseDate, formatDate, formatNumber, seriesHighlight, colorScale } = useContext(ConfigContext)
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`

  // import tooltip helpers
  const { tooltipData, showTooltip } = useTooltip()

  // here we're inside of the svg,
  // it appears we need to use TooltipInPortal.
  const { TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true
  })

  // Draw transparent bars over the chart to get tooltip data
  // Turn DEBUG on for additional context.
  if (!data) return
  let barThickness = xMax / data.length
  let barThicknessAdjusted = barThickness * (config.barThickness || 0.8)
  let offset = (barThickness * (1 - (config.barThickness || 0.8))) / 2

  // Tooltip helper for getting data to the closest date/category hovered.
  const getXValueFromCoordinate = x => {
    if (config.xAxis.type === 'categorical' || config.visualizationType === 'Combo') {
      let eachBand = xScale.step()
      let numerator = x
      const index = Math.floor(Number(numerator) / eachBand)
      return xScale.domain()[index - 1] // fixes off by 1 error
    }

    if (config.xAxis.type === 'date' && config.visualizationType !== 'Combo') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(x)
      const index = bisectDate(config.data, x0, 1)
      const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
      return val
    }
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

  const TooltipListItem = ({ item }) => {
    const [label, value] = item
    return label === config.xAxis.dataKey ? `${label}: ${value}` : `${label}: ${formatNumber(value, 'left')}`
  }

  const handleX = d => {
    return config.xAxis.type === 'date' ? xScale(parseDate(d[config.xAxis.dataKey])) : xScale(d[config.xAxis.dataKey])
  }

  const handleY = (d, index, s = undefined) => {
    return yScale(d[s.dataKey])
  }

  return (
    data && (
      <ErrorBoundary component='AreaChart'>
        <Group className='area-chart' key='area-wrapper' left={Number(config.yAxis.size)}>
          {(config.runtime.areaSeriesKeys || config.runtime.seriesKeys).map((s, index) => {
            let seriesData = data.map(d => {
              return {
                [config.xAxis.dataKey]: d[config.xAxis.dataKey],
                [s.dataKey]: d[s.dataKey]
              }
            })

            let curveType = allCurves[s.lineType]
            let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(s.dataKey) === -1
            let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(s.dataKey) !== -1

            if (config.xAxis.type === 'date') {
              data.map(d => xScale(parseDate(d[config.xAxis.dataKey])))
            } else {
              data.map(d => xScale(d[config.xAxis.dataKey]))
            }
            return (
              <React.Fragment key={index}>
                {/* prettier-ignore */}
                <LinePath
                  data={seriesData}
                  x={d => handleX(d)}
                  y={d => handleY(d, index, s)}
                  stroke={displayArea ?  colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000' : 'transparent'}
                  strokeWidth={2}
                  strokeOpacity={1}
                  shapeRendering='geometricPrecision'
                  curve={curveType}
                  strokeDasharray={s.type ? handleLineType(s.type) : 0}
                />

                {/* prettier-ignore */}
                <AreaClosed
                  key={'area-chart'}
                  fill={ displayArea ? colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000' : 'transparent'}
                  fillOpacity={transparentArea ? 0.25 : 0.5}
                  data={seriesData}
                  x={d => handleX(d)}
                  y={d => handleY(d, index, s)}
                  yScale={yScale}
                  curve={curveType}
                  strokeDasharray={s.type ? handleLineType(s.type) : 0}
                  />

                {/* Transparent bar for tooltips */}
                {/* prettier-ignore */}
                <Bar
                  width={ Number(xMax)}
                  height={ Number(yMax)}
                  fill={DEBUG ? 'red' : 'transparent'}
                  fillOpacity={0.05}
                  style={DEBUG ? { stroke: 'black', strokeWidth: 2 } : {}}
                  onMouseMove={e => handleMouseOver(e, data)}
                  />

                {/* circles that appear on hover */}
                {tooltipData && Object.entries(tooltipData.data).length > 0 && (
                  <circle
                    cx={config.xAxis.type === 'categorical' ? xScale(tooltipData.data[config.xAxis.dataKey]) : xScale(parseDate(tooltipData.data[config.xAxis.dataKey]))}
                    cy={yScale(tooltipData.data[s.dataKey])}
                    r={4.5}
                    opacity={1}
                    fillOpacity={1}
                    fill={displayArea ? (colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000') : 'transparent'}
                    style={{ filter: 'unset', opacity: 1 }}
                  />
                )}

                {tooltipData && Object.entries(tooltipData.data).length > 0 && (
                  <TooltipInPortal key={Math.random()} top={tooltipData.dataYPosition + chartPosition?.top} left={tooltipData.dataXPosition + chartPosition?.left} style={defaultStyles}>
                    <ul style={{ listStyle: 'none', paddingLeft: 'unset', fontFamily: 'sans-serif', margin: 'auto', lineHeight: '1rem' }} data-tooltip-id={tooltip_id}>
                      {typeof tooltipData === 'object' &&
                        Object.entries(tooltipData.data).map(item => (
                          <li style={{ padding: '2.5px 0' }}>
                            <TooltipListItem item={item} />
                          </li>
                        ))}
                    </ul>
                  </TooltipInPortal>
                )}
              </React.Fragment>
            )
          })}
        </Group>
      </ErrorBoundary>
    )
  )
}

export default CoveAreaChart
