import { Series } from '@cdc/core/types/Series'
import isNumber from '@cdc/core/helpers/isNumber'
import { ChartConfig } from '../types/ChartConfig'

// A series only contributes to the chart (and therefore the legend) when the
// graphed value column holds a numeric, non-zero value. Strings such as
// "Not applicable", "<1.0", "" or nullish values are not plotted, and zero
// adds nothing visually, so none of them count as data for legend purposes.
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
