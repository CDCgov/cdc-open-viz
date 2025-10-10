import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { type MapConfig } from '@cdc/map/src/types/MapConfig'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { getTextWidth } from '../../helpers/getTextWidth'
import { DimensionsType } from '../../types/Dimensions'
import useLegendSeparators from '@cdc/map/src/hooks/useLegendSeparators'

const MARGIN = 1
const BORDER_SIZE = 1
const BORDER_COLOR = '#d3d3d3'
const MOBILE_BREAKPOINT = 576

type CombinedConfig = MapConfig | ChartConfig

interface GradientProps {
  labels: string[]
  colors: string[]
  config: CombinedConfig
  dimensions: DimensionsType
  parentPaddingToSubtract?: number
}

const LegendGradient = ({
  labels,
  colors,
  config,
  dimensions,
  parentPaddingToSubtract = 0
}: GradientProps): JSX.Element => {
  const { uid, legend, type } = config
  const { tickRotation, position, style, subStyle, separators } = legend

  const isLinearBlocks = subStyle === 'linear blocks'
  let [width] = dimensions

  const smallScreen = width <= MOBILE_BREAKPOINT
  const legendWidth = Number(width) - parentPaddingToSubtract - MARGIN * 2 - BORDER_SIZE * 2
  const uniqueID = `${uid}-${Date.now()}`

  // Legend separators logic
  const { legendSeparators, separatorSize, legendSeparatorsToSubtract, getTickSeparatorsAdjustment } =
    useLegendSeparators(separators, legendWidth, isLinearBlocks)

  const numTicks = colors?.length

  const longestLabel = (labels || []).reduce((a: string, b) => (a.length > String(b).length ? a : b), '')
  const boxHeight = 20
  let height = 50

  // configure tick witch and angle
  const textWidth = getTextWidth(longestLabel, `normal 14px sans-serif`)
  const rotationAngle = Number(tickRotation) || 0
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
    const segmentWidth = (legendWidth - legendSeparatorsToSubtract) / numTicks
    const xPositionX = index * segmentWidth + segmentWidth + MARGIN + getTickSeparatorsAdjustment(index)
    const textAnchor = rotationAngle ? 'end' : 'middle'
    const verticalAnchor = rotationAngle ? 'middle' : 'start'
    const lastTick = index === labels.length - 1

    return (
      <Group key={`tick-${index}`} top={MARGIN}>
        {!lastTick && !isLinearBlocks && <line x1={xPositionX} x2={xPositionX} y1={30} y2={boxHeight} stroke='black' />}
        <Text
          angle={-tickRotation}
          x={xPositionX}
          y={boxHeight}
          dy={10}
          dx={-segmentWidth / 2}
          fontSize={smallScreen ? '12' : '14'}
          textAnchor={textAnchor}
          verticalAnchor={verticalAnchor}
          width={segmentWidth}
          lineHeight={'14'}
        >
          {key}
        </Text>
      </Group>
    )
  })
  if ((type === 'map' && position === 'side') || !position) {
    return
  }
  if (type === 'chart' && (position === 'left' || position === 'right' || !position)) {
    return
  }

  if (style === 'gradient') {
    return (
      // TODO: figure out why bootstrap 'overflow: visible' is not working consistently
      <svg className={'w-100 overflow-visible'} height={newHeight} style={{ overflow: 'visible' }} width={width}>
        {/* background border*/}
        <rect x={0} y={0} width={legendWidth + MARGIN * 2} height={boxHeight + MARGIN * 2} fill={BORDER_COLOR} />
        {/* Define the gradient */}
        <linearGradient id={`gradient-smooth-${uniqueID}`} x1='0%' y1='0%' x2='100%' y2='0%'>
          {stops}
        </linearGradient>

        {subStyle === 'smooth' && (
          <rect
            x={MARGIN}
            y={MARGIN}
            width={legendWidth}
            height={boxHeight}
            fill={`url(#gradient-smooth-${uniqueID})`}
          />
        )}

        {subStyle === 'linear blocks' && (
          <>
            {colors.map((color, index) => {
              const segmentWidth = (legendWidth - legendSeparatorsToSubtract) / numTicks
              const xPosition = index * segmentWidth + MARGIN + getTickSeparatorsAdjustment(index)
              return (
                <Group key={`color-block-${index}`}>
                  <rect
                    x={xPosition}
                    y={MARGIN}
                    width={segmentWidth}
                    height={boxHeight}
                    fill={color}
                    stroke='white'
                    strokeWidth='0'
                  />
                </Group>
              )
            })}
            {/* Legend separators */}
            {legendSeparators.map((separatorAfter, index) => {
              const segmentWidth = (legendWidth - legendSeparatorsToSubtract) / numTicks
              const xPosition = separatorAfter * segmentWidth + MARGIN + getTickSeparatorsAdjustment(separatorAfter - 1)
              return (
                <Group key={`separator-${index}`}>
                  {/* Separators block */}
                  <rect
                    x={xPosition}
                    y={MARGIN / 2}
                    width={separatorSize}
                    height={boxHeight + MARGIN}
                    fill={'white'}
                    stroke={'white'}
                    strokeWidth={MARGIN}
                  />

                  {/* Dotted dividing line */}
                  <line
                    x1={xPosition + separatorSize / 2}
                    x2={xPosition + separatorSize / 2}
                    y1={-3}
                    y2={boxHeight + MARGIN + 3}
                    stroke={'var(--colors-gray-cool-40,#8d9297)'}
                    strokeWidth={1}
                    strokeDasharray='5,3'
                    strokeDashoffset={1}
                  />
                </Group>
              )
            })}
          </>
        )}

        {/* Ticks and labels */}
        <g>{ticks}</g>
      </svg>
    )
  }
}
export default LegendGradient
