import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { useBarChart } from '../hooks/useBarChart'
import { BarStackHorizontal } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'

// third party
import chroma from 'chroma-js'

const BarChartStackedHorizontal = props => {
  const { xScale, yScale, xMax, yMax } = props
  const { transformedData: data, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter, animatedChart, getTextWidth } = useContext(ConfigContext)
  const { isHorizontal, barBorderWidth, hasMultipleSeries, applyRadius, updateBars, isLabelBelowBar, displayNumbersOnBar, fontSize } = useBarChart()
  const { orientation, visualizationSubType } = config

  return (
    config.visualizationSubType === 'stacked' &&
    isHorizontal && (
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
                let textWidth = getTextWidth(xAxisValue, `normal ${fontSize[config.fontSize]}px sans-serif`)
                if (!hasMultipleSeries) {
                  xAxisTooltip = config.isLegendValue ? `${bar.key}: ${xAxisValue}` : config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisTooltip
                }
                const tooltip = `<div>
                    ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries ? `${config.runtime.seriesLabels[bar.key] || ''}<br/>` : ''}
                    ${yAxisTooltip}<br />
                    ${xAxisTooltip}
                      </div>`

                console.log('test', colorScale(config.runtime.seriesLabels[bar.key]))
                if (chroma.contrast(labelColor, colorScale(config.runtime.seriesLabels[bar.key])) < 4.9) {
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
<<<<<<< Updated upstream
                      ></foreignObject>
=======
                      >
                        <div style={{ width: bar.width, height: bar.height, background: colorScale(config.runtime.seriesLabels[bar.key]), border: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px solid #333`, ...style }}></div>
                      </foreignObject>
>>>>>>> Stashed changes

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
    )
  )
}

export default BarChartStackedHorizontal
