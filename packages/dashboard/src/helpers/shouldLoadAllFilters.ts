import { getQueryParam } from '@cdc/core/helpers/queryStringUtils'
import { Visualization } from '@cdc/core/types/Visualization'

export const shouldLoadAllFilters = (config): boolean => {
  const autoLoad = Boolean(getQueryParam('cove-auto-load'))
  if (autoLoad) {
    const currentDashboardVisualizations = config.multiDashboards
      ? config.multiDashboards[config.activeDashboard].visualizations
      : config.visualizations
    const dataKeys = Object.values(currentDashboardVisualizations)
      .map((visualization: Visualization) => visualization.dataKey)
      .filter(Boolean)
    const missingData = dataKeys.find(dataset => !config.datasets[dataset].data?.length)
    return Boolean(missingData)
  }
  return false
}
