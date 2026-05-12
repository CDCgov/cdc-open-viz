export const getLegendHighlightKey = (seriesLabels: Record<string, string> = {}, labelDatum: string): string => {
  return Object.entries(seriesLabels).find(([, label]) => label === labelDatum)?.[0] || labelDatum
}

export const shouldResetSeriesHighlight = (
  seriesHighlight: string[],
  seriesKeys: string[] = [],
  highlightKey: string,
  visualizationType?: string
): boolean => {
  return (
    seriesHighlight.length + 1 === seriesKeys.length &&
    visualizationType !== 'Forecasting' &&
    !seriesHighlight.includes(highlightKey)
  )
}
