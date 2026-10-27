type SeriesNameItem = {
  dataKey: string
  name?: string
  label?: string
}

type SeriesNameConfig = {
  series?: SeriesNameItem[]
  columns?: Record<string, { name?: string; label?: string }>
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

/** Resolves the label used by series-value surfaces such as chart tooltips and data tables. */
export const getSeriesValueLabel = (dataKey: string, config: SeriesNameConfig): string => {
  const matchingColumn = Object.entries(config.columns || {}).find(([columnKey, column]) => {
    return column.name === dataKey || (!column.name && columnKey === dataKey)
  })?.[1]
  const customColumnLabel = matchingColumn?.label && matchingColumn.label !== dataKey ? matchingColumn.label : undefined

  return customColumnLabel || getSeriesName(dataKey, config)
}
