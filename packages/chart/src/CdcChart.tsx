import React, { useState, useEffect, useCallback, useRef, useId, useMemo } from 'react'

// IE11
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'
import * as d3 from 'd3-array'
import Layout from '@cdc/core/components/Layout'
import Button from '@cdc/core/components/elements/Button'

//types
import { DimensionsType } from '@cdc/core/types/Dimensions'
import { type DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

// External Libraries
import { scaleOrdinal } from '@visx/scale'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { timeParse, timeFormat } from 'd3-time-format'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Primary Components
import ConfigContext from './ConfigContext'
import PieChart from './components/PieChart'
import SankeyChart from './components/Sankey'
import LinearChart from './components/LinearChart'
import { isDateScale } from '@cdc/core/helpers/cove/date'

import { colorPalettesChart as colorPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'

import SparkLine from './components/Sparkline'
import Legend from './components/Legend'
import defaults from './data/initial-state'
import EditorPanel from './components/EditorPanel'
import { abbreviateNumber } from './helpers/abbreviateNumber'
import { handleChartTabbing } from './helpers/handleChartTabbing'
import { getQuartiles } from './helpers/getQuartiles'
import { sortAsc, sortDesc } from './helpers/sort'
import { handleChartAriaLabels } from './helpers/handleChartAriaLabels'
import { lineOptions } from './helpers/lineOptions'
import { handleLineType } from './helpers/handleLineType'
import { generateColorsArray } from './helpers/generateColorsArray'
import Loading from '@cdc/core/components/Loading'
import Filters from '@cdc/core/components/Filters'
import MediaControls from '@cdc/core/components/MediaControls'
import Annotation from './components/Annotations'

// Helpers
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { publish, subscribe, unsubscribe } from '@cdc/core/helpers/events'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import numberFromString from '@cdc/core/helpers/numberFromString'
import getViewport from '@cdc/core/helpers/getViewport'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import isNumber from '@cdc/core/helpers/isNumber'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { isConvertLineToBarGraph } from './helpers/isConvertLineToBarGraph'
import { calcInitialHeight } from './helpers/sizeHelpers'
import { isLegendWrapViewport, isMobileHeightViewport } from '@cdc/core/helpers/viewports'

import './scss/main.scss'
// load both then config below determines which to use
import DataTable from '@cdc/core/components/DataTable'
import { getFileExtension } from '@cdc/core/helpers/getFileExtension'
import Title from '@cdc/core/components/ui/Title'
import { ChartConfig } from './types/ChartConfig'
import { Label } from './types/Label'
import { type ViewportSize } from './types/ChartConfig'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import SkipTo from '@cdc/core/components/elements/SkipTo'
import { filterVizData } from '@cdc/core/helpers/filterVizData'
import LegendWrapper from './components/LegendWrapper'
import _ from 'lodash'

interface CdcChartProps {
  configUrl?: string
  config?: ChartConfig
  isEditor?: boolean
  isDebug?: boolean
  isDashboard?: boolean
  setConfig?: (config: ChartConfig) => void
  setEditing?: (editing: boolean) => void
  hostname?: string
  link?: string
  setSharedFilter?: (filter: any) => void
  setSharedFilterValue?: (value: any) => void
  dashboardConfig?: DashboardConfig
}
export default function CdcChart({
  configUrl,
  config: configObj,
  isEditor = false,
  isDebug = false,
  isDashboard = false,
  setConfig: setParentConfig,
  setEditing,
  hostname,
  link,
  setSharedFilter,
  setSharedFilterValue,
  dashboardConfig
}: CdcChartProps) {
  const transform = new DataTransform()
  const [loading, setLoading] = useState(true)
  const [colorScale, setColorScale] = useState(null)
  const [config, setConfig] = useState<ChartConfig>({} as ChartConfig)
  const [stateData, setStateData] = useState(configObj?.data || [])
  const [excludedData, setExcludedData] = useState<Record<string, number>[] | undefined>(undefined)
  const [filteredData, setFilteredData] = useState<Record<string, any>[] | undefined>(undefined)
  const [seriesHighlight, setSeriesHighlight] = useState<string[]>(
    configObj && configObj?.legend?.seriesHighlight?.length ? [...configObj?.legend?.seriesHighlight] : []
  )
  const [currentViewport, setCurrentViewport] = useState<ViewportSize>('lg')
  const [dimensions, setDimensions] = useState<DimensionsType>([0, 0])
  const [externalFilters, setExternalFilters] = useState<any[]>()
  const [container, setContainer] = useState()
  const [coveLoadedEventRan, setCoveLoadedEventRan] = useState(false)
  const [isDraggingAnnotation, setIsDraggingAnnotation] = useState(false)
  const [dynamicLegendItems, setDynamicLegendItems] = useState<any[]>([])
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)
  const [brushConfig, setBrushConfig] = useState({
    data: [],
    isActive: false,
    isBrushing: false
  })
  const [height, setHeight] = useState(calcInitialHeight(config, currentViewport))

  const { description, visualizationType } = config

  const legendRef = useRef(null)
  const parentRef = useRef(null)

  const handleDragStateChange = isDragging => {
    setIsDraggingAnnotation(isDragging)
  }

  if (isDebug) console.log('Chart config, isEditor', config, isEditor)

  // Destructure items from config for more readable JSX
  let { legend, title } = config

  // set defaults on titles if blank AND only in editor
  if (isEditor) {
    if (!title || title === '') title = 'Chart Title'
  }

  if (config.table && (!config.table?.label || config.table?.label === '')) config.table.label = 'Data Table'

  const { lineDatapointClass, contentClasses, sparkLineStyles } = useDataVizClasses(config)
  const legendId = useId()

  const checkLineToBarGraph = () => {
    return isConvertLineToBarGraph(config.visualizationType, filteredData, config.allowLineToBarGraph)
  }

  const reloadURLData = async () => {
    if (config.dataUrl) {
      const dataUrl = new URL(config.runtimeDataUrl || config.dataUrl, window.location.origin)
      let qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))

      let isUpdateNeeded = false
      config.filters?.forEach(filter => {
        if (filter.type === 'url' && qsParams[filter.queryParameter] !== decodeURIComponent(filter.active)) {
          qsParams[filter.queryParameter] = filter.active
          isUpdateNeeded = true
        }
      })

      if ((!config.formattedData || config.formattedData.urlFiltered) && !isUpdateNeeded) return

      let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${Object.keys(qsParams)
        .map((param, i) => {
          let qs = i === 0 ? '?' : '&'
          qs += param + '='
          qs += qsParams[param]
          return qs
        })
        .join('')}`

      let data: any[] = []

      try {
        const ext = getFileExtension(dataUrl.href)
        if ('csv' === ext || isSolrCsv(dataUrlFinal)) {
          data = await fetch(dataUrlFinal)
            .then(response => response.text())
            .then(responseText => {
              const parsedCsv = Papa.parse(responseText, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true
              })
              return parsedCsv.data
            })
        } else if ('json' === ext || isSolrJson(dataUrlFinal)) {
          data = await fetch(dataUrlFinal).then(response => response.json())
        } else {
          data = []
        }
      } catch {
        console.error(`Cannot parse URL: ${dataUrlFinal}`)
        data = []
      }

      if (config.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, config.dataDescription)
      }

      Object.assign(data, { urlFiltered: true })

      updateConfig({ ...config, runtimeDataUrl: dataUrlFinal, data, formattedData: data })

      if (data) {
        setStateData(data)
        setExcludedData(data)
        setFilteredData(filterVizData(config.filters, data))
      }
    }
  }

  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())

    // If data is included through a URL, fetch that and store
    let data: any[] = response.data || []

    const urlFilters = response.filters
      ? response.filters.filter(filter => filter.type === 'url').length > 0
        ? true
        : false
      : false

    if (response.dataUrl && !urlFilters) {
      try {
        const ext = getFileExtension(response.dataUrl)
        if ('csv' === ext || isSolrCsv(response.dataUrl)) {
          data = await fetch(response.dataUrl + `?v=${cacheBustingString()}`)
            .then(response => response.text())
            .then(responseText => {
              // for every comma NOT inside quotes, replace with a pipe delimiter
              // - this will let commas inside the quotes not be parsed as a new column
              // - Limitation: if a delimiter other than comma is used in the csv this will break
              // Examples of other delimiters that would break: tab
              responseText = responseText.replace(/(".*?")|,/g, (...m) => m[1] || '|')
              // now strip the double quotes
              responseText = responseText.replace(/["]+/g, '')
              const parsedCsv = Papa.parse(responseText, {
                //quotes: "true",  // dont need these
                //quoteChar: "'",  // has no effect that I can tell
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                delimiter: '|' // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
              })
              return parsedCsv.data
            })
        }

        if ('json' === ext || isSolrJson(response.dataUrl)) {
          data = await fetch(response.dataUrl + `?v=${cacheBustingString()}`).then(response => response.json())
        }
      } catch {
        console.error(`COVE: Cannot parse URL: ${response.dataUrl}`) // eslint-disable-line
        data = []
      }
    }

    if (response.dataDescription) {
      data = transform.autoStandardize(data)
      data = transform.developerStandardize(data, response.dataDescription)
    }

    if (data) {
      setStateData(data)
      setExcludedData(data)
    }

    // force showVertical for data tables false if it does not exist
    if (response !== undefined && response.table !== undefined) {
      if (!response.table || !response.table.showVertical) {
        response.table = response.table || {}
        response.table.showVertical = false
      }
    }
    let newConfig = { ...defaults, ...response }
    if (newConfig.filters) {
      newConfig.filters.forEach((filter, index) => {
        const queryStringFilterValue = getQueryStringFilterValue(filter)
        if (queryStringFilterValue) {
          newConfig.filters[index].active = queryStringFilterValue
        }
      })
    }

    if (newConfig.visualizationType === 'Box Plot') {
      newConfig.legend.hide = true
    }
    if (undefined === newConfig.table.show) newConfig.table.show = !isDashboard

    newConfig.series.forEach(series => {
      if (series.tooltip === undefined || series.tooltip === null) {
        series.tooltip = true
      }
      if (!series.axis) series.axis = 'Left'
    })

    if (data) {
      newConfig.data = data
    }

    const processedConfig = { ...coveUpdateWorker(newConfig) }

    updateConfig(processedConfig, data)
  }

  const updateConfig = (_config, dataOverride?: any[]) => {
    const newConfig = _.cloneDeep(_config)
    let data = dataOverride || stateData

    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    let newExcludedData: any[] = []

    if (newConfig.exclusions && newConfig.exclusions.active) {
      if (newConfig.xAxis.type === 'categorical' && newConfig.exclusions.keys?.length > 0) {
        newExcludedData = data.filter(e => !newConfig.exclusions.keys.includes(e[newConfig.xAxis.dataKey]))
      } else if (
        isDateScale(newConfig.xAxis) &&
        (newConfig.exclusions.dateStart || newConfig.exclusions.dateEnd) &&
        newConfig.xAxis.dateParseFormat
      ) {
        // Filter dates
        const timestamp = e => new Date(e).getTime()

        let startDate = timestamp(newConfig.exclusions.dateStart)
        let endDate = timestamp(newConfig.exclusions.dateEnd) + 86399999 //Increase by 24h in ms (86400000ms - 1ms) to include selected end date for .getTime() comparative

        let startDateValid = undefined !== typeof startDate && false === isNaN(startDate)
        let endDateValid = undefined !== typeof endDate && false === isNaN(endDate)

        if (startDateValid && endDateValid) {
          newExcludedData = data.filter(
            e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate && timestamp(e[newConfig.xAxis.dataKey]) <= endDate
          )
        } else if (startDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate)
        } else if (endDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
        }
      } else {
        newExcludedData = dataOverride || stateData
      }
    } else {
      newExcludedData = dataOverride || stateData
    }

    setExcludedData(newExcludedData)

    // After data is grabbed, loop through and generate filter column values if there are any
    let currentData: any[] = []
    if (newConfig.filters) {
      newConfig.filters.forEach((filter, index) => {
        const filterValues =
          filter.filterStyle === 'nested-dropdown'
            ? filter.values
            : filter.orderedValues ||
              generateValuesForFilter(filter.columnName, newExcludedData).sort(
                filter.order === 'desc' ? sortDesc : sortAsc
              )

        newConfig.filters[index].values = filterValues
        // Initial filter should be active

        const includes = (arr: any[], val: any): boolean => (arr || []).map(val => String(val)).includes(String(val))
        newConfig.filters[index].active =
          !newConfig.filters[index].active || !includes(filterValues, newConfig.filters[index].active)
            ? filterValues[0]
            : newConfig.filters[index].active
        newConfig.filters[index].filterStyle = newConfig.filters[index].filterStyle
          ? newConfig.filters[index].filterStyle
          : 'dropdown'
      })
      currentData = filterVizData(newConfig.filters, newExcludedData)
      setFilteredData(currentData)
    }

    if (newConfig.xAxis.type === 'date-time' && config.orientation === 'horizontal') {
      newConfig.xAxis.type = 'date'
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.series = newConfig.dynamicSeries ? [] : newConfig.series
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.dynamicSeries) {
      let finalData = dataOverride || newConfig.formattedData || newConfig.data
      if (finalData && finalData.length && finalData.length > 0) {
        Object.keys(finalData[0]).forEach(seriesKey => {
          if (
            seriesKey !== newConfig.xAxis.dataKey &&
            (!newConfig.filters || newConfig.filters.filter(filter => filter.columnName === seriesKey).length === 0) &&
            (!newConfig.columns || Object.keys(newConfig.columns).indexOf(seriesKey) === -1)
          ) {
            newConfig.runtime.series.push({
              dataKey: seriesKey,
              type: newConfig.dynamicSeriesType,
              lineType: newConfig.dynamicSeriesLineType,
              tooltip: true
            })
          }
        })
      }
    }

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = (dataOverride || data).map(d => d[newConfig.xAxis.dataKey])
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
    } else {
      newConfig.runtime.seriesKeys = newConfig.runtime.series
        ? newConfig.runtime.series.map(series => {
            newConfig.runtime.seriesLabels[series.dataKey] = series.name || series.label || series.dataKey
            newConfig.runtime.seriesLabelsAll.push(series.name || series.dataKey)
            return series.dataKey
          })
        : []
    }

    if (newConfig.visualizationType === 'Box Plot' && newConfig.series) {
      let allKeys = newExcludedData
        ? newExcludedData.map(d => d[newConfig.xAxis.dataKey])
        : data.map(d => d[newConfig.xAxis.dataKey])
      let allValues = newExcludedData
        ? newExcludedData.map(d => Number(d[newConfig?.series[0]?.dataKey]))
        : data.map(d => Number(d[newConfig?.series[0]?.dataKey]))

      const uniqueArray = function (arrArg) {
        return arrArg.filter(function (elem, pos, arr) {
          return arr.indexOf(elem) === pos
        })
      }

      const groups = uniqueArray(allKeys)
      let tableData: any[] = []
      const plots: any[] = []

      // group specific statistics
      // prevent re-renders
      if (!groups) return
      groups.forEach(g => {
        try {
          if (!g) throw new Error('No groups resolved in box plots')

          // filter data by group
          let filteredData = newExcludedData
            ? newExcludedData.filter(item => item[newConfig.xAxis.dataKey] === g)
            : data.filter(item => item[newConfig.xAxis.dataKey] === g)
          let filteredDataValues: number[] = filteredData.map(item => Number(item[newConfig?.series[0]?.dataKey]))

          // Sort the data for upcoming functions.
          let sortedData = filteredDataValues.sort((a, b) => a - b)

          // ! - Notice d3.quantile doesn't work here, and we had to take a custom route.
          const quartiles = getQuartiles(sortedData)

          if (!filteredData) throw new Error('boxplots dont have data yet')
          if (!plots) throw new Error('boxplots dont have plots yet')

          if (newConfig.boxplot.firstQuartilePercentage === '') {
            newConfig.boxplot.firstQuartilePercentage = 0
          }

          if (newConfig.boxplot.thirdQuartilePercentage === '') {
            newConfig.boxplot.thirdQuartilePercentage = 0
          }

          const q1 = quartiles.q1
          const q3 = quartiles.q3
          const iqr = q3 - q1
          const lowerBounds = q1 - (q3 - q1) * 1.5
          const upperBounds = q3 + (q3 - q1) * 1.5

          const outliers = sortedData.filter(v => v < lowerBounds || v > upperBounds)
          let nonOutliers = filteredDataValues

          nonOutliers = nonOutliers.filter(item => !outliers.includes(item))
          const minValue: number = d3.min<number>(filteredDataValues) || 0
          const _colMin = d3.max<number>([minValue, q1 - 1.5 * iqr])
          plots.push({
            columnCategory: g,
            columnMax: d3.min([d3.max(filteredDataValues), q1 + 1.5 * iqr]),
            columnThirdQuartile: Number(q3).toFixed(newConfig.dataFormat.roundTo),
            columnMedian: Number(d3.median(filteredDataValues)).toFixed(newConfig.dataFormat.roundTo),
            columnFirstQuartile: q1.toFixed(newConfig.dataFormat.roundTo),
            columnMin: _colMin,
            columnTotal: filteredDataValues.reduce((partialSum, a) => partialSum + a, 0),
            columnSd: Number(d3.deviation(filteredDataValues)).toFixed(newConfig.dataFormat.roundTo),
            columnMean: Number(d3.mean(filteredDataValues)).toFixed(newConfig.dataFormat.roundTo),
            columnIqr: Number(iqr).toFixed(newConfig.dataFormat.roundTo),
            columnLowerBounds: _colMin,
            columnUpperBounds: d3.min([d3.max(sortedData), q1 + 1.5 * iqr]),
            columnOutliers: outliers,
            values: filteredDataValues,
            nonOutlierValues: nonOutliers
          })
        } catch (e) {
          console.error('COVE: ', e.message) // eslint-disable-line
        }
      })

      // make deep copy so we can remove some fields for data
      // this appears to be the easiest option instead of running logic against the datatable cell...
      tableData = JSON.parse(JSON.stringify(plots))
      tableData.map(table => {
        table.columnIqr = undefined
        table.nonOutlierValues = undefined
        table.columnLowerBounds = undefined
        table.columnUpperBounds = undefined
        return null // resolve eslint
      })

      // any other data we can add to boxplots
      newConfig.boxplot['allValues'] = allValues
      newConfig.boxplot['categories'] = groups
      newConfig.boxplot.plots = plots
      newConfig.boxplot.tableData = tableData
    }

    if (newConfig.visualizationType === 'Combo' && newConfig.series) {
      newConfig.runtime.barSeriesKeys = []
      newConfig.runtime.lineSeriesKeys = []
      newConfig.runtime.areaSeriesKeys = []
      newConfig.runtime.forecastingSeriesKeys = []

      newConfig.series.forEach(series => {
        if (series.type === 'Area Chart') {
          newConfig.runtime.areaSeriesKeys.push(series)
        }
        if (series.type === 'Forecasting') {
          newConfig.runtime.forecastingSeriesKeys.push(series)
        }
        if (series.type === 'Bar' || series.type === 'Combo') {
          newConfig.runtime.barSeriesKeys.push(series.dataKey)
        }
        if (
          series.type === 'Line' ||
          series.type === 'dashed-sm' ||
          series.type === 'dashed-md' ||
          series.type === 'dashed-lg'
        ) {
          newConfig.runtime.lineSeriesKeys.push(series.dataKey)
        }
        if (series.type === 'Combo') {
          series.type = 'Bar'
        }
      })
    }

    if (newConfig.visualizationType === 'Forecasting' && newConfig.series) {
      newConfig.runtime.forecastingSeriesKeys = []

      newConfig.series.forEach(series => {
        if (series.type === 'Forecasting') {
          newConfig.runtime.forecastingSeriesKeys.push(series)
        }
      })
    }

    if (newConfig.visualizationType === 'Area Chart' && newConfig.series) {
      newConfig.runtime.areaSeriesKeys = []

      newConfig.series.forEach(series => {
        newConfig.runtime.areaSeriesKeys.push({ ...series, type: 'Area Chart' })
      })
    }

    if (
      (newConfig.visualizationType === 'Bar' && newConfig.orientation === 'horizontal') ||
      ['Deviation Bar', 'Paired Bar', 'Forest Plot'].includes(newConfig.visualizationType)
    ) {
      newConfig.runtime.xAxis = newConfig.yAxis['yAxis'] ? newConfig.yAxis['yAxis'] : newConfig.yAxis
      newConfig.runtime.yAxis = newConfig.xAxis['xAxis'] ? newConfig.xAxis['xAxis'] : newConfig.xAxis
      newConfig.runtime.yAxis.labelOffset *= -1

      newConfig.runtime.horizontal = false
      newConfig.orientation = 'horizontal'
      // remove after  COVE supports categorical axis on horizonatal bars
      newConfig.yAxis.type = newConfig.yAxis.type === 'categorical' ? 'linear' : newConfig.yAxis.type
    } else if (
      ['Box Plot', 'Scatter Plot', 'Area Chart', 'Line', 'Forecasting'].includes(newConfig.visualizationType) &&
      !checkLineToBarGraph()
    ) {
      newConfig.runtime.xAxis = newConfig.xAxis
      newConfig.runtime.yAxis = newConfig.yAxis
      newConfig.runtime.horizontal = false
      newConfig.orientation = 'vertical'
    } else {
      newConfig.runtime.xAxis = newConfig.xAxis
      newConfig.runtime.yAxis = newConfig.yAxis
      newConfig.runtime.horizontal = false
    }

    newConfig.runtime.uniqueId = Date.now()
    newConfig.runtime.editorErrorMessage =
      newConfig.visualizationType === 'Pie' && !newConfig.yAxis.dataKey
        ? 'Data Key property in Y Axis section must be set for pie charts.'
        : ''

    // Sankey Description box error message
    newConfig.runtime.editorErrorMessage =
      newConfig.visualizationType === 'Sankey' && !newConfig.description
        ? 'SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted.'
        : ''

    if (newConfig.legend.seriesHighlight?.length) {
      setSeriesHighlight(newConfig.legend?.seriesHighlight)
    }

    setConfig(newConfig)
  }

  // Gets filter values from dataset
  const generateValuesForFilter = (columnName, data = this.state.data) => {
    const values: any[] = []

    data.forEach(row => {
      const value = row[columnName]
      //@ts-ignore
      if (value && false === values.includes(value)) {
        values.push(value)
      }
    })

    return values
  }

  // Sorts data series for horizontal bar charts
  const sortData = (a, b) => {
    let sortKey =
      config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal'
        ? config.xAxis.dataKey
        : config.yAxis.sortKey
    let aData = parseFloat(a[sortKey])
    let bData = parseFloat(b[sortKey])

    if (aData < bData) {
      return config.sortData === 'ascending' ? 1 : -1
    } else if (aData > bData) {
      return config.sortData === 'ascending' ? -1 : 1
    } else {
      return 0
    }
  }

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let svgMarginWidth = 32
      let editorWidth = 350

      width = isEditor ? width - editorWidth : width

      let newViewport = getViewport(width)

      setCurrentViewport(newViewport)

      if (entry.target.dataset.lollipop === 'true') {
        width = width - 2.5
      }

      width = width - svgMarginWidth

      setDimensions([width, height])
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }

    setContainer(node)
  }, []) // eslint-disable-line

  function isEmpty(obj) {
    return Object.keys(obj).length === 0
  }

  useEffect(() => {
    const initialHeight = calcInitialHeight(config, currentViewport)
    const isForestPlot = visualizationType === 'Forest Plot'

    // heights to add
    const brushHeight = brush?.active ? brush?.height : 0
    const forestRowsHeight = isForestPlot ? config.data.length * forestPlot.rowHeight : 0
    const additionalHeight = axisBottomHeight + brushHeight + forestRowsHeight

    const adjustedHeight = initialHeight + additionalHeight

    if (adjustedHeight === height) return

    setHeight(adjustedHeight)
  }, [brush, axisBottomHeight, config, currentViewport])

  // Load data when component first mounts
  useEffect(() => {
    loadConfig()
  }, []) // eslint-disable-line

  useEffect(() => {
    reloadURLData()
  }, [JSON.stringify(config.filters)])

  /**
   * When cove has a config and container ref publish the cove_loaded event.
   */
  useEffect(() => {
    if (container && !isEmpty(config) && !coveLoadedEventRan) {
      publish('cove_loaded', { config: config })
      setCoveLoadedEventRan(true)
    }
  }, [container, config]) // eslint-disable-line

  /**
   * Handles filter change events outside of COVE
   * Updates externalFilters state
   * Another useEffect listens to externalFilterChanges and updates the config.
   */
  useEffect(() => {
    const handleFilterData = e => {
      let tmp: any[] = []
      tmp.push(e.detail)
      setExternalFilters(tmp)
    }

    subscribe('cove_filterData', e => handleFilterData(e))

    return () => {
      unsubscribe('cove_filterData', handleFilterData)
    }
  }, [config])

  /**
   * Handles changes to externalFilters
   * For some reason e.detail is returning [order: "asc"] even though
   * we're not passing that in. The code here checks for an active prop instead of an empty array.
   */
  useEffect(() => {
    if (externalFilters && externalFilters[0]) {
      const hasActiveProperty = externalFilters[0].hasOwnProperty('active')

      if (!hasActiveProperty) {
        let configCopy = { ...config }
        delete configCopy['filters']
        setConfig(configCopy)
        setFilteredData(filterVizData(externalFilters, excludedData))
      }
    }

    if (
      externalFilters &&
      externalFilters.length > 0 &&
      externalFilters.length > 0 &&
      externalFilters[0].hasOwnProperty('active')
    ) {
      let newConfigHere = { ...config, filters: externalFilters }
      setConfig(newConfigHere)
      setFilteredData(filterVizData(externalFilters, excludedData))
    }
  }, [externalFilters]) // eslint-disable-line

  // Load data when configObj data changes
  if (configObj) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      loadConfig()
    }, [configObj.data]) // eslint-disable-line
  }

  // This will set the bump chart's default scaling type to date-time
  useEffect(() => {
    if (['Bump Chart'].includes(config.visualizationType)) {
      setConfig({
        ...config,
        xAxis: {
          ...config.xAxis,
          type: 'date-time'
        }
      })
    }
  }, [config.visualizationType])

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if (stateData && config.xAxis && config.runtime?.seriesKeys) {
      const configPalette = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
        ? config.twoColor.palette
        : config.palette
      const allPalettes: Record<string, string[]> = { ...colorPalettes, ...twoColorPalette }
      let palette = config.customColors || allPalettes[configPalette]
      let numberOfKeys = config.runtime.seriesKeys.length
      let newColorScale

      while (numberOfKeys > palette.length) {
        palette = palette.concat(palette)
      }

      palette = palette.slice(0, numberOfKeys)

      newColorScale = () =>
        scaleOrdinal({
          domain: config.runtime.seriesLabelsAll,
          range: palette,
          unknown: null
        })

      setColorScale(newColorScale)
      setLoading(false)
    }

    if (config && stateData && config.sortData) {
      stateData.sort(sortData)
    }
  }, [config, stateData]) // eslint-disable-line

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = (label: Label) => {
    // If we're highlighting all the series, reset them
    if (seriesHighlight.length + 1 === config.runtime.seriesKeys.length && config.visualizationType !== 'Forecasting') {
      highlightReset()
      return
    }

    const newSeriesHighlight = [...seriesHighlight]

    let newHighlight = label.datum
    if (config.runtime.seriesLabels) {
      config.runtime.seriesKeys.forEach(key => {
        if (config.runtime.seriesLabels[key] === label.datum) {
          newHighlight = key
        }
      })
    }

    if (newSeriesHighlight.indexOf(newHighlight) !== -1) {
      newSeriesHighlight.splice(newSeriesHighlight.indexOf(newHighlight), 1)
    } else {
      newSeriesHighlight.push(newHighlight)
    }

    /**
     * pushDataKeyBySeriesName
     * - pushes series.dataKey into the series highlight based on the found series.name
     * @param {String} value
     */
    // const pushDataKeyBySeriesName = value => {
    //   let matchingSeries = config.series.filter(series => series.name === value.text)
    //   if (matchingSeries?.length > 0) {
    //     newSeriesHighlight.push(matchingSeries[0].dataKey)
    //   }
    // }

    // pushDataKeyBySeriesName(label)

    setSeriesHighlight(newSeriesHighlight)
  }

  // Called on reset button click, unhighlights all data series
  const highlightReset = () => {
    try {
      const legend = legendRef.current
      if (!legend) throw new Error('No legend available to set previous focus on.')
      legend.focus()
    } catch (e) {
      console.error('COVE:', e.message)
    }
    setSeriesHighlight([])
  }

  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'

  const parseDate = (dateString, showError = true) => {
    let date = timeParse(config.runtime[section].dateParseFormat)(dateString)
    if (!date) {
      if (showError) {
        config.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`
      }
      return new Date()
    } else {
      return date
    }
  }

  const formatDate = date => {
    return timeFormat(config.runtime[section].dateDisplayFormat)(date)
  }

  const formatTooltipsDate = date => {
    return timeFormat(config.tooltips.dateDisplayFormat)(date)
  }

  // Format numeric data based on settings in config OR from passed in settings for Additional Columns
  // - use only for old horizontal data - newer formatNumber is in helper/formatNumber
  // TODO: we should combine various formatNumber functions across this project.
  // TODO suggestion: pass all options as object key/values to allow for more flexibility
  const formatNumber = (
    num,
    axis,
    shouldAbbreviate = false,
    addColPrefix,
    addColSuffix,
    addColRoundTo,
    { index, length } = { index: null, length: null }
  ) => {
    // if num is NaN return num
    if (isNaN(num) || !num) return num
    // Check if the input number is negative
    const isNegative = num < 0

    if (axis === undefined || !axis) axis = 'left'

    // If the input number is negative, take the absolute value
    if (isNegative) {
      num = Math.abs(num)
    }

    // destructure dataFormat values
    let {
      dataFormat: {
        commas,
        abbreviated,
        roundTo,
        prefix,
        suffix,
        rightRoundTo,
        bottomRoundTo,
        rightPrefix,
        rightSuffix,
        bottomPrefix,
        bottomSuffix,
        bottomAbbreviated,
        onlyShowTopPrefixSuffix
      }
    } = config

    // check if value contains comma and remove it. later will add comma below.
    if (String(num).indexOf(',') !== -1) num = num.replaceAll(',', '')

    let original = num
    let stringFormattingOptions: any = {
      useGrouping: commas ? true : false // for old chart data table to work right cant just leave this to undefined
    }
    if (axis === 'left' || axis === undefined) {
      let roundToPlace
      if (addColRoundTo !== undefined) {
        // if its an Additional Column
        roundToPlace = addColRoundTo ? Number(addColRoundTo) : 0
      } else {
        roundToPlace = roundTo ? Number(roundTo) : 0
      }
      stringFormattingOptions = {
        useGrouping: addColRoundTo ? true : config.dataFormat.commas ? true : false,
        minimumFractionDigits: roundToPlace,
        maximumFractionDigits: roundToPlace
      }
    }

    if (axis === 'right') {
      stringFormattingOptions = {
        useGrouping: config.dataFormat.rightCommas ? true : false,
        minimumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0,
        maximumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0
      }
    }

    const resolveBottomTickRounding = () => {
      if (config.forestPlot.type === 'Logarithmic' && !bottomRoundTo) return 2
      if (Number(bottomRoundTo)) return Number(bottomRoundTo)
      return 0
    }

    if (axis === 'bottom') {
      stringFormattingOptions = {
        useGrouping: config.dataFormat.bottomCommas ? true : false,
        minimumFractionDigits: resolveBottomTickRounding(),
        maximumFractionDigits: resolveBottomTickRounding()
      }
    }

    num = numberFromString(num)

    if (isNaN(num)) {
      config.runtime.editorErrorMessage = `Unable to parse number from data ${original}. Try reviewing your data and selections in the Data Series section.`
      return original
    }

    if (!config.dataFormat) return num
    if (config.dataCutoff) {
      let cutoff = numberFromString(config.dataCutoff)

      if (num < cutoff) {
        num = cutoff
      }
    }

    // When we're formatting the left axis
    // Use commas also updates bars and the data table
    // We can't use commas when we're formatting the dataFormatted number
    // Example: commas -> 12,000; abbreviated -> 12k (correct); abbreviated & commas -> 12 (incorrect)
    //
    // Edge case for small numbers with decimals
    // - if roundTo undefined which means it is blank, then do not round

    if (
      (axis === 'left' && commas && abbreviated && shouldAbbreviate) ||
      (axis === 'bottom' && commas && abbreviated && shouldAbbreviate)
    ) {
      num = num // eslint-disable-line
    } else {
      num = num.toLocaleString('en-US', stringFormattingOptions)
    }
    let result = ''

    if (abbreviated && axis === 'left' && shouldAbbreviate) {
      num = abbreviateNumber(parseFloat(num))
    }

    if (bottomAbbreviated && axis === 'bottom' && shouldAbbreviate) {
      num = abbreviateNumber(parseFloat(num))
    }

    if (addColPrefix && axis === 'left') {
      result = addColPrefix + result
    } else {
      // if onlyShowTopPrefixSuffix only show top prefix
      const suppressAllButLast = onlyShowTopPrefixSuffix && length - 1 !== index
      if (prefix && axis === 'left' && !suppressAllButLast) {
        result += prefix
      }
    }

    if (rightPrefix && axis === 'right') {
      result += rightPrefix
    }

    if (bottomPrefix && axis === 'bottom') {
      result += bottomPrefix
    }

    // combine prefix and num
    result += num

    if (addColSuffix && axis === 'left') {
      result += addColSuffix
    } else {
      if (suffix && axis === 'left' && !onlyShowTopPrefixSuffix) {
        result += suffix
      }
    }

    if (rightSuffix && axis === 'right') {
      result += rightSuffix
    }

    if (bottomSuffix && axis === 'bottom') {
      result += bottomSuffix
    }
    if (isNegative) {
      result = '-' + result
    }

    return String(result)
  }

  const missingRequiredSections = () => {
    if (config.visualizationType === 'Sankey') return false // skip checks for now
    if (config.visualizationType === 'Forecasting') return false // skip required checks for now.
    if (config.visualizationType === 'Forest Plot') return false // skip required checks for now.
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

  // used for Additional Column
  const displayDataAsText = (value, columnName) => {
    if (value === null || value === '' || value === undefined) {
      return ''
    }

    if (typeof value === 'string' && value.length > 0 && config.legend.type === 'equalnumber') {
      return value
    }

    let formattedValue = value

    let columnObj //= config.columns[columnName]
    // config.columns not an array but a hash of objects
    if (Object.keys(config.columns).length > 0) {
      Object.keys(config.columns).forEach(function (key) {
        var column = config.columns[key]
        // add if not the index AND it is enabled to be added to data table
        if (column.name === columnName) {
          columnObj = column
        }
      })
    }

    if (columnObj === undefined) {
      // then use left axis config
      columnObj = config.type === 'chart' ? config.dataFormat : config.primary
      // NOTE: Left Value Axis uses different names
      // so map them below so the code below works
      // - copy commas to useCommas to work below
      columnObj['useCommas'] = columnObj.commas
      // - copy roundTo to roundToPlace to work below
      columnObj['roundToPlace'] = columnObj.roundTo ? columnObj.roundTo : ''
    }

    if (columnObj) {
      // If value is a number, apply specific formattings
      let hasDecimal = false
      let decimalPoint = 0
      if (Number(value)) {
        if (columnObj.roundToPlace >= 0) {
          hasDecimal = columnObj.roundToPlace ? columnObj.roundToPlace !== '' || columnObj.roundToPlace !== null : false
          decimalPoint = columnObj.roundToPlace ? Number(columnObj.roundToPlace) : 0

          // Rounding
          if (columnObj.hasOwnProperty('roundToPlace') && hasDecimal) {
            formattedValue = Number(value).toFixed(decimalPoint)
          }
        }

        if (columnObj.hasOwnProperty('useCommas') && columnObj.useCommas === true) {
          // Formats number to string with commas - allows up to 5 decimal places, if rounding is not defined.
          // Otherwise, uses the rounding value set at 'columnObj.roundToPlace'.
          formattedValue = Number(value).toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: hasDecimal ? decimalPoint : 0,
            maximumFractionDigits: hasDecimal ? decimalPoint : 5
          })
        }
      }

      // add prefix and suffix if set
      formattedValue = (columnObj.prefix || '') + formattedValue + (columnObj.suffix || '')
    }

    return formattedValue
  }

  const Confirm = () => {
    const confirmDone = e => {
      if (e) {
        e.preventDefault()
      }

      let newConfig = { ...config }
      delete newConfig.newViz

      updateConfig(newConfig)
    }

    const styles = {
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridArea: 'content'
    }

    return (
      <section className='waiting' style={styles}>
        <section className='waiting-container'>
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
          <Button
            className='btn'
            style={{ margin: '1em auto' }}
            disabled={missingRequiredSections()}
            onClick={e => confirmDone(e)}
          >
            I'm Done
          </Button>
        </section>
      </section>
    )
  }

  const Error = () => {
    const styles = {
      position: 'absolute',
      background: 'white',
      zIndex: '999',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridArea: 'content'
    }
    return (
      <section className='waiting' style={styles}>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  // this is passed DOWN into the various components
  // then they do a lookup based on the bin number as index into here (TT)
  const applyLegendToRow = rowObj => {
    try {
      if (!rowObj) throw new Error('COVE: No rowObj in applyLegendToRow')
      // Navigation map
      if ('navigation' === config.type) {
        let mapColorPalette = colorPalettes[config.color] || colorPalettes['bluegreenreverse']
        return generateColorsArray(mapColorPalette[3])
      }

      // Fail state
      return generateColorsArray()
    } catch (e) {
      console.error('COVE: ', e) // eslint-disable-line
    }
  }

  // TODO: should be part of the DataTransform class.
  const clean = data => {
    // cleaning is deleting data we need in forecasting charts.
    if (!Array.isArray(data)) return []
    if (config.visualizationType === 'Forecasting') return data
    return config?.xAxis?.dataKey ? transform.cleanData(data, config.xAxis.dataKey) : data
  }

  // required for DataTable
  const displayGeoName = key => {
    return key
  }

  // Prevent render if loading
  let body = <Loading />

  const makeClassName = string => {
    if (!string || !string.toLowerCase) return
    return string.toLowerCase().replaceAll(/ /g, '-')
  }

  const getChartWrapperClasses = () => {
    const isLegendOnBottom = legend?.position === 'bottom' || isLegendWrapViewport(currentViewport)
    const classes = ['chart-container', 'p-relative']
    if (legend?.position) {
      if (isLegendWrapViewport(currentViewport) && legend?.position !== 'top') {
        classes.push('legend-bottom')
      } else {
        classes.push(`legend-${legend.position}`)
      }
    }
    if (legend?.hide) classes.push('legend-hidden')
    if (lineDatapointClass) classes.push(lineDatapointClass)
    if (!config.barHasBorder) classes.push('chart-bar--no-border')
    if (config.brush?.active && dashboardConfig?.type === 'dashboard' && (!isLegendOnBottom || legend.hide))
      classes.push('dashboard-brush')
    classes.push(...contentClasses)
    return classes
  }

  const getChartSubTextClasses = () => {
    const classes = ['subtext ']
    const isLegendOnBottom = legend?.position === 'bottom' || isLegendWrapViewport(currentViewport)

    if (config.isResponsiveTicks) classes.push('subtext--responsive-ticks ')
    if (config.brush?.active && !isLegendOnBottom) classes.push('subtext--brush-active ')
    if (config.brush?.active && config.legend.hide) classes.push('subtext--brush-active ')
    return classes
  }

  if (!loading) {
    const tableLink = (
      <a href={`#data-table-${config.dataKey}`} className='margin-left-href'>
        {config.dataKey} (Go to Table)
      </a>
    )
    body = (
      <>
        {isEditor && <EditorPanel />}
        <Layout.Responsive isEditor={isEditor}>
          {config.newViz && <Confirm />}
          {undefined === config.newViz && isEditor && config.runtime && config.runtime?.editorErrorMessage && <Error />}
          {!missingRequiredSections() && !config.newViz && (
            <div
              className={`cdc-chart-inner-container cove-component__content type-${makeClassName(
                config.visualizationType
              )}`}
              aria-label={handleChartAriaLabels(config)}
              tabIndex={0}
            >
              <Title
                showTitle={config.showTitle}
                isDashboard={isDashboard}
                title={title}
                superTitle={config.superTitle}
                classes={['chart-title', `${config.theme}`, 'cove-component__header']}
                style={undefined}
              />

              {/* Visualization Wrapper */}
              <div className={getChartWrapperClasses().join(' ')}>
                {/* Intro Text/Message */}
                {config?.introText && config.visualizationType !== 'Spark Line' && (
                  <section className={`introText `}>{parse(config.introText)}</section>
                )}

                {/* Filters */}
                {config.filters && !externalFilters && config.visualizationType !== 'Spark Line' && (
                  <Filters
                    config={config}
                    setConfig={setConfig}
                    setFilteredData={setFilteredData}
                    filteredData={filteredData}
                    excludedData={excludedData}
                    filterData={filterVizData}
                    dimensions={dimensions}
                  />
                )}
                <SkipTo skipId={handleChartTabbing(config, legendId)} skipMessage='Skip Over Chart Container' />
                {config.annotations?.length > 0 && (
                  <SkipTo
                    skipId={handleChartTabbing(config, legendId)}
                    skipMessage={`Skip over annotations`}
                    key={`skip-annotations`}
                  />
                )}
                <LegendWrapper>
                  <div
                    className={
                      legend.hide || isLegendWrapViewport(currentViewport)
                        ? 'w-100'
                        : legend.position === 'bottom' || legend.position === 'top' || visualizationType === 'Sankey'
                        ? 'w-100'
                        : 'w-75'
                    }
                  >
                    {/* All charts with LinearChart */}
                    {!['Spark Line', 'Line', 'Sankey', 'Pie', 'Sankey'].includes(config.visualizationType) && (
                      <div ref={parentRef} style={{ width: `100%` }}>
                        <ParentSize>
                          {parent => <LinearChart parentWidth={parent.width} parentHeight={parent.height} />}
                        </ParentSize>
                      </div>
                    )}

                    {config.visualizationType === 'Pie' && (
                      <ParentSize className='justify-content-center d-flex' style={{ width: `100%` }}>
                        {parent => <PieChart parentWidth={parent.width} parentHeight={parent.height} />}
                      </ParentSize>
                    )}
                    {/* Line Chart */}
                    {config.visualizationType === 'Line' &&
                      (checkLineToBarGraph() ? (
                        <div ref={parentRef} style={{ width: `100%` }}>
                          <ParentSize>
                            {parent => <LinearChart parentWidth={parent.width} parentHeight={parent.height} />}
                          </ParentSize>
                        </div>
                      ) : (
                        <div ref={parentRef} style={{ width: `100%` }}>
                          <ParentSize>
                            {parent => <LinearChart parentWidth={parent.width} parentHeight={parent.height} />}
                          </ParentSize>
                        </div>
                      ))}
                    {/* Sparkline */}
                    {config.visualizationType === 'Spark Line' && (
                      <>
                        <Filters
                          config={config}
                          setConfig={setConfig}
                          setFilteredData={setFilteredData}
                          filteredData={filteredData}
                          excludedData={excludedData}
                          filterData={filterVizData}
                          dimensions={dimensions}
                        />
                        {config?.introText && (
                          <section className='introText' style={{ padding: '0px 0 35px' }}>
                            {parse(config.introText)}
                          </section>
                        )}
                        <div style={{ height: `100px`, width: `100%`, ...sparkLineStyles }}>
                          <ParentSize>{parent => <SparkLine width={parent.width} height={parent.height} />}</ParentSize>
                        </div>
                        {description && (
                          <div className='subtext' style={{ padding: '35px 0 15px' }}>
                            {parse(description)}
                          </div>
                        )}
                      </>
                    )}
                    {/* Sankey */}
                    {config.visualizationType === 'Sankey' && (
                      <ParentSize aria-hidden='true'>
                        {parent => <SankeyChart runtime={config.runtime} width={parent.width} height={parent.height} />}
                      </ParentSize>
                    )}
                  </div>
                  {/* Legend */}
                  {!config.legend.hide &&
                    config.visualizationType !== 'Spark Line' &&
                    config.visualizationType !== 'Sankey' && (
                      <Legend ref={legendRef} skipId={handleChartTabbing(config, legendId)} />
                    )}
                </LegendWrapper>
                {/* Link */}
                {isDashboard && config.table && config.table.show && config.table.showDataTableLink
                  ? tableLink
                  : link && link}
                {/* Description */}

                {description && config.visualizationType !== 'Spark Line' && (
                  <div className={getChartSubTextClasses().join('')}>{parse(description)}</div>
                )}
                {false && <Annotation.List />}

                {/* buttons */}
                <MediaControls.Section classes={['download-buttons']}>
                  {config.table.showDownloadImgButton && (
                    <MediaControls.Button
                      text='Download Image'
                      title='Download Chart as Image'
                      type='image'
                      state={config}
                      elementToCapture={imageId}
                    />
                  )}
                  {config.table.showDownloadPdfButton && (
                    <MediaControls.Button
                      text='Download PDF'
                      title='Download Chart as PDF'
                      type='pdf'
                      state={config}
                      elementToCapture={imageId}
                    />
                  )}
                </MediaControls.Section>
                {/* Data Table */}
                {((config.xAxis.dataKey &&
                  config.table.show &&
                  config.visualizationType !== 'Spark Line' &&
                  config.visualizationType !== 'Sankey') ||
                  (config.visualizationType === 'Sankey' && config.table.show)) && (
                  <DataTable
                    config={config}
                    rawData={
                      config.visualizationType === 'Sankey'
                        ? config?.data?.[0]?.tableData
                        : config.table.customTableConfig
                        ? filterVizData(config.filters, config.data)
                        : config.data
                    }
                    runtimeData={
                      config.visualizationType === 'Sankey'
                        ? config?.data?.[0]?.tableData
                        : filteredData || excludedData
                    }
                    expandDataTable={config.table.expanded}
                    columns={config.columns}
                    displayDataAsText={displayDataAsText}
                    displayGeoName={displayGeoName}
                    applyLegendToRow={applyLegendToRow}
                    tableTitle={config.table.label}
                    indexTitle={config.table.indexLabel}
                    vizTitle={title}
                    viewport={currentViewport}
                    tabbingId={handleChartTabbing(config, legendId)}
                    colorScale={colorScale}
                  />
                )}
                {config?.annotations?.length > 0 && <Annotation.Dropdown />}
                {/* show pdf or image button */}
              </div>
              {config?.footnotes && <section className='footnotes'>{parse(config.footnotes)}</section>}
            </div>
          )}
        </Layout.Responsive>
      </>
    )
  }

  const getXAxisData = d =>
    isDateScale(config.runtime.xAxis)
      ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime()
      : d[config.runtime.originalXAxis.dataKey]
  const getYAxisData = (d, seriesKey) => d[seriesKey]

  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const contextValues = {
    brushConfig,
    capitalize,
    clean,
    colorPalettes,
    colorScale,
    config,
    currentViewport,
    dashboardConfig,
    debugSvg: isDebug,
    dimensions,
    dynamicLegendItems,
    excludedData: excludedData,
    formatDate,
    formatNumber,
    formatTooltipsDate,
    getTextWidth,
    getXAxisData,
    getYAxisData,
    handleChartAriaLabels,
    handleLineType,
    highlight,
    highlightReset,
    imageId,
    isDashboard,
    isLegendBottom: legend?.position === 'bottom' || isLegendWrapViewport(currentViewport),
    isDebug,
    isDraggingAnnotation,
    handleDragStateChange,
    isEditor,
    isNumber,
    legend,
    lineOptions,
    loading,
    missingRequiredSections,
    outerContainerRef,
    parentRef,
    parseDate,
    rawData: _.cloneDeep(stateData) ?? {},
    seriesHighlight,
    setAxisBottomHeight,
    setBrushConfig,
    setConfig,
    setDynamicLegendItems,
    setEditing,
    setFilteredData,
    setParentConfig,
    setSeriesHighlight,
    setSharedFilter,
    setSharedFilterValue,
    tableData: filteredData || excludedData, // do not clean table data
    transformedData: clean(filteredData || excludedData), // do this right before passing to components
    twoColorPalette,
    unfilteredData: _.cloneDeep(stateData),
    updateConfig
  }

  return (
    <ConfigContext.Provider value={contextValues}>
      <Layout.VisualizationWrapper
        config={config}
        isEditor={isEditor}
        currentViewport={currentViewport}
        ref={outerContainerRef}
        imageId={imageId}
        showEditorPanel={config?.showEditorPanel}
      >
        {body}
      </Layout.VisualizationWrapper>
    </ConfigContext.Provider>
  )
}
