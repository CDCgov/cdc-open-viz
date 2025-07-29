import { Axis } from './Axis'
import { ForecastingSeriesKey } from './ForecastingSeriesKey'
import { Series } from './Series'

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
