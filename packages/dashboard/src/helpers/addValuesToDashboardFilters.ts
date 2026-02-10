import _ from 'lodash'
import { getQueryStringFilterValue, isFilterHiddenByQuery } from '@cdc/core/helpers/queryStringUtils'
import { SharedFilter } from '../types/SharedFilter'
import { handleSorting } from '@cdc/core/components/Filters'
import { mergeCustomOrderValues } from '@cdc/core/helpers/mergeCustomOrderValues'

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

    // Only generate values from data if not pre-configured
    const hasPreConfiguredValues = filter.values && filter.values.length > 0
    const filterValues = hasPreConfiguredValues ? filter.values : generateValuesForFilter(getSelector(filter), data)

    filterCopy.values = filterValues

    // Merge new values with existing custom order (fixes DEV-11740 & DEV-11376)
    filterCopy.orderedValues = mergeCustomOrderValues(filterValues, filterCopy.orderedValues, filterCopy.order)

    if (filterValues.length > 0) {
      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else if (filter.multiSelect) {
        const defaultValues = filterCopy.values
        const active: string[] = Array.isArray(filterCopy.active) ? filterCopy.active : [filterCopy.active]
        filterCopy.active = active.filter(val => defaultValues.includes(val))
      } else {
        // Initialize active from defaultValue if not already set
        // OR if defaultValue exists, always use it (overrides stale active from saved config)
        if (filterCopy.defaultValue) {
          filterCopy.active = filterCopy.defaultValue
        } else if (!filterCopy.active) {
          filterCopy.active = filterCopy.resetLabel || filterCopy.values[0]
        }
      }
    }

    // Check if filter should be hidden by query parameter
    if (isFilterHiddenByQuery(filterCopy)) {
      filterCopy.showDropdown = false
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
      const currentGroupValues = filterCopy.subGrouping.valuesLookup[groupActive as string]?.values || []
      const defaultSubValue = currentGroupValues[0]

      // Priority order: query string > configured default > existing active > first available value
      let activeValue: string | undefined

      if (queryStringFilterValue) {
        // 1. Query string parameter takes highest priority
        activeValue = queryStringFilterValue
      } else if (
        filterCopy.subGrouping.defaultValue &&
        currentGroupValues.includes(filterCopy.subGrouping.defaultValue)
      ) {
        // 2. Use configured defaultValue if it exists and is valid for the current group
        activeValue = filterCopy.subGrouping.defaultValue
      } else if (filterCopy.subGrouping.active && currentGroupValues.includes(filterCopy.subGrouping.active)) {
        // 3. Keep existing active value if it's valid for the current group
        activeValue = filterCopy.subGrouping.active
      }

      filterCopy.subGrouping.active = activeValue || defaultSubValue
    }

    return handleSorting(filterCopy)
  })
  return result
}
