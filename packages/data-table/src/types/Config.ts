import { Column } from '@cdc/core/types/Column'
import { DataDescription } from '@cdc/core/types/DataDescription'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { General } from '@cdc/core/types/General'
import { Table } from '@cdc/core/types/Table'
import { Version } from '@cdc/core/types/Version'
import { VizFilter } from '@cdc/core/types/VizFilter'

export type Config = {
  columns?: Record<string, Column>
  data?: Object[]
  dataDescription: Partial<DataDescription>
  dataFormat?: DataFormat
  dataUrl?: string
  filters?: VizFilter[]
  filterBehavior?: FilterBehavior
  filterIntro?: string
  general?: General
  table: Table
  type: 'table'
  version: Version
  visualizationType: 'Table'
}

type DataFormat = {
  abbreviated: boolean
  commas: boolean
  prefix: string
  roundTo: number
  suffix: string
}
