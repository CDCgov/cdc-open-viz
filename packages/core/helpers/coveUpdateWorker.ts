// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new
import update_4_24_4 from './ver/4.23.4'
import update_4_24_3 from './ver/4.24.3'
import update_4_24_5 from './ver/4.24.5'
import update_4_24_7 from './ver/4.24.7'

export const coveUpdateWorker = config => {
  let genConfig = config

  genConfig = update_4_24_3(genConfig)
  genConfig = update_4_24_4(genConfig)
  genConfig = update_4_24_5(genConfig)
  genConfig = update_4_24_7(genConfig)

  return genConfig
}

const asyncWorker = async config => {
  return await coveUpdateWorker(config)
}

export default asyncWorker
