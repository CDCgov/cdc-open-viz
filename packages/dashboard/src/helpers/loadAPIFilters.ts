import _ from 'lodash'
import { APIFilterDropdowns } from '../components/DashboardFilters'
import { SharedFilter } from '../types/SharedFilter'
import * as apiFilterHelpers from './apiFilterHelpers'
import { APIFilter } from '../types/APIFilter'
import { getParentParams, notAllParentsSelected } from './apiFilterHelpers'

export const loadAPIFiltersFactory = (
  dispatch: Function,
  dispatchErrorMessages: Function,
  setAPIFilterDropdowns: Function,
  autoLoadFilterIndexes: number[]
) => {
  const loadAPIFilters = (
    sharedFilters: SharedFilter[],
    dropdowns: APIFilterDropdowns,
    loadAll?: boolean,
    recursiveLimit = 50,
    isStale?: () => boolean
  ): Promise<SharedFilter[]> => {
    if (!sharedFilters) return
    const allIndexes = sharedFilters.map((_, index) => index)
    const _autoLoadFilterIndexes = loadAll ? allIndexes : autoLoadFilterIndexes
    sharedFilters = sharedFilters.map((filter, index) => {
      // For data filters (no API endpoint), return unchanged to preserve user selections
      if (!filter.apiFilter?.apiEndpoint) {
        return filter
      }
      return apiFilterHelpers.setAutoLoadDefaultValue(
        index,
        dropdowns[filter.apiFilter.apiEndpoint],
        sharedFilters,
        _autoLoadFilterIndexes
      )
    })
    const sharedAPIFilters = sharedFilters.filter(f => f.apiFilter)
    const filterLookup = new Map(sharedAPIFilters.map(filter => [filter.apiFilter.apiEndpoint, filter.apiFilter]))
    const toFetch = apiFilterHelpers.getToFetch(sharedFilters, dropdowns)
    const loadingDropdowns = Object.values(toFetch).reduce(
      (acc, [dropdownsKey]) => ({ ...acc, [dropdownsKey]: null }),
      {}
    )
    setAPIFilterDropdowns(currentState => {
      return { ...currentState, ...loadingDropdowns }
    })
    const newDropdowns = _.cloneDeep(dropdowns)
    return Promise.all(
      Object.keys(toFetch).map(
        endpoint =>
          new Promise<{ error: boolean }>(resolve => {
            // Create an AbortController for timeout
            const controller = new AbortController()
            const timeoutId = setTimeout(() => {
              controller.abort()
            }, 10000) // 30 second timeout

            fetch(endpoint, { signal: controller.signal })
              .then(resp => {
                clearTimeout(timeoutId)
                if (!resp.ok) {
                  throw new Error(`HTTP error! status: ${resp.status}`)
                }
                return resp.json()
              })
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
                  _autoLoadFilterIndexes
                )
                sharedFilters[index] = newDefaultSelectedFilter
                resolve({ error: false })
              })
              .catch(err => {
                clearTimeout(timeoutId)
                const errorMessage =
                  err.name === 'AbortError'
                    ? 'Request timed out. Please try again.'
                    : 'There was a problem returning data. Please try again.'
                console.error('API Filter fetch error:', err)
                dispatchErrorMessages({
                  type: 'ADD_ERROR_MESSAGE',
                  payload: errorMessage
                })
                resolve({ error: true })
              })
          })
      )
    ).then(responses => {
      const hasError = responses.some(({ error }) => error)
      const toLoad = sharedFilters.reduce((acc, curr, index) => {
        // the filter is autoloading and it hasn't finished yet
        if (_autoLoadFilterIndexes.includes(index) && !curr.active) {
          if (notAllParentsSelected(getParentParams(curr, sharedFilters))) {
            return acc
          }
          return [...acc, index]
        }
        return acc
      }, [])
      if (hasError || !toLoad.length || recursiveLimit === 0) {
        // Check if this operation is stale before dispatching
        if (isStale && isStale()) {
          // Operation is stale (filters were cleared), skip dispatch
          return sharedFilters
        }
        setAPIFilterDropdowns(newDropdowns)
        dispatch({ type: 'SET_SHARED_FILTERS', payload: sharedFilters })
        return sharedFilters
      } else {
        return loadAPIFilters(sharedFilters, newDropdowns, loadAll, recursiveLimit - 1, isStale)
      }
    })
  }
  return loadAPIFilters
}
