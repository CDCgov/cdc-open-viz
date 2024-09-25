// todo: review tooltipData type
// todo: review svgRef type
import { type PreliminaryDataItem } from '../../types/ChartConfig'
export type LineChartProps = {
  xScale: Function
  yScale: Function
  getXAxisData: Function
  getYAxisData: Function
  xMax: number
  yMax: number
  handleTooltipMouseOver: Function
  handleTooltipMouseOff: Function
  showTooltip: boolean
  seriesStyle: String
  svgRef: any
  handleTooltipClick: Function
  tooltipData: any
}

export interface DataItem {
  [key: string]: any
}

export interface Config {
  preliminaryData: PreliminaryDataItem[] | []
}
export interface StyleProps {
  data: DataItem[]
  handleLineType: Function
  lineType: string
  preliminaryData: PreliminaryDataItem[]
  seriesKey: 'string'
  stroke: string
  strokeWidth: number
}
export interface Style {
  stroke: string
  strokeWidth: number
  strokeDasharray: string
}
