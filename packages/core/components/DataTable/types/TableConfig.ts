import { Axis } from '@cdc/core/types/Axis'
import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { Table } from '@cdc/core/types/Table'
import { BoxPlot } from '../../../types/BoxPlot'
import { General } from '../../../types/General'
import { Column } from '../../../types/Column'

export type TableConfig = {
  type?: string
  table: Table
  xAxis?: Axis
  yAxis?: Axis
  boxplot?: BoxPlot
  visualizationType?: string
  general?: General
  columns?: Record<string, Column>
  legend?: {
    specialClasses?: { key: string; label: string; value: string }[]
    hide?: boolean
  }
  series?: Series
  regions?: { label: string; from: string; to: string; fromType: 'Fixed' | 'Previous Days'; toType: 'Fixed' | 'Last Date' }[]
  runtimeSeriesLabels?: Object
  dataFormat?: Object
  runtime: Runtime
  data: Object[]
}
