import React, { useContext, memo } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

// visx & d3
import * as allCurves from '@visx/curve'
import { AreaClosed, LinePath, Bar } from '@visx/shape'
import { Group } from '@visx/group'

const AreaChart = ({ xScale, yScale, yMax, xMax, chartRef, handleTooltipMouseOver, handleTooltipMouseOff, tooltipData }) => {
  // enable various console logs in the file
  const DEBUG = false

  // import data from context
  const { transformedData: data, config, handleLineType, parseDate, seriesHighlight, colorScale, rawData } = useContext(ConfigContext)

  // Draw transparent bars over the chart to get tooltip data
  // Turn DEBUG on for additional context.
  if (!data) return

  const handleX = d => {
    return config.xAxis.type === 'date' ? xScale(parseDate(d[config.xAxis.dataKey], false)) : xScale(d[config.xAxis.dataKey])
  }

  const handleY = (d, index, s = undefined) => {
    return yScale(d[s.dataKey])
  }

  return (
    data && (
      <ErrorBoundary component='AreaChart'>
        <Group className='area-chart' key='area-wrapper' left={Number(config.yAxis.size)}>
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
                  fill={ displayArea ? colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000' : 'transparent'}
                  fillOpacity={transparentArea ? 0.25 : 0.5}
                  data={seriesData}
                  x={d => handleX(d)}
                  y={d => handleY(d, index, s)}
                  yScale={yScale}
                  curve={curveType}
                  strokeDasharray={s.type ? handleLineType(s.type) : 0}
                />

                {/* circles that appear on hover */}
                {/* {tooltipData && Object.entries(tooltipData.data).length > 0 && (
                  <circle
                    cx={config.xAxis.type === 'categorical' ? xScale(tooltipData.data[config.xAxis.dataKey]) : xScale(parseDate(tooltipData.data[config.xAxis.dataKey]))}
                    cy={yScale(tooltipData.data[index][1])}
                    r={4.5}
                    opacity={1}
                    fillOpacity={1}
                    fill={displayArea ? (colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000') : 'transparent'}
                    style={{ filter: 'unset', opacity: 1 }}
                  />
                )} */}
              </React.Fragment>
            )
          })}

          {/* Transparent bar for tooltips */}
          {/* prettier-ignore */}
          <Bar
            width={ Number(xMax)}
            height={ Number(yMax)}
            fill={DEBUG ? 'red' : 'transparent'}
            fillOpacity={0.05}
            style={DEBUG ? { stroke: 'black', strokeWidth: 2 } : {}}
            onMouseMove={e => handleTooltipMouseOver(e, rawData)}
            onMouseLeave={ handleTooltipMouseOff }
            />
        </Group>
      </ErrorBoundary>
    )
  )
}

export default memo(AreaChart)
