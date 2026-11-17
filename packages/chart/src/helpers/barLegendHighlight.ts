import type { ChartConfig } from '../types/ChartConfig'

type BarLegendConfig = {
  highlightedBarValues?: ChartConfig['highlightedBarValues']
  series: Pick<ChartConfig['series'][number], 'dataKey'>[]
}

// Keep display labels separate from series keys, including when both have the same text.
export const getHighlightedBarLegendKey = (label: string): string => `highlighted-bar:${JSON.stringify(label)}`

export const getHighlightedBarLegendKeys = (config: BarLegendConfig): string[] => [
  ...new Set(
    (config.highlightedBarValues || [])
      .filter(item => item.legendLabel)
      .map(item => getHighlightedBarLegendKey(item.legendLabel))
  )
]

export const isBarLegendSelectionActive = (
  config: BarLegendConfig,
  selection: string[],
  seriesKey: string,
  categoryValue: unknown
): boolean => {
  if (!selection.length || selection.includes(seriesKey)) return true

  return (config.highlightedBarValues || []).some(
    item =>
      item.legendLabel &&
      selection.includes(getHighlightedBarLegendKey(item.legendLabel)) &&
      (item.dataKey || config.series[0]?.dataKey) === seriesKey &&
      item.value !== '' &&
      item.value != null &&
      String(item.value) === String(categoryValue)
  )
}

// Shared tooltip rows need the owning series keys rather than highlighted-value identities.
export const getSelectedBarSeriesKeys = (config: BarLegendConfig, selection: string[]): string[] => {
  const highlightKeys = new Set(getHighlightedBarLegendKeys(config))
  const seriesKeys = selection.flatMap(key =>
    highlightKeys.has(key)
      ? (config.highlightedBarValues || [])
          .filter(item => item.legendLabel && getHighlightedBarLegendKey(item.legendLabel) === key)
          .map(item => item.dataKey || config.series[0]?.dataKey)
      : [key]
  )

  return [...new Set(seriesKeys)].filter(Boolean)
}
