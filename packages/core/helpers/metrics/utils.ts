const getVizTitle = (config) => {
  if (config?.type === 'dashboard') {
    return config?.dashboard?.title && String(config.dashboard.title).trim()
      ? String(config.dashboard.title).toLowerCase()
      : 'No Title'
  }
  if (config?.title && String(config.title).trim()) {
    return String(config.title).toLowerCase()
  } else if (config?.general?.title && String(config.general.title).trim()) {
    return String(config.general.title).toLowerCase()
  } else {
    return 'No Title'
  }
}

const getVizSubType = config => {
  if (config?.type === 'markup-include') {
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
