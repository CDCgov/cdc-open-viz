import { BaseVisualizationConfig } from '../../../types/BaseVisualizationConfig'
import { Axis } from '../../../types/Axis'
import { Runtime } from '../../../types/Runtime'
import { Region } from '../../../types/Region'
import { BoxPlot } from '../../../types/BoxPlot'
import { type PreliminaryDataItem } from '@cdc/chart/src/types/ChartConfig'

/**
 * Configuration interface for DataTable component used within visualizations.
 * Extends BaseVisualizationConfig with table-specific properties.
 */
export interface TableConfig extends BaseVisualizationConfig {
  // Table-specific properties
  boxplot?: BoxPlot
  regions?: Region[]
  runtime?: Runtime
  runtimeSeriesLabels?: Object
  xAxis?: Axis
  yAxis?: Axis
  preliminaryData: PreliminaryDataItem[]
  brush: { active: boolean }
}
