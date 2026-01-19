import { VizFilter } from './VizFilter'
import { FilterBehavior } from './FilterBehavior'
import Footnotes from './Footnotes'
import { Version } from './Version'
import { DataRow } from './DataRow'
import { Series } from './Series'
import { ConfidenceInterval } from './ConfidenceInterval'
import { Runtime } from './Runtime'
import { DataDescription } from './DataDescription'

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
  | 'filter-dropdowns' // Legacy type for backwards compatibility

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
  visualizationType?: string
  /** Shared filter indexes for dashboard integration */
  sharedFilterIndexes?: number[]
  /** Auto-load filters behavior (dashboard integration) */
  autoLoad?: boolean
}

/**
 * Level 2: Data-bearing visualizations.
 * Use this for visualizations that handle data, filters, and footnotes (e.g., chart, map, table).
 *
 * Note: Many optional properties are included for backwards compatibility with existing
 * visualization configs. Specific visualization types (ChartConfig, MapConfig, etc.) define
 * which properties are required for their use cases.
 */
export interface DataVisualizationConfig extends BaseVisualizationConfig {
  data?: DataRow[]
  dataUrl?: string
  filters?: VizFilter[]
  filterBehavior?: FilterBehavior
  footnotes?: Footnotes
  version?: Version
  // Common properties used across visualization types for backwards compatibility
  // Note: These use 'any' for flexibility since specific config types define stricter types
  general?: any
  legend?: any
  table?: any
  series?: Partial<Series>
  confidenceKeys?: ConfidenceInterval
  runtime?: Partial<Runtime>
  theme?: string
  title?: string
  filterIntro?: string
  dataKey?: string
  dataDescription?: Partial<DataDescription>
  formattedData?: DataRow[] & { urlFiltered?: boolean }
  originalFormattedData?: DataRow[]
}
