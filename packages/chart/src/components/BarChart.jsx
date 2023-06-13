import React, { useContext, useState, useEffect } from 'react'
import { Group } from '@visx/group'
import { BarGroup, BarStack } from '@visx/shape'
import { Text } from '@visx/text'
import chroma from 'chroma-js'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../ConfigContext'
import { BarStackHorizontal } from '@visx/shape'
import { useHighlightedBars } from '../hooks/useHighlightedBars'
import { act } from 'react-dom/test-utils'

export default function BarChart({ xScale, yScale, seriesScale, xMax, yMax, getXAxisData, getYAxisData, animatedChart, visible }) {
  const { transformedData: data, colorScale, seriesHighlight, config, formatNumber, updateConfig, colorPalettes, tableData, formatDate, isNumber, getTextWidth, parseDate, setSharedFilter, setSharedFilterValue, dashboardConfig } = useContext(ConfigContext)
  const { HighLightedBarUtils } = useHighlightedBars(config)
  const { orientation, visualizationSubType } = config
  const isHorizontal = orientation === 'horizontal'
  const barBorderWidth = 1
  const lollipopBarWidth = config.lollipopSize === 'large' ? 7 : config.lollipopSize === 'medium' ? 6 : 5
  const lollipopShapeSize = config.lollipopSize === 'large' ? 14 : config.lollipopSize === 'medium' ? 12 : 10

  const isLabelBelowBar = config.yAxis.labelPlacement === 'Below Bar'
  const displayNumbersOnBar = config.yAxis.displayNumbersOnBar
  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'

  const isRounded = config.barStyle === 'rounded'
  const isStacked = config.visualizationSubType === 'stacked'
  const tipRounding = config.tipRounding
  const radius = config.roundingStyle === 'standard' ? '8px' : config.roundingStyle === 'shallow' ? '5px' : config.roundingStyle === 'finger' ? '15px' : '0px'
  const stackCount = config.runtime.seriesKeys.length
  const fontSize = { small: 16, medium: 18, large: 20 }
  const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1

  const applyRadius = index => {
    if (index === undefined || index === null || !isRounded) return {}
    let style = {}

    if ((isStacked && index + 1 === stackCount) || !isStacked) {
      style = isHorizontal ? { borderRadius: `0 ${radius}  ${radius}  0` } : { borderRadius: `${radius} ${radius} 0 0` }
    }
    if (!isStacked && index === -1) {
      style = isHorizontal ? { borderRadius: `${radius} 0  0 ${radius} ` } : { borderRadius: ` 0  0 ${radius} ${radius}` }
    }
    if (tipRounding === 'full' && isStacked && index === 0 && stackCount > 1) {
      style = isHorizontal ? { borderRadius: `${radius} 0 0 ${radius}` } : { borderRadius: `0 0 ${radius} ${radius}` }
    }
    if (tipRounding === 'full' && ((isStacked && index === 0 && stackCount === 1) || !isStacked)) {
      style = { borderRadius: radius }
    }
    return style
  }

  const assignColorsToValues = () => {
    const palettesArr = colorPalettes[config.palette]
    const values = tableData.map(d => {
      return d[config.legend.colorCode]
    })
    // Map to hold unique values and their  colors
    let colorMap = new Map()
    // Resultant array to hold colors  to the values
    let result = []

    for (let i = 0; i < values.length; i++) {
      // If value not in map, add it and assign a color
      if (!colorMap.has(values[i])) {
        colorMap.set(values[i], palettesArr[colorMap.size % palettesArr.length])
      }
      // push the colosr to the result array
      result.push(colorMap.get(values[i]))
    }
    return result
  }

  const updateBars = defaultBars => {
    // function updates  stacked && regular && lollipop horizontal bars
    if (config.visualizationType !== 'Bar' && !isHorizontal) return defaultBars

    const barsArr = [...defaultBars]
    let barHeight

    const heights = {
      stacked: config.barHeight,
      lollipop: lollipopBarWidth
    }

    if (!isStacked) {
      barHeight = heights[config.isLollipopChart ? 'lollipop' : 'stacked'] * stackCount
    } else {
      barHeight = heights.stacked
    }

    const labelHeight = isLabelBelowBar ? fontSize[config.fontSize] * 1.2 : 0
    let barSpace = Number(config.barSpace)

    // calculate height of container based height, space and fontSize of labels
    let totalHeight = barsArr.length * (barHeight + labelHeight + barSpace)

    if (isHorizontal) {
      config.heights.horizontal = totalHeight
    }

    // return new updated bars/groupes
    return barsArr.map((bar, i) => {
      // set bars Y dynamically to handle space between bars
      let y = 0
      bar.index !== 0 && (y = (barHeight + barSpace + labelHeight) * i)

      return { ...bar, y: y, height: barHeight }
    })
  }

  // Using State
  const [textWidth, setTextWidth] = useState(null)

  useEffect(() => {
    if (orientation === 'horizontal' && !config.yAxis.labelPlacement) {
      updateConfig({
        ...config,
        yAxis: {
          ...config,
          labelPlacement: 'Below Bar'
        }
      })
    }
  }, [config, updateConfig]) // eslint-disable-line

  useEffect(() => {
    if (config.isLollipopChart === false && config.barHeight < 25) {
      updateConfig({ ...config, barHeight: 25 })
    }
  }, [config.isLollipopChart]) // eslint-disable-line

  useEffect(() => {
    if (config.visualizationSubType === 'horizontal') {
      updateConfig({
        ...config,
        orientation: 'horizontal'
      })
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    if (config.barStyle === 'lollipop' && !config.isLollipopChart) {
      updateConfig({ ...config, isLollipopChart: true })
    }
    if (isRounded || config.barStyle === 'flat') {
      updateConfig({ ...config, isLollipopChart: false })
    }
  }, [config.barStyle]) // eslint-disable-line

  return (
    <ErrorBoundary component='BarChart'>
      <Group left={parseFloat(config.runtime.yAxis.size)}>
        {/* Stacked Vertical */}
        {config.visualizationSubType === 'stacked' && !isHorizontal && (
          <BarStack data={data} keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys} x={d => d[config.runtime.xAxis.dataKey]} xScale={xScale} yScale={yScale} color={colorScale}>
            {barStacks =>
              barStacks.reverse().map(barStack =>
                barStack.bars.map(bar => {
                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barThickness = xMax / barStack.bars.length
                  let barThicknessAdjusted = barThickness * (config.barThickness || 0.8)
                  let offset = (barThickness * (1 - (config.barThickness || 0.8))) / 2
                  // tooltips
                  const xAxisValue = config.runtime.xAxis.type === 'date' ? formatDate(parseDate(data[bar.index][config.runtime.xAxis.dataKey])) : data[bar.index][config.runtime.xAxis.dataKey]
                  const yAxisValue = formatNumber(bar.bar ? bar.bar.data[bar.key] : 0, 'left')

                  const style = applyRadius(barStack.index)
                  let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                  const xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                  if (!hasMultipleSeries) {
                    yAxisTooltip = config.isLegendValue ? `${bar.key}: ${yAxisValue}` : config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                  }

                  const tooltip = `<div>
                  ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries ? `${config.runtime.seriesLabels[bar.key] || ''}<br/>` : ''}
                  ${yAxisTooltip}<br />
                  ${xAxisTooltip}
                    </div>`
                  return (
                    <Group key={`${barStack.index}--${bar.index}--${orientation}`}>
                      <style>
                        {`
                         #barStack${barStack.index}-${bar.index} rect,
                         #barStack${barStack.index}-${bar.index} foreignObject{
                          animation-delay: ${barStack.index * 0.5}s;
                          transform-origin: ${barThicknessAdjusted / 2}px ${bar.y + bar.height}px
                        }
                      `}
                      </style>
                      <Group key={`bar-stack-${barStack.index}-${bar.index}`} id={`barStack${barStack.index}-${bar.index}`} className='stack vertical'>
                        <Text display={config.labels && displayBar ? 'block' : 'none'} opacity={transparentBar ? 0.5 : 1} x={barThickness * bar.index + offset} y={bar.y - 5} fill={'#000'} textAnchor='middle'>
                          {yAxisValue}
                        </Text>
                        <foreignObject
                          key={`bar-stack-${barStack.index}-${bar.index}`}
                          x={barThickness * bar.index + offset}
                          y={bar.y}
                          width={barThicknessAdjusted}
                          height={bar.height}
                          style={{ background: bar.color, border: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px solid #333`, ...style }}
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
                      </Group>
                    </Group>
                  )
                })
              )
            }
          </BarStack>
        )}

        {/* Stacked Horizontal */}
        {config.visualizationSubType === 'stacked' && isHorizontal && (
          <>
            <BarStackHorizontal data={data} keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys} height={yMax} y={d => d[config.runtime.yAxis.dataKey]} xScale={xScale} yScale={yScale} color={colorScale} offset='none'>
              {barStacks =>
                barStacks.map(barStack =>
                  updateBars(barStack.bars).map((bar, index) => {
                    let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                    let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                    config.barHeight = Number(config.barHeight)
                    let labelColor = '#000000'
                    // tooltips
                    const xAxisValue = formatNumber(data[bar.index][bar.key], 'left')
                    const yAxisValue = config.runtime.yAxis.type === 'date' ? formatDate(parseDate(data[bar.index][config.runtime.originalXAxis.dataKey])) : data[bar.index][config.runtime.originalXAxis.dataKey]
                    const style = applyRadius(barStack.index)
                    let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                    let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                    if (!hasMultipleSeries) {
                      xAxisTooltip = config.isLegendValue ? `${bar.key}: ${xAxisValue}` : config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisTooltip
                    }
                    const tooltip = `<div>
                    ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries ? `${config.runtime.seriesLabels[bar.key] || ''}<br/>` : ''}
                    ${yAxisTooltip}<br />
                    ${xAxisTooltip}
                      </div>`

                    if (chroma.contrast(labelColor, bar.color) < 4.9) {
                      labelColor = '#FFFFFF'
                    }

                    return (
                      <>
                        <style>
                          {`
                         #barStack${barStack.index}-${bar.index} rect,
                         #barStack${barStack.index}-${bar.index} foreignObject{
                          animation-delay: ${barStack.index * 0.5}s;
                          transform-origin: ${bar.x}px
                        }
                      `}
                        </style>
                        <Group key={index} id={`barStack${barStack.index}-${bar.index}`} className='stack horizontal'>
                          <foreignObject
                            key={`barstack-horizontal-${barStack.index}-${bar.index}-${index}`}
                            className={`animated-chart group ${animatedChart ? 'animated' : ''}`}
                            x={bar.x}
                            y={bar.y}
                            width={bar.width}
                            height={bar.height}
                            style={{ background: bar.color, border: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px solid #333`, ...style }}
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

                          {orientation === 'horizontal' && visualizationSubType === 'stacked' && isLabelBelowBar && barStack.index === 0 && !config.yAxis.hideLabel && (
                            <Text
                              x={`${bar.x + (config.isLollipopChart ? 15 : 5)}`} // padding
                              y={bar.y + bar.height * 1.2}
                              fill={'#000000'}
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
                              innerRef={e => {
                                if (e) {
                                  // use font sizes and padding to set the bar height
                                  let elem = e.getBBox()
                                  setTextWidth(elem.width)
                                }
                              }}
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
        )}

        {/* Bar Groups: Not Stacked */}
        {config.visualizationSubType !== 'stacked' && (
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
                        xAxisTooltip = config.isLegendValue ? `${bar.key}: ${xAxisValue}` : config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                      }
                      if (!hasMultipleSeries && !config.runtime.horizontal) {
                        yAxisTooltip = config.isLegendValue ? `${bar.key}: ${yAxisValue}` : config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                      }

                      const tooltip = `<div>
                      ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries ? `${config.runtime.seriesLabels[bar.key] || ''}<br/>` : ''}
                      ${yAxisTooltip}<br />
                      ${xAxisTooltip}
                        </div>`

                      const isRegularLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'regular'
                      const isTwoToneLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                      const isHighlightedBar = config.orientation === 'vertical' ? highlightedBarValues?.includes(xAxisValue) : highlightedBarValues?.includes(yAxisValue)
                      const highlightedBarColor = config.orientation === 'vertical' ? getHighlightedBarColorByValue(xAxisValue) : getHighlightedBarColorByValue(yAxisValue)
                      const highlightedBar = config.orientation === 'vertical' ? getHighlightedBarByValue(xAxisValue) : getHighlightedBarByValue(yAxisValue)

                      const background = () => {
                        if (isRegularLollipopColor) return barColor
                        if (isTwoToneLollipopColor) return chroma(barColor).brighten(1)
                        if (isHighlightedBar) return 'transparent'
                        // loop through shared filters and get active values
                        if (dashboardConfig && dashboardConfig?.dashboard.sharedFilters?.length > 0) {
                          let activeFilters = []
                          let backgroundColor = barColor

                          const checkForResetValue = () => {
                            return dashboardConfig.dashboard.sharedFilters?.map((filter, index) => {
                              if (filter.resetLabel === filter.active) {
                                backgroundColor = barColor
                              } else {
                                return backgroundColor
                              }
                            })
                          }

                          dashboardConfig.dashboard.sharedFilters?.forEach((filter, index) => {
                            activeFilters.push(filter.active)
                          })

                          // if reset value is found use that.

                          if (config.orientation === 'horizontal') {
                            if (!activeFilters.includes(yAxisValue)) {
                              backgroundColor = '#ccc'
                            }
                          }

                          if (config.orientation !== 'horizontal') {
                            if (!activeFilters.includes(xAxisValue)) {
                              backgroundColor = '#ccc'
                            }
                          }
                          checkForResetValue()
                          return backgroundColor
                        }
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
        )}
      </Group>
    </ErrorBoundary>
  )
}
