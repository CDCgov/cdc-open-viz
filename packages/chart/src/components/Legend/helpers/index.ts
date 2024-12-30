export const getGradientConfig = (config, formatLabels, colorScale) => {
  const defaultValue = [{ datum: '', index: 0, text: '', value: '' }]

  const formatted = formatLabels(defaultValue)
  const colors = config.legend.colorCode ? formatted.map(label => label?.value) : colorScale?.range() ?? []
  const labels = config.legend.colorCode
    ? formatted.map(label => label?.text || label?.datum)
    : colorScale?.domain() ?? []

  return { colors, labels }
}

export const getMarginTop = (isLegendBottom, config) => {
  if (!isLegendBottom) {
    return '0px'
  }
  if (isLegendBottom && config.brush?.active) {
    const BRUSH_HEIGHT_MULTIPLIER = 1.5
    return `${config.brush.height * BRUSH_HEIGHT_MULTIPLIER}px`
  }
  return '27px'
}
export const getMarginBottom = (isLegendBottom, config, hasSuppression) => {
  const isLegendTop = config.legend?.position === 'top' && !config.legend.hide

  let marginBottom = 0

  if (isLegendTop) marginBottom = 27

  if (isLegendTop && config.dataFormat?.onlyShowTopPrefixSuffix) marginBottom += 9

  if (isLegendBottom) marginBottom += 9

  if (hasSuppression) marginBottom += 40

  return `${marginBottom}px`
}
