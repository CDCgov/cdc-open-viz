const update_4_23 = async config => {
  const ver = 4.23

  let newConfig = { ...config }

  if ((!config.validated || config.validated <= ver) && !config.visual.validated) {
    if (newConfig.visualizationType !== 'Spark Line') {
      newConfig.visual = {
        ...newConfig.visual,
        border: false,
        accent: false,
        background: false,
        validated: '4_23_10'
      }
    }

    if ('dashboard' in newConfig && 'visualizations' in newConfig) {
      let chartGroups = newConfig.visualizations.filter(v => v.type === 'chart')

      console.log('chart groups', chartGroups)
      chartGroups.map(c => {
        if (c.visualizationType !== 'Spark Line') {
          newConfig.visual = {
            ...newConfig.visual,
            border: false,
            accent: false,
            background: false,
            validated: '4_23_10'
          }
        }
      })
    }
  }

  newConfig.validated = ver
  return newConfig
}

export default update_4_23
