import { DataVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Column } from '@cdc/core/types/Column'
import { DataDescription } from '@cdc/core/types/DataDescription'
import { General } from '@cdc/core/types/General'
import { Table } from '@cdc/core/types/Table'
import { Version } from '@cdc/core/types/Version'

export interface DataTableConfig extends DataVisualizationConfig {
  type: 'table'
  columns?: Record<string, Column>
  dataDescription: Partial<DataDescription>
  dataFormat?: DataFormat
  filterIntro?: string
  general?: General
  table: Table
  version: Version
  visualizationType: 'Table'
}

type DataFormat = {
  abbreviated: boolean
  commas: boolean
  prefix: string
  preserveOriginalDecimals?: boolean
  roundTo: number
  suffix: string
}
