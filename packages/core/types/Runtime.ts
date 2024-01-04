import { Axis } from './Axis'

export type Runtime = {
  originalXAxis: {
    dataKey: string
    name: string
    axis: string
  }
  xAxis: Axis
  seriesKeys: any[]
  editorErrorMessage: string
}
