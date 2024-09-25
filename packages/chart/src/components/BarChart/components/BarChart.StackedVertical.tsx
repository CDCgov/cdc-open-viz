import React, { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import { useBarChart } from '../../../hooks/useBarChart'
import { BarStack } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import BarChartContext from './context'
import Regions from '../../Regions'
import { isDateScale } from '@cdc/core/helpers/cove/date'

import createBarElement from '@cdc/core/components/createBarElement'

const BarChartStackedVertical = () => {
  const [barWidth, setBarWidth] = useState(0)
  const { xScale, yScale, seriesScale, xMax, yMax } = useContext(BarChartContext)
  const { transformedData, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter } = useContext(ConfigContext)
  const { isHorizontal, barBorderWidth, applyRadius, hoveredBar, getAdditionalColumn, onMouseLeaveBar, onMouseOverBar, barStackedSeriesKeys } = useBarChart()
  const { orientation } = config

  const data = config.brush?.active && config.brush.data?.length ? config.brush.data : transformedData
  const isDateAxisType = config.runtime.xAxis.type === 'date-time' || config.runtime.xAxis.type === 'date'

  return (
    config.visualizationSubType === 'stacked' &&
    !isHorizontal && (
      <>
        <BarStack data={data} keys={barStackedSeriesKeys} x={d => d[config.runtime.xAxis.dataKey]} xScale={xScale} yScale={yScale} color={colorScale}>
          {barStacks =>
            barStacks.reverse().map(barStack =>
              barStack.bars.map(bar => {
                let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                let barThickness = isDateAxisType ? seriesScale.range()[1] - seriesScale.range()[0] : xMax / barStack.bars.length
                if (config.runtime.xAxis.type !== 'date') barThickness = config.barThickness * barThickness
                // tooltips
                const rawXValue = bar.bar.data[config.runtime.xAxis.dataKey]
                const xAxisValue = isDateAxisType ? formatDate(parseDate(rawXValue)) : rawXValue
                const yAxisValue = formatNumber(bar.bar ? bar.bar.data[bar.key] : 0, 'left')
                if (!yAxisValue) return
                const barX = xScale(isDateAxisType ? parseDate(rawXValue) : rawXValue) - (isDateAxisType ? barThickness / 2 : 0)
                const xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                const additionalColTooltip = getAdditionalColumn(hoveredBar)
                const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${yAxisValue}`
                const tooltip = `<ul>
                  <li class="tooltip-heading"">${xAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  <li class="tooltip-body ">${additionalColTooltip}</li>
                    </li></ul>`

                setBarWidth(barThickness)

                return (
                  <Group key={`${barStack.index}--${bar.index}--${orientation}`}>
                    <Group key={`bar-stack-${barStack.index}-${bar.index}`} id={`barStack${barStack.index}-${bar.index}`} className='stack vertical'>
                      {createBarElement({
                        config: config,
                        seriesHighlight,
                        index: barStack.index,
                        background: colorScale(config.runtime.seriesLabels[bar.key]),
                        borderColor: '#333',
                        borderStyle: 'solid',
                        borderWidth: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px`,
                        width: barThickness,
                        height: bar.height,
                        x: barX,
                        y: bar.y,
                        onMouseOver: () => onMouseOverBar(xAxisValue, bar.key),
                        onMouseLeave: onMouseLeaveBar,
                        tooltipHtml: tooltip,
                        tooltipId: `cdc-open-viz-tooltip-${config.runtime.uniqueId}`,
                        onClick: e => {
                          e.preventDefault()
                          if (setSharedFilter) {
                            bar[config.xAxis.dataKey] = xAxisValue
                            setSharedFilter(config.uid, bar)
                          }
                        },
                        styleOverrides: {
                          animationDelay: `${barStack.index * 0.5}s`,
                          transformOrigin: `${barThickness / 2}px ${bar.y + bar.height}px`,
                          opacity: transparentBar ? 0.2 : 1,
                          display: displayBar ? 'block' : 'none'
                        }
                      })}
                    </Group>
                  </Group>
                )
              })
            )
          }
        </BarStack>
        <Regions xScale={xScale} yMax={yMax} barWidth={barWidth} totalBarsInGroup={1} />
      </>
    )
  )
}

export default BarChartStackedVertical
