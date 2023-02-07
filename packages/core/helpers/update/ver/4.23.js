const update423 = (config) => {
  const ver = 4.23

  let newConfig = { ...config }

  if (!config.validated || config.validated < ver) {

    // Convert theme definition in config to color only
    if (newConfig.theme.includes("theme-")) {
      newConfig.theme = newConfig.theme.split('-')[1]
    }

    // Remove old visual config entries since these were consolidated into a new format
    delete newConfig.hideBackgroundColor
    delete newConfig.roundedBorders
    delete newConfig.borderColorTheme

    // Config alterations complete
    // Add validation mark to config...
    newConfig.validated = ver
  }

  return newConfig
}

export default update423
