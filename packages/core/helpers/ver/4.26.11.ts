import cloneConfig from '../cloneConfig'

const repairMapInteractionType = config => {
  if (config.type === 'map' && config.general?.type === 'map') {
    config.general.type = 'data'
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(repairMapInteractionType)
  }
}

const preserveLocationLinks = config => {
  if (
    config.type === 'map' &&
    config.general?.type === 'data' &&
    typeof config.columns?.navigate?.name === 'string' &&
    config.columns.navigate.name.trim()
  ) {
    config.locationLinks = {
      ...config.locationLinks,
      enableMapNavigation: config.locationLinks?.enableMapNavigation ?? true,
      enableDataTableLinks: config.locationLinks?.enableDataTableLinks ?? true
    }
  }
  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(preserveLocationLinks)
  }
}

const update_4_26_11 = config => {
  const newConfig = cloneConfig(config)
  repairMapInteractionType(newConfig)
  preserveLocationLinks(newConfig)
  newConfig.version = '4.26.11'
  return newConfig
}

export default update_4_26_11
