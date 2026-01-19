import { Legend } from './Legend'
import { Axis } from './Axis'
import { Column } from './Column'
import { Series } from './Series'
import { Table } from './Table'
import { ConfidenceInterval } from './ConfidenceInterval'
import { ConfigureData } from './ConfigureData'
import { VizFilter } from './VizFilter'
import { FilterBehavior } from './FilterBehavior'
import { General } from './General'
import { Runtime } from './Runtime'
import { DashboardFilters } from '@cdc/dashboard/src/types/DashboardFilters'
import Footnotes from './Footnotes'

// Re-export the new base interfaces for convenience
export { BaseVisualizationConfig, DataVisualizationConfig, VisualizationType } from './BaseVisualizationConfig'

/**
 * @deprecated This type contains properties specific to individual visualization types.
 * Use the new inheritance pattern instead:
 * - For non-data visualizations: extend `BaseVisualizationConfig`
 * - For data-bearing visualizations: extend `DataVisualizationConfig`
 * See `BaseVisualizationConfig.ts` for the new base interfaces.
 */
type DeprecatedVisualizationType = {
  columns: Record<string, Partial<Column>>
  confidenceKeys: ConfidenceInterval
  dataFileName?: string
  dataFileSourceType?: string
  dataFormat: any
  datasets?: Record<string, any>
  filters: VizFilter[]
  general: General
  legend: Legend
  newViz: boolean
  isResponsiveTicks: boolean
  openModal?: boolean
  orientation: 'vertical' | 'horizontal'
  originalFormattedData?: any
  runtime?: Runtime
  series: Series
  table: Table
  theme: string
  title: string
  titleStyle: 'legacy' | 'large' | 'small'
  type: 'chart' | 'map' | 'data-bite' | 'waffle-chart' | 'markup-include' | 'filtered-text' | 'table' | 'navigation'
  usesSharedFilter?: any
  visualizationSubType: string
  visualizationType: string
  xAxis: Axis
  preliminaryData: { type: 'effect' | 'suppression'; value: string }[]
}

type StatefulProperties = {
  editing: boolean
  newViz: boolean
}

/**
 * @deprecated Use `BaseVisualizationConfig` or `DataVisualizationConfig` instead.
 * This type will be removed in a future version.
 */
export type CommonVisualizationProperties = Partial<StatefulProperties> & {
  showEditorPanel?: boolean
  uid?: string | number // this is the actual key of the visualization object
  visualizationType?: string
  filterBehavior: FilterBehavior
  footnotes?: Footnotes
} & Partial<ConfigureData>

/**
 * @deprecated This type combines properties from all visualization types.
 * Use package-specific config interfaces that extend `BaseVisualizationConfig`
 * or `DataVisualizationConfig` instead. This type will be removed in a future version.
 */
export type Visualization = DeprecatedVisualizationType & CommonVisualizationProperties

// This type is used as a catchall for the different types of visualizations.
// We should create a specific type for each visualization type and add it to this list.
// We will remove Visualization from this list once we have all union types listed.
// All of the New types will extend CommonVisualizationProperties.
export type AnyVisualization = Visualization | DashboardFilters
