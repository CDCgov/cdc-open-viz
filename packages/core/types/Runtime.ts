import { Axis } from './Axis'
import { Series } from './Series'

export type ForecastingSeriesKey = {
  stages: {
    key: string
    color: string
  }[]
}

export type Runtime = {
  barSeriesKeys?: string[]
  areaSeriesKeys: object[]
  forecastingSeriesKeys?: ForecastingSeriesKey[]
  originalXAxis: {
    dataKey: string
    name: string
    axis: string
  }
  xAxis: Axis
  yAxis: Axis
  series: Series
  seriesKeys: string[]
  seriesLabels: Record<string, any>
  seriesLabelsAll: string[]
  editorErrorMessage: string
  lineSeriesKeys?: string[]
  horizontal: boolean
  uniqueId: number | string
}
