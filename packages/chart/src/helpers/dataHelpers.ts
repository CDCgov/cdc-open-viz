import { ChartConfig } from '../types/ChartConfig'

export const getSeriesWithData = (config: ChartConfig) => {
  const { filters, data, series } = config
  const filteredData = data.filter(d => filters.every(f => d[f.columnName] === f.active))

  return series.filter(s => filteredData.some(d => d[s.dataKey])).map(s => s.name || s.dataKey)
}
