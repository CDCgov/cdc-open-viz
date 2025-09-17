import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { BarStackHorizontal } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
import { getColorContrast, getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'

// types
import BarChartContext, { type BarChartContextValues } from './context'
import { type ChartContext } from '../../../types/ChartContext'

import createBarElement from '@cdc/core/components/createBarElement'
import { getHorizontalBarHeights } from '../helpers/getBarHeights'

const BarChartStackedHorizontal = () => {
  const { yMax, yScale, xScale, barChart } = useContext<BarChartContextValues>(BarChartContext)

  // prettier-ignore
  const {
    animatedChart,
    colorScale,
    config,
    formatDate,
    formatNumber,
    parseDate,
    seriesHighlight,
    setSharedFilter,
    transformedData: data
  } = useContext<ChartContext>(ConfigContext)

  const {
    barBorderWidth,
    displayNumbersOnBar,
    getAdditionalColumn,
    hoveredBar,
    isHorizontal,
    isLabelBelowBar,
    onMouseLeaveBar,
    onMouseOverBar,
    barStackedSeriesKeys
  } = barChart

  const { orientation, visualizationSubType } = config

  // Pattern helper function
  const renderPatternDefs = () => {
    if (!config.legend.patterns || Object.keys(config.legend.patterns).length === 0) {
      return null
    }

    return (
      <defs>
        {Object.entries(config.legend.patterns).map(([key, pattern]) => {
          const patternId = `chart-pattern-${key}`
          const size = pattern.patternSize || 8

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
    isHorizontal && (
      <>
        {renderPatternDefs()}
        <BarStackHorizontal
          data={data}
          keys={barStackedSeriesKeys}
          height={yMax}
          y={d => d[config.runtime.yAxis.dataKey]}
          xScale={xScale}
          yScale={yScale}
          color={colorScale}
          offset='none'
        >
          {barStacks =>
            barStacks.map(barStack =>
              getHorizontalBarHeights(config, barStack.bars).map((bar, index) => {
                const transparentBar =
                  config.legend.behavior === 'highlight' &&
                  seriesHighlight.length > 0 &&
                  seriesHighlight.indexOf(bar.key) === -1
                const displayBar =
                  config.legend.behavior === 'highlight' ||
                  seriesHighlight.length === 0 ||
                  seriesHighlight.indexOf(bar.key) !== -1
                config.barHeight = Number(config.barHeight)
                let barColor = colorScale(config.runtime.seriesLabels[bar.key])
                let labelColor = getContrastColor(APP_FONT_COLOR, barColor)
                let constrast = getColorContrast(APP_FONT_COLOR, barColor)
                const contrastLevel = 7
                if (typeof constrast === 'number' && constrast < contrastLevel) {
                  labelColor = '#fff'
                }
                // tooltips
                const xAxisValue = formatNumber(data[bar.index][bar.key], 'left')
                const yAxisValue =
                  config.runtime.yAxis.type === 'date'
                    ? formatDate(parseDate(data[bar.index][config.runtime.originalXAxis.dataKey]))
                    : data[bar.index][config.runtime.originalXAxis.dataKey]
                const yAxisTooltip = config.runtime.yAxis.label
                  ? `${config.runtime.yAxis.label}: ${yAxisValue}`
                  : yAxisValue
                const textWidth = getTextWidth(xAxisValue)
                const additionalColTooltip = getAdditionalColumn(bar.key, hoveredBar)
                const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${xAxisValue}`
                const tooltip = `<ul>
                  <li class="tooltip-heading"">${yAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  <li class="tooltip-body ">${additionalColTooltip}</li>
                    </li></ul>`

                // Check if this bar should use a pattern
                const getPatternUrl = (): string | null => {
                  if (!config.legend.patterns || Object.keys(config.legend.patterns).length === 0) {
                    return null
                  }

                  // Find a pattern that matches this specific bar
                  for (const [patternKey, pattern] of Object.entries(config.legend.patterns)) {
                    if (pattern.dataKey && pattern.dataValue) {
                      // For stacked bar charts, check if the pattern's dataKey matches the current bar's series key
                      // and if the pattern's dataValue matches the current bar's value
                      const barValue = data[bar.index][bar.key]
                      if (pattern.dataKey === bar.key && String(barValue) === String(pattern.dataValue)) {
                        return `url(#chart-pattern-${patternKey})`
                      }
                      // Fallback for non-series pattern matching (like the original stacked pattern test)
                      // Only check this if the pattern dataKey is NOT a series key
                      else if (!config.runtime.seriesLabels || !config.runtime.seriesLabels[pattern.dataKey]) {
                        const dataFieldValue = data[bar.index][pattern.dataKey]
                        if (String(dataFieldValue) === String(pattern.dataValue)) {
                          return `url(#chart-pattern-${patternKey})`
                        }
                      }
                    }
                  }

                  return null
                }

                const patternUrl = getPatternUrl()

                return (
                  <>
                    <Group key={index} id={`barStack${barStack.index}-${bar.index}`} className='stack horizontal'>
                      {/* Base colored bar */}
                      {createBarElement({
                        config: config,
                        seriesHighlight,
                        index: barStack.index,
                        className: `animated-chart group ${animatedChart ? 'animated' : ''}`,
                        background: colorScale(config.runtime.seriesLabels[bar.key]),
                        borderColor: '#333',
                        borderStyle: 'solid',
                        borderWidth: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px`,
                        width: bar.width,
                        height: bar.height,
                        x: bar.x,
                        y: bar.y,
                        onMouseOver: e => onMouseOverBar(yAxisValue, bar.key, e, data),
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
                          transformOrigin: `${bar.x}px 0`,
                          opacity: transparentBar ? 0.2 : 1,
                          display: displayBar ? 'block' : 'none'
                        }
                      })}

                      {/* Pattern overlay using createBarElement for consistent animation */}
                      {patternUrl &&
                        createBarElement({
                          config: config,
                          seriesHighlight,
                          index: barStack.index,
                          className: `animated-chart pattern-overlay ${animatedChart ? 'animated' : ''}`,
                          background: patternUrl, // Use pattern as background
                          borderColor: 'transparent',
                          borderStyle: 'none',
                          borderWidth: '0px',
                          width: bar.width,
                          height: bar.height,
                          x: bar.x,
                          y: bar.y,
                          onMouseOver: () => {}, // No interaction
                          onMouseLeave: () => {}, // No interaction
                          tooltipHtml: '',
                          tooltipId: '',
                          onClick: () => {}, // No interaction
                          styleOverrides: {
                            animationDelay: `${barStack.index * 0.5}s`,
                            transformOrigin: `${bar.x}px 0`,
                            opacity: animatedChart ? 0 : transparentBar ? 0.2 : 1, // Start hidden if animated
                            display: displayBar ? 'block' : 'none',
                            pointerEvents: 'none', // Let clicks pass through to base bar
                            // Force the initial transform state to match CSS animation
                            transform: animatedChart ? 'scale(0, 1)' : 'scale(1, 1)'
                          }
                        })}

                      {orientation === 'horizontal' &&
                        visualizationSubType === 'stacked' &&
                        isLabelBelowBar &&
                        barStack.index === 0 &&
                        !config.yAxis.hideLabel && (
                          <Text
                            x={`${bar.x + (config.isLollipopChart ? 15 : 5)}`} // padding
                            y={bar.y + bar.height * 1.2}
                            fill={APP_FONT_COLOR}
                            textAnchor='start'
                            verticalAnchor='start'
                          >
                            {yAxisValue}
                          </Text>
                        )}

                      {displayNumbersOnBar && textWidth < bar.width && (
                        <Text
                          display={displayBar ? 'block' : 'none'}
                          x={bar.x + barStack.bars[bar.index].width / 2} // padding
                          y={bar.y + bar.height / 2}
                          fill={labelColor}
                          textAnchor='middle'
                          verticalAnchor='middle'
                        >
                          {xAxisValue}
                        </Text>
                      )}
                    </Group>
                  </>
                )
              })
            )
          }
        </BarStackHorizontal>
      </>
    )
  )
}

export default BarChartStackedHorizontal
