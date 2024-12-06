import { getQueryParam } from '@cdc/core/helpers/queryStringUtils'
import { Visualization } from '@cdc/core/types/Visualization'

export const shouldLoadAllFilters = (config): boolean => {
  const autoLoad = Boolean(getQueryParam('cove-auto-load'))
  if (autoLoad) {
    const activeConfig = config.multiDashboards ? config.multiDashboards[config.activeDashboard] : config
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
