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
    recursiveLimit = 50
  ): Promise<SharedFilter[]> => {
    if (!sharedFilters) return
    const allIndexes = sharedFilters.map((_, index) => index)
    const _autoLoadFilterIndexes = loadAll ? allIndexes : autoLoadFilterIndexes
    sharedFilters = sharedFilters.map((filter, index) =>
      apiFilterHelpers.setAutoLoadDefaultValue(
        index,
        dropdowns[filter.apiFilter?.apiEndpoint],
        sharedFilters,
        _autoLoadFilterIndexes
      )
    )
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
                  _autoLoadFilterIndexes
                )
                sharedFilters[index] = newDefaultSelectedFilter
              })
              .catch(() => {
                dispatchErrorMessages({
                  type: 'ADD_ERROR_MESSAGE',
                  payload: 'There was a problem returning data. Please try again.'
                })
                resolve({ error: true })
              })
              .finally(() => {
                resolve({ error: false })
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
        setAPIFilterDropdowns(newDropdowns)
        dispatch({ type: 'SET_SHARED_FILTERS', payload: sharedFilters })
        return sharedFilters
      } else {
        return loadAPIFilters(sharedFilters, newDropdowns, loadAll, recursiveLimit - 1)
      }
    })
  }
  return loadAPIFilters
}
