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

const update_4_26_10 = config => {
  const newConfig = cloneConfig(config)
  removeAnnotationColors(newConfig)
  newConfig.version = '4.26.10'
  return newConfig
}

export { removeAnnotationColors }
export default update_4_26_10
