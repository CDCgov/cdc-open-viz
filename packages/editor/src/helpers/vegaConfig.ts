import { DataTransform } from '@cdc/core/helpers/DataTransform'

export const getVegaConfigType = vegaConfig => {
  if (vegaConfig.projections) {
    return 'Map'
  }

  const mainMark = getMainMark(vegaConfig)
  if (!mainMark) {
    return undefined
  }

  if (mainMark.type === 'line') {
    return 'Line'
  } else if (mainMark.type === 'area') {
    return 'Area Chart'
  }
  return 'Bar'
}

const getMainMark = vegaConfig => {
  const marks = vegaConfig.marks.map(m => (m.type === 'group' ? m.marks[0] : m))
  const mainMarks = marks.filter(m => ['rect', 'line', 'area'].includes(m.type))
  return mainMarks.length ? mainMarks[0] : undefined
}

const getStack = vegaConfig => {
  return vegaConfig.data.length ? vegaConfig.data[0].transform?.find(t => t.type === 'stack') : undefined
}

const getGroupMark = vegaConfig => {
  return vegaConfig.marks.find(m => m.type === 'group')
}

const getSeriesKey = vegaConfig => {
  const groupMark = getGroupMark(vegaConfig)
  let seriesKey = groupMark?.from?.facet?.groupby
  const stack = getStack(vegaConfig)
  if (stack && !seriesKey) {
    seriesKey = stack.sort.field
  }
  return seriesKey
}

export const convertVegaConfig = (configType: string, vegaConfig: any, config: any) => {
  delete config.newViz

  config.vegaType = configType
  config.vegaConfig = vegaConfig

  config.showTitle = false
  config.table = config.table || { expanded: false }

  if (configType === 'Map') {
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
  } else {
    const mainMark = getMainMark(vegaConfig)
    const mainMarkEncoder = mainMark.encode.enter || mainMark.encode.update
    const seriesKey = getSeriesKey(vegaConfig)
    const stack = getStack(vegaConfig)

    config.xAxis = config.xAxis || {}

    if (configType === 'Bar' || configType === 'Area Chart') {
      config.xAxis.dataKey = mainMarkEncoder.x.field

      if (seriesKey) {
        config.visualizationSubType = stack ? 'stacked' : ''

        config.dataDescription = {
          horizontal: false,
          series: true,
          singleRow: false,
          seriesKey: seriesKey,
          xKey: config.xAxis.dataKey,
          valueKeysTallSupport: [vegaConfig.data[0].transform[0].field]
        }
      } else {
        config.dataDescription = {
          horizontal: false,
          series: false,
          singleRow: true
        }

        config.series = [
          {
            dataKey: mainMarkEncoder.y.field,
            type: configType,
            axis: 'Left',
            tooltip: true
          }
        ]
      }

      config.legend = {
        hide: !seriesKey
      }
    } else if (configType === 'Line') {
      config.xAxis.dataKey = mainMark.encode.enter.x.field

      config.dataDescription = {
        horizontal: false,
        series: true,
        singleRow: false,
        seriesKey: seriesKey,
        xKey: config.xAxis.dataKey,
        valueKeys: [mainMark.encode.enter.y.field]
      }
    }
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
  const seriesKey = getSeriesKey(config.vegaConfig)
  if (seriesKey && !config.series) {
    const seriesVals = [...new Set(config.data.map(d => d[seriesKey]))]
    config.series = seriesVals.map(val => {
      return {
        dataKey: val,
        type: config.vegaType,
        axis: 'Left',
        tooltip: true
      }
    })
    config.data.forEach(d => {
      d[seriesKey] = `${d[seriesKey]}`
    })
  }

  if (config.dataDescription) {
    const transform = new DataTransform()
    config.data = transform.autoStandardize(config.data)
    config.data = transform.developerStandardize(config.data, config.dataDescription)
  }

  return config
}
