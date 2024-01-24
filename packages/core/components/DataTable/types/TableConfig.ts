import { Axis } from '@cdc/core/types/Axis'
import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { Table } from '@cdc/core/types/Table'

export type TableConfig = {
  type?: string
  table: Table
  xAxis?: Axis
  yAxis?: Axis
  boxplot?: {
    tableData: Object[]
    labels: {
      mean: string
      maximum: string
      minimum: string
      iqr: string
      median: string
      q1: string
      q3: string
      outliers: string
      values: string
      total: string
      lowerBounds: string
      upperBounds: string
    }
    plots: []
    categories: string[]
  }
  visualizationType?: string
  general?: {
    geoType: string
    type: string
    showDownloadButton: boolean
    allowMapZoom?: boolean
  }
  columns?: {
    geo: {
      name: string
    }
  }
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
