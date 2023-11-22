import { type ForestPlotConfigSettings } from './ForestPlot'

type ChartTypes = 'Area Chart' | 'Bar' | 'Deviation Bar' | 'Forest Plot' | 'Paired Bar' | 'Scatter Plot' | 'Spark Line'

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

export type ChartConfig = {
  forestPlot: ForestPlotConfigSettings
  visualizationType: ChartTypes
  orientation: 'vertical' | 'horizontal'
  useLogScale: boolean
  isLollipopChart: boolean
  columns: ChartColumns
}
