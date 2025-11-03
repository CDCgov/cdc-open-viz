import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Axis } from '@cdc/core/types/Axis'
import { EditorPanel_MarkupVariables } from '@cdc/core/types/EditorPanel_MarkupVariables'
import { ChartVisual } from './ChartVisual'
import { type ForestPlotConfigSettings } from './ForestPlot'
import { type Column } from '@cdc/core/types/Column'
import { type Series } from '@cdc/core/types/Series'
import { type Runtime } from '@cdc/core/types/Runtime'
import { type FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { type Table } from '@cdc/core/types/Table'
import { type BoxPlot } from '@cdc/core/types/BoxPlot'
import { ChartLegend } from './ChartLegend'
import { ChartDataFormat } from './ChartDataFormat'
import { ConfidenceInterval } from '@cdc/core/types/ConfidenceInterval'
import { Region } from '@cdc/core/types/Region'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { type Annotation } from '@cdc/core/types/Annotation'
import Footnotes from '@cdc/core/types/Footnotes'
import { BaseGeneral } from '@cdc/core/types/General'

/**
 * Chart-specific general configuration
 * Extends BaseGeneral with chart-specific settings
 */
interface ChartGeneral extends BaseGeneral {
  /** Whether to show annotation dropdown menu */
  showAnnotationDropdown?: boolean
  /** Custom text for annotation dropdown button */
  annotationDropdownText?: string
}

type Link = { source: string; target: string; value: number; id: string }

export type ViewportSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
type ChartColumns = Record<string, Column>
export type ChartOrientation = 'vertical' | 'horizontal'
export type ChartVisualizationType =
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

type Exclusions = {
  keys: string[]
  active: boolean
  dateStart: string
  dateEnd: string
}

/**
 * Base configuration interface for all chart visualizations.
 * Extends BaseVisualizationConfig with chart-specific properties.
 */
export interface AllChartsConfig extends BaseVisualizationConfig, EditorPanel_MarkupVariables {
  // Override base properties to be more specific or required
  type: 'chart' | 'dashboard'
  filters: VizFilter[]
  barHeight: number
  barSpace: number

  // Override visual to use chart-specific visual configuration
  visual: ChartVisual

  // Chart-specific properties
  newViz?: boolean
  annotations: Annotation[]
  animate: boolean
  general: ChartGeneral

  // Common properties for all charts
  chartMessage: { noData?: string }
  color: string
  colorMatchLineSeriesLabels: boolean
  columns: ChartColumns
  confidenceKeys: ConfidenceInterval
  dataCutoff: number
  dataFormat: ChartDataFormat
  dataKey: string
  description: string
  dynamicMarginTop: number
  dynamicSeriesType?: string
  dynamicSeriesLineType?: string
  exclusions: Exclusions
  filterBehavior: FilterBehavior
  legacyFootnotes: string // this footnote functionality should be moved to the Footnotes component
  footnotes: Footnotes
  formattedData: Object[] & { urlFiltered: boolean }
  heights: {
    vertical: number
    horizontal: number
    mobileVertical: number
  }
  highlightedBarValues: { value: any; color: string; borderWidth: number; legendLabel: string }[]
  introText: string
  isLegendValue: boolean
  isResponsiveTicks: boolean
  isPaletteReversed: boolean
  labels: boolean
  legend: ChartLegend
  orientation?: ChartOrientation
  palette: string
  preliminaryData: PreliminaryDataItem[]
  primary?: ChartDataFormat
  rankByValue: 'asc' | 'desc'
  roundingStyle: string
  runtime: Runtime
  runtimeDataUrl: string
  series: Series[]
  showSidebar: boolean
  sortData: 'ascending' | 'descending'
  suppressedData?: { label: string; icon: string; value: string }[]
  superTitle: string
  theme: string
  table: Table
  tipRounding: string
  tooltips: {
    singleSeries: boolean
    opacity: number
    dateDisplayFormat: string
  }
  topAxis: { hasLine: boolean }
  twoColor: { palette: string }
  visualizationType: ChartVisualizationType
  visualizationSubType: string
  xAxis: Axis
  yAxis: Axis
  xScale: Function
  yScale: Function
  regions: Region[]
}

interface AreaChartConfig extends AllChartsConfig {
  visualizationType: 'Area Chart'
  stackedAreaChartLineType: string
  visualizationSubType: 'stacked'
}

interface BarChartConfig extends AllChartsConfig {
  visualizationType: 'Bar'
  barHasBorder: 'true' | 'false'
  barHeight: number
  barSpace: number
  barStyle: 'lollipop' | 'rounded' | 'flat'
  barThickness: number
  isLollipopChart: boolean
  lollipopColorStyle: 'regular' | 'two-tone'
  lollipopShape: string
  lollipopSize: 'small' | 'medium' | 'large'
  // Bar charts can be both vertical and horizontal
  orientation: ChartOrientation
}

interface BoxPlotConfig extends AllChartsConfig {
  visualizationType: 'Box Plot'
  boxplot: BoxPlot
}

interface BumpChartConfig extends AllChartsConfig {
  visualizationType: 'Bump Chart'
}

interface ComboChartConfig extends AllChartsConfig {
  visualizationType: 'Combo'
}

interface DeviationBarConfig extends AllChartsConfig {
  visualizationType: 'Deviation Bar'
  orientation: 'horizontal'
}

interface ForecastingConfig extends AllChartsConfig {
  visualizationType: 'Forecasting'
  // Forecasting charts are typically vertical like line charts
  orientation: 'vertical'
}

interface ForestPlotConfig extends AllChartsConfig {
  visualizationType: 'Forest Plot'
  forestPlot: ForestPlotConfigSettings
  orientation: 'horizontal'
}

export interface LineChartConfig extends AllChartsConfig {
  allowLineToBarGraph: boolean
  convertLineToBarGraph: boolean
  isolatedDotsSameSize: boolean
  lineDatapointColor: 'Same as Line' | 'Lighter than Line'
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
  showLineSeriesLabels: boolean
  visualizationType: 'Line'
  // Line charts are typically vertical
  orientation: 'vertical'
}

interface PairedBarConfig extends AllChartsConfig {
  visualizationType: 'Paired Bar'
  orientation: 'horizontal'
}

interface PieChartConfig extends Omit<AllChartsConfig, 'orientation'> {
  visualizationType: 'Pie'
  pieType?: string
  // Pie charts don't have traditional orientation, so we omit it
}

export interface SankeyChartConfig extends AllChartsConfig {
  enableTooltips: boolean
  visualizationType: 'Sankey'
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
    storyNodeFontColor: string
    storyNodeFillColor: {
      active: string
      hover: string
      default: string
    }
  }
}

interface ScatterPlotConfig extends AllChartsConfig {
  visualizationType: 'Scatter Plot'
  // Scatter plots are typically vertical
  orientation: 'vertical'
}

interface SparkLineConfig extends AllChartsConfig {
  visualizationType: 'Spark Line'
  // Spark lines are typically horizontal but in a vertical layout
  orientation: 'vertical'
}

export type ChartConfig =
  | AreaChartConfig
  | BarChartConfig
  | BoxPlotConfig
  | BumpChartConfig
  | ComboChartConfig
  | DeviationBarConfig
  | ForecastingConfig
  | ForestPlotConfig
  | LineChartConfig
  | PairedBarConfig
  | PieChartConfig
  | SankeyChartConfig
  | ScatterPlotConfig
  | SparkLineConfig
  | AllChartsConfig
