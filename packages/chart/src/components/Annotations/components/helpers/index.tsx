const applyBandScaleOffset = (num: number, config, xScale) => num + Number(config.yAxis.size) + xScale.bandwidth() / 2
const handleConnectionHorizontalType = (annotation, xScale, config) => {
  const { connectionLocation } = annotation
  if (connectionLocation === 'right') return 'end'
  if (connectionLocation === 'left') return 'start'
  if (connectionLocation === 'bottom' || connectionLocation === 'top') return 'middle'
  return xScale(annotation.xKey) + annotation.dx < config.yAxis.size ? 'middle' : null
}

const handleConnectionVerticalType = (annotation, xScale, config) => {
  const { connectionLocation } = annotation
  if (connectionLocation === 'top') return 'start'
  if (connectionLocation === 'bottom') return 'end'
  if (connectionLocation === 'right' || connectionLocation === 'left') return 'middle'
  return xScale(annotation.xKey) + annotation.dx < config.yAxis.size ? 'end' : null
}

const createPoints = (annotation, xScale, yScale) => {
  const { x, y, dx, dy, xKey, yKey, snapToNearest } = annotation
  const controlX = x + dx / 2
  const controlY = y + dy
  const padding = 0

  const points = [
    { x, y, xKey, yKey, xPos: xScale(xKey) + (dx < 0 ? -padding : padding), yPos: yScale(yKey) + (dy < 0 ? -padding : padding) },
    { x: controlX, y: controlY, xKey, yKey, xPos: controlX, yPos: controlY },
    { x: x + dx, y: y + dy, xKey, yKey, xPos: xScale(xKey) + dx, yPos: yScale(yKey) + dy }
  ]

  return points
}

export { applyBandScaleOffset, handleConnectionHorizontalType, handleConnectionVerticalType, createPoints }
