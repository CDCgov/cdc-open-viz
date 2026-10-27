import cloneConfig from '../cloneConfig'
import { repairDashboardFilters } from './dashboardFilterRepairs'

const update_4_24_8_1 = config => {
  const newConfig = cloneConfig(config)
  repairDashboardFilters(newConfig)
  newConfig.version = '4.24.8-1'
  return newConfig
}

export default update_4_24_8_1
