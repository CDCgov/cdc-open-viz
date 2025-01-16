import _ from 'lodash'
import * as d3 from 'd3-array'

interface Plot {
  columnCategory: string
  columnOutliers: Record<string, number[]>
  columnNonOutliers: Record<string, number[]>
  keyValues: { [key: string]: number[] }
  min: Record<string, number[]>
  max: Record<string, number[]>
  q1: any
  q3: any
  median: any
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

export const calculateBoxPlotStats = (values: number[]) => {
  if (!values || values.length === 0) return {}

  // Sort the values
  const sortedValues = _.sortBy(values)

  // Quartiles
  const firstQuartile = d3.quantile(sortedValues, 0.25) ?? 0
  const thirdQuartile = d3.quantile(sortedValues, 0.75) ?? 0

  // Interquartile Range (IQR)
  const iqr = thirdQuartile - firstQuartile

  // Outlier Bounds
  const lowerBound = firstQuartile - 1.5 * iqr
  const upperBound = thirdQuartile + 1.5 * iqr

  // Non-Outlier Values
  const nonOutliers = sortedValues.filter(value => value >= lowerBound && value <= upperBound)

  // Calculate Box Plot Stats
  return {
    min: d3.min(nonOutliers), // Smallest non-outlier value
    max: d3.max(nonOutliers), // Largest non-outlier value
    median: d3.median(sortedValues), // Median of all values
    firstQuartile,
    thirdQuartile,
    iqr
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

// Helper to calculate non-outliers based on IQR
export const calculateNonOutliers = (values: number[], firstQuartile: number, thirdQuartile: number): number[] => {
  const iqr = thirdQuartile - firstQuartile
  const lowerBound = firstQuartile - 1.5 * iqr
  const upperBound = thirdQuartile + 1.5 * iqr

  // Return values within the bounds
  return values.filter(value => value >= lowerBound && value <= upperBound)
}

// Main function to create plots with additional outlier data
export const createPlots = (data, config) => {
  const dataKeys = data.map(d => d[config.xAxis.dataKey])
  const plots: Plot[] = []
  const groups: string[] = _.uniq(dataKeys)

  if (groups && groups.length > 0) {
    groups.forEach(group => {
      const keyValues = getValuesBySeriesKey(group, config, data)
      const columnOutliers: Record<string, number[]> = {}
      const columnNonOutliers: Record<string, number[]> = {}
      const columnMedian = {}
      const columnMin = {}
      const columnMax = {}
      const columnQ1 = {}
      const columnQ3 = {}

      // Calculate outliers and non-outliers for each series key
      Object.keys(keyValues).forEach(key => {
        const values = keyValues[key]

        // Calculate box plot statistics
        const { firstQuartile, thirdQuartile, min, max, median } = calculateBoxPlotStats(values)
        console.log(median, 'median')
        // Calculate outliers and non-outliers
        columnOutliers[key] = calculateOutliers(values, firstQuartile, thirdQuartile).map(Number)
        columnNonOutliers[key] = calculateNonOutliers(values, firstQuartile, thirdQuartile).map(Number)
        columnMedian[key] = median
        columnMin[key] = min
        columnMax[key] = max
        columnQ1[key] = firstQuartile
        columnQ3[key] = thirdQuartile
      })

      // Add the plot object to the plots array
      plots.push({
        columnCategory: group,
        keyValues,
        columnOutliers,
        columnNonOutliers,
        min: columnMin,
        max: columnMax,
        q1: columnQ1,
        q3: columnQ3,
        median: columnMedian
      })
    })
  }

  return plots
}
