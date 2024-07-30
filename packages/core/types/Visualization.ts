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

// This was originally created as a catchall for the different types of visualizations.
// Currently it includes properties that ares specific to one Visualization type.
// We should avoid adding any new property to this type unless it is used by all visualizations.
// We should refactor it also to remove properties that are not used by all visualizations.
// See AnyVisualization type below...
type DeprecatedVisualizationType = {
  columns: Record<string, Partial<Column>>
  confidenceKeys: ConfidenceInterval
  dataFileName: string
  dataFileSourceType: string
  dataFormat: any
  datasets: Record<string, any>
  filters: VizFilter[]
  general: General
  legend: Legend
  multiDashboards?: any[]
  newViz: boolean
  openModal: boolean
  orientation: 'vertical' | 'horizontal'
  originalFormattedData: any
  runtime?: Runtime
  series: Series
  table: Table
  theme: string
  title: string
  type: 'dashboard' | 'chart' | 'footnotes' | 'map' | 'data-bite' | 'waffle-chart' | 'markup-include' | 'filtered-text' | 'table' | 'navigation'
  usesSharedFilter: any
  visualizationSubType: string
  visualizationType: string
  xAxis: Axis
  preliminaryData: { type: 'effect' | 'suppression'; value: string }[]
}

type StatefulProperties = {
  editing: boolean
  newViz: boolean
}

export type CommonVisualizationProperties = Partial<StatefulProperties> & {
  showEditorPanel?: boolean
  uid?: string // this is the actual key of the visualization object
  visualizationType?: string
  filterBehavior: FilterBehavior
} & Partial<ConfigureData>

export type Visualization = DeprecatedVisualizationType & CommonVisualizationProperties

// This type is used as a catchall for the different types of visualizations.
// We should create a specific type for each visualization type and add it to this list.
// We will remove Visualization from this list once we have all union types listed.
// All of the New types will extend CommonVisualizationProperties.
export type AnyVisualization = Visualization | DashboardFilters
