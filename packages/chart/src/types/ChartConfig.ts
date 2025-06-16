import { Axis } from '@cdc/core/types/Axis'
import { type ForestPlotConfigSettings } from './ForestPlot'
import { type Column } from '@cdc/core/types/Column'
import { type Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { Table } from '@cdc/core/types/Table'
import { BoxPlot } from '@cdc/core/types/BoxPlot'
import { General } from '@cdc/core/types/General'
import { type Link } from './../components/Sankey/types'
import { type DataDescription } from '@cdc/core/types/DataDescription'
import { type Legend as CoreLegend } from '@cdc/core/types/Legend'
import { Label } from './Label'
import { ConfidenceInterval } from '@cdc/core/types/ConfidenceInterval'
import { Region } from '@cdc/core/types/Region'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { type Annotation } from '@cdc/core/types/Annotation'
import { Version } from '@cdc/core/types/Version'
import Footnotes from '@cdc/core/types/Footnotes'

export type ViewportSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
export type ChartColumns = Record<string, Column>
export type ChartOrientation = 'vertical' | 'horizontal'
export type VisualizationType =
  | 'Area Chart'
  | 'Bar'
  | 'Box Plot'
  | 'Deviation Bar'
  | 'Forest Plot'
  | 'Line'
  | 'Paired Bar'
  | 'Pie'
  | 'Scatter Plot'
  | 'Spark Line'
  | 'Combo'
  | 'Forecasting'
  | 'Sankey'
  | 'Bump Chart'
export interface PreliminaryDataItem {
  column: string
  displayLegend: boolean
  displayTable: boolean
  displayTooltip: boolean
  iconCode: string
  label: string
  lineCode: string
  seriesKey: string
  style: string
  symbol: string
  type: 'effect' | 'suppression'
  value: string
  hideBarSymbol: boolean
  hideLineStyle: boolean
  circleSize: number
  displayGray: boolean
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
  showPiePercent: boolean
}

type Exclusions = {
  keys: string[]
  active: boolean
  dateStart: string
  dateEnd: string
}

export type Legend = CoreLegend & {
  seriesHighlight: string[]
  unified: boolean
  hideSuppressionLink: boolean
  style: 'circles' | 'boxes' | 'gradient' | 'lines'
  subStyle: 'linear blocks' | 'smooth'
  hasShape: boolean
  order: 'dataColumn' | 'asc' | 'desc'
  orderedValues: Label[]
  tickRotation: string
  hideBorder: {
    side: boolean
    topBottom: boolean
  }
  groupBy: string
  separators?: string
}

type Visual = {
  border?: boolean
  borderColorTheme?: boolean
  accent?: boolean
  background?: boolean
  hideBackgroundColor?: boolean
  verticalHoverLine?: boolean
  horizontalHoverLine?: boolean
  lineDatapointSymbol: 'none' | 'standard'
  maximumShapeAmount: 7
}

export type AllChartsConfig = {
  annotations: Annotation[]
  animate: boolean
  general: General
  barHasBorder: 'true' | 'false'
  barHeight: number
  barSpace: number
  barStyle: 'lollipop' | 'rounded' | 'flat'
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
  confidenceKeys: ConfidenceInterval
  customColors: string[]
  data: Object[]
  dataUrl: string
  dataCutoff: number
  dataDescription: Partial<DataDescription>
  dataFormat: DataFormat
  dataKey: string
  description: string
  dynamicMarginTop: number
  exclusions: Exclusions
  filters: VizFilter[]
  filterBehavior: FilterBehavior
  legacyFootnotes: string // this footnote functionality should be moved to the Footnotes component
  footnotes: Footnotes
  forestPlot: ForestPlotConfigSettings
  formattedData: Object[] & { urlFiltered: boolean }
  heights: {
    vertical: number
    horizontal: number
    mobileVertical: number
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
  newViz: boolean
  orientation: ChartOrientation
  palette: string
  pieType?: string
  preliminaryData: PreliminaryDataItem[]
  primary?: DataFormat
  rankByValue: 'asc' | 'desc'
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
    dateDisplayFormat: string
  }
  topAxis: { hasLine: boolean }
  twoColor: { palette: string }
  type: 'chart' | 'dashboard'
  uid: string | number
  version: Version
  visual: Visual
  visualizationType: VisualizationType
  visualizationSubType: string
  xAxis: Axis
  yAxis: Axis
  xScale: Function
  yScale: Function
  regions: Region[]
  sankey: {
    data: { links: Link[]; storyNodeText: Object[]; tooltips: Object[] }[]
    nodePadding: number
    iterations: number
    nodeSize: {
      nodeWidth: number
    }
    margin: { margin_x: number; margin_y: number }
    nodeColor: { default: boolean; inactive: boolean }
    opacity: {
      LinkOpacityInactive: string
      LinkOpacityDefault: string
      nodeOpacityInactive: boolean
      nodeOpacityDefault: boolean
    }
    rxValue: number
    nodeFontColor: string
    nodeValueStyle: {
      textBefore: string
      textAfter: string
    }
    linkColor: {
      inactive: string
      default: string
    }
  }
}

export type ForestPlotConfig = {
  visualizationType: 'Forest Plot'
  forestPlot: ForestPlotConfigSettings
} & AllChartsConfig

export type LineChartConfig = {
  allowLineToBarGraph: boolean
  convertLineToBarGraph: boolean
  isolatedDotsSameSize: boolean
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
  visualizationType: 'Line'
} & AllChartsConfig

export type SankeyLink = {
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

export type SankeyChartConfig = {
  enableTooltips: boolean
  data: [
    {
      tooltips: Object[]
      // data to display in the sankey chart tooltips
      tooltipData: Object[]
      // data to display in the data table, bypasses the default data table output
      tableData: Object[]
      links: {
        source: SankeyLink
        target: SankeyLink
        value: number
      }[]
      storyNodeText: StoryNode[]
    }
  ]
  visualizationType: 'Sankey'
} & AllChartsConfig

export type ChartConfig = SankeyChartConfig | LineChartConfig | ForestPlotConfig | AllChartsConfig
