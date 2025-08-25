import React, { useContext, useState } from 'react'
// Local contexts
import ConfigContext from '../../../ConfigContext'
import BarChartContext, { type BarChartContextValues } from './context'
// Local hooks
import { useHighlightedBars } from '../../../hooks/useHighlightedBars'
import { getBarConfig, testZeroValue } from '../helpers'
// VisX library imports
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
// Local components
import Regions from '../../Regions'
// CDC core components and helpers
import { isDateScale } from '@cdc/core/helpers/cove/date'
import isNumber from '@cdc/core/helpers/isNumber'
import createBarElement from '@cdc/core/components/createBarElement'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import { isMobileFontViewport } from '@cdc/core/helpers/viewports'
// Third party libraries
import chroma from 'chroma-js'
// Types
import { type ChartContext } from '../../../types/ChartContext'
import _ from 'lodash'
import { getBarData } from '../helpers/getBarData'

export const BarChartVertical = () => {
  const { xScale, yScale, xMax, yMax, seriesScale, convertLineToBarGraph, barChart } =
    useContext<BarChartContextValues>(BarChartContext)
  const {
    assignColorsToValues,
    barBorderWidth,
    getAdditionalColumn,
    getHighlightedBarByValue,
    getHighlightedBarColorByValue,
    lollipopBarWidth,
    lollipopShapeSize,
    onMouseLeaveBar,
    onMouseOverBar,
    section
  } = barChart

  const [barWidth, setBarWidth] = useState(0)
  const [totalBarsInGroup, setTotalBarsInGroup] = useState(0)

  const {
    colorScale,
    config,
    currentViewport,
    dashboardConfig,
    tableData,
    formatDate,
    formatNumber,
    parseDate,
    seriesHighlight,
    setSharedFilter,
    transformedData
  } = useContext<ChartContext>(ConfigContext)

  const { HighLightedBarUtils } = useHighlightedBars(config)

  const root = document.documentElement

  let data = transformedData
  // check if user add suppression
  const isSuppressionActive = config.preliminaryData.some(pd => pd.value && pd.type === 'suppression')
  // if suppression active use table data (filtere | excluded) but non cleaned
  if (isSuppressionActive) {
    data = tableData
  }

  const hasConfidenceInterval =
    config.confidenceKeys.upper &&
    config.confidenceKeys.lower &&
    config.confidenceKeys.upper !== '' &&
    config.confidenceKeys.lower !== ''

  const _data = getBarData(config, data, hasConfidenceInterval)

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
    config.visualizationSubType !== 'stacked' &&
    (config.visualizationType === 'Bar' || config.visualizationType === 'Combo' || convertLineToBarGraph) &&
    config.orientation === 'vertical' && (
      <Group>
        {renderPatternDefs()}
        <BarGroup
          data={_data}
          keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
          height={yMax}
          x0={d => {
            const rawXValue = d[config.runtime.originalXAxis.dataKey]
            return isDateScale(config.runtime.xAxis) ? parseDate(rawXValue) : rawXValue
          }}
          x0Scale={xScale}
          x1Scale={seriesScale}
          yScale={yScale}
          color={() => {
            return ''
          }}
        >
          {barGroups => {
            return barGroups.map((barGroup, _index) => (
              <Group
                className={`bar-group-${barGroup.index}-${barGroup.x0}--${_index} ${config.orientation}`}
                key={`bar-group-${barGroup.index}-${barGroup.x0}--${_index}`}
                id={`bar-group-${barGroup.index}-${barGroup.x0}--${_index}`}
                left={barGroup.x0}
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
                  const transparentBar =
                    config.legend.behavior === 'highlight' &&
                    seriesHighlight.length > 0 &&
                    seriesHighlight.indexOf(bar.key) === -1
                  const displayBar =
                    config.legend.behavior === 'highlight' ||
                    seriesHighlight.length === 0 ||
                    seriesHighlight.indexOf(bar.key) !== -1

                  let barGroupWidth = seriesScale.range()[1] - seriesScale.range()[0]
                  let defaultBarHeight = Math.abs(yScale(bar.value) - yScale(scaleVal))
                  let defaultBarY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)

                  const MINIMUM_BAR_HEIGHT = 3
                  if (
                    bar.value >= 0 &&
                    isNumber(bar.value) &&
                    barGroup.bars.length === 1 &&
                    defaultBarHeight < MINIMUM_BAR_HEIGHT
                  ) {
                    defaultBarHeight = MINIMUM_BAR_HEIGHT
                    defaultBarY = yScale(0) - MINIMUM_BAR_HEIGHT
                  }

                  let barWidth = config.isLollipopChart ? lollipopBarWidth : seriesScale.bandwidth()
                  let barX =
                    bar.x +
                    (config.isLollipopChart ? (barGroupWidth / barGroup.bars.length - lollipopBarWidth) / 2 : 0) -
                    (config.xAxis.type === 'date-time' ? barGroupWidth / 2 : 0)
                  setBarWidth(barWidth)
                  setTotalBarsInGroup(barGroup.bars.length)
                  const yAxisValue = formatNumber(/[a-zA-Z]/.test(String(bar.value)) ? '' : bar.value, 'left')
                  const xAxisValue =
                    config.runtime[section].type === 'date' ? formatDate(parseDate(dataValue)) : dataValue

                  // create new Index for bars with negative values
                  const newIndex = bar.value < 0 ? -1 : index
                  // tooltips
                  const additionalColTooltip = getAdditionalColumn(bar.key, dataValue)
                  let xAxisTooltip = config.runtime.xAxis.label
                    ? `${config.runtime.xAxis.label}: ${xAxisValue}`
                    : xAxisValue
                  const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${yAxisValue}`

                  const tooltip = `<ul>
                  <li class="tooltip-heading">${xAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  ${additionalColTooltip ? '<li class="tooltip-body ">' + additionalColTooltip + '</li>' : ''}
                    </li></ul>`
                  const { barHeight, isSuppressed, getBarY, absentDataLabel } = getBarConfig({
                    bar,
                    defaultBarHeight,
                    config,
                    barWidth,
                    isVertical: true,
                    yAxisValue
                  })
                  // configure colors
                  let labelColor = APP_FONT_COLOR
                  labelColor = HighLightedBarUtils.checkFontColor(yAxisValue, highlightedBarValues, labelColor) // Set if background is transparent'
                  const isRegularLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'regular'
                  const isTwoToneLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                  const isHighlightedBar = highlightedBarValues?.includes(xAxisValue)
                  const highlightedBarColor = getHighlightedBarColorByValue(xAxisValue)
                  const highlightedBar = getHighlightedBarByValue(xAxisValue)
                  const hideGroup =
                    (!isNumber(bar.value) && !config.general.showMissingDataLabel) ||
                    (String(bar.value) === '0' && !config.general.showZeroValueData)
                      ? 'none'
                      : 'block' // hide bar group if no value or zero value

                  const borderColor = isHighlightedBar
                    ? highlightedBarColor
                    : config.barHasBorder === 'true'
                    ? '#000'
                    : 'transparent'
                  const borderWidth = isHighlightedBar
                    ? highlightedBar.borderWidth
                    : config.isLollipopChart
                    ? 0
                    : config.barHasBorder === 'true' && !absentDataLabel && !isSuppressed
                    ? barBorderWidth
                    : 0

                  const barDefaultLabel = isSuppressed || absentDataLabel || !config.labels ? '' : yAxisValue
                  const barY = getBarY(defaultBarY, yScale(scaleVal))
                  const displaylollipopShape = testZeroValue(bar.value) ? 'none' : 'block'
                  const getBarBackgroundColor = (barColor: string, filteredOutColor?: string): string => {
                    let _barColor = barColor
                    let _filteredOutColor = filteredOutColor || '#f2f2f2'

                    /**
                     * If this is a dashboard using a setBy column on the bars
                     * color the bar that is using the filter with barColor and
                     * color the filteredOut (typically gray) bars with the filteredOutColor
                     */
                    if (dashboardConfig && dashboardConfig.dashboard.sharedFilters?.length !== 0) {
                      const { sharedFilters } = dashboardConfig.dashboard

                      _barColor = sharedFilters
                        ? sharedFilters.map(_sharedFilter => {
                            if (_sharedFilter.setBy === config.uid) {
                              // If the current filter is the reset filter item.
                              if (_sharedFilter.resetLabel === _sharedFilter.active)
                                return colorScale(config.runtime.seriesLabels[bar.key])
                              // If the current filter is the bars
                              if (_sharedFilter.active === transformedData[barGroup.index][config.xAxis.dataKey])
                                return colorScale(config.runtime.seriesLabels[bar.key])
                              return _filteredOutColor
                            } else {
                              // If the setBy isn't the config.uid return the original barColor
                              return colorScale(config.runtime.seriesLabels[bar.key])
                            }
                          })[0]
                        : colorScale(config.runtime.seriesLabels[bar.key])

                      if (isRegularLollipopColor) _barColor = barColor

                      if (isHighlightedBar) _barColor = 'transparent'
                      if (config.legend.colorCode)
                        _barColor = assignColorsToValues(barGroups.length, barGroup.index, barColor)
                      if (isTwoToneLollipopColor) _barColor = chroma(barColor).brighten(1)
                      return _barColor
                    }

                    // if this is a two tone lollipop slightly lighten the bar.
                    if (isTwoToneLollipopColor) _barColor = chroma(barColor).brighten(1)
                    if (config.legend.colorCode)
                      _barColor = assignColorsToValues(barGroups.length, barGroup.index, barColor)

                    // if we're highlighting a bar make it invisible since it gets a border
                    if (isHighlightedBar) _barColor = 'transparent'
                    return _barColor
                  }

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
                  const baseBackground = getBarBackgroundColor(colorScale(config.runtime.seriesLabels[bar.key]))

                  // Confidence Interval Variables
                  const tickWidth = 5
                  const xPos = barX + (config.xAxis.type !== 'date-time' ? barWidth / 2 : 0)

                  const upperPos = yScale(
                    datum.dynamicData && datum?.CI?.[bar.key]
                      ? datum.CI[bar.key].upper
                      : datum[config.confidenceKeys.upper]
                  )
                  const lowerPos = yScale(
                    datum.dynamicData && datum?.CI?.[bar.key]
                      ? datum.CI[bar.key].lower
                      : datum[config.confidenceKeys.lower]
                  )
                  // End Confidence Interval Variables

                  const BAR_LABEL_PADDING = 10

                  const LABEL_FONT_SIZE = isMobileFontViewport(currentViewport) ? 13 : 16

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
                          height: barHeight,
                          x: barX,
                          y: barY,
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
                            transformOrigin: `0 ${barY + barHeight}px`,
                            opacity: transparentBar ? 0.2 : 1,
                            display: displayBar ? 'block' : 'none',
                            cursor: dashboardConfig ? 'pointer' : 'default'
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
                            height: barHeight,
                            x: barX,
                            y: barY,
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
                            width={barWidth}
                            height={yMax}
                            fill='transparent'
                            data-tooltip-place='top'
                            data-tooltip-offset='{"top":3}'
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            data-tooltip-html={tooltip}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          />
                        )}

                        {config.preliminaryData.map((pd, index) => {
                          // check if user selected column
                          const selectedSuppressionColumn = !pd.column || pd.column === bar.key
                          // compare entered suppressed value with data value
                          const isValueMatch = String(pd.value) === String(bar.value) && pd.value !== ''
                          const isSuppressed = isValueMatch && selectedSuppressionColumn

                          if (
                            !isSuppressed ||
                            barWidth < 10 ||
                            !config.general.showSuppressedSymbol ||
                            pd.hideBarSymbol
                          ) {
                            return
                          }
                          const hasAsterisk = String(pd.symbol).includes('Asterisk')
                          const yPadding = hasAsterisk ? -5 : -8
                          const verticalAnchor = hasAsterisk ? 'middle' : 'end'
                          const iconSize =
                            pd.symbol === 'Asterisk'
                              ? barWidth * 1.2
                              : pd.symbol === 'Double Asterisk'
                              ? barWidth
                              : barWidth / 1.5
                          const fillColor = pd.displayGray ? '#8b8b8a' : '#000'

                          return (
                            <Text // prettier-ignore
                              key={index}
                              dy={yPadding}
                              display={displayBar ? 'block' : 'none'}
                              opacity={transparentBar ? 0.5 : 1}
                              x={barX + barWidth / 2}
                              y={barY}
                              verticalAnchor={verticalAnchor}
                              fill={fillColor}
                              textAnchor='middle'
                              fontSize={`${iconSize}px`}
                            >
                              {pd.iconCode}
                            </Text>
                          )
                        })}
                        <Text // prettier-ignore
                          display={displayBar ? 'block' : 'none'}
                          opacity={transparentBar ? 0.5 : 1}
                          x={hasConfidenceInterval ? barX + barWidth : barX + barWidth / 2}
                          y={barY - BAR_LABEL_PADDING}
                          fill={labelColor}
                          textAnchor='middle'
                          fontSize={LABEL_FONT_SIZE}
                        >
                          {testZeroValue(bar.value) ? '' : barDefaultLabel}
                        </Text>
                        <Text // prettier-ignore
                          display={displayBar ? 'block' : 'none'}
                          opacity={transparentBar ? 0.5 : 1}
                          x={barX + barWidth / 2}
                          y={barY - BAR_LABEL_PADDING}
                          fill={labelColor}
                          textAnchor='middle'
                          fontSize={config.isLollipopChart ? null : LABEL_FONT_SIZE}
                        >
                          {absentDataLabel}
                        </Text>
                        {config.isLollipopChart && config.lollipopShape === 'circle' && (
                          <circle
                            display={displaylollipopShape}
                            cx={barX + lollipopShapeSize / 3.5}
                            cy={bar.y}
                            r={lollipopShapeSize / 2}
                            fill={getBarBackgroundColor(colorScale(config.runtime.seriesLabels[bar.key]))}
                            key={`circle--${bar.index}`}
                            data-tooltip-html={tooltip}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                            style={{ filter: 'unset', opacity: 1 }}
                          />
                        )}
                        {config.isLollipopChart && config.lollipopShape === 'square' && (
                          <rect
                            display={displaylollipopShape}
                            x={barX - lollipopBarWidth / 2}
                            y={bar.y}
                            width={lollipopShapeSize}
                            height={lollipopShapeSize}
                            fill={getBarBackgroundColor(colorScale(config.runtime.seriesLabels[bar.key]))}
                            key={`circle--${bar.index}`}
                            data-tooltip-html={tooltip}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                            style={{ opacity: 1, filter: 'unset' }}
                          >
                            <animate attributeName='height' values={`0, ${lollipopShapeSize}`} dur='2.5s' />
                          </rect>
                        )}
                        {hasConfidenceInterval && bar.value !== undefined && datum && (
                          <path
                            key={`confidence-interval-v-${datum[config.runtime.originalXAxis.dataKey]}`}
                            stroke={APP_FONT_COLOR}
                            strokeWidth='px'
                            d={`M${xPos - tickWidth} ${upperPos}
                                L${xPos + tickWidth} ${upperPos}
                                M${xPos} ${upperPos}
                                L${xPos} ${lowerPos}
                                M${xPos - tickWidth} ${lowerPos}
                                L${xPos + tickWidth} ${lowerPos}`}
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

        <Regions xScale={xScale} yMax={yMax} barWidth={barWidth} totalBarsInGroup={totalBarsInGroup} />
      </Group>
    )
  )
}
export default BarChartVertical
