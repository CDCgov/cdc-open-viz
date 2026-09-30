import cloneConfig from '../cloneConfig'

export const makeChartLegendsUnified = config => {
  if (config.type === 'chart') {
    config.legend = config.legend || {}
    if (config.legend.unified === undefined) {
      config.legend.unified = true
    }
  } else if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      makeChartLegendsUnified(visualization)
    })
  }
}

const migrateTableGeneralSettings = config => {
  if (config.type === 'map') {
    if (config.general.showFullGeoNameInCSV) {
      config.table.showFullGeoNameInCSV = config.general.showFullGeoNameInCSV
    }
    delete config.general.showFullGeoNameInCSV
    return config
  }
}

const update_4_25_4 = config => {
  const ver = '4.25.4'
  const newConfig = cloneConfig(config)
  makeChartLegendsUnified(newConfig)
  migrateTableGeneralSettings(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_4
