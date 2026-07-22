import cloneConfig from '../cloneConfig'
import { normalizeSeriesColumnRounding } from './4.26.6-2'

const ver = '4.26.7-1'

const normalizeConfig = config => {
  normalizeSeriesColumnRounding(config)

  if (config?.visualizations) {
    Object.values(config.visualizations).forEach(normalizeConfig)
  }

  if (Array.isArray(config?.multiDashboards)) {
    config.multiDashboards.forEach(normalizeConfig)
  }
}

const update_4_26_7_1 = config => {
  const newConfig = cloneConfig(config)
  normalizeConfig(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_7_1
