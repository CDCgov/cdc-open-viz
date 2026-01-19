/**
 * Strongly-typed dashboard filter system
 * Provides type-safe shared filter configurations for dashboards
 */

import { FilterBase, SubGrouping, OrderBy } from '@cdc/core/types/VizFilter'

/**
 * Filter styles available for dashboard shared filters
 */
export type DashboardFilterStyle =
  | 'dropdown'
  | 'multi-select'
  | 'tab'
  | 'tab-simple'
  | 'nested-dropdown'
  | 'pill'
  | 'tab bar'
  | 'combobox'

/**
 * Filter source types
 */
export type FilterType = 'urlfilter' | 'datafilter' | ''

/**
 * Filter target specification
 */
export type FilterBy = 'Query String' | 'File Name'

/**
 * Whitespace handling for file name filters
 */
export type WhitespaceReplacement = 'Keep Spaces' | 'Remove Spaces' | 'Replace With Underscore'

/**
 * API Filter configuration
 */
type subGroupValues = Partial<Record<'subgroupValueSelector' | 'subgroupTextSelector', string>>
export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> & subGroupValues

/**
 * Base configuration shared by all dashboard filter types
 */
type BaseDashboardFilterConfig = FilterBase & {
  key: string
  type?: FilterType
  fileName?: string
  filterBy?: FilterBy
  queryParameter?: string
  setByQueryParameter?: string
  usedBy?: (string | number)[] // if number used by whole row, else used by specific viz
  order: OrderBy
  parents?: string[]
  setBy?: string
  resetLabel?: string
  labels?: Record<string, string>
  apiFilter?: APIFilter
  datasetKey?: string
  subGrouping?: SubGrouping
  tier?: number
  defaultValue?: string
  whitespaceReplacement?: WhitespaceReplacement
}

/**
 * Single-select dashboard filter (dropdown, tab, pill, etc.)
 */
export type SingleSelectDashboardFilter = BaseDashboardFilterConfig & {
  filterStyle: 'dropdown' | 'tab' | 'tab-simple' | 'pill' | 'tab bar' | 'combobox'
  active?: string
  queuedActive?: string
}

/**
 * Multi-select dashboard filter
 */
export type MultiSelectDashboardFilter = BaseDashboardFilterConfig & {
  filterStyle: 'multi-select'
  active?: string[]
  queuedActive?: string[]
  selectLimit?: number
}

/**
 * Nested dropdown dashboard filter
 */
export type NestedDropdownDashboardFilter = BaseDashboardFilterConfig & {
  filterStyle: 'nested-dropdown'
  active?: string
  queuedActive?: string
  subGrouping: SubGrouping // Required for nested dropdowns
}

/**
 * Union type of all dashboard filter configurations
 * TypeScript can discriminate based on filterStyle
 */
export type TypedSharedFilter =
  | SingleSelectDashboardFilter
  | MultiSelectDashboardFilter
  | NestedDropdownDashboardFilter

/**
 * Type guards for dashboard filters
 */
export function isMultiSelectDashboardFilter(
  filter: TypedSharedFilter
): filter is MultiSelectDashboardFilter {
  return filter.filterStyle === 'multi-select'
}

export function isNestedDropdownDashboardFilter(
  filter: TypedSharedFilter
): filter is NestedDropdownDashboardFilter {
  return filter.filterStyle === 'nested-dropdown'
}

export function isSingleSelectDashboardFilter(
  filter: TypedSharedFilter
): filter is SingleSelectDashboardFilter {
  return (
    filter.filterStyle === 'dropdown' ||
    filter.filterStyle === 'tab' ||
    filter.filterStyle === 'tab-simple' ||
    filter.filterStyle === 'pill' ||
    filter.filterStyle === 'tab bar' ||
    filter.filterStyle === 'combobox'
  )
}

/**
 * Helpers for dashboard filters
 */
export function getDashboardFilterActive(filter: TypedSharedFilter): string | string[] | undefined {
  return filter.active
}

export function hasDashboardActiveSelection(filter: TypedSharedFilter): boolean {
  if (isMultiSelectDashboardFilter(filter)) {
    return Array.isArray(filter.active) && filter.active.length > 0
  }
  return typeof filter.active === 'string' && filter.active !== ''
}

export function getDashboardSelectedValues(filter: TypedSharedFilter): string[] {
  if (isMultiSelectDashboardFilter(filter)) {
    return filter.active || []
  }
  return filter.active ? [filter.active] : []
}

/**
 * Check if filter is a URL filter
 */
export function isURLFilter(filter: TypedSharedFilter): boolean {
  return filter.type === 'urlfilter'
}

/**
 * Check if filter is a data filter
 */
export function isDataFilter(filter: TypedSharedFilter): boolean {
  return filter.type === 'datafilter'
}

/**
 * Check if filter modifies query string
 */
export function isQueryStringFilter(filter: TypedSharedFilter): boolean {
  return filter.filterBy === 'Query String'
}

/**
 * Check if filter modifies file name
 */
export function isFileNameFilter(filter: TypedSharedFilter): boolean {
  return filter.filterBy === 'File Name'
}
