import { type ChartConfig } from './ChartConfig'
import { PickD3Scale } from '@visx/scale'
import { type Annotation } from '@cdc/core/types/Annotation'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import { type DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { DataRow } from '@cdc/core/types/DataRow'
import { ColorPalettes, TwoColorPalette } from '@cdc/core/types/Palette'
export type ColorScale = PickD3Scale<'ordinal', any, any>

export type TransformedData = {
  dataKey?: string
  [key: string]: any
}

type SharedChartContext = {
  animatedChart?: boolean
  capitalize: (value: string) => string
  clean: Function
  colorScale?: ColorScale
  config: ChartConfig
  convertLineToBarGraph?: boolean
  currentViewport?: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  vizViewport?: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  dashboardConfig?: DashboardConfig
  // process top level chart aria label for each chart type
  handleChartAriaLabels: (config: ChartConfig) => string
  handleDragStateChange: (isDragging: boolean) => void
  highlight?: Function
  handleShowAll?: Function
  interactionLabel?: string
  // whether or not the chart is viewed within the editor screen
  isEditor?: boolean
  // whether or not the user is dragging an annotation
  isDraggingAnnotation?: boolean
  legendIsolateValues?: string[]
  legendRef?: React.RefObject<HTMLDivElement>
  parentRef?: React.RefObject<HTMLDivElement>
  setLegendIsolateValues?: Function
  svgRef?: React.RefObject<SVGSVGElement>
  handleSmallMultipleHover?: (xAxisValue: string | number | Date, yCoordinate: number) => void
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
  rawData: DataRow[]
  seriesHighlight: string[]
  tableData: DataRow[]
  transformedData: TransformedData[]
  updateConfig: Function
  visualizationType: 'Line'
  colorPalettes: ColorPalettes
  twoColorPalette: TwoColorPalette
}

export type ChartContext =
  | LineChartContext
  | (SharedChartContext & {
      annotations: Annotation[]
      colorPalettes: ColorPalettes
      dimensions: DimensionsType
      formatDate?: Function
      formatTooltipsDate: Function
      formatNumber?: Function
      handleLineType?: Function
      // 508 compliance: tabbing handler for charts
      handleChartTabbing?: (chartConfig: ChartConfig, legendId: string) => string
      isNumber?: boolean
      // 508 compliance: tabbing id for legends
      legendId: string
      // url param added to allow various console logs and chart helpers
      isDebug?: boolean
      parseDate?: Function
      rawData?: DataRow[]
      seriesHighlight?: string[]
      setSharedFilter?: Function
      sharedFilterValue?: string
      tableData?: DataRow[]
      transformedData?: TransformedData[]
      twoColorPalette: TwoColorPalette
      updateConfig?: Function
    })
