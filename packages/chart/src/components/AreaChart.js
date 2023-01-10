import React, { useContext } from 'react'
import { Group } from '@visx/group'
import Context from '../context'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { AreaClosed, LinePath } from '@visx/shape'
import { curveMonotoneX } from '@visx/curve'
import { Tooltip, useTooltip, useTooltipInPortal, TooltipWithBounds } from '@visx/tooltip'
import { localPoint } from '@visx/event'
import { GlyphCircle } from '@visx/glyph'

const CoveAreaChart = ({ xScale, yScale }) => {
  const { transformedData: data, config } = useContext(Context)
  const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } = useTooltip()
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true
  })

  const handleMouseOver = (e, data) => {
    const eventSvgCoords = localPoint(e)
    showTooltip({
      tooltipData: data,
      tooltipTop: eventSvgCoords?.y,
      tooltipLeft: eventSvgCoords?.x
    })
  }
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
                  onMouseMove={ (e,data) => handleMouseOver(e, data) }
                  />

                {tooltipOpen && (
                  <TooltipInPortal key={Math.random()} top={tooltipTop} left={tooltipLeft}>
                    <p>{tooltipData}</p>
                  </TooltipInPortal>
                )}

                <g>
                  <GlyphCircle left={tooltipLeft} top={tooltipTop} size={110} fill={'white'} stroke={'white'} strokeWidth={2} />
                </g>
              </>
            )
          })}
        </Group>
      </ErrorBoundary>
    )
  )
}

export default CoveAreaChart
