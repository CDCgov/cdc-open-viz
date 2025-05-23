import { SharedFilter } from '../types/SharedFilter'
import _ from 'lodash'

export const updateChildFilters = (newSharedFilters: SharedFilter[], data: Record<string, any>): SharedFilter[] => {
  const dataSet = Object.values(data).flat()

  // Find indexes of all child filters
  const childFilterIndexes: number[] = newSharedFilters
    .map((filter, index) => (filter.type === 'datafilter' && filter.parents ? index : -1))
    .filter(index => index !== -1)
  if (childFilterIndexes.length === 0) return newSharedFilters

  // deep copy of the shared filters
  const updatedFilters = _.cloneDeep(newSharedFilters)

  // Update each child filter
  childFilterIndexes.forEach(childIndex => {
    const childFilter: SharedFilter = newSharedFilters[childIndex]
    const parentFilter: SharedFilter = newSharedFilters.find(
      filter => String(childFilter.parents) === String(filter.key)
    )

    if (parentFilter) {
      // Filter dataset based on parent's active value
      const parentsActiveValues: string[] = dataSet.filter((d: Record<string, any>) => {
        return parentFilter.active?.includes(d[parentFilter.columnName])
      })
      // Get unique active values for the child filter
      const childFilterValues = _.uniq(parentsActiveValues.map(d => d[childFilter.columnName]).filter(Boolean))

      // Update the child filter if unique values exist
      if (childFilterValues.length > 0) {
        const isChildMultiSelect = childFilter.filterStyle === 'multi-select'
        const activeValue = isChildMultiSelect
          ? childFilterValues
          : childFilter.active
          ? childFilter.active
          : childFilter.defaultValue
          ? childFilter.defaultValue
          : childFilterValues[0]
        updatedFilters[childIndex] = {
          ...childFilter,
          values: childFilterValues,
          active: activeValue
        }
      }
    }
  })
  return updatedFilters
}
