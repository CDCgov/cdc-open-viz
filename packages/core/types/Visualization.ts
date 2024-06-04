import { Legend } from './Legend'
import { Axis } from './Axis'
import { Column } from './Column'
import { Series } from './Series'
import { Table } from './Table'
import { ConfidenceInterval } from './ConfidenceInterval'
import { BaseVisualizationType } from './BaseVisualizationType'
import { ConfigureData } from './ConfigureData'
import { VizFilter } from './VizFilter'
import { FilterBehavior } from './FilterBehavior'
import { General } from './General'
import { Runtime } from './Runtime'

export type Visualization = ConfigureData & {
  autoLoad: boolean
  columns: Record<string, Partial<Column>>
  confidenceKeys: ConfidenceInterval
  dataFileName: string
  dataFileSourceType: string
  dataFormat: any
  datasets: Record<string, any>
  editing: boolean
  filterBehavior: FilterBehavior
  filters: VizFilter[]
  general: General
  hide: any[]
  legend: Legend
  multiDashboards?: any[]
  newViz: boolean
  openModal: boolean
  orientation: 'vertical' | 'horizontal'
  originalFormattedData: any
  runtime?: Runtime
  series: Series
  showEditorPanel: boolean
  table: Table
  theme: string
  title: string
  type: BaseVisualizationType
  uid: string // this is the actual key of the visualization object
  usesSharedFilter: any
  visualizationSubType: string
  visualizationType: string
  xAxis: Axis
}
