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

const update_4_25_8 = config => {
  const ver = '4.25.8'
  const newConfig = _.cloneDeep(config)
  updateAxisColors(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_8
