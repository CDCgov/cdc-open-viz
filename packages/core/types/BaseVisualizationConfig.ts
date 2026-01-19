import { VizFilter } from './VizFilter'
import { FilterBehavior } from './FilterBehavior'
import Footnotes from './Footnotes'
import { Version } from './Version'

export type VisualizationType =
  | 'chart'
  | 'map'
  | 'data-bite'
  | 'waffle-chart'
  | 'markup-include'
  | 'filtered-text'
  | 'table'
  | 'dashboardFilters'
  | 'navigation'

/**
 * Level 1: Absolute minimum properties for all visualizations.
 * Use this for visualizations that don't require data handling (e.g., markup-include, data-bite).
 */
export interface BaseVisualizationConfig {
  uid?: string | number
  type: VisualizationType
  editing?: boolean
  newViz?: boolean
  showEditorPanel?: boolean
}

/**
 * Level 2: Data-bearing visualizations.
 * Use this for visualizations that handle data, filters, and footnotes (e.g., chart, map, table).
 */
export interface DataVisualizationConfig extends BaseVisualizationConfig {
  data?: Object[]
  dataUrl?: string
  filters?: VizFilter[]
  filterBehavior?: FilterBehavior
  footnotes?: Footnotes
  version?: Version
}
