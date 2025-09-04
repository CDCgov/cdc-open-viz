import _ from 'lodash'
import cloneConfig from '../cloneConfig'

const removeTerritoriesLabel = config => {
  if (config.general?.territoriesLabel) {
    delete config.general.territoriesLabel
  }
  return config
}

const update_4_25_1 = config => {
  const ver = '4.25.1'
  const newConfig = cloneConfig(config)
  removeTerritoriesLabel(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_1
