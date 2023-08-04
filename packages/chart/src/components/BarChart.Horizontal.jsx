import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { useBarChart } from '../hooks/useBarChart'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup, Bar } from '@visx/shape'
import { useHighlightedBars } from '../hooks/useHighlightedBars'

// third party
import chroma from 'chroma-js'

export const BarChartHorizontal = props => {
  const { xScale, yScale, xMax, yMax, seriesScale } = props
  const { transformedData: data, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter, isNumber, getTextWidth } = useContext(ConfigContext)
  const { isHorizontal, barBorderWidth, hasMultipleSeries, applyRadius, updateBars, assignColorsToValues, section, fontSize, isLabelBelowBar, displayNumbersOnBar } = useBarChart()
  const { orientation } = config
  const { HighLightedBarUtils } = useHighlightedBars(config)

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
          x0Scale={config.runtime.horizontal ? yScale : xScale}
          x1Scale={seriesScale}
          yScale={config.runtime.horizontal ? xScale : yScale}
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
                top={config.runtime.horizontal ? barGroup.y : 0}
                left={config.runtime.horizontal ? 0 : (xMax / barGroups.length) * barGroup.index}
              >
                {barGroup.bars.map((bar, index) => {
                  const scaleVal = config.useLogScale ? 0.1 : 0
                  const getHighlightedBarColorByValue = value => {
                    const match = config?.highlightedBarValues.filter(item => {
                      if (!item.value) return
                      return config.xAxis.type === 'date' ? formatDate(parseDate(item.value)) === value : item.value === value
                    })[0]

                    if (!match?.color) return `rgba(255, 102, 1)`
                    return match.color
                  }

                  const getHighlightedBarByValue = value => {
                    const match = config?.highlightedBarValues.filter(item => {
                      if (!item.value) return
                      return config.xAxis.type === 'date' ? formatDate(parseDate(item.value)) === value : item.value === value
                    })[0]

                    if (!match?.color) return false
                    return match
                  }

                  let highlightedBarValues = config.highlightedBarValues.map(item => item.value).filter(item => item !== ('' || undefined))

                  highlightedBarValues = config.xAxis.type === 'date' ? HighLightedBarUtils.formatDates(highlightedBarValues) : highlightedBarValues

                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barHeight = orientation === 'horizontal' ? config.barHeight : isNumber(Math.abs(yScale(bar.value) - yScale(scaleVal))) ? Math.abs(yScale(bar.value) - yScale(scaleVal)) : 0
                  let barY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)
                  let barGroupWidth = ((config.runtime.horizontal ? yMax : xMax) / barGroups.length) * (config.barThickness || 0.8)
                  let offset = (((config.runtime.horizontal ? yMax : xMax) / barGroups.length) * (1 - (config.barThickness || 0.8))) / 2
                  const barX = bar.value < 0 ? Math.abs(xScale(bar.value)) : xScale(0)
                  const barWidthHorizontal = Math.abs(xScale(bar.value) - xScale(scaleVal))
                  // ! Unsure if this should go back.
                  if (config.isLollipopChart) {
                    offset = (config.runtime.horizontal ? yMax : xMax) / barGroups.length / 2 - lollipopBarWidth / 2
                  }
                  let palette = assignColorsToValues()

                  let barWidth = config.isLollipopChart ? lollipopBarWidth : barGroupWidth / barGroup.bars.length
                  let barColor = config.runtime.seriesLabels && config.runtime.seriesLabels[bar.key] ? colorScale(config.runtime.seriesLabels[bar.key]) : colorScale(bar.key)
                  while (palette.length < barGroups.length) {
                    palette = palette.concat(palette)
                  }
                  if (config.legend.colorCode && config.series.length === 1) barColor = palette[barGroup.index]

                  let yAxisValue = formatNumber(bar.value, 'left')
                  let xAxisValue = config.runtime[section].type === 'date' ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey])) : data[barGroup.index][config.runtime.originalXAxis.dataKey]

                  if (config.runtime.horizontal) {
                    let tempValue = yAxisValue
                    yAxisValue = xAxisValue
                    xAxisValue = tempValue
                    barWidth = config.barHeight
                  }

                  const barPosition = bar.value < 0 ? 'below' : 'above'

                  // check if bar text/value string fits into  each bars.
                  let textWidth = getTextWidth(xAxisValue, `normal ${fontSize[config.fontSize]}px sans-serif`)
                  let textFits = textWidth < barWidthHorizontal - 5 // minus padding 5
                  let labelColor = '#000000'

                  // Set label color
                  if (barColor && labelColor) {
                    if (chroma.contrast(labelColor, barColor) < 4.9) {
                      labelColor = textFits ? '#FFFFFF' : '#000000'
                    }
                  }

                  // Set if background is transparent'
                  labelColor = HighLightedBarUtils.checkFontColor(yAxisValue, highlightedBarValues, labelColor)

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

                  // create new Index based on bar value for border Radius
                  const newIndex = bar.value < 0 ? -1 : index
                  const style = applyRadius(newIndex)

                  let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                  let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                  if (!hasMultipleSeries && config.runtime.horizontal) {
                    xAxisTooltip = config.isLegendValue ? `<p className="tooltip-heading">${bar.key}: ${xAxisValue}</p>` : config.runtime.xAxis.label ? `<p className="tooltip-heading">${config.runtime.xAxis.label}: ${xAxisValue}</p>` : xAxisValue
                  }
                  if (!hasMultipleSeries && !config.runtime.horizontal) {
                    yAxisTooltip = config.isLegendValue ? `${bar.key}: ${yAxisValue}` : config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                  }

                  const tooltip = `<ul>
                  ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries ? `${config.runtime.seriesLabels[bar.key] || ''}<br/>` : ''}
                  <li class="tooltip-heading">${yAxisTooltip}</li>
                  <li class="tooltip-body">${xAxisTooltip}</li>
                    </li></ul>`

                  const isRegularLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'regular'
                  const isTwoToneLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                  const isHighlightedBar = config.orientation === 'vertical' ? highlightedBarValues?.includes(xAxisValue) : highlightedBarValues?.includes(yAxisValue)
                  const highlightedBarColor = config.orientation === 'vertical' ? getHighlightedBarColorByValue(xAxisValue) : getHighlightedBarColorByValue(yAxisValue)
                  const highlightedBar = config.orientation === 'vertical' ? getHighlightedBarByValue(xAxisValue) : getHighlightedBarByValue(yAxisValue)

                  const background = () => {
                    if (isRegularLollipopColor) return barColor
                    if (isTwoToneLollipopColor) return chroma(barColor).brighten(1)
                    if (isHighlightedBar) return 'transparent'
                    return barColor
                  }

                  const borderColor = isHighlightedBar ? highlightedBarColor : config.barHasBorder === 'true' ? '#000' : 'transparent'

                  const borderWidth = isHighlightedBar ? highlightedBar.borderWidth : config.isLollipopChart ? 0 : config.barHasBorder === 'true' ? barBorderWidth : 0

                  const finalStyle = {
                    background: background(),
                    borderColor,
                    borderStyle: 'solid',
                    borderWidth,
                    ...style
                  }

                  return (
                    <Group key={`${barGroup.index}--${index}--${orientation}`}>
                      {/* This feels gross but inline transition was not working well*/}
                      <style>
                        {`
                        .linear #barGroup${barGroup.index},
                        .Combo #barGroup${barGroup.index} {
                          transform-origin: 0 ${barY + barHeight}px;
                        }
                      `}
                      </style>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        <foreignObject
                          id={`barGroup${barGroup.index}`}
                          key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                          x={config.runtime.horizontal ? barX : barWidth * bar.index + offset}
                          y={config.runtime.horizontal ? barWidth * bar.index : barY}
                          width={config.runtime.horizontal ? barWidthHorizontal : barWidth}
                          height={isHorizontal && !config.isLollipopChart ? barWidth : isHorizontal && config.isLollipopChart ? lollipopBarWidth : barHeight}
                          style={finalStyle}
                          opacity={transparentBar ? 0.5 : 1}
                          display={displayBar ? 'block' : 'none'}
                          data-tooltip-html={tooltip}
                          data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          onClick={e => {
                            e.preventDefault()
                            if (setSharedFilter) {
                              bar[config.xAxis.dataKey] = config.orientation === 'horizontal' ? yAxisValue : xAxisValue
                              setSharedFilter(config.uid, bar)
                            }
                          }}
                        ></foreignObject>
                        {orientation === 'horizontal' && !config.isLollipopChart && displayNumbersOnBar && (
                          <Text // prettier-ignore
                            display={displayBar ? 'block' : 'none'}
                            x={bar.y}
                            y={config.barHeight / 2 + config.barHeight * bar.index}
                            fill={labelColor}
                            dx={textPadding}
                            verticalAnchor='middle'
                            textAnchor={textAnchor}
                          >
                            {xAxisValue}
                          </Text>
                        )}
                        {orientation === 'horizontal' && config.isLollipopChart && displayNumbersOnBar && (
                          <Text
                            display={displayBar ? 'block' : 'none'}
                            x={bar.y} // padding
                            y={0}
                            fill={'#000000'}
                            dx={textPaddingLollipop}
                            textAnchor={textAnchorLollipop}
                            verticalAnchor='middle'
                            fontWeight={'normal'}
                          >
                            {xAxisValue}
                          </Text>
                        )}
                        {orientation === 'horizontal' && isLabelBelowBar && !config.yAxis.hideLabel && (
                          <Text x={config.yAxis.hideAxis ? 0 : 5} y={barGroup.height} dy={4} verticalAnchor={'start'} textAnchor={'start'}>
                            {config.runtime.yAxis.type === 'date'
                              ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey]))
                              : isHorizontal
                              ? data[barGroup.index][config.runtime.originalXAxis.dataKey]
                              : formatNumber(data[barGroup.index][config.runtime.originalXAxis.dataKey])}
                          </Text>
                        )}

                        {orientation === 'vertical' && (
                          <Text display={config.labels && displayBar ? 'block' : 'none'} opacity={transparentBar ? 0.5 : 1} x={barWidth * (bar.index + 0.5) + offset} y={barY - 5} fill={labelColor} textAnchor='middle'>
                            {yAxisValue}
                          </Text>
                        )}
                        {config.isLollipopChart && config.lollipopShape === 'circle' && (
                          <circle
                            cx={orientation === 'horizontal' ? bar.y : barWidth * (barGroup.bars.length - bar.index - 1) + (isLabelBelowBar && orientation === 'horizontal' ? 0 : offset) + lollipopShapeSize / 3.5}
                            cy={orientation === 'horizontal' ? 0 + lollipopBarWidth / 2 : bar.y}
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
                            x={orientation === 'horizontal' && bar.y > 10 ? bar.y - lollipopShapeSize / 2 : orientation === 'horizontal' && bar.y < 10 ? 0 : orientation !== 'horizontal' ? offset - lollipopBarWidth / 2 : barWidth * (barGroup.bars.length - bar.index - 1) + offset - 5.25}
                            y={orientation === 'horizontal' ? 0 - lollipopBarWidth / 2 : barY}
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
              // DEV-3264 Make Confidence Intervals work on horizontal bar charts
              if (orientation === 'horizontal') {
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
              } else {
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
              }
            })
          : ''}
      </Group>
    )
  )
}
export default BarChartHorizontal
