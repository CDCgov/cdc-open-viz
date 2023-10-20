import { Axis } from '@cdc/core/types/Axis'
import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'

export type TableConfig = {
  type?: string
  table: {
    showVertical: boolean
    indexLabel: string
    limitHeight: boolean
    height: string | number
    caption: string
    download: boolean
  }
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
  }
  columns?: {
    geo: {
      name: string
    }
  }
  legend?: {
    specialClasses: { key: string; label: string; value: string }[]
  }
  series: Series
  regions?: { label: string; from: string; to: string }[]
  runtimeSeriesLabels?: Object
  dataFormat?: Object
  runtime: Runtime
  data: Object[]
}
