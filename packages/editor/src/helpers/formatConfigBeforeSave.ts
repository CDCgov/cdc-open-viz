import _ from 'lodash'

export const formatConfigBeforeSave = configToStrip => {
  let strippedConfig = { ...configToStrip }

  if (strippedConfig.type === 'dashboard') {
    if (strippedConfig.datasets) {
      Object.keys(strippedConfig.datasets).forEach(datasetKey => {
        delete strippedConfig.datasets[datasetKey].formattedData
        if (strippedConfig.datasets[datasetKey].dataUrl) {
          delete strippedConfig.datasets[datasetKey].data
        }
      })
    }
    if (strippedConfig.visualizations) {
      Object.keys(strippedConfig.visualizations).forEach(vizKey => {
        strippedConfig.visualizations[vizKey] = _.omit(strippedConfig.visualizations[vizKey], ['runtime', 'formattedData', 'data'])
      })
    }
  } else {
    delete strippedConfig.runtime
    delete strippedConfig.formattedData
    if (strippedConfig.dataUrl) {
      delete strippedConfig.data
    }
  }

  return strippedConfig
}
