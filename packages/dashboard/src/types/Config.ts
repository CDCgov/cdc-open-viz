import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { DataSet } from './DataSet'
import { SharedFilter } from './SharedFilter'
import { Visualization } from '@cdc/core/types/Visualization'
import { Table } from '@cdc/core/types/Table'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'

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
  table: Table
  rows: any[]
  filterBehavior: FilterBehavior
  runtime: Runtime
  downloadImageButton: boolean
  downloadPdfButton: boolean
}
