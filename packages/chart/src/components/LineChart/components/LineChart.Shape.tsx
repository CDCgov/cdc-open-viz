import React from 'react'
import chroma from 'chroma-js'
import { type ChartConfig } from '../../../types/ChartConfig'
import VisxShape from '@cdc/core/components/VisxShape'

type LineChartShapeProps = {
  config: ChartConfig
  parseDate: any
  seriesAxis: string
  tableData: object[]
  data: object[]
  d: object
  displayArea: boolean
  seriesKey: string
  dataIndex: number
  circleData: object[]

  tooltipData: {
    data: []
    tooltipDataX: number
    tooltipDataY: number
  }
  xScale: any
  yScale: any
  yScaleRight: any
  colorScale: any
}

const LineChartShape = (props: LineChartShapeProps) => {
  const {
    config,
    d,
    displayArea,
    seriesKey,
    xScale,
    dataIndex,
    yScale,
    yScaleRight,
    colorScale,
    parseDate,
    tooltipData,
    tableData,
    circleData
  } = props

  // Get the filtered series from config
  const filtered = config?.runtime?.series.find(s => s.dataKey === seriesKey)

  const getColor = (displayArea: boolean, colorScale: Function, config: ChartConfig, seriesKey: string): string => {
    const seriesLabels = config.runtime.seriesLabels || []
    let color = displayArea ? colorScale(seriesLabels[seriesKey] || seriesKey) : 'transparent'

    if (config.lineDatapointColor === 'Lighter than Line' && color !== 'transparent') {
      color = chroma(color).brighten(1)
    }

    return color
  }

  const getXPos = (hoveredXValue: string | number): number => {
    const position = config.xAxis.type === 'categorical' ? xScale(hoveredXValue) : xScale(parseDate(hoveredXValue))

    return position + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
  }

  // Calculate position and color
  const cx = getXPos(d[config.xAxis.dataKey])
  const cy = filtered?.axis === 'Right' ? yScaleRight(d[filtered?.dataKey]) : yScale(d[filtered?.dataKey])
  const color = getColor(displayArea, colorScale, config, seriesKey)

  if (config.lineDatapointStyle === 'hover') {
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
    hoveredSeriesValue = tableData?.find(d => {
      return d[config?.xAxis.dataKey] === hoveredXValue
    })?.[seriesKey]

    //    hoveredSeriesValue = extractNumber(hoveredSeriesValue)
    return tooltipData?.data.map((tooltipItem, index) => {
      let seriesIndex = config.runtime.seriesLabelsAll.indexOf(hoveredXValue)

      if (isNaN(hoveredSeriesValue)) return <></>
      const isMatch = circleData?.some(cd => cd[config.xAxis.dataKey] === hoveredXValue)

      if (isMatch || !hoveredSeriesValue) {
        return <></>
      }

      return (
        <VisxShape
          display={config.visual.lineDatapointSymbol === 'standard' && dataIndex !== 5}
          left={getXPos(hoveredXValue)}
          top={hoveredSeriesAxis === 'right' ? yScaleRight(hoveredSeriesValue) : yScale(hoveredSeriesValue)}
          size={45}
          fill={color}
          stroke={color}
          index={dataIndex}
          key={`line-chart-circle--${JSON.stringify(tooltipItem)}--${index}`}
        />
      )
    })
  }

  if (config.lineDatapointStyle === 'always show') {
    return (
      <VisxShape
        display={config.visual.lineDatapointSymbol === 'standard' && dataIndex < 7}
        left={cx}
        top={cy}
        size={45}
        fill={color}
        stroke={color}
        index={dataIndex}
        key={dataIndex}
      />
    )
  }
}

export default LineChartShape
