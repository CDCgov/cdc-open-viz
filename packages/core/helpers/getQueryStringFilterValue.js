export default function getQueryStringFilterValue(filter) {
  const urlParams = new URLSearchParams(window.location.search)
  if(filter.setByQueryParameter){ // Only check the query string if the filter is supposed to be set by QS param
    const filterValue = urlParams.get(filter.setByQueryParameter)
    if(filterValue && filter.values && filter.values.includes(filterValue)){ // Only use the QS param if it is one of the valid options in the "values" property of that filter
      return filterValue
    }
  }
}
