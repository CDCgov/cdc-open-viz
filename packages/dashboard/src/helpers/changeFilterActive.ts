import _ from 'lodash'
import { DashboardConfig } from '../types/DashboardConfig'
import { getAutoLoadVisualization } from './getAutoLoadVisualization'
import { FilterBehavior } from '../components/Header/Header'
import { getQueryParams, updateQueryString } from '@cdc/core/helpers/queryStringUtils'
import { SharedFilter } from '../types/SharedFilter'

const handleChildren = (sharedFilters: SharedFilter[], parentIndex: number) => {
  const parentKey = sharedFilters[parentIndex].key
  const childIndex = sharedFilters.findIndex(filter => filter.parents?.includes(parentKey))
  if (childIndex !== -1) {
    sharedFilters[childIndex].active = ''
  }
}

export const changeFilterActive = (index: number, value: string | string[], config: DashboardConfig): SharedFilter[] => {
  const sharedFilters = _.cloneDeep(config.dashboard.sharedFilters)
  const filterActive = sharedFilters[index]
  const nonAutoLoadFilterIndexes = getAutoLoadVisualization(config.visualizations)?.hide
  const isAutoLoad = nonAutoLoadFilterIndexes && !nonAutoLoadFilterIndexes.includes(index)

  if (config.filterBehavior !== FilterBehavior.Apply || isAutoLoad) {
    sharedFilters[index].active = value
    handleChildren(sharedFilters, index)
    const queryParams = getQueryParams()
    if (filterActive.setByQueryParameter && queryParams[filterActive.setByQueryParameter] !== filterActive.active) {
      queryParams[filterActive.setByQueryParameter] = filterActive.active
      updateQueryString(queryParams)
    }
  } else {
    if (Array.isArray(value)) throw Error(`Cannot set active values on urlfilters. expected: ${JSON.stringify(value)} to be a single value.`)
    sharedFilters[index].queuedActive = value
  }
  return sharedFilters
}
