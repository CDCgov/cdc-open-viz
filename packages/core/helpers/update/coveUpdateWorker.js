// If config key names or position in the config have been changed with a version change,
// process those config entries and format old values into new
import update423 from './ver/4.23'


// 4.23.1 ------------------------------------------------------
const coveUpdateWorker = (config) => {
  let genConfig = config

  // v4.23
  genConfig = update423(genConfig)

  return genConfig
}

export default coveUpdateWorker
