import { getSeriesName } from '@cdc/core/helpers/getSeriesName'

export const getNewRuntime = (visualizationConfig, newFilteredData) => {
  const runtime = visualizationConfig.runtime ? { ...visualizationConfig.runtime } : {}
  runtime.series = []
  runtime.seriesLabels = {}
  runtime.seriesLabelsAll = []
  const { filters, columns, dynamicSeriesType, dynamicSeriesLineType, xAxis } = visualizationConfig
  if (newFilteredData?.length) {
    const columnNames = Object.keys(newFilteredData[0])
    columnNames.forEach(colName => {
      const isNotXAxis = xAxis.dataKey !== colName
      const isNotFiltered = !filters || !filters?.find(filter => filter.columnName === colName)
      const noColConfiguration = !columns || Object.keys(columns).indexOf(colName) === -1
      if (isNotXAxis && isNotFiltered && noColConfiguration) {
        runtime.series.push({
          dataKey: colName,
          type: dynamicSeriesType,
          lineType: dynamicSeriesLineType,
          tooltip: true
        })
      }
    })
  }

  runtime.seriesKeys = runtime.series
    ? runtime.series.map(series => {
        const seriesName = getSeriesName(series.dataKey, { series: [series] })
        runtime.seriesLabels[series.dataKey] = seriesName
        runtime.seriesLabelsAll.push(seriesName)
        return series.dataKey
      })
    : []

  return runtime
}
