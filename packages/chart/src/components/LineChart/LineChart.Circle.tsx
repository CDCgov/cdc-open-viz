import React from 'react'
import chroma from 'chroma-js'
import { type ChartConfig } from '../../types/ChartConfig'

// todo: change this config obj to ChartConfig once its created
type LineChartCircleProps = {
  config: ChartConfig
  d?: Object
  displayArea: boolean
  seriesKey: string
  tooltipData: {
    data: []
    tooltipDataX: number
    tooltipDataY: number
  }
  xScale: any
  yScale: any
  yScaleRight: any
  colorScale: any
  parseDate: any
  seriesAxis: string
}

const LineChartCircle = (props: LineChartCircleProps) => {
  const { config, d, displayArea, seriesKey, tooltipData, xScale, yScale, colorScale, parseDate, yScaleRight } = props
  const { lineDatapointStyle } = config
  const filtered = config?.series.filter(s => s.dataKey === seriesKey)?.[0]

  // If we're not showing the circle, simply return
  if (lineDatapointStyle === 'hidden') return null

  const getIndex = seriesKey => config.runtime.seriesLabelsAll.indexOf(seriesKey)

  const getColor = (
    displayArea: boolean,
    colorScale: Function,
    config: ChartConfig,
    hoveredKey: string,
    seriesKey: string
  ) => {
    const seriesLabels = config.runtime.seriesLabels || []
    let color

    if (displayArea) {
      color = colorScale(seriesLabels[hoveredKey] || seriesKey)
    } else {
      color = 'transparent'
    }

    if (config.lineDatapointColor === 'Lighter than Line' && color !== 'transparent' && color) {
      color = chroma(color).brighten(1)
    }
    return color
  }

  if (lineDatapointStyle === 'always show') {
    console.log('series index: ', getIndex(config.runtime.seriesLabels[seriesKey]))
    return (
      <circle
        cx={
          config.xAxis.type === 'categorical'
            ? xScale(d[config.xAxis.dataKey])
            : xScale(parseDate(d[config.xAxis.dataKey]))
        }
        cy={filtered.axis === 'Right' ? yScaleRight(d[filtered.dataKey]) : yScale(d[filtered.dataKey])}
        r={4.5}
        opacity={d[seriesKey] ? 1 : 0}
        fillOpacity={1}
        fill={getColor(displayArea, colorScale, config, seriesKey, seriesKey)}
        style={{ filter: 'unset', opacity: 1 }}
      />
    )
  }

  if (lineDatapointStyle === 'hover') {
    if (!tooltipData) return
    if (!tooltipData.data) return
    let hoveredXValue = tooltipData?.data?.[0]?.[1]
    if (!hoveredXValue) return
    let hoveredSeriesValue
    let hoveredSeriesIndex
    let hoveredSeriesData = tooltipData.data.filter(d => d[0] === seriesKey)
    let hoveredSeriesKey = hoveredSeriesData?.[0]?.[0]
    let hoveredSeriesAxis = hoveredSeriesData?.[0]?.[2]
    hoveredSeriesIndex = tooltipData.data.indexOf(hoveredSeriesKey)
    hoveredSeriesValue = hoveredSeriesData?.[0]?.[1]

    return tooltipData.data.map((tooltipItem, index) => {
      let seriesIndex = config.runtime.seriesLabelsAll.indexOf(hoveredXValue)

      if (isNaN(hoveredSeriesValue)) return <></>
      return (
        <circle
          cx={config.xAxis.type === 'categorical' ? xScale(hoveredXValue) : xScale(parseDate(hoveredXValue))}
          cy={hoveredSeriesAxis === 'right' ? yScaleRight(hoveredSeriesValue) : yScale(hoveredSeriesValue)}
          r={4.5}
          opacity={1}
          fillOpacity={1}
          fill={getColor(displayArea, colorScale, config, hoveredSeriesKey, seriesKey)}
          style={{ filter: 'unset', opacity: 1 }}
          key={`line-chart-circle--${index}`}
        />
      )
    })
  }

  return null
}

export default LineChartCircle
