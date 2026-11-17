import { SharedFilter } from '../types/SharedFilter'
import cloneDeep from 'lodash/cloneDeep'
import uniq from 'lodash/uniq'
import { mergeCustomOrderValues } from '@cdc/core/helpers/mergeCustomOrderValues'
import { handleSorting } from '@cdc/core/components/Filters'
import { isShowAllSelection, isShowAllEnabled, normalizeMultiSelectActive, withShowAllOption } from './showAllOption'

export const updateChildFilters = (newSharedFilters: SharedFilter[], data: Record<string, any>): SharedFilter[] => {
  const dataSet = Object.values(data).flat()

  // Find indexes of all child filters
  const childFilterIndexes: number[] = newSharedFilters
    .map((filter, index) => (filter.type === 'datafilter' && filter.parents?.length ? index : -1))
    .filter(index => index !== -1)
  if (childFilterIndexes.length === 0) return newSharedFilters

  // deep copy of the shared filters
  const updatedFilters = cloneDeep(newSharedFilters)

  // Update each child filter
  childFilterIndexes.forEach(childIndex => {
    const childFilter: SharedFilter = newSharedFilters[childIndex]

    // Get all parent filters for this child
    const parentFilters: SharedFilter[] = newSharedFilters.filter(filter => childFilter.parents?.includes(filter.key))

    if (parentFilters.length > 0) {
      const filteredDataSet = dataSet.filter((d: Record<string, any>) => {
        return parentFilters.every(parentFilter => {
          if (isShowAllSelection(parentFilter)) return true
          const parentActive = isShowAllEnabled(parentFilter)
            ? normalizeMultiSelectActive(parentFilter, parentFilter.active)
            : parentFilter.active
          if (Array.isArray(parentActive)) {
            const currentValue = d[parentFilter.columnName]
            return parentFilter.type === 'datafilter' && parentFilter.filterStyle === 'multi-select'
              ? parentActive.some(
                  value =>
                    value === currentValue ||
                    (typeof currentValue === 'number' &&
                      typeof value === 'string' &&
                      value.trim() !== '' &&
                      Number(value) === currentValue)
                )
              : parentActive.includes(currentValue)
          }
          return parentActive == d[parentFilter.columnName]
        })
      })

      // Get unique active values for the child filter from the filtered dataset
      const childFilterValues = withShowAllOption(
        childFilter,
        uniq(filteredDataSet.map(d => d[childFilter.columnName]).filter(Boolean))
      )

      // Prepare filter with values and orderedValues for sorting
      const filterToSort = {
        ...childFilter,
        values: childFilterValues,
        orderedValues: mergeCustomOrderValues(childFilterValues, childFilter.orderedValues, childFilter.order)
      }

      // Use handleSorting to apply proper sorting logic (handles asc/desc/cust/column)
      const sortedFilter = handleSorting(filterToSort)
      if (isShowAllEnabled(sortedFilter)) {
        sortedFilter.orderedValues = withShowAllOption(sortedFilter, sortedFilter.orderedValues || sortedFilter.values)
      }

      const normalizedChildActive = normalizeMultiSelectActive(
        childFilter,
        childFilter.active ?? childFilter.defaultValue ?? 'All'
      )
      const validChildActive = normalizedChildActive.filter(value => sortedFilter.values.includes(value))
      const showAllChildActive =
        validChildActive.length || normalizedChildActive.length === 0
          ? validChildActive
          : [
              childFilter.defaultValue && sortedFilter.values.includes(childFilter.defaultValue)
                ? childFilter.defaultValue
                : 'All'
            ]

      // Update the child filter with new values (even if empty)
      const isChildMultiSelect = childFilter.filterStyle === 'multi-select'
      const activeMultiSelectValues = Array.isArray(childFilter.active) ? childFilter.active : [childFilter.active]
      const validActiveMultiSelectValues = activeMultiSelectValues.filter(value => sortedFilter.values.includes(value))
      const activeValue = isShowAllEnabled(childFilter)
        ? showAllChildActive
        : sortedFilter.values.length > 0
        ? isChildMultiSelect
          ? childFilter.order === 'data'
            ? validActiveMultiSelectValues.length
              ? validActiveMultiSelectValues
              : childFilter.defaultValue && sortedFilter.values.includes(childFilter.defaultValue)
              ? [childFilter.defaultValue]
              : [sortedFilter.values[0]]
            : sortedFilter.values
          : childFilter.active && sortedFilter.values.includes(childFilter.active)
          ? childFilter.active
          : childFilter.defaultValue && sortedFilter.values.includes(childFilter.defaultValue)
          ? childFilter.defaultValue
          : childFilter.order === 'data'
          ? sortedFilter.values[0]
          : childFilter.resetLabel || sortedFilter.values[0]
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
