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
  setByQueryParameter: string
  order?: OrderBy
  valuesLookup: Record<string, { orderedValues?: string[]; values: string[] }>
  defaultValue?: string
}

export type VizFilter = GeneralFilter | MultiSelectFilter

/**
 * Runtime filter array type with optional fromHash property.
 * Used by Maps to track filter hash state.
 */
export type RuntimeVizFilters = VizFilter[] & { fromHash?: number }

// Re-export new typed filter system for gradual migration
export type {
  TypedVizFilter,
  SingleSelectFilter as TypedSingleSelectFilter,
  MultiSelectFilter as TypedMultiSelectFilter,
  NestedDropdownFilter as TypedNestedDropdownFilter
} from './TypedFilters'

export {
  isMultiSelectFilter,
  isNestedDropdownFilter,
  isSingleSelectFilter,
  getFilterActive,
  hasActiveSelection,
  getSelectedValues
} from './TypedFilters'
