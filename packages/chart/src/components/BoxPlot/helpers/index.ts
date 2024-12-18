import { max, min, median, quantile } from 'd3-array'
import _ from 'lodash'

interface Plot {
  columnCategory: string
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

export const createPlots = (data, config) => {
  const dataKeys = data.map(d => d[config.xAxis.dataKey])
  const plots: Plot[] = []
  const groups: string[] = _.uniq(dataKeys)
  if (groups && groups.length > 0) {
    groups.forEach(group => {
      plots.push({
        columnCategory: group,
        keyValues: getValuesBySeriesKey(group, config, data)
      })
    })
  }
  return plots
}
