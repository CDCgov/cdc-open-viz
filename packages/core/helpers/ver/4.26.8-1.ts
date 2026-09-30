import cloneConfig from '../cloneConfig'
import { applyPaletteCompatibilityRepair } from './4.25.9'

const update_4_26_8_1 = config => {
  const newConfig = cloneConfig(config)

  applyPaletteCompatibilityRepair(newConfig)

  if (newConfig.type === 'dashboard') {
    newConfig.dashboard = newConfig.dashboard || {}
    if (!Array.isArray(newConfig.dashboard.sharedFilters)) {
      newConfig.dashboard.sharedFilters = []
    }
  }

  newConfig.version = '4.26.8-1'
  return newConfig
}

export default update_4_26_8_1
