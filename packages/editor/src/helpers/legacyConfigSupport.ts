import _ from 'lodash'

// Legacy support - dashboards using a single dataset
export const legacyConfigSupport = config => {
  if (config.type === 'dashboard') {
    let legacyUpdateNeeded = false
    let newConfig

    if (config.data || config.dataUrl) {
      legacyUpdateNeeded = true
      newConfig = { ...config }
      const dataKey = config.dataFileName || 'dataset-1'

      newConfig.datasets = {}
      newConfig.datasets[dataKey] = {
        ..._.pick(config, ['data', 'dataUrl', 'dataFileSourceType']),
        dataFileName: dataKey
      }

      Object.keys(newConfig.visualizations).forEach(vizKey => {
        const newData = { dataKey, ..._.pick(newConfig, 'dataDescription', 'formattedData') }
        newConfig.visualizations[vizKey] = { ...newConfig.visualizations[vizKey], ...newData }
      })

      const blankFields = { data: [], dataUrl: '', dataFileName: '', dataFileSourceType: '', dataDescription: [], formattedData: [] }
      newConfig = { ...newConfig, ...blankFields }
    }

    if (config.dashboard?.filters) {
      legacyUpdateNeeded = true
      newConfig = { ...config }
      const dashboard = { ...newConfig.dashboard }
      // replace filters with sharedFilters
      if (!dashboard.sharedFilters) dashboard.sharedFilters = []
      const filters = dashboard.filters.map(filter => {
        return { ...filter, key: filter.label, showDropdown: true, usedBy: Object.keys(newConfig.visualizations) }
      })
      dashboard.sharedFilters = [...dashboard.sharedFilters, ...filters]
      newConfig.dashboard = { ...dashboard, filters: undefined }
    }

    if (legacyUpdateNeeded) {
      return newConfig
    }
  }
  return config
}
