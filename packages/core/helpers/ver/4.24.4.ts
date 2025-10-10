import _ from 'lodash'
import cloneConfig from '../cloneConfig'

const addFiltersToTables = config => {
  if (config.type === 'dashboard') {
    Object.keys(config.visualizations).forEach(vizKey => {
      const viz = config.visualizations[vizKey]
      if (viz.type === 'table') {
        if (!viz.filters) {
          viz.filters = []
          viz.filterBehavior = 'Filter Change'
        }
      }
    })
  }
}

const update_4_24_4 = config => {
  const ver = '4.24.4'

  const newConfig = cloneConfig(config)
  addFiltersToTables(newConfig)

  newConfig.version = ver
  return newConfig
}

export default update_4_24_4
