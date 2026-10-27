export type Series = {
  dataKey: string
  name: string
  axis: string
  type: string
  tooltip: boolean
  dynamicCategory?: string
  valueLabelColumn?: string
  confidenceIntervals?: {
    high: string
    low: string
    showInTooltip?: boolean
  }[]
  stageColumn?: string
  originalDataKey?: string
}[]
