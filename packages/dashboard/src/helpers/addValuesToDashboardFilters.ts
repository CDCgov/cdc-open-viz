import _ from 'lodash'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { SharedFilter } from '../types/SharedFilter'
import { handleSorting } from '@cdc/core/components/Filters'

// Gets filter values from dataset
const generateValuesForFilter = (columnName: string, data: Record<string, any[]>) => {
  const valuesSet = new Set<string>()

  // Iterate over all data sets
  const datasets = Object.values(data) || []
  datasets.forEach((rows: any[]) => {
    // Iterate over each row in the dataset
    rows?.forEach(row => {
      const value = row[columnName]
      if (value !== undefined) {
        // Normalize the value by trimming
        const normalizedValue = String(value).trim()
        valuesSet.add(normalizedValue)
      }
    })
  })

  // Convert Set back to array to return
  return Array.from(valuesSet)
}

const getSelector = (filter: SharedFilter) => {
  return filter.type === 'urlfilter' ? filter.apiFilter?.valueSelector : filter.columnName
}

export const addValuesToDashboardFilters = (
  filters: SharedFilter[],
  data: Record<string, any[]>,
  filtersToSkip: number[] = []
): Array<SharedFilter> => {
  const result = filters?.map((filter, index) => {
    if (filtersToSkip.includes(index)) return filter
    if (filter.type === 'urlfilter') return filter
    const filterCopy = _.cloneDeep(filter)
    const filterValues = generateValuesForFilter(getSelector(filter), data)
    filterCopy.values = filterValues

    if (filterValues.length > 0) {
      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else if (filter.multiSelect) {
        const defaultValues = filterCopy.values
        const active: string[] = Array.isArray(filterCopy.active) ? filterCopy.active : [filterCopy.active]
        filterCopy.active = active.filter(val => defaultValues.includes(val))
      } else {
        // Preserve existing active value if it's valid in the new filter values
        const currentActive = filterCopy.active
        const isCurrentActiveValid = currentActive && filterValues.includes(currentActive)

        // Check if this is an intentional clear (empty string, but not undefined during initial load)
        const isIntentionalClear = currentActive === ''

        if (isCurrentActiveValid) {
          // Keep the current active value
          filterCopy.active = currentActive
        } else if (isIntentionalClear) {
          // Don't override intentional clears with defaultValue
          filterCopy.active = currentActive
        } else {
          // Set to default value if current active is undefined (initial load) or invalid
          const hasResetLabel = filters.find(filter => filter.resetLabel)
          const defaultValue = hasResetLabel ? hasResetLabel.resetLabel : filterCopy.values[0]
          const newValue = filterCopy.defaultValue || defaultValue
          filterCopy.active = newValue
        }
      }
    }

    // Handle nested dropdown subGrouping.active property
    if (filterCopy.subGrouping && filterCopy.subGrouping.valuesLookup) {
      const groupName = filterCopy.active as string
      const subGroupingFilter = {
        ...filterCopy.subGrouping,
        values: filterCopy.subGrouping.valuesLookup[groupName]?.values || []
      }
      const queryStringFilterValue = getQueryStringFilterValue(subGroupingFilter)
      const groupActive = groupName || filterCopy.values[0]
      const defaultSubValue = filterCopy.subGrouping.valuesLookup[groupActive as string]?.values[0]

      // Priority order: query string > existing active > configured default > first available value
      let activeValue = queryStringFilterValue || filterCopy.subGrouping.active

      // If we have a configured default value and it exists in the current group's options, use it
      if (!activeValue && filterCopy.subGrouping.defaultValue) {
        const currentGroupValues = filterCopy.subGrouping.valuesLookup[groupActive as string]?.values || []
        if (currentGroupValues.includes(filterCopy.subGrouping.defaultValue)) {
          activeValue = filterCopy.subGrouping.defaultValue
        }
      }

      filterCopy.subGrouping.active = activeValue || defaultSubValue
    }

    return handleSorting(filterCopy)
  })
  return result
}
