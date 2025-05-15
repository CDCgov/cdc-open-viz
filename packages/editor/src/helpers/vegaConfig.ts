import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { formatDate } from '@cdc/core/helpers/cove/date.js'
import { _ } from 'lodash'
import * as vegaLite from 'vega-lite'
import * as vega from 'vega'

const CURVE_LOOKUP = {
  linear: 'Linear',
  cardinal: 'Cardinal',
  natural: 'Natural',
  monotone: 'Monotone X',
  step: 'Step',
  basis: 'Curve Basis'
}

export const parseVegaConfig = vegaConfig => {
  try {
    vegaConfig = vegaLite.compile(vegaConfig).spec
  } catch {}
  console.log('------------- vega config -------------')
  console.log(vegaConfig)
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
  const marks = vegaConfig.marks.map(m => (m.type === 'group' && m.marks ? m.marks[0] : m))
  const mainMarks = marks.filter(m => ['rect', 'line', 'area'].includes(m.type))
  return mainMarks.length ? mainMarks[0] : undefined
}

const getStack = vegaConfig => {
  const stackData = vegaConfig.data.find(d => d.transform?.find(t => t.type === 'stack'))
  return stackData ? stackData.transform.find(t => t.type === 'stack') : undefined
}

const groupByMultiple = (array, keys) => {
  return _.groupBy(array, item => keys.map(key => item[key]).join('-'))
}

const getGroupedData = (data, groupBy) => {
  if (groupBy.length > 1) {
    return groupByMultiple(data, groupBy)
  }
  return _.groupBy(data, groupBy[0])
}

const getMaxGroupSize = (data, groupBy) => {
  return Math.max(...Object.values(getGroupedData(data, groupBy)).map(d => d.length))
}

const getVegaData = vegaConfig => {
  const mainMark = getMainMark(vegaConfig)
  const groupMark = getGroupMark(vegaConfig)
  const name = groupMark?.from?.facet?.data || mainMark.from.data
  const view = new vega.View(vega.parse(vegaConfig)).run()
  const data = view.data(name)
  const keysToRemove = getKeysToRemove(vegaConfig)
  data.forEach(d => {
    keysToRemove.forEach(k => delete d[k])
    Object.keys(d).forEach(k => {
      if (d[k] > 1000000000 && d[k] % 1000 === 0) {
        d[k] = new Date(d[k])
      }
      if (d[k] instanceof Date) {
        d[k] = formatDate('%Y-%m-%d', d[k] - 1000 * 60 * 60 * 10)
      }
    })
  })
  console.log('------------- vega data -------------')
  console.log(data)
  return data
}

const getGroupMark = vegaConfig => {
  return vegaConfig.marks.find(m => m.type === 'group')
}

const getSeriesKey = (vegaConfig, xField, yField) => {
  const groupMark = getGroupMark(vegaConfig)
  let seriesKey = groupMark?.from?.facet?.groupby
  if (seriesKey) return seriesKey

  const mainMark = getMainMark(vegaConfig)
  const enterEncoder = mainMark.encode.enter
  const updateEncoder = mainMark.encode.update
  seriesKey =
    enterEncoder?.fill?.field ||
    updateEncoder?.fill?.field ||
    enterEncoder?.stroke?.field ||
    updateEncoder?.stroke?.field
  if (seriesKey) return seriesKey

  const stack = getStack(vegaConfig)
  if (stack) {
    const vegaData = getVegaData(vegaConfig)
    const groupBy = _.difference(stack.groupby, [xField, yField])
    if (getMaxGroupSize(vegaData, groupBy) > 1) {
      let possibleKeys = _.difference(Object.keys(vegaData[0]), [xField, yField])
      const groupSizes = Object.fromEntries(possibleKeys.map(k => [k, getMaxGroupSize(vegaData, [...groupBy, ...[k]])]))
      possibleKeys = possibleKeys.filter(k => groupSizes[k] > 1)
      if (possibleKeys.length) {
        return possibleKeys.sort((a, b) => (groupSizes[a] > groupSizes[b] ? 1 : -1))[0]
      }
    }
  }
  return undefined
}

const getKeysToRemove = vegaConfig => {
  let keysToRemove = []
  const stack = getStack(vegaConfig)
  if (stack) {
    keysToRemove = [...keysToRemove, ...(stack.as || ['y0', 'y1'])]
  }
  return keysToRemove
}

const getXDateFormat = (xField, vegaData) => {
  const str = vegaData[0][xField].toString()
  if (str.match(/\d{4}\-\d{2}\-\d{2}/)) {
    return '%Y-%m-%d'
  } else if (str.match(/\d{2}\-\d{2}\-\d{4}/)) {
    return '%m-%d-%Y'
  } else if (str.match(/\d{2}\/\d{2}\/\d{4}/)) {
    return '%m/%d/%Y'
  }
}

export const convertVegaConfig = (configType: string, vegaConfig: any, config: any) => {
  delete config.newViz

  const vegaData = getVegaData(vegaConfig)

  config.vegaType = configType

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

    const xDateFormat = getXDateFormat(xField, vegaData)
    const bottomAxis = vegaConfig.axes.sort((a, b) => (a.grid ? 1 : -1)).find(a => a.orient === 'bottom')
    config.xAxis = config.xAxis || {}
    config.xAxis.dataKey = xField
    config.xAxis.label = bottomAxis?.title
    if (xDateFormat) {
      config.xAxis.type = configType === 'Bar' ? 'date' : 'date-time'
      config.xAxis.dateParseFormat = xDateFormat
      config.xAxis.dateDisplayFormat = '%b. %Y'
      config.xAxis.showYearsOnce = true
      config.xAxis.label = ''
    }

    const leftAxis = vegaConfig.axes.sort((a, b) => (a.grid ? 1 : -1)).find(a => a.orient === 'left')
    config.yAxis = config.yAxis || {}
    config.yAxis.label = leftAxis?.title

    if (seriesKey) {
      config.visualizationSubType = stack && getMaxGroupSize(vegaData, stack.groupby) > 1 ? 'stacked' : ''

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
          dataKey: yField,
          type: configType,
          axis: 'Left',
          tooltip: true
        }
      ]
    }

    config.legend = {
      hide: !seriesKey,
      label: seriesKey
    }

    const interpolateValue = enterEncoder?.interpolate?.value || updateEncoder?.interpolate?.value
    if (configType == 'Area Chart' && interpolateValue) {
      config.stackedAreaChartLineType = CURVE_LOOKUP[interpolateValue]
    }
  }

  if (vegaData) {
    config.data = vegaData
    config = loadedVegaConfigData(config)
  }

  console.log('------------- cove config -------------')
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
