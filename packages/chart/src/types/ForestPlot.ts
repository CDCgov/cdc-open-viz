import { type Color } from '@cdc/core/types/Color'

export type ForestPlotConfigSettings = {
  colors: {
    // color of line of no effect
    line: Color
    // color for effect estimate shape
    shape: Color
  }
  // description - appears below the study column.
  description: {
    show: boolean
    text: string
    location: number
  }
  // column chose for the effect estimate
  estimateField: string
  // column chose for the esimate radius
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
    scalingColumn: string
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
  // labels under chart
  leftLabel: string
  rightLabel: string
  /** rightWidthOffsetMobile */
  rightWidthOffsetMobile: number
  /** leftWidthOffsetMobile */
  leftWidthOffsetMobile: number
  regression: {
    showDiamond: boolean
    description: boolean
  }
}
