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

function filter(data, filters, condition) {
  return data.filter(row => {
    const found = filters.find(filter => {
      const currentValue = row[filter.columnName]
      const selectedValue = filter.queuedActive || filter.active
      const isNotTheSelectedValue = selectedValue && currentValue != selectedValue
      const isFirstOccurrenceOfTier = filter.tier === condition
      if (filter.type !== 'urlfilter' && isFirstOccurrenceOfTier && isNotTheSelectedValue) {
        return true
      }
    })
    return !found
  })
}

function setFilterValuesAndActiveFilter(filters: SharedFilter[], filteredData: Object[], i: number) {
  filters.find(sharedFilter => {
    if (sharedFilter.tier === i + 2) {
      sharedFilter.values = _.uniq(filteredData.map(row => row[sharedFilter.columnName]))
      const valueAlreadySelected = sharedFilter.values.includes(sharedFilter.active)
      if (!valueAlreadySelected && sharedFilter.values.length > 0) {
        sharedFilter.active = sharedFilter.values[0]
      }
      return true
    }
  })
}

/** This function returns filtered data.
 * It also manipulates the filters by adding: tiers, filterOptions, and default selections */
export const filterData = (filters: SharedFilter[], _data: Object[]): Object[] => {
  const maxTier = getMaxTierAndSetFilterTiers(filters)

  for (let i = 0; i < maxTier; i++) {
    const lastIteration = i === maxTier - 1

    const filteredData = filter(_data, filters, i + 1)

    setFilterValuesAndActiveFilter(filters, filteredData, i)

    if (lastIteration) {
      // not sure if this last run of filter() function is necessary.
      return filter(filteredData, filters, maxTier - 1)
    }
  }
}
