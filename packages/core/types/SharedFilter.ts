import { FilterBase, SubGrouping } from './VizFilter'

/**
 * API Filter configuration for dashboard filters
 */
type subGroupValues = Partial<Record<'subgroupValueSelector' | 'subgroupTextSelector', string>>
export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> & subGroupValues

/**
 * Filter style options for dashboard filters
 */
export type FilterStyle =
  | 'dropdown'
  | 'multi-select'
  | 'tab'
  | 'tab-simple'
  | 'nested-dropdown'
  | 'pill'
  | 'tab bar'
  | 'combobox'

/**
 * Shared filter configuration used across dashboard visualizations.
 * Extends the base filter functionality with dashboard-specific features.
 */
export type SharedFilter = FilterBase & {
  type?: 'urlfilter' | 'datafilter' | ''
  fileName?: string
  filterBy?: 'Query String' | 'File Name'
  filterStyle: FilterStyle
  queryParameter?: string
  setByQueryParameter?: string
  active?: string | string[]
  queuedActive?: string | string[]
  usedBy?: (string | number)[] // if number used by whole row, else used by specific viz
  order: 'cust' | 'desc' | 'asc' | 'column'
  parents?: string[]
  setBy?: string
  selectLimit?: number
  resetLabel?: string
  labels?: Record<string, any>
  key: string
  apiFilter?: APIFilter
  /**
   * Which dataset's URL to modify when applying this URL filter.
   *
   * - **Required** for File Name filters: Specifies which dataset's filename should be modified
   * - **Auto-inferred** for Query String filters: Automatically determined from widgets in `usedBy` array
   *
   * @example
   * // File Name filter - must specify which dataset
   * { type: 'urlfilter', filterBy: 'File Name', datasetKey: 'resp-data.json' }
   *
   * // Query String filter - auto-populated from usedBy
   * { type: 'urlfilter', filterBy: 'Query String', usedBy: ['chart1'] }
   */
  datasetKey?: string
  subGrouping: SubGrouping
  tier?: number
  // value to use when the filter loads
  defaultValue?: string
  /**
   * How to format the end file name when filter.filterBy is set to "File Name"
   *
   * @example * United States
   *
   *  Keep Spaces: United%20States.json
   *  Remove Spaces: UnitedStates.json
   *  Replace With Underscore: United_States.json
   **/
  whitespaceReplacement?: 'Keep Spaces' | 'Remove Spaces' | 'Replace With Underscore'
}

// Re-export strongly-typed dashboard filter system
export {
  TypedSharedFilter,
  SingleSelectDashboardFilter,
  MultiSelectDashboardFilter,
  NestedDropdownDashboardFilter,
  DashboardFilterStyle,
  FilterType,
  FilterBy,
  WhitespaceReplacement,
  // Type guards
  isMultiSelectDashboardFilter,
  isNestedDropdownDashboardFilter,
  isSingleSelectDashboardFilter,
  // Helper functions
  getDashboardFilterActive,
  hasDashboardActiveSelection,
  getDashboardSelectedValues,
  isURLFilter,
  isDataFilter,
  isQueryStringFilter,
  isFileNameFilter
} from './TypedSharedFilters'
