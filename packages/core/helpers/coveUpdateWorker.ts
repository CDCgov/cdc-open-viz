// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new
import update_4_24_3 from './ver/4.24.3'

// 4.23.6 ------------------------------------------------------
export const coveUpdateWorker = config => {
  let genConfig = config

  // v4.24.3
  genConfig = update_4_24_3(genConfig)

  return genConfig
}

const asyncWorker = async config => {
  return await coveUpdateWorker(config)
}

export default asyncWorker
