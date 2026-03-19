import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const addLocale = config => {
  if (!config.locale) {
    config.locale = 'en-US'
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      addLocale(visualization)
    })
  }
}

const disableExtraChartVisualSettings = config => {
  if (config.type === 'chart') {
    config.visual = {
      ...config.visual,
      border: false,
      borderColorTheme: false,
      accent: false,
      background: false,
      hideBackgroundColor: false
    }
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      disableExtraChartVisualSettings(visualization)
    })
  }
}

const update_4_26_3 = config => {
  const ver = '4.26.3'
  const newConfig = cloneConfig(config)
  addLocale(newConfig)
  disableExtraChartVisualSettings(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_3
