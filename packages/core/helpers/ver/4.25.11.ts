import cloneConfig from '../cloneConfig'

const update_4_25_11 = config => {
  const ver = '4.25.11'
  const newConfig = cloneConfig(config)
  // No config transformations needed - this is a runtime behavior fix
  newConfig.version = ver
  return newConfig
}

export default update_4_25_11


