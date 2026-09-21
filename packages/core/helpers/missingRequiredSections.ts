export type MissingRequiredField = {
  target:
    | 'data-series'
    | 'date-category-axis'
    | 'pie-data-column'
    | 'pie-segments'
    | 'radar-category'
    | 'sankey-source'
    | 'sankey-target'
    | 'sankey-value'
    | 'forest-study'
    | 'forest-type'
    | 'forest-estimate'
    | 'forest-lower'
    | 'forest-upper'
  sectionTarget?: string
  section: string
  field: string
}

const EXEMPT_VISUALIZATION_TYPES = ['Forecasting']

const isSeriesMissing = (config: any): boolean =>
  (undefined === config?.series || false === config?.series.length > 0) && !config?.dynamicSeries

export const getMissingRequiredFields = (config: any): MissingRequiredField[] => {
  if (!config || EXEMPT_VISUALIZATION_TYPES.includes(config.visualizationType)) return []

  const missingFields: MissingRequiredField[] = []

  if (config.visualizationType === 'Sankey') {
    const columns = config.sankey?.columns || {}
    const availableColumns =
      Array.isArray(config.data) && config.data.length > 0 && config.data[0] && typeof config.data[0] === 'object'
        ? Object.keys(config.data[0])
        : []
    const isMissingColumn = (column: unknown) =>
      !column || (availableColumns.length > 0 && !availableColumns.includes(String(column)))

    if (isMissingColumn(columns.source)) {
      missingFields.push({
        target: 'sankey-source',
        sectionTarget: 'sankey-columns',
        section: 'Sankey',
        field: 'Source Column'
      })
    }
    if (isMissingColumn(columns.target)) {
      missingFields.push({
        target: 'sankey-target',
        sectionTarget: 'sankey-columns',
        section: 'Sankey',
        field: 'Target Column'
      })
    }
    if (isMissingColumn(columns.value)) {
      missingFields.push({
        target: 'sankey-value',
        sectionTarget: 'sankey-columns',
        section: 'Sankey',
        field: 'Value Column'
      })
    }
    return missingFields
  }

  if (config.visualizationType === 'Forest Plot') {
    const forestPlot = config.forestPlot || {}
    const availableColumns =
      Array.isArray(config.data) && config.data.length > 0 && config.data[0] && typeof config.data[0] === 'object'
        ? Object.keys(config.data[0])
        : []
    const isMissingColumn = (column: unknown) =>
      !column || (availableColumns.length > 0 && !availableColumns.includes(String(column)))
    const addMissingForestField = (target: MissingRequiredField['target'], field: string) =>
      missingFields.push({ target, sectionTarget: 'forest-plot-settings', section: 'Forest Plot Settings', field })

    if (isMissingColumn(config.xAxis?.dataKey)) addMissingForestField('forest-study', 'Study Column')
    if (!forestPlot.type) addMissingForestField('forest-type', 'Forest Plot Type')
    if (isMissingColumn(forestPlot.estimateField)) {
      addMissingForestField('forest-estimate', 'Point Estimate Column')
    }
    if (isMissingColumn(forestPlot.lower)) addMissingForestField('forest-lower', 'Lower CI Column')
    if (isMissingColumn(forestPlot.upper)) addMissingForestField('forest-upper', 'Upper CI Column')
    return missingFields
  }

  if (config.visualizationType === 'Pie') {
    if (!config?.yAxis.dataKey) {
      missingFields.push({ target: 'pie-data-column', section: 'Data Format', field: 'Data Column' })
    }
    if (!config.xAxis?.dataKey) {
      missingFields.push({ target: 'pie-segments', section: 'Segments', field: 'Segment Labels' })
    }
    return missingFields
  }

  if (config.visualizationType === 'HeatMap') {
    if (!Array.isArray(config?.series) || config.series.length === 0) {
      missingFields.push({ target: 'data-series', section: 'Data Series', field: 'Add Data Series' })
    }
    if (!config.xAxis?.dataKey) {
      missingFields.push({ target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' })
    }
    return missingFields
  }

  if (config.visualizationType === 'Radar') {
    if (!Array.isArray(config.series) || config.series.length < 3) {
      missingFields.push({ target: 'data-series', section: 'Data Series', field: 'At Least 3 Data Series' })
    }
    if (!config.xAxis?.dataKey) {
      missingFields.push({ target: 'radar-category', section: 'Radar Chart Settings', field: 'Category Column' })
    }
    return missingFields
  }

  if (config.visualizationType === 'Paired Bar') {
    if (!Array.isArray(config.series) || config.series.length !== 2) {
      missingFields.push({ target: 'data-series', section: 'Data Series', field: 'Exactly 2 Data Series' })
    }
    if (!config.xAxis?.dataKey) {
      missingFields.push({ target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' })
    }
    return missingFields
  }

  if (config.visualizationType === 'Deviation Bar') {
    if (!Array.isArray(config.series) || config.series.length !== 1) {
      missingFields.push({ target: 'data-series', section: 'Data Series', field: 'Exactly 1 Data Series' })
    }
    if (!config.xAxis?.dataKey) {
      missingFields.push({ target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' })
    }
    return missingFields
  }

  if (config.isLollipopChart) {
    if (!Array.isArray(config.series) || config.series.length !== 1) {
      missingFields.push({ target: 'data-series', section: 'Data Series', field: 'Exactly 1 Data Series' })
    }
    if (!config.xAxis?.dataKey) {
      missingFields.push({ target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' })
    }
    return missingFields
  }

  if (isSeriesMissing(config)) {
    missingFields.push({ target: 'data-series', section: 'Data Series', field: 'Add Data Series' })
  }

  if (!config.xAxis?.dataKey) {
    missingFields.push({ target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' })
  }

  return missingFields
}

export const missingRequiredSections = config => {
  if (config.visualizationType === 'Sankey') return false // skip checks for now
  if (config.visualizationType === 'Forecasting') return false // skip required checks for now.
  if (config.visualizationType === 'Forest Plot') return false // skip required checks for now.
  if (config.visualizationType === 'HeatMap') {
    return !config?.xAxis?.dataKey || !Array.isArray(config?.series) || config.series.length === 0
  }
  if (config.visualizationType === 'Pie') {
    if (undefined === config?.yAxis.dataKey) {
      return true
    }
  } else {
    if ((undefined === config?.series || false === config?.series.length > 0) && !config?.dynamicSeries) {
      return true
    }
  }

  if (!config.xAxis.dataKey) {
    return true
  }

  return false
}
