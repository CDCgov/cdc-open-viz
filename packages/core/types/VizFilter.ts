export type OrderBy = 'asc' | 'desc' | 'cust'

export type FilterBase = {
  columnName: string
  orderedValues?: string[]
  values: string[]
  showDropdown: boolean
  id: number
  parents: number[]
}

export type GeneralFilter = FilterBase & {
  active: string
  queuedActive: string
  filterStyle: 'tab' | 'pill' | 'tab bar' | 'dropdown' | 'dropdown bar' | 'multi-select' | 'nested-dropdown'
  label: string
  order: OrderBy
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
