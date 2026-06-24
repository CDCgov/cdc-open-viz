import { getQueryParam } from '@cdc/core/helpers/queryStringUtils'
import { Visualization } from '@cdc/core/types/Visualization'
import { getDatasetKeys, isEmptyInitialFileNameFilter, isEmptyInitialFileNameTarget } from './reloadURLHelpers'

export const shouldLoadAllFilters = (config, isEditorPanel): boolean => {
  const autoLoad = Boolean(getQueryParam('cove-auto-load'))
  const activeConfig = config.multiDashboards ? config.multiDashboards[config.activeDashboard] : config
  const rootDatasets = config.datasets || {}
  const activeDatasets = activeConfig.datasets || {}
  const datasets = Object.keys(rootDatasets).length ? rootDatasets : activeDatasets
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
  const dataKeys = getDatasetKeys({
    visualizations: activeConfig.visualizations || {},
    rows: activeConfig.rows || [],
    datasets
  })
  const missingLoadableData = dataKeys.find(
    dataset => !datasets[dataset]?.data?.length && !isEmptyInitialFileNameTarget(sharedFilters, dataset)
  )

  if (autoLoad || isAutoLoadTab || hasFilterByFileNameFunctionality || isEditorPanel || hasEmptyInitialFileNameFilter) {
    return Boolean(missingLoadableData)
  }

  return false
}
