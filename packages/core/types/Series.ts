type ConfidenceInterval = {
  low: string
  high: string
  showInTooltip: boolean
}

export type Series = {
  dataKey: string
  name: string
  axis: string
  type: string
  tooltip: boolean
  dynamicCategory?: string
  confidenceIntervals?: ConfidenceInterval[]
}[]
