import { getFormattedData } from './getFormattedData'
import { DashboardConfig } from '../types/DashboardConfig'

const mapDataToVisualizations = (config: DashboardConfig) => {
  Object.keys(config.visualizations).forEach((vizKey, i) => {
    const viz = config.visualizations[vizKey]
    if (viz.dataKey && !viz.data) {
      const data = config.datasets[viz.dataKey].data
      config.visualizations[vizKey].data = data
      config.visualizations[vizKey].formattedData = getFormattedData(data, viz.dataDescription)
    }
  })
}

const mapDataToRows = (config: DashboardConfig) => {
  config.rows.forEach((row, i) => {
    if (row.dataKey && !row.data) {
      const data = config.datasets[row.dataKey].data
      config.rows[i].data = data
      config.rows[i].formattedData = getFormattedData(data, row.dataDescription)
    }
  })
}

export const mapDataToConfig = (config: DashboardConfig) => {
  mapDataToVisualizations(config)
  mapDataToRows(config)
  return config
}
