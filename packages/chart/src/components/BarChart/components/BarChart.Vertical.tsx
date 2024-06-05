import React, { useContext, useState } from 'react'
// Local contexts
import ConfigContext from '../../../ConfigContext'
import BarChartContext, { type BarChartContextValues } from './context'
// Local hooks
import { useBarChart } from '../../../hooks/useBarChart'
import { useHighlightedBars } from '../../../hooks/useHighlightedBars'
import { getBarY, getBarDimensions } from '../helpers'
import { isConvertLineToBarGraph } from '../../../helpers/isConvertLineToBarGraph'
// VisX library imports
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
// Local components
import Regions from '../../Regions'
// CDC core components and helpers
import { isDateScale } from '@cdc/core/helpers/cove/date'
import createBarElement from '@cdc/core/components/createBarElement'
// Third party libraries
import chroma from 'chroma-js'
// Types
import { type ChartContext } from '../../../types/ChartContext'

export const BarChartVertical = () => {
  const { xScale, yScale, xMax, yMax, seriesScale } = useContext<BarChartContextValues>(BarChartContext)

  const [barWidth, setBarWidth] = useState(0)
  const [totalBarsInGroup, setTotalBarsInGroup] = useState(0)
  // prettier-ignore
  const { assignColorsToValues, barBorderWidth, getAdditionalColumn, getHighlightedBarByValue, getHighlightedBarColorByValue, lollipopBarWidth, lollipopShapeSize, onMouseLeaveBar, onMouseOverBar, section, composeSuppressionBars,  fontSize } = useBarChart()

  // prettier-ignore
  const { colorScale, config, dashboardConfig, tableData, formatDate, formatNumber, getXAxisData, getYAxisData, isNumber, parseDate, seriesHighlight, setSharedFilter, transformedData, brushConfig, getTextWidth } = useContext<ChartContext>(ConfigContext)
  const { HighLightedBarUtils } = useHighlightedBars(config)
  let data = transformedData
  // check if user add suppression
  const isSuppressionActive = config.preliminaryData.some(pd => pd.value && pd.type === 'suppression')
  // if suppression active use table data (filtere | excluded) but non cleaned
  if (isSuppressionActive) {
    data = tableData
  }
  // if brush active use brush data (filtered|excluded) not cleaned
  if (brushConfig.data.length) {
    data = brushConfig.data
  }

  return (
    config.visualizationSubType !== 'stacked' &&
    (config.visualizationType === 'Bar' || config.visualizationType === 'Combo' || isConvertLineToBarGraph(config.visualizationType, data, config.allowLineToBarGraph)) &&
    config.orientation === 'vertical' && (
      <Group>
        <BarGroup
          data={data}
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
            return barGroups.map((barGroup, index) => (
              <Group className={`bar-group-${barGroup.index}-${barGroup.x0}--${index} ${config.orientation}`} key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} id={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} left={barGroup.x0}>
                {barGroup.bars.map((bar, index) => {
                  const { suppressedBarHeight, getIconSize, getIconPadding, getVerticalAnchor, isSuppressed } = composeSuppressionBars({ bar })
                  const scaleVal = config.useLogScale ? 0.1 : 0
                  const showMissingDataLabel = config.general.showMissingDataLabel && !bar.value
                  let highlightedBarValues = config.highlightedBarValues.map(item => item.value).filter(item => item !== ('' || undefined))
                  highlightedBarValues = config.xAxis.type === 'date' ? HighLightedBarUtils.formatDates(highlightedBarValues) : highlightedBarValues
                  const transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  const displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1

                  let barGroupWidth = seriesScale.range()[1]
                  const defaultBarHeight = Math.abs(yScale(bar.value) - yScale(scaleVal))
                  let barWidth = config.isLollipopChart ? lollipopBarWidth : barGroupWidth / barGroup.bars.length
                  let barX = bar.x + (config.isLollipopChart ? (barGroupWidth / barGroup.bars.length - lollipopBarWidth) / 2 : 0) - (config.xAxis.type === 'date-time' ? barGroupWidth / 2 : 0)
                  setBarWidth(barWidth)
                  setTotalBarsInGroup(barGroup.bars.length)
                  const yAxisValue = formatNumber(/[a-zA-Z]/.test(String(bar.value)) ? '' : bar.value, 'left')
                  const xAxisValue = config.runtime[section].type === 'date' ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey])) : data[barGroup.index][config.runtime.originalXAxis.dataKey]
                  const barY = getBarY({ bar, yScale, isSuppressed, scaleVal, showMissingDataLabel, isNumber, suppressedBarHeight })
                  // create new Index for bars with negative values
                  const newIndex = bar.value < 0 ? -1 : index
                  // tooltips

                  const additionalColTooltip = getAdditionalColumn(bar.key, data[barGroup.index][config.runtime.originalXAxis.dataKey])
                  let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                  const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${yAxisValue}`

                  const tooltip = `<ul>
                  <li class="tooltip-heading">${xAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  ${additionalColTooltip ? '<li class="tooltip-body ">' + additionalColTooltip + '</li>' : ''}
                    </li></ul>`

                  // configure colors
                  let labelColor = '#000000'
                  labelColor = HighLightedBarUtils.checkFontColor(yAxisValue, highlightedBarValues, labelColor) // Set if background is transparent'
                  let barColor = config.runtime.seriesLabels && config.runtime.seriesLabels[bar.key] ? colorScale(config.runtime.seriesLabels[bar.key]) : colorScale(bar.key)
                  barColor = assignColorsToValues(barGroups.length, barGroup.index, barColor) // Color code by category
                  const isRegularLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'regular'
                  const isTwoToneLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                  const isHighlightedBar = highlightedBarValues?.includes(xAxisValue)
                  const highlightedBarColor = getHighlightedBarColorByValue(xAxisValue)
                  const highlightedBar = getHighlightedBarByValue(xAxisValue)
                  const borderColor = isHighlightedBar ? highlightedBarColor : config.barHasBorder === 'true' ? '#000' : 'transparent'
                  const borderWidth = isHighlightedBar ? highlightedBar.borderWidth : config.isLollipopChart ? 0 : config.barHasBorder === 'true' ? barBorderWidth : 0
                  const barLabel = isSuppressed ? '' : yAxisValue
                  const { barHeight } = getBarDimensions({ isSuppressed, showMissingDataLabel, defaultBarHeight, suppressedBarHeight })
                  const missingDataLabel = showMissingDataLabel ? 'N/A' : ''
                  let missingDataFontSize = barWidth / 2
                  let textWidth = getTextWidth(missingDataLabel, `normal ${missingDataFontSize}px sans-serif`)
                  const textFitstobar = textWidth < barWidth

                  const displaylollipopShape = isSuppressed ? 'none' : 'block'
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
                              if (_sharedFilter.resetLabel === _sharedFilter.active) return colorScale(config.runtime.seriesLabels[bar.key])
                              // If the current filter is the bars
                              if (_sharedFilter.active === transformedData[barGroup.index][config.xAxis.dataKey]) return colorScale(config.runtime.seriesLabels[bar.key])
                              return _filteredOutColor
                            } else {
                              // If the setBy isn't the config.uid return the original barColor
                              return colorScale(config.runtime.seriesLabels[bar.key])
                            }
                          })[0]
                        : colorScale(config.runtime.seriesLabels[bar.key])

                      if (isRegularLollipopColor) _barColor = barColor
                      if (isTwoToneLollipopColor) _barColor = chroma(barColor).brighten(1)
                      if (isHighlightedBar) _barColor = 'transparent'
                      return _barColor
                    }

                    // if this is a two tone lollipop slightly lighten the bar.
                    if (isTwoToneLollipopColor) _barColor = chroma(barColor).brighten(1)

                    // if we're highlighting a bar make it invisible since it gets a border
                    if (isHighlightedBar) _barColor = 'transparent'
                    return _barColor
                  }

                  return (
                    <Group key={`${barGroup.index}--${index}`}>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        {createBarElement({
                          config: config,
                          index: newIndex,
                          id: `barGroup${barGroup.index}`,
                          background: getBarBackgroundColor(colorScale(config.runtime.seriesLabels[bar.key])),
                          borderColor,
                          borderStyle: 'solid',
                          borderWidth: `${borderWidth}px`,
                          width: barWidth,
                          height: barHeight,
                          x: barX,
                          y: barY,
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
                            transformOrigin: `0 ${barY + barHeight}px`,
                            opacity: transparentBar ? 0.2 : 1,
                            display: displayBar ? 'block' : 'none',
                            cursor: dashboardConfig ? 'pointer' : 'default'
                          }
                        })}
                        {config.preliminaryData.map((pd, index) => {
                          // check if user selected column
                          const selectedSuppressionColumn = !pd.column || pd.column === bar.key
                          // compare entered suppressed value with data value
                          const isValueMatch = String(pd.value) === String(bar.value) && pd.value !== ''
                          let isSuppressed = isValueMatch && selectedSuppressionColumn

                          if (!isSuppressed || barWidth < 10 || !config.general.showSuppressedSymbol) {
                            return
                          }

                          return (
                            <Text // prettier-ignore
                              key={index}
                              dy={getIconPadding(pd.symbol)}
                              display={displayBar ? 'block' : 'none'}
                              opacity={transparentBar ? 0.5 : 1}
                              x={barX + barWidth / 2}
                              y={barY}
                              verticalAnchor={getVerticalAnchor(pd.symbol)}
                              fill={labelColor}
                              textAnchor='middle'
                              fontSize={`${getIconSize(pd.symbol, barWidth)}px`}
                            >
                              {pd.iconCode}
                            </Text>
                          )
                        })}

                        <Text // prettier-ignore
                          display={config.labels && displayBar ? 'block' : 'none'}
                          opacity={transparentBar ? 0.5 : 1}
                          x={barX + barWidth / 2}
                          y={barY - 5}
                          fill={labelColor}
                          textAnchor='middle'
                        >
                          {barLabel}
                        </Text>
                        <Text // prettier-ignore
                          display={textFitstobar ? 'block' : 'none'}
                          opacity={transparentBar ? 0.5 : 1}
                          x={barX + barWidth / 2}
                          y={barY - 5}
                          fontSize={missingDataFontSize}
                          fill={labelColor}
                          textAnchor='middle'
                        >
                          {missingDataLabel}
                        </Text>

                        {config.isLollipopChart && config.lollipopShape === 'circle' && (
                          <circle
                            display={displaylollipopShape}
                            cx={barX + lollipopShapeSize / 3.5}
                            cy={bar.y}
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
                            x={barX - lollipopBarWidth / 2}
                            y={barY}
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
                      </Group>
                    </Group>
                  )
                })}
              </Group>
            ))
          }}
        </BarGroup>

        {Object.keys(config.confidenceKeys).length > 0
          ? data.map(d => {
              let xPos, yPos
              let upperPos
              let lowerPos
              let tickWidth = 5
              xPos = xScale(getXAxisData(d)) + (config.xAxis.type !== 'date' || config.xAxis.type !== 'date-time' ? seriesScale.range()[1] / 2 : 0)
              upperPos = yScale(getYAxisData(d, config.confidenceKeys.lower))
              lowerPos = yScale(getYAxisData(d, config.confidenceKeys.upper))
              return (
                <path
                  key={`confidence-interval-v-${yPos}-${d[config.runtime.originalXAxis.dataKey]}`}
                  stroke='#333'
                  strokeWidth='px'
                  d={`
                    M${xPos - tickWidth} ${upperPos}
                    L${xPos + tickWidth} ${upperPos}
                    M${xPos} ${upperPos}
                    L${xPos} ${lowerPos}
                    M${xPos - tickWidth} ${lowerPos}
                    L${xPos + tickWidth} ${lowerPos}`}
                />
              )
            })
          : ''}

        <Regions xScale={xScale} yMax={yMax} barWidth={barWidth} totalBarsInGroup={totalBarsInGroup} />
      </Group>
    )
  )
}
export default BarChartVertical
