import { Axis } from '../../../types/Axis'
import { Runtime } from '../../../types/Runtime'
import { Region } from '../../../types/Region'
import { BoxPlot } from '../../../types/BoxPlot'
import { type PreliminaryDataItem } from '../../../types/PreliminaryData'
import { DataVisualizationConfig } from '../../../types/BaseVisualizationConfig'

/**
 * Configuration for the DataTable component used to display tabular data within visualizations.
 * This is separate from the standalone DataTableConfig in the data-table package.
 */
export type TableConfig = DataVisualizationConfig & {
  boxplot?: BoxPlot
  regions?: Region[]
  runtime?: Runtime
  runtimeSeriesLabels?: Record<string, string>
  xAxis?: Axis
  yAxis?: Axis
  preliminaryData: PreliminaryDataItem[]
  brush: { active: boolean }
}
