import _ from 'lodash'
import { SharedFilter } from '../types/SharedFilter'
import { FILTER_STYLE } from '../types/FilterStyles'

/**
 * Recursively calculates the tier/depth of a filter based on its parent dependencies.
 * Root filters (no parents) are tier 1, children of root filters are tier 2, etc.
 */
const findFilterTier = (filters: SharedFilter[], sharedFilter: SharedFilter): number => {
  if (!sharedFilter.parents?.length) {
    return 1
  } else {
    const parent = filters.find(filter => sharedFilter.parents!.includes(filter.key))
    if (!parent) return 1
    return 1 + findFilterTier(filters, parent)
  }
}

/**
 * Calculates and assigns tier values to all filters, returns the maximum tier.
 * Mutates the filter objects by setting their tier property.
 */
function getMaxTierAndSetFilterTiers(filters: SharedFilter[]): number {
  let maxTier = 1
  filters.forEach(sharedFilter => {
    sharedFilter.tier = findFilterTier(filters, sharedFilter)
    if (sharedFilter.tier > maxTier) {
      maxTier = sharedFilter.tier
    }
  })
  return maxTier
}

/**
 * Checks if a filter is currently at its reset/incomplete state.
 * A filter is incomplete if it's visible AND:
 * - The active value is empty/null/undefined, OR
 * - The active value equals the resetLabel (if one is defined)
 */
export const isFilterAtResetState = (filter: SharedFilter): boolean => {
  // Only check filters that are visible to the user
  if (!filter.showDropdown) return false

  // Check if active value is empty/null/undefined
  const isEmptyValue = filter.active === '' || filter.active === null || filter.active === undefined

  // Check if active value equals the resetLabel
  const equalsResetLabel = filter.resetLabel && filter.resetLabel === filter.active

  return isEmptyValue || equalsResetLabel
}

/**
 * Filters data by applying filters of a specific tier.
 * Filters are applied hierarchically by tier to handle parent-child dependencies.
 */
function filterDataByTier(data = [], filters: SharedFilter[], tier: number) {
  const activeFilters = _.filter(filters, f => (f.resetLabel === f.active ? f.values?.includes(f.resetLabel) : true))
  return data.filter(row => {
    const foundMatchingFilter = activeFilters.find(filter => {
      const currentValue = row[filter.columnName]

      const selectedValue =
        filter.queuedActive || filter.filterStyle === FILTER_STYLE.nestedDropdown
          ? [filter.active, filter.subGrouping?.active]
          : filter.active
      let isNotTheSelectedValue = true
      if (Array.isArray(selectedValue)) {
        isNotTheSelectedValue = !selectedValue.includes(currentValue)
      } else {
        isNotTheSelectedValue = selectedValue && currentValue != selectedValue
      }

      if (
        filter.filterStyle === 'nested-dropdown' &&
        filter.subGrouping &&
        filter.active === currentValue &&
        isNotTheSelectedValue === false
      ) {
        const subGroupActive = filter.subGrouping.active
        const selectedSubGroupValue = row[filter.subGrouping.columnName]
        isNotTheSelectedValue = subGroupActive && selectedSubGroupValue !== subGroupActive
      }

      const isMatchingTier = filter.tier === tier
      // Only apply client-side filtering for datafilter (urlfilters modify the API endpoint instead)
      if (filter.type !== 'urlfilter' && isMatchingTier && isNotTheSelectedValue) {
        return true
      }
    })
    return !foundMatchingFilter
  })
}

/**
 * Filters data based on shared filter configurations.
 * Returns empty array if any filter is at its reset state (incomplete selection).
 * Otherwise applies filters hierarchically by tier to handle parent-child dependencies.
 */
export const filterData = (filters: SharedFilter[], _data: Object[]): Object[] => {
  const maxTier = getMaxTierAndSetFilterTiers(filters)

  // Check if any filters are currently at their reset state
  const hasResetFilters = filters.some(isFilterAtResetState)

  // If any filter is at reset state, return empty data to show "no data" message
  if (hasResetFilters) {
    return []
  }

  for (let i = 0; i < maxTier; i++) {
    const lastIteration = i === maxTier - 1

    const filteredData = filterDataByTier(_data, filters, i + 1)

    if (lastIteration) {
      // not sure if this last run of filterDataByTier() function is necessary.
      return filterDataByTier(filteredData, filters, maxTier - 1)
    }
  }
}
