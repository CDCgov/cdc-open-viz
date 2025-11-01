import { type BaseVisualizationConfig } from '../../../types/BaseVisualizationConfig'
import { type Axis } from '../../../types/Axis'
import { type Runtime } from '../../../types/Runtime'
import { type Region } from '../../../types/Region'
import { type BoxPlot } from '../../../types/BoxPlot'
import { type Column } from '../../../types/Column'
import { type Legend } from '../../../types/Legend'
import { type Table } from '../../../types/Table'
import { type Series } from '../../../types/Series'
import { type General } from '../../../types/General'
import { type PreliminaryDataItem } from '@cdc/chart/src/types/ChartConfig'

/**
 * Configuration interface for DataTable component used within visualizations.
 * Extends BaseVisualizationConfig with table-specific properties and common visualization props.
 */
export interface TableConfig extends BaseVisualizationConfig {

  // Common visualization properties used by DataTable
  columns?: Record<string, Column>

  table?: Table
  legend?: Legend
  general?: General
  series?: Series[]
  dataFormat?: {
    showPiePercent?: boolean
  }

  // Table-specific properties
  boxplot?: BoxPlot
  regions?: Region[]
  runtime?: Runtime
  runtimeSeriesLabels?: Object
  xAxis?: Axis
  yAxis?: Axis
  preliminaryData?: PreliminaryDataItem[]
  brush?: { active: boolean }

  // Additional properties used by DataTable component
  visualizationSubType?: string
}
