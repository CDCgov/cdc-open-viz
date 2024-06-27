import _ from 'lodash'
import { SharedFilter } from '../types/SharedFilter'
import { generateValuesForFilter } from './generateValuesForFilter'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'

export const addValuesToSharedFilters = (sharedFilters: SharedFilter[], data: Record<string, any[]>) => {
  return sharedFilters.map(filter => {
    const filterCopy = _.cloneDeep(filter)

    const filterValues = generateValuesForFilter(filter.columnName, data)
    filterCopy.values = filterValues
    if (filterValues.length > 0) {
      const defaultValues = filterCopy.pivot ? filterCopy.values : filterCopy.values[0]

      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else {
        filterCopy.active = filterCopy.active && filterValues.includes(filterCopy.active) ? filterCopy.active : defaultValues
      }
    }
    return filterCopy
  })
}
