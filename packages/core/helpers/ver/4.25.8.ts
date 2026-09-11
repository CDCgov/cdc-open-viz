import cloneConfig from '../cloneConfig'
import versionNeedsUpdate from './versionNeedsUpdate'

const ver = '4.25.8'

const shouldApplyLegacyMapLegendCompatibility = (sourceVersion?: string) => {
  return sourceVersion === undefined || sourceVersion === null || versionNeedsUpdate(sourceVersion, ver)
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

export const preserveLegacyMapLegendBehavior = (config, sourceVersion?: string) => {
  const preserveLegacyBehavior = shouldApplyLegacyMapLegendCompatibility(sourceVersion)

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
      preserveLegacyMapLegendBehavior(visualization, sourceVersion)
    })
  }
}

const update_4_25_8 = (config, sourceVersion?: string) => {
  const newConfig = cloneConfig(config)
  updateAxisColors(newConfig)
  updateStatePickedToStatesPicked(newConfig)
  preserveLegacyMapLegendBehavior(newConfig, sourceVersion)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_8
