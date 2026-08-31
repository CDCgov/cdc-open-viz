type SeriesNameItem = {
  dataKey: string
  name?: string
  label?: string
}

type SeriesNameConfig = {
  series?: SeriesNameItem[]
  runtime?: {
    series?: SeriesNameItem[]
    seriesLabels?: Record<string, unknown>
  }
  runtimeSeriesLabels?: Record<string, unknown>
}

/** Resolves a series name without applying surface-specific column labels. */
export const getSeriesName = (dataKey: string, config: SeriesNameConfig): string => {
  const configuredSeries = config.series?.find(series => series.dataKey === dataKey)
  const runtimeSeries = config.runtime?.series?.find(series => series.dataKey === dataKey)
  const seriesName = configuredSeries?.name || runtimeSeries?.name || configuredSeries?.label || runtimeSeries?.label

  if (seriesName) return seriesName

  const runtimeLabel = config.runtime?.seriesLabels?.[dataKey] || config.runtimeSeriesLabels?.[dataKey]
  return runtimeLabel ? String(runtimeLabel) : dataKey
}
