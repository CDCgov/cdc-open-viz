import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

/**
 * Migrates shared filters to use explicit 'required' property.
 * 
 * Prior to 4.26.2, the 'showDropdown' property controlled both:
 * 1. Whether the filter UI was visible
 * 2. Whether a selection was required before showing visualizations
 * 
 * In 4.26.2, these concerns are separated:
 * - showDropdown: controls UI visibility
 * - required: controls whether selection is mandatory
 * 
 * This migration sets 'required' based on the old 'showDropdown' behavior
 * for backward compatibility.
 */
const migrateFilterRequired = config => {
  if (config.type === 'dashboard') {
    if (config.dashboard?.sharedFilters) {
      config.dashboard.sharedFilters.forEach(filter => {
        // Only migrate if 'required' is not already set
        if (filter.required === undefined) {
          // Old behavior: showDropdown=true meant selection was required
          // New behavior: make this explicit with the 'required' property
          // Default to false (optional) if showDropdown is undefined
          filter.required = filter.showDropdown === true
        }
      })
    }
  }
}

const update_4_26_2 = config => {
  const ver = '4.26.2'
  const newConfig = cloneConfig(config)
  migrateFilterRequired(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_2
