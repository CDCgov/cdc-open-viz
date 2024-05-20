// todo: review tooltipData type
// todo: review svgRef type
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

export interface PreliminaryDataItem {
  style: string
  type: string
  column: string
  value: string
  seriesKey: string
  label: string
}

export interface DataItem {
  [key: string]: any
}

export interface Config {
  preliminaryData: PreliminaryDataItem[] | []
}
export interface StyleProps {
  preliminaryData: PreliminaryDataItem[]
  data: DataItem[]
  stroke: string
  handleLineType: Function
  lineType: string
  seriesKey: 'string'
}
export interface Style {
  stroke: string
  strokeWidth: number
  strokeDasharray: string
}
