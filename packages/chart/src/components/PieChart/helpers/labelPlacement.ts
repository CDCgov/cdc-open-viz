export type PieLabelPlacement = 'inside' | 'outside'

export type PieLabelAnchor = 'start' | 'middle' | 'end'

export type PieLabelPosition = {
  placement: PieLabelPlacement
  x: number
  y: number
  textAnchor: PieLabelAnchor
}

type PieLabelPlacementOptions = {
  startAngle: number
  endAngle: number
  innerRadius: number
  outerRadius: number
  labelWidth: number
  labelHeight: number
  isDonut: boolean
  insidePadding?: number
}

type PieLabelPositionOptions = PieLabelPlacementOptions & {
  outsideOffset?: number
}

const DEFAULT_INSIDE_PADDING = 12
const DEFAULT_OUTSIDE_OFFSET = 22

const getMidAngle = (startAngle: number, endAngle: number) => startAngle + (endAngle - startAngle) / 2

export const getPieLabelPlacement = ({
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  labelWidth,
  labelHeight,
  isDonut,
  insidePadding = DEFAULT_INSIDE_PADDING
}: PieLabelPlacementOptions): PieLabelPlacement => {
  if (isDonut) return 'outside'

  const angle = Math.abs(endAngle - startAngle)
  const labelRadius = innerRadius + (outerRadius - innerRadius) * 0.62
  const availableChord = 2 * labelRadius * Math.sin(angle / 2)
  const availableRadialDepth = outerRadius - innerRadius

  const hasEnoughArcWidth = labelWidth + insidePadding <= availableChord
  const hasEnoughRadialDepth = labelHeight + insidePadding <= availableRadialDepth

  return hasEnoughArcWidth && hasEnoughRadialDepth ? 'inside' : 'outside'
}

export const getPieLabelPosition = ({
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  labelWidth,
  labelHeight,
  isDonut,
  insidePadding,
  outsideOffset = DEFAULT_OUTSIDE_OFFSET
}: PieLabelPositionOptions): PieLabelPosition => {
  const placement = getPieLabelPlacement({
    startAngle,
    endAngle,
    innerRadius,
    outerRadius,
    labelWidth,
    labelHeight,
    isDonut,
    insidePadding
  })
  const midAngle = getMidAngle(startAngle, endAngle)
  const labelRadius =
    placement === 'inside' ? innerRadius + (outerRadius - innerRadius) * 0.62 : outerRadius + outsideOffset
  const x = Math.cos(midAngle) * labelRadius
  const y = Math.sin(midAngle) * labelRadius

  if (placement === 'inside') {
    return { placement, x, y, textAnchor: 'middle' }
  }

  return {
    placement,
    x,
    y,
    textAnchor: x < 0 ? 'end' : 'start'
  }
}
