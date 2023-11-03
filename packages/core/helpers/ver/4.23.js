const update_4_23 = async config => {
  const ver = 4.23

  let newConfig = { ...config }

  if (!config.validated || config.validated <= ver) {
    if (newConfig.visualizationType !== 'Spark Line') {
      newConfig.visual.border = false
      newConfig.visual.accent = false
      newConfig.visual.background = false
    }
  }

  newConfig.validated = ver
  return newConfig
}

export default update_4_23
