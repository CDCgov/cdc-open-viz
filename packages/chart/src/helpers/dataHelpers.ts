import { ChartConfig } from '../types/ChartConfig'

export const getSeriesWithData = (config: ChartConfig) => {
  const { filters, data, runtime } = config
  const { series } = runtime
  const filteredData = data.filter(d => filters.every(f => d[f.columnName] === f.active))

  const result = series
    .map(s => ({
      ...s,
      data: filteredData
        .filter(d => (s.dynamicCategory ? d[s.dynamicCategory || s.dataKey] === s.dataKey : d[s.dataKey]))
        .filter(d => !s.dynamicCategory || d[s.originalDataKey])
    }))
    .filter(s => s.data.length)
    .map(s => s.name || s.dataKey)

  return result
}
