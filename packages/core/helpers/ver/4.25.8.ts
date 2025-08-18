import _ from 'lodash'

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

const update_4_25_8 = config => {
  const ver = '4.25.8'
  const newConfig = _.cloneDeep(config)
  updateAxisColors(newConfig)
  updateStatePickedToStatesPicked(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_8
