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
import { type Link } from './../components/Sankey/types'
import { ChartLegend } from './ChartLegend'
import { ChartDataFormat } from './ChartDataFormat'
import { Label } from './Label'
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
  data: Object[]
  filters: VizFilter[]

  // Override visual to use chart-specific visual configuration
  visual: ChartVisual

  // Chart-specific properties
  newViz?: boolean
  annotations: Annotation[]
  animate: boolean
  general: ChartGeneral
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
  dataCutoff: number
  dataFormat: ChartDataFormat
  dataKey: string
  description: string
  dynamicMarginTop: number
  exclusions: Exclusions
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
  legend: ChartLegend
  lineDatapointColor: 'Same as Line' | 'Lighter than Line'
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
  lollipopColorStyle: 'regular' | 'two-tone'
  lollipopShape: string
  lollipopSize: 'small' | 'medium' | 'large'
  orientation: ChartOrientation
  palette: string
  pieType?: string
  preliminaryData: PreliminaryDataItem[]
  primary?: ChartDataFormat
  rankByValue: 'asc' | 'desc'
  roundingStyle: string
  runtime: Runtime
  runtimeDataUrl: string
  series: Series
  showLineSeriesLabels: boolean
  showSidebar: boolean
  sortData: 'ascending' | 'descending'
  stackedAreaChartLineType: string
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

interface ForestPlotConfig extends AllChartsConfig, EditorPanel_MarkupVariables {
  visualizationType: 'Forest Plot'
  forestPlot: ForestPlotConfigSettings
}

export interface LineChartConfig extends AllChartsConfig, EditorPanel_MarkupVariables {
  allowLineToBarGraph: boolean
  convertLineToBarGraph: boolean
  isolatedDotsSameSize: boolean
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
  visualizationType: 'Line'
}

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

interface SankeyChartConfig extends AllChartsConfig, EditorPanel_MarkupVariables {
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
}

export type ChartConfig = SankeyChartConfig | LineChartConfig | ForestPlotConfig | AllChartsConfig
