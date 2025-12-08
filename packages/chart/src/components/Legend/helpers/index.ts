export const getGradientConfig = (config, formatLabels, colorScale) => {
  const defaultValue = [{ datum: '', index: 0, text: '', value: '' }]

  const formatted = formatLabels(defaultValue)

  // For Warming Stripes, always use the formatted labels which contain the gradient stops
  if (config.visualizationType === 'Warming Stripes' && config.legend.style === 'gradient') {
    // Extract the colors array from the first item (all items have the same color stops)
    const colors = formatted[0]?.colors || formatted.map(label => label?.value).filter(Boolean)
    const labels = formatted.map(label => label?.text || label?.datum)
    return { colors, labels }
  }

  const colors = config.legend.colorCode ? formatted.map(label => label?.value) : colorScale?.range() ?? []
  const labels = config.legend.colorCode
    ? formatted.map(label => label?.text || label?.datum)
    : colorScale?.domain() ?? []

  return { colors, labels }
}

export const getMarginTop = (isLegendBottom, config) => {
  // margin between charts xAxis legend not to overlap axis labels,ticks.
  const DEFAULT_MARGIN_TOP = 27
  if (isLegendBottom && config.legend.hide) {
    return '0px'
  }
  if (!isLegendBottom) {
    return '0px'
  }
  if (isLegendBottom && config.xAxis.brushActive && !config.legend.hide) {
    const additiolMargin = 25
    return `${DEFAULT_MARGIN_TOP + config.brush?.height + additiolMargin}px`
  } else {
    return `${DEFAULT_MARGIN_TOP}px`
  }
}
export const getMarginBottom = (isLegendBottom, config) => {
  const isLegendTop = config.legend?.position === 'top' && !config.legend.hide
  const hasSuppression =
    !config.legend.hideSuppressionLink &&
    config.visualizationSubType !== 'stacked' &&
    config.preliminaryData?.some(pd => pd.label && pd.type === 'suppression' && pd.value && (pd?.style || pd.symbol))
  let marginBottom = 0

  if (isLegendTop) marginBottom = 27

  if (isLegendTop && config.yAxis?.inlineLabel) marginBottom += 9

  if (isLegendBottom) marginBottom += 9

  if (hasSuppression) marginBottom += 40

  return `${marginBottom}px`
}
