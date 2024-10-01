export const getGradientConfig = (config, formatLabels, colorScale) => {
  const defaultValue = [{ datum: '', index: 0, text: '', value: '' }]

  const formatted = formatLabels(defaultValue)
  const colors = config.legend.colorCode ? formatted.map(label => label?.value) : colorScale?.range() ?? []
  const labels = config.legend.colorCode
    ? formatted.map(label => label?.text || label?.datum)
    : colorScale?.domain() ?? []

  return { colors, labels }
}

export const getMarginTop = (isBottomOrSmallViewport, isBrushActive, legend) => {
  if (!isBottomOrSmallViewport) return '0px'
  if (isBrushActive && legend.position === 'bottom') return '35px'
  return '20px'
}
export const getMarginBottom = (isBottomOrSmallViewport, config) => {
  const isLegendTop = config.legend?.position === 'top' && !config.legend.hide

  let marginBottom = '0px'
  if (isLegendTop) {
    marginBottom = config.legend.hideBorder.topBottom ? '15px' : '25px'
  }

  return marginBottom
}
