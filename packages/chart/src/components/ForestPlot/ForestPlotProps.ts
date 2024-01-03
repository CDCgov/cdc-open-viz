import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'

export type ForestPlotProps = {
  /** xScale - scaling function for bottom axis */
  xScale: Function
  /** yScale - scaling function for left axis */
  yScale: Function
  /** config - standard chart config */
  config: ChartConfig
  /** height - height of chart */
  height: number
  /** width - width of chart */
  width: number
  /** handleTooltipMouseOff - helper function for hiding tooltip */
  handleTooltipMouseOff: Function
  /** handleTooltipMousOver - helper function for showing tooltip */
  handleTooltipMouseOver: Function
}
