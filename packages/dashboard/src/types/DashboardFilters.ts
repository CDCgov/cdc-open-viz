import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { CommonVisualizationProperties } from '@cdc/core/types/Visualization'

export type DashboardFilters = {
  sharedFilterIndexes: number[]
  filterBehavior: FilterBehavior
  autoLoad?: boolean
  type: 'dashboardFilters'
} & CommonVisualizationProperties
