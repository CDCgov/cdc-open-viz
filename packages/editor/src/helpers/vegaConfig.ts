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

export const isVegaConfig = config => {
  return (
    config.scales ||
    config.axes ||
    config.marks ||
    config.layer ||
    config.params ||
    config.transform ||
    config.projection ||
    config.encoding
  )
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
    return
  }

  if (mainMark.type === 'line') {
    return 'Line'
  } else if (mainMark.type === 'area') {
    return 'Area Chart'
  } else if (mainMark.type === 'symbol') {
    return 'Scatter Plot'
  }
  return 'Bar'
}

const getMainMark = vegaConfig => {
  const marks = vegaConfig.marks.map(m => (m.type === 'group' && m.marks ? m.marks[0] : m))
  const mainMarks = marks.filter(m => ['rect', 'line', 'area', 'shape', 'symbol'].includes(m.type))
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

export const getVegaData = vegaConfig => {
  const mainMark = getMainMark(vegaConfig)
  const groupMark = getGroupMark(vegaConfig)
  const name = groupMark?.from?.facet?.data || mainMark.from.data
  const view = new vega.View(vega.parse(vegaConfig)).run()
  const data = view.data(name)
  const keysToRemove = getKeysToRemove(vegaConfig, data)
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
  const sortDomain = vegaConfig.scales?.find(s => s.domain?.sort)?.domain
  if (sortDomain) {
    const sortField = sortDomain.sort.field || sortDomain.field
    const sortDirection = sortDomain.sort.order === 'descending' ? -1 : 1
    data.sort((a, b) => (a[sortField] > b[sortField] ? sortDirection : sortDirection * -1))
  }

  console.log('------------- vega data -------------')
  console.log(data)
  return data
}

const getGroupMark = vegaConfig => {
  return vegaConfig.marks.find(m => m.type === 'group')
}

const isValidSeriesKey = (seriesKey, vegaData) => {
  const seriesVals = [...new Set(vegaData.map(d => d[seriesKey]))]
  return seriesVals.length > 1 && seriesVals.length <= 10
}

const getSeriesKey = (vegaConfig, vegaData, xField, yField) => {
  const configType = getVegaConfigType(vegaConfig)
  if (configType === 'Scatter Plot') return

  let seriesKey

  const mainMark = getMainMark(vegaConfig)
  const enterEncoder = mainMark.encode.enter
  const updateEncoder = mainMark.encode.update
  seriesKey =
    updateEncoder?.fill?.field ||
    enterEncoder?.fill?.field ||
    updateEncoder?.stroke?.field ||
    enterEncoder?.stroke?.field ||
    updateEncoder?.shape?.field ||
    enterEncoder?.shape?.field ||
    updateEncoder?.size?.field ||
    enterEncoder?.size?.field
  if (isValidSeriesKey(seriesKey, vegaData)) return seriesKey

  const groupMark = getGroupMark(vegaConfig)
  seriesKey = groupMark?.from?.facet?.groupby
  if (isValidSeriesKey(seriesKey, vegaData)) return seriesKey

  const stack = getStack(vegaConfig)
  if (stack) {
    const groupBy = _.difference(stack.groupby, [xField, yField])
    if (getMaxGroupSize(vegaData, groupBy) > 1) {
      let possibleKeys = _.difference(Object.keys(vegaData[0]), [xField, yField])
      const groupSizes = Object.fromEntries(possibleKeys.map(k => [k, getMaxGroupSize(vegaData, [...groupBy, ...[k]])]))
      possibleKeys = possibleKeys.filter(k => groupSizes[k] > 1 && isValidSeriesKey(k, vegaData))
      if (possibleKeys.length) {
        return possibleKeys.sort((a, b) => (groupSizes[a] > groupSizes[b] ? 1 : -1))[0]
      }
    }
  }
}

const getKeysToRemove = (vegaConfig, data) => {
  let keysToRemove = []
  const stack = getStack(vegaConfig)
  if (stack) {
    keysToRemove = [...keysToRemove, ...(stack.as || ['y0', 'y1'])]
  }
  Object.keys(data[0]).forEach(k => {
    if (typeof data[0][k] === 'object' && !(data[0][k] instanceof Date)) {
      keysToRemove.push(k)
    }
  })
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

const getGeoName = (vegaData: { [key: string]: any }[]) => {
  const keys = Object.keys(vegaData[0])
  const lowerStates = states.map(s => s.toLowerCase())
  for (let i = 0; i < vegaData.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (lowerStates.includes(`${vegaData[i][keys[j]]}`.toLowerCase())) {
        return keys[j]
      }
    }
  }
}

export const convertVegaConfig = (configType: string, vegaConfig: any, config: any) => {
  delete config.newViz

  const vegaData = getVegaData(vegaConfig)

  config.vegaType = configType

  config.dataFileName = 'vega-config.json'
  config.dataFileSourceType = 'file'

  config.table = config.table || { expanded: false }

  config.title = vegaConfig.title?.text
  config.showTitle = config.title ? true : false

  if (config.vegaType === 'Map') {
    const geoName = getGeoName(vegaData)
    const colorData = getMainMark(vegaConfig).encode.update.fill
    const colorLabel = vegaConfig.legends[0].title
    const vegaColorScale = vegaConfig.scales.find(s => s.name === colorData.scale)
    const legendItems = vegaColorScale.domain
    const legendType = vegaColorScale.type === 'ordinal' ? 'category' : 'equalnumber'

    if (!config.legend) config.legend = {}

    config.columns ||= {}
    config.columns.geo = {
      name: geoName,
      label: 'Location',
      dataTable: true
    }
    config.columns.primary = {
      name: colorData.field,
      label: colorLabel,
      dataTable: true,
      tooltip: true
    }
    config.legend = {
      type: legendType,
      additionalCategories: [...legendItems],
      categoryValuesOrder: [...legendItems],
      numberOfItems: legendItems.length,
      position: 'top',
      style: 'gradient',
      subStyle: 'linear blocks',
      hideBorder: true
    }
    config.color = 'sequential-blue-2(MPX)'
  } else {
    const stack = getStack(vegaConfig)
    const stackField = stack?.field
    const mainMark = getMainMark(vegaConfig)
    const groupMark = getGroupMark(vegaConfig)
    const enterEncoder = mainMark.encode.enter
    const updateEncoder = mainMark.encode.update
    let xField =
      updateEncoder?.x?.field || enterEncoder?.x?.field || updateEncoder?.x2?.field || enterEncoder?.x2?.field
    let yField =
      updateEncoder?.y?.field || enterEncoder?.y?.field || updateEncoder?.y2?.field || enterEncoder?.y2?.field

    const leftAxis = vegaConfig.axes.sort((a, b) => (a.grid ? 1 : -1)).find(a => a.orient === 'left')
    const bottomAxis = vegaConfig.axes.sort((a, b) => (a.grid ? 1 : -1)).find(a => a.orient === 'bottom')

    const yScale = vegaConfig.scales?.find(s => s.name === leftAxis?.scale)
    const isHorizontalBar = config.vegaType === 'Bar' && yScale?.type === 'band'

    if (isHorizontalBar) {
      ;[xField, yField] = [yField, xField]
      xField = groupMark?.from?.facet?.groupby || xField
      config.orientation = 'horizontal'
    }

    yField = stackField || yField

    const seriesKey = getSeriesKey(vegaConfig, vegaData, xField, yField)

    const xDateFormat = getXDateFormat(xField, vegaData)
    config.xAxis = config.xAxis || {}
    config.xAxis.dataKey = xField
    config.xAxis.label = isHorizontalBar ? leftAxis?.title : bottomAxis?.title
    if (config.vegaType === 'Scatter Plot') {
      config.xAxis.type = 'continuous'
    }
    if (xDateFormat) {
      config.xAxis.type = config.vegaType === 'Bar' ? 'date' : 'date-time'
      config.xAxis.dateParseFormat = xDateFormat
      config.xAxis.dateDisplayFormat = '%b. %Y'
      config.xAxis.showYearsOnce = true
      config.xAxis.label = ''
    }

    config.yAxis = config.yAxis || {}
    config.yAxis.label = isHorizontalBar ? bottomAxis?.title : leftAxis?.title

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
          type: config.vegaType,
          axis: 'Left',
          tooltip: true
        }
      ]
    }

    config.legend = {
      hide: !seriesKey,
      label: seriesKey,
      position: 'top'
    }

    const interpolateValue = updateEncoder?.interpolate?.value || enterEncoder?.interpolate?.value
    if (config.vegaType == 'Area Chart' && interpolateValue) {
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
  const seriesKey = config.dataDescription?.seriesKey
  if (seriesKey && !config.series) {
    const seriesVals = [...new Set(config.data.map(d => d[seriesKey]))].sort((a, b) => (a > b ? 1 : -1))
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
    config.formattedData = config.data
  }

  return config
}

export const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]
