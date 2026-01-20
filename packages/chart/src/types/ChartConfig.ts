import { DataVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Axis } from '@cdc/core/types/Axis'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'

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
  legend?: any
  orientation?: any
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
  xAxis?: any
  yAxis?: any
  hideXAxisLabel?: boolean
  hideYAxisLabel?: boolean
  xScale?: Function
  yScale?: Function
  regions?: any[]
  // Add optional properties for backwards compatibility and type safety
  heights?: {
    vertical?: number
    horizontal?: number
    mobileVertical?: number
    [key: string]: number | undefined
  }
  exclusions?: {
    active?: boolean
    keys?: string[]
    [key: string]: any
  }
  /** Highlighted bar values (available on Bar charts) */
  highlightedBarValues?: { value: any; color: string; borderWidth: number; legendLabel: string }[]
}

export interface BarChartConfig extends ChartConfigBase {
  visualizationType: 'Bar'
  orientation: 'horizontal' | 'vertical'
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
  xAxis: Axis & {
    type: 'categorical' | 'date' | 'date-time'
  }
  yAxis: Axis & {
    type: 'linear' | 'logarithmic'
  }
  legend: ChartConfigBase['legend'] & {
    hide?: boolean
    position?: 'top' | 'bottom' | 'left' | 'right'
  }
}

export interface LineChartConfig extends ChartConfigBase {
  visualizationType: 'Line'
  orientation: 'vertical'
  allowLineToBarGraph?: boolean
  convertLineToBarGraph?: boolean
  isolatedDotsSameSize?: boolean
  lineDatapointColor?: 'Same as Line' | 'Lighter than Line'
  lineDatapointStyle?: 'hidden' | 'always show' | 'hover'
  showLineSeriesLabels?: boolean
  showAreaUnderLine?: boolean
  xAxis: Axis & {
    type: 'date' | 'date-time' | 'categorical'
  }
  yAxis: Axis & {
    type: 'linear' | 'logarithmic'
  }
  legend: ChartConfigBase['legend'] & {
    hide?: boolean
    position?: 'top' | 'bottom' | 'left' | 'right'
  }
}

export interface PieChartConfig extends ChartConfigBase {
  visualizationType: 'Pie'
  pieType?: string
  showPiePercent?: boolean
  xAxis?: Axis
  yAxis?: Axis
  legend: ChartConfigBase['legend'] & {
    hide?: boolean
    position?: 'top' | 'bottom' | 'left' | 'right'
    behavior?: 'highlight' | string
  }
}

export interface BoxPlotChartConfig extends ChartConfigBase {
  visualizationType: 'Box Plot'
  orientation: 'horizontal' | 'vertical'
  boxplot: any
  confidenceKeys: any
  xAxis: Axis & {
    type: 'categorical' | 'linear'
  }
  yAxis: Axis & {
    type: 'categorical' | 'linear'
  }
}

export interface ScatterPlotChartConfig extends ChartConfigBase {
  visualizationType: 'Scatter Plot'
  orientation: 'vertical'
  xAxis: Axis & {
    type: 'linear' | 'date' | 'date-time'
  }
  yAxis: Axis & {
    type: 'linear' | 'logarithmic'
  }
}

export interface AreaChartConfig extends ChartConfigBase {
  visualizationType: 'Area Chart'
  orientation: 'vertical'
  showAreaUnderLine?: boolean
  xAxis: Axis & {
    type: 'date' | 'date-time' | 'categorical'
  }
  yAxis: Axis & {
    type: 'linear' | 'logarithmic'
  }
}

export interface PairedBarChartConfig extends ChartConfigBase {
  visualizationType: 'Paired Bar'
  orientation: 'horizontal'
  xAxis: Axis & {
    type: 'linear'
  }
  yAxis: Axis & {
    type: 'categorical'
  }
}

export interface DeviationBarChartConfig extends ChartConfigBase {
  visualizationType: 'Deviation Bar'
  orientation: 'horizontal' | 'vertical'
  xAxis: Axis
  yAxis: Axis
}

export interface SparkLineChartConfig extends ChartConfigBase {
  visualizationType: 'Spark Line'
  orientation: 'vertical'
  xAxis: Axis & {
    type: 'date' | 'categorical'
  }
  yAxis: Axis & {
    type: 'linear'
  }
  legend?: ChartConfigBase['legend']
}

export interface ComboChartConfig extends ChartConfigBase {
  visualizationType: 'Combo'
  orientation: 'vertical'
  stackedAreaChartLineType?: string
  xAxis: Axis & {
    type: 'date' | 'date-time' | 'categorical'
  }
  yAxis: Axis & {
    type: 'linear' | 'logarithmic'
  }
}

export interface ForecastingChartConfig extends ChartConfigBase {
  visualizationType: 'Forecasting'
  orientation: 'vertical'
  xAxis: Axis & {
    type: 'date' | 'date-time'
  }
  yAxis: Axis & {
    type: 'linear'
  }
}

export interface BumpChartConfig extends ChartConfigBase {
  visualizationType: 'Bump Chart'
  orientation: 'vertical'
  xAxis: Axis & {
    type: 'date' | 'date-time' | 'categorical'
  }
  yAxis: Axis & {
    type: 'linear'
  }
}

export interface WarmingStripesChartConfig extends ChartConfigBase {
  visualizationType: 'Warming Stripes'
  warmingStripesIntervals?: number
  xAxis?: Axis
  yAxis?: Axis
  orientation?: never
  legend?: ChartConfigBase['legend']
}

export type ForestPlotChartConfig = {
  visualizationType: 'Forest Plot'
  orientation: 'horizontal'
  forestPlot: any
  xAxis: Axis & {
    type: 'linear'
  }
  yAxis: Axis & {
    type: 'categorical'
  }
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
