import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { useBarChart } from '../hooks/useBarChart'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
import { useHighlightedBars } from '../hooks/useHighlightedBars'

// third party
import chroma from 'chroma-js'

export const BarChartVertical = props => {
  const { brushData, xScale, yScale, xMax, yMax, seriesScale, origHeight, isBrush, children } = props
  const { colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter, isNumber, getXAxisData, getYAxisData } = useContext(ConfigContext)
  let { transformedData: data } = useContext(ConfigContext)
  const { barBorderWidth, hasMultipleSeries, applyRadius, updateBars, assignColorsToValues, section, lollipopBarWidth, lollipopShapeSize, getHighlightedBarColorByValue, getHighlightedBarByValue } = useBarChart()
  const { HighLightedBarUtils } = useHighlightedBars(config)

  // use brush data if it is passed in AND if Brush enabled
  data = config.showChartBrush && undefined !== brushData && brushData.length ? brushData : data
  console.log('### BarVertical isBrush, children', isBrush, children)
  //console.log('### BarVertical yscale,data', yScale, data)
  console.log('### BarVertical seriesScale', seriesScale)
  //console.log('### BarVertical config.runtime.barSeriesKeys', config.runtime.barSeriesKeys)
  //console.log('### BarVertical config.runtime.seriesKeys', config.runtime.seriesKeys)
  //console.log('### BarVertical config.runtime.originalXAxis.dataKey', config.runtime.originalXAxis.dataKey)
  console.log('### BarVertical origHeight', origHeight)
  // How to calculate how far to move down?
  // top chart height + bottom margin by ticks + padding???
  const getTop = () => {
    return isBrush ? origHeight * 3 : 0
  }

  return (
    config.visualizationSubType !== 'stacked' &&
    (config.visualizationType === 'Bar' || config.visualizationType === 'Combo') &&
    config.orientation === 'vertical' && (
      <React.Fragment>
        <BarGroup
          data={data}
          keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
          height={isBrush ? yMax : yMax}
          x0={d => d[config.runtime.originalXAxis.dataKey]}
          x0Scale={xScale}
          x1Scale={seriesScale}
          yScale={yScale}
          color={() => {
            return ''
          }}
        >
          {barGroups => {
            return updateBars(barGroups).map((barGroup, index) => (
              <Group top={getTop()} className={`bar-group-${barGroup.index}-${barGroup.x0}--${index} ${config.orientation}`} key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} id={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} left={(xMax / barGroups.length) * barGroup.index}>
                {barGroup.bars.map((bar, index) => {
                  const scaleVal = config.useLogScale ? 0.1 : 0
                  let highlightedBarValues = config.highlightedBarValues.map(item => item.value).filter(item => item !== ('' || undefined))
                  highlightedBarValues = config.xAxis.type === 'date' ? HighLightedBarUtils.formatDates(highlightedBarValues) : highlightedBarValues
                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barHeight = Math.abs(yScale(bar.value) - yScale(scaleVal))
                  let barY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)
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

                  let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                  let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue

                  if (!hasMultipleSeries) {
                    yAxisTooltip = config.isLegendValue ? `${bar.key}: ${yAxisValue}` : config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                  }

                  const tooltip = `<ul>
                  ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries ? `${config.runtime.seriesLabels[bar.key] || ''}<br/>` : ''}
                  <li class="tooltip-heading">${yAxisTooltip}</li>
                  <li class="tooltip-body">${xAxisTooltip}</li>
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

                  const background = () => {
                    if (isRegularLollipopColor) return barColor
                    if (isTwoToneLollipopColor) return chroma(barColor).brighten(1)
                    if (isHighlightedBar) return 'transparent'
                    return barColor
                  }
                  const finalStyle = {
                    background: background(),
                    borderColor,
                    borderStyle: 'solid',
                    borderWidth,
                    ...borderRadius
                  }

                  // this is only doing something on COmbo
                  // .. how can we do this for bar chart
                  const brushBarHeight = () => {
                    return isBrush ? barHeight * 2 : barHeight
                  }
                  return (
                    <Group key={`${barGroup.index}--${index}`}>
                      {/* This feels gross but inline transition was not working well*/}
                      <style>
                        {`
                        .linear #barGroup${barGroup.index},
                        .Combo #barGroup${barGroup.index} {
                          transform-origin: 0 ${barY + brushBarHeight}px;
                        }
                      `}
                      </style>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        <foreignObject
                          id={`barGroup${barGroup.index}`}
                          key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                          x={barWidth * bar.index + offset}
                          y={isBrush ? barY / 4 + 200 : barY} // rethink this 200px offset ... how not to hardcode
                          width={barWidth}
                          height={isBrush ? barHeight / 4 : barHeight}
                          style={finalStyle}
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
                        ></foreignObject>

                        <Text display={config.labels && displayBar ? 'block' : 'none'} opacity={transparentBar ? 0.5 : 1} x={barWidth * (bar.index + 0.5) + offset} y={barY - 5} fill={labelColor} textAnchor='middle'>
                          {yAxisValue}
                        </Text>

                        {config.isLollipopChart && config.lollipopShape === 'circle' && (
                          <circle
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
        {children}
      </React.Fragment>
    )
  )
}
export default BarChartVertical
