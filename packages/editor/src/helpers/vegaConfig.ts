export const getVegaConfigType = vegaConfig => {
  if (vegaConfig.projections) {
    return 'Map'
  } else if (vegaConfig.mark === 'bar') {
    return 'Bar'
  } else {
    return 'Line'
  }
}

export const convertVegaConfig = (configType: string, vegaConfig: any, config: any) => {
  delete config.newViz

  config.vegaType = configType
  config.vegaConfig = vegaConfig

  config.showTitle = false
  config.table = config.table || { expanded: false }

  if (configType === 'Bar') {
    config.xAxis.dataKey = vegaConfig.encoding.x.field

    config.dataDescription = {
      horizontal: false,
      series: false
    }

    config.series = [
      {
        dataKey: vegaConfig.encoding.y.field,
        type: 'Bar',
        axis: 'Left',
        tooltip: true
      }
    ]

    config.legend = {
      hide: true
    }
  } else if (configType === 'Line') {
    config.xAxis = config.xAxis || {}
    config.xAxis.dataKey = vegaConfig.marks[0].marks[0].encode.enter.x.field

    config.dataDescription = {
      horizontal: false,
      series: true,
      singleRow: false,
      seriesKey: vegaConfig.marks[0].from.facet.groupby,
      xKey: config.xAxis.dataKey,
      valueKeys: [vegaConfig.marks[0].marks[0].encode.enter.y.field]
    }
  } else if (configType === 'Map') {
    const geoData = vegaConfig.data.find(d => d.format?.type === 'topojson')
    const transform = geoData.transform.find(t => t.type === 'lookup')

    config.columns ||= {}
    config.columns.geo = {
      name: transform.fields[0],
      label: 'Location',
      dataTable: true
    }
    config.columns.primary = {
      name: transform.values[0],
      label: transform.values[0],
      dataTable: true,
      tooltip: true
    }
    console.log(config.columns)
  }

  const vegaData = Array.isArray(vegaConfig.data) ? vegaConfig.data[0] : vegaConfig.data
  if (Array.isArray(vegaData?.values)) {
    config.data = vegaData.values
    config = loadedVegaConfigData(config)
  }

  console.log(config)

  return config
}

export const loadedVegaConfigData = (config: any) => {
  if (config.vegaType === 'Line') {
    if (!config.series) {
      const seriesVals = [...new Set(config.data.map(d => d[config.dataDescription.seriesKey]))]
      config.series = seriesVals.map(val => {
        return {
          dataKey: val,
          type: 'Line',
          axis: 'Left',
          tooltip: true
        }
      })
    }
  }
  return config
}
