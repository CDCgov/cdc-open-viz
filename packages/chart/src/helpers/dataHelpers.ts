import { Series } from '@cdc/core/types/Series'
import isNumber from '@cdc/core/helpers/isNumber'
import { ChartConfig } from '../types/ChartConfig'

// For legend suppression (when `legend.unified` is false), treat a series as having
// data only if the active (filtered) dataset contains at least one numeric, non-zero
// value for that series. Placeholder strings (e.g. "Not applicable", "<1.0", ""),
// nullish values, and zeros are treated as "no visible data" for legend purposes.
const hasGraphableValue = (raw: unknown): boolean => {
  const sanitized = typeof raw === 'string' ? raw.replace(/[,$]/g, '').trim() : raw
  return isNumber(sanitized) && Number(sanitized) !== 0
}

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
          return hasGraphableValue(d[key])
        })
    }))
    .filter(s => s.data.length)
    .map(s => s.colorCodeSeries || s.name || s.dataKey)

  return result
}
