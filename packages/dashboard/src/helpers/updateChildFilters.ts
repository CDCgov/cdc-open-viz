import { SharedFilter } from '../types/SharedFilter'
import _ from 'lodash'
import { mergeCustomOrderValues } from '@cdc/core/helpers/mergeCustomOrderValues'
import { handleSorting } from '@cdc/core/components/Filters'

export const updateChildFilters = (newSharedFilters: SharedFilter[], data: Record<string, any>): SharedFilter[] => {
  const dataSet = Object.values(data).flat()

  // Find indexes of all child filters
  const childFilterIndexes: number[] = newSharedFilters
    .map((filter, index) => (filter.type === 'datafilter' && filter.parents?.length ? index : -1))
    .filter(index => index !== -1)
  if (childFilterIndexes.length === 0) return newSharedFilters

  // deep copy of the shared filters
  const updatedFilters = _.cloneDeep(newSharedFilters)

  // Update each child filter
  childFilterIndexes.forEach(childIndex => {
    const childFilter: SharedFilter = newSharedFilters[childIndex]

    // Get all parent filters for this child
    const parentFilters: SharedFilter[] = newSharedFilters.filter(filter => childFilter.parents?.includes(filter.key))

    if (parentFilters.length > 0) {
      const filteredDataSet = dataSet.filter((d: Record<string, any>) => {
        return parentFilters.every(parentFilter => {
          const parentActive = parentFilter.active
          if (Array.isArray(parentActive)) {
            return parentActive.includes(d[parentFilter.columnName])
          }
          return parentActive == d[parentFilter.columnName]
        })
      })

      // Get unique active values for the child filter from the filtered dataset
      const childFilterValues = _.uniq(filteredDataSet.map(d => d[childFilter.columnName]).filter(Boolean))

      // Prepare filter with values and orderedValues for sorting
      const filterToSort = {
        ...childFilter,
        values: childFilterValues,
        orderedValues: mergeCustomOrderValues(childFilterValues, childFilter.orderedValues, childFilter.order)
      }

      // Use handleSorting to apply proper sorting logic (handles asc/desc/cust/column)
      const sortedFilter = handleSorting(filterToSort)

      // Update the child filter with new values (even if empty)
      const isChildMultiSelect = childFilter.filterStyle === 'multi-select'
      const activeValue =
        sortedFilter.values.length > 0
          ? isChildMultiSelect
            ? sortedFilter.values
            : childFilter.active && sortedFilter.values.includes(childFilter.active)
            ? childFilter.active
            : childFilter.defaultValue && sortedFilter.values.includes(childFilter.defaultValue)
            ? childFilter.defaultValue
            : sortedFilter.values[0]
          : isChildMultiSelect
          ? []
          : childFilter.active || ''

      updatedFilters[childIndex] = {
        ...childFilter,
        values: sortedFilter.values,
        orderedValues: sortedFilter.orderedValues,
        active: activeValue
      }
    }
  })
  return updatedFilters
}
