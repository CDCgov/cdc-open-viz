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

const SUPPORTED_MARKS = ['rect', 'line', 'area', 'shape', 'symbol']
const COMBO_MARKS = { rect: 'Bar', line: 'Line', area: 'Area Chart' }

export const isVegaConfig = config => {
  return (
    config.scales ||
    config.axes ||
    config.marks ||
    config.layer ||
    config.params ||
    config.transform ||
    config.projection ||
    config.encoding ||
    config.spec
  )
}

export const getVegaErrors = (vegaOrVegaLiteConfig, vegaConfig) => {
  const errors = []

  const data = extractCoveData(vegaConfig)

  if (vegaOrVegaLiteConfig.repeat || vegaOrVegaLiteConfig.spec) {
    errors.push("COVE's Vega importer does not support vega-lite's repeat/spec operator.")
  }

  const configType = getVegaConfigType(vegaConfig)
  if (!configType) {
    errors.push(
      `COVE's Vega importer could not find a COVE chart type that matches this Vega config. Supported marks are: ${SUPPORTED_MARKS.join(
        ', '
      )}.`
    )
  }

  if (data.length === 0 && errors.length === 0) {
    errors.push(
      "No data was found in the Vega config. COVE's Vega importer requires data to be embedded in the config; if the config was exported from 1CDP, make sure it was copied from the Preview tab."
    )
  }

  const stack = getStack(vegaConfig)
  if (configType === 'Combo Chart' && stack && getMaxGroupSize(data, stack.groupby) > 1) {
    const comboMarks = getComboMarks(vegaConfig)
    errors.push(
      `This config contains multiple types of marks (${comboMarks
        .map(m => m.type)
        .join(
          ', '
        )}) and one of them appears to be stacked. COVE's combo charts do not support both stacked and unstacked data (e.g. a stacked bar chart with a line).`
    )
  }

  if (errors.length) {
    errors.push('Reach out to the COVE team if you think this Vega config should be supported.')
  }

  return errors
}

export const getVegaWarnings = (vegaOrVegaLiteConfig, vegaConfig) => {
  const warnings = []

  const configType = getVegaConfigType(vegaConfig)
  const allMarks = getMarks(vegaConfig)
  const comboMarks = getComboMarks(vegaConfig)
  const allMarksTypeCount = [...new Set(allMarks.map(m => m.type))].length
  if (
    (configType !== 'Combo Chart' && allMarksTypeCount > 1) ||
    (configType === 'Combo Chart' && allMarks.length > comboMarks.length)
  ) {
    warnings.push(
      `This Vega config contains multiple types of marks (${allMarks
        .map(m => m.type)
        .join(', ')}), but COVE's combo charts only support these types of marks: (${Object.keys(COMBO_MARKS).join(
        ', '
      )}). Not all marks were imported.`
    )
  }

  return warnings
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

  const comboMarks = getComboMarks(vegaConfig)
  const typeCount = [...new Set(comboMarks.map(m => m.type))].length
  if (comboMarks.length > 1 && typeCount > 1) {
    return 'Combo Chart'
  }

  const mainMark = getMainMark(vegaConfig)
  if (!mainMark) {
    return
  }

  if (mainMark.type === 'line') {
    return 'Line'
  } else if (mainMark.type === 'rect') {
    return 'Bar'
  } else if (mainMark.type === 'area') {
    return 'Area Chart'
  } else if (mainMark.type === 'symbol') {
    return 'Scatter Plot'
  }
}

const getMainMark = vegaConfig => {
  let allMarks = getMarks(vegaConfig)
  if (!allMarks.length) return
  if (allMarks.length === 1) return allMarks[0]
  const dataSizes = Object.fromEntries(
    allMarks.map(mark => [mark.from?.data, getVegaData(vegaConfig, mark.from?.data).length])
  )
  return allMarks.sort((a, b) => (dataSizes[a.from?.data] < dataSizes[b.from?.data] ? 1 : -1))[0]
}

const getMarks = vegaConfig => {
  const marks = vegaConfig.marks.map(m =>
    m.type === 'group' && m.marks ? m.marks.find(mm => SUPPORTED_MARKS.includes(mm.type)) : m
  )
  return marks.filter(m => m && SUPPORTED_MARKS.includes(m.type))
}

const getComboMarks = vegaConfig => {
  const allMarks = getMarks(vegaConfig)
  return allMarks.filter(m => Object.keys(COMBO_MARKS).includes(m.type))
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

const mergeByKeys = (a1, a2, k1, k2) =>
  a1.map(itm => ({
    ...a2.find(item => item[k2] === itm[k1] && item),
    ...itm
  }))

const getVegaData = (vegaConfig, name) => {
  if (!name) return []
  const view = new vega.View(vega.parse(vegaConfig)).run()
  try {
    return view.data(name) || []
  } catch (error) {
    return []
  }
}

export const extractCoveData = vegaConfig => {
  const marks = getMarks(vegaConfig)
  const mainMark = getMainMark(vegaConfig)
  const groupMark = getGroupMark(vegaConfig)
  const facetName = groupMark?.from?.facet?.data
  const name = facetName || mainMark?.from?.data
  let data = getVegaData(vegaConfig, name)

  if (data.length === 0) return data

  if (!facetName) {
    const otherNames = [...new Set(getMarks(vegaConfig).map(m => m.from?.data))].filter(n => n)
    _.difference(otherNames, [name]).forEach(on => {
      let mergedData
      const otherData = getVegaData(vegaConfig, on)
      const keys1 = Object.keys(data[0]).filter(k => new Set(data.map(d => d[k])).size === data.length)
      const keys2 = Object.keys(otherData[0]).filter(k => new Set(otherData.map(d => d[k])).size === data.length)
      keys1.forEach(k1 => {
        keys2.forEach(k2 => {
          mergedData = mergeByKeys(data, otherData, k1, k2)
          if (mergedData.filter(d => d.hasOwnProperty(k1) && d.hasOwnProperty(k2)).length === data.length) {
            data = mergedData
          }
        })
      })
    })
  }

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
    const keys = Object.keys(data[0])
    const sortField =
      (sortDomain.sort.field && keys.includes(sortDomain.sort.field) ? sortDomain.sort.field : null) || sortDomain.field
    if (sortField) {
      const sortDirection = sortDomain.sort.order === 'descending' ? -1 : 1
      data.sort((a, b) => (a[sortField] > b[sortField] ? sortDirection : sortDirection * -1))
    }
  }

  console.log('------------- cove data -------------')
  console.log(data)
  return data
}

const getGroupMark = vegaConfig => {
  return vegaConfig.marks.find(m => m.type === 'group')
}

const isValidSeriesKey = (seriesKey, data) => {
  const seriesVals = [...new Set(data.map(d => d[seriesKey]))]
  const maxGroupSize = getMaxGroupSize(data, [seriesKey])
  return seriesVals.length > 1 && seriesVals.length <= 10 && maxGroupSize > 1
}

const getSeriesKey = (vegaConfig, data, xField, yField) => {
  const configType = getVegaConfigType(vegaConfig)
  if (['Scatter Plot', 'Combo Chart'].includes(configType)) return

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
  if (isValidSeriesKey(seriesKey, data)) return seriesKey

  const groupMark = getGroupMark(vegaConfig)
  seriesKey = groupMark?.from?.facet?.groupby
  if (isValidSeriesKey(seriesKey, data)) return seriesKey

  const stack = getStack(vegaConfig)
  if (stack) {
    const groupBy = _.difference(stack.groupby, [xField, yField])
    if (getMaxGroupSize(data, groupBy) > 1) {
      let possibleKeys = _.difference(Object.keys(data[0]), [xField, yField])
      const groupSizes = Object.fromEntries(possibleKeys.map(k => [k, getMaxGroupSize(data, [...groupBy, ...[k]])]))
      possibleKeys = possibleKeys.filter(k => groupSizes[k] > 1 && isValidSeriesKey(k, data))
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

const getXDateFormat = (xField, data) => {
  const str = data[0][xField].toString()
  if (str.match(/\d{4}\-\d{2}\-\d{2}/)) {
    return '%Y-%m-%d'
  } else if (str.match(/\d{2}\-\d{2}\-\d{4}/)) {
    return '%m-%d-%Y'
  } else if (str.match(/\d{2}\/\d{2}\/\d{4}/)) {
    return '%m/%d/%Y'
  }
}

const getGeoName = (data: { [key: string]: any }[]) => {
  const keys = Object.keys(data[0])
  const lowerStates = states.map(s => s.toLowerCase())
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (lowerStates.includes(`${data[i][keys[j]]}`.toLowerCase())) {
        return keys[j]
      }
    }
  }
}

export const updateVegaData = (vegaConfig, newData) => {
  const newConfig = JSON.parse(JSON.stringify(vegaConfig))
  newConfig.data.forEach(d => {
    if (newData[d.name]) {
      d.values = newData[d.name]
    }
  })
  return newConfig
}

const stripVegaData = vegaConfig => {
  const newConfig = JSON.parse(JSON.stringify(vegaConfig))
  newConfig.data.forEach(d => {
    if (d.values?.arcs) {
      d.values.arcs = d.values.arcs.map(a => 0)
    } else if (Array.isArray(d.values)) {
      d.values = d.values.slice(0, 3)
    }
  })
  return newConfig
}

export const getSampleVegaJson = vegaConfig => {
  return JSON.stringify(
    Object.fromEntries(
      vegaConfig.data.filter(d => d.values && !(d.format?.type === 'topojson')).map(d => [d.name, d.values])
    ),
    null,
    2
  )
}

export const convertVegaConfig = (configType: string, vegaConfig: any, config: any) => {
  delete config.newViz

  const data = extractCoveData(vegaConfig)

  config.vegaType = configType
  config.vegaConfig = stripVegaData(vegaConfig)

  config.dataFileName = 'vega-data.json'
  config.dataFileSourceType = 'file'

  config.table = config.table || { expanded: false }

  config.title = vegaConfig.title?.text
  config.showTitle = config.title ? true : false

  if (config.vegaType === 'Map') {
    const geoName = getGeoName(data)
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
      updateEncoder?.x?.field ||
      enterEncoder?.x?.field ||
      updateEncoder?.x2?.field ||
      enterEncoder?.x2?.field ||
      updateEncoder?.xc?.field ||
      enterEncoder?.xc?.field
    let yField =
      updateEncoder?.y?.field ||
      enterEncoder?.y?.field ||
      updateEncoder?.y2?.field ||
      enterEncoder?.y2?.field ||
      updateEncoder?.yc?.field ||
      enterEncoder?.yc?.field

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

    const seriesKey = getSeriesKey(vegaConfig, data, xField, yField)

    const xDateFormat = getXDateFormat(xField, data)
    config.xAxis = config.xAxis || {}
    config.xAxis.dataKey = xField
    config.xAxis.label = (isHorizontalBar ? leftAxis?.title : bottomAxis?.title) || ''
    if (config.vegaType === 'Scatter Plot') {
      config.xAxis.type = 'continuous'
    }
    if (xDateFormat) {
      config.xAxis.type = config.vegaType === 'Bar' ? 'date' : 'date-time'
      config.xAxis.dateParseFormat = xDateFormat
      config.xAxis.dateDisplayFormat = '%b. %Y'
      config.xAxis.showYearsOnce = true
      config.xAxis.label = ''

      config.tooltips = config.tooltips || {}
      config.tooltips.dateDisplayFormat = '%B %-d, %Y'

      config.table = config.table || {}
      config.table.dateDisplayFormat = '%B %-d, %Y'
    }

    config.yAxis = config.yAxis || {}
    config.yAxis.label = (isHorizontalBar ? bottomAxis?.title : leftAxis?.title) || ''

    if (seriesKey) {
      config.visualizationSubType = stack && getMaxGroupSize(data, stack.groupby) > 1 ? 'stacked' : ''

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

      if (config.vegaType === 'Combo Chart') {
        const comboMarks = getComboMarks(vegaConfig)

        config.series = comboMarks.map(mark => {
          const enterEncoder = mark.encode.enter
          const updateEncoder = mark.encode.update
          let yField =
            updateEncoder?.y?.field || enterEncoder?.y?.field || updateEncoder?.y2?.field || enterEncoder?.y2?.field
          return {
            dataKey: yField.replace('_end', ''),
            type: COMBO_MARKS[mark.type],
            axis: 'Left',
            tooltip: true
          }
        })
      } else {
        config.series = [
          {
            dataKey: yField,
            type: config.vegaType,
            axis: 'Left',
            tooltip: true
          }
        ]
      }
    }

    config.legend = {
      hide: !seriesKey && config.vegaType !== 'Combo Chart',
      label: seriesKey,
      position: 'top'
    }

    const interpolateValue = updateEncoder?.interpolate?.value || enterEncoder?.interpolate?.value
    if (config.vegaType == 'Area Chart' && interpolateValue) {
      config.stackedAreaChartLineType = CURVE_LOOKUP[interpolateValue]
    }

    Object.assign(config.yAxis, {
      size: 60,
      gridLines: true,
      hideAxis: !isHorizontalBar,
      hideTicks: true
    })
    Object.assign(config.xAxis, {
      size: isHorizontalBar ? 30 : null
    })
    Object.assign(config, {
      isolatedDotsSameSize: true,
      barThickness: 0.8
    })
  }

  if (data) {
    config.data = data
    config = loadedVegaConfigData(config)
  }

  console.log('------------- cove config -------------')
  console.log(config)

  return config
}

export const loadedVegaConfigData = (config: any) => {
  const seriesKey = config.dataDescription?.seriesKey
  if (seriesKey) {
    if (!config.series) {
      const seriesVals = [...new Set(config.data.map(d => d[seriesKey]))].sort((a, b) => (a > b ? 1 : -1))
      config.series = seriesVals.map(val => {
        return {
          dataKey: val,
          type: config.vegaType,
          axis: 'Left',
          tooltip: true
        }
      })
    }
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
