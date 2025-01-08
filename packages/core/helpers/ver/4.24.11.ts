import _ from 'lodash'

const addColorMigration = config => {
  // add new property
  config.migrations = config.migrations || {}
  config.migrations.addColorMigration = true
  return config
}

const update_4_24_11 = config => {
  const ver = '4.24.11'
  const newConfig = _.cloneDeep(config)
  addColorMigration(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_11
