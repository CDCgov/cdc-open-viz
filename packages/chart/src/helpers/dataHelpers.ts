import { Series } from '@cdc/core/types/Series'
import { ChartConfig } from '../types/ChartConfig'

export const getSeriesWithData = (config: ChartConfig) => {
  const { filters, data, runtime, legend } = config
  const { colorCode } = legend
  const { series } = runtime

  const filteredData = data.filter(d => filters.every(f => d[f.columnName] === f.active))
  const colorCodeSeries = colorCode && Array.from(new Set(filteredData.map(d => d[colorCode])))

  const result = series
    .flatMap(s => {
      if (!colorCode || s.type !== 'Bar') return s
      return colorCodeSeries.map(c => ({ ...s, colorCodeSeries: c }))
    })
    .map(s => ({
      ...s,
      data: filteredData
        .filter(d => !s.dynamicCategory || d[s.dynamicCategory] === s.dataKey)
        .filter(d => !s.colorCodeSeries || d[colorCode] === s.colorCodeSeries)
        .filter(d => {
          const key = s.dynamicCategory ? s.originalDataKey : s.dataKey
          return d[key] || d[key] === 0
        })
    }))
    .filter(s => s.data.length)
    .map(s => s.colorCodeSeries || s.name || s.dataKey)

  return result
}
