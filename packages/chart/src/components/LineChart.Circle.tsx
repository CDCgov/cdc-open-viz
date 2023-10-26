import React from 'react'

// todo: change this config obj to ChartConfig once its created
type LineChartCircleProps = {
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
  const filtered = config?.series.filter(s => s.dataKey === seriesKey)[0]

  if (lineDatapointStyle === 'hidden') return null

  const getColor = (displayArea, colorScale, config, seriesIndex, hoveredKey, seriesKey) => {
    const customColors = config.customColors || []
    const seriesLabels = config.runtime.seriesLabels || []
    let color

    const getIndex = seriesKey => config.runtime.seriesLabelsAll.indexOf(seriesKey)

    if (displayArea) {
      if (colorScale) {
        if (getIndex(hoveredKey) === false) return
        color = customColors.length > 0 ? customColors[getIndex(hoveredKey)] : colorScale(seriesLabels[hoveredKey] || seriesKey)
      } else if (customColors) {
        color = customColors.length > 0 ? customColors[getIndex(hoveredKey)] : 'transparent'
      }
    } else {
      color = 'transparent'
    }
    console.log('color', color)
    return color
  }

  if (lineDatapointStyle === 'always show') {
    return (
      <circle
        cx={config.xAxis.type === 'categorical' ? xScale(d[config.xAxis.dataKey]) : xScale(parseDate(d[config.xAxis.dataKey]))}
        cy={filtered.axis === 'Right' ? yScaleRight(d[filtered.dataKey]) : yScale(d[filtered.dataKey])}
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
    let hoveredSeriesValue
    let hoveredSeriesIndex
    let hoveredSeriesData = tooltipData.data.filter(d => d[0] === seriesKey)
    let hoveredSeriesKey = hoveredSeriesData[0][0]
    let hoveredSeriesAxis = hoveredSeriesData[0][2]
    hoveredSeriesIndex = tooltipData.data.indexOf(hoveredSeriesKey)
    hoveredSeriesValue = hoveredSeriesData[0][1]

    console.log('hoveredSeriesKey', hoveredSeriesKey)
    console.log('hoveredSeriesAxis', hoveredSeriesAxis)
    console.log('hoveredSeriesValue', hoveredSeriesValue)

    console.log('hoveredSeriesData', hoveredSeriesData)
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
          fill={getColor(displayArea, colorScale, config, seriesIndex, hoveredSeriesKey, seriesKey)}
          style={{ filter: 'unset', opacity: 1 }}
        />
      )
    })
  }

  return null
}

export default LineChartCircle
