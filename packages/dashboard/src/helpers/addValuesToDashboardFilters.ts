import _ from 'lodash'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { SharedFilter } from '../types/SharedFilter'
import { handleSorting } from '@cdc/core/components/Filters'
import { mapFilterValues } from './getFilteredData'
import { stateToIso } from '@cdc/map/src/data/supported-geos.js'

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
  return filters?.map((filter, index) => {
    if (filtersToSkip.includes(index)) return filter
    if (filter.type === 'urlfilter') return filter
    const filterCopy = _.cloneDeep(filter)
    const filterValues = generateValuesForFilter(getSelector(filter), data)

    filterCopy.values = filterValues

    if (filter.type === 'configFilter' && filter.visualizationType === 'map' && filter.propertyToUpdate === 'geoType') {
      filterCopy.values = mapFilterValues
    }

    if (
      filter.type === 'configFilter' &&
      filter.visualizationType === 'map' &&
      filter.propertyToUpdate === 'focusedState'
    ) {
      filterCopy.values = Object.keys(stateToIso)
    }

    if (filterValues.length > 0) {
      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else if (filter.multiSelect) {
        const defaultValues = filterCopy.values
        const active: string[] = Array.isArray(filterCopy.active) ? filterCopy.active : [filterCopy.active]
        filterCopy.active = active.filter(val => defaultValues.includes(val))
      } else {
        const defaultLabel = filters.find(filter => filter.resetLabel)
        const defaultValue = defaultLabel ? defaultLabel.resetLabel : filterCopy.active || filterCopy.values[0]
        filterCopy.active = defaultValue
      }
    }
    return handleSorting(filterCopy)
  })
}
