import React, { useContext, useCallback } from 'react'

// cdc
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

// visx
import { AreaClosed, LinePath, Bar, Area } from '@visx/shape'
import { Group } from '@visx/group'
import { curveMonotoneX } from '@visx/curve'
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { localPoint } from '@visx/event'
import { GlyphCircle } from '@visx/glyph'

const CoveAreaChart = ({ xScale, yScale, yMax, xMax }) => {
  const { transformedData: data, config, height, width } = useContext(Context)
  const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } = useTooltip()
  const tooltipStyles = {
    ...defaultStyles,
    fontSize: '11px',
    borderRadius: '4px',
    padding: '7px',
    minWidth: '70px',
    textAlign: 'left'
  }
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true
  })

  const getXValueFromCoordinate = x => {
    const eachBand = xScale.step()
    console.log('eachBand', eachBand)
    const index = Math.round(x / (eachBand * 4))
    return xScale.domain()[index]
  }

  const handleMouseOver = useCallback(
    (e, data) => {
      const eventSvgCoords = localPoint(e)

      const { x } = eventSvgCoords

      let closestXScaleValue = getXValueFromCoordinate(x)

      const yScaleValues = data.filter(d => d[config.xAxis.dataKey] === closestXScaleValue)
      let yScaleMaxValues = []
      config.series.map(series => yScaleMaxValues.push(Number(yScaleValues[0][series.dataKey])))

      let tooltipData = {}
      tooltipData.data = data.filter(d => d[config.xAxis.dataKey] === closestXScaleValue)
      tooltipData.dataXPosition = 10
      tooltipData.dataYPosition = yMax + 10

      let tooltipInformation = {
        tooltipData: tooltipData,
        tooltipTop: 10,
        tooltipValues: yScaleValues,
        tooltipLeft: 20
      }
      showTooltip(tooltipInformation)
    },
    [showTooltip]
  )

  return (
    data && (
      <ErrorBoundary component='AreaChart'>
        <Group className='area-chart' key='area-wrapper' left={config.yAxis.size}>
          {config.series.map((s, index) => {
            let seriesColor = colorPalettesChart[config.palette][index]
            let curveType = curveMonotoneX

            return (
              <>
                {/* prettier-ignore */}
                <LinePath
                  data={data}
                  x={d => xScale(d[config.xAxis.dataKey])}
                  y={d => yScale(d[config.series[index].dataKey])}
                  stroke={seriesColor}
                  strokeWidth={2}
                  strokeOpacity={1}
                  shapeRendering='geometricPrecision'
                  curve={curveType}
                />
                {/* prettier-ignore */}
                <AreaClosed
                  curve={curveType}
                  key={'area-chart'}
                  fill={seriesColor}
                  fillOpacity={0.5}
                  data={data}
                  x={d => xScale(d[config.xAxis.dataKey])}
                  y={d => yScale(d[config.series[index].dataKey])} yScale={yScale}
                  />

                {/* bars to handle tooltips */}
                <Bar
                  x={d => xScale(d[config.xAxis.dataKey])}
                  y={d => yScale(d[config.series[index].dataKey])}
                  yScale={yScale}
                  width={xMax}
                  height={yMax}
                  fill='red'
                  fillOpacity={0.05}
                  style={{ stroke: 'black', strokeWidth: 2 }}
                  onMouseMove={e => handleMouseOver(e, data)}

                  // onTouchStart={handleTooltip}
                  // onTouchMove={handleTooltip}
                  // onMouseMove={handleTooltip}
                  // onMouseLeave={() => hideTooltip()}
                />

                {tooltipData && (
                  <TooltipInPortal key={Math.random()} top={100} left={200} style={tooltipStyles}>
                    <Group x={config.yAxis.size + 10} y={0}>
                      <ul style={{ listStyle: 'none', paddingLeft: 'unset' }}>
                        {Object.entries(tooltipData.data[0]).map(item => (
                          <li>
                            {item[0]} {item[1]}
                          </li>
                        ))}
                      </ul>
                    </Group>
                    <g>
                      <GlyphCircle left={tooltipLeft} top={tooltipTop} size={110} fill={'white'} stroke={'white'} strokeWidth={2} />
                    </g>
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
