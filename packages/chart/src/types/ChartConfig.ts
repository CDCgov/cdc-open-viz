import { type ForestPlotConfigSettings } from './ForestPlot'

export type ChartColumns = {
  /** key - is the column name */
  [key: string]: {
    label: string
    dataTable: boolean
    tooltips: boolean
    prefix: string
    suffix: string
    forestPlot: boolean
    startingPoint: string
    forestPlotAlignRight: boolean
    name?: string
  }
}

type Series = {
  dataKey: string
  axis: string
}

type AllChartsConfig = {
  columns: ChartColumns
  data: Object[]
  forestPlot: ForestPlotConfigSettings
  isLollipopChart: boolean
  legend: {
    // general legend onClick behavior
    behavior: 'highlight' | 'isolate' | unknown
    // show or hide the legend
    hide: boolean
  }
  orientation: 'vertical' | 'horizontal'
  runtime: {}
  series: Series[]
  useLogScale: boolean
  visualizationType: 'Area Chart' | 'Bar' | 'Deviation Bar' | 'Forest Plot' | 'Paired Bar' | 'Scatter Plot' | 'Spark Line'
  xAxis: {
    // column chosen on xAxis
    dataKey: string
  }
  yAxis: {}
  xScale: Function
  yScale: Function
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
