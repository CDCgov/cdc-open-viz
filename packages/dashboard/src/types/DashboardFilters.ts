import { CommonVisualizationProperties } from '@cdc/core/types/Visualization'

export type DashboardFilters = {
  sharedFilterIndexes: number[]
  applyFiltersButtonText: string
  autoLoad?: boolean
  type: 'dashboardFilters'
} & CommonVisualizationProperties
