import React, { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import { type ChartContext } from '../../../types/ChartContext'
import { useBarChart } from '../../../hooks/useBarChart'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
import { useHighlightedBars } from '../../../hooks/useHighlightedBars'
import Regions from './../../Regions'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import createBarElement from '@cdc/core/components/createBarElement'
// third party
import chroma from 'chroma-js'
import BarChartContext, { type BarChartContextValues } from './context'

export const BarChartVertical = () => {
  const { xScale, yScale, xMax, yMax, seriesScale } = useContext<BarChartContextValues>(BarChartContext)

  const [barWidth, setBarWidth] = useState(0)
  const [totalBarsInGroup, setTotalBarsInGroup] = useState(0)

  // prettier-ignore
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
    section,
    getIcon,
    shouldSuppress
  } = useBarChart()

  // prettier-ignore
  const {
    colorScale,
    config,
    dashboardConfig,
    formatDate,
    formatNumber,
    getXAxisData,
    getYAxisData,
    isNumber,
    parseDate,
    seriesHighlight,
    setSharedFilter,
    transformedData,
  } = useContext<ChartContext>(ConfigContext)

  const { HighLightedBarUtils } = useHighlightedBars(config)
  const data = config.brush.active && config.brush.data?.length ? config.brush.data : transformedData

  return (
    config.visualizationSubType !== 'stacked' &&
    (config.visualizationType === 'Bar' || config.visualizationType === 'Combo') &&
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
                  const scaleVal = config.useLogScale ? 0.1 : 0
                  const suppresedBarHeight = config.xAxis.showSuppressedLine ? 3 : 0
                  let highlightedBarValues = config.highlightedBarValues.map(item => item.value).filter(item => item !== ('' || undefined))
                  highlightedBarValues = config.xAxis.type === 'date' ? HighLightedBarUtils.formatDates(highlightedBarValues) : highlightedBarValues
                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barHeightBase = Math.abs(yScale(bar.value) - yScale(scaleVal))
                  let barYBase = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)
                  const supprssedBarY = bar.value >= 0 && isNumber(bar.value) ? yScale(scaleVal) - suppresedBarHeight : yScale(0)
                  const barY = shouldSuppress(bar) ? supprssedBarY : barYBase

                  let barGroupWidth = seriesScale.range()[1]

                  let barWidth = config.isLollipopChart ? lollipopBarWidth : barGroupWidth / barGroup.bars.length
                  let barX = bar.x + (config.isLollipopChart ? (barGroupWidth / barGroup.bars.length - lollipopBarWidth) / 2 : 0) - (config.xAxis.type === 'date-time' ? barGroupWidth / 2 : 0)
                  setBarWidth(barWidth)
                  setTotalBarsInGroup(barGroup.bars.length)

                  let yAxisValue = formatNumber(bar.value, 'left')
                  let xAxisValue = config.runtime[section].type === 'date' ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey])) : data[barGroup.index][config.runtime.originalXAxis.dataKey]

                  // create new Index for bars with negative values
                  const newIndex = bar.value < 0 ? -1 : index
                  // tooltips
                  let suppressedTooltipValue = config.preliminaryData.map(pd => pd.label)[index]

                  const additionalColTooltip = getAdditionalColumn(bar.key, data[barGroup.index][config.runtime.originalXAxis.dataKey])
                  let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                  const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${shouldSuppress(bar) ? suppressedTooltipValue : yAxisValue}`

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
                  const barValueLabel = shouldSuppress(bar) ? '' : yAxisValue
                  let barHeight = shouldSuppress(bar) ? suppresedBarHeight : barHeightBase

                  const displaylollipopShape = shouldSuppress(bar) ? 'none' : 'block'
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
                    if (isHighlightedBar) _barColor = 'transparent'
                    return _barColor
                  }

                  const [suppressedIcon, iconName] = getIcon(bar)
                  const iconY = /^Asterisk$/.test(iconName) ? 25 : /^Double Asterisks$/.test(iconName) ? 10 : 35
                  const iconFont = /^Asterisk$/.test(iconName) ? 25 : /^Double Asterisks$/.test(iconName) ? 20 : 20
                  const iconAngle = /^Double Asterisks$/.test(iconName) ? 'rotate(88deg)' : ''

                  return (
                    <Group key={`${barGroup.index}--${index}`}>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        {createBarElement({
                          config: config,
                          index: newIndex,
                          id: `barGroup${barGroup.index}`,
                          background: getBarBackgroundColor(barColor),
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
                        <foreignObject width='66' height='60' x={barX} y={barY - iconY}>
                          <div style={{ fontSize: `${iconFont}px`, transform: iconAngle }}>{suppressedIcon}</div>
                        </foreignObject>

                        <Text // prettier-ignore
                          display={config.labels && displayBar ? 'block' : 'none'}
                          opacity={transparentBar ? 0.5 : 1}
                          x={barX + barWidth / 2}
                          y={barY - 5}
                          fill={labelColor}
                          textAnchor='middle'
                        >
                          {barValueLabel}
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

// <g
//                         transform={`translate(${barX + 5},${yMax - 5 - generateIconSize(barWidth)})`}
//                         onMouseOver={() => onMouseOverBar(xAxisValue, bar.key)}
//                         onMouseLeave={onMouseLeaveBar}
//                         opacity={transparentBar ? 0.2 : 1}
//                         display={displayBar ? 'block' : 'none'}
//                         data-tooltip-html={tooltip}
//                         data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
//                         onClick={e => {
//                           e.preventDefault()
//                           if (setSharedFilter) {
//                             bar[config.xAxis.dataKey] = xAxisValue
//                             setSharedFilter(config.uid, bar)
//                           }
//                         }}
//                       >
//                         <foreignObject width='100' height='100' x={bar.x} y={-12}>
//                           {/* {getIcon(bar, barWidth)} */}
//                           &#182;
//                         </foreignObject>
//                       </g>
