import { ChartConfig } from '../../types/ChartConfig'
import { ColorScale } from '../../types/ChartContext'
import { Group } from '@visx/group'
import { Text } from '@visx/text'

interface GradientProps {
  colorScale: ColorScale
  config: ChartConfig
  dimensions: [string, string]
  currentViewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  getTextWidth: (text: string, font: string) => string
}

const LegendGradient: React.FC<GradientProps> = ({ colorScale, config, dimensions, currentViewport, getTextWidth }) => {
  const [chartWidth] = dimensions
  const getLegendWidth = () => {
    let newWidth = Number(chartWidth)
    switch (currentViewport) {
      case 'lg':
        newWidth = newWidth / 3
        break
      case 'md':
        newWidth = newWidth / 2
        break
      case 'sm':
        newWidth = newWidth / 1.3
        break
      case 'xs':
        newWidth = newWidth / 1.1
        break
      case 'xxs':
        newWidth = newWidth
        break
      default:
        return newWidth
    }
    return newWidth
  }
  const width = getLegendWidth()
  const colors = colorScale?.range() ?? []
  const numTicks = colors?.length
  const keys = colorScale?.domain() ?? []
  const longestKeyName = keys.reduce((a, b) => (a.length > b.length ? a : b))
  const boxHeight = 20
  let height = 50
  const margin = 1

  // configure tick witch and angle
  const textWidth = getTextWidth(longestKeyName, `normal 12px sans-serif`)
  const rotationAngle = Number(config.legend.tickRotation) || 0
  // Convert the angle from degrees to radians
  const angleInRadians = rotationAngle * (Math.PI / 180)
  const newHeight = height + Number(textWidth) * Math.sin(angleInRadians)

  // configre gradient colors
  const stops = colors.map((color, index) => {
    const offset = (index / (colors.length - 1)) * 100
    return <stop key={index} offset={`${offset}%`} style={{ stopColor: color, stopOpacity: 1 }} />
  })

  // render ticks and labels
  const ticks = keys.map((key, index) => {
    const segmentWidth = width / numTicks
    const xPositionX = index * segmentWidth + segmentWidth
    const textAnchor = rotationAngle ? 'end' : 'middle'
    const verticalAnchor = rotationAngle ? 'middle' : 'start'

    return (
      <Group top={margin}>
        <line x1={xPositionX} x2={xPositionX} y1={30} y2={boxHeight} stroke='black' />
        <Text angle={-config.legend.tickRotation} x={xPositionX} y={boxHeight} dy={10} fontSize='12' textAnchor={textAnchor} verticalAnchor={verticalAnchor}>
          {key}
        </Text>
      </Group>
    )
  })

  if (config.legend.position === 'right' || config.legend.position === 'left') {
    return <> </>
  }

  if (config.legend.style === 'gradient') {
    return (
      <svg style={{ overflow: 'visible', width: '100%' }} height={newHeight}>
        {/* background border*/}
        <rect x={0} y={0} width={width + margin * 2} height={boxHeight + margin * 2} fill='#d3d3d3' strokeWidth='0.5' />
        {/* Define the gradient */}
        <linearGradient id='gradient-smooth' x1='0%' y1='0%' x2='100%' y2='0%'>
          {stops}
        </linearGradient>

        {config.legend.subStyle === 'smooth' && <rect x={1} y={1} width={width} height={boxHeight} fill='url(#gradient-smooth)' />}

        {config.legend.subStyle === 'linear blocks' &&
          colors.map((color, index) => {
            const segmentWidth = width / numTicks
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
