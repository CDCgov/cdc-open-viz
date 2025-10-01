const getVizTitle = (config) => {
  if (config?.title) {
    return String(config.title).toLowerCase()
  } else if (config?.general?.title) {
    return String(config.general.title).toLowerCase()
  } else {
    return 'none'
  }
}

const getVizSubType = config => {
  if (config?.general?.geoType) {
    return `${config.general.geoType}`
  }

  if (config?.type === 'chart') {
    return 'chart'
  }
}

export { getVizTitle, getVizSubType }
