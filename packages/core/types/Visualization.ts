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
  general: any
  hide: any[]
  legend: Legend
  multiDashboards?: any[]
  newViz: boolean
  openModal: boolean
  originalFormattedData: any
  orientation: 'vertical' | 'horizontal'
  series: Series
  table: Table
  title: string
  type: BaseVisualizationType
  uid: string // this is the actual key of the visualization object
  usesSharedFilter: any
  visualizationType: string
  visualizationSubType: string
  xAxis: Axis
}
