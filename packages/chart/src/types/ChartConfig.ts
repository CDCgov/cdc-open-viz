import { Axis } from '@cdc/core/types/Axis'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { type ForestPlotConfigSettings } from './ForestPlot'
import { type Column } from '@cdc/core/types/Column'
import { type Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { Table } from '@cdc/core/types/Table'
import { BoxPlot } from '@cdc/core/types/BoxPlot'
import { General as CoreGeneral } from '@cdc/core/types/General'

// Extend the core General type to include palette information for charts
type General = CoreGeneral & {
  palette?: {
    name?: string
    version?: string
    isReversed?: boolean
    customColors?: string[]
  }
}
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
type ChartColumns = Record<string, Column>
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
  seriesKeys: string[]
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

type Legend = CoreLegend & {
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
  patterns?: {
    [key: string]: {
      label?: string
      color?: string
      shape?: string
      dataKey?: string
      dataValue?: string
      contrastCheck?: boolean
      patternSize?: number
    }
  }
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
  chartMessage: { noData?: string }
  color: string
  colorMatchLineSeriesLabels: boolean
  columns: ChartColumns
  confidenceKeys: ConfidenceInterval
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
  smallMultiples?: {
    mode?: 'by-column' | 'by-series'
    tileColumn?: string // Used when mode is 'by-column'
    tilesPerRowDesktop?: number // Number of tiles per row on desktop
    tilesPerRowMobile?: number // Number of tiles per row on mobile
    independentYAxis?: boolean // Whether each tile uses its own Y-axis scale (true) or all tiles use the same scale (false)
    tileOrder?: string[] // Custom order of tiles (series keys for by-series mode, unique values for by-column mode) - used when tileOrderType is 'custom'
    tileOrderType?: 'asc' | 'desc' | 'custom' // Type of tile ordering: ascending alphanumeric, descending alphanumeric, or custom drag-drop
    tileTitles?: { [key: string]: string } // Map tile keys to custom display titles
    colorMode?: 'same' | 'different' // Whether all tiles use same colors ('same') or each tile uses different colors ('different')
  }
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
} & MarkupConfig

type ForestPlotConfig = {
  visualizationType: 'Forest Plot'
  forestPlot: ForestPlotConfigSettings
} & AllChartsConfig &
  MarkupConfig

export type LineChartConfig = {
  allowLineToBarGraph: boolean
  convertLineToBarGraph: boolean
  isolatedDotsSameSize: boolean
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
  visualizationType: 'Line'
} & AllChartsConfig &
  MarkupConfig

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

type SankeyChartConfig = {
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
} & AllChartsConfig &
  MarkupConfig

export type ChartConfig = SankeyChartConfig | LineChartConfig | ForestPlotConfig | AllChartsConfig
