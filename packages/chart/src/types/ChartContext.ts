import { type ChartConfig } from './ChartConfig'

// Line Chart Specific Context
type LineChartContext = {
  colorScale: Function
  config: ChartConfig
  formatDate: Function
  formatNumber: Function
  handleLineType: Function
  isNumber: unknown
  parseDate: Function
  rawData: Object[]
  seriesHighlight: String[]
  tableData: Object[]
  transformedData: Object[]
  updateConfig: Function
  visualizationType: 'Line'
}

export type ChartContext =
  | LineChartContext
  | {
      colorScale?: Function
      config?: ChartConfig
      formatDate?: Function
      formatNumber?: Function
      handleLineType?: Function
      isNumber?: boolean
      parseDate?: Function
      rawData?: Object[]
      seriesHighlight?: String[]
      tableData?: Object[]
      transformedData?: Object[]
      updateConfig?: Function
    }
