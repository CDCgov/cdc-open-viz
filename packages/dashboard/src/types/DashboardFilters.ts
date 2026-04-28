import { CommonVisualizationProperties } from '@cdc/core/types/Visualization'

export type DashboardFilters = {
  sharedFilterIndexes: number[]
  applyFiltersButtonText: string
  autoLoad?: boolean
  showClearButton?: boolean
  visual?: {
    grayBackground?: boolean
  }
  type: 'dashboardFilters'
} & CommonVisualizationProperties
