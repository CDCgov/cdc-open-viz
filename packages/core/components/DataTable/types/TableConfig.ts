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
import { FilterBehavior } from '../../../types/FilterBehavior'

export type TableConfig = {
  boxplot?: BoxPlot
  columns?: Record<string, Column>
  data: Object[]
  dataFormat?: Object
  filterBehavior: FilterBehavior
  filters: Object[]
  fontSize: 'small' | 'medium' | 'large'
  general?: General
  legend?: Legend
  regions?: Region[]
  runtime?: Runtime
  runtimeSeriesLabels?: Object
  series?: Series
  table: Table
  type?: string
  visualizationType: string
  xAxis?: Axis
  yAxis?: Axis
  preliminaryData: PreliminaryDataItem[]
}
