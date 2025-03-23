import { VisualizationType } from './../../../chart/src/types/ChartConfig'
import _ from 'lodash'

const remapTableDownloadCSV = config => {
  if (config.general?.showDownloadButton !== undefined) {
    const download = config.general.showDownloadButton
    delete config.general.showDownloadButton
    config.table.download = download
  }
  return config
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
  let newConfig = _.cloneDeep(config)
  newConfig = remapTableDownloadCSV(newConfig)
  newConfig = migrateAreaChart(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_3
