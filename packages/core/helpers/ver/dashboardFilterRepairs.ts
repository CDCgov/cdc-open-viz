import { AnyVisualization } from '../../types/Visualization'

const getSharedFilterIndexes = config => (config.dashboard?.sharedFilters || []).map((_filter, index) => index)

export const repairDashboardFilters = (config, createMissingVisualization = false) => {
  if (!config.dashboard) return

  const sharedFilterIndexes = getSharedFilterIndexes(config)
  const visualizations = config.visualizations || {}

  Object.values(visualizations).forEach((visualization: AnyVisualization) => {
    const isDashboardFilters =
      visualization.type === 'dashboardFilters' ||
      visualization.type === 'filter-dropdowns' ||
      visualization.visualizationType === 'dashboardFilters' ||
      visualization.visualizationType === 'filter-dropdowns'

    if (!isDashboardFilters) return

    visualization.type = 'dashboardFilters'
    visualization.visualizationType = 'dashboardFilters'
    if (!visualization.sharedFilterIndexes) {
      visualization.sharedFilterIndexes = [...sharedFilterIndexes]
      visualization.filterBehavior = config.filterBehavior || 'Filter Change'
    }
  })

  const hasDashboardFilters = Object.values(visualizations).some(
    (visualization: AnyVisualization) => visualization.type === 'dashboardFilters'
  )

  if (createMissingVisualization && sharedFilterIndexes.length && !hasDashboardFilters) {
    const key = 'legacySharedFilters'
    visualizations[key] = {
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes,
      filterBehavior: config.filterBehavior || 'Filter Change'
    }
    config.rows = [
      {
        columns: [{ width: 12, widget: key }]
      },
      ...(config.rows || [])
    ]
    config.dashboard.sharedFilters = config.dashboard.sharedFilters.map(sharedFilter => {
      if (sharedFilter.usedBy) {
        sharedFilter.usedBy = sharedFilter.usedBy.map(target => {
          if (!(parseInt(target) > -1)) return target
          return String(parseInt(target) + 1)
        })
      }
      return sharedFilter
    })
  }

  config.visualizations = visualizations
  if (hasDashboardFilters || (createMissingVisualization && sharedFilterIndexes.length)) {
    delete config.filterBehavior
  }
}
