import { Axis } from '@cdc/core/types/Axis'
import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { Table } from '@cdc/core/types/Table'
import { Region } from '@cdc/core/types/Region'
import { BoxPlot } from '../../../types/BoxPlot'
import { General } from '../../../types/General'
import { Column } from '../../../types/Column'
import { Legend } from '@cdc/core/types/Legend'
import { PreliminaryDataItem } from '@cdc/chart/src/components/LineChart/LineChartProps'

export type TableConfig = {
  type?: string
  table: Table
  xAxis?: Axis
  yAxis?: Axis
  boxplot?: BoxPlot
  visualizationType: string
  general?: General
  columns?: Record<string, Column>
  legend?: Legend
  series?: Series
  regions?: Region[]
  runtimeSeriesLabels?: Object
  dataFormat?: Object
  runtime?: Runtime
  data: Object[]
  fontSize: 'small' | 'medium' | 'large'
  preliminaryData: PreliminaryDataItem[]
}
