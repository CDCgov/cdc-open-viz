import { max, min, median, quantile } from 'd3-array'
import _ from 'lodash'

interface Plot {
  columnCategory: string
  columnOutliers: object
  keyValues: { [key: string]: number[] }
}
export const handleTooltip = (boxplot, d, key, q1, q3, median, iqr) => {
  return `
      <strong>${d.columnCategory}</strong></br>
       <strong>Key:${key}</strong></br>
      ${boxplot.labels.q1}: ${q1}<br/>
      ${boxplot.labels.q3}: ${q3}<br/>
      ${boxplot.labels.iqr}: ${iqr}<br/>
      ${boxplot.labels.median}: ${median}
    `
}

export const calculateBoxPlotStats = values => {
  if (!values || !values.length) return {}
  const sortedValues = _.sortBy(values)
  return {
    min: min(values),
    max: max(values),
    median: median(values),
    firstQuartile: quantile(sortedValues, 0.25),
    thirdQuartile: quantile(sortedValues, 0.75)
  }
}
const getValuesBySeriesKey = (group: string, config, data) => {
  const allSeriesKeys = config.series.map(item => item?.dataKey)
  const result = {}
  const filteredData = data.filter(item => item[config.xAxis.dataKey] === group)
  allSeriesKeys.forEach(key => {
    result[key] = filteredData.map(item => item[key])
  })

  return result
}

// Helper to calculate outliers based on IQR
export const calculateOutliers = (values: number[], firstQuartile: number, thirdQuartile: number) => {
  const iqr = thirdQuartile - firstQuartile
  const lowerBound = firstQuartile - 1.5 * iqr
  const upperBound = thirdQuartile + 1.5 * iqr
  return values.filter(value => value < lowerBound || value > upperBound)
}

// Main function to create plots with additional outlier data
export const createPlots = (data, config) => {
  const dataKeys = data.map(d => d[config.xAxis.dataKey])
  const plots: Plot[] = []
  const groups: string[] = _.uniq(dataKeys)

  if (groups && groups.length > 0) {
    groups.forEach(group => {
      const keyValues = getValuesBySeriesKey(group, config, data)
      const columnOutliers = {}

      // Calculate outliers for each series key
      Object.keys(keyValues).forEach(key => {
        const values = keyValues[key]

        const { firstQuartile, thirdQuartile } = calculateBoxPlotStats(values)
        columnOutliers[key] = _.map(
          calculateOutliers(values, firstQuartile, thirdQuartile),
          Number // Convert each value to a number
        )
      })

      // Add the plot object to the plots array
      plots.push({
        columnCategory: group,
        keyValues,
        columnOutliers // New property for outliers
      })
    })
  }

  return plots
}
