import _ from 'lodash'
import { getQueryParams, updateQueryString } from '../../../helpers/queryStringUtils'

export const getChangedFilters = (filters, index, value, filterBehavior) => {
  const newFilters = _.cloneDeep(filters)
  const newFilter = newFilters[index]
  if (filterBehavior === 'Apply Button') {
    newFilter.queuedActive = value
  } else {
    if (newFilter.filterStyle !== 'nested-dropdown') {
      newFilter.active = value
    } else {
      newFilter.active = value[0]
      newFilter.subGrouping.active = value[1]
    }

    const queryParams = getQueryParams()
    if (newFilter.setByQueryParameter && queryParams[newFilter.setByQueryParameter] !== newFilter.active) {
      queryParams[newFilter.setByQueryParameter] = newFilter.active
      updateQueryString(queryParams)
    }
    if (
      newFilter?.subGrouping?.setByQueryParameter &&
      queryParams[newFilter?.subGrouping?.setByQueryParameter] !== newFilter?.subGrouping.active
    ) {
      queryParams[newFilter?.subGrouping?.setByQueryParameter] = newFilter.subGrouping.active
      updateQueryString(queryParams)
    }
  }
  return newFilters
}
