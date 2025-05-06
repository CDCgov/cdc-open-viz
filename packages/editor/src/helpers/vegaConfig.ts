export const getVegaConfigType = vegaConfig => {
  if (vegaConfig.mark === 'bar') {
    return 'Bar'
  } else {
    return 'Line'
  }
}

export const convertVegaConfig = (configType, vegaConfig, config) => {
  delete config.newViz
  config.showTitle = false

  config.vegaType = configType
  config.vegaConfig = vegaConfig

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
      hide: true // only if one series
    }
  } else {
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
  }

  console.log(config)

  return config
}

export const loadedVegaConfigData = config => {
  if (config.vegaType === 'Line') {
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
  return config
}
