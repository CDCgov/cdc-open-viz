import { DataVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Axis } from '@cdc/core/types/Axis'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { DataRow } from '@cdc/core/types/DataRow'
import { type ForestPlotConfigSettings } from './ForestPlot'
import { type Column } from '@cdc/core/types/Column'
import { type Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { Table } from '@cdc/core/types/Table'
import { BoxPlot } from '@cdc/core/types/BoxPlot'
import { General as CoreGeneral } from '@cdc/core/types/General'
import { PaletteConfig } from '@cdc/core/types/Palette'

// --- ChartConfigBase and all chart config interfaces ---

export interface ChartConfigBase extends DataVisualizationConfig, MarkupConfig {
  type: 'chart'
  annotations: any[]
  animate: boolean
  general: any
  chartMessage?: { noData?: string }
  color: string
  columns: any
  dataDescription: Partial<any>
  dataFormat: any
  dataKey: string
  description: string
  footnotes: any
  formattedData: any[] & { urlFiltered: boolean }
  introText: string
  labels: boolean
  legend: any
  orientation: any
  palette: string
  preliminaryData: any[]
  runtime: any
  runtimeDataUrl: string
  series: any
  showSidebar: boolean
  showTitle: boolean
  smallMultiples?: any
  sortData: 'ascending' | 'descending'
  suppressedData?: { label: string; icon: string; value: string }[]
  superTitle: string
  theme: string
  table: any
  tipRounding: string
  title: string
  titleStyle?: 'legacy' | 'large' | 'small'
  tooltips: {
    singleSeries: boolean
    opacity: number
    dateDisplayFormat: string
  }
  topAxis?: { hasLine: boolean }
  twoColor?: { palette: string }
  visual: any
  visualizationSubType?: string
  xAxis: any
  yAxis: any
  hideXAxisLabel?: boolean
  hideYAxisLabel?: boolean
  xScale?: Function
  yScale?: Function
  regions?: any[]
}

export interface BarChartConfig extends ChartConfigBase {
  visualizationType: 'Bar'
  barHasBorder: 'true' | 'false'
  barHeight: number
  barSpace: number
  barStyle: 'lollipop' | 'rounded' | 'flat'
  barThickness: number
  highlightedBarValues?: { value: any; color: string; borderWidth: number; legendLabel: string }[]
  isLollipopChart?: boolean
  lollipopColorStyle?: 'regular' | 'two-tone'
  lollipopShape?: string
  lollipopSize?: 'small' | 'medium' | 'large'
}

export interface LineChartConfig extends ChartConfigBase {
  visualizationType: 'Line'
  allowLineToBarGraph?: boolean
  convertLineToBarGraph?: boolean
  isolatedDotsSameSize?: boolean
  lineDatapointColor?: 'Same as Line' | 'Lighter than Line'
  lineDatapointStyle?: 'hidden' | 'always show' | 'hover'
  showLineSeriesLabels?: boolean
  showAreaUnderLine?: boolean
}

export interface PieChartConfig extends ChartConfigBase {
  visualizationType: 'Pie'
  pieType?: string
  showPiePercent?: boolean
}

export interface BoxPlotChartConfig extends ChartConfigBase {
  visualizationType: 'Box Plot'
  boxplot: any
  confidenceKeys: any
}

export interface ScatterPlotChartConfig extends ChartConfigBase {
  visualizationType: 'Scatter Plot'
}

export interface AreaChartConfig extends ChartConfigBase {
  visualizationType: 'Area Chart'
  showAreaUnderLine?: boolean
}

export interface PairedBarChartConfig extends ChartConfigBase {
  visualizationType: 'Paired Bar'
}

export interface DeviationBarChartConfig extends ChartConfigBase {
  visualizationType: 'Deviation Bar'
}

export interface SparkLineChartConfig extends ChartConfigBase {
  visualizationType: 'Spark Line'
}

export interface ComboChartConfig extends ChartConfigBase {
  visualizationType: 'Combo'
  stackedAreaChartLineType?: string
}

export interface ForecastingChartConfig extends ChartConfigBase {
  visualizationType: 'Forecasting'
}

export interface BumpChartConfig extends ChartConfigBase {
  visualizationType: 'Bump Chart'
}

export interface WarmingStripesChartConfig extends ChartConfigBase {
  visualizationType: 'Warming Stripes'
  warmingStripesIntervals?: number
}

export type ForestPlotChartConfig = {
  visualizationType: 'Forest Plot'
  forestPlot: any
} & ChartConfigBase &
  MarkupConfig

export type SankeyChartConfig = {
  visualizationType: 'Sankey'
  enableTooltips: boolean
  data: [
    {
      tooltips: any[]
      tooltipData: any[]
      tableData: any[]
      links: {
        source: any
        target: any
        value: number
      }[]
      storyNodeText: any[]
    }
  ]
} & ChartConfigBase &
  MarkupConfig

export type ChartConfig =
  | BarChartConfig
  | LineChartConfig
  | PieChartConfig
  | BoxPlotChartConfig
  | ScatterPlotChartConfig
  | AreaChartConfig
  | PairedBarChartConfig
  | DeviationBarChartConfig
  | SparkLineChartConfig
  | ComboChartConfig
  | ForecastingChartConfig
  | BumpChartConfig
  | WarmingStripesChartConfig
  | ForestPlotChartConfig
  | SankeyChartConfig

// (Removed duplicate legacy ForestPlotConfig type)

// (Removed duplicate legacy LineChartConfig type)

type SankeyLink = {
  depth: number
  height: number
  id: string
  index: number
  layer: number
  sourceLinks: SankeyLink[]
  targetLinks: SankeyLink[]
  value: number
  x0: number
  x1: number
  y0: number
  y1: number
}

type StoryNode = {
  StoryNode: string
  segmentTextAfter: string
  segmentTextBefore: string
}

// (Removed duplicate legacy SankeyChartConfig type)

// (Removed duplicate legacy ChartConfig type)
