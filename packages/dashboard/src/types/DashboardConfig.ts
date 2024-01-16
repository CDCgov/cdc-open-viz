import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { DataSet } from './DataSet'
import { Row } from './Row'
import { Visualization } from '@cdc/core/types/Visualization'
import { Table } from '@cdc/core/types/Table'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { Dashboard } from './Dashboard'

export type DashboardConfig = DataSet & {
  dashboard: Dashboard
  confidenceKeys: Record<string, any>
  visualizations: Record<string, Visualization>
  series: Series
  datasets: Record<string, DataSet>
  dataFileName: string
  table: Table
  rows: Row[]
  filterBehavior: FilterBehavior
  runtime: Runtime
}
