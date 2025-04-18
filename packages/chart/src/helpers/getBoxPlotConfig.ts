import _ from 'lodash'
import { ChartConfig } from '../types/ChartConfig'
import * as d3 from 'd3-array'

export const getBoxPlotConfig = (newConfig: ChartConfig, data: object[]) => {
  const combinedData = data
  const groups = _.uniq(_.map(combinedData, newConfig.xAxis.dataKey))
  const seriesKeys = _.map(newConfig.series, 'dataKey')
  const plots: any[] = []

  groups.forEach(g => {
    seriesKeys.forEach(seriesKey => {
      try {
        if (!g) throw new Error('No groups resolved in box plots')

        // Start handle operations on combinedData
        const { count, sortedData } = _.chain(combinedData)
          // Filter by xAxis data key
          .filter(item => item[newConfig.xAxis.dataKey] === g)
          // perform multiple operations on the filtered data
          .thru(filteredData => ({
            count: filteredData.length,
            sortedData: _.map(filteredData, item => Number(item[seriesKey])).sort()
          }))
          // get the results from the chain
          .value()

        if (!sortedData) throw new Error('boxplots dont have data yet')
        if (!plots) throw new Error('boxplots dont have plots yet')

        const q1 = d3.quantile(sortedData, 0.25)
        const q3 = d3.quantile(sortedData, 0.75)

        const iqr = q3 - q1
        const lowerBounds = q1 - 1.5 * iqr
        const upperBounds = q3 + 1.5 * iqr
        const nonOutliers = sortedData.filter(value => value >= lowerBounds && value <= upperBounds)
        plots.push({
          columnCategory: g,
          columnMax: d3.max(nonOutliers),
          columnThirdQuartile: _.round(q3, newConfig.dataFormat.roundTo),
          columnMedian: Number(d3.median(sortedData)).toFixed(newConfig.dataFormat.roundTo),
          columnFirstQuartile: _.round(q1, newConfig.dataFormat.roundTo),
          columnMin: _.min(nonOutliers),
          columnCount: count,
          columnSd: Number(d3.deviation(sortedData)).toFixed(newConfig.dataFormat.roundTo),
          columnMean: Number(d3.mean(sortedData)).toFixed(newConfig.dataFormat.roundTo),
          columnIqr: _.round(iqr, newConfig.dataFormat.roundTo),
          values: sortedData,
          columnLowerBounds: lowerBounds,
          columnUpperBounds: upperBounds,
          columnOutliers: _.filter(sortedData, value => value < lowerBounds || value > upperBounds),
          columnNonOutliers: _.filter(sortedData, value => value >= lowerBounds && value <= upperBounds)
        })
      } catch (e) {
        console.error('COVE: ', e.message) // eslint-disable-line
      }
    })
  })

  // Generate a flat list of categories based on seriesKeys and groups
  const categories =
    seriesKeys.length > 1
      ? _.flatMap(groups, value => _.map(seriesKeys, key => `${_.capitalize(key)} - ${_.capitalize(value)}`))
      : groups

  return [plots, categories]
}
