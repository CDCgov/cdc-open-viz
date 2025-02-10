import React from 'react'
import chroma from 'chroma-js'
import { type ChartConfig } from '../../../types/ChartConfig'
import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle, GlyphCross, Glyph as CustomGlyph } from '@visx/glyph'
import { Text } from '@visx/text'

type LineChartCircleProps = {
  circleData: object[]
  config: ChartConfig
  data: object[]
  tableData: object[]
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
  seriesIndex: number
  mode: 'ISOLATED_POINTS' | 'HOVER_POINTS' | 'ALWAYS_SHOW_POINTS'
}
const Glyphs = [
  GlyphCircle,
  GlyphSquare,
  GlyphTriangle,
  GlyphDiamond,
  GlyphTriangle,
  GlyphCross,
  ({ fill }: { fill: string }) => (
    <CustomGlyph>
      {/* Render Filled Pentagon */}
      <Text fill={fill} fontSize={14} textAnchor='middle' verticalAnchor='middle'>
        &#x2B1F;
      </Text>
    </CustomGlyph>
  )
]
const LineChartCircle = (props: LineChartCircleProps) => {
  const {
    config,
    d,
    tableData,
    displayArea,
    seriesKey,
    tooltipData,
    xScale,
    yScale,
    colorScale,
    parseDate,
    yScaleRight,
    data,
    circleData,
    dataIndex,
    mode,
    seriesIndex
  } = props
  const { lineDatapointStyle, visual } = config
  const filtered = config?.runtime?.series.filter(s => s.dataKey === seriesKey)?.[0]
  const Shape =
    Glyphs[
      config.visual.lineDatapointSymbol === 'standard' && seriesIndex < visual.maximumShapeAmount ? seriesIndex : 0
    ]
  const isReversedTriangle = seriesIndex === 4
  const transformShape = (top, left) => `translate(${left}, ${top})${isReversedTriangle ? ' rotate(180)' : ''}`

  // If we're not showing the circle, simply return
  const getColor = (
    displayArea: boolean,
    colorScale: Function,
    config: ChartConfig,
    hoveredKey: string,
    seriesKey: string
  ) => {
    const seriesLabels = config.runtime.seriesLabels || []
    let color = displayArea ? colorScale(seriesLabels[hoveredKey] || seriesKey) : ' transparent'

    if (config.lineDatapointColor === 'Lighter than Line' && color !== 'transparent' && color) {
      color = chroma(color).brighten(1)
    }
    return color
  }
  const getXPos = hoveredXValue => {
    return (
      (config.xAxis.type === 'categorical' ? xScale(hoveredXValue) : xScale(parseDate(hoveredXValue))) +
      (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
    )
  }
  if (mode === 'ALWAYS_SHOW_POINTS' && lineDatapointStyle !== 'hidden') {
    if (lineDatapointStyle === 'always show') {
      const isMatch = circleData?.some(
        cd => cd[config.xAxis.dataKey] === d[config.xAxis.dataKey] && cd[seriesKey] === d[seriesKey]
      )

      if (
        isMatch ||
        !filtered ||
        (visual.maximumShapeAmount === seriesIndex && visual.lineDatapointSymbol === 'standard')
      )
        return <></>
      const positionLeft = getXPos(d[config.xAxis.dataKey])
      const positionTop = filtered.axis === 'Right' ? yScaleRight(d[filtered.dataKey]) : yScale(d[filtered.dataKey])

      return (
        <g transform={transformShape(positionTop, positionLeft)}>
          <Shape
            opacity={d[seriesKey] ? 1 : 0}
            fillOpacity={1}
            fill={getColor(displayArea, colorScale, config, seriesKey, seriesKey)}
            style={{ filter: 'unset', opacity: 1 }}
          />
        </g>
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
      hoveredSeriesValue = tableData?.find(d => {
        return d[config?.xAxis.dataKey] === hoveredXValue
      })?.[seriesKey]

      //    hoveredSeriesValue = extractNumber(hoveredSeriesValue)
      return tooltipData?.data.map((tooltipItem, index) => {
        if (isNaN(hoveredSeriesValue)) return <></>
        const isMatch = circleData?.some(cd => cd[config.xAxis.dataKey] === hoveredXValue)

        if (
          isMatch ||
          !hoveredSeriesValue ||
          (visual.maximumShapeAmount === seriesIndex && visual.lineDatapointSymbol === 'standard')
        ) {
          return <></>
        }

        const positionTop = hoveredSeriesAxis === 'right' ? yScaleRight(hoveredSeriesValue) : yScale(hoveredSeriesValue)
        const positionLeft = getXPos(hoveredXValue)
        return (
          <g transform={transformShape(positionTop, positionLeft)}>
            <Shape
              size={55}
              opacity={1}
              fillOpacity={1}
              fill={getColor(displayArea, colorScale, config, hoveredSeriesKey, seriesKey)}
              style={{ filter: 'unset', opacity: 1 }}
            />
          </g>
        )
      })
    }
  }
  if (mode === 'ISOLATED_POINTS') {
    const drawIsolatedPoints = (currentIndex, seriesKey) => {
      const currentPoint = data[currentIndex]
      const previousPoint = data[currentIndex - 1] || {}
      const nextPoint = data[currentIndex + 1] || {}

      const isMatch = circleData.some(item => item?.data[seriesKey] === currentPoint[seriesKey])
      if (isMatch) return false

      const isFirstPoint = currentIndex === 0 && !nextPoint[seriesKey]
      const isLastPoint = currentIndex === data.length - 1 && !previousPoint[seriesKey]
      const isMiddlePoint =
        currentIndex > 0 &&
        currentIndex < data.length - 1 &&
        currentPoint[seriesKey] &&
        !previousPoint[seriesKey] &&
        !nextPoint[seriesKey]

      return isFirstPoint || isLastPoint || isMiddlePoint
    }

    if (drawIsolatedPoints(dataIndex, seriesKey) && !config.series.some(s => s.dynamicCategory)) {
      const positionTop = filtered?.axis === 'Right' ? yScaleRight(d[filtered?.dataKey]) : yScale(d[filtered?.dataKey])
      const positionLeft = getXPos(d[config.xAxis?.dataKey])
      const color = colorScale(config.runtime.seriesLabels[seriesKey])

      return (
        <g transform={transformShape(positionTop, positionLeft)}>
          <Shape size={124} stroke={color} fill={color} />
        </g>
      )
    }
  }

  return null
}

export default LineChartCircle
