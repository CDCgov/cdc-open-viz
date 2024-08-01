// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new
import update_4_24_4 from './ver/4.24.4'
import update_4_24_3 from './ver/4.24.3'
import update_4_24_5 from './ver/4.24.5'
import update_4_24_7 from './ver/4.24.7'
import update_4_24_9 from './ver/4.24.9'
import versionNeedsUpdate from './ver/versionNeedsUpdate'

export const coveUpdateWorker = config => {
  if (config.multiDashboards) {
    config.multiDashboards.forEach((dashboard, index) => {
      dashboard.type = 'dashboard'
      config.multiDashboards[index] = coveUpdateWorker(dashboard)
    })
  }
  let genConfig = config

  if (!genConfig.version) {
    genConfig.version = '0.0.1'
  }

  if (versionNeedsUpdate(genConfig.version, '4.24.3')) {
    genConfig = update_4_24_3(genConfig)
  }
  if (versionNeedsUpdate(genConfig.version, '4.24.4')) {
    genConfig = update_4_24_4(genConfig)
  }
  if (versionNeedsUpdate(genConfig.version, '4.24.5')) {
    genConfig = update_4_24_5(genConfig)
  }
  if (versionNeedsUpdate(genConfig.version, '4.24.7')) {
    genConfig = update_4_24_7(genConfig)
  }
  if (versionNeedsUpdate(genConfig.version, '4.24.9')) {
    genConfig = update_4_24_9(genConfig)
  }

  return genConfig
}

const asyncWorker = async config => {
  return await coveUpdateWorker(config)
}

export default asyncWorker
