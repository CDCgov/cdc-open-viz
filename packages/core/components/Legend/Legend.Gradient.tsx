import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { type ViewportSize, type MapConfig } from '@cdc/map/src/types/MapConfig'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { getGradientLegendWidth } from '@cdc/core/helpers/getGradientLegendWidth'
import { scaleLinear } from '@visx/scale'

type CombinedConfig = MapConfig | ChartConfig

interface GradientProps {
  labels: string[]
  colors: string[]
  config: CombinedConfig
  dimensions: [string, string]
  currentViewport: ViewportSize
  getTextWidth: (text: string, font: string) => string
  values?: (number | string)[][]
}

const LegendGradient = ({
  labels,
  colors,
  config,
  dimensions,
  currentViewport,
  getTextWidth,
  values
}: GradientProps): JSX.Element => {
  let [width] = dimensions

  const legendWidth = getGradientLegendWidth(width, currentViewport)

  const numTicks = colors?.length

  const longestLabel = labels && labels.length > 0 ? labels.reduce((a, b) => (a.length > b.length ? a : b)) : ''
  const boxHeight = 20
  let height = 50
  const margin = 1

  // configure tick witch and angle
  const textWidth = getTextWidth(longestLabel, `normal 14px sans-serif`)
  const rotationAngle = Number(config.legend.tickRotation) || 0
  // Convert the angle from degrees to radians
  const angleInRadians = rotationAngle * (Math.PI / 180)
  const newHeight = height + Number(textWidth) * Math.sin(angleInRadians)

  // configre gradient colors
  const stops = colors.map((color, index) => {
    const offset = (index / (colors.length - 1)) * 100
    return <stop key={index} offset={`${offset}%`} style={{ stopColor: color, stopOpacity: 1 }} />
  })

  const createTicks = () => {
    if (config.legend.style !== 'gradient') return null

    const generateTick = (xPosition, label, key, xPadding = 0) => {
      const textAnchor = rotationAngle ? 'end' : 'middle'
      const verticalAnchor = rotationAngle ? 'middle' : 'start'
      return (
        <Group top={margin} key={key}>
          <line x1={xPosition} x2={xPosition} y1={30} y2={boxHeight} stroke='#000' />
          <Text
            angle={-config.legend.tickRotation}
            x={xPosition}
            y={boxHeight}
            dy={10}
            dx={-xPadding}
            fontSize='14'
            textAnchor={textAnchor}
            verticalAnchor={verticalAnchor}
          >
            {label}
          </Text>
        </Group>
      )
    }

    if (config.type === 'map' && config.legend.subStyle === 'smooth') {
      const uniqueValues = Array.from(new Set(values.flat().map(Number)))
      const scale = scaleLinear({
        domain: [Math.min(...uniqueValues), Math.max(...uniqueValues)],
        range: [0, legendWidth]
      })

      return values.map((range, index) => {
        const [start, end] = range.map(Number)
        const xPosition = (scale(start) + scale(end)) / 2
        return generateTick(xPosition, labels[index], `map-${index}`)
      })
    }

    if (config.type === 'chart' && config.legend.subStyle === 'smooth') {
      const segmentWidth = legendWidth / numTicks
      return labels.map((key, index) => {
        const xPosition = index * segmentWidth + segmentWidth / 2
        return generateTick(xPosition, key, `chart-${index}`, 0)
      })
    }

    if (config.legend.subStyle === 'linear blocks') {
      return labels.map((label, index) => {
        const segmentWidth = legendWidth / numTicks
        const xPosition = index * segmentWidth + segmentWidth
        const textPadding = segmentWidth / 2
        return generateTick(xPosition, label, `map-${index}`, textPadding)
      })
    }

    return null
  }

  const ticks = createTicks()

  if ((config.type === 'map' && config.legend.position === 'side') || !config.legend.position) {
    return
  }
  if (
    config.type === 'chart' &&
    (config.legend.position === 'left' || config.legend.position === 'right' || !config.legend.position)
  ) {
    return
  }

  if (config.legend.style === 'gradient') {
    return (
      <svg style={{ overflow: 'visible', width: '100%', marginTop: 10 }} height={newHeight}>
        {/* background border*/}
        <rect
          x={0}
          y={0}
          width={legendWidth + margin * 2}
          height={boxHeight + margin * 2}
          fill='#d3d3d3'
          strokeWidth='0.5'
        />
        {/* Define the gradient */}
        <linearGradient id={`gradient-smooth-${config.uid || 0}`} x1='0%' y1='0%' x2='100%' y2='0%'>
          {stops}
        </linearGradient>

        {config.legend.subStyle === 'smooth' && (
          <rect x={1} y={1} width={legendWidth} height={boxHeight} fill={`url(#gradient-smooth-${config.uid || 0})`} />
        )}

        {config.legend.subStyle === 'linear blocks' &&
          colors.map((color, index) => {
            const segmentWidth = legendWidth / numTicks
            const xPosition = index * segmentWidth
            return (
              <Group>
                <rect
                  key={index}
                  x={xPosition}
                  y={0}
                  width={segmentWidth}
                  height={boxHeight}
                  fill={color}
                  stroke='white'
                  strokeWidth='0'
                />
              </Group>
            )
          })}
        {/* Ticks and labels */}
        <g>{ticks}</g>
      </svg>
    )
  }
}
export default LegendGradient
