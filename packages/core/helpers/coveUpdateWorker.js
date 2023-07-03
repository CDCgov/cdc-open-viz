// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new
import update_4_23 from './ver/4.23'

// 4.23.6 ------------------------------------------------------
const coveUpdateWorker = async config => {
  let genConfig = config

  // v4.23
  genConfig = await update_4_23(genConfig)

  return genConfig
}

export default coveUpdateWorker
