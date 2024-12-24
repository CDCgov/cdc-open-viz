export type OrderBy = 'asc' | 'desc' | 'cust' | 'column'

export type FilterBase = {
  columnName: string
  orderedValues?: string[]
  values: string[]
  showDropdown: boolean
  id: number
  parents: number[]
}

export type VizFilterStyle =
  | 'tab'
  | 'pill'
  | 'tab bar'
  | 'dropdown'
  | 'dropdown bar'
  | 'multi-select'
  | 'nested-dropdown'
export type GeneralFilter = FilterBase & {
  active: string
  queuedActive: string | string[]
  filterStyle: VizFilterStyle
  label: string
  order: OrderBy
  orderColumn?: string
  orderedValues?: string[] // should only exist if the order is 'cust'
  queryParameter: string
  setByQueryParameter: string
  subGrouping: SubGrouping
  type: 'url'
}

export type MultiSelectFilter = {
  active: string[]
  selectLimit: number
} & Omit<GeneralFilter, 'active'>

export type SubGrouping = {
  active: string
  columnName: string
  setByQueryParameter: string
  order?: OrderBy
  valuesLookup: Record<string, { orderedValues?: string[]; values: string[] }>
}

export type VizFilter = GeneralFilter | MultiSelectFilter
