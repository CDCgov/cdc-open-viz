import { Axis } from '../../../types/Axis'
import { Runtime } from '../../../types/Runtime'
import { Region } from '../../../types/Region'
import { BoxPlot } from '../../../types/BoxPlot'
import { Visualization } from '../../../types/Visualization'

export type TableConfig = Visualization & {
  boxplot?: BoxPlot
  fontSize: 'small' | 'medium' | 'large'
  regions?: Region[]
  runtime?: Runtime
  runtimeSeriesLabels?: Object
  xAxis?: Axis
  yAxis?: Axis
}
