import { type CommonVisualizationProperties } from './CommonVisualizationProperties'

export type DashboardFilters = {
  sharedFilterIndexes: number[]
  applyFiltersButtonText: string
  filterSectionTitle?: string
  filterIntro?: string
  autoLoad?: boolean
  showClearButton?: boolean
  visual?: {
    grayBackground?: boolean
  }
  type: 'dashboardFilters'
} & CommonVisualizationProperties
