import React, { useContext, useCallback, useState } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
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
  const DEBUG = false
  const { transformedData: data, config, height, width } = useContext(ConfigContext)
  const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } = useTooltip()
  const [xAxisCircleToDisplay, setXAxisCircleToDisplay] = useState(null)

  let isEditor = window.location.href.includes('editor=true')

  const tooltipStyles = {
    ...defaultStyles,
    fontSize: '13px',
    borderRadius: '4px',
    minWidth: '100px',
    textAlign: 'left'
  }
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: false,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true
  })

  let barThickness = xMax / config.data.length
  let barThicknessAdjusted = barThickness * (config.barThickness || 0.8)
  let offset = (barThickness * (1 - (config.barThickness || 0.8))) / 2

  const getXValueFromCoordinate = x => {
    let eachBand = xScale.step()
    let numerator = x
    let denominator = eachBand
    let innerOffset = eachBand - barThicknessAdjusted
    const index = Math.floor(Number(numerator) / eachBand)
    console.table({
      eachBand,
      numerator,
      denominator,
      innerOffset,
      index
    })
    return xScale.domain()[index - 1] // fixes off by 1 error
  }

  const handleMouseOver = useCallback(
    (e, data) => {

      // get the svg coordinates of the mouse
      // and get the closest values
      const eventSvgCoords = localPoint(e)
      const { x } = eventSvgCoords
      let closestXScaleValue = getXValueFromCoordinate(x)
      const yScaleValues = data.filter(d => d[config.xAxis.dataKey] === closestXScaleValue)

      console.log('cfg', config.runtime.seriesKeys)
      config.runtime.seriesKeys.map(key => {
        console.log('key', key)
        console.log('yScaleValues', yScaleValues)
        yScaleValues[0].filter(item => item === key)
      })
      let yScaleMaxValues = []

      // filter out the series that aren't added to the map.
      config.series.map(series => console.log('series here', series))
      config.series.map(series => yScaleMaxValues.push(Number(yScaleValues[0][series.dataKey])))

      let tooltipData = {}
      tooltipData.data = data.filter(d => d[config.xAxis.dataKey] === closestXScaleValue)
      console.log('tooltip data', tooltipData)
      tooltipData.dataXPosition = 10
      tooltipData.dataYPosition = yMax + 10


      let tooltipInformation = {
        tooltipData: tooltipData,
        tooltipTop: 0,
        tooltipValues: yScaleValues,
        tooltipLeft: 20
      }
      showTooltip(tooltipInformation)
    },
    [showTooltip]
  )

  let titleOffset = config.title ? 48.75 + 24 : 0
  let leftOffset = isEditor ? 300 : 0 + Number(config.yAxis.size) + 16
  const tooltipOffset = { top: titleOffset, left: leftOffset }

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
                  y={d => yScale(d[config.series[index].dataKey])}
                  yScale={yScale}
                />

                <Bar
                  x={d => xScale(d[config.xAxis.dataKey])}
                  y={d => yScale(d[config.series[index].dataKey])}
                  yScale={yScale}
                  width={xMax}
                  height={yMax}
                  fill={DEBUG ? 'red' : 'transparent'}
                  fillOpacity={0.05}
                  style={DEBUG ? { stroke: 'black', strokeWidth: 2 } : {}}
                  onMouseMove={e => handleMouseOver(e, data)}
                />
                {console.log('toooltip', tooltipData)}
                {tooltipData &&
                  <circle
                    cx={xScale(tooltipData.data[0][config.xAxis.dataKey])}
                    cy={yScale(tooltipData.data[0][s.dataKey])}
                    dataTestx={d => Number(xScale(d[config.xAxis.dataKey]))}
                    r={4.5}
                    opacity={1}
                    fillOpacity={1}
                    fill={seriesColor}
                    style={{ filter: 'unset', opacity: 1 }}
                  />
                }

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
                  <TooltipInPortal key={Math.random()} top={tooltipOffset.top} left={tooltipOffset.left} style={tooltipStyles}>
                    <Group x={config.yAxis.size + 10} y={0}>
                      <ul style={{ listStyle: 'none', paddingLeft: 'unset' }}>
                        {Object.entries(tooltipData.data[0]).map(item => (
                          <li>
                            {item[0]} {item[1]}
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
