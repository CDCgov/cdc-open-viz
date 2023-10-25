import React, { useContext } from 'react'

import * as allCurves from '@visx/curve'
import { Group } from '@visx/group'
import { LinePath, Bar } from '@visx/shape'
import { Text } from '@visx/text'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../ConfigContext'
import useRightAxis from '../hooks/useRightAxis'

// todo: change this config obj to ChartConfig once its created
type LineCircle = {
  config: {
    xAxis: string
    data: Object[]
    lineDatapointStyle: string
    runtime: Object
  }
  d?: Object
  displayArea: boolean
  seriesKey: string
  tooltipData: {
    data: []
    tooltipDataX: number
    tooltipDataY: number
  }
}

const LineChart = ({ xScale, yScale, getXAxisData, getYAxisData, xMax, yMax, handleTooltipMouseOver, handleTooltipMouseOff, showTooltip, seriesStyle = 'Line', svgRef, handleTooltipClick, tooltipData }) => {
  // Not sure why there's a redraw here.

  const { colorPalettes, transformedData: data, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, isNumber, updateConfig, handleLineType, dashboardConfig, tableData } = useContext(ConfigContext)
  const { yScaleRight } = useRightAxis({ config, yMax, data, updateConfig })

  if (!handleTooltipMouseOver) return
  const handleAxisFormating = (axis = 'left', label, value) => {
    // if this is an x axis category/date value return without doing any formatting.
    // if (label === config.runtime.xAxis.label) return value
    axis = String(axis).toLocaleLowerCase()
    if (label) {
      return `${label}: ${formatNumber(value, axis)}`
    }
    return `${formatNumber(value, axis)}`
  }

  // TODO: update circle radii in initial state and update everywhere.
  const LineCircle = (props: LineCircle) => {
    const { config, d, displayArea, seriesKey, tooltipData } = props
    const { lineDatapointStyle } = config

    if (lineDatapointStyle === 'hidden') return null

    const getColor = (displayArea, colorScale, config, seriesIndex, hoveredKey, seriesKey) => {
      const customColors = config.customColors || []
      const seriesLabels = config.runtime.seriesLabels || []

      const getIndex = seriesKey => config.runtime.seriesLabelsAll.indexOf(seriesKey)

      if (displayArea) {
        if (colorScale) {
          if (getIndex(hoveredKey) === false) return
          return customColors.length > 0 ? customColors[getIndex(hoveredKey)] : colorScale(seriesLabels[hoveredKey] || seriesKey)
        } else {
          return '#000'
        }
      } else {
        return 'transparent'
      }
    }

    if (lineDatapointStyle === 'always show') {
      return (
        <circle
          cx={config.xAxis.type === 'categorical' ? xScale(d[config.xAxis.dataKey]) : xScale(parseDate(d[config.xAxis.dataKey]))}
          cy={yScale(d[seriesKey])}
          r={4.5}
          opacity={d[seriesKey] ? 1 : 0}
          fillOpacity={1}
          fill={displayArea ? (colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[seriesKey] : seriesKey) : '#000') : 'transparent'}
          style={{ filter: 'unset', opacity: 1 }}
        />
      )
    }

    if (lineDatapointStyle === 'hover') {
      if (!tooltipData) return
      if (!tooltipData.data) return
      let hoveredXValue = tooltipData?.data?.[0]?.[1]
      if (!hoveredXValue) return
      return tooltipData.data.map((tooltipItem, index) => {
        let yIndex = tooltipData?.data?.[Number(index) + 1]?.[1]
        let hoveredKey = tooltipData?.data?.[Number(index) + 1]?.[0]
        let seriesIndex = config.runtime.seriesLabelsAll.indexOf(hoveredXValue)
        if (isNaN(yIndex)) return <></>
        return (
          <circle
            cx={config.xAxis.type === 'categorical' ? xScale(hoveredXValue) : xScale(parseDate(hoveredXValue))}
            cy={yIndex ? yScale(yIndex) : null}
            r={4.5}
            opacity={1}
            fillOpacity={1}
            fill={getColor(displayArea, colorScale, config, seriesIndex, hoveredKey, seriesKey)}
            style={{ filter: 'unset', opacity: 1 }}
          />
        )
      })
    }

    return null
  }

  const DEBUG = false

  return (
    <ErrorBoundary component='LineChart'>
      <Group left={config.runtime.yAxis.size ? parseInt(config.runtime.yAxis.size) : 66}>
        {' '}
        {/* left - expects a number not a string */}
        {(config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map((seriesKey, index) => {
          let lineType = config.series.filter(item => item.dataKey === seriesKey)[0].type
          const seriesData = config.series.filter(item => item.dataKey === seriesKey)
          const seriesAxis = seriesData[0].axis ? seriesData[0].axis : 'left'

          let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(seriesKey) !== -1

          return (
            <Group
              key={`series-${seriesKey}`}
              opacity={config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(seriesKey) === -1 ? 0.5 : 1}
              display={config.legend.behavior === 'highlight' || (seriesHighlight.length === 0 && !config.legend.dynamicLegend) || seriesHighlight.indexOf(seriesKey) !== -1 ? 'block' : 'none'}
            >
              {data.map((d, dataIndex) => {
                // Find the series object from the config.series array that has a dataKey matching the seriesKey variable.
                const series = config.series.find(({ dataKey }) => dataKey === seriesKey)
                const { axis } = series

                const xAxisValue = config.runtime.xAxis.type === 'date' ? formatDate(parseDate(d[config.runtime.xAxis.dataKey])) : d[config.runtime.xAxis.dataKey]
                const yAxisValue = getYAxisData(d, seriesKey)
                const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1
                const labeltype = axis === 'Right' ? 'rightLabel' : 'label'
                let label = config.runtime.yAxis[labeltype]
                // if has muiltiple series dont show legend value on tooltip
                if (!hasMultipleSeries) label = config.isLegendValue ? config.runtime.seriesLabels[seriesKey] : label

                return (
                  d[seriesKey] !== undefined &&
                  d[seriesKey] !== '' &&
                  d[seriesKey] !== null &&
                  isNumber(d[seriesKey]) && (
                    <Group key={`series-${seriesKey}-point-${dataIndex}`} className='checkwidth'>
                      {/* tooltips */}
                      <Bar key={'bars'} width={Number(xMax)} height={Number(yMax)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} onMouseMove={e => handleTooltipMouseOver(e, tableData)} onMouseOut={handleTooltipMouseOff} onClick={e => handleTooltipClick(e, data)} />

                      {/* Render legend */}
                      <Text display={config.labels ? 'block' : 'none'} x={xScale(getXAxisData(d))} y={seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey))} fill={'#000'} textAnchor='middle'>
                        {formatNumber(d[seriesKey], 'left')}
                      </Text>

                      {config.lineDatapointStyle === 'hidden' || (config.lineDatapointStyle === 'always show' && <LineCircle d={d} config={config} seriesKey={seriesKey} displayArea={displayArea} tooltipData={tooltipData} />)}
                    </Group>
                  )
                )
              })}

              <>{config.lineDatapointStyle === 'hover' && <LineCircle config={config} seriesKey={seriesKey} displayArea={displayArea} tooltipData={tooltipData} />}</>

              <LinePath
                curve={allCurves[seriesData[0].lineType]}
                data={data}
                x={d => xScale(getXAxisData(d))}
                y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey)))}
                stroke={
                  config.customColors
                    ? config.customColors[index]
                    : colorScale
                    ? colorPalettes[config.palette][index]
                    : // fallback
                      '#000'
                }
                strokeWidth={2}
                strokeOpacity={1}
                strokeDasharray={lineType ? handleLineType(lineType) : 0}
                defined={(item, i) => {
                  return item[seriesKey] !== '' && item[seriesKey] !== null && item[seriesKey] !== undefined
                }}
              />
              {config.animate && (
                <LinePath
                  className='animation'
                  curve={seriesData.lineType}
                  data={data}
                  x={d => xScale(getXAxisData(d))}
                  y={d => (seriesAxis === 'Right' ? yScaleRight(getYAxisData(d, seriesKey)) : yScale(getYAxisData(d, seriesKey)))}
                  stroke='#fff'
                  strokeWidth={3}
                  strokeOpacity={1}
                  shapeRendering='geometricPrecision'
                  strokeDasharray={lineType ? handleLineType(lineType) : 0}
                  defined={(item, i) => {
                    return isNumber(item[config.runtime.seriesLabels[seriesKey]])
                  }}
                />
              )}
              {/* Render series labels at end if each line if selected in the editor */}
              {config.showLineSeriesLabels &&
                (config.runtime.lineSeriesKeys || config.runtime.seriesKeys).map(seriesKey => {
                  let lastDatum
                  for (let i = data.length - 1; i >= 0; i--) {
                    if (data[i][seriesKey]) {
                      lastDatum = data[i]
                      break
                    }
                  }
                  if (!lastDatum) {
                    return <></>
                  }
                  return (
                    <text x={xScale(getXAxisData(lastDatum)) + 5} y={yScale(getYAxisData(lastDatum, seriesKey))} alignmentBaseline='middle' fill={config.colorMatchLineSeriesLabels && colorScale ? colorScale(config.runtime.seriesLabels[seriesKey] || seriesKey) : 'black'}>
                      {config.runtime.seriesLabels[seriesKey] || seriesKey}
                    </text>
                  )
                })}
            </Group>
          )
        })}
        {/* Message when dynamic legend and nothing has been picked */}
        {config.legend.dynamicLegend && seriesHighlight.length === 0 && (
          <Text x={xMax / 2} y={yMax / 2} fill='black' textAnchor='middle' color='black'>
            {config.legend.dynamicLegendChartMessage}
          </Text>
        )}
      </Group>
    </ErrorBoundary>
  )
}

export default LineChart
