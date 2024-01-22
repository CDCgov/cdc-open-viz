import { type ChartConfig } from './ChartConfig'
import { PickD3Scale } from '@visx/scale'

export type ColorScale = PickD3Scale<'ordinal', any, any>

export type TransformedData = {
  dataKey?: string
  [key: string]: any
}

type SharedChartContext = {
  colorScale?: ColorScale
  config: ChartConfig
  currentViewport?: string
  highlight?: Function
  highlightReset?: Function
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
  seriesHighlight: string[]
  tableData: Object[]
  transformedData: TransformedData[]
  updateConfig: Function
  visualizationType: 'Line'
  colorPalettes: any
  twoColorPalette: any
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
      seriesHighlight?: string[]
      tableData?: Object[]
      transformedData?: TransformedData[]
      setSharedFilter?: Function
      sharedFilterValue?: string
      updateConfig?: Function
      colorPalettes: any
      twoColorPalette: any
    })
