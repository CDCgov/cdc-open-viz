const getLabel = (name, config) => {
  let custLabel = ''
  if (config.columns && Object.keys(config.columns).length > 0) {
    Object.keys(config.columns).forEach(function (key) {
      var tmpColumn = config.columns[key]
      // add if not the index AND it is enabled to be added to data table
      if (tmpColumn.name === name) {
        custLabel = tmpColumn.label
      }
    })
    return custLabel
  }
}

export const getSeriesName = (column, config) => {
  // If a user sets the name on a series use that.
  let userUpdatedSeriesName = config.series ? config.series.filter(series => series.dataKey === column)?.[0]?.name : ''
  if (userUpdatedSeriesName) return userUpdatedSeriesName

  if (config.runtimeSeriesLabels && config.runtimeSeriesLabels[column]) return config.runtimeSeriesLabels[column]

  let custLabel = getLabel(column, config) ? getLabel(column, config) : column
  let text = column === config.xAxis?.dataKey ? config.table.indexLabel : custLabel

  return text
}
