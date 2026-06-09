/**
 * Helper functions for stripping and restoring data arrays from config objects
 * to improve performance during cloning operations.
 */

const heavyDataFields = ['data', 'formattedData', 'originalFormattedData', 'yAxisDomainData']

const stripHeavyDataFields = (source: any, extractedData: any) => {
  const stripped = { ...source }

  heavyDataFields.forEach(field => {
    if (Array.isArray(stripped[field])) {
      extractedData[field] = stripped[field]
      delete stripped[field]
    }
  })

  return stripped
}

const stripDatasets = (datasets: Record<string, any>, extractedData: any) => {
  return Object.keys(datasets).reduce((acc, datasetKey) => {
    const datasetData: any = {}
    acc[datasetKey] = stripHeavyDataFields(datasets[datasetKey], datasetData)

    if (Object.keys(datasetData).length > 0) {
      extractedData[datasetKey] = datasetData
    }

    return acc
  }, {})
}

const restoreHeavyDataFields = (target: any, extractedData: any) => {
  heavyDataFields.forEach(field => {
    if (extractedData[field]) {
      target[field] = extractedData[field]
    }
  })

  return target
}

/**
 * Strips data arrays from config to improve cloning performance
 */
export const stripDataFromConfig = (config: any): { strippedConfig: any; extractedData: any } => {
  const extractedData: any = {}
  const strippedConfig = stripHeavyDataFields(config, extractedData)

  // Handle dashboard visualizations
  if (strippedConfig.visualizations) {
    extractedData.visualizations = {}
    strippedConfig.visualizations = { ...strippedConfig.visualizations }
    Object.keys(strippedConfig.visualizations).forEach(vizKey => {
      const viz = strippedConfig.visualizations[vizKey]
      const vizData: any = {}

      if (!viz.type) return

      strippedConfig.visualizations[vizKey] = stripHeavyDataFields(viz, vizData)
      if (viz.datasets) {
        vizData.datasets = {}
        strippedConfig.visualizations[vizKey].datasets = stripDatasets(viz.datasets, vizData.datasets)
        if (Object.keys(vizData.datasets).length === 0) {
          delete vizData.datasets
        }
      }

      if (Object.keys(vizData).length > 0) {
        extractedData.visualizations[vizKey] = vizData
      }
    })
  }

  if (strippedConfig.datasets) {
    extractedData.datasets = {}
    strippedConfig.datasets = stripDatasets(strippedConfig.datasets, extractedData.datasets)
    if (Object.keys(extractedData.datasets).length === 0) {
      delete extractedData.datasets
    }
  }

  // Handle multiDashboards
  if (strippedConfig.multiDashboards) {
    extractedData.multiDashboards = []
    strippedConfig.multiDashboards = [...strippedConfig.multiDashboards]
    strippedConfig.multiDashboards.forEach((dashboard, index) => {
      const { strippedConfig: strippedDashboard, extractedData: dashboardData } = stripDataFromConfig(dashboard)
      strippedConfig.multiDashboards[index] = strippedDashboard
      extractedData.multiDashboards[index] = dashboardData
    })
  }

  return { strippedConfig, extractedData }
}

/**
 * Restores data arrays back to config after updates are complete
 */
export const restoreDataToConfig = (config: any, extractedData: any): any => {
  const restoredConfig = { ...config }

  restoreHeavyDataFields(restoredConfig, extractedData)

  if (extractedData.datasets) {
    restoredConfig.datasets = { ...(restoredConfig.datasets || {}) }
    Object.keys(extractedData.datasets).forEach(datasetKey => {
      restoredConfig.datasets[datasetKey] = restoreHeavyDataFields(
        { ...(restoredConfig.datasets[datasetKey] || {}) },
        extractedData.datasets[datasetKey]
      )
    })
  }

  // Restore dashboard visualizations data
  if (extractedData.visualizations && restoredConfig.visualizations) {
    Object.keys(extractedData.visualizations).forEach(vizKey => {
      const vizData = extractedData.visualizations[vizKey]
      restoredConfig.visualizations[vizKey] = restoreHeavyDataFields(restoredConfig.visualizations[vizKey], vizData)
      if (vizData.datasets) {
        restoredConfig.visualizations[vizKey].datasets = { ...(restoredConfig.visualizations[vizKey].datasets || {}) }
        Object.keys(vizData.datasets).forEach(datasetKey => {
          restoredConfig.visualizations[vizKey].datasets[datasetKey] = restoreHeavyDataFields(
            { ...(restoredConfig.visualizations[vizKey].datasets[datasetKey] || {}) },
            vizData.datasets[datasetKey]
          )
        })
      }
    })
  }

  // Restore multiDashboards data
  if (extractedData.multiDashboards && restoredConfig.multiDashboards) {
    extractedData.multiDashboards.forEach((dashboardData, index) => {
      if (dashboardData && Object.keys(dashboardData).length > 0) {
        restoredConfig.multiDashboards[index] = restoreDataToConfig(
          restoredConfig.multiDashboards[index],
          dashboardData
        )
      }
    })
  }

  return restoredConfig
}
