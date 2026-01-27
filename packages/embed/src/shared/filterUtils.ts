/**
 * Utilities for working with COVE filters
 */

import { CoveConfig } from './useConfigLoader'

export type FilterMetadata = {
  label: string
  key: string
  setByQueryParameter?: string
  values?: any[]
  defaultValue?: string
  active?: string
}

export type FilterState = {
  value: string
  hide: boolean
}

/**
 * Extract filter metadata from a COVE config
 * Handles both regular viz filters and dashboard shared filters
 */
export function extractFilters(config: CoveConfig | null): FilterMetadata[] {
  if (!config) return []

  // Try regular filters first (charts, maps, etc.)
  if (config.filters && Array.isArray(config.filters) && config.filters.length > 0) {
    return config.filters.map(filter => normalizeFilter(filter))
  }

  // Try dashboard shared filters
  if (config.dashboard?.sharedFilters && Array.isArray(config.dashboard.sharedFilters)) {
    return config.dashboard.sharedFilters.map(filter => normalizeFilter(filter))
  }

  return []
}

/**
 * Normalize a filter object to consistent metadata format
 *
 * Different filter types (chart filters vs dashboard filters) may use different field names.
 * This function provides fallbacks to handle these variations:
 *
 * - label: Priority for readability: label > setByQueryParameter > columnName
 * - key: May be called key, columnName, or id depending on the viz type
 * - setByQueryParameter: MUST be used exactly as provided. COVE only recognizes this specific
 *   field for URL parameters - there are no fallbacks. Filters without this field cannot be
 *   controlled via URL parameters.
 */
function normalizeFilter(filter: any): FilterMetadata {
  const normalized = {
    label: filter.label || filter.setByQueryParameter || filter.columnName || 'Unnamed Filter',
    key: filter.key || filter.columnName || String(filter.id) || '',
    setByQueryParameter: filter.setByQueryParameter,
    values: filter.values || [],
    defaultValue: filter.defaultValue,
    active: filter.active
  }
  return normalized
}

/**
 * Get initial/default value for a filter
 */
export function getDefaultFilterValue(filter: FilterMetadata): string {
  if (filter.defaultValue) return filter.defaultValue
  if (filter.active) return filter.active
  if (filter.values && filter.values.length > 0) return filter.values[0]
  return ''
}

/**
 * Initialize filter state from filter metadata
 */
export function initializeFilterState(filters: FilterMetadata[]): Record<string, FilterState> {
  const state: Record<string, FilterState> = {}

  filters.forEach(filter => {
    state[filter.key] = {
      value: getDefaultFilterValue(filter),
      hide: false
    }
  })

  return state
}

/**
 * Check if all filters have setByQueryParameter defined
 * Returns true if all filters can be controlled via URL, or if there are no filters
 */
export function allFiltersHaveQueryParam(filters: FilterMetadata[]): boolean {
  if (filters.length === 0) return true
  return filters.every(filter => !!filter.setByQueryParameter)
}

/**
 * Build URL parameters from filter state
 * Returns an object with URL parameters for both filter values and hide states
 */
export function buildFilterUrlParams(
  filters: FilterMetadata[],
  filterState: Record<string, FilterState>
): Record<string, string> {
  const urlParams: Record<string, string> = {}

  filters.forEach(filter => {
    if (!filter.setByQueryParameter) {
      return
    }

    const state = filterState[filter.key]
    if (!state) {
      return
    }

    // Add filter value
    if (state.value) {
      urlParams[filter.setByQueryParameter] = state.value
    }

    // Add hide parameter
    if (state.hide) {
      urlParams[`hide${filter.setByQueryParameter}`] = 'true'
    }
  })

  return urlParams
}
