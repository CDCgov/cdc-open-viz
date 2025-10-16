import { SharedFilter } from '../types/SharedFilter'
import { APIFilterDropdowns } from '../components/DashboardFilters'
import { FILTER_STYLE } from '../types/FilterStyles'

/**
 * Determines the reset value for a filter based on its configuration.
 * Priority: resetLabel > defaultValue > first API option
 */
export const getFilterResetValue = (
  filter: SharedFilter,
  apiFilterDropdowns: APIFilterDropdowns
): string | undefined => {
  // If filter has a resetLabel, use it
  if (filter.resetLabel) {
    return filter.resetLabel
  }
  // If filter has a defaultValue, use that
  if (filter.defaultValue) {
    return filter.defaultValue
  }
  // Otherwise, use first available value if API filter
  if (filter.apiFilter) {
    const _key = filter.apiFilter.apiEndpoint
    const options = apiFilterDropdowns[_key]
    if (options && options.length > 0) {
      return options[0].value
    }
  }
  return undefined
}

/**
 * Resets a filter's active and queuedActive values based on its filter style.
 * Handles multi-select, nested-dropdown, and standard dropdown styles.
 */
export const resetFilterToValue = (
  filter: SharedFilter,
  resetValue: string | undefined,
  apiFilterDropdowns: APIFilterDropdowns
): void => {
  // Handle multi-select filters
  if (filter.filterStyle === FILTER_STYLE.multiSelect) {
    filter.active = resetValue ? [resetValue] : []
    filter.queuedActive = undefined
  } else if (filter.filterStyle === FILTER_STYLE.nestedDropdown) {
    // For nested dropdowns, reset both group and subgroup
    const _key = filter.apiFilter?.apiEndpoint
    const options = apiFilterDropdowns[_key]
    if (options && options.length > 0) {
      const firstOption = options[0]
      filter.active = resetValue || firstOption.value
      if (firstOption.subOptions && firstOption.subOptions.length > 0) {
        filter.subGrouping.active = firstOption.subOptions[0].value
      }
    }
    filter.queuedActive = undefined
  } else {
    // Standard dropdown
    filter.active = resetValue
    filter.queuedActive = undefined
  }
}

/**
 * Clears dropdown cache for child filters that have parent dependencies.
 * Sets them to empty arrays so they appear disabled without loading state.
 */
export const clearChildFilterDropdowns = (
  sharedFilters: SharedFilter[],
  apiFilterDropdowns: APIFilterDropdowns
): APIFilterDropdowns => {
  const updatedDropdowns = { ...apiFilterDropdowns }
  sharedFilters.forEach(filter => {
    if (filter.apiFilter && filter.parents && filter.parents.length > 0) {
      // Set to empty array so they show as disabled without loading state
      updatedDropdowns[filter.apiFilter.apiEndpoint] = []
    }
  })
  return updatedDropdowns
}
