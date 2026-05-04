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

const applyLegacyDashboardComponentStyleDefaults = config => {
  if (config.type === 'data-bite') {
    if (config.biteStyle === undefined || config.biteStyle === null || config.biteStyle === '') {
      config.biteStyle = 'graphic'
    }
  }

  if (config.type === 'waffle-chart') {
    if (config.visualizationType === undefined || config.visualizationType === null || config.visualizationType === '') {
      config.visualizationType = 'Waffle'
    }
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      applyLegacyDashboardComponentStyleDefaults(visualization)
    })
  }
}

const update_4_26_5 = config => {
  const ver = '4.26.5'
  const newConfig = cloneConfig(config)
  applyYAxisTitlePlacement(newConfig)
  applyLegacyDashboardComponentStyleDefaults(newConfig)
  newConfig.version = ver
  return newConfig
}

export { applyYAxisTitlePlacement, applyLegacyDashboardComponentStyleDefaults }
export default update_4_26_5
