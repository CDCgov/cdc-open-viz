import _ from 'lodash'
import { FilterBehavior } from '../helpers/FilterBehavior'
import { getQueryParams, updateQueryString } from '@cdc/core/helpers/queryStringUtils'
import { SharedFilter } from '../types/SharedFilter'
import { DashboardFilters } from '../types/DashboardFilters'

const handleChildren = (sharedFilters: SharedFilter[], parentIndex: number) => {
  const parentKey = sharedFilters[parentIndex].key
  const childIndex = sharedFilters.findIndex(filter => filter.parents?.includes(parentKey))
  if (childIndex !== -1) {
    sharedFilters[childIndex].active = ''
  }
}

export const changeFilterActive = (filterIndex: number, value: string | string[], sharedFilters: SharedFilter[], vizConfig: DashboardFilters): SharedFilter[] => {
  const sharedFiltersCopy = _.cloneDeep(sharedFilters)
  const currentFilter = sharedFilters[filterIndex]
  if (vizConfig.filterBehavior !== FilterBehavior.Apply || vizConfig.autoLoad) {
    sharedFiltersCopy[filterIndex].active = value
    handleChildren(sharedFiltersCopy, filterIndex)
    const queryParams = getQueryParams()
    if (currentFilter.setByQueryParameter && queryParams[currentFilter.setByQueryParameter] !== currentFilter.active) {
      queryParams[currentFilter.setByQueryParameter] = currentFilter.active
      updateQueryString(queryParams)
    }
  } else {
    sharedFiltersCopy[filterIndex].queuedActive = value
  }
  return sharedFiltersCopy
}
