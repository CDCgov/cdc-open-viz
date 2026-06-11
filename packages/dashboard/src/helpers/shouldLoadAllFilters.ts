import { getQueryParam } from '@cdc/core/helpers/queryStringUtils'
import { Visualization } from '@cdc/core/types/Visualization'
import { isEmptyInitialFileNameFilter, isEmptyInitialFileNameTarget } from './reloadURLHelpers'

export const shouldLoadAllFilters = (config, isEditorPanel): boolean => {
  const autoLoad = Boolean(getQueryParam('cove-auto-load'))
  const activeConfig = config.multiDashboards ? config.multiDashboards[config.activeDashboard] : config
  const sharedFilters = activeConfig.dashboard.sharedFilters || []
  const hasFilterByFileNameFunctionality = activeConfig.dashboard.sharedFilters?.some(
    filter => filter.filterBy === 'File Name' && !isEmptyInitialFileNameFilter(filter)
  )
  const hasEmptyInitialFileNameFilter = sharedFilters.some(isEmptyInitialFileNameFilter)
  const isAutoLoadTab = Object.values(activeConfig.visualizations).reduce((acc, viz: Visualization) => {
    if (acc === false) return acc
    if (viz.visualizationType === 'dashboardFilters') {
      if (viz.filterBehavior === 'Apply Button') return false
      if (viz.autoLoad) {
        return true
      }
    }
    return acc
  }, undefined)
  const rowDataSetKeys = activeConfig.rows.map(row => row.dataKey).filter(Boolean)
  const dataKeys = Object.values(activeConfig.visualizations)
    .map((visualization: Visualization) => visualization.dataKey)
    .filter(Boolean)
    .concat(rowDataSetKeys)
  const missingData = dataKeys.find(dataset => !config.datasets[dataset]?.data?.length)

  if (autoLoad || isAutoLoadTab || hasFilterByFileNameFunctionality || isEditorPanel) {
    return Boolean(missingData)
  }

  if (hasEmptyInitialFileNameFilter) {
    const missingNonEmptyTargetData = dataKeys.find(
      dataset => !config.datasets[dataset]?.data?.length && !isEmptyInitialFileNameTarget(sharedFilters, dataset)
    )
    if (missingNonEmptyTargetData) return true
  }

  return false
}
