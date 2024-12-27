export const getGradientConfig = (config, formatLabels, colorScale) => {
  const defaultValue = [{ datum: '', index: 0, text: '', value: '' }]

  const formatted = formatLabels(defaultValue)
  const colors = config.legend.colorCode ? formatted.map(label => label?.value) : colorScale?.range() ?? []
  const labels = config.legend.colorCode
    ? formatted.map(label => label?.text || label?.datum)
    : colorScale?.domain() ?? []

  return { colors, labels }
}

export const getMarginTop = (isBottomOrSmallViewport, config) => {
  if (!isBottomOrSmallViewport) {
    return '0px'
  }
  if (isBottomOrSmallViewport && config.brush?.active) {
    const BRUSH_HEIGHT_MULTIPLIER = 1.5
    return `${config.brush.height * BRUSH_HEIGHT_MULTIPLIER}px`
  }
  return '20px'
}
export const getMarginBottom = (isBottomOrSmallViewport, config, hasSuppression) => {
  const isLegendTop = config.legend?.position === 'top' && !config.legend.hide

  let marginBottom = 0

  if (isLegendTop) marginBottom = 25

  if (isBottomOrSmallViewport) marginBottom += 9

  if (hasSuppression) marginBottom += 40

  return `${marginBottom}px`
}
