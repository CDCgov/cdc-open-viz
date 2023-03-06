const filterDataByTextColumn = (data, filters, textColumn) => {
  let filteredData = []

  if (filters && filters.length) {
    filters.map(filter => {
      if (filter.columnName && filter.columnValue) {
        return filteredData = data.filter(
          (entry) => entry[filter.columnName] === filter.columnValue
        )
      } else {
        return null
      }
    })
  } else {
    // filter by textColumn if selected
    return (filteredData = data.filter(
      (entry, index) => entry[textColumn] && index === 0)
    )
  }

  return filteredData
}

export default filterDataByTextColumn
