import { type Color } from '@cdc/core/types/Color'

export type ChartColumns = {
  [key: string]: {
    label: string
    dataTable: boolean
    tooltips: boolean
    prefix: string
    suffix: string
    forestPlot: boolean
    startingPoint: string
    forestPlotAlignRight: boolean
    name?: string
  }
}

export type ForestPlotProps = {
  xScale: Function
  yScale: Function
  config: any // todo
  height: number
  width: number
  handleTooltipMouseOff: Function
  handleTooltipMouseOver: Function
}

export type ForestPlotConfigSettings = {
  colors: {
    line: Color // color of line of effect
    shape: Color // color for effect estimate shape
  }
  // description - appears below the study column.
  description: {
    show: boolean
    text: string
    location: number
  }
  // effect estimates
  estimateField: string // column chose for the effect estimate
  estimateRadius: string
  hideDateCategoryCol: boolean
  leftWidthOffset: number
  lineOfNoEffect: {
    show: boolean
  }
  lower: string
  upper: string
  // type - determines the type of scale we're using, including the position of line of effect (0 or 1)
  type: 'Linear' | 'Logarithmic'
  pooledResult: {
    diamondHeight: number
    column: string
  }
  // rowHeight - height of study
  rowHeight: number
  // radius - scaling for effect estimates
  radius: {
    min: number
    max: number
    /** @deprecated - moved to estimateField due to duplication */
    scalingColumn: string
  }
  regression: {
    lower: number
    upper: number
    estimateField: number
  }
  result: {
    show: boolean
    text: string
    location: number
  }
  rightWidthOffset: number
  shape: string
  startAt: number
  title: string // centered title above the chart

  /** @deprecated - moved to lineOfNoEffect*/
  showZeroLine: boolean
  // labels under chart
  leftLabel: string
  rightLabel: string
}
