import { type ChartConfig } from './ChartConfig'
import { PickD3Scale } from '@visx/scale'

type ColorScale = PickD3Scale<'ordinal', any, any>

type TransformedData = {
  dataKey?: string
  [key: string]: any
}

type LineOption = {
  value: string
  key: string
}

type SharedChartContext = {
  colorScale?: ColorScale
  config: ChartConfig
  currentViewport?: string
  highlight?: Function
  highlightReset?: Function
  lineOptions?: LineOption[]
}

// Line Chart Specific Context
type LineChartContext = SharedChartContext & {
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
  | (SharedChartContext & {
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
    })
