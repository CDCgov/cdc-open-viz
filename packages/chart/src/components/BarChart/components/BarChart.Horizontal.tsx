import React, { useContext } from 'react'

// Local context and hooks
import ConfigContext from '../../../ConfigContext'
import { useHighlightedBars } from '../../../hooks/useHighlightedBars'

// VisX library imports
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'

// CDC core components and helpers
import { getColorContrast, getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import createBarElement from '@cdc/core/components/createBarElement'
import { getBarConfig, testZeroValue } from '../helpers'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import isNumber from '@cdc/core/helpers/isNumber'

// Third party libraries
import chroma from 'chroma-js'

// Local context and types
import BarChartContext, { BarChartContextValues } from './context'
import { ChartContext } from '../../../types/ChartContext'
import _ from 'lodash'
import { getBarData } from '../helpers/getBarData'
import { getHorizontalBarHeights } from '../helpers/getBarHeights'

export const BarChartHorizontal = () => {
  const { xScale, yScale, yMax, seriesScale, barChart } = useContext<BarChartContextValues>(BarChartContext)
  const {
    isHorizontal,
    barBorderWidth,
    assignColorsToValues,
    section,
    isLabelBelowBar,
    lollipopBarWidth,
    lollipopShapeSize,
    getHighlightedBarColorByValue,
    getHighlightedBarByValue,
    getAdditionalColumn,
    hoveredBar,
    onMouseLeaveBar,
    onMouseOverBar
  } = barChart

  const {
    transformedData: data,
    tableData,
    colorScale,
    seriesHighlight,
    config,
    formatNumber,
    formatDate,
    parseDate,
    setSharedFilter
  } = useContext<ChartContext>(ConfigContext)

  const { HighLightedBarUtils } = useHighlightedBars(config)

  const hasConfidenceInterval = [config.confidenceKeys?.upper, config.confidenceKeys?.lower].every(
    v => v != null && String(v).trim() !== ''
  )

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

  const _data = getBarData(config, data, hasConfidenceInterval)

  return (
    config.visualizationSubType !== 'stacked' &&
    config.visualizationType === 'Bar' &&
    config.orientation === 'horizontal' && (
      <Group>
        {renderPatternDefs()}
        <BarGroup
          data={config.preliminaryData?.some(pd => pd.value && pd.type === 'suppression') ? tableData : _data}
          keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
          height={yMax}
          x0={d => d[config.runtime.originalXAxis.dataKey]}
          x0Scale={yScale}
          x1Scale={seriesScale}
          yScale={xScale}
          color={() => {
            return ''
          }}
        >
          {barGroups => {
            return getHorizontalBarHeights(config, barGroups).map((barGroup, index) => (
              <Group
                className={`bar-group-${barGroup.index}-${barGroup.x0}--${index} ${config.orientation}`}
                key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`}
                id={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`}
                top={barGroup.y}
              >
                {barGroup.bars.map((bar, index) => {
                  const datum = _data[barGroup.index]
                  const dataValue = datum[config.runtime.originalXAxis.dataKey]
                  const scaleVal = config.yAxis.type === 'logarithmic' ? 0.1 : 0
                  let highlightedBarValues = config.highlightedBarValues
                    .map(item => item.value)
                    .filter(item => item !== ('' || undefined))
                  highlightedBarValues =
                    config.xAxis.type === 'date'
                      ? HighLightedBarUtils.formatDates(highlightedBarValues)
                      : highlightedBarValues
                  let transparentBar =
                    config.legend.behavior === 'highlight' &&
                    seriesHighlight.length > 0 &&
                    seriesHighlight.indexOf(bar.key) === -1
                  let displayBar =
                    config.legend.behavior === 'highlight' ||
                    seriesHighlight.length === 0 ||
                    seriesHighlight.indexOf(bar.key) !== -1
                  let barHeight = config.barHeight
                  let numbericBarHeight = parseInt(!config.isLollipopChart ? barHeight : lollipopBarWidth)
                  if (isNaN(numbericBarHeight)) {
                    numbericBarHeight = 25
                  }
                  let barY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(scaleVal)
                  let defaultBarWidth = Math.abs(xScale(bar.value) - xScale(scaleVal))
                  const isPositiveBar = bar.value >= 0 && isNumber(bar.value)

                  const MINIMUM_BAR_HEIGHT = 3
                  if (isPositiveBar && barGroup.bars.length === 1 && defaultBarWidth < MINIMUM_BAR_HEIGHT) {
                    defaultBarWidth = MINIMUM_BAR_HEIGHT
                    barY = yScale(0) - MINIMUM_BAR_HEIGHT
                  }

                  const barX = bar.value < 0 ? Math.abs(xScale(bar.value)) : xScale(scaleVal)
                  const yAxisValue = formatNumber(bar.value, 'left')
                  const xAxisValue =
                    config.runtime[section].type === 'date' ? formatDate(parseDate(dataValue)) : dataValue
                  const {
                    barWidthHorizontal: barWidth,
                    isSuppressed,
                    absentDataLabel
                  } = getBarConfig({ bar, defaultBarWidth, config, isVertical: false, yAxisValue, barWidth: 0 })

                  const barPosition = !isPositiveBar ? 'below' : 'above'

                  const barDefaultLabel = !config.yAxis.displayNumbersOnBar || absentDataLabel ? '' : yAxisValue

                  // check if bar text/value string fits into  each bars.
                  const textWidth = getTextWidth(barDefaultLabel)
                  const textFits = Number(textWidth) < defaultBarWidth - 5

                  // control text position
                  let textAnchor = textFits ? 'end' : 'start'
                  let textAnchorLollipop = 'start'
                  let textPadding = textFits ? -5 : 5
                  let textPaddingLollipop = 10
                  //if bars are negative we change positions of text
                  if (barPosition === 'below') {
                    textAnchor = textFits ? 'start' : 'end'
                    textPadding = textFits ? 5 : -5
                    if (config.isLollipopChart) {
                      textAnchorLollipop = 'end'
                      textPaddingLollipop = -10
                    }
                  }

                  // create new Index for bars with negative values
                  const newIndex = bar.value < 0 ? -1 : index

                  let yAxisTooltip = config.runtime.yAxis.label
                    ? `${config.runtime.yAxis.label}: ${xAxisValue}`
                    : xAxisValue
                  const additionalColTooltip = getAdditionalColumn(bar.key, hoveredBar)
                  const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${yAxisValue}`
                  const tooltip = `<ul>
                  <li class="tooltip-heading"">${yAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  <li class="tooltip-body ">${additionalColTooltip}</li>
                    </li></ul>`

                  // configure colors
                  let labelColor = APP_FONT_COLOR
                  labelColor = HighLightedBarUtils.checkFontColor(yAxisValue, highlightedBarValues, labelColor) // Set if background is transparent'
                  let barColor =
                    config.runtime.seriesLabels && config.runtime.seriesLabels[bar.key]
                      ? colorScale(config.runtime.seriesLabels[bar.key])
                      : colorScale(bar.key)
                  const hasDynamicCategory = config.series.find(s => s.dynamicCategory)
                  if (!hasDynamicCategory) {
                    barColor = assignColorsToValues(barGroups.length, barGroup.index, barColor) // Color code by category
                  }
                  const isRegularLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'regular'
                  const isTwoToneLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                  const isHighlightedBar = highlightedBarValues?.includes(xAxisValue)
                  const highlightedBarColor = getHighlightedBarColorByValue(xAxisValue)
                  const highlightedBar = getHighlightedBarByValue(xAxisValue)
                  const borderColor = isHighlightedBar
                    ? highlightedBarColor
                    : config.barHasBorder === 'true'
                    ? APP_FONT_COLOR
                    : 'transparent'
                  const borderWidth = isHighlightedBar
                    ? highlightedBar.borderWidth
                    : config.isLollipopChart
                    ? 0
                    : config.barHasBorder === 'true' && !absentDataLabel && !isSuppressed
                    ? barBorderWidth
                    : 0
                  const displaylollipopShape = testZeroValue(bar.value) ? 'none' : 'block'
                  const hideGroup =
                    (!isNumber(bar.value) && !config.general.showMissingDataLabel) ||
                    (String(bar.value) === '0' && !config.general.showZeroValueData)
                      ? 'none'
                      : 'block' // hide bar group if no value or zero value

                  // update label color
                  if (barColor && labelColor && textFits) {
                    labelColor = getContrastColor(APP_FONT_COLOR, barColor)
                    let constrast = getColorContrast(APP_FONT_COLOR, barColor)
                    const contrastLevel = 7
                    if (constrast < contrastLevel) {
                      labelColor = '#fff'
                    }
                  }
                  const background = () => {
                    if (isRegularLollipopColor) return barColor
                    if (isTwoToneLollipopColor) return chroma(barColor).brighten(1)
                    if (isHighlightedBar) return 'transparent'
                    return barColor
                  }

                  // Confidence Interval Variables
                  const tickWidth = 5
                  const yPos = barHeight * bar.index + barHeight / 2
                  const [upperPos, lowerPos] = ['upper', 'lower'].map(position => {
                    if (!hasConfidenceInterval) return
                    if (datum.dynamicData) {
                      const ci = datum.CI[bar.key]
                      if (!ci) return
                      const d = ci[position]
                      return xScale(d)
                    }
                    const d = datum[config.confidenceKeys[position]]
                    return xScale(d)
                  })

                  // Check if this bar should use a pattern
                  const getPatternUrl = (): string | null => {
                    if (!config.legend.patterns || Object.keys(config.legend.patterns).length === 0) {
                      return null
                    }

                    // Find a pattern that matches this data point
                    for (const [patternKey, pattern] of Object.entries(config.legend.patterns)) {
                      if (pattern.dataKey && pattern.dataValue) {
                        const dataFieldValue = datum[pattern.dataKey]
                        if (String(dataFieldValue) === String(pattern.dataValue)) {
                          return `url(#chart-pattern-${patternKey})`
                        }
                      }
                    }

                    return null
                  }

                  const patternUrl = getPatternUrl()
                  const baseBackground = background()

                  return (
                    <Group display={hideGroup} key={`${barGroup.index}--${index}`}>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        {/* Base colored bar */}
                        {createBarElement({
                          config: config,
                          index: newIndex,
                          id: `barGroup${barGroup.index}`,
                          background: baseBackground,
                          borderColor,
                          borderStyle: 'solid',
                          borderWidth: `${borderWidth}px`,
                          width: barWidth,
                          height: numbericBarHeight,
                          x: barX,
                          y: barHeight * bar.index,
                          onMouseOver: e => onMouseOverBar(xAxisValue, bar.key, e, data),
                          onMouseLeave: onMouseLeaveBar,
                          tooltipHtml: tooltip,
                          tooltipId: `cdc-open-viz-tooltip-${config.runtime.uniqueId}`,
                          onClick: e => {
                            e.preventDefault()
                            if (setSharedFilter) {
                              bar[config.xAxis.dataKey] = yAxisValue
                              setSharedFilter(config.uid, bar)
                            }
                          },
                          styleOverrides: {
                            transformOrigin: `0 ${barY + barHeight}px`,
                            opacity: transparentBar ? 0.2 : 1,
                            display: displayBar ? 'block' : 'none'
                          }
                        })}

                        {/* Pattern overlay if pattern exists */}
                        {patternUrl &&
                          createBarElement({
                            config: config,
                            index: newIndex,
                            background: patternUrl, // Use pattern as background
                            borderColor: 'transparent',
                            borderStyle: 'none',
                            borderWidth: '0px',
                            width: barWidth,
                            height: numbericBarHeight,
                            x: barX,
                            y: barHeight * bar.index,
                            onMouseOver: () => {}, // No interaction
                            onMouseLeave: () => {}, // No interaction
                            tooltipHtml: '',
                            tooltipId: '',
                            onClick: () => {}, // No interaction
                            styleOverrides: {
                              transformOrigin: `0 ${barY + barHeight}px`,
                              opacity: transparentBar ? 0.2 : 1,
                              display: displayBar ? 'block' : 'none',
                              pointerEvents: 'none' // Let clicks pass through to base bar
                            }
                          })}

                        {(absentDataLabel || isSuppressed) && (
                          <rect
                            x={barX}
                            y={0}
                            width={yMax}
                            height={numbericBarHeight}
                            fill='transparent'
                            data-tooltip-place='top'
                            data-tooltip-offset='{"top":3}'
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            data-tooltip-html={tooltip}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          />
                        )}

                        {config.preliminaryData?.map((pd, index) => {
                          // check if user selected column
                          const selectedSuppressionColumn = !pd.column || pd.column === bar.key
                          // compare entered suppressed value with data value
                          const isValueMatch = String(pd.value) === String(bar.value) && pd.value !== ''
                          const isSuppressed = isValueMatch && selectedSuppressionColumn

                          if (!isSuppressed || pd.hideBarSymbol || !config.general.showSuppressedSymbol) {
                            return
                          }

                          const hasAsterisk = String(pd.symbol).includes('Asterisk')
                          const verticalAnchor = hasAsterisk ? 'middle' : 'end'
                          const iconSize =
                            pd.symbol === 'Asterisk'
                              ? barHeight * 1.2
                              : pd.symbol === 'Double Asterisk'
                              ? barHeight
                              : barHeight / 1.5
                          const fillColor = pd.displayGray ? '#8b8b8a' : APP_FONT_COLOR
                          return (
                            <Text // prettier-ignore
                              key={index}
                              fontSize={iconSize}
                              display={displayBar ? 'block' : 'none'}
                              opacity={transparentBar ? 0.5 : 1}
                              x={barX}
                              y={config.barHeight / 2 + config.barHeight * bar.index}
                              fill={fillColor}
                              dy={config.barHeight / 5}
                              dx={10}
                              textAnchor='start'
                              verticalAnchor={verticalAnchor}
                            >
                              {pd.iconCode}
                            </Text>
                          )
                        })}

                        {!config.isLollipopChart && !hasConfidenceInterval && (
                          <Text // prettier-ignore
                            display={displayBar ? 'block' : 'none'}
                            x={bar.y}
                            opacity={transparentBar ? 0.5 : 1}
                            y={config.barHeight / 2 + config.barHeight * bar.index}
                            fill={labelColor}
                            dx={textPadding}
                            verticalAnchor='middle'
                            textAnchor={textAnchor}
                          >
                            {testZeroValue(bar.value) ? '' : barDefaultLabel}
                          </Text>
                        )}

                        {!config.isLollipopChart && hasConfidenceInterval && (
                          <Text // prettier-ignore
                            display={displayBar ? 'block' : 'none'}
                            x={bar.value < 0 ? bar.y + barWidth : bar.y - barWidth}
                            opacity={transparentBar ? 0.5 : 1}
                            y={config.barHeight / 2 + config.barHeight * bar.index}
                            fill={labelColor}
                            dx={-textPadding}
                            verticalAnchor='middle'
                            textAnchor={bar.value < 0 ? 'end' : 'start'}
                          >
                            {testZeroValue(bar.value) ? '' : barDefaultLabel}
                          </Text>
                        )}
                        <Text // prettier-ignore
                          display={displayBar ? 'block' : 'none'}
                          x={bar.y}
                          opacity={transparentBar ? 0.5 : 1}
                          y={config.barHeight / 2 + config.barHeight * bar.index}
                          fill={labelColor}
                          dx={absentDataLabel === 'N/A' ? 20 : textPadding}
                          dy={config.isLollipopChart ? -10 : 0}
                          verticalAnchor='middle'
                          textAnchor={absentDataLabel === 'N/A' ? 'middle' : textAnchor}
                        >
                          {absentDataLabel}
                        </Text>

                        {config.isLollipopChart && (
                          <Text // prettier-ignore
                            display={displayBar ? 'block' : 'none'}
                            x={bar.y}
                            y={0}
                            fill={APP_FONT_COLOR}
                            dx={textPaddingLollipop}
                            textAnchor={textAnchorLollipop}
                            verticalAnchor='middle'
                            fontWeight={'normal'}
                          >
                            {testZeroValue(bar.value) ? '' : barDefaultLabel}
                          </Text>
                        )}
                        {isLabelBelowBar && !config.yAxis.hideLabel && (
                          <Text
                            x={config.yAxis.hideAxis ? 0 : 5}
                            y={barGroup.height}
                            dy={4}
                            verticalAnchor={'start'}
                            textAnchor={'start'}
                          >
                            {config.runtime.yAxis.type === 'date'
                              ? formatDate(parseDate(dataValue))
                              : isHorizontal
                              ? dataValue
                              : formatNumber(dataValue)}
                          </Text>
                        )}

                        {config.isLollipopChart && config.lollipopShape === 'circle' && (
                          <circle
                            display={displaylollipopShape}
                            cx={bar.y}
                            cy={barHeight * bar.index + lollipopBarWidth / 2}
                            r={lollipopShapeSize / 2}
                            fill={barColor}
                            key={`circle--${bar.index}`}
                            data-tooltip-html={tooltip}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                            style={{ filter: 'unset', opacity: 1 }}
                          />
                        )}
                        {config.isLollipopChart && config.lollipopShape === 'square' && (
                          <rect
                            display={displaylollipopShape}
                            x={bar.y > 10 ? bar.y - lollipopShapeSize / 2 : 0}
                            y={0 - lollipopBarWidth / 2}
                            width={lollipopShapeSize}
                            height={lollipopShapeSize}
                            fill={barColor}
                            key={`circle--${bar.index}`}
                            data-tooltip-html={tooltip}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                            style={{ opacity: 1, filter: 'unset' }}
                          >
                            <animate attributeName='height' values={`0, ${lollipopShapeSize}`} dur='2.5s' />
                          </rect>
                        )}
                        {hasConfidenceInterval && displayBar && (
                          <path
                            key={`confidence-interval-h-${yPos}-${datum[config.runtime.originalXAxis.dataKey]}`}
                            stroke={APP_FONT_COLOR}
                            strokeWidth='px'
                            d={`
                                M${lowerPos} ${yPos - tickWidth}
                                L${lowerPos} ${yPos + tickWidth}
                                M${lowerPos} ${yPos}
                                L${upperPos} ${yPos}
                                M${upperPos} ${yPos - tickWidth}
                                L${upperPos} ${yPos + tickWidth} `}
                          />
                        )}
                      </Group>
                    </Group>
                  )
                })}
              </Group>
            ))
          }}
        </BarGroup>
      </Group>
    )
  )
}
export default BarChartHorizontal
