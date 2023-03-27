import React, {Fragment, useState, useEffect } from 'react'

// Third Party
import { BarGroup, BarStack } from '@visx/shape'
import { BarStackHorizontal } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import chroma from 'chroma-js'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Helpers
import cleanData from '@cdc/core/helpers/data/cleanData'
import CoveHelper from '@cdc/core/helpers/cove'

// Components - Core
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'

// Visualization
const ChartLinearBar = (
  {
    xScale,
    yScale,
    seriesScale,
    xMax,
    yMax,
    getXAxisData,
    getYAxisData,
    animatedChart,
    visible,
    colorScale,
    seriesHighlight,
    formatNumber,
    colorPalettes,
    formatDate,
    getTextWidth,
    parseDate
  }
) => {
  const { config, updateVisConfigField } = useVisConfig()

  const cleanedData = cleanData(config.data, config.xAxis.dataKey)

  const { orientation, visualizationSubType } = config
  const isHorizontal = orientation === 'horizontal'

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
  const barBorderWidth = 1
  const fontSize = { small: 16, medium: 18, large: 20 }
  const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1

  const applyRadius = (index, isNegative) => {
    if (index === undefined || index === null || !isRounded) return
    let style = {}

    if ((isStacked && index + 1 === stackCount) || !isStacked) {
      if (isNegative) {
        // reverse borderRadius to bottom
        style = isHorizontal ? { borderRadius: `0 ${radius}  ${radius}  0` } : { borderRadius: `0 0 ${radius} ${radius}` }
      } else {
        style = isHorizontal ? { borderRadius: `0 ${radius}  ${radius}  0` } : { borderRadius: `${radius} ${radius} 0 0` }
      }
    }
    if (tipRounding === 'full' && isStacked && index === 0 && stackCount > 1) {
      style = isHorizontal ? { borderRadius: `${radius} 0 0 ${radius}` } : { borderRadius: `0 0 ${radius} ${radius}` }
    }
    if (tipRounding === 'full' && ((isStacked && index === 0 && stackCount === 1) || !isStacked)) {
      style = { borderRadius: radius }
    }
    return style
  }
  // }

  const updateBars = defaultBars => {
    // function updates  stacked && regular && lollipop horizontal bars
    if (config.visualizationType !== 'Bar' && !isHorizontal) return defaultBars

    const barsArr = [ ...defaultBars ]
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
      updateVisConfigField(['heights', 'horizontal'], totalHeight)
    }

    // return new updated bars/groupes
    return barsArr.map((bar, i) => {
      // set bars Y dynamycly to handle space between bars
      let y = 0
      bar.index !== 0 && (y = (barHeight + barSpace + labelHeight) * i)

      return { ...bar, y: y, height: barHeight }
    })
  }

  // Using State
  const [ textWidth, setTextWidth ] = useState(null)

  useEffect(() => {
    if (orientation === 'horizontal' && !config.yAxis.labelPlacement) {
      updateVisConfigField('yAxis', { labelPlacement: 'Below Bar' })
    }
  }, [ config, orientation, updateVisConfigField ])

  useEffect(() => {
    if (config.isLollipopChart === false && config.barHeight < 25) {
      updateVisConfigField('barHeight', 25)
    }
  }, [ config.isLollipopChart, updateVisConfigField ])

  useEffect(() => {
    if (config.visualizationSubType === 'horizontal') {
      updateVisConfigField('orientation', 'horizontal')
    }
  }, [ config.visualizationSubType, updateVisConfigField ])

  useEffect(() => {
    if (config.barStyle === 'lollipop' && !config.isLollipopChart) {
      updateVisConfigField('isLollipopChart', true)
    }

    if (isRounded || config.barStyle === 'flat') {
      updateVisConfigField('isLollipopChart', false)
    }
  }, [ config.barStyle ])

  return (
    <ErrorBoundary component="BarChart">
      <Group left={parseFloat(config.runtime.yAxis.size)}>
        {/* Stacked Vertical */}
        {config.visualizationSubType === 'stacked' && !isHorizontal && (
          <BarStack
            data={cleanedData}
            keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
            color={colorScale}
            x={d => d[config.runtime.xAxis.dataKey]}
            xScale={xScale}
            yScale={yScale}
          >
            {barStacks => barStacks.reverse().map(
              (barStack) => barStack.bars.map(
                (bar, index) => {
                  // Tooltips
                  const xAxisValue = config.runtime.xAxis.type === 'date'
                    ? formatDate(parseDate(config.data[bar.index][config.runtime.xAxis.dataKey]))
                    : config.data[bar.index][config.runtime.xAxis.dataKey]
                  const yAxisValue = formatNumber(bar.bar ? bar.bar.data[bar.key] : 0)
                  const style = applyRadius(barStack.index, yAxisValue < 0)
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
                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barThickness = xMax / barStack.bars.length
                  let barThicknessAdjusted = barThickness * (config.barThickness || 0.8)
                  let offset = (barThickness * (1 - (config.barThickness || 0.8))) / 2

                  return (
                    <Fragment key={index}>
                      <style>
                      {`
                         #barStack${barStack.index}-${bar.index} rect,
                         #barStack${barStack.index}-${bar.index} foreignObject{
                          animation-delay: ${barStack.index * 0.5}s;
                          transform-origin: ${barThicknessAdjusted / 2}px ${bar.y + bar.height}px
                        }
                      `}
                      </style>
                      <Group key={`bar-stack-${barStack.index}-${bar.index}`} id={`barStack${barStack.index}-${bar.index}`} className="stack vertical">
                        <Text
                          display={config.labels && displayBar ? 'block' : 'none'}
                          opacity={transparentBar ? 0.5 : 1}
                          x={barThickness * bar.index + offset} y={bar.y - 5}
                          fill={bar.color}
                          textAnchor="middle">
                          {formatNumber(bar.bar ? bar.bar.data[bar.key] : 0)}
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
                        />
                      </Group>
                    </Fragment>
                  )
                })
              )
            }
          </BarStack>
        )}

        {/* Stacked Horizontal */}
        {config.visualizationSubType === 'stacked' && isHorizontal && (
          <>
            <BarStackHorizontal
              data={cleanedData}
              keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
              color={colorScale}
              height={yMax}
              offset="none"
              y={d => d[config.runtime.yAxis.dataKey]}
              xScale={xScale}
              yScale={yScale}
            >
              {barStacks => barStacks.map(
                (barStack) => updateBars(barStack.bars).map(
                  (bar, index) => {
                    let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                    let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                    config.barHeight = Number(config.barHeight)

                    let labelColor = '#000000'

                    // Tooltips
                    const xAxisValue = formatNumber(config.data[bar.index][bar.key])
                    const yAxisValue = config.runtime.yAxis.type === 'date' ? formatDate(parseDate(config.data[bar.index][config.runtime.originalXAxis.dataKey])) : config.data[bar.index][config.runtime.originalXAxis.dataKey]
                    const style = applyRadius(barStack.index, yAxisValue < 0)
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
                      <Fragment key={index}>
                        <style>
                          {`
                           #barStack${barStack.index}-${bar.index} rect,
                           #barStack${barStack.index}-${bar.index} foreignObject {
                              animation-delay: ${barStack.index * 0.5}s;
                              transform-origin: ${bar.x}px
                            }
                          `}
                        </style>

                        <Group id={`barStack${barStack.index}-${bar.index}`} className="stack horizontal">
                          <foreignObject
                            className={`animated-chart group ${animatedChart ? 'animated' : ''}`}
                            display={displayBar ? 'block' : 'none'}
                            width={bar.width}
                            height={bar.height}
                            style={{ background: bar.color, border: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px solid #333`, ...style }}
                            opacity={transparentBar ? 0.5 : 1}
                            x={bar.x}
                            y={bar.y}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                            data-tooltip-html={tooltip}
                            key={`barstack-horizontal-${barStack.index}-${bar.index}-${index}`}
                          />

                          {orientation === 'horizontal' && visualizationSubType === 'stacked' && isLabelBelowBar && barStack.index === 0 && !config.yAxis.hideLabel && (
                            <Text
                              fill={'#000000'}
                              textAnchor="start"
                              verticalAnchor="start"
                              x={`${bar.x + (config.isLollipopChart ? 15 : 5)}`} // padding
                              y={bar.y + bar.height * 1.2}
                            >
                              {yAxisValue}
                            </Text>
                          )}

                          {displayNumbersOnBar && textWidth + 50 < bar.width && (
                            <Text
                              display={displayBar ? 'block' : 'none'}
                              fill={labelColor}
                              textAnchor="middle"
                              verticalAnchor="middle"
                              x={bar.x + barStack.bars[bar.index].width / 2} // padding
                              y={bar.y + bar.height / 2}
                              innerRef={e => {
                                if (e) setTextWidth(e.getBBox().width) // use font sizes and padding to set the bar height
                              }}
                            >
                              {formatNumber(config.data[bar.index][bar.key])}
                            </Text>
                          )}
                        </Group>
                      </Fragment>
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
              data={cleanedData}
              height={yMax}
              color={() => ('')}
              x0={d => d[config.runtime.originalXAxis.dataKey]}
              x0Scale={config.runtime.horizontal ? yScale : xScale}
              x1Scale={seriesScale}
              yScale={config.runtime.horizontal ? xScale : yScale}
              keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
            >
              {barGroups => updateBars(barGroups).map(
                (barGroup, index) => (
                  <Group
                    className={`bar-group-${barGroup.index}-${barGroup.x0}--${index} ${config.orientation}`}
                    top={config.runtime.horizontal ? barGroup.y : 0}
                    left={config.runtime.horizontal ? 0 : (xMax / barGroups.length) * barGroup.index}
                    key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`}
                  >
                    {barGroup.bars.map((bar, index) => {
                      let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                      let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1

                      let barHeight = orientation === 'horizontal' ? config.barHeight : CoveHelper.Number.equalsValidNumber(Math.abs(yScale(bar.value) - yScale(0))) ? Math.abs(yScale(bar.value) - yScale(0)) : 0
                      let barY = bar.value >= 0 && CoveHelper.Number.equalsValidNumber(bar.value) ? bar.y : yScale(0)
                      let barGroupWidth = ((config.runtime.horizontal ? yMax : xMax) / barGroups.length) * (config.barThickness || 0.8)
                      let offset = (((config.runtime.horizontal ? yMax : xMax) / barGroups.length) * (1 - (config.barThickness || 0.8))) / 2

                      // ! Unsure if this should go back.
                      if (config.isLollipopChart) {
                        offset = (config.runtime.horizontal ? yMax : xMax) / barGroups.length / 2 - lollipopBarWidth / 2
                      }

                      // Add unique color codes to legend
                      const set = new Set()
                      config.data.forEach(d => set.add(d[config.legend.colorCode]))

                      const uniqValues = Array.from(set)
                      let palette = colorPalettes[config.palette].slice(0, uniqValues.length)

                      // Apply bar color from color code
                      let barWidth = config.isLollipopChart ? lollipopBarWidth : barGroupWidth / barGroup.bars.length
                      let barColor = config.runtime.seriesLabels && config.runtime.seriesLabels[bar.key] ? colorScale(config.runtime.seriesLabels[bar.key]) : colorScale(bar.key)
                      while (palette.length < barGroups.length) {
                        palette = palette.concat(palette)
                      }
                      if (config.legend.colorCode && config.series.length === 1) barColor = palette[barGroup.index]

                      // Calculate axis values
                      let yAxisValue = formatNumber(bar.value)
                      let xAxisValue = config.runtime[section].type === 'date'
                        ? formatDate(parseDate(config.data[barGroup.index][config.runtime.originalXAxis.dataKey]))
                        : config.data[barGroup.index][config.runtime.originalXAxis.dataKey]

                      // Swap x and y axis values if horizontal - using tempValue to facilitate swap and maintain original values
                      if (config.runtime.horizontal) {
                        let tempValue = yAxisValue
                        yAxisValue = xAxisValue
                        xAxisValue = tempValue
                        barWidth = config.barHeight
                      }

                      // Check if bar text/value string fits into each bar
                      let textWidth = getTextWidth(xAxisValue, `normal ${fontSize[config.fontSize]}px sans-serif`)
                      let textFits = textWidth < bar.y - 5 // minus padding 5

                      let labelColor = '#000000'

                      // Set label color
                      if (chroma.contrast(labelColor, barColor) < 4.9) {
                        if (textFits) labelColor = '#FFFFFF'
                      }

                      // Set bar radius styles
                      const barRadiusStyles = applyRadius(index, yAxisValue < 0)

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

                      return (
                        <Fragment key={index}>
                          {/* This feels gross but inline transition was not working well*/}
                          <style>{`
                            .linear #barGroup${barGroup.index},
                            .Combo #barGroup${barGroup.index} {
                              transform-origin: 0 ${barY + barHeight}px;
                            }
                          `}</style>
                          <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                            <foreignObject
                              id={`barGroup${barGroup.index}`}
                              width={config.runtime.horizontal ? bar.y : barWidth}
                              height={isHorizontal && !config.isLollipopChart ? barWidth : isHorizontal && config.isLollipopChart ? lollipopBarWidth : barHeight}
                              opacity={transparentBar ? 0.5 : 1}
                              display={displayBar ? 'block' : 'none'}
                              style={{
                                background: config.isLollipopChart && config.lollipopColorStyle === 'regular'
                                  ? barColor
                                  : config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                                    ? chroma(barColor).brighten(1)
                                    : barColor,
                                border: `${config.isLollipopChart ? 0 : config.barHasBorder === 'true' ? barBorderWidth : 0}px solid #333`,
                                ...barRadiusStyles
                              }}
                              x={config.runtime.horizontal ? 0 : barWidth * bar.index + offset}
                              y={config.runtime.horizontal ? barWidth * bar.index : barY}
                              data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                              data-tooltip-html={tooltip}
                              key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                            />

                            {orientation === 'horizontal' && !config.isLollipopChart && displayNumbersOnBar && (
                              <Text // prettier-ignore
                                display={displayBar ? 'block' : 'none'}
                                fill={labelColor}
                                verticalAnchor="middle"
                                textAnchor={textFits ? 'end' : 'start'}
                                x={bar.y}
                                y={config.barHeight / 2 + config.barHeight * bar.index}
                                dx={textFits ? -5 : 5}
                              >
                                {xAxisValue}
                              </Text>
                            )}

                            {orientation === 'horizontal' && config.isLollipopChart && displayNumbersOnBar && (
                              <Text
                                display={displayBar ? 'block' : 'none'}
                                fill={'#000000'}
                                textAnchor="start"
                                verticalAnchor="middle"
                                fontWeight={'normal'}
                                x={`${bar.y + (config.isLollipopChart ? 15 : 5) + (config.isLollipopChart && barGroup.bars.length === bar.index ? offset : 0)}`} // padding
                                y={0}
                              >
                                {xAxisValue}
                              </Text>
                            )}

                            {orientation === 'horizontal' && isLabelBelowBar && !config.yAxis.hideLabel && (
                              <Text x={config.yAxis.hideAxis ? 0 : 5} y={barGroup.height} dy={4} verticalAnchor={'start'} textAnchor={'start'}>
                                {config.runtime.yAxis.type === 'date'
                                  ? formatDate(parseDate(config.data[barGroup.index][config.runtime.originalXAxis.dataKey]))
                                  : isHorizontal
                                    ? config.data[barGroup.index][config.runtime.originalXAxis.dataKey]
                                    : formatNumber(config.data[barGroup.index][config.runtime.originalXAxis.dataKey])}
                              </Text>
                            )}

                            {orientation === 'vertical' && (
                              <Text
                                display={config.labels && displayBar ? 'block' : 'none'}
                                fill={barColor}
                                opacity={transparentBar ? 0.5 : 1}
                                textAnchor="middle"
                                x={barWidth * (bar.index + 0.5) + offset}
                                y={barY - 5}
                              >
                                {formatNumber(bar.value)}
                              </Text>
                            )}

                            {config.isLollipopChart && config.lollipopShape === 'circle' && (
                              <circle
                                style={{ filter: 'unset', opacity: 1 }}
                                fill={barColor}
                                cx={orientation === 'horizontal'
                                  ? bar.y
                                  : barWidth * (barGroup.bars.length - bar.index - 1) + (isLabelBelowBar && orientation === 'horizontal' ? 0 : offset) + lollipopShapeSize / 3.5}
                                cy={orientation === 'horizontal' ? lollipopBarWidth / 2 : bar.y}
                                r={lollipopShapeSize / 2}
                                data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                                data-tooltip-html={tooltip}
                                key={`circle--${bar.index}`}
                              />
                            )}

                            {config.isLollipopChart && config.lollipopShape === 'square' && (
                              <rect
                                style={{ opacity: 1, filter: 'unset' }}
                                width={lollipopShapeSize}
                                height={lollipopShapeSize}
                                fill={barColor}
                                x={orientation === 'horizontal' && bar.y > 10
                                  ? bar.y - lollipopShapeSize / 2
                                  : orientation === 'horizontal' && bar.y < 10
                                    ? 0
                                    : orientation !== 'horizontal'
                                      ? offset - lollipopBarWidth / 2
                                      : barWidth * (barGroup.bars.length - bar.index - 1) + offset - 5.25}
                                y={orientation === 'horizontal' ? 0 - lollipopBarWidth / 2 : barY}
                                data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                                data-tooltip-html={tooltip}
                                key={`circle--${bar.index}`}
                              >
                                <animate attributeName="height" values={`0, ${lollipopShapeSize}`} dur="2.5s"/>
                              </rect>
                            )}
                          </Group>
                        </Fragment>
                      )
                    })}
                  </Group>
                )
              )}
            </BarGroup>

            {Object.keys(config.confidenceKeys).length > 0
              ? config.data.map((d, index) => {
                let xPos = xScale(getXAxisData(d))
                let upperPos = yScale(getYAxisData(d, config.confidenceKeys.lower))
                let lowerPos = yScale(getYAxisData(d, config.confidenceKeys.upper))
                let tickWidth = 5

                return (
                  <path
                    stroke="#333"
                    strokeWidth="2px"
                    d={`
                  M${xPos - tickWidth} ${upperPos}
                  L${xPos + tickWidth} ${upperPos}
                  M${xPos} ${upperPos}
                  L${xPos} ${lowerPos}
                  M${xPos - tickWidth} ${lowerPos}
                  L${xPos + tickWidth} ${lowerPos}`}
                    key={index}
                  />
                )
              })
              : ''}
          </Group>
        )}
      </Group>
    </ErrorBoundary>
  )
}

export default ChartLinearBar
