// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new
import update_4_24_4 from './ver/4.24.4'
import update_4_24_3 from './ver/4.24.3'
import update_4_24_5 from './ver/4.24.5'
import update_4_24_7 from './ver/4.24.7'
import update_4_24_9 from './ver/4.24.9'
import versionNeedsUpdate from './ver/versionNeedsUpdate'
import { UpdateFunction } from 'json-edit-react'

export const coveUpdateWorker = config => {
  if (config.multiDashboards) {
    config.multiDashboards.forEach((dashboard, index) => {
      config.multiDashboards[index] = coveUpdateWorker(dashboard)
    })
  }
  let genConfig = config

  const versions = [
    ['4.24.3', update_4_24_3],
    ['4.24.4', update_4_24_4],
    ['4.24.5', update_4_24_5],
    ['4.24.7', update_4_24_7, true],
    ['4.24.9', update_4_24_9]
  ]

  versions.forEach(([version, updateFunction, alwaysRun]: [string, UpdateFunction, boolean?]) => {
    if (versionNeedsUpdate(genConfig.version, version) || alwaysRun) {
      genConfig = updateFunction(genConfig)
    }
    if (genConfig.multiDashboards) {
      genConfig.multiDashboards.forEach((dashboard, index) => {
        dashboard.type = 'dashboard'
        genConfig.multiDashboards[index] = coveUpdateWorker(dashboard)
      })
    }
  })

  return genConfig
}

export default coveUpdateWorker
