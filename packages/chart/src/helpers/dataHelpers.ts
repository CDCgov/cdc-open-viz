import { ChartConfig } from '../types/ChartConfig'

export const getSeriesWithData = (config: ChartConfig) => {
  const { filters, data, runtime } = config
  const { series } = runtime
  const filteredData = data.filter(d => filters.every(f => d[f.columnName] === f.active))

  const result = series
    .map(s => ({
      ...s,
      data: filteredData
        .filter(d => !s.dynamicCategory || d[s.dynamicCategory] === s.dataKey)
        .filter(d => {
          const key = s.dynamicCategory ? s.originalDataKey : s.dataKey
          return d[key] || d[key] === 0
        })
    }))
    .filter(s => s.data.length)
    .map(s => s.name || s.dataKey)

  return result
}
