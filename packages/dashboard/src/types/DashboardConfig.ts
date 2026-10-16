import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { DataSet } from '@cdc/core/types/DataSet'
import { ConfigRow } from './ConfigRow'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { Table } from '@cdc/core/types/Table'
import { Dashboard } from './Dashboard'
import { Version } from '@cdc/core/types/Version'

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
  version: Version
}
