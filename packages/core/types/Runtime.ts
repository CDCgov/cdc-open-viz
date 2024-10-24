import { Axis } from './Axis'

export type ForecastingSeriesKey = {
  stages: {
    key: string
    color: string
  }[]
}

export type Runtime = {
  barSeriesKeys?: string[]
  forecastingSeriesKeys?: ForecastingSeriesKey[]
  originalXAxis: {
    dataKey: string
    name: string
    axis: string
  }
  xAxis: Axis
  yAxis: Axis
  seriesKeys: any[]
  seriesLabels: Record<string, any>
  seriesLabelsAll: string[]
  editorErrorMessage: string
  lineSeriesKeys?: string[]
  horizontal: boolean
  uniqueId: number | string
}
