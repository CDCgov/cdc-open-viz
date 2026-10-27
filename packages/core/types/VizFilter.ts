export type OrderBy = 'asc' | 'desc' | 'cust' | 'column' | 'data'

export type FilterBase = {
  columnName: string
  orderedValues?: string[]
  values: string[]
  descriptionSelector?: string
  optionDescriptions?: Record<string, string>
  showDropdown: boolean
  note?: string
  id: number
  parents: number[]
  staticFilter?: boolean
}

export type VizFilterStyle =
  | 'tab'
  | 'tab-simple'
  | 'pill'
  | 'tab bar'
  | 'dropdown'
  | 'dropdown bar'
  | 'multi-select'
  | 'nested-dropdown'
  | 'combobox'
export type GeneralFilter = FilterBase & {
  active: string
  queuedActive: string | string[]
  displaySubgroupingOnly?: boolean
  filterStyle: VizFilterStyle
  label: string
  labels?: Record<string, string>
  order: OrderBy
  orderColumn?: string
  orderedValues?: string[] // should only exist if the order is 'cust'
  queryParameter: string
  setByQueryParameter: string
  subGrouping: SubGrouping
  type: 'url'
  filterFootnotes?: boolean
  defaultValue?: string
  resetLabel?: string
}

export type MultiSelectFilter = {
  active: string[]
  selectLimit: number
} & Omit<GeneralFilter, 'active'>

export type SubGrouping = {
  active: string
  columnName: string
  subgroupDescriptionSelector?: string
  setByQueryParameter: string
  order?: OrderBy
  valuesLookup: Record<
    string,
    {
      orderedValues?: string[]
      values: string[]
      descriptionsByValue?: Record<string, string>
    }
  >
  defaultValue?: string
}

export type VizFilter = GeneralFilter | MultiSelectFilter
