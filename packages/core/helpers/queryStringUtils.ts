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
 * Checks if a filter should be hidden based on query parameter
 * Checks multiple possible parameter names in priority order.
 * Returns true if ANY of the possible parameters are set to a truthy value.
 *
 * Checks in order:
 * 1. "hide" + key (dashboard filter identifier)
 * 2. "hide" + label (user-facing display name)
 * 3. "hide" + columnName (data column name)
 *
 * @param filter - Filter object with key, label, and/or columnName
 * @returns true if filter should be hidden, false otherwise
 *
 */
export function isFilterHiddenByQuery(filter) {
  if (!filter) return false

  const urlParams = new URLSearchParams(window.location.search)

  // Helper to check if a parameter name has a truthy value
  const checkHideParam = (identifier: string): boolean => {
    if (!identifier) return false
    const hideParamName = 'hide' + identifier
    const hideValue = urlParams.get(hideParamName)
    if (!hideValue) return false
    const lower = hideValue.toLowerCase()
    return lower === 'true' || hideValue === '1' || lower === 'yes'
  }

  // Check each possible identifier in priority order
  return checkHideParam(filter.key) || checkHideParam(filter.label) || checkHideParam(filter.columnName)
}

export function getQueryParams() {
  const queryParams = {}
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

export function getQueryParam(param) {
  return getQueryParams()[param]
}

export function updateQueryString(queryParams) {
  const updateUrl = `${window.location.origin}${window.location.pathname}?${Object.keys(queryParams)
    .map(queryParam => `${queryParam}=${encodeURIComponent(queryParams[queryParam])}`)
    .join('&')}`
  window.history.pushState({ path: updateUrl }, '', updateUrl)
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
