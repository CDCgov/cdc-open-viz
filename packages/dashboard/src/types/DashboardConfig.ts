import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { DataSet } from './DataSet'
import { ConfigRow } from './ConfigRow'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { Table } from '@cdc/core/types/Table'
import { Dashboard } from './Dashboard'

export type DashboardConfig = DataSet & {
  dashboard: Dashboard
  confidenceKeys: Record<string, any>
  visualizations: Record<string, AnyVisualization>
  series: Series
  datasets: Record<string, DataSet>
  dataFileName: string
  table: Table
  rows: ConfigRow[]
  runtime: Runtime
  downloadImageButton: boolean
  downloadPdfButton: boolean
}
