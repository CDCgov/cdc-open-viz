import { gatherQueryParams } from '@cdc/core/helpers/gatherQueryParams'
import { APIFilterDropdowns, DropdownOptions } from '../components/DashboardFilters'
import { APIFilter } from '../types/APIFilter'
import { SharedFilter } from '../types/SharedFilter'
import _ from 'lodash'
import { getQueryParams } from '@cdc/core/helpers/queryStringUtils'
import { FILTER_STYLE } from '../types/FilterStyles'

/** key for the dropdowns object */
type DropdownsKey = string

export const getLoadingFilterMemo = (
  apiFiltersEndpoints: string[],
  apiFilterDropdowns,
  changedChildFilterIndexes = []
): APIFilterDropdowns =>
  apiFiltersEndpoints.reduce((acc, endpoint, currIndex) => {
    const _key: DropdownsKey = endpoint
    const hasChanged = changedChildFilterIndexes.includes(currIndex)
    if (apiFilterDropdowns[_key] != null && !hasChanged) {
      acc[_key] = apiFilterDropdowns[_key]
    } else {
      acc[_key] = null
    }
    return acc
  }, {})

const getParentParams = (
  childFilter: SharedFilter,
  sharedFilters: SharedFilter[]
): Record<'key' | 'value', string>[] | null => {
  const _parents = sharedFilters.filter(parentFilter => childFilter.parents?.includes(parentFilter.key))
  if (!(_parents || []).length) return null

  return _parents.flatMap(filter => {
    if (filter.filterStyle === FILTER_STYLE.nestedDropdown) {
      const key = filter.apiFilter.valueSelector || ''
      const subKey = filter.apiFilter.subgroupValueSelector || ''
      const val = filter.queuedActive ? filter.queuedActive[0] : (filter.active as string) || ''
      const subVal = filter.queuedActive ? filter.queuedActive[1] : filter.subGrouping.active || ''
      return [
        { key, value: val },
        { key: subKey, value: subVal }
      ]
    } else {
      const key = filter.queryParameter || filter.apiFilter.valueSelector || ''
      const value = filter.queuedActive || filter.active || ''
      if (Array.isArray(value)) {
        return value.map(_value => ({ key, value: _value.toString() }))
      }
      return [{ key, value: value.toString() }]
    }
  })
}

export const getFilterValues = (data: Array<Object>, apiFilter: APIFilter): DropdownOptions => {
  const { textSelector, valueSelector, subgroupTextSelector, subgroupValueSelector } = apiFilter
  if (subgroupValueSelector) {
    const memo = {}
    data.forEach(v => {
      if (!memo[v[valueSelector]]) {
        memo[v[valueSelector]] = { text: v[textSelector || valueSelector], value: v[valueSelector], subOptions: [] }
      }
      memo[v[valueSelector]].subOptions.push({ text: v[subgroupTextSelector], value: v[subgroupValueSelector] })
    })
    return Object.values(memo)
  } else {
  }
  return data.map(v => ({ text: v[textSelector || valueSelector], value: v[valueSelector] }))
}

/** API endpoint to fetch */
type Endpoint = string
type SharedFilterIndex = number
export const getToFetch = (
  sharedFilters: SharedFilter[],
  apiFilterDropdowns: APIFilterDropdowns
): Record<Endpoint, [DropdownsKey, SharedFilterIndex]> => {
  const toFetch = {}
  sharedFilters.forEach((filter, index) => {
    const baseEndpoint = filter.apiFilter?.apiEndpoint
    if (!baseEndpoint) return
    const _key = baseEndpoint
    if (apiFilterDropdowns[_key]) return // don't reload cached filter
    const parentParams = getParentParams(filter, sharedFilters)
    const notAllParentsSelected = parentParams?.some(({ value }) => value === '')

    if (notAllParentsSelected) return // don't send request for dependent children filter options

    const endpoint = baseEndpoint + (parentParams ? gatherQueryParams(baseEndpoint, parentParams) : '')
    toFetch[endpoint] = [_key, index]
  })
  return toFetch
}

export const setAutoLoadDefaultValue = (
  sharedFilterIndex: number,
  dropdownOptions: DropdownOptions,
  sharedFilters: SharedFilter[],
  autoLoadFilterIndexes: number[]
): SharedFilter => {
  const sharedFiltersCopy = _.cloneDeep(sharedFilters)
  const sharedFilter = _.cloneDeep(sharedFiltersCopy[sharedFilterIndex])
  if (!autoLoadFilterIndexes.length || !dropdownOptions?.length) return sharedFilter // no autoLoading happening
  if (autoLoadFilterIndexes.includes(sharedFilterIndex)) {
    const filterParents = sharedFiltersCopy.filter(f => sharedFilter.parents?.includes(f.key))
    const notAllParentFiltersSelected = filterParents.some(p => !(p.active || p.queuedActive))
    if (filterParents && notAllParentFiltersSelected) return sharedFilter
    const defaultValue =
      sharedFilter.filterStyle === FILTER_STYLE.multiSelect ? [dropdownOptions[0]?.value] : dropdownOptions[0]?.value
    if (!sharedFilter.active) {
      const queryParams = getQueryParams()
      const defaultQueryParamValue = queryParams[sharedFilter?.setByQueryParameter]
      sharedFilter.active = defaultQueryParamValue || defaultValue
    } else if (sharedFilter.filterStyle === FILTER_STYLE.multiSelect) {
      const currentOption = (sharedFilter.active as string[]).filter(activeVal =>
        dropdownOptions.find(option => option.value === activeVal)
      )
      sharedFilter.active = currentOption.length ? currentOption : defaultValue
    } else {
      const currentOption = dropdownOptions.find(option => option.value === sharedFilter.active)
      sharedFilter.active = currentOption ? currentOption.value : defaultValue
    }
  }
  return sharedFilter
}
