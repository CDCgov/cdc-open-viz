import { SharedFilter } from '../types/SharedFilter'
import _ from 'lodash'

export const updateChildFilters = (newSharedFilters: SharedFilter[], data: Record<string, any>): SharedFilter[] => {
  const dataSet = Object.values(data).flat()
  // filter out Data type filters
  const dataFilters = newSharedFilters.filter(filter => filter.type === 'datafilter')
  const urlFilters = newSharedFilters.filter(filter => filter.type === 'urlfilter')
  // Find indexes of all child filters
  const childFilterIndexes: number[] = dataFilters
    .map((filter, index) => (filter.parents ? index : -1))
    .filter(index => index !== -1)
  if (childFilterIndexes.length === 0) return newSharedFilters

  // deep copy of the shared filters
  const updatedFilters = _.cloneDeep(dataFilters)

  // Update each child filter
  childFilterIndexes.forEach(childIndex => {
    const childFilter: SharedFilter = dataFilters[childIndex]
    const parentFilter: SharedFilter = dataFilters.find(filter => String(childFilter.parents) === String(filter.key))
    const isParentMultiSelect = parentFilter.filterStyle === 'multi-select'

    if (parentFilter) {
      // Filter dataset based on parent's active value
      const parentsActiveValues: string[] = dataSet.filter((d: Record<string, any>) => {
        if (isParentMultiSelect) {
          // If multi-select, check if the parent active array includes the value
          return parentFilter.active.includes(d[parentFilter.columnName])
        } else {
          return parentFilter.active === d[parentFilter.columnName]
        }
      })
      // Get unique active values for the child filter
      const uniqChildValues = _.uniq(parentsActiveValues.map(d => d[childFilter.columnName]).filter(Boolean))

      // Update the child filter if unique values exist
      if (uniqChildValues.length > 0) {
        updatedFilters[childIndex] = {
          ...childFilter,
          values: uniqChildValues
        }
      }
    }
  })

  return [...updatedFilters, ...urlFilters]
}
