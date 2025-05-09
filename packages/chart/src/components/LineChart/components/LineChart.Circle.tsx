import chroma from 'chroma-js'
import { LineChartConfig, type ChartConfig } from '../../../types/ChartConfig'
import { GlyphDiamond, GlyphCircle, GlyphSquare, GlyphTriangle, GlyphCross, Glyph as CustomGlyph } from '@visx/glyph'
import { Text } from '@visx/text'

type LineChartCircleProps = {
  config: ChartConfig
  data: object[]
  tableData: object[]
  d?: Object
  displayArea: boolean
  seriesKey: string
  xScale: any
  yScale: any
  yScaleRight: any
  colorScale: any
  parseDate: any
  seriesAxis: string
  dataIndex: number
  seriesIndex: number
  mode: 'ISOLATED_POINTS' | 'HOVER_POINTS' | 'ALWAYS_SHOW_POINTS' | 'TOOLTIP_POINTS'
  tooltipPoint: {
    xValue: string | number
    yValue: string | number
    color: string
  }
  handleTooltipMouseOver?: Function
  handleTooltipMouseOff?: Function
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
    d: pointData,
    displayArea,
    seriesKey,
    xScale,
    yScale,
    colorScale,
    parseDate,
    yScaleRight,
    data,
    tooltipPoint,
    dataIndex,
    mode,
    seriesIndex,
    handleTooltipMouseOver,
    handleTooltipMouseOff
  } = props
  const { isolatedDotsSameSize, lineDatapointStyle, visual } = config as LineChartConfig
  const filtered = config?.series.filter(s => s.dataKey === seriesKey)?.[0]
  const Shape =
    Glyphs[
      config.visual.lineDatapointSymbol === 'standard' && seriesIndex < visual.maximumShapeAmount ? seriesIndex : 0
    ]
  const isReversedTriangle = seriesIndex === 4
  const LARGE_DOT_SIZE = 124
  const REGULAR_DOT_SIZE = 55
  const dotSize = isolatedDotsSameSize ? REGULAR_DOT_SIZE : LARGE_DOT_SIZE

  const getXPos = hoveredXValue => {
    return (
      (config.xAxis.type === 'categorical' ? xScale(hoveredXValue) : xScale(parseDate(hoveredXValue))) +
      (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
    )
  }

  const transformShape = (xValue, yValue) => {
    const positionLeft = getXPos(xValue)
    const positionTop = filtered?.axis === 'Right' ? yScaleRight(yValue) : yScale(yValue)

    return `translate(${positionLeft}, ${positionTop})${isReversedTriangle ? ' rotate(180)' : ''}`
  }

  // If we're not showing the circle, simply return
  const getColor = (displayArea: boolean, colorScale: Function, config: ChartConfig, hoveredKey: string) => {
    const seriesLabels = config.runtime.seriesLabels || []
    const seriesLabelsAll = config.runtime.seriesLabelsAll || []
    let color = displayArea ? colorScale(seriesLabels[hoveredKey] || seriesLabelsAll[seriesIndex]) : 'transparent'
    if (config.lineDatapointColor === 'Lighter than Line' && color !== 'transparent' && color) {
      color = chroma(color).brighten(1)
    }
    return color
  }

  if (['ALWAYS_SHOW_POINTS', 'HOVER_POINTS'].includes(mode)) {
    if (!filtered || (visual.maximumShapeAmount === seriesIndex && visual.lineDatapointSymbol === 'standard'))
      return <></>
    return (
      <g
        transform={transformShape(pointData[config.xAxis.dataKey], pointData[filtered?.dataKey])}
        className={`visx-glyph-group${displayArea ? '' : '-hidden'}`}
        data-seriesIndex={seriesIndex}
      >
        <Shape
          fillOpacity={mode === 'ALWAYS_SHOW_POINTS' ? 1 : 0}
          fill={getColor(displayArea, colorScale, config, seriesKey)}
        />
      </g>
    )
  }

  if (mode === 'ISOLATED_POINTS') {
    const drawIsolatedPoints = (currentIndex, seriesKey) => {
      const currentPoint = data[currentIndex]
      const previousPoint = data[currentIndex - 1] || {}
      const nextPoint = data[currentIndex + 1] || {}
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
    const _dataIndex = pointData
      ? data.findIndex(item => item[config.xAxis.dataKey] === pointData[config.xAxis.dataKey])
      : dataIndex

    if (drawIsolatedPoints(_dataIndex, seriesKey)) {
      const color = colorScale(config.runtime.seriesLabelsAll[seriesIndex])

      return (
        <g
          transform={transformShape(pointData[config.xAxis?.dataKey], pointData[filtered?.dataKey])}
          className={`visx-glyph-group${displayArea ? '' : '-hidden'}`}
          data-seriesIndex={seriesIndex}
        >
          <Shape size={dotSize} stroke={color} fill={color} />
        </g>
      )
    }
  }

  if (mode === 'TOOLTIP_POINTS' && displayArea === true) {
    return (
      <g
        transform={transformShape(tooltipPoint.xValue, tooltipPoint.yValue)}
        className='visx-glyph-circle'
        onMouseOver={e => {
          handleTooltipMouseOver(e)
          if (lineDatapointStyle == 'hover') (e.target as HTMLElement).style.fillOpacity = '1'
        }}
        onMouseOut={e => {
          handleTooltipMouseOff()
          if (lineDatapointStyle == 'hover') (e.target as HTMLElement).style.fillOpacity = '0'
        }}
      >
        <Shape size={55} fill={tooltipPoint.color} fillOpacity={'0'} />
      </g>
    )
  }

  return null
}

export default LineChartCircle
