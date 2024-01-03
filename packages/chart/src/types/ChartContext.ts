import { type ChartConfig } from './ChartConfig'

type TransformedData = {
  dataKey?: string
  [key: string]: any
}

// Line Chart Specific Context
type LineChartContext = {
  colorScale: Function
  config: ChartConfig
  dimensions: [screenWidth: number, screenHeight: number]
  formatDate: Function
  formatNumber: Function
  handleLineType: Function
  isNumber: unknown
  isDebug?: boolean
  parseDate: Function
  rawData: Object[]
  seriesHighlight: String[]
  tableData: Object[]
  transformedData: TransformedData[]
  updateConfig: Function
  visualizationType: 'Line'
}

export type ChartContext =
  | LineChartContext
  | {
      colorScale?: Function
      config?: ChartConfig
      dimensions: [screenWidth: number, screenHeight: number]
      formatDate?: Function
      formatNumber?: Function
      handleLineType?: Function
      isNumber?: boolean
      // url param added to allow various console logs and chart helpers
      isDebug?: boolean
      parseDate?: Function
      rawData?: Object[]
      seriesHighlight?: String[]
      tableData?: Object[]
      transformedData?: TransformedData[]
      setSharedFilter?: Function
      sharedFilterValue?: string
      updateConfig?: Function
    }
