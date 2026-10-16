import cloneConfig from '../cloneConfig'
import { addIdsToVisFilters } from './4.24.9'
import { repairDashboardFilters } from './dashboardFilterRepairs'

export const defineFilterStyles = config => {
  if (!config.filters) return

  config.filters = config.filters.map(filter => ({
    ...filter,
    filterStyle: filter.filterStyle || 'dropdown'
  }))
}

const update_4_24_10_1 = config => {
  const newConfig = cloneConfig(config)
  repairDashboardFilters(newConfig, true)
  addIdsToVisFilters(newConfig)
  defineFilterStyles(newConfig)
  newConfig.version = '4.24.10-1'
  return newConfig
}

export default update_4_24_10_1
