export type Anchor = {
  value: string
  color: string
  lineStyle: string
}

export type Axis = {
  categories: [{ label: string; height: string; color: string }]
  scalePadding: number
  anchors?: Anchor[]
  dataKey: string
  dateDisplayFormat: string
  dateParseFormat: string
  displayNumbersOnBar?: boolean
  enablePadding?: boolean
  gridLines?: boolean
  hideAxis?: boolean
  hideLabel?: boolean
  hideTicks?: boolean
  label?: string
  labelOffset?: number
  labelPlacement?: string
  manual?: boolean
  manualStep?: number
  max?: string
  maxTickRotation?: number
  min?: string
  numTicks?: number
  paddingPercent?: number
  rightAxisSize?: number
  rightHideAxis?: boolean
  rightHideLabel?: boolean
  rightHideTicks?: boolean
  rightLabel?: string
  rightLabelOffsetSize?: number
  rightMax?: string
  rightNumTicks?: number
  sortDates?: boolean
  sortKey?: string
  showTargetLabel?: boolean
  size?: number
  target?: number
  targetLabel?: string
  tickRotation?: number
  tickWidthMax?: number
  type: string
  axisBBox: number
  maxValue: string
}
