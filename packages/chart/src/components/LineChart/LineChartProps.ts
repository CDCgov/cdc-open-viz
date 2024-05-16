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
  column: string
  displayLegend: boolean
  displayTable: boolean
  displayTooltip: boolean
  iconCode: string
  label: string
  lineCode: string
  seriesKey: string
  style: string
  symbol: string
  type: 'effect' | 'suppression' | ''
  value: string
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
