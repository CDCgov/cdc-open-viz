import type { Label } from '../types/Label'

type LegendHighlightSource = Pick<Label, 'datum'> | string

export const getLegendHighlightKey = (
  seriesLabels: Record<string, string> = {},
  legendSource: LegendHighlightSource
): string => {
  const labelDatum = typeof legendSource === 'string' ? legendSource : legendSource.datum

  return Object.entries(seriesLabels).find(([, label]) => label === labelDatum)?.[0] || labelDatum
}

export const shouldResetSeriesHighlight = (
  seriesHighlight: string[],
  seriesKeys: string[] = [],
  highlightKey: string,
  visualizationType?: string,
  additionalLegendKeys: string[] = []
): boolean => {
  const legendKeys = [...seriesKeys, ...additionalLegendKeys]
  return (
    visualizationType !== 'Forecasting' &&
    legendKeys.includes(highlightKey) &&
    !seriesHighlight.includes(highlightKey) &&
    (additionalLegendKeys.length
      ? legendKeys.every(key => key === highlightKey || seriesHighlight.includes(key))
      : seriesHighlight.length + 1 === seriesKeys.length)
  )
}
