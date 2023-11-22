import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
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
  confidenceKeys: Record<string, any>
  visualizations: {
    [vizKey: string]: Visualization
  }
  series: Series
  datasets: Record<string, DataSet>
  dataFileName: string
  table: any
  rows: any[]
  filterBehavior: string
  runtime: Runtime
}
