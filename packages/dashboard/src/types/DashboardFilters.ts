import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'

export interface DashboardFilters extends BaseVisualizationConfig {
  // Override base properties to be more specific
  type: 'dashboardFilters'

  // DashboardFilters specific properties
  sharedFilterIndexes: number[]
  applyFiltersButtonText: string
  autoLoad?: boolean
  hide?: boolean
}
