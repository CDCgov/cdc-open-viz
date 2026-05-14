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
  visualizationType?: string
): boolean => {
  return (
    seriesHighlight.length + 1 === seriesKeys.length &&
    visualizationType !== 'Forecasting' &&
    seriesKeys.includes(highlightKey) &&
    !seriesHighlight.includes(highlightKey)
  )
}
