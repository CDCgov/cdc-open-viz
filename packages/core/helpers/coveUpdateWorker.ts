// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new
import update_4_24_4 from './ver/4.23.4'
import update_4_24_3 from './ver/4.24.3'
import update_4_24_4 from './ver/4.24.4'

export const coveUpdateWorker = config => {
  let genConfig = config

  // v4.24.3
  genConfig = update_4_24_3(genConfig)
  genConfig = update_4_24_4(genConfig)

  // v4.24.4
  genConfig = update_4_24_4(genConfig)

  return genConfig
}

const asyncWorker = async config => {
  return await coveUpdateWorker(config)
}

export default asyncWorker
