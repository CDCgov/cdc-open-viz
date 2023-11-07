import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { useBarChart } from '../hooks/useBarChart'
import { BarStack } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { type BarChartProps } from '../types/ChartProps'

const BarChartStackedVertical = (props: BarChartProps) => {
  const { xScale, yScale, xMax, yMax } = props
  const { transformedData, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter } = useContext(ConfigContext)
  const { isHorizontal, barBorderWidth, hasMultipleSeries, applyRadius } = useBarChart()
  const { orientation } = config
  const data = config.brush.active && config.brush.data?.length ? config.brush.data : transformedData

  return (
    config.visualizationSubType === 'stacked' &&
    !isHorizontal && (
      <BarStack data={data} keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys} x={d => d[config.runtime.xAxis.dataKey]} xScale={xScale} yScale={yScale} color={colorScale}>
        {barStacks =>
          barStacks.reverse().map(barStack =>
            barStack.bars.map(bar => {
              let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
              let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
              let barThickness = xMax / barStack.bars.length
              let barThicknessAdjusted = barThickness * (config.barThickness || 0.8)
              let offset = (barThickness * (1 - (config.barThickness || 0.8))) / 2
              // tooltips
              const xAxisValue = config.runtime.xAxis.type === 'date' ? formatDate(parseDate(data[bar.index][config.runtime.xAxis.dataKey])) : data[bar.index][config.runtime.xAxis.dataKey]
              const yAxisValue = formatNumber(bar.bar ? bar.bar.data[bar.key] : 0, 'left')

              if (!yAxisValue) return <></>

              const style = applyRadius(barStack.index)
              let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
              const xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
              if (!hasMultipleSeries) {
                yAxisTooltip = config.isLegendValue ? `${bar.key}: ${yAxisValue}` : config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
              }

              const {
                legend: { showLegendValuesTooltip },
                runtime: { seriesLabels }
              } = config

              const barStackTooltip = `<div>
                    <p class="tooltip-heading"><strong>${xAxisTooltip}</strong></p>
                    ${showLegendValuesTooltip && seriesLabels && hasMultipleSeries ? `${seriesLabels[bar.key] || ''}<br/>` : ''}
                    ${yAxisTooltip}<br />
                      </div>`

              return (
                <Group key={`${barStack.index}--${bar.index}--${orientation}`}>
                  <style>
                    {`
                           #barStack${barStack.index}-${bar.index} rect,
                           #barStack${barStack.index}-${bar.index} foreignObject div{
                            animation-delay: ${barStack.index * 0.5}s;
                            transform-origin: ${barThicknessAdjusted / 2}px ${bar.y + bar.height}px
                          }
                        `}
                  </style>
                  <Group key={`bar-stack-${barStack.index}-${bar.index}`} id={`barStack${barStack.index}-${bar.index}`} className='stack vertical'>
                    <Text display={config.labels && displayBar ? 'block' : 'none'} opacity={transparentBar ? 0.5 : 1} x={barThickness * bar.index + offset} y={bar.y - 5} fill={'#000'} textAnchor='middle'>
                      {yAxisValue}
                    </Text>
                    <foreignObject
                      key={`bar-stack-${barStack.index}-${bar.index}`}
                      x={barThickness * bar.index + offset}
                      y={bar.y}
                      width={barThicknessAdjusted}
                      height={bar.height}
                      display={displayBar ? 'block' : 'none'}
                      data-tooltip-html={barStackTooltip}
                      data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                      onClick={e => {
                        e.preventDefault()
                        if (setSharedFilter) {
                          bar[config.xAxis.dataKey] = xAxisValue
                          setSharedFilter(config.uid, bar)
                        }
                      }}
                    >
                      <div style={{ opacity: transparentBar ? 0.5 : 1, width: barThicknessAdjusted, height: bar.height, background: bar.color, border: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px solid #333`, ...style }}></div>
                    </foreignObject>
                  </Group>
                </Group>
              )
            })
          )
        }
      </BarStack>
    )
  )
}

export default BarChartStackedVertical
