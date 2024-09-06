import _ from 'lodash'
import { SharedFilter } from '../types/SharedFilter'

const findFilterTier = (filters: SharedFilter[], sharedFilter: SharedFilter) => {
  if (!sharedFilter.parents?.length) {
    return 1
  } else {
    const parent = filters.find(filter => sharedFilter.parents!.includes(filter.key))
    if (!parent) return 1
    return 1 + findFilterTier(filters, parent)
  }
}

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

function filter(data = [], filters: SharedFilter[], condition) {
  return data.filter(row => {
    const foundMatchingFilter = filters.find(filter => {
      const currentValue = row[filter.columnName]

      const selectedValue = filter.queuedActive || filter.active
      let isNotTheSelectedValue = true
      if (Array.isArray(selectedValue)) {
        isNotTheSelectedValue = !selectedValue.includes(currentValue)
      } else {
        isNotTheSelectedValue = selectedValue && currentValue != selectedValue
      }

      if ((filter.filterStyle === 'nested-dropdown' && filter.subGrouping && filter.active === currentValue, isNotTheSelectedValue === false)) {
        const subGroupActive = filter.subGrouping.active
        const value = row[filter.subGrouping.columnName]
        if (subGroupActive === undefined || value !== subGroupActive) {
          isNotTheSelectedValue = true
        }
      }

      const isFirstOccurrenceOfTier = filter.tier === condition
      if (filter.type !== 'urlfilter' && isFirstOccurrenceOfTier && isNotTheSelectedValue) {
        return true
      }
    })
    return !foundMatchingFilter
  })
}

export const filterData = (filters: SharedFilter[], _data: Object[]): Object[] => {
  const maxTier = getMaxTierAndSetFilterTiers(filters)

  for (let i = 0; i < maxTier; i++) {
    const lastIteration = i === maxTier - 1

    const filteredData = filter(_data, filters, i + 1)

    if (lastIteration) {
      // not sure if this last run of filter() function is necessary.
      return filter(filteredData, filters, maxTier - 1)
    }
  }
}
