import { gatherQueryParams } from '@cdc/core/helpers/gatherQueryParams'
import { APIFilterDropdowns, DropdownOptions } from '../components/DashboardFilters'
import { APIFilter } from '../types/APIFilter'
import { SharedFilter } from '../types/SharedFilter'
import _ from 'lodash'
import { getQueryParams } from '@cdc/core/helpers/queryStringUtils'

export const getLoadingFilterMemo = (sharedAPIFilters, apiFilterDropdowns): APIFilterDropdowns =>
  sharedAPIFilters.reduce((acc, curr) => {
    const _key = curr.apiFilter.apiEndpoint
    if (apiFilterDropdowns[_key] != null) return acc // don't overwrite fetched data.
    acc[_key] = null
    return acc
  }, {})

const getParentParams = (childFilter: SharedFilter, sharedAPIFilters: SharedFilter[]): Record<'key' | 'value', string>[] | null => {
  const _parents = sharedAPIFilters.filter(parentFilter => childFilter.parents?.includes(parentFilter.key))
  if (!_parents.length) return null

  return _parents.flatMap(filter => {
    const key = filter.queryParameter || filter.apiFilter.valueSelector || ''
    const value = filter.queuedActive || filter.active || ''
    if (Array.isArray(value)) {
      return value.map(_value => ({ key, value: _value.toString() }))
    }
    return [{ key, value: value.toString() }]
  })
}

export const getFilterValues = (data: Array<Object>, apiFilter: APIFilter): DropdownOptions => {
  const { textSelector, valueSelector } = apiFilter
  return data.map(v => ({ text: v[textSelector || valueSelector], value: v[valueSelector] }))
}

export const getToFetch = (sharedAPIFilters: SharedFilter[], apiFilterDropdowns: APIFilterDropdowns): Record<string, [string, number]> => {
  const toFetch = {}
  sharedAPIFilters.forEach((filter, index) => {
    const baseEndpoint = filter.apiFilter.apiEndpoint
    const _key = baseEndpoint
    const isAPIFilter = apiFilterDropdowns[_key]
    const parentParams = getParentParams(filter, sharedAPIFilters)
    const notAllParentsSelected = parentParams?.some(({ value }) => value === '')

    if (notAllParentsSelected) return // don't send request for dependent children filter options
    if (isAPIFilter && !parentParams) return // don't reload filter unless it's a child
    const topLevelDataAlreadyLoaded = isAPIFilter && !filter.parents
    if (topLevelDataAlreadyLoaded) return // don't reload top level filters

    const endpoint = baseEndpoint + (parentParams ? gatherQueryParams(baseEndpoint, parentParams) : '')
    toFetch[endpoint] = [_key, index]
  })
  return toFetch
}

export const setAutoLoadDefaultValue = (sharedFilterIndex: number, dropdownOptions: DropdownOptions, sharedFilters, autoLoadFilterIndexes: number[]): SharedFilter => {
  const sharedFiltersCopy = _.cloneDeep(sharedFilters)
  const sharedFilter = _.cloneDeep(sharedFiltersCopy[sharedFilterIndex])
  if (!autoLoadFilterIndexes.length || !dropdownOptions?.length) return sharedFilter // no autoLoading happening
  if (autoLoadFilterIndexes.includes(sharedFilterIndex)) {
    const filterParents = sharedFiltersCopy.filter(f => sharedFilter.parents?.includes(f.key))
    const notAllParentFiltersSelected = filterParents.some(p => !(p.active || p.queuedActive))
    if (filterParents && notAllParentFiltersSelected) return sharedFilter
    const defaultValue = dropdownOptions[0]?.value
    if (!sharedFilter.active) {
      const queryParams = getQueryParams()
      const defaultQueryParamValue = queryParams[sharedFilter?.queryParameter]
      sharedFilter.active = defaultQueryParamValue || defaultValue
    } else {
      const currentOption = dropdownOptions.find(option => option.value === sharedFilter.active)
      sharedFilter.active = currentOption ? currentOption.value : defaultValue
    }
  }
  return sharedFilter
}
