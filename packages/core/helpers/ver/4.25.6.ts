import _ from 'lodash'

// *NOTE: This ends support for only showing the top prefix
export const changeOnlyShowTopSuffixToInlineLabel = config => {
  if (config.type === 'chart') {
    if (!config.dataFormat?.suffix) return config
    if (!config.dataFormat.onlyShowTopPrefixSuffix) return config

    delete config.dataFormat.onlyShowTopPrefixSuffix

    if (!config.yAxis) config.yAxis = {}

    if (!config.yAxis?.inlineLabel) {
      config.yAxis.inlineLabel = config.dataFormat.suffix
    }

    config.dataFormat.suffix = ''

    return config
  } else if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      changeOnlyShowTopSuffixToInlineLabel(visualization)
    })
  }
}

const update_4_25_6 = config => {
  const ver = '4.25.6'
  const newConfig = _.cloneDeep(config)
  changeOnlyShowTopSuffixToInlineLabel(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_6
