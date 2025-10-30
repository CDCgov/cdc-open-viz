import { SharedFilter } from '../types/SharedFilter'
import { APIFilterDropdowns } from '../components/DashboardFilters'
import { FILTER_STYLE } from '../types/FilterStyles'

/**
 * Determines the reset value for a filter based on its configuration.
 * When forceEmpty is true (like when clicking "Clear Filters"), always returns empty.
 * Otherwise uses priority: defaultValue > empty string (for resetLabel) > first API option
 * Note: resetLabel is for display purposes only. When present, we return empty string
 * so the placeholder option renders correctly in the dropdown.
 */
export const getFilterResetValue = (
  filter: SharedFilter,
  apiFilterDropdowns: APIFilterDropdowns,
  forceEmpty: boolean = false
): string | undefined => {
  // When clearing filters, always reset to empty/resetLabel state
  if (forceEmpty) {
    // Return empty string to show reset label or placeholder, undefined falls back to first value
    return ''
  }

  // If filter has a defaultValue, use that (for initial load)
  if (filter.defaultValue) {
    return filter.defaultValue
  }
  // If filter has a resetLabel, return empty string so placeholder renders
  if (typeof filter.resetLabel === 'string') {
    return ''
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

    // When resetValue is explicitly empty/undefined, clear both group and subgroup
    if (resetValue === '' || resetValue === undefined) {
      filter.active = resetValue || ''
      filter.subGrouping.active = ''
    } else if (options && options.length > 0) {
      // Use specific resetValue or fall back to first option
      const selectedOption = options.find(opt => opt.value === resetValue) || options[0]
      filter.active = selectedOption.value
      if (selectedOption.subOptions && selectedOption.subOptions.length > 0) {
        filter.subGrouping.active = selectedOption.subOptions[0].value
      } else {
        filter.subGrouping.active = ''
      }
    } else {
      // No options available, use resetValue or empty
      filter.active = resetValue || ''
      filter.subGrouping.active = ''
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
