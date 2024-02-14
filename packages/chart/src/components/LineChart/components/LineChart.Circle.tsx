import React from 'react'
import chroma from 'chroma-js'
import { type ChartConfig } from '../../../types/ChartConfig'

// todo: change this config obj to ChartConfig once its created
type LineChartCircleProps = {
  circleData: object[]
  config: ChartConfig
  data: object[]
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
  dataIndex: number
  mode: 'ISOLATED_POINTS' | 'HOVER_POINTS' | 'ALWAYS_SHOW_POINTS'
}

const LineChartCircle = (props: LineChartCircleProps) => {
  const { config, d, displayArea, seriesKey, tooltipData, xScale, yScale, colorScale, parseDate, yScaleRight, data, circleData, dataIndex, mode } = props
  const { lineDatapointStyle } = config
  const filtered = config?.series.filter(s => s.dataKey === seriesKey)?.[0]
  // If we're not showing the circle, simply return
  const getColor = (displayArea: boolean, colorScale: Function, config: ChartConfig, hoveredKey: string, seriesKey: string) => {
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
  const getXPos = hoveredXValue => {
    return (config.xAxis.type === 'categorical' ? xScale(hoveredXValue) : xScale(parseDate(hoveredXValue))) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
  }
  if (mode === 'ALWAYS_SHOW_POINTS') {
    if (lineDatapointStyle === 'hidden') return <></>
    const getIndex = seriesKey => config.runtime.seriesLabelsAll.indexOf(seriesKey)

    if (lineDatapointStyle === 'always show') {
      const isMatch = circleData?.some(cd => cd[config.xAxis.dataKey] === d[config.xAxis.dataKey] && cd[seriesKey] === d[seriesKey])
      if (isMatch) {
        return <></>
      }
      return (
        <circle
          cx={getXPos(hoveredXValue)}
          cy={filtered.axis === 'Right' ? yScaleRight(d[filtered.dataKey]) : yScale(d[filtered.dataKey])}
          r={4.5}
          opacity={d[seriesKey] ? 1 : 0}
          fillOpacity={1}
          fill={getColor(displayArea, colorScale, config, seriesKey, seriesKey)}
          style={{ filter: 'unset', opacity: 1 }}
        />
      )
    }
  }

  if (mode === 'HOVER_POINTS') {
    if (lineDatapointStyle === 'hover') {
      if (!tooltipData) return
      if (!seriesKey) return
      if (!tooltipData.data) return
      let hoveredXValue = tooltipData?.data?.[0]?.[1]
      if (!hoveredXValue) return

      let hoveredSeriesValue
      let hoveredSeriesIndex
      let hoveredSeriesData = tooltipData.data.filter(d => d[0] === seriesKey)
      let hoveredSeriesKey = hoveredSeriesData?.[0]?.[0]
      let hoveredSeriesAxis = hoveredSeriesData?.[0]?.[2]
      if (!hoveredSeriesKey) return
      hoveredSeriesIndex = tooltipData?.data.indexOf(hoveredSeriesKey)
      hoveredSeriesValue = data?.find(d => {
        return d[config?.xAxis.dataKey] === hoveredXValue
      })?.[seriesKey]

      //    hoveredSeriesValue = extractNumber(hoveredSeriesValue)
      return tooltipData?.data.map((tooltipItem, index) => {
        let seriesIndex = config.runtime.seriesLabelsAll.indexOf(hoveredXValue)

        if (isNaN(hoveredSeriesValue)) return <></>
        const isMatch = circleData?.some(cd => cd[config.xAxis.dataKey] === hoveredXValue)

        if (isMatch) {
          return <></>
        }
        return (
          <circle
            cx={config.xAxis.type === 'categorical' ? xScale(hoveredXValue) : xScale(parseDate(hoveredXValue))}
            cy={hoveredSeriesAxis === 'right' ? yScaleRight(hoveredSeriesValue) : yScale(hoveredSeriesValue)}
            r={4.5}
            opacity={1}
            fillOpacity={1}
            fill={getColor(displayArea, colorScale, config, hoveredSeriesKey, seriesKey)}
            style={{ filter: 'unset', opacity: 1 }}
            key={`line-chart-circle--${JSON.stringify(tooltipItem)}--${index}`}
          />
        )
      })
    }
  }

  if (mode === 'ISOLATED_POINTS') {
    const drawIsolatedPoints = (currentIndex, seriesKey) => {
      const currentPoint = data[currentIndex]
      const previousPoint = data[currentIndex - 1]
      const nextPoint = data[currentIndex + 1]
      if (currentIndex === 0 && nextPoint[seriesKey] === '') {
        return true
      }
      if (currentIndex === data.length - 1 && previousPoint[seriesKey] === '') {
        return true
      }
      if (currentIndex !== 0 && currentPoint[seriesKey] !== '' && previousPoint[seriesKey] === '' && nextPoint[seriesKey] === '') {
        return true
      }
    }

    if (mode) {
      if (drawIsolatedPoints(dataIndex, seriesKey)) {
        return (
          <circle
            cx={config.xAxis.type === 'categorical' ? xScale(d[config.xAxis.dataKey]) : xScale(parseDate(d[config.xAxis.dataKey]))}
            cy={filtered.axis === 'Right' ? yScaleRight(d[filtered.dataKey]) : yScale(d[filtered.dataKey])}
            r={6}
            strokeWidth={2}
            stroke={colorScale(config.runtime.seriesLabels[seriesKey])}
            fill={colorScale(config.runtime.seriesLabels[seriesKey])}
          />
        )
      }
    }
  }

  return null
}

export default LineChartCircle
