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
}

export interface DataItem {
  [key: string]: any
}

export interface Config {
  preliminaryData: PreliminaryDataItem[] | []
}
