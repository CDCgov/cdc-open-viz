import cloneConfig from '../cloneConfig'

const migrateUnusedOverlayLegendSetting = config => {
  if (config.type === 'map') {
    config.legend ??= {}
    if (config.legend.hideUnusedPatternAndBubbleLegends === undefined) {
      config.legend.hideUnusedPatternAndBubbleLegends = false
    }
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(migrateUnusedOverlayLegendSetting)
  }
}

const repairMapInteractionType = config => {
  if (config.type === 'map' && config.general?.type === 'map') {
    config.general.type = 'data'
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(repairMapInteractionType)
  }
}

const update_4_26_11 = config => {
  const newConfig = cloneConfig(config)
  repairMapInteractionType(newConfig)
  migrateUnusedOverlayLegendSetting(newConfig)
  newConfig.version = '4.26.11'
  return newConfig
}

export default update_4_26_11
