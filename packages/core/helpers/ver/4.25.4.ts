import _ from 'lodash'

export const makeChartLegendsUnified = config => {
  if (config.type === 'chart') {
    config.legend = config.legend || {}
    config.legend.unified = true
  } else if (config.type === 'dashboard') {
    if (config.multiDashboards) {
      config.multiDashboards.forEach(dashboard => {
        Object.values(dashboard.visualizations).forEach(visualization => {
          makeChartLegendsUnified(visualization)
        })
      })
    } else {
      Object.values(config.visualizations).forEach(visualization => {
        makeChartLegendsUnified(visualization)
      })
    }
  }
}

const update_4_25_4 = config => {
  const ver = '4.25.4'
  const newConfig = _.cloneDeep(config)
  makeChartLegendsUnified(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_4
