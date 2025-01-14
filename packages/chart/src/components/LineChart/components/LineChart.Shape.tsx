import React from 'react'
import chroma from 'chroma-js'
import { type ChartConfig } from '../../../types/ChartConfig'

import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle, GlyphCross } from '@visx/glyph'
import { Text } from '@visx/text'

const glyphs = {
  0: GlyphCircle,
  1: GlyphSquare,
  2: GlyphTriangle,
  3: GlyphDiamond,
  4: GlyphTriangle,
  5: GlyphCross
}

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
  const Shape = glyphs[dataIndex] || <></>

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

      const indexOfPentagonShape = 6 // Index for the pentagon shape
      const maximumShapeAmount = 7 // Maximum number of shapes
      const isReversedTriangle = dataIndex === 4 // Example condition for flipping
      const left = getXPos(hoveredXValue)
      const top = hoveredSeriesAxis === 'right' ? yScaleRight(hoveredSeriesValue) : yScale(hoveredSeriesValue)
      const transform = `translate(${left}, ${top}) ${isReversedTriangle ? 'rotate(180)' : ''}`

      return (
        <>
          {dataIndex < maximumShapeAmount && (
            <g transform={transform}>
              {dataIndex === indexOfPentagonShape ? (
                <Text fill={color} verticalAnchor='middle' textAnchor='middle' fontSize={30 / 4}>
                  &#x2B1F; {/* Render Filled Pentagon */}
                </Text>
              ) : (
                <Shape strokeWidth={0} top={0} left={0} fill={color} stroke={color} size={30} />
              )}
            </g>
          )}
        </>
      )
    })
  }

  if (config.lineDatapointStyle === 'always show') {
    const indexOfPentagonShape = 6 // Index for the pentagon shape
    const maximumShapeAmount = config.visual.maximumShapeAmount
    const isReversedTriangle = dataIndex === 4 // Example condition for flipping
    const transform = `translate(${cx}, ${cy}) ${isReversedTriangle ? 'rotate(180)' : ''}`

    return (
      <>
        {dataIndex < maximumShapeAmount && (
          <g transform={transform}>
            {dataIndex === indexOfPentagonShape ? (
              <Text fill={color} verticalAnchor='middle' textAnchor='middle' fontSize={30 / 4}>
                &#x2B1F; {/* Render Filled Pentagon */}
              </Text>
            ) : (
              <Shape strokeWidth={0} top={0} left={0} fill={color} stroke={color} size={30} />
            )}
          </g>
        )}
      </>
    )
  }
}

export default LineChartShape
