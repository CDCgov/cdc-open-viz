import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const migrateMarkupVariables = config => {
  if (config.type === 'markup-include') {
    // Move markupVariables from contentEditor to root level
    if (config.contentEditor?.markupVariables) {
      config.markupVariables = config.contentEditor.markupVariables
      delete config.contentEditor.markupVariables
      // Enable markup variables if any were found
      if (config.markupVariables.length > 0) {
        config.enableMarkupVariables = true
      }
    }
    // Ensure markupVariables exists at root level
    if (!config.markupVariables) {
      config.markupVariables = []
    }
  }

  if (config.type === 'dashboard') {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      migrateMarkupVariables(visualization)
    })
  }
}

const update_4_25_10 = config => {
  const ver = '4.25.10'
  const newConfig = cloneConfig(config)
  migrateMarkupVariables(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_10