import _ from 'lodash'
import { ChartConfig } from '../types/ChartConfig'
import { getQuartiles } from './getQuartiles'
import * as d3 from 'd3-array'

export const handleBoxPlotConfig = (newConfig: ChartConfig, data: object[]) => {
  if (newConfig.visualizationType !== 'Box Plot' || !newConfig.series) return

  const combinedData = data
  const groups = _.uniqBy(combinedData, newConfig.xAxis.dataKey)
  const seriesKeys = _.map(newConfig.series, 'dataKey')
  const plots = _.flatMap(groups, g =>
    seriesKeys
      .map(seriesKey => {
        try {
          if (!g) throw new Error('No groups resolved in box plots')

          const filtered = _.filter(combinedData, item => item[newConfig.xAxis.dataKey] === g)
          const sortedData = _.sortBy(_.map(filtered, seriesKey).map(Number))
          if (_.isEmpty(sortedData)) throw new Error('Box plots have no data')

          const quartiles = getQuartiles(sortedData)
          const { q1, q3 } = quartiles
          const iqr = q3 - q1
          const [lowerBounds, upperBounds] = [q1 - 1.5 * iqr, q3 + 1.5 * iqr]
          const filteredData = _.filter(sortedData, d => d <= upperBounds)
          const outliers = _.filter(sortedData, value => value < lowerBounds || value > upperBounds)

          return {
            columnCategory: g,
            columnMax: _.max(filteredData),
            columnThirdQuartile: _.round(q3, newConfig.dataFormat.roundTo),
            columnMedian: _.round(d3.median(sortedData) || 0, newConfig.dataFormat.roundTo),
            columnFirstQuartile: _.round(q1, newConfig.dataFormat.roundTo),
            columnMin: _.min(sortedData),
            columnCount: sortedData.length,
            columnSd: _.round(d3.deviation(sortedData) || 0, newConfig.dataFormat.roundTo),
            columnMean: _.round(d3.mean(sortedData) || 0, newConfig.dataFormat.roundTo),
            columnIqr: _.round(iqr, newConfig.dataFormat.roundTo),
            values: sortedData,
            columnLowerBounds: lowerBounds,
            columnUpperBounds: upperBounds,
            columnOutliers: outliers,
            columnNonOutliers: _.difference(sortedData, outliers)
          }
        } catch (e) {
          console.error('COVE:', e.message)
          return null
        }
      })
      .filter(Boolean)
  )

  return plots
}
