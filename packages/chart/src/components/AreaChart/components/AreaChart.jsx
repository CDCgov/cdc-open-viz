import React, { useContext, memo } from 'react'

// cdc
import ConfigContext from '../../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { isDateScale } from '@cdc/core/helpers/cove/date'

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

  const handleX = d => {
    return (isDateScale(config.xAxis) ? xScale(parseDate(d[config.xAxis.dataKey], false)) : xScale(d[config.xAxis.dataKey])) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
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

              console.log('series data', seriesData)

              let curveType = allCurves[s.lineType]
              let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(s.dataKey) === -1
              let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(s.dataKey) !== -1

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
