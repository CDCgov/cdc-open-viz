export type FilterBase = {
  columnName: string
  values: string[]
  showDropdown: boolean
}

export type GeneralFilter = FilterBase & {
  active: string
  queuedActive: string
  filterStyle: 'tab' | 'pill' | 'tab bar' | 'dropdown' | 'dropdown bar' | 'multi-select'
  label: string
  order: 'asc' | 'desc' | 'cust'
  orderedValues?: string[]
  queryParameter: string
  setByQueryParameter: string
  type: 'url'
}

export type MultiSelectFilter = {
  active: string[]
  selectLimit: number
} & GeneralFilter

export type VizFilter = GeneralFilter | MultiSelectFilter
