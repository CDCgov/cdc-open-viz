export type ForecastingSeriesKey = {
  dataKey: string
  axis: 'Left'
  tooltip: boolean
  type: 'Forecasting'
  confidenceIntervals: {
    high: string
    low: string
    showInTooltip: boolean
  }[]
  stageColumn: string
  stages: {
    key: string
    color: string
  }[]
}
