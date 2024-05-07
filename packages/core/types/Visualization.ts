import { Legend } from './Legend'
import { Axis } from './Axis'
import { Column } from './Column'
import { Series } from './Series'
import { Table } from './Table'
import { ConfidenceInterval } from './ConfidenceInterval'
import { BaseVisualizationType } from './BaseVisualizationType'
import { ConfigureData } from './ConfigureData'

export type Visualization = ConfigureData & {
  autoLoad: boolean
  columns: Record<string, Column>
  confidenceKeys: ConfidenceInterval
  dataFileName: string
  dataFileSourceType: string
  dataFormat: any
  datasets: Record<string, any>
  editing: boolean
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
