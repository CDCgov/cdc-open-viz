import _ from 'lodash'

export const updatePreliminaryDataSeriesKeys = config => {
  if (config.type === 'chart') {
    ;(config.preliminaryData || []).forEach(pd => {
      pd.seriesKeys = pd.seriesKey ? [pd.seriesKey] : []
      delete pd.seriesKey
    })
  } else if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      updatePreliminaryDataSeriesKeys(visualization)
    })
  }
}

const update_4_25_7 = config => {
  const ver = '4.25.7'
  const newConfig = _.cloneDeep(config)
  updatePreliminaryDataSeriesKeys(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_7
