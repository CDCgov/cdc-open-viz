import React, { useContext, useCallback } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx & d3
import { AreaClosed, LinePath, Bar } from '@visx/shape'
import { Group } from '@visx/group'
import * as allCurves from '@visx/curve'
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { localPoint } from '@visx/event'
import { bisector } from 'd3-array'

const CoveAreaChart = ({ xScale, yScale, yMax, xMax }) => {
  // enable various console logs in the file
  const DEBUG = false

  // import data from context
  const { transformedData: data, config, handleLineType, parseDate, formatDate, formatNumber, seriesHighlight } = useContext(ConfigContext)

  // import tooltip helpers
  const { tooltipData, showTooltip } = useTooltip()

  // used for offset on tooltip hover
  let isEditor = window.location.href.includes('editor=true')

  // here we're inside of the svg,
  // it appears we need to use TooltipInPortal.
  const { TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true
  })

  // Draw transparent bars over the chart to get tooltip data
  // Turn DEBUG on for additional context.
  let barThickness = xMax / config.data.length
  let barThicknessAdjusted = barThickness * (config.barThickness || 0.8)
  let offset = (barThickness * (1 - (config.barThickness || 0.8))) / 2

  // Tooltip helper for getting data to the closest date/category hovered.
  const getXValueFromCoordinate = x => {
    if (config.xAxis.type === 'categorical') {
      let eachBand = xScale.step()
      let numerator = x
      const index = Math.floor(Number(numerator) / eachBand)
      return xScale.domain()[index - 1] // fixes off by 1 error
    }

    if (config.xAxis.type === 'date') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(x)
      const index = bisectDate(config.data, x0, 1)
      const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
      return val
    }
  }

  const handleMouseOver = useCallback(
    (e, data) => {
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
        yScaleValues = data.filter(d => d[config.xAxis.dataKey] === formattedDate)
      }

      let seriesToInclude = []
      let yScaleMaxValues = []
      let itemsToLoop = [config.runtime.xAxis.dataKey, ...config.runtime.seriesKeys]

      itemsToLoop.map(seriesKey => {
        return Object.entries(yScaleValues[0]).forEach(item => item[0] === seriesKey && seriesToInclude.push(item))
      })

      // filter out the series that aren't added to the map.
      seriesToInclude.map(series => yScaleMaxValues.push(Number(yScaleValues[0][series])))
      seriesToInclude = Object.fromEntries(seriesToInclude)

      let tooltipData = {}
      tooltipData.data = seriesToInclude
      tooltipData.dataXPosition = isEditor ? 300 + x + 20 : x + 20
      tooltipData.dataYPosition = y - 20

      let tooltipInformation = {
        tooltipData: tooltipData,
        tooltipTop: 0,
        tooltipValues: yScaleValues,
        tooltipLeft: x
      }

      showTooltip(tooltipInformation)
    },
    [showTooltip] // eslint-disable-line
  )

  const TooltipListItem = ({ item }) => {
    const [label, value] = item
    return label === config.xAxis.dataKey ? `${label}: ${value}` : `${label}: ${formatNumber(value, 'left')}`
  }

  const handleX = d => {
    return config.xAxis.type === 'date' ? xScale(parseDate(d[config.xAxis.dataKey])) : xScale(d[config.xAxis.dataKey])
  }

  const handleY = (d, index) => {
    return yScale(d[config.series[index].dataKey])
  }

  return (
    data && (
      <ErrorBoundary component='AreaChart'>
        <Group className='area-chart' key='area-wrapper' left={config.yAxis.size}>
          {config.series.map((s, index) => {
            let seriesColor = colorPalettesChart[config.palette][index]
            let curveType = allCurves[s.lineType]
            let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(s.dataKey) === -1
            let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(s.dataKey) !== -1

            data.map(d => xScale(parseDate(d[config.xAxis.dataKey])))

            return (
              <>
                {/* prettier-ignore */}
                {/* this is the line that appears on top of the area chart */}
                <LinePath data={data} x={d => handleX(d)} y={d => yScale(d[config.series[index].dataKey])} stroke={seriesColor} strokeWidth={2} strokeOpacity={1} shapeRendering='geometricPrecision' curve={curveType} strokeDasharray={s.type ? handleLineType(s.type) : 0} />

                {/* prettier-ignore */}
                {/* filled in sections */}
                <AreaClosed key={'area-chart'} fill={displayArea ? seriesColor : 'transparent'} fillOpacity={transparentArea ? 0.25 : 0.5} data={data} x={d => handleX(d)} y={d => handleY(d, index)} yScale={yScale} curve={curveType} strokeDasharray={s.type ? handleLineType(s.typ) : 0} />

                <Bar x={d => handleX(d)} y={d => yScale(d[config.series[index].dataKey])} yScale={yScale} width={xMax} height={yMax} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} style={DEBUG ? { stroke: 'black', strokeWidth: 2 } : {}} onMouseMove={e => handleMouseOver(e, data)} />

                {/* circles that appear on hover */}
                {tooltipData && (
                  <circle
                    cx={config.xAxis.type === 'categorical' ? xScale(tooltipData.data[config.xAxis.dataKey]) : xScale(parseDate(tooltipData.data[config.xAxis.dataKey]))}
                    cy={yScale(tooltipData.data[s.dataKey])}
                    r={4.5}
                    opacity={1}
                    fillOpacity={1}
                    fill={seriesColor}
                    style={{ filter: 'unset', opacity: 1 }}
                  />
                )}

                {/* bars to handle tooltips */}
                {DEBUG &&
                  config.data.map((item, index) => {
                    return (
                      <Bar
                        className='bar-here'
                        x={barThickness * index + offset}
                        y={d => yScale(d[config.series[index].dataKey])}
                        yScale={yScale}
                        width={barThicknessAdjusted}
                        height={yMax}
                        fill={'transparent'}
                        fillOpacity={1}
                        style={{ stroke: 'black', strokeWidth: 2 }}
                        onMouseMove={e => handleMouseOver(e, data)}
                      />
                    )
                  })}

                {tooltipData && (
                  <TooltipInPortal key={Math.random()} top={tooltipData.dataYPosition} left={tooltipData.dataXPosition} style={defaultStyles}>
                    <Group x={config.yAxis.size + 10} y={0}>
                      <ul style={{ listStyle: 'none', paddingLeft: 'unset' }}>
                        {Object.entries(tooltipData.data).map(item => (
                          <li>
                            <TooltipListItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </Group>
                  </TooltipInPortal>
                )}
              </>
            )
          })}
        </Group>
      </ErrorBoundary>
    )
  )
}

export default CoveAreaChart
