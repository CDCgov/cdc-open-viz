import React, { useContext, memo } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

// visx & d3
import * as allCurves from '@visx/curve'
import { AreaClosed, LinePath, Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { bisector } from 'd3-array'

const AreaChart = ({ xScale, yScale, yMax, xMax, getXAxisData, getYAxisData, chartRef, handleTooltipMouseOver, handleTooltipMouseOff, tooltipData, isDebug, isBrush, brushData, children }) => {
  // enable various console logs in the file
  const DEBUG = isDebug

  // import data from context
  let { transformedData: data, config, handleLineType, parseDate, formatDate, formatNumber, seriesHighlight, colorScale, rawData } = useContext(ConfigContext)

  // use brush data if it is passed in AND if this is NOT a brush chart
  data = !isBrush && undefined !== brushData && brushData.length ? brushData : data

  //if (isBrush && isDebug) console.log('###AREAchart BRUSH data, xScale, yScale, yMax, xMax', data, xScale, yScale, yMax, xMax)
  if (isBrush && isDebug) console.log('###AREAchart BRUSH yMax, xMax', yMax, xMax)

  // Draw transparent bars over the chart to get tooltip data
  // Turn DEBUG on for additional context.
  if (!data) return

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

  const getXAxisDates = brushDataSet => {
    if (undefined === brushDataSet || !brushDataSet) return
    let XAxisBrushDates = []
    brushDataSet.forEach(function convertDateTimeNumber(key, value, brushDataSet) {
      let tmp = getXValueFromCoordinate(xScale(value))
      let date = formatDate(tmp)
      XAxisBrushDates.push(date)
    })
    return XAxisBrushDates
  }

  const handleX = d => {
    return config.xAxis.type === 'date' ? xScale(parseDate(d[config.xAxis.dataKey], false)) : xScale(d[config.xAxis.dataKey])
  }

  const handleY = (d, index, s = undefined) => {
    return isBrush ? yScale(d[s.dataKey]) / 4 : yScale(d[s.dataKey])
  }

  return (
    data && (
      <svg>
        <ErrorBoundary component='AreaChart'>
          <Group className='area-chart' key='area-wrapper' left={Number(config.yAxis.size)} top={isBrush ? yMax * 1.3 : 0}>
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
                  fill={displayArea ? colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000' : 'transparent'}
                  fillOpacity={transparentArea ? 0.25 : 0.5}
                  data={seriesData}
                  x={d => handleX(d)}
                  y={d => handleY(d, index, s)} // isBrush ? handleBrushY : 
                  yScale={yScale}
                  curve={curveType}
                  strokeDasharray={s.type ? handleLineType(s.type) : 0}
                  style={isBrush ? { border: '2px solid green' } : {}}
                  />

                  {/* circles that appear on hover */}
                  {/* !isBrush && tooltipData && Object.entries(tooltipData.data).length > 0 && (
                  <circle
                    cx={config.xAxis.type === 'categorical' ? xScale(tooltipData.data[config.xAxis.dataKey]) : xScale(parseDate(tooltipData.data[config.xAxis.dataKey]))}
                    cy={yScale(tooltipData.data[index][1])}
                    r={4.5}
                    opacity={1}
                    fillOpacity={1}
                    fill={displayArea ? (colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000') : 'transparent'}
                    style={{ filter: 'unset', opacity: 1 }}
                  />
                  ) */}
                  {children}
                </React.Fragment>
              )
            })}

            {/* Transparent bar for tooltips - disable if AreaChart is a brush */}
            {/* prettier-ignore */}
            {!isBrush && <Bar width={Number(xMax)} height={Number(yMax)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} style={DEBUG ? { stroke: 'black', strokeWidth: 2 } : {}} onMouseMove={e => handleTooltipMouseOver(e, rawData)} onMouseLeave={handleTooltipMouseOff} />}
          </Group>
        </ErrorBoundary>
      </svg>
    )
  )
}

export default memo(AreaChart)
