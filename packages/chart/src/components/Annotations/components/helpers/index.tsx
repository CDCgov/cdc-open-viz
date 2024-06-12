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

const createPoints = (annotation, xScale, yScale, config) => {
  const draggableCircleDiameter = 16
  const { x, y, dx, dy, xKey, yKey, snapToNearest } = annotation
  const controlX = x + dx / 2
  const controlY = y + dy
  const padding = 0

  const checkSnapToNearestX = () => {
    if (snapToNearest) {
      return xScale(xKey)
    }
    return x - config.yAxis.size - draggableCircleDiameter
  }

  const checkSnapToNearestY = () => {
    if (snapToNearest) {
      return yScale(yKey)
    }
    return y
  }

  const points = [
    { xPos: checkSnapToNearestX() + (dx < 0 ? -padding : padding), yPos: checkSnapToNearestY() + (dy < 0 ? -padding : padding) },
    { xPos: controlX, yPos: controlY },
    { xPos: checkSnapToNearestX() + dx - draggableCircleDiameter, yPos: checkSnapToNearestY() + dy }
  ]

  return points
}

const handleMobileXPosition = (annotation, xScale, config) => {
  if (annotation.snapToNearestPoint) {
    return Number(annotation.dx) + xScale(annotation.xKey) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size)
  }
  return Number(annotation.x) + Number(annotation.dx)
}

const handleMobileYPosition = (annotation, yScale, config) => {
  if (annotation.snapToNearestPoint) {
    return yScale(annotation.yKey) + Number(annotation.dy)
  }
  return Number(annotation.dy) + Number(annotation.y)
}

const handleTextX = (annotation, xScale, config) => {
  if (annotation.snapToNearestPoint) {
    return Number(annotation.dx) + Number(xScale(annotation.xKey)) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size) - 16 / 3
  }
  return Number(annotation.dx) + Number(annotation.x) - 16 / 3
}

const handleTextY = (annotation, yScale, config) => {
  if (annotation.snapToNearestPoint) {
    return yScale(annotation.yKey) + Number(annotation.dy) + 5
  }
  return Number(annotation.y) + Number(annotation.dy) + 16 / 3
}

export { applyBandScaleOffset, handleConnectionHorizontalType, handleConnectionVerticalType, createPoints, handleMobileXPosition, handleMobileYPosition, handleTextX, handleTextY }
