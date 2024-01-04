import { Axis } from '@cdc/core/types/Axis'
import { type ForestPlotConfigSettings } from './ForestPlot'
import { type Column } from '@cdc/core/types/Column'
import { type Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { Table } from '@cdc/core/types/Table'

export type ChartColumns = Record<string, Column>

type Region = {
  from: string
  to: string
  label: string
  color: string
  background: string
  range: 'Custom' | string
}

type BoxPlot = {
  firstQuartilePercentage: number
  [key: string]: any
}

type DataFormat = {
  abbreviated: boolean
  bottomAbbreviated: boolean
  bottomCommas: boolean
  bottomPrefix: string
  bottomRoundTo: number
  bottomSuffix: string
  commas: boolean
  prefix: string
  rightCommas: boolean
  rightPrefix: string
  rightRoundTo: number
  rightSuffix: string
  roundTo: number
  suffix: string
}

type Exclusions = {
  keys: string[]
  active: boolean
  dateStart: string
  dateEnd: string
}

type Filter = {
  type: 'url'
  columnName: string
  showDropdown: boolean
  filterStyle: string
  label: string
  order: 'asc' | 'desc' | 'cust'
  values: string[]
}

type Legend = {
  additionalCategories: string[]
  // general legend onClick behavior
  behavior: 'highlight' | 'isolate' | string
  colorCode: string
  description: string
  // show or hide the legend
  hide: boolean
  highlightOnHover: boolean
  label: string
  lineMode: boolean
  position: string
  reverseLabelOrder: boolean
  singleRow: boolean
  type: string
  verticalSorted: boolean
}

type Visual = {
  border?: boolean
  borderColorTheme?: boolean
  accent?: boolean
  background?: boolean
  hideBackgroundColor?: boolean
  verticalHoverLine?: boolean
  horizontalHoverLine?: boolean
}

type AllChartsConfig = {
  animate: boolean
  general: {
    boxplot: BoxPlot
  }
  barHasBorder: 'true' | 'false'
  barHeight: number
  barSpace: number
  barStyle: string
  barThickness: number
  boxplot: BoxPlot
  chartMessage: { noData?: string }
  colorMatchLineSeriesLabels: boolean
  columns: ChartColumns
  confidenceKeys: Record<string, any>
  data: Object[]
  dataCutoff: number
  dataFormat: DataFormat
  dataKey: string
  description: string
  exclusions: Exclusions
  filters: Filter[]
  filterBehavior: FilterBehavior
  fontSize: 'small' | 'medium' | 'large'
  footnotes: string
  forestPlot: ForestPlotConfigSettings
  heights: {
    vertical: number
  }
  highlightedBarValues: { value: any; color: string; borderWidth: number; legendLabel: string }[]
  introText: string
  isLollipopChart: boolean
  isLegendValue: boolean
  isResponsiveTicks: boolean
  isPaletteReversed: boolean
  labels: boolean
  legend: Legend
  lineDatapointColor: 'Same as Line' | 'Lighter than Line'
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
  lollipopColorStyle: 'regular' | 'two-tone'
  lollipopShape: string
  lollipopSize: 'small' | 'medium' | 'large'
  newViz: Object
  orientation: 'vertical' | 'horizontal'
  palette: string
  roundingStyle: string
  runtime: Runtime
  series: Series
  showLineSeriesLabels: boolean
  showTitle: boolean
  stackedAreaChartLineType: string
  superTitle: string
  theme: string
  table: Table
  tipRounding: string
  title: string
  tooltips: {
    singleSeries: boolean
    opacity: number
  }
  topAxis: { hasLine: boolean }
  twoColor: { palette: string }
  type: string
  useLogScale: boolean
  visual: Visual
  visualizationType: 'Area Chart' | 'Bar' | 'Box Plot' | 'Deviation Bar' | 'Forest Plot' | 'Line' | 'Paired Bar' | 'Pie' | 'Scatter Plot' | 'Spark Line' | 'Combo' | 'Forecasting'
  visualizationSubType: string
  xAxis: Axis
  yAxis: Axis
  xScale: Function
  yScale: Function
  regions: Region[]
}

export type ForestPlotConfig = {
  visualizationType: 'Forest Plot'
  forestPlot: ForestPlotConfigSettings
} & AllChartsConfig

export type LineChartConfig = {
  visualizationType: 'Line'
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
} & AllChartsConfig

export type ChartConfig = LineChartConfig | ForestPlotConfig | AllChartsConfig
