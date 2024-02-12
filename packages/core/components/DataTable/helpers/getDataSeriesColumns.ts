export const getDataSeriesColumns = (config, isVertical, runtimeData): string[] => {
  if (config.table.customTableConfig || config.visualizationType === 'Sankey' || runtimeData?.[0]?.tableData) return runtimeData[0] ? Object.keys(runtimeData[0]) : []
  let tmpSeriesColumns
  if (config.visualizationType !== 'Pie') {
    tmpSeriesColumns = isVertical ? [config.xAxis?.dataKey] : [] //, ...config.runtime.seriesLabelsAll
    if (config.series) {
      config.series.forEach(element => {
        tmpSeriesColumns.push(element.dataKey)
      })
    } else if (runtimeData && runtimeData.length > 0) {
      tmpSeriesColumns = Object.keys(runtimeData[0])
    }
  } else {
    tmpSeriesColumns = isVertical ? [config.xAxis?.dataKey, config.yAxis?.dataKey] : [config.yAxis?.dataKey]
  }

  // then add the additional Columns
  if (config.columns && Object.keys(config.columns).length > 0) {
    Object.keys(config.columns).forEach(function (key) {
      var value = config.columns[key]
      // add if not the index AND it is enabled to be added to data table
      if (value.name !== config.xAxis?.dataKey && value.dataTable === true) {
        tmpSeriesColumns.push(value.name)
      }
    })
  }

  return tmpSeriesColumns
}
