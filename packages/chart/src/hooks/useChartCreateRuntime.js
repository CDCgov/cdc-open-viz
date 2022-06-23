const useChartCreateRuntime = (newConfig) => {
  if (newConfig) {
    //Enforce default values that need to be calculated at runtime
    if (!newConfig.runtime) {
      newConfig.runtime = {}
    }

    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []

    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = newConfig.data.map(d => d[newConfig.xAxis.dataKey])
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
    } else {
      newConfig.runtime.seriesKeys = newConfig.series ? newConfig.series.map((series) => {
        newConfig.runtime.seriesLabels[series.dataKey] = series.label || series.dataKey
        newConfig.runtime.seriesLabelsAll.push(series.label || series.dataKey)
        return series.dataKey
      }) : []
    }

    if (newConfig.visualizationType === 'Combo' && newConfig.series) {
      newConfig.runtime.barSeriesKeys = []
      newConfig.runtime.lineSeriesKeys = []
      newConfig.series.forEach((series) => {
        if (series.type === 'Bar') {
          newConfig.runtime.barSeriesKeys.push(series.dataKey)
        }
        if (series.type === 'Line') {
          newConfig.runtime.lineSeriesKeys.push(series.dataKey)
        }
      })
    }

    if ((newConfig.visualizationType === 'Bar' && newConfig.orientation === 'horizontal') || newConfig.visualizationType === 'Paired Bar') {
      newConfig.runtime.xAxis = newConfig.yAxis
      newConfig.runtime.yAxis = newConfig.xAxis
      newConfig.runtime.horizontal = true
    } else {
      newConfig.runtime.xAxis = newConfig.xAxis
      newConfig.runtime.yAxis = newConfig.yAxis
      newConfig.runtime.horizontal = false
    }

    newConfig.runtime.uniqueId = Date.now()
    newConfig.runtime.editorErrorMessage = newConfig.visualizationType === 'Pie' && !newConfig.yAxis.dataKey ?
      'Data Key property in Y Axis section must be set for pie charts.' :
      ''

    let currentData

    // Check for duplicate x axis values in data
    let uniqueXValues = {}

    if (newConfig.visualizationType !== 'Paired Bar') {
      for (let i = 0; i < currentData?.length; i++) {
        if (uniqueXValues[currentData[i][newConfig.xAxis.dataKey]]) {
          newConfig.runtime.editorErrorMessage = 'Duplicate keys in data. Try adding a filter.'
        } else {
          uniqueXValues[currentData[i][newConfig.xAxis.dataKey]] = true
        }
      }
    }
  }
}

export default useChartCreateRuntime
