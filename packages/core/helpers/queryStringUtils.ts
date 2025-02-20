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
  const queryParams = getQueryParams()
  queryParams[key] = value
  updateQueryString(queryParams)
}

export function removeQueryParam(key: string) {
  const queryParams = getQueryParams()
  delete queryParams[key]
  updateQueryString(queryParams)
}
