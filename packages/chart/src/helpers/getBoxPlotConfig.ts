import capitalize from 'lodash/capitalize'
import flatMap from 'lodash/flatMap'
import map from 'lodash/map'
import round from 'lodash/round'
import uniq from 'lodash/uniq'
import { calculateBoxPlotStats } from './boxPlotStats'
import { ChartConfig } from '../types/ChartConfig'

export const getBoxPlotConfig = (newConfig: ChartConfig, data: object[]) => {
  const combinedData = data
  const groups = uniq(map(combinedData, newConfig.xAxis.dataKey))
  const seriesKeys = map(newConfig.series, 'dataKey')
  const plots: any[] = []

  groups.forEach(g => {
    seriesKeys.forEach(seriesKey => {
      try {
        if (!g) throw new Error('No groups resolved in box plots')

        const filteredData = combinedData.filter(item => item[newConfig.xAxis.dataKey] === g)
        const stats = calculateBoxPlotStats(map(filteredData, item => item[seriesKey]))

        if (!stats) throw new Error('boxplots dont have data yet')
        if (!plots) throw new Error('boxplots dont have plots yet')

        plots.push({
          columnCategory: g,
          columnMax: stats.whiskerMax,
          columnThirdQuartile: round(stats.q3, newConfig.dataFormat.roundTo),
          columnMedian: Number(stats.median).toFixed(newConfig.dataFormat.roundTo),
          columnFirstQuartile: round(stats.q1, newConfig.dataFormat.roundTo),
          columnMin: stats.whiskerMin,
          columnCount: stats.values.length,
          columnSd: Number(stats.deviation).toFixed(newConfig.dataFormat.roundTo),
          columnMean: Number(stats.mean).toFixed(newConfig.dataFormat.roundTo),
          columnIqr: round(stats.iqr, newConfig.dataFormat.roundTo),
          values: stats.values,
          columnLowerBounds: stats.lowerBound,
          columnUpperBounds: stats.upperBound,
          columnOutliers: stats.outliers,
          columnNonOutliers: stats.nonOutliers
        })
      } catch (e) {
        console.error('COVE: ', e.message) // eslint-disable-line
      }
    })
  })

  // Generate a flat list of categories based on seriesKeys and groups
  const categories =
    seriesKeys.length > 1
      ? flatMap(groups, value => map(seriesKeys, key => `${capitalize(key)} - ${capitalize(value)}`))
      : groups

  return [plots, categories]
}
