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

export const coveUpdateWorker = (config, multiDashboardVersion?) => {
  let genConfig = config

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
    ['4.25.6', update_4_25_6]
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
  return genConfig
}

export default coveUpdateWorker
