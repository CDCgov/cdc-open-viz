export type MarkupCondition = {
  columnName: string
  isOrIsNotEqualTo: 'is' | 'is not'
  value: string
}

export type MarkupVariable = {
  columnName: string
  conditions: MarkupCondition[]
  name: string
  tag: string
  addCommas?: boolean
  hideOnNull?: boolean
  dataKey?: string
}

export type MarkupConfig = {
  markupVariables?: MarkupVariable[]
  enableMarkupVariables?: boolean
}
