const handleConnectionHorizontalType = (annotation, xScale, config) => {
  const { connectionLocation } = annotation
  if (connectionLocation === 'right') return 'end'
  if (connectionLocation === 'left') return 'start'
  if (connectionLocation === 'bottom' || connectionLocation === 'top') return 'middle'

  const xValue = annotation.anchorMode === 'data' ? annotation.dataX : annotation.x
  return xScale(xValue) + annotation.dx < config.yAxis.size ? 'middle' : null
}

const handleConnectionVerticalType = (annotation, xScale, config) => {
  const { connectionLocation } = annotation
  if (connectionLocation === 'top') return 'start'
  if (connectionLocation === 'bottom') return 'end'
  if (connectionLocation === 'right' || connectionLocation === 'left') return 'middle'

  const xValue = annotation.anchorMode === 'data' ? annotation.dataX : annotation.x
  return xScale(xValue) + annotation.dx < config.yAxis.size ? 'end' : null
}

export { handleConnectionHorizontalType, handleConnectionVerticalType }
