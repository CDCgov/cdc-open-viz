import { Axis } from '@cdc/core/types/Axis'
import { type ForestPlotConfigSettings } from './ForestPlot'
import { type Column } from '@cdc/core/types/Column'
import { type Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { Table } from '@cdc/core/types/Table'
import { BoxPlot } from '@cdc/core/types/BoxPlot'
import { General } from '@cdc/core/types/General'

export type ChartColumns = Record<string, Column>

type Region = {
  from: string
  to: string
  label: string
  color: string
  background: string
  range: 'Custom' | string
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
  active: string
  type: 'url'
  columnName: string
  showDropdown: boolean
  filterStyle: string
  label: string
  order: 'asc' | 'desc' | 'cust'
  values: string[]
  queryParameter: string
}

export type Legend = {
  seriesHighlight: string[]
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
  general: General
  barHasBorder: 'true' | 'false'
  barHeight: number
  barSpace: number
  barStyle: string
  barThickness: number
  boxplot: BoxPlot
  brush: {
    active: boolean
    height: number
  }
  chartMessage: { noData?: string }
  color: string
  colorMatchLineSeriesLabels: boolean
  columns: ChartColumns
  confidenceKeys: Record<string, any>
  customColors: string[]
  data: Object[]
  dataUrl: string
  dataCutoff: number
  dataDescription: string
  dataFormat: DataFormat
  dataKey: string
  description: string
  dynamicMarginTop: number
  exclusions: Exclusions
  filters: Filter[]
  filterBehavior: FilterBehavior
  fontSize: 'small' | 'medium' | 'large'
  footnotes: string
  forestPlot: ForestPlotConfigSettings
  formattedData: Object[] & { urlFiltered: boolean }
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
  pieType?: string
  primary?: DataFormat
  roundingStyle: string
  runtime: Runtime
  runtimeDataUrl: string
  series: Series
  showLineSeriesLabels: boolean
  showSidebar: boolean
  showTitle: boolean
  sortData: 'ascending' | 'descending'
  stackedAreaChartLineType: string
  suppressedData?: { label: string; icon: string; value: string }[]
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
