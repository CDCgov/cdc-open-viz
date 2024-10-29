import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { type ViewportSize, type MapConfig } from '@cdc/map/src/types/MapConfig'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { getTextWidth } from '../../helpers/getTextWidth'
import { DimensionsType } from '../../types/Dimensions'
import { CONTAINER_WIDTH_PADDING } from '@cdc/map/src/CdcMap'

type CombinedConfig = MapConfig | ChartConfig

interface GradientProps {
  labels: string[]
  colors: string[]
  config: CombinedConfig
  dimensions: DimensionsType
  currentViewport: ViewportSize
}

const LegendGradient = ({ labels, colors, config, dimensions }: GradientProps): JSX.Element => {
  let [width] = dimensions

  const legendWidth = Number(width) - CONTAINER_WIDTH_PADDING
  const uniqueID = `${config.uid}-${Date.now()}`

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

  // configure gradient colors
  const stops = colors.map((color, index) => {
    const offset = (index / (colors.length - 1)) * 100
    return <stop key={index} offset={`${offset}%`} style={{ stopColor: color, stopOpacity: 1 }} />
  })

  // render ticks and labels
  const ticks = labels.map((key, index) => {
    const segmentWidth = legendWidth / numTicks
    const xPositionX = index * segmentWidth + segmentWidth + margin
    const textAnchor = rotationAngle ? 'end' : 'middle'
    const verticalAnchor = rotationAngle ? 'middle' : 'start'
    const lastTick = index === labels.length - 1

    return (
      <Group top={margin}>
        {!lastTick && <line x1={xPositionX} x2={xPositionX} y1={30} y2={boxHeight} stroke='black' />}
        <Text
          angle={-config.legend.tickRotation}
          x={xPositionX}
          y={boxHeight}
          dy={10}
          dx={-segmentWidth / 2}
          fontSize='14'
          textAnchor={textAnchor}
          verticalAnchor={verticalAnchor}
        >
          {key}
        </Text>
      </Group>
    )
  })
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
        <linearGradient id={`gradient-smooth-${uniqueID}`} x1='0%' y1='0%' x2='100%' y2='0%'>
          {stops}
        </linearGradient>

        {config.legend.subStyle === 'smooth' && (
          <rect
            x={margin}
            y={margin}
            width={legendWidth}
            height={boxHeight}
            fill={`url(#gradient-smooth-${uniqueID})`}
          />
        )}

        {config.legend.subStyle === 'linear blocks' &&
          colors.map((color, index) => {
            const segmentWidth = legendWidth / numTicks
            const xPosition = index * segmentWidth + margin
            return (
              <Group>
                <rect
                  key={index}
                  x={xPosition}
                  y={margin}
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
