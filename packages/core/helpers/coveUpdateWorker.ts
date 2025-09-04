// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new

import { UpdateFunction } from 'json-edit-react'

import update_4_24_4 from './ver/4.24.4'
import update_4_24_3 from './ver/4.24.3'
import update_4_24_5 from './ver/4.24.5'
import update_4_24_7 from './ver/4.24.7'
import update_4_24_9 from './ver/4.24.9'
import versionNeedsUpdate from './ver/versionNeedsUpdate'
import update_4_24_10 from './ver/4.24.10'
import update_4_24_11 from './ver/4.24.11'
import update_4_25_1 from './ver/4.25.1'
import update_4_25_3 from './ver/4.25.3'
import update_4_25_4 from './ver/4.25.4'
import update_4_25_6 from './ver/4.25.6'
import update_4_25_7 from './ver/4.25.7'
import update_4_25_8 from './ver/4.25.8'
import update_4_25_9 from './ver/4.25.9'

/**
 * Strips data arrays from config to improve performance during updates
 * Returns both the stripped config and the extracted data for restoration
 */
const stripDataFromConfig = (config: any): { strippedConfig: any; extractedData: any } => {
  const extractedData: any = {}
  const strippedConfig = { ...config }

  //return { strippedConfig, extractedData }

  // Extract root-level data arrays
  if (strippedConfig.data) {
    extractedData.data = strippedConfig.data
    delete strippedConfig.data
  }
  if (strippedConfig.formattedData) {
    extractedData.formattedData = strippedConfig.formattedData
    delete strippedConfig.formattedData
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

      if (viz.data) {
        vizData.data = viz.data
        delete strippedConfig.visualizations[vizKey].data
      }
      if (viz.formattedData) {
        vizData.formattedData = viz.formattedData
        delete strippedConfig.visualizations[vizKey].formattedData
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
const restoreDataToConfig = (config: any, extractedData: any): any => {
  const restoredConfig = { ...config }

  // Restore root-level data arrays
  if (extractedData.data) {
    restoredConfig.data = extractedData.data
  }
  if (extractedData.formattedData) {
    restoredConfig.formattedData = extractedData.formattedData
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

export const coveUpdateWorker = (config, multiDashboardVersion?) => {
  // Strip data from config for performance
  const { strippedConfig, extractedData } = stripDataFromConfig(config)
  let genConfig = strippedConfig

  if (multiDashboardVersion) genConfig.version = multiDashboardVersion

  const versions = [
    ['4.24.3', update_4_24_3],
    ['4.24.4', update_4_24_4],
    ['4.24.5', update_4_24_5],
    ['4.24.7', update_4_24_7, true],
    ['4.24.9', update_4_24_9],
    ['4.24.10', update_4_24_10, true],
    ['4.24.11', update_4_24_11],
    ['4.25.1', update_4_25_1],
    ['4.25.3', update_4_25_3],
    ['4.25.4', update_4_25_4],
    ['4.25.6', update_4_25_6],
    ['4.25.7', update_4_25_7],
    ['4.25.8', update_4_25_8],
    ['4.25.9', update_4_25_9]
  ]

  versions.forEach(([version, updateFunction, alwaysRun]: [string, UpdateFunction, boolean?]) => {
    if (versionNeedsUpdate(genConfig.version, version) || alwaysRun) {
      genConfig = updateFunction(genConfig)

      if (genConfig.multiDashboards) {
        genConfig.multiDashboards.forEach((dashboard, index) => {
          dashboard.type = 'dashboard'
          genConfig.multiDashboards[index] = coveUpdateWorker(dashboard, genConfig.version)
        })
      }
    }
  })

  // config version is stored at the root level of the config.
  if (multiDashboardVersion) delete genConfig.version

  // Restore data arrays after all updates are complete
  return restoreDataToConfig(genConfig, extractedData)
}

export default coveUpdateWorker
