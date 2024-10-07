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

export const getNestedDropdownValues = (data: Array<Object>, apiFilter: APIFilter) => {
  const { textSelector, valueSelector, subgroupTextSelector, subgroupValueSelector } = apiFilter
  const nestedDropdownValues = []
  _.sortBy(data, [valueSelector, subgroupValueSelector]).map(value => {
    const group =
      textSelector === undefined || textSelector === ''
        ? [value[valueSelector]]
        : [value[valueSelector], value[textSelector]]
    const subgroup =
      subgroupTextSelector === undefined || subgroupTextSelector === ''
        ? [value[subgroupValueSelector]]
        : [value[subgroupValueSelector], value[subgroupTextSelector]]
    const NDValuesCount = nestedDropdownValues.length
    if (nestedDropdownValues[NDValuesCount - 1]?.[0][0] === group[0]) {
      nestedDropdownValues[NDValuesCount - 1][1].push(subgroup)
    } else {
      nestedDropdownValues[NDValuesCount] = [group, [subgroup]]
    }
  })

  nestedDropdownValues.map(groupings => [groupings[0], _.uniq(groupings[1])])

  return nestedDropdownValues
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
