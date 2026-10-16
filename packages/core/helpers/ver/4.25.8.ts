import cloneConfig from '../cloneConfig'
import versionNeedsUpdate from './versionNeedsUpdate'
import type { CoveMigrationContext } from './migrationContext'

const ver = '4.25.8'

const shouldApplyLegacyMapLegendCompatibility = (startingVersion?: string) => {
  return startingVersion === undefined || startingVersion === null || versionNeedsUpdate(startingVersion, ver)
}

export const updateAxisColors = config => {
  if (config.type === 'chart') {
    if (config.xAxis) {
      ;['labelColor', 'tickLabelColor', 'tickColor'].forEach(k => {
        if (config.xAxis[k] === '#333') {
          config.xAxis[k] = '#1c1d1f'
        }
      })
    }
    if (config.yAxis) {
      ;[
        'labelColor',
        'tickLabelColor',
        'tickColor',
        'rightAxisLabelColor',
        'rightAxisTickLabelColor',
        'rightAxisTickColor'
      ].forEach(k => {
        if (config.yAxis[k] === '#333') {
          config.yAxis[k] = '#1c1d1f'
        }
      })
    }
  } else if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      updateAxisColors(visualization)
    })
  }
}

export const updateStatePickedToStatesPicked = config => {
  if (config.type === 'map') {
    if (config.general?.statePicked) {
      config.general.statesPicked = [{ ...config.general.statePicked }]
      delete config.general.statePicked
    }
    // Also migrate the property name for filter controls
    if (config.general?.filterControlsStatePicked) {
      config.general.filterControlsStatesPicked = config.general.filterControlsStatePicked
      delete config.general.filterControlsStatePicked
    }
  }
  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      updateStatePickedToStatesPicked(visualization)
    })
  }
}

export const preserveLegacyMapLegendBehavior = (config, startingVersion?: string) => {
  const preserveLegacyBehavior = shouldApplyLegacyMapLegendCompatibility(startingVersion)

  if (config.type === 'map' && preserveLegacyBehavior) {
    if (config.general && config.general.equalNumberOptIn === undefined) {
      config.general.equalNumberOptIn = false
    }

    if (
      config.general?.equalNumberOptIn === true &&
      ['equalinterval', 'manual'].includes(config.legend?.type) &&
      config.legend?.separateZero === true
    ) {
      config.legend.separateZero = false
    }
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(visualization => {
      preserveLegacyMapLegendBehavior(visualization, startingVersion)
    })
  }
}

const update_4_25_8 = (config, context?: CoveMigrationContext) => {
  const newConfig = cloneConfig(config)
  const startingVersion = context?.startingConfig?.version
  updateAxisColors(newConfig)
  updateStatePickedToStatesPicked(newConfig)
  preserveLegacyMapLegendBehavior(newConfig, startingVersion)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_8
