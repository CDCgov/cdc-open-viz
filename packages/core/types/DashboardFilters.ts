import type { CommonVisualizationProperties } from './Visualization'

export type DashboardFilters = {
  sharedFilterIndexes: number[]
  applyFiltersButtonText: string
  filterIntro?: string
  autoLoad?: boolean
  showClearButton?: boolean
  visual?: {
    grayBackground?: boolean
  }
  type: 'dashboardFilters'
} & CommonVisualizationProperties
