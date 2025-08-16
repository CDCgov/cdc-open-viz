export type RuntimeLegendItem = {
  disabled?: boolean
  bin?: number
  color?: string
  special?: boolean
  value?: string | number
  label?: string
  min?: number
  max?: number
}

export type RuntimeLegend = {
  items: RuntimeLegendItem[]
  disabledAmt?: number
  fromHash?: number
  runtimeDataHash?: number
}
