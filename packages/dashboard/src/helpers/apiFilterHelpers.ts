import { gatherQueryParams } from '@cdc/core/helpers/gatherQueryParams'
import { APIFilterDropdowns, DropdownOptions } from '../components/DashboardFilters'
import { APIFilter } from '../types/APIFilter'
import { SharedFilter } from '../types/SharedFilter'
import _ from 'lodash'
import { getQueryParam } from '@cdc/core/helpers/queryStringUtils'
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
    if (apiFilterDropdowns[_key] && !hasChanged) {
      acc[_key] = apiFilterDropdowns[_key]
    } else {
      acc[_key] = undefined
    }
    return acc
  }, {})

export const getParentParams = (
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
      const subVal = filter.queuedActive ? filter.queuedActive[1] : filter.subGrouping?.active || ''
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

/**
 * Checks if any parent filters are unselected or at their reset state.
 * Returns true if at least one parent is not properly selected.
 */
export const hasUnselectedParents = (parentParams, sharedFilters?: SharedFilter[]): boolean => {
  if (!parentParams) return false

  return parentParams.some(({ key, value }) => {
    // Check if value is empty
    if (value === '') return true

    // Check if value equals the parent filter's resetLabel
    if (sharedFilters) {
      const parentFilter = sharedFilters.find(f => f.queryParameter === key || f.apiFilter?.valueSelector === key)
      if (parentFilter?.resetLabel && value === parentFilter.resetLabel) {
        return true
      }
    }

    return false
  })
}

// Keep old name for backward compatibility
export const notAllParentsSelected = hasUnselectedParents

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

    if (notAllParentsSelected(parentParams, sharedFilters)) return // don't send request for dependent children filter options

    const endpoint = baseEndpoint + (parentParams ? gatherQueryParams(baseEndpoint, parentParams) : '')
    toFetch[endpoint] = [_key, index]
  })
  return toFetch
}

export const setActiveNestedDropdown = (dropdownOptions, sharedFilter) => {
  const queryValue = getQueryParam(sharedFilter?.setByQueryParameter)
  const subQueryValue = getQueryParam(sharedFilter?.subGrouping?.setByQueryParameter)

  // Priority: query string > configured defaultValue > existing active (if valid) > first option
  const validActive = dropdownOptions.find(option => option.value == sharedFilter.active)
  sharedFilter.active =
    queryValue || sharedFilter.defaultValue || (validActive ? sharedFilter.active : dropdownOptions[0]?.value)

  const options = dropdownOptions.find(option => option.value == sharedFilter.active)?.subOptions || []
  const validSubActive = options.find(o => o.value == sharedFilter.subGrouping?.active)
  sharedFilter.subGrouping.active =
    subQueryValue ||
    sharedFilter.subGrouping?.defaultValue ||
    (validSubActive ? sharedFilter.subGrouping.active : options[0]?.value)
}

export const setActiveMultiDropdown = (dropdownOptions, sharedFilter) => {
  const queryValue = getQueryParam(sharedFilter?.setByQueryParameter)
  const queryValues = Array.isArray(queryValue) ? queryValue : queryValue?.split(',')
  const defaultValues = queryValue ? queryValues : [dropdownOptions[0]?.value]
  const currentOption = (Array.isArray(sharedFilter.active) ? sharedFilter.active : []).filter(activeVal =>
    dropdownOptions.find(option => option.value === activeVal)
  )
  sharedFilter.active = currentOption.length ? currentOption : defaultValues
}

export const setAutoLoadDefaultValue = (
  sharedFilterIndex: number,
  dropdownOptions: DropdownOptions,
  sharedFilters: SharedFilter[],
  autoLoadFilterIndexes: number[]
): SharedFilter => {
  const sharedFiltersCopy = _.cloneDeep(sharedFilters)
  const sharedFilter = _.cloneDeep(sharedFiltersCopy[sharedFilterIndex])
  const queryValue = getQueryParam(sharedFilter?.setByQueryParameter)
  const hasQuery = sharedFilter.setByQueryParameter ? queryValue !== undefined : false
  if (!autoLoadFilterIndexes.length || !dropdownOptions?.length) {
    if (hasQuery && sharedFilter.apiFilter) {
      const subQueryValue = getQueryParam(sharedFilter.subGrouping?.setByQueryParameter)
      const isNested = subQueryValue !== undefined
      sharedFilter.queuedActive = isNested ? [queryValue, subQueryValue] : queryValue
    }
    return sharedFilter // no autoLoading happening
  }
  if (autoLoadFilterIndexes.includes(sharedFilterIndex) || hasQuery) {
    const filterParents = sharedFiltersCopy.filter(f => sharedFilter.parents?.includes(f.key))
    const missingParents = filterParents.some(p => !(p.active || p.queuedActive))
    if (missingParents) return sharedFilter
    if (sharedFilter.filterStyle === FILTER_STYLE.multiSelect) {
      setActiveMultiDropdown(dropdownOptions, sharedFilter)
    } else if (sharedFilter.filterStyle === FILTER_STYLE.nestedDropdown) {
      setActiveNestedDropdown(dropdownOptions, sharedFilter)
    } else {
      const defaultValue = dropdownOptions[0]?.value
      if (!sharedFilter.active) {
        sharedFilter.active = queryValue || defaultValue
      } else {
        const currentOption = dropdownOptions.find(option => option.value == sharedFilter.active) // loose equality required: 2017 should equal '2017'
        sharedFilter.active = currentOption ? currentOption.value : defaultValue
      }
    }
  }
  return sharedFilter
}
