/**
 * Strongly-typed filter system with discriminated unions
 * Provides type-safe filter configurations based on filterStyle
 */

import { FilterBase, SubGrouping, OrderBy } from './VizFilter'

/**
 * Filter styles available for visualizations
 */
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

/**
 * Base configuration shared by all filter types
 */
type BaseFilterConfig = FilterBase & {
  label: string
  labels?: Record<string, string>
  order: OrderBy
  orderColumn?: string
  orderedValues?: string[] // should only exist if the order is 'cust'
  queryParameter?: string
  setByQueryParameter?: string
  subGrouping?: SubGrouping
  type?: 'url'
  filterFootnotes?: boolean
  defaultValue?: string
  resetLabel?: string
}

/**
 * Single-select filter configuration (dropdown, tab, pill, etc.)
 * User can only select one value at a time
 */
export type SingleSelectFilter = BaseFilterConfig & {
  filterStyle: 'dropdown' | 'tab' | 'tab-simple' | 'pill' | 'tab bar' | 'dropdown bar' | 'combobox'
  active: string
  queuedActive: string
}

/**
 * Multi-select filter configuration
 * User can select multiple values simultaneously
 */
export type MultiSelectFilter = BaseFilterConfig & {
  filterStyle: 'multi-select'
  active: string[]
  queuedActive: string[]
  selectLimit?: number
}

/**
 * Nested dropdown filter configuration
 * Supports hierarchical/nested selection
 */
export type NestedDropdownFilter = BaseFilterConfig & {
  filterStyle: 'nested-dropdown'
  active: string
  queuedActive: string
  subGrouping: SubGrouping // Required for nested dropdowns
}

/**
 * Union type of all filter configurations
 * TypeScript can discriminate based on filterStyle
 */
export type TypedVizFilter = SingleSelectFilter | MultiSelectFilter | NestedDropdownFilter

/**
 * Type guard to check if filter is multi-select
 */
export function isMultiSelectFilter(filter: TypedVizFilter): filter is MultiSelectFilter {
  return filter.filterStyle === 'multi-select'
}

/**
 * Type guard to check if filter is nested dropdown
 */
export function isNestedDropdownFilter(filter: TypedVizFilter): filter is NestedDropdownFilter {
  return filter.filterStyle === 'nested-dropdown'
}

/**
 * Type guard to check if filter is single-select
 */
export function isSingleSelectFilter(filter: TypedVizFilter): filter is SingleSelectFilter {
  return (
    filter.filterStyle === 'dropdown' ||
    filter.filterStyle === 'tab' ||
    filter.filterStyle === 'tab-simple' ||
    filter.filterStyle === 'pill' ||
    filter.filterStyle === 'tab bar' ||
    filter.filterStyle === 'dropdown bar' ||
    filter.filterStyle === 'combobox'
  )
}

/**
 * Helper to get the active value(s) from any filter type
 */
export function getFilterActive(filter: TypedVizFilter): string | string[] {
  return filter.active
}

/**
 * Helper to check if a filter has an active selection
 */
export function hasActiveSelection(filter: TypedVizFilter): boolean {
  if (isMultiSelectFilter(filter)) {
    return filter.active.length > 0
  }
  return filter.active !== '' && filter.active !== undefined
}

/**
 * Helper to get all selected values as an array (for consistency)
 */
export function getSelectedValues(filter: TypedVizFilter): string[] {
  if (isMultiSelectFilter(filter)) {
    return filter.active
  }
  return filter.active ? [filter.active] : []
}
