import React, { useState, useEffect, useCallback } from 'react'

// IE11
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'
import * as d3 from 'd3-array'

// External Libraries
import { scaleOrdinal } from '@visx/scale'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { timeParse, timeFormat } from 'd3-time-format'
import { format } from 'd3-format'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Primary Components
import ConfigContext from './ConfigContext'
import PieChart from './components/PieChart'
import LinearChart from './components/LinearChart'

import { colorPalettesChart as colorPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'

import { publish, subscribe, unsubscribe } from '@cdc/core/helpers/events'

import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

import SparkLine from './components/SparkLine'
import Legend from './components/Legend'
import DataTable from './components/DataTable'
import defaults from './data/initial-state'
import EditorPanel from './components/EditorPanel'
import Loading from '@cdc/core/components/Loading'
import Filters from './components/Filters'
import CoveMediaControls from '@cdc/core/components/CoveMediaControls'

// Helpers
import numberFromString from '@cdc/core/helpers/numberFromString'
import getViewport from '@cdc/core/helpers/getViewport'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import isNumber from '@cdc/core/helpers/isNumber'
import cleanData from '@cdc/core/helpers/cleanData'

import './scss/main.scss'

export default function CdcChart({ configUrl, config: configObj, isEditor = false, isDashboard = false, setConfig: setParentConfig, setEditing, hostname, link }) {
  const transform = new DataTransform()
  const [loading, setLoading] = useState(true)
  const [colorScale, setColorScale] = useState(null)
  const [config, setConfig] = useState({})
  const [stateData, setStateData] = useState(config.data || [])
  const [excludedData, setExcludedData] = useState()
  const [filteredData, setFilteredData] = useState()
  const [seriesHighlight, setSeriesHighlight] = useState([])
  const [currentViewport, setCurrentViewport] = useState('lg')
  const [dimensions, setDimensions] = useState([])
  const [externalFilters, setExternalFilters] = useState(null)
  const [container, setContainer] = useState()
  const [coveLoadedEventRan, setCoveLoadedEventRan] = useState(false)
  const [dynamicLegendItems, setDynamicLegendItems] = useState([])
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  // Destructure items from config for more readable JSX
  let { legend, title, description, visualizationType } = config

  // set defaults on titles if blank
  if (!title || title === '') title = 'Chart Title'
  if (config.table && (!config.table?.label || config.table?.label === '')) config.table.label = 'Data Table'

  const { barBorderClass, lineDatapointClass, contentClasses, sparkLineStyles } = useDataVizClasses(config)

  const handleChartTabbing = config.showSidebar ? `#legend` : config?.title ? `#dataTableSection__${config.title.replace(/\s/g, '')}` : `#dataTableSection`

  const sortAsc = (a, b) => {
    return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
  }

  const sortDesc = (a, b) => {
    return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
  }

  const handleChartAriaLabels = (state, testing = false) => {
    if (testing) console.log(`handleChartAriaLabels Testing On:`, state)
    try {
      if (!state.visualizationType) throw Error('handleChartAriaLabels: no visualization type found in state')
      let ariaLabel = ''

      if (state.visualizationType) {
        ariaLabel += `${state.visualizationType} chart`
      }

      if (state.title && state.visualizationType) {
        ariaLabel += ` with the title: ${state.title}`
      }

      return ariaLabel
    } catch (e) {
      console.error(e.message) // eslint-disable-line
    }
  }

  const handleLineType = lineType => {
    switch (lineType) {
      case 'dashed-sm':
        return '5 5'
      case 'dashed-md':
        return '10 5'
      case 'dashed-lg':
        return '15 5'
      default:
        return 0
    }
  }

  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())

    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {}

    if (response.dataUrl) {
      try {
        const regex = /(?:\.([^.]+))?$/

        const ext = regex.exec(response.dataUrl)[1]
        if ('csv' === ext) {
          data = await fetch(response.dataUrl + `?v=${cacheBustingString()}`)
            .then(response => response.text())
            .then(responseText => {
              const parsedCsv = Papa.parse(responseText, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true
              })
              return parsedCsv.data
            })
        }

        if ('json' === ext) {
          data = await fetch(response.dataUrl + `?v=${cacheBustingString()}`).then(response => response.json())
        }
      } catch {
        console.error(`Cannot parse URL: ${response.dataUrl}`)
        data = []
      }

      if (response.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, response.dataDescription)
      }
    }

    if (data) {
      setStateData(data)
      setExcludedData(data)
    }

    let newConfig = { ...defaults, ...response }
    if (newConfig.visualizationType === 'Box Plot') {
      newConfig.legend.hide = true
    }
    if (undefined === newConfig.table.show) newConfig.table.show = !isDashboard
    updateConfig(newConfig, data)
  }

  const updateConfig = (newConfig, dataOverride = undefined) => {
    let data = dataOverride || stateData

    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    // Loop through and set initial data with exclusions - this should persist through any following data transformations (ie. filters)
    let newExcludedData

    if (newConfig.exclusions && newConfig.exclusions.active) {
      if (newConfig.xAxis.type === 'categorical' && newConfig.exclusions.keys?.length > 0) {
        newExcludedData = data.filter(e => !newConfig.exclusions.keys.includes(e[newConfig.xAxis.dataKey]))
      } else if (newConfig.xAxis.type === 'date' && (newConfig.exclusions.dateStart || newConfig.exclusions.dateEnd) && newConfig.xAxis.dateParseFormat) {
        // Filter dates
        const timestamp = e => new Date(e).getTime()

        let startDate = timestamp(newConfig.exclusions.dateStart)
        let endDate = timestamp(newConfig.exclusions.dateEnd) + 86399999 //Increase by 24h in ms (86400000ms - 1ms) to include selected end date for .getTime() comparative

        let startDateValid = undefined !== typeof startDate && false === isNaN(startDate)
        let endDateValid = undefined !== typeof endDate && false === isNaN(endDate)

        if (startDateValid && endDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate && timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
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
    let currentData
    if (newConfig.filters) {
      newConfig.filters.forEach((filter, index) => {
        let filterValues = []

        filterValues = filter.orderedValues || generateValuesForFilter(filter.columnName, newExcludedData).sort(filter.order === 'desc' ? sortDesc : sortAsc)

        newConfig.filters[index].values = filterValues
        // Initial filter should be active
        newConfig.filters[index].active = filterValues[0]
      })
      currentData = filterData(newConfig.filters, newExcludedData)
      setFilteredData(currentData)
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = (dataOverride || data).map(d => d[newConfig.xAxis.dataKey])
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
    } else {
      newConfig.runtime.seriesKeys = newConfig.series
        ? newConfig.series.map(series => {
            newConfig.runtime.seriesLabels[series.dataKey] = series.label || series.dataKey
            newConfig.runtime.seriesLabelsAll.push(series.label || series.dataKey)
            return series.dataKey
          })
        : []
    }

    if (newConfig.visualizationType === 'Box Plot' && newConfig.series) {
      let allKeys = newExcludedData ? newExcludedData.map(d => d[newConfig.xAxis.dataKey]) : data.map(d => d[newConfig.xAxis.dataKey])
      let allValues = newExcludedData ? newExcludedData.map(d => Number(d[newConfig?.series[0]?.dataKey])) : data.map(d => Number(d[newConfig?.series[0]?.dataKey]))

      const uniqueArray = function (arrArg) {
        return arrArg.filter(function (elem, pos, arr) {
          return arr.indexOf(elem) === pos
        })
      }

      const groups = uniqueArray(allKeys)
      let tableData = []
      const plots = []

      // group specific statistics
      // prevent re-renders
      if (!groups) return
      groups.forEach((g, index) => {
        try {
          if (!g) throw new Error('No groups resolved in box plots')

          // filter data by group
          let filteredData = newExcludedData ? newExcludedData.filter(item => item[newConfig.xAxis.dataKey] === g) : data.filter(item => item[newConfig.xAxis.dataKey] === g)
          let filteredDataValues = filteredData.map(item => Number(item[newConfig?.series[0]?.dataKey]))
          // let filteredDataValues = filteredData.map(item => Number(item[newConfig.yAxis.dataKey]))

          if (!filteredData) throw new Error('boxplots dont have data yet')
          if (!plots) throw new Error('boxplots dont have plots yet')
          if (newConfig.boxplot.firstQuartilePercentage === '') {
            newConfig.boxplot.firstQuartilePercentage = 0
          }

          if (newConfig.boxplot.thirdQuartilePercentage === '') {
            newConfig.boxplot.thirdQuartilePercentage = 0
          }

          const q1 = d3.quantile(filteredDataValues, parseFloat(newConfig.boxplot.firstQuartilePercentage) / 100)
          const q3 = d3.quantile(filteredDataValues, parseFloat(newConfig.boxplot.thirdQuartilePercentage) / 100)
          const iqr = q3 - q1
          const lowerBounds = q1 - (q3 - q1) * 1.5
          const upperBounds = q3 + (q3 - q1) * 1.5
          const outliers = filteredDataValues.filter(v => v < lowerBounds || v > upperBounds)
          let nonOutliers = filteredDataValues

          nonOutliers = nonOutliers.filter(item => !outliers.includes(item))

          plots.push({
            columnCategory: g,
            columnMax: Number(q3 + 1.5 * iqr).toFixed(newConfig.dataFormat.roundTo),
            columnThirdQuartile: Number(q3).toFixed(newConfig.dataFormat.roundTo),
            columnMedian: Number(d3.median(filteredDataValues)).toFixed(newConfig.dataFormat.roundTo),
            columnFirstQuartile: q1.toFixed(newConfig.dataFormat.roundTo),
            columnMin: Number(q1 - 1.5 * iqr).toFixed(newConfig.dataFormat.roundTo),
            columnCount: filteredDataValues.reduce((partialSum, a) => partialSum + a, 0),
            columnSd: Number(d3.deviation(filteredDataValues)).toFixed(newConfig.dataFormat.roundTo),
            columnMean: Number(d3.mean(filteredDataValues)).toFixed(newConfig.dataFormat.roundTo),
            columnIqr: Number(iqr).toFixed(newConfig.dataFormat.roundTo),
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
        delete table.columnIqr
        delete table.nonOutlierValues
        return null // resolve eslint
      })

      // any other data we can add to boxplots
      newConfig.boxplot['allValues'] = allValues
      newConfig.boxplot['categories'] = groups
      newConfig.boxplot.plots = plots
      newConfig.boxplot.tableData = tableData
    }

    if (newConfig.visualizationType === 'Combo' || ('Area Chart' && newConfig.series)) {
      newConfig.runtime.barSeriesKeys = []
      newConfig.runtime.lineSeriesKeys = []
      newConfig.series.forEach(series => {
        if (series.type === 'Bar') {
          newConfig.runtime.barSeriesKeys.push(series.dataKey)
        }
        if (series.type === 'Line' || series.type === 'dashed-sm' || series.type === 'dashed-md' || series.type === 'dashed-lg') {
          newConfig.runtime.lineSeriesKeys.push(series.dataKey)
        }
      })
    }

    if (((newConfig.visualizationType === 'Bar' || newConfig.visualizationType === 'Deviation Bar') && newConfig.orientation === 'horizontal') || newConfig.visualizationType === 'Paired Bar') {
      newConfig.runtime.xAxis = newConfig.yAxis
      newConfig.runtime.yAxis = newConfig.xAxis
      newConfig.runtime.horizontal = true
    } else {
      newConfig.runtime.xAxis = newConfig.xAxis
      newConfig.runtime.yAxis = newConfig.yAxis
      newConfig.runtime.horizontal = false
    }
    newConfig.runtime.uniqueId = Date.now()
    newConfig.runtime.editorErrorMessage = newConfig.visualizationType === 'Pie' && !newConfig.yAxis.dataKey ? 'Data Key property in Y Axis section must be set for pie charts.' : ''

    setConfig(newConfig)
  }

  const filterData = (filters, data) => {
    let filteredData = []

    data.forEach(row => {
      let add = true
      filters.forEach(filter => {
        if (row[filter.columnName] !== filter.active) {
          add = false
        }
      })

      if (add) filteredData.push(row)
    })
    return filteredData
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, data = this.state.data) => {
    const values = []

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
    let sortKey = config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal' ? config.xAxis.dataKey : config.yAxis.sortKey
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
      let newViewport = getViewport(width)
      let svgMarginWidth = 32
      let editorWidth = 350

      setCurrentViewport(newViewport)

      if (isEditor) {
        width = width - editorWidth
      }

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

  // Load data when component first mounts
  useEffect(() => {
    loadConfig()
  }, []) // eslint-disable-line

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
      let tmp = []
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
        setFilteredData(filterData(externalFilters, excludedData))
      }
    }

    if (externalFilters && externalFilters.length > 0 && externalFilters.length > 0 && externalFilters[0].hasOwnProperty('active')) {
      let newConfigHere = { ...config, filters: externalFilters }
      setConfig(newConfigHere)
      setFilteredData(filterData(externalFilters, excludedData))
    }
  }, [externalFilters]) // eslint-disable-line

  // Load data when configObj data changes
  if (configObj) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      loadConfig()
    }, [configObj.data]) // eslint-disable-line
  }

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if (stateData && config.xAxis && config.runtime.seriesKeys) {
      const configPalette = config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar' ? config.twoColor.palette : config.palette
      const allPalettes = { ...colorPalettes, ...twoColorPalette }
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
          range: palette
        })

      setColorScale(newColorScale)
      setLoading(false)
    }

    if (config && stateData && config.sortData) {
      stateData.sort(sortData)
    }
  }, [config, stateData]) // eslint-disable-line

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = label => {
    const newSeriesHighlight = []

    // If we're highlighting all the series, reset them
    if (seriesHighlight.length + 1 === config.runtime.seriesKeys.length && !config.legend.dynamicLegend) {
      highlightReset()
      return
    }

    seriesHighlight.forEach(value => {
      newSeriesHighlight.push(value)
    })

    let newHighlight = label.datum
    if (config.runtime.seriesLabels) {
      for (let i = 0; i < config.runtime.seriesKeys.length; i++) {
        if (config.runtime.seriesLabels[config.runtime.seriesKeys[i]] === label.datum) {
          newHighlight = config.runtime.seriesKeys[i]
          break
        }
      }
    }

    if (newSeriesHighlight.indexOf(newHighlight) !== -1) {
      newSeriesHighlight.splice(newSeriesHighlight.indexOf(newHighlight), 1)
    } else {
      newSeriesHighlight.push(newHighlight)
    }
    setSeriesHighlight(newSeriesHighlight)
  }

  // Called on reset button click, unhighlights all data series
  const highlightReset = () => {
    if (config.legend.dynamicLegend && dynamicLegendItems) {
      setSeriesHighlight(dynamicLegendItems.map(item => item.text))
    } else {
      setSeriesHighlight([])
    }
  }

  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'

  const parseDate = dateString => {
    let date = timeParse(config.runtime[section].dateParseFormat)(dateString)
    if (!date) {
      config.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`
      return new Date()
    } else {
      return date
    }
  }

  const formatDate = date => {
    return timeFormat(config.runtime[section].dateDisplayFormat)(date)
  }

  // function calculates the width of given text and its font-size
  function getTextWidth(text, font) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    context.font = font || getComputedStyle(document.body).font

    return Math.ceil(context.measureText(text).width)
  }

  // Format numeric data based on settings in config
  const formatNumber = (num, axis) => {
    // if num is NaN return num
    if (isNaN(num) || !num) return num

    // destructure dataFormat values
    let {
      dataFormat: { commas, abbreviated, roundTo, prefix, suffix, rightRoundTo, bottomRoundTo, rightPrefix, rightSuffix, bottomPrefix, bottomSuffix, bottomAbbreviated }
    } = config

    let formatSuffix = format('.2s')

    // check if value contains comma and remove it. later will add comma below.
    if (String(num).indexOf(',') !== -1) num = num.replaceAll(',', '')

    let original = num
    let stringFormattingOptions

    if (axis === 'left') {
      stringFormattingOptions = {
        useGrouping: config.dataFormat.commas ? true : false,
        minimumFractionDigits: roundTo ? Number(roundTo) : 0,
        maximumFractionDigits: roundTo ? Number(roundTo) : 0
      }
    }

    if (axis === 'right') {
      stringFormattingOptions = {
        useGrouping: config.dataFormat.rightCommas ? true : false,
        minimumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0,
        maximumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0
      }
    }

    if (axis === 'bottom') {
      stringFormattingOptions = {
        useGrouping: config.dataFormat.bottomCommas ? true : false,
        minimumFractionDigits: bottomRoundTo ? Number(bottomRoundTo) : 0,
        maximumFractionDigits: bottomRoundTo ? Number(bottomRoundTo) : 0
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
    // DEV 3163 edge case for small numbers with decimals
    // - if roundTo undefined which means it is blank, then do not round
    if ((axis === 'left' && commas && abbreviated) || (axis === 'bottom' && commas && abbreviated)) {
      num = num // eslint-disable-line
    } else {
      num = num.toLocaleString('en-US', stringFormattingOptions)
    }
    let result = ''

    if (abbreviated && axis === 'left') {
      num = formatSuffix(parseFloat(num)).replace('G', 'B')
    }

    if (bottomAbbreviated && axis === 'bottom') {
      num = formatSuffix(parseFloat(num)).replace('G', 'B')
    }

    if (prefix && axis === 'left') {
      result += prefix
    }

    if (rightPrefix && axis === 'right') {
      result += rightPrefix
    }

    if (bottomPrefix && axis === 'bottom') {
      result += bottomPrefix
    }

    result += num

    if (suffix && axis === 'left') {
      result += suffix
    }

    if (rightSuffix && axis === 'right') {
      result += rightSuffix
    }

    if (bottomSuffix && axis === 'bottom') {
      result += bottomSuffix
    }

    return String(result)
  }

  // Select appropriate chart type
  const chartComponents = {
    'Paired Bar': <LinearChart />,
    Bar: <LinearChart />,
    Line: <LinearChart />,
    Combo: <LinearChart />,
    Pie: <PieChart />,
    'Box Plot': <LinearChart />,
    'Area Chart': <LinearChart />,
    'Scatter Plot': <LinearChart />,
    'Deviation Bar': <LinearChart />
  }

  const missingRequiredSections = () => {
    if (config.visualizationType === 'Pie') {
      if (undefined === config?.yAxis.dataKey) {
        return true
      }
    } else {
      if (undefined === config?.series || false === config?.series.length > 0) {
        return true
      }
    }

    if (!config.xAxis.dataKey) {
      return true
    }

    return false
  }

  // Prevent render if loading
  let body = <Loading />

  if (!loading) {
    body = (
      <>
        {isEditor && <EditorPanel />}
        {!missingRequiredSections() && !config.newViz && (
          <div className='cdc-chart-inner-container'>
            {/* Title */}

            {title && config.showTitle && (
              <div role='heading' className={`chart-title ${config.theme} cove-component__header`} aria-level={2}>
                {config && <sup className='superTitle'>{parse(config.superTitle || '')}</sup>}
                <div>{parse(title)}</div>
              </div>
            )}
            <a id='skip-chart-container' className='cdcdataviz-sr-only-focusable' href={handleChartTabbing}>
              Skip Over Chart Container
            </a>
            {/* Filters */}
            {config.filters && !externalFilters && <Filters />}
            {/* Visualization */}
            {config?.introText && <section className='introText'>{parse(config.introText)}</section>}
            <div
              style={{ marginBottom: config.legend.position !== 'bottom' && currentViewport !== 'sm' && currentViewport !== 'xs' && config.orientation === 'horizontal' ? `${config.runtime.xAxis.size}px` : '0px' }}
              className={`chart-container  ${config.legend.position === 'bottom' ? 'bottom' : ''}${config.legend.hide ? ' legend-hidden' : ''}${lineDatapointClass}${barBorderClass} ${contentClasses.join(' ')}`}
            >
              {/* All charts except sparkline */}
              {config.visualizationType !== 'Spark Line' && chartComponents[visualizationType]}

              {/* Sparkline */}
              {config.visualizationType === 'Spark Line' && (
                <>
                  {description && <div className='subtext'>{parse(description)}</div>}
                  <div style={sparkLineStyles}>
                    <ParentSize>
                      {parent => (
                        <>
                          <SparkLine width={parent.width} height={parent.height} />
                        </>
                      )}
                    </ParentSize>
                  </div>
                </>
              )}
              {!config.legend.hide && config.visualizationType !== 'Spark Line' && <Legend />}
            </div>
            {/* Link */}
            {link && link}
            {/* Description */}
            {description && config.visualizationType !== 'Spark Line' && <div className='subtext'>{parse(description)}</div>}

            {/* buttons */}
            <CoveMediaControls.Section classes={['download-buttons']}>
              {config.table.showDownloadImgButton && <CoveMediaControls.Button text='Download Image' title='Download Chart as Image' type='image' state={config} elementToCapture={imageId} />}
              {config.table.showDownloadPdfButton && <CoveMediaControls.Button text='Download PDF' title='Download Chart as PDF' type='pdf' state={config} elementToCapture={imageId} />}
            </CoveMediaControls.Section>

            {/* Data Table */}
            {config.xAxis.dataKey && config.table.show && config.visualizationType !== 'Spark Line' && <DataTable />}
            {config?.footnotes && <section className='footnotes'>{parse(config.footnotes)}</section>}
            {/* show pdf or image button */}
          </div>
        )}
      </>
    )
  }

  const getXAxisData = d => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
  const getYAxisData = (d, seriesKey) => d[seriesKey]

  const contextValues = {
    getXAxisData,
    getYAxisData,
    config,
    setConfig,
    rawData: stateData ?? {},
    excludedData: excludedData,
    transformedData: filteredData || excludedData,
    unfilteredData: stateData,
    seriesHighlight,
    colorScale,
    dimensions,
    currentViewport,
    parseDate,
    formatDate,
    formatNumber,
    loading,
    updateConfig,
    colorPalettes,
    isDashboard,
    setParentConfig,
    missingRequiredSections,
    setEditing,
    setFilteredData,
    handleChartAriaLabels,
    highlight,
    highlightReset,
    legend,
    setSeriesHighlight,
    dynamicLegendItems,
    setDynamicLegendItems,
    filterData,
    imageId,
    handleLineType,
    isNumber,
    cleanData,
    getTextWidth,
    twoColorPalette
  }

  const classes = ['cdc-open-viz-module', 'type-chart', `${currentViewport}`, `font-${config.fontSize}`, `${config.theme}`]

  config.visualizationType === 'Spark Line' && classes.push(`type-sparkline`)
  isEditor && classes.push('spacing-wrapper')
  isEditor && classes.push('isEditor')

  return (
    <ConfigContext.Provider value={contextValues}>
      <div className={`${classes.join(' ')}`} ref={outerContainerRef} data-lollipop={config.isLollipopChart} data-download-id={imageId}>
        {body}
      </div>
    </ConfigContext.Provider>
  )
}
