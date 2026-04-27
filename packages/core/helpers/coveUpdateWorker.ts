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
import update_4_25_10 from './ver/4.25.10'
import update_4_25_11 from './ver/4.25.11'
import update_4_26_1 from './ver/4.26.1'
import update_4_26_2 from './ver/4.26.2'
import update_4_26_3 from './ver/4.26.3'
import update_4_26_4 from './ver/4.26.4'
import update_4_26_4_1 from './ver/4.26.4-1'

import { stripDataFromConfig, restoreDataToConfig } from './configDataHelpers'

export const coveUpdateWorker = (config, multiDashboardVersion?) => {
  // Strip data from config for performance
  const { strippedConfig, extractedData } = stripDataFromConfig(config)
  let genConfig = strippedConfig

  if (multiDashboardVersion && !genConfig.version) genConfig.version = multiDashboardVersion

  const versions = [
    ['4.24.3', update_4_24_3],
    ['4.24.4', update_4_24_4],
    ['4.24.5', update_4_24_5],
    ['4.24.7', update_4_24_7, true],
    ['4.24.9', update_4_24_9, true],
    ['4.24.10', update_4_24_10, true],
    ['4.24.11', update_4_24_11, true],
    ['4.25.1', update_4_25_1, true],
    ['4.25.3', update_4_25_3, true],
    ['4.25.4', update_4_25_4, true],
    ['4.25.6', update_4_25_6, true],
    ['4.25.7', update_4_25_7, true],
    ['4.25.8', update_4_25_8, true],
    ['4.25.9', update_4_25_9, true],
    ['4.25.10', update_4_25_10, true],
    ['4.25.11', update_4_25_11, true],
    ['4.26.1', update_4_26_1],
    ['4.26.2', update_4_26_2],
    ['4.26.3', update_4_26_3],
    ['4.26.4', update_4_26_4],
    ['4.26.4-1', update_4_26_4_1]
  ]

  const initialVersion = genConfig.version

  versions.forEach(([version, updateFunction, alwaysRun]: [string, UpdateFunction, boolean?]) => {
    if (versionNeedsUpdate(initialVersion, version) || alwaysRun) {
      genConfig = updateFunction(genConfig)
    }
  })

  if (genConfig.multiDashboards) {
    genConfig.multiDashboards.forEach((dashboard, index) => {
      dashboard.type = 'dashboard'
      // Each sub-dashboard migrates from its own version (falls back to outer initial version
      // if the sub-dashboard has never been versioned). Passing undefined here avoids
      // overwriting a sub-dashboard that already has its own version.
      const subVersion = dashboard.version ?? initialVersion
      genConfig.multiDashboards[index] = coveUpdateWorker(dashboard, subVersion)
    })
  }

  // Always set to the latest version
  genConfig.version = versions[versions.length - 1][0]

  // Restore data arrays after all updates are complete
  return restoreDataToConfig(genConfig, extractedData)
}

export default coveUpdateWorker
