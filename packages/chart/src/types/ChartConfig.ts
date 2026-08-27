import { type Axis } from '@cdc/core/types/Axis'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { type ForestPlotConfigSettings } from './ForestPlot'
import { type HorizonConfigSettings } from './Horizon'
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
    customColorsOrdered?: string[]
    colorAssignmentMode?: 'ordered' | 'by-value'
    colorAssignments?: { key: string; color: string }[]
  }
  useIntelligentLineChartLabels?: boolean
}
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
  | 'HeatMap'
  | 'Horizon Chart'
  | 'Line'
  | 'Paired Bar'
  | 'Pie'
  | 'Radar'
  | 'Scatter Plot'
  | 'Spark Line'
  | 'Combo'
  | 'Forecasting'
  | 'Sankey'
  | 'Bump Chart'
  | 'Warming Stripes'

export type HeatMapXAxisPosition = 'top' | 'bottom'

export type HeatMapConfig = {
  cellPadding?: number
  rowLabelGap?: number
  columnLabelGap?: number
  colorBucketCount?: number
  xAxisPosition?: HeatMapXAxisPosition
  showCellValues?: boolean
}

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
  weight?: number
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
  preserveOriginalDecimals?: boolean
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

export type LegendPattern = {
  label?: string
  color?: string
  shape?: string
  dataKey?: string
  dataValue?: string | number
  contrastCheck?: boolean
  patternSize?: number
  application?: 'value' | 'portion'
  patternValueKey?: string
  placement?: 'start' | 'end'
}

type Legend = CoreLegend & {
  seriesHighlight: string[]
  unified: boolean
  hideSuppressionLink: boolean
  tooltipLegendVisible?: boolean
  style: 'circles' | 'boxes' | 'gradient' | 'lines'
  subStyle: 'linear blocks' | 'smooth'
  hasShape: boolean
  order: 'dataColumn' | 'asc' | 'desc'
  orderedValues: Label[]
  tickRotation: string
  warmingStripesIntervals?: number
  hideBorder: {
    side: boolean
    topBottom: boolean
  }
  groupBy: string
  separators?: string
  patterns?: Record<string, LegendPattern>
}

type Visual = {
  border?: boolean
  borderColorTheme?: boolean
  accent?: boolean
  background?: boolean
  hideBackgroundColor?: boolean
  tp5Treatment?: boolean
  tp5Background?: boolean
  verticalHoverLine?: boolean
  horizontalHoverLine?: boolean
  lineDatapointSymbol: 'none' | 'standard'
  maximumShapeAmount: 7
}

import { type AltTextConfig } from '@cdc/core/types/AltText'
export type { AltTextConfig }

export type AllChartsConfig = {
  altText?: AltTextConfig
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
  dataMetadata?: Record<string, string>
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
  originalFormattedData?: Object[]
  yAxisDomainData?: Object[]
  heatmap?: HeatMapConfig
  heights: {
    vertical: number
    horizontal: number
    mobileVertical: number
  }
  highlightedBarValues: { value: any; color: string; borderWidth: number; legendLabel: string }[]
  horizon?: HorizonConfigSettings
  introText: string
  isLollipopChart: boolean
  isLegendValue: boolean
  isResponsiveTicks: boolean
  isPaletteReversed: boolean
  labels: boolean
  legend: Legend
  locale: string
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
  showAreaUnderLine?: boolean
  showSidebar: boolean
  showTitle: boolean
  smallMultiples?: {
    mode?: 'by-column' | 'by-series'
    tileColumn?: string
    tilesPerRowDesktop?: number
    tilesPerRowMobile?: number
    tileOrderType?: 'asc' | 'desc' | 'custom'
    tileOrder?: string[]
    tileTitles?: { [key: string]: string }
    independentYAxis?: boolean
    colorMode?: 'same' | 'different'
    synchronizedTooltips?: boolean
    showAreaUnderLine?: boolean
  }
  sortData: 'ascending' | 'descending'
  stackedAreaChartLineType: string
  suppressedData?: { label: string; icon: string; value: string }[]
  superTitle: string
  theme: string
  table: Table
  tipRounding: string
  title: string
  titleStyle?: 'legacy' | 'large' | 'small'
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
  hideXAxisLabel?: boolean
  hideYAxisLabel?: boolean
  xScale: Function
  yScale: Function
  regions: Region[]
  sankey: {
    nodePadding: number
    iterations: number
    horizontalScrollWidth?: number | string
    nodeSize: {
      nodeWidth: number
    }
    margin: { margin_x: number; margin_y: number }
    columns: {
      source: string
      target: string
      value: string
    }
    nodeColor: { default: string; inactive: string }
    opacity: {
      LinkOpacityInactive: number
      LinkOpacityDefault: number
      nodeOpacityInactive: number
      nodeOpacityDefault: number
    }
    rxValue: number
    nodeFontColor: string
    nodeValueStyle: {
      textBefore: string
      textAfter: string
    }
    linkColor: {
      default: string
      inactive: string
    }
  }
  radar?: {
    gridRings: number
    showGridRings: boolean
    gridRingStyle: 'polygons' | 'circles'
    scaleMin: number
    scaleMax: number | string
    showFill: boolean
    fillOpacity: number
    showPoints: boolean
    pointRadius: number
    strokeWidth: number
    axisLabelOffset: number
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

type SankeyLinkRow = {
  source: string
  target: string
  value: number | string
}

type SankeyChartConfig = {
  enableTooltips: boolean
  data: SankeyLinkRow[]
  visualizationType: 'Sankey'
} & AllChartsConfig &
  MarkupConfig

export type ChartConfig = SankeyChartConfig | LineChartConfig | ForestPlotConfig | AllChartsConfig
