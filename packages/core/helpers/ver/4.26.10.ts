import cloneConfig from '../cloneConfig'

const removeAnnotationColors = config => {
  if (Array.isArray(config.annotations)) {
    config.annotations.forEach(annotation => {
      if (annotation) delete annotation.colors
    })
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(removeAnnotationColors)
  }
}

const preserveLegacyWaffleDataFormat = config => {
  if (config.type === 'waffle-chart' && config.dataFormat?.commas === undefined) {
    config.dataFormat = { ...(config.dataFormat || {}), commas: false }
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(preserveLegacyWaffleDataFormat)
  }
}

const update_4_26_10 = config => {
  const newConfig = cloneConfig(config)
  removeAnnotationColors(newConfig)
  preserveLegacyWaffleDataFormat(newConfig)
  newConfig.version = '4.26.10'
  return newConfig
}

export { preserveLegacyWaffleDataFormat, removeAnnotationColors }
export default update_4_26_10
