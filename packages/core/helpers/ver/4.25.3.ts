import _ from 'lodash'

const remapTableDownloadCSV = config => {
  if (config.general?.showDownloadButton !== undefined) {
    const download = config.general.showDownloadButton
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

const update_4_25_3 = config => {
  const ver = '4.25.3'
  const newConfig = _.cloneDeep(config)
  handleVisualizations(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_3
