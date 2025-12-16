import cloneConfig from '../cloneConfig'

const normalizeFilterParents = config => {
  if (config.type === 'dashboard') {
    if (config.dashboard?.sharedFilters) {
      config.dashboard.sharedFilters.forEach(filter => {
        if (filter.type === 'datafilter' && filter.parents && typeof filter.parents === 'string') {
          filter.parents = [filter.parents]
        }
      })
    }
  }
}

const update_4_26_1 = config => {
  const ver = '4.26.1'
  const newConfig = cloneConfig(config)
  normalizeFilterParents(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_1
