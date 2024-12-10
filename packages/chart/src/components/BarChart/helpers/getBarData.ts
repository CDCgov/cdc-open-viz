import _ from 'lodash'
import { TransformedData } from '../../../types/ChartContext'
import { ChartConfig } from '../../../types/ChartConfig'

export const getBarData = (config: ChartConfig, data: TransformedData[], hasConfidenceInterval: boolean) => {
  const dynamicSeries = config.series.find(s => s.dynamicCategory)
  if (!dynamicSeries) return data
  const { dynamicCategory, dataKey } = dynamicSeries
  const xAxisKey = config.runtime.originalXAxis.dataKey
  const xAxisGroupDataLookup = _.groupBy(data, xAxisKey)
  return Object.values(xAxisGroupDataLookup).map(group => {
    return group.reduce((acc, datum) => {
      const dataValue = datum[dataKey]
      const dataCategory = datum[dynamicCategory]
      if (hasConfidenceInterval) {
        const { lower, upper } = config.confidenceKeys
        if (!acc.CI) acc.CI = {}
        const lowerValue = datum[lower]
        const upperValue = datum[upper]
        acc.CI[dataCategory] = { lower: lowerValue, upper: upperValue }
      }
      acc[dataCategory] = dataValue
      acc[xAxisKey] = datum[xAxisKey]
      acc.dynamicData = true
      return acc
    }, {})
  })
}
