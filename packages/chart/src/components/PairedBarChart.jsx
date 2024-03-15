import React, { useContext } from 'react'
import { Group } from '@visx/group'
import { Bar } from '@visx/shape'
import { scaleLinear } from '@visx/scale'
import { Text } from '@visx/text'

import ConfigContext from '../ConfigContext'
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'

const PairedBarChart = ({ width, height, originalWidth }) => {
  const { config, colorScale, transformedData: data, formatNumber, seriesHighlight, getTextWidth } = useContext(ConfigContext)

  if (!config || config?.series?.length < 2) return

  const borderWidth = config.barHasBorder === 'true' ? 1 : 0
  const halfWidth = width / 2
  const fontSize = { small: 16, medium: 18, large: 20 }
  const offset = 1.02 // Offset of the left bar from the Axis

  const groupOne = {
    parentKey: config.dataDescription.seriesKey,
    dataKey: config.series[0].dataKey,
    dataKeyLabel: config.runtime.seriesLabels[config.series[0].dataKey] || config.series[0].dataKey,
    color: colorScale(config.runtime.seriesLabels[config.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      data.map(item => item[config.series[0].dataKey])
    ),
    labelColor: ''
  }

  const groupTwo = {
    parentKey: config.dataDescription.seriesKey,
    dataKey: config.series[1].dataKey,
    dataKeyLabel: config.runtime.seriesLabels[config.series[1].dataKey] || config.series[1].dataKey,
    color: colorScale(config.runtime.seriesLabels[config.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      data.map(item => item[config.series[1].dataKey])
    ),
    labelColor: ''
  }

  const xScale = scaleLinear({
    domain: [0, Math.max(groupOne.max * offset, groupTwo.max * 1.1)],
    range: [0, halfWidth]
  })

  // Set label color
  groupOne.labelColor = getContrastColor('#000', groupOne.color)
  groupTwo.labelColor = getContrastColor('#000', groupTwo.color)

  const label = config.yAxis.label ? `${config.yAxis.label}: ` : ''

  const dataTipOne = d => {
    return `<p>
				${config.dataDescription.seriesKey}: ${groupOne.dataKeyLabel}<br/>
				${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}<br/>
				${label}${formatNumber(d[groupOne.dataKey], 'left')}
			</p>`
  }

  const dataTipTwo = d => {
    return `<p>
				${config.dataDescription.seriesKey}: ${groupTwo.dataKeyLabel}<br/>
				${config.xAxis.dataKey}: ${d[config.xAxis.dataKey]}<br/>
				${label}${formatNumber(d[groupTwo.dataKey], 'left')}
			</p>`
  }

  return (
    width > 0 && (
      <>
        <style>
          {`
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`}
        </style>
        <svg id='cdc-visualization__paired-bar-chart' width={originalWidth} height={height} viewBox={`0 0 ${width + Number(config.runtime.yAxis.size)} ${height}`} role='img' tabIndex={0}>
          <title>{`Paired bar chart graphic with the title ${config.title ? config.title : 'No Title Found'}`}</title>
          <Group top={0} left={Number(config.xAxis.size)}>
            {data
              .filter(item => config.series[0].dataKey === groupOne.dataKey)
              .map((d, index) => {
                let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(config.series[0].dataKey) === -1
                let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(config.series[0].dataKey) !== -1
                let barWidth = xScale(d[config.series[0].dataKey])
                let barHeight = Number(config.barHeight) ? Number(config.barHeight) : 25
                // update bar Y to give dynamic Y when user applyes BarSpace
                let y = 0
                y = index !== 0 ? (Number(config.barSpace) + barHeight + borderWidth) * index : y
                const totalheight = (Number(config.barSpace) + barHeight + borderWidth) * data.length
                config.heights.horizontal = totalheight
                // check if text fits inside of the  bar including suffix/prefix,comma,fontSize ..etc
                const textWidth = getTextWidth(formatNumber(d[groupOne.dataKey], 'left'), `normal ${fontSize[config.fontSize]}px sans-serif`)
                const textFits = textWidth < barWidth - 5 // minus padding dx(5)

                return (
                  <>
                    <Group key={`group-${groupOne.dataKey}-${d[config.xAxis.dataKey]}`} className='horizontal'>
                      <Bar
                        id={`bar-${groupOne.dataKey}-${d[config.dataDescription.xKey]}`}
                        className='bar group-1'
                        key={`bar-${groupOne.dataKey}-${d[config.dataDescription.xKey]}`}
                        x={halfWidth - barWidth}
                        y={y}
                        width={xScale(d[config.series[0].dataKey])}
                        height={barHeight}
                        fill={groupOne.color}
                        data-tooltip-html={dataTipOne(d)}
                        data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                        stroke='#333'
                        strokeWidth={borderWidth}
                        opacity={transparentBar ? 0.5 : 1}
                        display={displayBar ? 'block' : 'none'}
                        tabIndex={-1}
                      />
                      {config.yAxis.displayNumbersOnBar && displayBar && (
                        <Text textAnchor={textFits ? 'start' : 'end'} dx={textFits ? 5 : -5} verticalAnchor='middle' x={halfWidth - barWidth} y={y + config.barHeight / 2} fill={textFits ? groupOne.labelColor : '#000'}>
                          {formatNumber(d[groupOne.dataKey], 'left')}
                        </Text>
                      )}
                    </Group>
                  </>
                )
              })}
            {data
              .filter(item => config.series[1].dataKey === groupTwo.dataKey)
              .map((d, index) => {
                let barWidth = xScale(d[config.series[1].dataKey])
                let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(config.series[1].dataKey) === -1
                let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(config.series[1].dataKey) !== -1
                let barHeight = config.barHeight ? Number(config.barHeight) : 25
                // update bar Y to give dynamic Y when user applyes BarSpace
                let y = 0
                y = index !== 0 ? (Number(config.barSpace) + barHeight + borderWidth) * index : y
                const totalheight = (Number(config.barSpace) + barHeight + borderWidth) * data.length
                config.heights.horizontal = totalheight
                // check if text fits inside of the  bar including suffix/prefix,comma,fontSize ..etc
                const textWidth = getTextWidth(formatNumber(d[groupTwo.dataKey], 'left'), `normal ${fontSize[config.fontSize]}px sans-serif`)
                const isTextFits = textWidth < barWidth - 5 // minus padding dx(5)

                return (
                  <>
                    <style>
                      {`
                      .bar-${groupTwo.dataKey}-${d[config.xAxis.dataKey]} {
                          transform-origin: ${halfWidth}px ${y}px
                      }
							      `}
                    </style>
                    <Group key={`group-${groupTwo.dataKey}-${d[config.dataDescription.xKey]}`} className='horizontal'>
                      <Bar
                        id={`bar-${groupTwo.dataKey}-${d[config.dataDescription.xKey]}`}
                        className='bar group-2'
                        key={`bar-${groupTwo.dataKey}-${d[config.dataDescription.xKey]}`}
                        x={halfWidth}
                        y={y}
                        width={xScale(d[config.series[1].dataKey])}
                        height={barHeight}
                        fill={groupTwo.color}
                        data-tooltip-html={dataTipTwo(d)}
                        data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                        strokeWidth={borderWidth}
                        stroke='#333'
                        opacity={transparentBar ? 0.5 : 1}
                        display={displayBar ? 'block' : 'none'}
                        tabIndex={-1}
                      />
                      {config.yAxis.displayNumbersOnBar && displayBar && (
                        <Text textAnchor={isTextFits ? 'end' : 'start'} dx={isTextFits ? -5 : 5} verticalAnchor='middle' x={halfWidth + barWidth} y={y + config.barHeight / 2} fill={isTextFits ? groupTwo.labelColor : '#000'}>
                          {formatNumber(d[groupTwo.dataKey], 'left')}
                        </Text>
                      )}
                    </Group>
                  </>
                )
              })}
          </Group>
        </svg>
      </>
    )
  )
}

export default PairedBarChart
