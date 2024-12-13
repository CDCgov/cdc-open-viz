import { getQueryParam } from '@cdc/core/helpers/queryStringUtils'
import { Visualization } from '@cdc/core/types/Visualization'

export const shouldLoadAllFilters = (config): boolean => {
  const autoLoad = Boolean(getQueryParam('cove-auto-load'))
  const activeConfig = config.multiDashboards ? config.multiDashboards[config.activeDashboard] : config
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
  if (autoLoad || isAutoLoadTab) {
    const rowDataSetKeys = activeConfig.rows.map(row => row.dataKey).filter(Boolean)
    const dataKeys = Object.values(activeConfig.visualizations)
      .map((visualization: Visualization) => visualization.dataKey)
      .filter(Boolean)
      .concat(rowDataSetKeys)
    const missingData = dataKeys.find(dataset => !config.datasets[dataset].data?.length)
    return Boolean(missingData)
  }
  return false
}
