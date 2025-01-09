import _ from 'lodash'
import { ChartConfig } from '../types/ChartConfig'
import * as d3 from 'd3-array'

export const getComboChartConfig = (newConfig: ChartConfig) => {
  if (newConfig.visualizationType !== 'Combo' || !newConfig.series) return

  const runtimeKeys = {
    barSeriesKeys: [],
    lineSeriesKeys: [],
    areaSeriesKeys: [],
    forecastingSeriesKeys: []
  }

  // Define a mapping of series types to runtime keys
  const seriesTypeMap = new Map([
    ['Area Chart', 'areaSeriesKeys'],
    ['Forecasting', 'forecastingSeriesKeys'],
    ['Bar', 'barSeriesKeys'],
    ['Combo', 'barSeriesKeys'],
    ['Line', 'lineSeriesKeys'],
    ['dashed-sm', 'lineSeriesKeys'],
    ['dashed-md', 'lineSeriesKeys'],
    ['dashed-lg', 'lineSeriesKeys']
  ])

  newConfig.series.forEach(series => {
    const runtimeKey = seriesTypeMap.get(series.type)
    if (runtimeKey) {
      const valueToPush = runtimeKey === 'barSeriesKeys' || runtimeKey === 'lineSeriesKeys' ? series.dataKey : series
      runtimeKeys[runtimeKey].push(valueToPush)
    }

    // Change Combo series type to Bar
    if (series.type === 'Combo') {
      series.type = 'Bar'
    }
  })

  // Assign the processed runtime keys to the configuration
  return { ...newConfig.runtime, ...runtimeKeys }
}
