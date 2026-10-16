import uniq from 'lodash/uniq'
import { calculateBoxPlotStats } from '../../../helpers/boxPlotStats'

interface Plot {
  columnCategory: string
  columnOutliers: Record<string, number[]>
  columnNonOutliers: Record<string, number[]>
  keyValues: Record<string, number[]>
  min: Record<string, number | null>
  max: Record<string, number | null>
  q1: Record<string, number>
  q3: Record<string, number>
  median: Record<string, number | null>
  iqr: Record<string, number>
}
export const handleTooltip = (boxplot, columnCategory, key, q1, q3, median, iqr, label, color) => {
  return `
    <div class="p-2  text-red" style="max-width: 300px; word-wrap: break-word; opacity:0.7; background: rgba(255, 255, 255, 0.9)">
      <div class="fw-bold" style="color: ${color};">
        ${label ? `${label} : ${columnCategory}` : columnCategory}
      </div>
      <div class="" style="background: ${color}; height: 2px;"></div>
        <strong>Key:</strong> ${key}<br/>
        <strong>${boxplot.labels.q1}:</strong> ${q1}<br/>
        <strong>${boxplot.labels.q3}:</strong> ${q3}<br/>
        <strong>${boxplot.labels.iqr}:</strong> ${iqr}<br/>
        <strong>${boxplot.labels.median}:</strong> ${median}
    </div>
  `
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

// Main function to create plots with additional outlier data
export const createPlots = (data, config) => {
  const dataKeys = data.map(d => d[config.xAxis.dataKey])
  const plots: Plot[] = []
  const groups: string[] = uniq(dataKeys)

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
      const columnIqr = {}

      // Calculate outliers and non-outliers for each series key
      Object.keys(keyValues).forEach(key => {
        const stats = calculateBoxPlotStats(keyValues[key] ?? [])
        if (!stats) return

        // Calculate box plot statistics
        columnOutliers[key] = stats.outliers
        columnNonOutliers[key] = stats.nonOutliers
        columnMedian[key] = stats.median ?? null
        columnMin[key] = stats.whiskerMin
        columnMax[key] = stats.whiskerMax
        columnQ1[key] = stats.q1
        columnQ3[key] = stats.q3
        columnIqr[key] = stats.iqr
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
        median: columnMedian,
        iqr: columnIqr
      })
    })
  }

  return plots
}
