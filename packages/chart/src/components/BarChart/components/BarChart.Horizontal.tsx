import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { useBarChart } from '../../../hooks/useBarChart'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
import { useHighlightedBars } from '../../../hooks/useHighlightedBars'
import { FaStar } from 'react-icons/fa'
import { WCAG_CONTRAST_RATIO } from '@cdc/core/helpers/cove/accessibility'

// third party
import chroma from 'chroma-js'
import BarChartContext, { BarChartContextValues } from './context'
import { ChartContext } from '../../../types/ChartContext'

import createBarElement from '@cdc/core/components/createBarElement'

export const BarChartHorizontal = () => {
  const { xScale, yScale, yMax, seriesScale } = useContext<BarChartContextValues>(BarChartContext)
  const { transformedData: data, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter, isNumber, getTextWidth, getYAxisData, getXAxisData } = useContext<ChartContext>(ConfigContext)
  const {
    isHorizontal,
    barBorderWidth,
    updateBars,
    assignColorsToValues,
    section,
    fontSize,
    isLabelBelowBar,
    displayNumbersOnBar,
    lollipopBarWidth,
    lollipopShapeSize,
    getHighlightedBarColorByValue,
    getHighlightedBarByValue,
    generateIconSize,
    getAdditionalColumn,
    hoveredBar,
    onMouseLeaveBar,
    onMouseOverBar
  } = useBarChart()

  const { HighLightedBarUtils } = useHighlightedBars(config)
  const getIcon = (bar, barWidth) => {
    let icon = null
    const iconSize = generateIconSize(barWidth)
    config.suppressedData?.forEach(d => {
      if (bar.key === d.column && String(bar.value) === String(d.value) && d.icon) {
        icon = <FaStar color='#000' size={iconSize} />
        // icon = <BarIcon color='#000' size={fontSize[config.fontSize] / 1.7} />
      }
    })
    return icon
  }
  return (
    config.visualizationSubType !== 'stacked' &&
    config.visualizationType === 'Bar' &&
    config.orientation === 'horizontal' && (
      <Group>
        <BarGroup
          data={data}
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
              <Group className={`bar-group-${barGroup.index}-${barGroup.x0}--${index} ${config.orientation}`} key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} id={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} top={barGroup.y}>
                {barGroup.bars.map((bar, index) => {
                  const scaleVal = config.useLogScale ? 0.1 : 0

                  let highlightedBarValues = config.highlightedBarValues.map(item => item.value).filter(item => item !== ('' || undefined))
                  highlightedBarValues = config.xAxis.type === 'date' ? HighLightedBarUtils.formatDates(highlightedBarValues) : highlightedBarValues
                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barHeight = config.barHeight
                  let barY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(scaleVal)
                  const barXBase = bar.value < 0 ? Math.abs(xScale(bar.value)) : xScale(scaleVal)
                  const barWidthHorizontal = Math.abs(xScale(bar.value) - xScale(scaleVal))
                  const suppresedBarWidth = 25
                  const isPositiveBar = bar.value >= 0 && isNumber(bar.value)
                  let barWidth = bar.value && config.suppressedData.some(({ column, value }) => bar.key === column && bar.value === value) ? suppresedBarWidth : barWidthHorizontal

                  const supprssedBarX = isPositiveBar ? xScale(0) : xScale(scaleVal) - suppresedBarWidth
                  const barX = config.suppressedData.some(d => bar.key === d.column && String(bar.value) === String(d.value)) ? supprssedBarX : barXBase
                  const yAxisValue = formatNumber(bar.value, 'left')
                  const xAxisValue = config.runtime[section].type === 'date' ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey])) : data[barGroup.index][config.runtime.originalXAxis.dataKey]

                  const barPosition = !isPositiveBar ? 'below' : 'above'
                  const barValueLabel = config.suppressedData.some(d => bar.key === d.column && bar.value === d.value) ? '' : yAxisValue

                  // check if bar text/value string fits into  each bars.
                  let textWidth = getTextWidth(xAxisValue, `normal ${fontSize[config.fontSize]}px sans-serif`)
                  let textFits = textWidth < barWidthHorizontal - 5 // minus padding 5

                  // control text position
                  let textAnchor = textFits ? 'end' : 'start'
                  let textAnchorLollipop = 'start'
                  let textPadding = textFits ? -5 : 5
                  let textPaddingLollipop = 10
                  // if bars are negative we change positions of text
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

                  let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${xAxisValue}` : xAxisValue
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
                  let barColor = config.runtime.seriesLabels && config.runtime.seriesLabels[bar.key] ? colorScale(config.runtime.seriesLabels[bar.key]) : colorScale(bar.key)
                  barColor = assignColorsToValues(barGroups.length, barGroup.index, barColor) // Color code by category
                  const isRegularLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'regular'
                  const isTwoToneLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                  const isHighlightedBar = highlightedBarValues?.includes(yAxisValue)
                  const highlightedBarColor = getHighlightedBarColorByValue(yAxisValue)
                  const highlightedBar = getHighlightedBarByValue(yAxisValue)
                  const borderColor = isHighlightedBar ? highlightedBarColor : config.barHasBorder === 'true' ? '#000' : 'transparent'
                  const borderWidth = isHighlightedBar ? highlightedBar.borderWidth : config.isLollipopChart ? 0 : config.barHasBorder === 'true' ? barBorderWidth : 0
                  const displaylollipopShape = config.suppressedData.some(d => bar.key === d.column && bar.value === d.value) ? 'none' : 'block'
                  // update label color
                  if (barColor && labelColor) {
                    if (chroma.contrast(labelColor, barColor) < WCAG_CONTRAST_RATIO) {
                      labelColor = textFits ? '#FFFFFF' : '#000000'
                    }
                  }
                  const getTop = () => {
                    if (Number(barHeight) < 20) return -4
                    if (Number(barHeight) < 25) return -1
                    if (Number(barHeight) < 30) return 2
                    if (Number(barHeight) < 35) return 4
                    if (Number(barHeight) < 40) return 5
                    if (Number(barHeight) < 50) return 9
                    if (Number(barHeight) < 60) return 10
                    else {
                      return 12
                    }
                  }
                  const background = () => {
                    if (isRegularLollipopColor) return barColor
                    if (isTwoToneLollipopColor) return chroma(barColor).brighten(1)
                    if (isHighlightedBar) return 'transparent'
                    return barColor
                  }

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
                          height: !config.isLollipopChart ? barHeight : lollipopBarWidth,
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
                        <g
                          transform={`translate(${barX},${barHeight * bar.index})`}
                          onMouseOver={() => onMouseOverBar(xAxisValue, bar.key)}
                          onMouseLeave={onMouseLeaveBar}
                          opacity={transparentBar ? 0.2 : 1}
                          display={displayBar ? 'block' : 'none'}
                          data-tooltip-html={tooltip}
                          data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          onClick={e => {
                            e.preventDefault()
                            if (setSharedFilter) {
                              bar[config.xAxis.dataKey] = yAxisValue
                              setSharedFilter(config.uid, bar)
                            }
                          }}
                        >
                          {getIcon(bar, barWidth)}
                        </g>

                        {!config.isLollipopChart && displayNumbersOnBar && (
                          <Text // prettier-ignore
                            display={displayBar ? 'block' : 'none'}
                            x={bar.y}
                            y={config.barHeight / 2 + config.barHeight * bar.index}
                            fill={labelColor}
                            dx={textPadding}
                            verticalAnchor='middle'
                            textAnchor={textAnchor}
                          >
                            {barValueLabel}
                          </Text>
                        )}
                        {config.isLollipopChart && displayNumbersOnBar && (
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
                            {barValueLabel}
                          </Text>
                        )}
                        {isLabelBelowBar && !config.yAxis.hideLabel && (
                          <Text x={config.yAxis.hideAxis ? 0 : 5} y={barGroup.height} dy={4} verticalAnchor={'start'} textAnchor={'start'}>
                            {config.runtime.yAxis.type === 'date'
                              ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey]))
                              : isHorizontal
                              ? data[barGroup.index][config.runtime.originalXAxis.dataKey]
                              : formatNumber(data[barGroup.index][config.runtime.originalXAxis.dataKey])}
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
              yPos = yScale(getXAxisData(d)) - 0.75 * config.barHeight
              upperPos = xScale(getYAxisData(d, config.confidenceKeys.upper))
              lowerPos = xScale(getYAxisData(d, config.confidenceKeys.lower))
              return (
                <path
                  key={`confidence-interval-h-${yPos}-${d[config.runtime.originalXAxis.dataKey]}`}
                  stroke='#333'
                  strokeWidth='px'
                  d={`
                    M${lowerPos} ${yPos - tickWidth}
                    L${lowerPos} ${yPos + tickWidth}
                    M${lowerPos} ${yPos}
                    L${upperPos} ${yPos}
                    M${upperPos} ${yPos - tickWidth}
                    L${upperPos} ${yPos + tickWidth} `}
                />
              )
            })
          : ''}
      </Group>
    )
  )
}
export default BarChartHorizontal
