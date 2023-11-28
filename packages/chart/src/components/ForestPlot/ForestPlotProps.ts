import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'

export type ForestPlotProps = {
  xScale: Function
  yScale: Function
  config: ChartConfig
  height: number
  width: number
  handleTooltipMouseOff: Function
  handleTooltipMouseOver: Function
}
