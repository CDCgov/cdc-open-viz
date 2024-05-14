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
  type: 'effect' | 'suppression' | ''
  column: string
  value: string
  seriesKey: string
  label: string
  symbol: string
  displayTooltip: boolean
  displayLegend: boolean
  displayTable: boolean
  iconCode: string
  lineCode: string
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
  strokeWidth: number
}
export interface Style {
  stroke: string
  strokeWidth: number
  strokeDasharray: string
}
