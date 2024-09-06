export const getMarginTop = (isBottomOrSmallViewport, isBrushActive) => {
  if (!isBottomOrSmallViewport) return '0px'
  if (isBrushActive) return '35px'
  return '15px'
}

export const getGradientConfig = (config, formatLabels, colorScale) => {
  const defaultValue = [{ datum: '', index: 0, text: '', value: '' }]

  const formatted = formatLabels(defaultValue)
  const colors = config.legend.colorCode ? formatted.map(label => label?.value) : colorScale?.range() ?? []
  const labels = config.legend.colorCode ? formatted.map(label => label?.text || label?.datum) : colorScale?.domain() ?? []

  return { colors, labels }
}
