import React, { useContext, memo } from 'react'

// cdc
import ConfigContext from '../../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

// visx & d3
import * as allCurves from '@visx/curve'
import { AreaClosed, LinePath, Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { bisector } from 'd3-array'

const AreaChart = props => {
  const { xScale, yScale, yMax, xMax, handleTooltipMouseOver, handleTooltipMouseOff, isDebug, children } = props
  // import data from context
  let { transformedData, config, handleLineType, parseDate, formatDate, formatNumber, seriesHighlight, colorScale, rawData } = useContext(ConfigContext)
  const data = config.brush.active && config.brush.data?.length ? config.brush.data : transformedData

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

  const handleX = d => {
    return config.xAxis.type === 'date' ? xScale(parseDate(d[config.xAxis.dataKey], false)) : xScale(d[config.xAxis.dataKey])
  }

  const handleY = (d, index, s = undefined) => {
    return yScale(d[s.dataKey])
  }

  return (
    data && (
      <svg>
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
                    fill={displayArea ? colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[s.dataKey] : s.dataKey) : '#000' : 'transparent'}
                    fillOpacity={transparentArea ? 0.25 : 0.5}
                    data={seriesData}
                    x={d => handleX(d)}
                    y={d => handleY(d, index, s)}
                    yScale={yScale}
                    curve={curveType}
                    strokeDasharray={s.type ? handleLineType(s.type) : 0}
                  />
                </React.Fragment>
              )
            })}
            <Bar width={Number(xMax)} height={Number(yMax)} fill={'transparent'} fillOpacity={0.05} onMouseMove={e => handleTooltipMouseOver(e, rawData)} onMouseLeave={handleTooltipMouseOff} />
          </Group>
        </ErrorBoundary>
      </svg>
    )
  )
}

export default memo(AreaChart)
