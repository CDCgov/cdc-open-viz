import React, { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import { BarStack } from '@visx/shape'
import { Group } from '@visx/group'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
import BarChartContext from './context'
import Regions from '../../Regions'
import { addMinimumBarHeights } from '../helpers'

import createBarElement from '@cdc/core/components/createBarElement'

const BarChartStackedVertical = () => {
  const [barWidth, setBarWidth] = useState(0)
  const { xScale, yScale, seriesScale, xMax, yMax, barChart } = useContext(BarChartContext)
  const {
    isHorizontal,
    barBorderWidth,
    hoveredBar,
    getAdditionalColumn,
    onMouseLeaveBar,
    onMouseOverBar,
    barStackedSeriesKeys
  } = barChart
  const { transformedData, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter } =
    useContext(ConfigContext)

  const { orientation } = config

  let data = transformedData

  const isDateAxisType = config.runtime.xAxis.type === 'date-time' || config.runtime.xAxis.type === 'date'
  const isDateTimeScaleAxisType = config.runtime.xAxis.type === 'date-time'

  // Pattern helper function
  const renderPatternDefs = () => {
    if (!config.legend.patterns || Object.keys(config.legend.patterns).length === 0) {
      return null
    }

    return (
      <defs>
        {Object.entries(config.legend.patterns).map(([key, pattern]) => {
          const patternId = `chart-pattern-${key}`
          const size = config.legend.patternSize || 8

          switch (pattern.shape) {
            case 'circles':
              return (
                <PatternCircles
                  key={patternId}
                  id={patternId}
                  height={size}
                  width={size}
                  fill={pattern.color}
                  radius={1.25}
                />
              )
            case 'lines':
              return (
                <PatternLines
                  key={patternId}
                  id={patternId}
                  height={size}
                  width={size}
                  stroke={pattern.color}
                  strokeWidth={0.75}
                  orientation={['horizontal']}
                />
              )
            case 'diagonalLines':
              return (
                <PatternLines
                  key={patternId}
                  id={patternId}
                  height={size}
                  width={size}
                  stroke={pattern.color}
                  strokeWidth={0.75}
                  orientation={['diagonalRightToLeft']}
                />
              )
            case 'waves':
              return (
                <PatternWaves
                  key={patternId}
                  id={patternId}
                  height={size}
                  width={size}
                  fill={pattern.color}
                  strokeWidth={0.25}
                />
              )
            default:
              return null
          }
        })}
      </defs>
    )
  }

  return (
    config.visualizationSubType === 'stacked' &&
    !isHorizontal && (
      <>
        {renderPatternDefs()}
        <BarStack
          data={data}
          keys={barStackedSeriesKeys}
          x={d => d[config.runtime.xAxis.dataKey]}
          xScale={xScale}
          yScale={yScale}
          color={colorScale}
        >
          {barStacks => {
            return addMinimumBarHeights(barStacks)
              .reverse()
              .map(barStack => {
                return barStack.bars.map(bar => {
                  let transparentBar =
                    config.legend.behavior === 'highlight' &&
                    seriesHighlight.length > 0 &&
                    seriesHighlight.indexOf(bar.key) === -1
                  let displayBar =
                    config.legend.behavior === 'highlight' ||
                    seriesHighlight.length === 0 ||
                    seriesHighlight.indexOf(bar.key) !== -1
                  let barThickness = isDateAxisType
                    ? seriesScale.range()[1] - seriesScale.range()[0]
                    : xMax / barStack.bars.length
                  if (config.runtime.xAxis.type !== 'date') barThickness = config.barThickness * barThickness
                  // tooltips
                  const rawXValue = bar.bar.data[config.runtime.xAxis.dataKey]
                  const xAxisValue = isDateAxisType ? formatDate(parseDate(rawXValue)) : rawXValue
                  const yAxisValue = formatNumber(bar.bar ? bar.bar.data[bar.key] : 0, 'left')
                  if (!yAxisValue) return
                  const barX =
                    xScale(isDateAxisType ? parseDate(rawXValue) : rawXValue) -
                    (isDateTimeScaleAxisType ? barThickness / 2 : 0)
                  const xAxisTooltip = config.runtime.xAxis.label
                    ? `${config.runtime.xAxis.label}: ${xAxisValue}`
                    : xAxisValue
                  const additionalColTooltip = getAdditionalColumn(bar.key, hoveredBar)
                  const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${yAxisValue}`
                  const tooltip = `<ul>
                  <li class="tooltip-heading"">${xAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  <li class="tooltip-body ">${additionalColTooltip}</li>
                    </li></ul>`

                  setBarWidth(barThickness)

                  // Check if this bar should use a pattern
                  const getPatternUrl = (): string | null => {
                    if (!config.legend.patterns || Object.keys(config.legend.patterns).length === 0) {
                      return null
                    }

                    // Find a pattern that matches this data point
                    for (const [patternKey, pattern] of Object.entries(config.legend.patterns)) {
                      if (pattern.dataKey && pattern.dataValue) {
                        const dataFieldValue = bar.bar.data[pattern.dataKey]
                        if (String(dataFieldValue) === String(pattern.dataValue)) {
                          return `url(#chart-pattern-${patternKey})`
                        }
                      }
                    }

                    return null
                  }

                  const patternUrl = getPatternUrl()

                  return (
                    <Group key={`${barStack.index}--${bar.index}--${orientation}`}>
                      <Group
                        key={`bar-stack-${barStack.index}-${bar.index}`}
                        id={`barStack${barStack.index}-${bar.index}`}
                        className='stack vertical'
                      >
                        {/* Base colored bar */}
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
                          onMouseOver: e => onMouseOverBar(xAxisValue, bar.key, e, data),
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

                        {/* Pattern overlay if pattern exists */}
                        {patternUrl &&
                          createBarElement({
                            config: config,
                            seriesHighlight,
                            index: barStack.index,
                            background: patternUrl, // Use pattern as background
                            borderColor: 'transparent',
                            borderStyle: 'none',
                            borderWidth: '0px',
                            width: barThickness,
                            height: bar.height,
                            x: barX,
                            y: bar.y,
                            onMouseOver: () => {}, // No interaction
                            onMouseLeave: () => {}, // No interaction
                            tooltipHtml: '',
                            tooltipId: '',
                            onClick: () => {}, // No interaction
                            styleOverrides: {
                              animationDelay: `${barStack.index * 0.5}s`,
                              transformOrigin: `${barThickness / 2}px ${bar.y + bar.height}px`,
                              opacity: transparentBar ? 0.2 : 1,
                              display: displayBar ? 'block' : 'none',
                              pointerEvents: 'none' // Let clicks pass through to base bar
                            }
                          })}
                      </Group>
                    </Group>
                  )
                })
              })
          }}
        </BarStack>
        <Regions
          xScale={xScale}
          yMax={yMax}
          barWidth={barWidth}
          totalBarsInGroup={1}
          handleTooltipMouseOff={() => {}}
          handleTooltipMouseOver={() => {}}
          handleTooltipClick={() => {}}
          tooltipData={null}
          showTooltip={() => {}}
          hideTooltip={() => {}}
        />
      </>
    )
  )
}

export default BarChartStackedVertical
