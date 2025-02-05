import React, { useContext } from 'react'

// Local context and hooks
import ConfigContext from '../../../ConfigContext'
import { useBarChart } from '../../../hooks/useBarChart'
import { useHighlightedBars } from '../../../hooks/useHighlightedBars'

// VisX library imports
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'

// CDC core components and helpers
import { getColorContrast, getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import createBarElement from '@cdc/core/components/createBarElement'
import { getBarConfig, testZeroValue } from '../helpers'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'

// Third party libraries
import chroma from 'chroma-js'

// Local context and types
import BarChartContext, { BarChartContextValues } from './context'
import { ChartContext } from '../../../types/ChartContext'
import _ from 'lodash'
import { getBarData } from '../helpers/getBarData'

export const BarChartHorizontal = () => {
  const { xScale, yScale, yMax, seriesScale } = useContext<BarChartContextValues>(BarChartContext)
  const {
    transformedData: data,
    tableData,
    colorScale,
    seriesHighlight,
    config,
    formatNumber,
    formatDate,
    parseDate,
    setSharedFilter,
    isNumber
  } = useContext<ChartContext>(ConfigContext)
  const {
    isHorizontal,
    barBorderWidth,
    updateBars,
    assignColorsToValues,
    section,
    isLabelBelowBar,
    displayNumbersOnBar,
    lollipopBarWidth,
    lollipopShapeSize,
    getHighlightedBarColorByValue,
    getHighlightedBarByValue,
    getAdditionalColumn,
    hoveredBar,
    onMouseLeaveBar,
    onMouseOverBar
  } = useBarChart()

  const { HighLightedBarUtils } = useHighlightedBars(config)

  const hasConfidenceInterval = Object.keys(config.confidenceKeys).length > 0

  const _data = getBarData(config, data, hasConfidenceInterval)

  const root = document.documentElement

  const coolGray90 = getComputedStyle(root).getPropertyValue('--cool-gray-90')

  return (
    config.visualizationSubType !== 'stacked' &&
    config.visualizationType === 'Bar' &&
    config.orientation === 'horizontal' && (
      <Group>
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
            return updateBars(barGroups).map((barGroup, index) => (
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
                  const defaultBarWidth = Math.abs(xScale(bar.value) - xScale(scaleVal))
                  const isPositiveBar = bar.value >= 0 && isNumber(bar.value)

                  const {
                    barWidthHorizontal: barWidth,
                    isSuppressed,
                    getAbsentDataLabel
                  } = getBarConfig({ bar, defaultBarWidth, config, isNumber, isVertical: false })
                  const barX = bar.value < 0 ? Math.abs(xScale(bar.value)) : xScale(scaleVal)
                  const yAxisValue = formatNumber(bar.value, 'left')
                  const xAxisValue =
                    config.runtime[section].type === 'date' ? formatDate(parseDate(dataValue)) : dataValue

                  const barPosition = !isPositiveBar ? 'below' : 'above'
                  const absentDataLabel = getAbsentDataLabel(yAxisValue)
                  const barDefaultLabel = !config.yAxis.displayNumbersOnBar ? '' : yAxisValue

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
                  const additionalColTooltip = getAdditionalColumn(hoveredBar)
                  const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${yAxisValue}`
                  const tooltip = `<ul>
                  <li class="tooltip-heading"">${yAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  <li class="tooltip-body ">${additionalColTooltip}</li>
                    </li></ul>`

                  // configure colors
                  let labelColor = '#000000'
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
                    ? '#000'
                    : 'transparent'
                  const borderWidth = isHighlightedBar
                    ? highlightedBar.borderWidth
                    : config.isLollipopChart
                    ? 0
                    : config.barHasBorder === 'true'
                    ? barBorderWidth
                    : 0
                  const displaylollipopShape = testZeroValue(bar.value) ? 'none' : 'block'

                  // update label color
                  if (barColor && labelColor && textFits) {
                    labelColor = getContrastColor('#000', barColor)
                    let constrast = getColorContrast('#000', barColor)
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
                  // End Confidence Interval Variables

                  return (
                    <Group key={`${barGroup.index}--${index}`}>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        {createBarElement({
                          config: config,
                          index: newIndex,
                          id: `barGroup${barGroup.index}`,
                          background: background(),
                          borderColor,
                          borderStyle: 'solid',
                          borderWidth: `${borderWidth}px`,
                          width: barWidth,
                          height: numbericBarHeight,
                          x: barX,
                          y: barHeight * bar.index,
                          onMouseOver: () => onMouseOverBar(xAxisValue, bar.key),
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
                          const fillColor = pd.displayGray ? '#8b8b8a' : '#000'
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

                        {!config.isLollipopChart && (
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
                            fill={'#000000'}
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
                        {hasConfidenceInterval && (
                          <path
                            key={`confidence-interval-h-${yPos}-${datum[config.runtime.originalXAxis.dataKey]}`}
                            stroke={coolGray90}
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
