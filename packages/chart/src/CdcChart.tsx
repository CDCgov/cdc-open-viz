import React, { useEffect, useCallback, useRef, useId, useReducer } from 'react'
import { reducer, initialState } from './store/chart.reducer'

// IE11
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'
// Core components
import Layout from '@cdc/core/components/Layout'
import Confirm from '@cdc/core/components/elements/Confirm'
import Error from '@cdc/core/components/elements/Error'
import SkipTo from '@cdc/core/components/elements/SkipTo'
import Title from '@cdc/core/components/ui/Title'
import DataTable from '@cdc/core/components/DataTable'
// Local Components
import LegendWrapper from './components/LegendWrapper'
//types
import { type DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import type { TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'
import { AllChartsConfig, ChartConfig } from './types/ChartConfig'
import { Pivot } from '@cdc/core/types/Table'
import { Runtime } from '@cdc/core/types/Runtime'
import { Label } from './types/Label'
// External Libraries
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { timeParse, timeFormat } from 'd3-time-format'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'
import _ from 'lodash'
// Primary Components
import ConfigContext, { ChartDispatchContext } from './ConfigContext'
import PieChart from './components/PieChart'
import SankeyChart from './components/Sankey'
import LinearChart from './components/LinearChart'

import { colorPalettesChart as colorPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'

import SparkLine from './components/Sparkline'
import Legend from './components/Legend'
import defaults from './data/initial-state'
import EditorPanel from './components/EditorPanel'
import { abbreviateNumber } from './helpers/abbreviateNumber'
import { handleChartTabbing } from './helpers/handleChartTabbing'

import { handleChartAriaLabels } from './helpers/handleChartAriaLabels'
import { lineOptions } from './helpers/lineOptions'
import { handleLineType } from './helpers/handleLineType'
import { handleRankByValue } from './helpers/handleRankByValue'
import { generateColorsArray } from './helpers/generateColorsArray'
import Loading from '@cdc/core/components/Loading'
import Filters from '@cdc/core/components/Filters'
import MediaControls from '@cdc/core/components/MediaControls'
import Annotation from './components/Annotations'
// Core Helpers
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { isLegendWrapViewport } from '@cdc/core/helpers/viewports'
import { missingRequiredSections } from '@cdc/core/helpers/missingRequiredSections'
import { filterVizData } from '@cdc/core/helpers/filterVizData'
import { addValuesToFilters } from '@cdc/core/helpers/addValuesToFilters'
import { publish, subscribe, unsubscribe } from '@cdc/core/helpers/events'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import numberFromString from '@cdc/core/helpers/numberFromString'
import getViewport from '@cdc/core/helpers/getViewport'
import isNumber from '@cdc/core/helpers/isNumber'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
// Local helpers
import { isConvertLineToBarGraph } from './helpers/isConvertLineToBarGraph'
import { getChartSubTextClasses, getChartWrapperClasses } from './helpers/getChartClassNames'
import { getBoxPlotConfig } from './helpers/getBoxPlotConfig'
import { getComboChartConfig } from './helpers/getComboChartConfig'
import { getExcludedData } from './helpers/getExcludedData'
import { getColorScale } from './helpers/getColorScale'

// styles
import './scss/main.scss'

interface CdcChartProps {
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
const CdcChart: React.FC<CdcChartProps> = ({
  config: configObj,
  isEditor = false,
  isDebug = false,
  isDashboard = false,
  setConfig: setParentConfig,
  setEditing,
  link,
  setSharedFilter,
  setSharedFilterValue,
  dashboardConfig
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    config,
    stateData,
    excludedData,
    filteredData,
    seriesHighlight,
    currentViewport,
    dimensions,
    externalFilters,
    container,
    coveLoadedEventRan,
    isDraggingAnnotation,
    imageId,
    colorScale,
    isLoading
  } = state

  /// handle Debug mode
  if (isDebug) console.log('Chart config, isEditor', config, isEditor)
  const transform = new DataTransform()

  /// Register Refs
  const svgRef = useRef(null)
  const legendRef = useRef(null)
  const parentRef = useRef(null)

  // Function dispacthers
  const setFiltersConfig = newConfig => {
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }
  const setFiltersData = filteredData => {
    dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
  }

  const handleDragStateChange = isDragging => {
    dispatch({ type: 'SET_DRAG_ANNOTATIONS', payload: isDragging })
  }
  // hooks and states
  const { lineDatapointClass, contentClasses, sparkLineStyles } = useDataVizClasses(config)
  const legendId = useId()

  const checkLineToBarGraph = () => {
    return isConvertLineToBarGraph(config.visualizationType, filteredData, config.allowLineToBarGraph)
  }

  const prepareConfig = (loadedConfig: ChartConfig, data): ChartConfig => {
    let newConfig = _.defaultsDeep(loadedConfig, defaults)
    _.defaultsDeep(newConfig, {
      table: { showVertical: false }
    })

    _.set(newConfig, 'table.show', _.get(newConfig, 'table.show', !isDashboard))

    newConfig.series.forEach(series => {
      const defaultType = newConfig.visualizationType === 'Combo' ? 'Bar' : newConfig.visualizationType || 'Bar'

      series.tooltip = series.tooltip ?? true
      series.axis = series.axis ?? 'Left'
      series.type = series.type ?? defaultType
    })
    if (newConfig.visualizationType === 'Bump Chart') {
      newConfig.xAxis.type === 'date-time'
    }
    if (isEditor) {
      if (!newConfig.title || newConfig.title === '') {
        newConfig.title = 'Chart Title'
      }
    }
    if (newConfig.table && (!newConfig.table?.label || newConfig.table?.label === '')) {
      newConfig.table.label = 'Data Table'
    }

    if (newConfig.orientation === 'horizontal') {
      newConfig.lollipopShape = newConfig.lollipopShape
    }
    if (newConfig.visualizationType === 'Deviation Bar' || newConfig.visualizationType === 'Paired Bar') {
      newConfig.orientation = 'horizontal'
    }

    if (config.visualizationType === 'Scatter Plot') {
      newConfig.xAxis.type = 'continuous'
    }

    return { ...coveUpdateWorker(newConfig) }
  }

  const updateConfig = (_config: AllChartsConfig, dataOverride?: any[]) => {
    const newConfig = _.cloneDeep(_config)
    let data = dataOverride || stateData

    data = handleRankByValue(data, newConfig)

    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    const newExcludedData: any[] = getExcludedData(newConfig, dataOverride || stateData)
    dispatch({ type: 'SET_EXCLUDED_DATA', payload: newExcludedData })

    // After data is grabbed, loop through and generate filter column values if there are any
    let currentData: any[] = []
    if (newConfig.filters) {
      const filtersWithValues = addValuesToFilters(newConfig.filters, newExcludedData)
      currentData = filterVizData(filtersWithValues, newExcludedData)
      dispatch({ type: 'SET_FILTERED_DATA', payload: currentData })
    }

    if (newConfig.xAxis.type === 'date-time' && config.orientation === 'horizontal') {
      newConfig.xAxis.type = 'date'
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {} as Runtime
    newConfig.runtime.series = _.cloneDeep(newConfig.series)
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = (dataOverride || data).map(d => d[newConfig.xAxis.dataKey])
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
    } else {
      const finalData = dataOverride || newConfig.formattedData || newConfig.data
      newConfig.runtime.seriesKeys = (newConfig.runtime.series || []).flatMap(series => {
        if (series.dynamicCategory) {
          _.remove(newConfig.runtime.seriesLabelsAll, label => label === series.dataKey)
          _.remove(newConfig.runtime.series, s => s.dataKey === series.dataKey)
          // grab the dynamic series keys from the data
          const seriesKeys: string[] = _.uniq(finalData.map(d => d[series.dynamicCategory]))
          // for each of those keys perform side effects
          seriesKeys.forEach(dataKey => {
            newConfig.runtime.seriesLabels[dataKey] = dataKey
            newConfig.runtime.seriesLabelsAll.push(dataKey)
            newConfig.runtime.series.push({
              dataKey,
              type: series.type,
              lineType: series.lineType,
              originalDataKey: series.dataKey,
              dynamicCategory: series.dynamicCategory,
              tooltip: true
            })
          })
          // return the series keys
          return seriesKeys
        } else {
          newConfig.runtime.seriesLabels[series.dataKey] = series.name || series.label || series.dataKey
          newConfig.runtime.seriesLabelsAll.push(series.name || series.dataKey)
          // return the series keys
          return [series.dataKey]
        }
      })
    }

    if (newConfig.visualizationType === 'Box Plot' && newConfig.series) {
      const [plots, categories] = getBoxPlotConfig(newConfig, stateData)
      newConfig.boxplot['categories'] = categories
      newConfig.boxplot.plots = plots
    }
    if (newConfig.visualizationType === 'Combo' && newConfig.series) {
      newConfig.runtime = getComboChartConfig(newConfig)
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
    newConfig.runtime.editorErrorMessage = ''

    if (newConfig.legend.seriesHighlight?.length) {
      dispatch({ type: 'SET_SERIES_HIGHLIGHT', payload: newConfig.legend?.seriesHighligh })
    }
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
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
      const svgMarginWidth = 15
      const editorWidth = 350

      width = isEditor ? width - editorWidth : width

      const newViewport = getViewport(width)

      dispatch({ type: 'SET_VIEWPORT', payload: newViewport })

      if (entry.target.dataset.lollipop === 'true') {
        width = width - 2.5
      }

      width = width - svgMarginWidth

      dispatch({ type: 'SET_DIMENSIONS', payload: [width, height] })
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }

    dispatch({ type: 'SET_CONTAINER', payload: node })
  }, []) // eslint-disable-line

  // Load data when component first mounts

  const prepareData = (config, data) => {
    if (config.dataDescription) {
      data = transform.autoStandardize(data)
      data = transform.developerStandardize(data, config.dataDescription)
    }

    data = handleRankByValue(data, config)

    return data
  }
  useEffect(() => {
    const load = async () => {
      try {
        const data = configObj.data
        if (configObj.data && configObj) {
          const preparedConfig = await prepareConfig(configObj, data)
          const preparedData = prepareData(configObj, data)
          dispatch({ type: 'SET_STATE_DATA', payload: preparedData })

          dispatch({ type: 'SET_EXCLUDED_DATA', payload: preparedData })
          updateConfig(preparedConfig, preparedData)
          dispatch({ type: 'SET_FILTERED_DATA', payload: filterVizData(config.filters, data) })
        }
      } catch (err) {
        console.error('Could not Load!')
      }
    }

    load()
  }, [configObj?.data?.length ? configObj.data : null])

  /**
   * When cove has a config and container ref publish the cove_loaded event.
   */
  useEffect(() => {
    if (container && !_.isEmpty(config) && !coveLoadedEventRan) {
      publish('cove_loaded', { config: config })
      dispatch({ type: 'SET_LOADED_EVENT', payload: true })
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
      dispatch({ type: 'SET_EXTERNAL_FILTERS', payload: tmp })
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
        dispatch({ type: 'SET_CONFIG', payload: configCopy })
        dispatch({ type: 'SET_FILTERED_DATA', payload: filterVizData(externalFilters, excludedData) })
      }
    }

    if (
      externalFilters &&
      externalFilters.length > 0 &&
      externalFilters.length > 0 &&
      externalFilters[0].hasOwnProperty('active')
    ) {
      let newConfigHere = { ...config, filters: externalFilters }
      dispatch({ type: 'SET_CONFIG', payload: newConfigHere })
      dispatch({ type: 'SET_FILTERED_DATA', payload: filterVizData(externalFilters, excludedData) })
    }
  }, [externalFilters]) // eslint-disable-line

  useEffect(() => {
    if (stateData && config.xAxis && config.runtime?.seriesKeys) {
      const newColorScale = getColorScale(config)

      dispatch({ type: 'SET_COLOR_SCALE', payload: newColorScale })
      dispatch({ type: 'SET_LOADING', payload: false })
    }

    if (config && stateData && config.sortData) {
      stateData.sort(sortData)
    }
  }, [config, stateData]) // eslint-disable-line

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = (label: Label): void => {
    if (seriesHighlight.length + 1 === config.runtime.seriesKeys.length && config.visualizationType !== 'Forecasting') {
      return handleShowAll()
    }

    const newHighlight = _.findKey(config.runtime.seriesLabels, v => v === label.datum) || label.datum

    const newSeriesHighlight = _.xor(seriesHighlight, [newHighlight])
    dispatch({ type: 'SET_SERIES_HIGHLIGHT', payload: newSeriesHighlight })
  }
  // Called on reset button click, unhighlights all data series
  const handleShowAll = () => {
    try {
      const legend = legendRef.current
      if (!config.legend) throw new Error('No legend available to set previous focus on.')
      config.legend.focus()
    } catch (e) {
      console.error('COVE:', e.message)
    }
    dispatch({ type: 'SET_SERIES_HIGHLIGHT', payload: [] })
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

  const formatDate = (date, i, ticks) => {
    let formattedDate = timeFormat(config.runtime[section].dateDisplayFormat)(date)
    // Handle the case where all months work with '%b.' except for May
    if (config.runtime[section].dateDisplayFormat?.includes('%b.') && formattedDate.includes('May.')) {
      formattedDate = formattedDate.replace(/May\./g, 'May')
    }
    // Show years only once
    if (config.xAxis.showYearsOnce && config.runtime[section].dateDisplayFormat?.includes('%Y') && ticks) {
      const prevDate = ticks[i - 1] ? ticks[i - 1].value : null
      const prevFormattedDate = timeFormat(config.runtime[section].dateDisplayFormat)(prevDate)
      const year = formattedDate.match(/\d{4}/)
      const prevYear = prevFormattedDate.match(/\d{4}/)
      if (year && prevYear && year[0] === prevYear[0]) {
        formattedDate = formattedDate.replace(year, '')
      }
    }
    return formattedDate
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
    if (config.series?.some(series => !!series.dynamicCategory)) return data
    return config?.xAxis?.dataKey ? transform.cleanData(data, config.xAxis.dataKey) : data
  }

  const getTableRuntimeData = () => {
    if (config.visualizationType === 'Sankey') return config?.data?.[0]?.tableData
    const data = filteredData || excludedData
    const dynamicSeries = config.series.find(series => !!series.dynamicCategory)
    if (!dynamicSeries) return data
    const usedColumns = Object.values(config.columns)
      .filter(col => col.dataTable)
      .map(col => col.name)
      .concat([dynamicSeries.dynamicCategory, dynamicSeries.dataKey])
    if (config.xAxis?.dataKey) usedColumns.push(config.xAxis.dataKey)
    return data.map(d => _.pick(d, usedColumns))
  }

  const pivotDynamicSeries = (config: ChartConfig): TableConfig => {
    const tableConfig: TableConfig = _.cloneDeep(config)
    const dynamicSeries = tableConfig.series.find(series => !!series.dynamicCategory)
    if (dynamicSeries) {
      const pivot: Pivot = { columnName: dynamicSeries.dynamicCategory, valueColumns: [dynamicSeries.dataKey] }
      tableConfig.table.pivot = pivot
    }
    return tableConfig
  }

  // Prevent render if loading
  let body = <Loading />

  const makeClassName = string => {
    if (!_.isString(string)) return undefined

    return _.kebabCase(string)
  }

  if (!isLoading) {
    const tableLink = (
      <a href={`#data-table-${config.dataKey}`} className='margin-left-href'>
        {config.dataKey} (Go to Table)
      </a>
    )
    const chartWrapperClasses = getChartWrapperClasses(
      config,
      currentViewport,
      isLegendWrapViewport,
      lineDatapointClass,
      dashboardConfig,
      contentClasses
    )

    body = (
      <>
        {isEditor && <EditorPanel />}
        <Layout.Responsive isEditor={isEditor}>
          {config.newViz && <Confirm updateConfig={updateConfig} config={config} />}
          {undefined === config.newViz && isEditor && config.runtime && config.runtime?.editorErrorMessage && (
            <Error errorMessage={config.runtime.editorErrorMessage} />
          )}
          {!missingRequiredSections(config) && !config.newViz && (
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
                title={config.title}
                superTitle={config.superTitle}
                classes={['chart-title', `${config.theme}`, 'cove-component__header', 'mb-3']}
                style={undefined}
              />

              {/* Visualization Wrapper */}
              <div className={chartWrapperClasses.join(' ')}>
                {/* Intro Text/Message */}
                {config?.introText && config.visualizationType !== 'Spark Line' && (
                  <section className={`introText mb-4`}>{parse(config.introText)}</section>
                )}

                {/* Filters */}
                {config.filters && !externalFilters && config.visualizationType !== 'Spark Line' && (
                  <Filters
                    config={config}
                    setConfig={setFiltersConfig}
                    setFilteredData={setFiltersData}
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
                      config.legend.hide || isLegendWrapViewport(currentViewport)
                        ? 'w-100'
                        : config.legend.position === 'bottom' ||
                          config.legend.position === 'top' ||
                          config.visualizationType === 'Sankey'
                        ? 'w-100'
                        : 'w-75'
                    }
                  >
                    {/* All charts with LinearChart */}
                    {!['Spark Line', 'Line', 'Sankey', 'Pie', 'Sankey'].includes(config.visualizationType) && (
                      <div ref={parentRef} style={{ width: `100%` }}>
                        <ParentSize>
                          {parent => (
                            <LinearChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
                          )}
                        </ParentSize>
                      </div>
                    )}

                    {config.visualizationType === 'Pie' && (
                      <ParentSize className='justify-content-center d-flex' style={{ width: `100%` }}>
                        {parent => <PieChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />}
                      </ParentSize>
                    )}
                    {/* Line Chart */}
                    {config.visualizationType === 'Line' &&
                      (checkLineToBarGraph() ? (
                        <div ref={parentRef} style={{ width: `100%` }}>
                          <ParentSize>
                            {parent => (
                              <LinearChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
                            )}
                          </ParentSize>
                        </div>
                      ) : (
                        <div ref={parentRef} style={{ width: `100%` }}>
                          <ParentSize>
                            {parent => (
                              <LinearChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
                            )}
                          </ParentSize>
                        </div>
                      ))}
                    {/* Sparkline */}
                    {config.visualizationType === 'Spark Line' && (
                      <>
                        <Filters
                          config={config}
                          setConfig={setFiltersConfig}
                          setFilteredData={setFiltersData}
                          filteredData={filteredData}
                          excludedData={excludedData}
                          filterData={filterVizData}
                          dimensions={dimensions}
                        />
                        {config?.introText && (
                          <section className='introText mb-4' style={{ padding: '0px 0 35px' }}>
                            {parse(config.introText)}
                          </section>
                        )}
                        <div style={{ height: `100px`, width: `100%`, ...sparkLineStyles }}>
                          <ParentSize>{parent => <SparkLine width={parent.width} height={parent.height} />}</ParentSize>
                        </div>
                        {config.description && (
                          <div className='subtext' style={{ padding: '35px 0 15px' }}>
                            {parse(config.description)}
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

                {config.description && config.visualizationType !== 'Spark Line' && (
                  <div className={getChartSubTextClasses(config, currentViewport, isLegendWrapViewport).join('')}>
                    {parse(config.description)}
                  </div>
                )}

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
                    config={pivotDynamicSeries(config)}
                    rawData={
                      config.visualizationType === 'Sankey'
                        ? config?.data?.[0]?.tableData
                        : config.table.customTableConfig
                        ? filterVizData(config.filters, config.data)
                        : config.data
                    }
                    runtimeData={getTableRuntimeData()}
                    expandDataTable={config.table.expanded}
                    columns={config.columns}
                    displayGeoName={name => name}
                    applyLegendToRow={applyLegendToRow}
                    tableTitle={config.table.label}
                    indexTitle={config.table.indexLabel}
                    vizTitle={config.title}
                    viewport={currentViewport}
                    tabbingId={handleChartTabbing(config, legendId)}
                    colorScale={colorScale}
                  />
                )}
                {config?.annotations?.length > 0 && <Annotation.Dropdown />}
                {/* show pdf or image button */}
                {config?.footnotes && <section className='footnotes pt-2 mt-4'>{parse(config.footnotes)}</section>}
              </div>
            </div>
          )}
        </Layout.Responsive>
      </>
    )
  }

  const contextValues = {
    ...state,
    clean,
    colorPalettes,
    dashboardConfig,
    debugSvg: isDebug,
    formatDate,
    formatNumber,
    formatTooltipsDate,
    handleChartAriaLabels,
    handleLineType,
    handleChartTabbing,
    highlight,
    handleShowAll,
    isDashboard,
    isDebug,
    isDraggingAnnotation,
    handleDragStateChange,
    isEditor,
    isNumber,
    legendId,
    legendRef,
    lineOptions,
    missingRequiredSections,
    outerContainerRef,
    parentRef,
    parseDate,
    rawData: _.cloneDeep(stateData) ?? {},
    setEditing,
    setParentConfig,
    setSharedFilter,
    setSharedFilterValue,
    svgRef,
    tableData: filteredData || excludedData, // do not clean table data
    transformedData: clean(filteredData || excludedData), // do this right before passing to components
    twoColorPalette,
    unfilteredData: _.cloneDeep(stateData),
    updateConfig
  }

  return (
    <ConfigContext.Provider value={contextValues}>
      <ChartDispatchContext.Provider value={dispatch}>
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
      </ChartDispatchContext.Provider>
    </ConfigContext.Provider>
  )
}

export default CdcChart
