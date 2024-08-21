export type FilterBase = {
  columnName: string
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
  order: 'asc' | 'desc' | 'cust'
  orderedValues?: string[]
  queryParameter: string
  setByQueryParameter: string
  type: 'url'
}

export type MultiSelectFilter = {
  active: string[]
  selectLimit: number
} & Omit<GeneralFilter, 'active'>

export type SubGroupingType = {
  active: string
  columnName: string
  order?: string
  allValues: [
    {
      groupName: string
      values: string[]
      orderedValues?: string[]
    }
  ]
}

export type NestedDropdownFilter = {
  subGroupingFilter: SubGroupingType
  useQueryParameter: boolean
} & GeneralFilter

export type VizFilter = GeneralFilter | MultiSelectFilter | NestedDropdownFilter
