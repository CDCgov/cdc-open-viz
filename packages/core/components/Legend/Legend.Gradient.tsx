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
}

const LegendGradient = ({ labels, colors, config, dimensions, currentViewport, getTextWidth }: GradientProps): JSX.Element => {
  let [width] = dimensions
  // let labels = ['0 - 20', '20 - 40', '44 - 50', ' 55-90', '99-100']
  const ranges = labels.map(label => label.split('-').map(Number))
  console.log(ranges, 'ranges')
  const legendWidth = getGradientLegendWidth(width, currentViewport)

  const numTicks = colors?.length

  const longestLabel = labels && labels.length > 0 ? labels.reduce((a, b) => (a.length > b.length ? a : b)) : ''
  const boxHeight = 20
  let height = 50
  const margin = 1

  const flatRanges = ranges.flat()
  console.log(flatRanges, 'ranges')
  const scale = scaleLinear({
    range: [0, legendWidth],
    domain: [Math.min(...flatRanges), Math.max(...flatRanges)]
  })
  // configure tick witch and angle
  const textWidth = getTextWidth(longestLabel, `normal 14px sans-serif`)
  const rotationAngle = Number(config.legend.tickRotation) || 0
  // Convert the angle from degrees to radians
  const angleInRadians = rotationAngle * (Math.PI / 180)
  const newHeight = height + Number(textWidth) * Math.sin(angleInRadians)

  // configre gradient colors
  const stops = colors.map((color, index) => {
    const [start, end] = ranges[index]
    // const offset = (index / (colors.length - 1)) * 100
    const offsetStart = scale(start)
    const offsetEnd = scale(end)
    return <stop key={index} offset={`${offsetStart}%`} style={{ stopColor: color, stopOpacity: 1 }} />
  })

  // render ticks and labels
  const ticks = ranges.map((range, index) => {
    const [start, end] = range
    //  const xPositionX = index * segmentWidth + segmentWidth
    const positionStart = scale(start)
    const positionEnd = scale(end)
    const xPosition = (positionStart + positionEnd) / 2
    const textAnchor = rotationAngle ? 'end' : 'middle'
    const verticalAnchor = rotationAngle ? 'middle' : 'start'

    return (
      <Group left={0} top={margin}>
        <line x1={xPosition} x2={xPosition} y1={30} y2={boxHeight} stroke='black' />
        <Text angle={-config.legend.tickRotation} x={xPosition} y={boxHeight} dy={10} fontSize='14' textAnchor={textAnchor} verticalAnchor={verticalAnchor}>
          {`${start}-${end}`}
        </Text>
      </Group>
    )
  })
  if ((config.type === 'map' && config.legend.position === 'side') || !config.legend.position) {
    return
  }
  if (config.type === 'chart' && (config.legend.position === 'left' || config.legend.position === 'right' || !config.legend.position)) {
    return
  }

  if (config.legend.style === 'gradient') {
    return (
      <svg style={{ overflow: 'visible', width: '100%', marginTop: 10 }} height={newHeight}>
        {/* background border*/}
        <rect x={0} y={0} width={legendWidth + margin * 2} height={boxHeight + margin * 2} fill='#d3d3d3' strokeWidth='0.5' />
        {/* Define the gradient */}
        <linearGradient id={`gradient-smooth-${config.uid || 0}`} x1='0%' y1='0%' x2='100%' y2='0%'>
          {stops}
        </linearGradient>

        {config.legend.subStyle === 'smooth' && <rect x={1} y={1} width={legendWidth} height={boxHeight} fill={`url(#gradient-smooth-${config.uid || 0})`} />}

        {config.legend.subStyle === 'linear blocks' &&
          colors.map((color, index) => {
            const segmentWidth = legendWidth / numTicks
            const xPosition = index * segmentWidth
            return (
              <Group>
                <rect key={index} x={xPosition} y={0} width={segmentWidth} height={boxHeight} fill={color} stroke='white' strokeWidth='0' />
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
