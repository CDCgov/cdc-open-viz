import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const removeOldBrushKeys = config => {
  if (config.type === 'chart') {
    // Remove old brush object entirely - brush feature is new in 4.26.1
    // and any existing brush config is from development/testing
    delete config.brush
  }

  if (config.type === 'dashboard') {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      removeOldBrushKeys(visualization)
    })
  }
}

const update_4_26_1 = config => {
  const ver = '4.26.1'
  const newConfig = cloneConfig(config)
  removeOldBrushKeys(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_1
