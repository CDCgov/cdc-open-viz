import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const applyYAxisTitlePlacement = config => {
  if (config.type === 'chart') {
    config.yAxis = config.yAxis || {}

    if (!config.yAxis.titlePlacement) {
      config.yAxis.titlePlacement = 'side'
    }
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      applyYAxisTitlePlacement(visualization)
    })
  }
}

const update_4_26_5 = config => {
  const ver = '4.26.5'
  const newConfig = cloneConfig(config)
  applyYAxisTitlePlacement(newConfig)
  newConfig.version = ver
  return newConfig
}

export { applyYAxisTitlePlacement }
export default update_4_26_5
