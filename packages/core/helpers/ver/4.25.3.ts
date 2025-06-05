import _ from 'lodash'

const remapTableDownloadCSV = config => {
  if (config.general?.showDownloadButton !== undefined) {
    let download = config.general.showDownloadButton
    if (config.type === 'chart') {
      download = config.table.download || config.general.showDownloadButton
    }
    delete config.general.showDownloadButton
    config.table.download = download
  }
  return config
}

const handleVisualizations = newConfig => {
  if (newConfig.type === 'dashboard') {
    Object.keys(newConfig.visualizations).forEach(key => {
      const currentViz = newConfig.visualizations[key]
      remapTableDownloadCSV(currentViz)
    })
  }
  remapTableDownloadCSV(newConfig)
}

const migrateAreaChart = config => {
  // Migrate regular Area Chart to Stacked
  if (config.visualizationType === 'Area Chart' && config.visualizationSubType === 'regular') {
    config.visualizationSubType = 'stacked'
  }
  return config
}

const update_4_25_3 = config => {
  const ver = '4.25.3'
  const newConfig = _.cloneDeep(config)
  handleVisualizations(newConfig)
  remapTableDownloadCSV(newConfig)
  migrateAreaChart(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_3
