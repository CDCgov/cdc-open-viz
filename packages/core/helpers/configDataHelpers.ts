/**
 * Helper functions for stripping and restoring data arrays from config objects
 * to improve performance during cloning operations.
 */

/**
 * Strips data arrays from config to improve cloning performance
 */
export const stripDataFromConfig = (config: any): { strippedConfig: any; extractedData: any } => {
  const extractedData: any = {}
  const strippedConfig = { ...config }

  // Extract root-level data arrays
  if (strippedConfig.data) {
    extractedData.data = strippedConfig.data
    delete strippedConfig.data
  }
  if (strippedConfig.formattedData) {
    extractedData.formattedData = strippedConfig.formattedData
    delete strippedConfig.formattedData
  }
  if (strippedConfig.originalFormattedData) {
    extractedData.originalFormattedData = strippedConfig.originalFormattedData
    delete strippedConfig.originalFormattedData
  }
  if (strippedConfig.datasets) {
    extractedData.datasets = strippedConfig.datasets
    delete strippedConfig.datasets
  }

  // Handle dashboard visualizations
  if (strippedConfig.visualizations) {
    extractedData.visualizations = {}
    Object.keys(strippedConfig.visualizations).forEach(vizKey => {
      const viz = strippedConfig.visualizations[vizKey]
      const vizData: any = {}

      if (!viz.type) return

      if (viz.data) {
        vizData.data = viz.data
        delete strippedConfig.visualizations[vizKey].data
      }
      if (viz.formattedData) {
        vizData.formattedData = viz.formattedData
        delete strippedConfig.visualizations[vizKey].formattedData
      }
      if (viz.originalFormattedData) {
        vizData.originalFormattedData = viz.originalFormattedData
        delete strippedConfig.visualizations[vizKey].originalFormattedData
      }
      if (viz.datasets) {
        vizData.datasets = viz.datasets
        delete strippedConfig.visualizations[vizKey].datasets
      }

      if (Object.keys(vizData).length > 0) {
        extractedData.visualizations[vizKey] = vizData
      }
    })
  }

  // Handle multiDashboards
  if (strippedConfig.multiDashboards) {
    extractedData.multiDashboards = []
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

  // Restore root-level data arrays
  if (extractedData.data) {
    restoredConfig.data = extractedData.data
  }
  if (extractedData.formattedData) {
    restoredConfig.formattedData = extractedData.formattedData
  }
  if (extractedData.originalFormattedData) {
    restoredConfig.originalFormattedData = extractedData.originalFormattedData
  }
  if (extractedData.datasets) {
    restoredConfig.datasets = extractedData.datasets
  }

  // Restore dashboard visualizations data
  if (extractedData.visualizations && restoredConfig.visualizations) {
    Object.keys(extractedData.visualizations).forEach(vizKey => {
      const vizData = extractedData.visualizations[vizKey]
      if (vizData.data) {
        restoredConfig.visualizations[vizKey].data = vizData.data
      }
      if (vizData.formattedData) {
        restoredConfig.visualizations[vizKey].formattedData = vizData.formattedData
      }
      if (vizData.originalFormattedData) {
        restoredConfig.visualizations[vizKey].originalFormattedData = vizData.originalFormattedData
      }
      if (vizData.datasets) {
        restoredConfig.visualizations[vizKey].datasets = vizData.datasets
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
