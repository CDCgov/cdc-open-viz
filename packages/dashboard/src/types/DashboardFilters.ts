import { CommonVisualizationProperties } from '@cdc/core/types/Visualization'

export type DashboardFilters = {
  sharedFilterIndexes: number[]
  autoLoad?: boolean
  type: 'dashboardFilters'
} & CommonVisualizationProperties
