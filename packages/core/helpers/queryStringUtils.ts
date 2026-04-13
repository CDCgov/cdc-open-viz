import * as events from './events'

export function getQueryStringFilterValue(filter) {
  const urlParams = new URLSearchParams(window.location.search)
  if (filter.setByQueryParameter) {
    // Only check the query string if the filter is supposed to be set by QS param
    const filterValue = urlParams.get(filter.setByQueryParameter)
    if (filterValue && filter.values) {
      for (let i = 0; i < filter.values.length; i++) {
        if (filter.values[i] && filter.values[i].toLowerCase() === filterValue.toLowerCase()) {
          return filter.values[i]
        }
      }
    }
  }
}

/**
 * Check if a filter should be hidden based on URL query parameters
 * Checks for hide{setByQueryParameter}=true|1|yes in the URL
 *
 * @param filter - Filter object with setByQueryParameter property
 * @returns true if filter should be hidden, false otherwise
 *
 * @example
 * // If filter has setByQueryParameter: "state"
 * // URL: ?hidestate=true  -> returns true
 * // URL: ?hideState=true  -> returns false (case sensitive!)
 */
export function isFilterHiddenByQuery(filter) {
  if (!filter) return false

  // Only check setByQueryParameter - this is the standard way filters are identified in URL params
  const paramName = filter.setByQueryParameter
  if (!paramName) return false

  const urlParams = new URLSearchParams(window.location.search)
  const hideParamName = `hide${paramName}`
  const hideValue = urlParams.get(hideParamName)

  if (!hideValue) return false

  const lower = hideValue.toLowerCase()
  return lower === 'true' || hideValue === '1' || lower === 'yes'
}

export function getQueryParams() {
  const queryParams: Record<string, string | string[]> = {}
  for (const [key, value] of Array.from(new URLSearchParams(window.location.search).entries())) {
    if (!queryParams[key]) queryParams[key] = value
    else {
      // for multiple values of the same key in the query string
      if (Array.isArray(queryParams[key])) queryParams[key].push(value)
      else queryParams[key] = [queryParams[key], value]
    }
  }
  return queryParams
}

export function getQueryParam(param: string) {
  const value = getQueryParams()[param]
  if (Array.isArray(value)) {
    return value.join(',')
  }
  return value
}

export function updateQueryString(queryParams) {
  const updateUrl = `${window.location.origin}${window.location.pathname}?${Object.keys(queryParams)
    .map(queryParam => `${queryParam}=${encodeURIComponent(queryParams[queryParam])}`)
    .join('&')}`
  window.history.pushState({ path: updateUrl }, '', updateUrl)
  events.publish(events.QUERY_CHANGE_EVENT)
  console.log('Updated query string:', updateUrl)
}

export function updateQueryParams(newParams: Record<string, string>) {
  const currentParams = getQueryParams()
  const updatedParams = { ...currentParams, ...newParams }
  // Remove any params with empty string values
  const filteredParams = Object.fromEntries(Object.entries(updatedParams).filter(([_, value]) => value !== ''))
  updateQueryString(filteredParams)
}

export function updateQueryParam(key: string, value: number | string) {
  if (!key) return
  const queryParams = getQueryParams()
  queryParams[key] = value
  updateQueryString(queryParams)
}

export function removeQueryParam(key: string) {
  const queryParams = getQueryParams()
  delete queryParams[key]
  updateQueryString(queryParams)
}

/**
 * Checks if developer mode is enabled via URL parameter
 * @returns true if isCoveDeveloper URL parameter is present and truthy
 */
export function isCoveDeveloperMode(): boolean {
  const param = getQueryParam('isCoveDeveloper')
  if (!param) return false

  // Handle various truthy values
  const lowerParam = param.toLowerCase()
  return lowerParam === 'true' || lowerParam === '1' || lowerParam === 'yes'
}
