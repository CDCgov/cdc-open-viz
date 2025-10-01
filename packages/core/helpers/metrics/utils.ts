const getVizTitle = (config) => {
  if (config.type === 'dashboard') {
    return String(config?.dashboard?.title).toLowerCase()
  }
  if (config?.title) {
    return String(config.title).toLowerCase()
  } else if (config?.general?.title) {
    return String(config.general.title).toLowerCase()
  } else {
    return 'no title'
  }
}

const getVizSubType = config => {
  if (config.type === 'markup-include') {
    return `${config?.contentEditor?.title}`
  }
  if (config?.general?.geoType) {
    return `${config.general.geoType}`
  }

  if (config?.type === 'chart' && config?.visualizationType) {
    // Convert chart visualization type to format: chart_subtype
    // e.g., "Bar" -> "chart_bar", "Line" -> "chart_line"
    const subtype = String(config.visualizationType).toLowerCase().replace(/\s+/g, '_')
    return `${subtype}`
  }

  if (config?.type === 'chart') {
    return 'chart'
  }
}

export { getVizTitle, getVizSubType }
