import { Legend } from './Legend'
import { Axis } from './Axis'
import { Column } from './Column'
import { Series } from './Series'
import { Table } from './Table'
import { ConfidenceInterval } from './ConfidenceInterval'
import { BaseVisualizationType } from './BaseVisualizationType'

export type Visualization = {
  autoLoad: boolean
  columns: Record<string, Column>
  confidenceKeys: ConfidenceInterval
  data: any
  dataDescription: Object
  dataFileName: string
  dataFileSourceType: string
  dataFormat: any
  dataKey: string
  datasets: Record<string, any>
  editing: boolean
  formattedData?: Object[] & Record<string, Object>
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
  uid: string
  usesSharedFilter: any
  visualizationType: string
  visualizationSubType: string
  xAxis: Axis
}
