export const missingRequiredSections = config => {
  if (config.visualizationType === 'Sankey') return false // skip checks for now
  if (config.visualizationType === 'Forecasting') return false // skip required checks for now.
  if (config.visualizationType === 'Forest Plot') return false // skip required checks for now.
  if (config.visualizationType === 'Pie') {
    if (undefined === config?.yAxis.dataKey) {
      return true
    }
  } else {
    if ((undefined === config?.series || false === config?.series.length > 0) && !config?.dynamicSeries) {
      return true
    }
  }

  if (!config.xAxis.dataKey) {
    return true
  }

  return false
}
