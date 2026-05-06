import { getFormattedData } from './getFormattedData'
import { DashboardConfig } from '../types/DashboardConfig'

const mapDataToVisualizations = (config: DashboardConfig) => {
  Object.keys(config.visualizations).forEach(vizKey => {
    const viz = config.visualizations[vizKey]
    if (viz.dataKey && !viz.data) {
      const dataset = config.datasets[viz.dataKey]
      if (!dataset) return
      config.visualizations[vizKey].data = dataset.data
      config.visualizations[vizKey].formattedData = getFormattedData(dataset.data, viz.dataDescription)
    }
  })
}

const mapDataToRows = (config: DashboardConfig) => {
  config.rows.forEach((row, i) => {
    if (row.dataKey && !row.data) {
      const dataset = config.datasets[row.dataKey]
      if (!dataset) return
      config.rows[i].data = dataset.data
      config.rows[i].formattedData = getFormattedData(dataset.data, row.dataDescription)
    }
  })
}

export const mapDataToConfig = (config: DashboardConfig) => {
  mapDataToVisualizations(config)
  mapDataToRows(config)
  return config
}
