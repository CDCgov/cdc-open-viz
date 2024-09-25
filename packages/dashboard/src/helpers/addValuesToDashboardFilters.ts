import _ from 'lodash'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { SharedFilter } from '../types/SharedFilter'

// Gets filter values from dataset
const generateValuesForFilter = (columnName, data: Record<string, any[]>) => {
  const values: string[] = []
  // data is a dataset this loops through ALL datasets to find matching values
  // not sure if this is desired behavior

  const d = Object.values(data) || []
  d.forEach((rows: any[]) => {
    rows?.forEach(row => {
      const value = row[columnName]
      if (value !== undefined && !values.includes(value)) {
        values.push(String(value))
      }
    })
  })
  return values
}

const getSelector = (filter: SharedFilter) => {
  return filter.type === 'urlfilter' ? filter.apiFilter?.valueSelector : filter.columnName
}

export const addValuesToDashboardFilters = (filters: SharedFilter[], data: Record<string, any[]>): Array<SharedFilter> => {
  return filters?.map(filter => {
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
        const defaultValue = filterCopy.values[0] || filterCopy.active
        const active = Array.isArray(filterCopy.active) ? filterCopy.active[0] : filterCopy.active
        filterCopy.active = filterCopy.values.includes(active) ? active : defaultValue
      }
    }
    return filterCopy
  })
}
