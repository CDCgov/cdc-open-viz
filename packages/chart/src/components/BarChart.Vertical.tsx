import React, { useContext, useState } from 'react'
import ConfigContext from '../ConfigContext'
import { useBarChart } from '../hooks/useBarChart'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
import { useHighlightedBars } from '../hooks/useHighlightedBars'
import { FaStar } from 'react-icons/fa'

// third party
import chroma from 'chroma-js'

import { type BarChartProps } from '../types/ChartProps'

export const BarChartVertical = (props: BarChartProps) => {
  const { xScale, yScale, xMax, yMax, seriesScale } = props

  const { barBorderWidth, hasMultipleSeries, applyRadius, updateBars, assignColorsToValues, section, lollipopBarWidth, lollipopShapeSize, getHighlightedBarColorByValue, getHighlightedBarByValue, generateIconSize, getAdditionalColumn, hoveredBar, onMouseOverBar, onMouseLeaveBar } = useBarChart()

  // CONTEXT VALUES
  // prettier-ignore
  const { colorScale, config, formatDate, formatNumber, getXAxisData, getYAxisData, isNumber, parseDate, seriesHighlight, setSharedFilter, transformedData, dashboardConfig, setSeriesHighlight } = useContext(ConfigContext)

  const { HighLightedBarUtils } = useHighlightedBars(config)
  const data = config.brush.active && config.brush.data?.length ? config.brush.data : transformedData

  const getIcon = (bar, barWidth) => {
    let icon = null
    const iconSize = generateIconSize(barWidth)
    config.suppressedData?.forEach(d => {
      if (bar.key === d.column && String(bar.value) === String(d.value) && d.icon) {
        icon = <FaStar color='#000' size={iconSize} />
      }
    })
    return icon
  }
  return (
    config.visualizationSubType !== 'stacked' &&
    (config.visualizationType === 'Bar' || config.visualizationType === 'Combo') &&
    config.orientation === 'vertical' && (
      <Group>
        <BarGroup
          data={data}
          keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
          height={yMax}
          x0={d => d[config.runtime.originalXAxis.dataKey]}
          x0Scale={xScale}
          x1Scale={seriesScale}
          yScale={yScale}
          color={() => {
            return ''
          }}
        >
          {barGroups => {
            return barGroups.map((barGroup, index) => (
              <Group className={`bar-group-${barGroup.index}-${barGroup.x0}--${index} ${config.orientation}`} key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} id={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} left={(xMax / barGroups.length) * barGroup.index}>
                {barGroup.bars.map((bar, index) => {
                  const scaleVal = config.useLogScale ? 0.1 : 0
                  const suppresedBarHeight = 20
                  let highlightedBarValues = config.highlightedBarValues.map(item => item.value).filter(item => item !== ('' || undefined))
                  highlightedBarValues = config.xAxis.type === 'date' ? HighLightedBarUtils.formatDates(highlightedBarValues) : highlightedBarValues
                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barHeightBase = Math.abs(yScale(bar.value) - yScale(scaleVal))
                  let barYBase = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)
                  const supprssedBarY = bar.value >= 0 && isNumber(bar.value) ? yScale(scaleVal) - suppresedBarHeight : yScale(0)
                  const barY = config.suppressedData.some(d => bar.key === d.column && String(bar.value) === String(d.value)) ? supprssedBarY : barYBase

                  let barGroupWidth = (xMax / barGroups.length) * (config.barThickness || 0.8)
                  let offset = ((xMax / barGroups.length) * (1 - (config.barThickness || 0.8))) / 2
                  // configure left side offset of lollipop bars
                  if (config.isLollipopChart) {
                    offset = xMax / barGroups.length / 2 - lollipopBarWidth / 2
                  }

                  let barWidth = config.isLollipopChart ? lollipopBarWidth : barGroupWidth / barGroup.bars.length

                  let yAxisValue = formatNumber(bar.value, 'left')
                  let xAxisValue = config.runtime[section].type === 'date' ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey])) : data[barGroup.index][config.runtime.originalXAxis.dataKey]

                  // create new Index for bars with negative values
                  const newIndex = bar.value < 0 ? -1 : index
                  const borderRadius = applyRadius(newIndex)
                  // tooltips
                  const additionalColTooltip = getAdditionalColumn(hoveredBar)
                  let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                  const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${yAxisValue}`

                  const tooltip = `<ul>
                  <li class="tooltip-heading">${xAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                   <li class="tooltip-body ">${additionalColTooltip}</li>
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
                  const barValueLabel = config.suppressedData.some(d => bar.key === d.column && bar.value === d.value) ? '' : yAxisValue
                  let barHeight = config.suppressedData.some(d => bar.key === d.column && String(bar.value) === String(d.value)) ? suppresedBarHeight : barHeightBase
                  const displaylollipopShape = config.suppressedData.some(d => bar.key === d.column && bar.value === d.value) ? 'none' : 'block'

                  const getBarBackgroundColor = (barColor: string, filteredOutColor?: string): string => {
                    let _barColor = barColor
                    let _filteredOutColor = filteredOutColor || '#f2f2f2'

                    /**
                     * If this is a dashboard using a setBy column on the bars
                     * color the bar that is using the filter with barColor and
                     * color the filteredOut (typically gray) bars with the filteredOutColor
                     */
                    if (dashboardConfig && dashboardConfig.dashboard.sharedFilters) {
                      const { sharedFilters } = dashboardConfig.dashboard

                      _barColor = sharedFilters.map(_sharedFilter => {
                        if (_sharedFilter.setBy === config.uid) {
                          // If the current filter is the reset filter item.
                          if (_sharedFilter.resetLabel === _sharedFilter.active) return barColor
                          // If the current filter is the bars
                          if (_sharedFilter.active === transformedData[barGroup.index][config.xAxis.dataKey]) return barColor
                          return _filteredOutColor
                        } else {
                          // If the setBy isn't the config.uid return the original barColor
                          return barColor
                        }
                      })[0]

                      if (isRegularLollipopColor) _barColor = barColor
                      if (isTwoToneLollipopColor) _barColor = chroma(barColor).brighten(1)
                      if (isHighlightedBar) _barColor = 'transparent'
                      return _barColor
                    }

                    // if this is a two tone lollipop slightly lighten the bar.
                    if (isTwoToneLollipopColor) _barColor = chroma(barColor).brighten(1)

                    // if we're highlighting a bar make it invisible since it gets a border
                    // if (isHighlightedBar) _barColor = 'transparent'
                    return _barColor
                  }

                  const getLeft = () => {
                    if (Number(barWidth) < 10) return 0
                    if (Number(barWidth) < 15) return 2
                    if (Number(barWidth) < 20) return 6
                    if (Number(barWidth) < 25) return 7
                    if (Number(barWidth) < 30) return 8
                    if (Number(barWidth) < 35) return 12
                    if (Number(barWidth) < 40) return 14
                    if (Number(barWidth) < 45) return 16
                    if (Number(barWidth) < 50) return 18
                    if (Number(barWidth) < 55) return 20
                    if (Number(barWidth) < 60) return 22
                    if (Number(barWidth) < 65) return 24
                    else return 20
                  }
                  const iconStyle: { [key: string]: any } = {
                    position: 'absolute',
                    top: bar.value >= 0 && isNumber(bar.value) ? -suppresedBarHeight : undefined,
                    bottom: bar.value >= 0 && isNumber(bar.value) ? undefined : `-${suppresedBarHeight}px`,
                    left: getLeft()
                  }

                  if (config.isLollipopChart) {
                    iconStyle.left = 0
                    iconStyle.transform = `translateX(0)`
                  }

                  const finalStyle = {
                    background: getBarBackgroundColor(barColor),
                    borderColor,
                    borderStyle: 'solid',
                    borderWidth,
                    width: barWidth,
                    height: barHeight,
                    ...borderRadius,
                    cursor: dashboardConfig ? 'pointer' : 'default'
                  }

                  return (
                    <Group key={`${barGroup.index}--${index}`}>
                      {/* This feels gross but inline transition was not working well*/}
                      <style>
                        {`
                        .linear #barGroup${barGroup.index} div,
                        .Combo #barGroup${barGroup.index} div {
                          transform-origin: 0 ${barY + barHeight}px;
                        }
                      `}
                      </style>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        <foreignObject
                          onMouseOver={() => onMouseOverBar(xAxisValue, bar.key)}
                          onMouseLeave={onMouseLeaveBar}
                          style={{ overflow: 'visible', transition: 'all 0.2s linear' }}
                          id={`barGroup${barGroup.index}`}
                          key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                          x={barWidth * bar.index + offset}
                          y={barY}
                          width={barWidth}
                          height={barHeight}
                          opacity={transparentBar ? 0.5 : 1}
                          display={displayBar ? 'block' : 'none'}
                          data-tooltip-html={tooltip}
                          data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          onClick={e => {
                            e.preventDefault()
                            if (setSharedFilter) {
                              bar[config.xAxis.dataKey] = xAxisValue
                              setSharedFilter(config.uid, bar)
                            }
                          }}
                        >
                          <div style={{ position: 'relative' }}>
                            <div style={iconStyle}>{getIcon(bar, barWidth)}</div>
                            <div style={{ ...finalStyle }}></div>
                          </div>
                        </foreignObject>

                        <Text // prettier-ignore
                          display={config.labels && displayBar ? 'block' : 'none'}
                          opacity={transparentBar ? 0.5 : 1}
                          x={barWidth * (bar.index + 0.5) + offset}
                          y={barY - 5}
                          fill={labelColor}
                          textAnchor='middle'
                        >
                          {barValueLabel}
                        </Text>

                        {config.isLollipopChart && config.lollipopShape === 'circle' && (
                          <circle
                            display={displaylollipopShape}
                            cx={barWidth * (barGroup.bars.length - bar.index - 1) + offset + lollipopShapeSize / 3.5}
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
                            x={offset - lollipopBarWidth / 2}
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
              xPos = xScale(getXAxisData(d))
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
      </Group>
    )
  )
}
export default BarChartVertical
