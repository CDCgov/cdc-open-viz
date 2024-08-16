import { ChartConfig } from '../../types/ChartConfig'
import { ColorScale } from '../../types/ChartContext'
import { Group } from '@visx/group'
import { Text } from '@visx/text'

interface GradientProps {
  colorScale: ColorScale
  config: ChartConfig
  dimensions: [string, string]
  currentViewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
}

const LegendGradient: React.FC<GradientProps> = ({ colorScale, config, dimensions, currentViewport }) => {
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
        newWidth = newWidth / 1.5
        break

      default:
        return newWidth / 1.3
    }
    return newWidth
  }
  const width = getLegendWidth()

  const height = 70
  const colors = colorScale.range()
  const numTicks = colors.length
  const barWidth = width
  const keys = colorScale.domain()
  const boxHeight = 20
  const leftMargin = config.runtime.yAxis.size

  const stops = colors.map((color, index) => {
    const offset = (index / (colors.length - 1)) * 100
    return <stop key={index} offset={`${offset}%`} style={{ stopColor: color, stopOpacity: 1 }} />
  })

  const ticks = keys.map((key, index) => {
    const xPosition = (index / numTicks) * barWidth
    const segmentWidth = barWidth / numTicks
    const xPositionX = index * segmentWidth + segmentWidth

    return (
      <Group left={leftMargin}>
        <line x1={xPositionX} x2={xPositionX} y1={50} y2={boxHeight * 2} stroke='black' />
        <Text x={xPositionX} y={boxHeight * 2} dy={boxHeight / 2} fontSize='12' textAnchor='middle' verticalAnchor='start'>
          {key}
        </Text>
      </Group>
    )
  })
  return (
    <svg style={{ overflow: 'visible' }} width={width} height={height}>
      {/* Define the gradient */}
      <defs>
        <linearGradient id='ageGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
          {stops}
        </linearGradient>
      </defs>

      {config.legend.subStyle === 'smooth' && <rect x={leftMargin} y={boxHeight} width={width} height={boxHeight} fill='url(#ageGradient)' />}

      {config.legend.subStyle === 'linear blocks' &&
        colors.map((color, index) => {
          const segmentWidth = barWidth / numTicks
          const xPosition = index * segmentWidth
          return (
            <Group left={leftMargin}>
              <rect key={index} x={xPosition} y={20} width={segmentWidth} height={boxHeight} fill={color} stroke='white' strokeWidth='0' />
            </Group>
          )
        })}
      {/* Ticks and labels */}
      <g>{ticks}</g>
    </svg>
  )
}
export default LegendGradient
