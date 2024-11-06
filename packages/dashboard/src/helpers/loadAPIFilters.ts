import _ from 'lodash'
import { APIFilterDropdowns } from '../components/DashboardFilters'
import { SharedFilter } from '../types/SharedFilter'
import * as apiFilterHelpers from './apiFilterHelpers'
import { APIFilter } from '../types/APIFilter'

export const loadAPIFiltersFactory = (
  dispatch: Function,
  dispatchErrorMessages: Function,
  setAPIFilterDropdowns: Function,
  autoLoadFilterIndexes: number[]
) => {
  const loadAPIFilters = (
    sharedFilters: SharedFilter[],
    dropdowns: APIFilterDropdowns,
    recursiveLimit = 3
  ): Promise<SharedFilter[]> => {
    if (!sharedFilters) return
    sharedFilters = sharedFilters.map((filter, index) =>
      apiFilterHelpers.setAutoLoadDefaultValue(
        index,
        dropdowns[filter.apiFilter?.apiEndpoint],
        sharedFilters,
        autoLoadFilterIndexes
      )
    )
    const sharedAPIFilters = sharedFilters.filter(f => f.apiFilter)
    const filterLookup = new Map(sharedAPIFilters.map(filter => [filter.apiFilter.apiEndpoint, filter.apiFilter]))
    const toFetch = apiFilterHelpers.getToFetch(sharedFilters, dropdowns)
    const newDropdowns = _.cloneDeep(dropdowns)
    return Promise.all(
      Object.keys(toFetch).map(
        endpoint =>
          new Promise<void>(resolve => {
            fetch(endpoint)
              .then(resp => resp.json())
              .then(data => {
                if (!Array.isArray(data)) {
                  console.error('COVE only supports response data in the shape Array<Object>')
                }
                const [_key, index] = toFetch[endpoint]
                const apiFilter = filterLookup.get(_key) as APIFilter
                const _filterValues = apiFilterHelpers.getFilterValues(data, apiFilter)

                newDropdowns[_key] = _filterValues
                const newDefaultSelectedFilter = apiFilterHelpers.setAutoLoadDefaultValue(
                  index,
                  _filterValues,
                  sharedFilters,
                  autoLoadFilterIndexes
                )
                sharedFilters[index] = newDefaultSelectedFilter
              })
              .catch(() => {
                dispatchErrorMessages({
                  type: 'ADD_ERROR_MESSAGE',
                  payload: 'There was a problem returning data. Please try again.'
                })
              })
              .finally(() => {
                resolve()
              })
          })
      )
    ).then(() => {
      const finishedLoading = sharedFilters.reduce((acc, curr, index) => {
        if (autoLoadFilterIndexes.includes(index) && !curr.active) return false
        return acc
      }, true)
      if (finishedLoading || recursiveLimit === 0) {
        setAPIFilterDropdowns(newDropdowns)
        dispatch({ type: 'SET_SHARED_FILTERS', payload: sharedFilters })
        return sharedFilters
      } else {
        return loadAPIFilters(sharedFilters, newDropdowns, recursiveLimit - 1)
      }
    })
  }
  return loadAPIFilters
}
