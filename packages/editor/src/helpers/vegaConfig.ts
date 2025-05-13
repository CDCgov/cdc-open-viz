import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { _ } from 'lodash'
import * as vegaLite from 'vega-lite'

const CURVE_LOOKUP = {
  linear: 'Linear',
  cardinal: 'Cardinal',
  natural: 'Natural',
  monotone: 'Monotone X',
  step: 'Step',
  basis: 'Curve Basis'
}

export const parseVegaConfig = vegaConfig => {
  if (vegaConfig['$schema'].includes('vega-lite')) {
    vegaConfig = vegaLite.compile(vegaConfig).spec
  }
  return vegaConfig
}

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
  const stackData = vegaConfig.data.find(d => d.transform?.find(t => t.type === 'stack'))
  return stackData ? stackData.transform.find(t => t.type === 'stack') : undefined
}

const getStackedData = (stack, data) => {
  return _.groupBy(data, stack.groupby[0])
}

const getMaxStackSize = (stack, data) => {
  return Math.max(...Object.values(getStackedData(stack, data)).map(d => d.length))
}

const getVegaData = vegaConfig => {
  const vegaData = Array.isArray(vegaConfig.data) ? vegaConfig.data.find(d => d.values) : vegaConfig.data
  return Array.isArray(vegaData?.values) ? vegaData.values : undefined
}

const getGroupMark = vegaConfig => {
  return vegaConfig.marks.find(m => m.type === 'group')
}

const getSeriesKey = (vegaConfig, xField, yField) => {
  const groupMark = getGroupMark(vegaConfig)
  let seriesKey = groupMark?.from?.facet?.groupby
  const stack = getStack(vegaConfig)
  const vegaData = getVegaData(vegaConfig)
  if (stack && !seriesKey && getMaxStackSize(stack, vegaData) > 1) {
    seriesKey = _.difference(Object.keys(vegaData[0]), [xField, yField])[0]
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
    const stack = getStack(vegaConfig)
    const stackField = stack?.field
    const mainMark = getMainMark(vegaConfig)
    const enterEncoder = mainMark.encode.enter
    const updateEncoder = mainMark.encode.update
    const xField = enterEncoder?.x?.field || updateEncoder?.x?.field
    const yField = stackField || enterEncoder?.y?.field || updateEncoder?.y?.field
    const seriesKey = getSeriesKey(vegaConfig, xField, yField)

    const bottomAxis = vegaConfig.axes.find(a => a.orient === 'bottom')
    config.xAxis = config.xAxis || {}
    config.xAxis.dataKey = xField
    config.xAxis.label = bottomAxis?.title

    const leftAxis = vegaConfig.axes.find(a => a.orient === 'left')
    config.yAxis = config.yAxis || {}
    config.yAxis.label = leftAxis?.title

    if (seriesKey) {
      config.visualizationSubType = stack ? 'stacked' : ''

      config.dataDescription = {
        horizontal: false,
        series: true,
        singleRow: false,
        seriesKey: seriesKey,
        xKey: xField,
        valueKeysTallSupport: [yField]
      }
    } else {
      config.dataDescription = {
        horizontal: false,
        series: false,
        singleRow: true
      }

      config.series = [
        {
          dataKey: stackField || yField,
          type: configType,
          axis: 'Left',
          tooltip: true
        }
      ]
    }

    config.legend = {
      hide: !seriesKey
    }

    const interpolateValue = enterEncoder?.interpolate?.value || updateEncoder?.interpolate?.value
    if (configType == 'Area Chart' && interpolateValue) {
      config.stackedAreaChartLineType = CURVE_LOOKUP[interpolateValue]
    }
  }

  const vegaData = getVegaData(vegaConfig)
  if (vegaData) {
    config.data = vegaData
    config = loadedVegaConfigData(config)
  }

  console.log(config)

  return config
}

export const loadedVegaConfigData = (config: any) => {
  const seriesKey = config.dataDescription.seriesKey
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
