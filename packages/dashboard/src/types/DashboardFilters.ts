import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import Footnotes from '@cdc/core/types/Footnotes'
import { ConfigureData } from '@cdc/core/types/ConfigureData'

export type DashboardFilters = BaseVisualizationConfig & {
  sharedFilterIndexes: number[]
  applyFiltersButtonText: string
  autoLoad?: boolean
  showClearButton?: boolean
  type: 'dashboardFilters'
  // Additional common properties for backwards compatibility
  editing?: boolean
  newViz?: boolean
  visualizationType?: string
  filterBehavior?: FilterBehavior
  footnotes?: Footnotes
} & Partial<ConfigureData>
