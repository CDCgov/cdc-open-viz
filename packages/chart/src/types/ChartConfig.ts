import { type ForestPlotConfigSettings } from './ForestPlot'

export type ChartColumns = {
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
  forestPlot: ForestPlotConfigSettings
  isLollipopChart: boolean
  legend: {
    behavior: 'highlight' | unknown
  }
  orientation: 'vertical' | 'horizontal'
  runtime: {}
  series: Series[]
  useLogScale: boolean
  visualizationType: 'Area Chart' | 'Bar' | 'Deviation Bar' | 'Forest Plot' | 'Paired Bar' | 'Scatter Plot' | 'Spark Line'
  xScale: Function
  yScale: Function
}

export type LineChartConfig = {
  visualizationType: 'Line'
  lineDatapointStyle: 'hidden' | 'always show' | 'hover'
} & AllCharts

export type ChartConfig = LineChartConfig | AllChartsConfig
