import _ from 'lodash'
import { MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'

const patchSingleStateZoom = newConfig => {
  // Map zooming is a default feature created for world maps
  // Since we're turning it on for single state maps lets default it off for opting in.
  if (newConfig.type === 'map' && newConfig.general.geoType === 'single-state') {
    newConfig.general.allowMapZoom = false
  }
}

const patchDashboardFilterActiveStatus = newConfig => {
  if (!newConfig.dashboard) return newConfig
  const dashboardConfig = newConfig as MultiDashboardConfig

  // previous filters need an active status
  const newSharedFilters = (dashboardConfig.dashboard.sharedFilters || []).map(sf => {
    if (!sf.active && sf.values) {
      sf.active = sf?.values?.[0] || 'Select'
    }
    return sf
  })

  newConfig.dashboard.sharedFilters = newSharedFilters

  return newConfig
}

const update_4_24_9 = config => {
  const ver = '4.24.9'
  const newConfig = _.cloneDeep(config)
  patchSingleStateZoom(newConfig)
  patchDashboardFilterActiveStatus(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_9
