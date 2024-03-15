import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { useBarChart } from '../../../hooks/useBarChart'
import { BarStackHorizontal } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { WCAG_CONTRAST_RATIO } from '@cdc/core/helpers/cove/accessibility'

// third party
import chroma from 'chroma-js'

// types
import BarChartContext, { type BarChartContextValues } from './context'
import { type ChartContext } from '../../../types/ChartContext'

import createBarElement from '@cdc/core/components/createBarElement'

const BarChartStackedHorizontal = () => {
  const { yMax, yScale, xScale } = useContext<BarChartContextValues>(BarChartContext)

  // prettier-ignore
  const {
    animatedChart,
    colorScale,
    config,
    formatDate,
    formatNumber,
    getTextWidth,
    parseDate,
    seriesHighlight,
    setSharedFilter,
    transformedData: data
  } = useContext<ChartContext>(ConfigContext)

  // prettier-ignore
  const { barBorderWidth, displayNumbersOnBar, fontSize, getAdditionalColumn, hoveredBar, isHorizontal, isLabelBelowBar, onMouseLeaveBar, onMouseOverBar, updateBars, barStackedSeriesKeys } = useBarChart()

  const { orientation, visualizationSubType } = config
  return (
    config.visualizationSubType === 'stacked' &&
    isHorizontal && (
      <>
        <BarStackHorizontal data={data} keys={barStackedSeriesKeys} height={yMax} y={d => d[config.runtime.yAxis.dataKey]} xScale={xScale} yScale={yScale} color={colorScale} offset='none'>
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
                let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                let textWidth = getTextWidth(xAxisValue, `normal ${fontSize[config.fontSize]}px sans-serif`)

                const additionalColTooltip = getAdditionalColumn(hoveredBar)
                const tooltipBody = `${config.runtime.seriesLabels[bar.key]}: ${xAxisValue}`
                const tooltip = `<ul>
                  <li class="tooltip-heading"">${yAxisTooltip}</li>
                  <li class="tooltip-body ">${tooltipBody}</li>
                  <li class="tooltip-body ">${additionalColTooltip}</li>
                    </li></ul>`

                if (chroma.contrast(labelColor, colorScale(config.runtime.seriesLabels[bar.key])) < WCAG_CONTRAST_RATIO) {
                  labelColor = '#FFFFFF'
                }

                return (
                  <>
                    <Group key={index} id={`barStack${barStack.index}-${bar.index}`} className='stack horizontal'>
                      {createBarElement({
                        config: config,
                        seriesHighlight,
                        index: barStack.index,
                        className: `animated-chart group ${animatedChart ? 'animated' : ''}`,
                        background: colorScale(config.runtime.seriesLabels[bar.key]),
                        borderColor: '#333',
                        borderStyle: 'solid',
                        borderWidth: `${config.barHasBorder === 'true' ? barBorderWidth : 0}px`,
                        width: bar.width,
                        height: bar.height,
                        x: bar.x,
                        y: bar.y,
                        onMouseOver: () => onMouseOverBar(yAxisValue, bar.key),
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
                          animationDelay: `${barStack.index * 0.5}s`,
                          transformOrigin: `${bar.x}px 0`,
                          opacity: transparentBar ? 0.2 : 1,
                          display: displayBar ? 'block' : 'none'
                        }
                      })}

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
