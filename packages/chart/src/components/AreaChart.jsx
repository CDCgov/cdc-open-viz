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

  if (!isBrush && isDebug) console.log('###AREAchart BRUSH data in, yMax, xMax, xScale, yScale', data, yMax, xMax, xScale, yScale)

  // Draw transparent bars over the chart to get tooltip data
  // Turn DEBUG on for additional context.
  if (!data) return

  const handleX = d => {
    return config.xAxis.type === 'date' ? xScale(parseDate(d[config.xAxis.dataKey], false)) : xScale(d[config.xAxis.dataKey])
  }

  const handleY = (d, index, s = undefined) => {
    return isBrush ? yScale(d[s.dataKey]) / 4 : yScale(d[s.dataKey])
  }

  // prevents duplicate brush handles being rendered
  const getFirstBrushHandleOnly = (children, index) => {
    if (index === 0) {
      return children
    }
    // else dont return the other brush handles
  }

  return (
    data && (
      <svg>
        <ErrorBoundary component='AreaChart'>
          <Group className='area-chart' key='area-wrapper' left={Number(config.yAxis.size)} top={isBrush ? yMax * 1.3 : 0}>
            {(config.runtime.areaSeriesKeys || config.series).map((s, index) => {
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
                  y={d => handleY(d, index, s)}
                  yScale={yScale}
                  curve={curveType}
                  strokeDasharray={s.type ? handleLineType(s.type) : 0}
                />
                  {getFirstBrushHandleOnly(children, index)}
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
