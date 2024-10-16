import { type ChartConfig } from './ChartConfig'
import { PickD3Scale } from '@visx/scale'
import { type SharedFilter } from '@cdc/dashboard/src/types/SharedFilter'
import { type Annotation } from '@cdc/core/types/Annotation'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import { type DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
export type ColorScale = PickD3Scale<'ordinal', any, any>

export type TransformedData = {
  dataKey?: string
  [key: string]: any
}

type SharedChartContext = {
  animatedChart?: boolean
  brushConfig: { data: []; isBrushing: boolean; isActive: boolean }
  capitalize: (value: string) => string
  clean: Function
  colorScale?: ColorScale
  config: ChartConfig
  currentViewport?: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  dashboardConfig?: DashboardConfig
  getTextWidth?: (a: string, b: string) => string
  // process top level chart aria label for each chart type
  handleChartAriaLabels: (config: any) => string
  handleDragStateChange: (isDragging: any) => void
  highlight?: Function
  highlightReset?: Function
  // whether or not the legend is appearing below the chart
  isLegendBottom?: boolean
  // whether or not the chart is viewed within the editor screen
  isEditor?: boolean
  // whether or not the user is dragging an annotation
  isDraggingAnnotation?: boolean
  legendIsolateValues?: string[]
  legendRef?: React.RefObject<HTMLDivElement>
  parentRef?: React.RefObject<HTMLDivElement>
  setBrushConfig: Function
  setLegendIsolateValues?: Function
}

// Line Chart Specific Context
type LineChartContext = SharedChartContext & {
  convertLineToBarGraph: boolean
  dimensions: DimensionsType
  formatDate: Function
  formatTooltipsDate: Function
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
  colorPalettes: Record<string, string[]>
  twoColorPalette: Record<string, string[]>
}

export type ChartContext =
  | LineChartContext
  | (SharedChartContext & {
      annotations: Annotation[]
      colorPalettes: any
      dimensions: DimensionsType
      formatDate?: Function
      formatTooltipsDate: Function
      formatNumber?: Function
      handleLineType?: Function
      isNumber?: boolean
      // url param added to allow various console logs and chart helpers
      isDebug?: boolean
      parseDate?: Function
      rawData?: Object[]
      seriesHighlight?: string[]
      setSharedFilter?: Function
      sharedFilterValue?: string
      tableData?: Object[]
      transformedData?: TransformedData[]
      twoColorPalette: any
      updateConfig?: Function
    })
