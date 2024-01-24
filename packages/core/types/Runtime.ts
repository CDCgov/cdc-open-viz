import { Axis } from './Axis'

export type ForecastingSeriesKey = {
  stages: {
    key: string
    color: string
  }[]
}

export type BarSeriesKey = {
  key: string
  color: string
}

export type Runtime = {
  barSeriesKeys?: BarSeriesKey[]
  forecastingSeriesKeys?: ForecastingSeriesKey[]
  originalXAxis: {
    dataKey: string
    name: string
    axis: string
  }
  xAxis: Axis
  yAxis: Axis
  seriesKeys: any[]
  seriesLabels: string[]
  seriesLabelsAll: string[]
  editorErrorMessage: string
}
