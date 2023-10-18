import { DataSet } from './DataSet'
import { SharedFilter } from './SharedFilter'
import { Visualization } from '@cdc/core/types/Visualization'

export type Config = DataSet & {
  dashboard: {
    sharedFilters: SharedFilter[]
    datasets: Record<string, DataSet>
    description: any
    title: any
    theme: any
    filters: any
  }
  visualizations: {
    [vizKey: string]: Visualization
  }
  datasets: Record<string, DataSet>
  dataFileName: string
  table: any
  rows: any[]
  data: any
  filterBehavior: string
}
