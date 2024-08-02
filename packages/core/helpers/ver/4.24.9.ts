import _ from 'lodash'

const patchSingleStateZoom = newConfig => {
  // Map zooming is a default feature created for world maps
  // Since we're turning it on for single state maps lets default it off for opting in.
  if (newConfig.type === 'map' && newConfig.general.geoType === 'single-state') {
    newConfig.general.allowMapZoom = false
  }
}

const update_4_24_9 = config => {
  const ver = '4.24.9'
  const newConfig = _.cloneDeep(config)
  patchSingleStateZoom(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_9
