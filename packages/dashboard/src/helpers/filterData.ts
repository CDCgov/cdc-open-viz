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
  return data ? data.filter(row => {
    const found = filters.find(filter => {
      if (filter.pivot) return false
      const currentValue = row[filter.columnName]
      const selectedValue = filter.queuedActive || filter.active
      const isNotTheSelectedValue = selectedValue && currentValue != selectedValue
      const isFirstOccurrenceOfTier = filter.tier === condition
      if (filter.type !== 'urlfilter' && isFirstOccurrenceOfTier && isNotTheSelectedValue) {
        return true
      }
    })
    return !found
  })  : []
}

function setFilterValuesAndActiveFilter(filters: SharedFilter[], filteredData: Object[], i: number) {
  filters.forEach(sharedFilter => {
    if (sharedFilter.pivot) {
      sharedFilter.values = _.uniq(filteredData.map(row => row[sharedFilter.columnName]))
    } else if (sharedFilter.tier === i + 2 && !Array.isArray(sharedFilter.active)) {
      sharedFilter.values = _.uniq(filteredData.map(row => row[sharedFilter.columnName]))
      const valueAlreadySelected = sharedFilter.values.includes(sharedFilter.active)
      if (!valueAlreadySelected && sharedFilter.values.length > 0) {
        sharedFilter.active = sharedFilter.values[0]
      }
    }
  })
}

const pivotData = (data, pivotFilter: SharedFilter) => {
  const pivotActive = pivotFilter.active as string[]
  const inactive = pivotFilter.values.filter(value => !pivotActive.includes(value))
  const pivotColumn = pivotFilter.columnName
  const valueColumn = pivotFilter.pivot
  const grouped = _.groupBy(data, val => val[pivotColumn])
  const newData = []
  for (const key in grouped) {
    const group = grouped[key]

    group.forEach((val, index) => {
      const row = newData[index] || {}
      if (!inactive.includes(key)) row[key] = val[valueColumn]
      const toAdd = _.omit(val, [pivotColumn, valueColumn, ...inactive])
      newData[index] = { ...toAdd, ...row }
    })
  }
  return newData
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
      const pivotFilter = filters.find(filter => filter.pivot)
      if (pivotFilter) {
        return pivotData(filteredData, pivotFilter)
      }
      // not sure if this last run of filter() function is necessary.
      return filter(filteredData, filters, maxTier - 1)
    }
  }
}
