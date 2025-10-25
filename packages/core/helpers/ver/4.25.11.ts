import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

/**
 * Migration to standardize theme property location across all visualization types
 * Moves config.theme to config.general.headerColor for consistency
 * Map already uses config.general.headerColor, so no change needed there
 */
const migrateThemeToHeaderColor = config => {
  // Only migrate if theme exists at root level and package is not map (map already uses headerColor)
  if (config.theme && config.type !== 'map') {
    // Ensure general object exists
    config.general = config.general || {}

    // Move theme to general.headerColor if it doesn't already exist
    if (!config.general.headerColor) {
      config.general.headerColor = config.theme
    }

    // Remove old theme property from root
    delete config.theme
  }

  // Handle dashboard visualizations recursively
  if (config.type === 'dashboard') {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      migrateThemeToHeaderColor(visualization)
    })
  }
}

const update_4_25_11 = config => {
  const ver = '4.25.11'
  const newConfig = cloneConfig(config)
  migrateThemeToHeaderColor(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_11
