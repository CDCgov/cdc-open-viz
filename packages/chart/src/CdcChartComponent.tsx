import React, { useState, useEffect, useCallback, useRef, useId, useContext, useReducer } from 'react'

// IE11
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'
// Core components
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
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
import { isDateScale } from '@cdc/core/helpers/cove/date'

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
import EditorContext from '../../editor/src/ConfigContext'
import { EDITOR_WIDTH } from '@cdc/core/helpers/constants'
// Local helpers
import { isConvertLineToBarGraph } from './helpers/isConvertLineToBarGraph'
import { getBoxPlotConfig } from './helpers/getBoxPlotConfig'
import { getComboChartConfig } from './helpers/getComboChartConfig'
import { getExcludedData } from './helpers/getExcludedData'
import { getColorScale } from './helpers/getColorScale'
// styles
import './scss/main.scss'
import { getInitialState, reducer } from './store/chart.reducer'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { getNewRuntime } from './helpers/getNewRuntime'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import { Datasets } from '@cdc/core/types/DataSet'

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
  datasets?: Datasets
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
  dashboardConfig,
  datasets
}) => {
  const transform = new DataTransform()
  const initialState = getInitialState(configObj)
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    config,
    stateData,
    excludedData,
    filteredData,
    currentViewport,
    isLoading,
    dimensions,
    container,
    coveLoadedEventRan,
    imageId,
    seriesHighlight,
    colorScale,
    brushConfig
  } = state
  const { description, visualizationType } = config
  const svgRef = useRef(null)
  const editorContext = useContext(EditorContext)
  const [externalFilters, setExternalFilters] = useState<any[]>()

  const setConfig = (newConfig: ChartConfig): void => {
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    if (isEditor && !isDashboard) {
      editorContext.setTempConfig(newConfig)
    }
  }

  const legendRef = useRef(null)
  const parentRef = useRef(null)

  const handleDragStateChange = isDragging => {
    dispatch({ type: 'SET_DRAG_ANNOTATIONS', payload: isDragging })
  }

  // Destructure items from config for more readable JSX
  let { legend, title } = config

  // set defaults on titles if blank AND only in editor
  if (isEditor) {
    if (!title || title === '') title = 'Chart Title'
  }

  if (config.table && (!config.table?.label || config.table?.label === '')) config.table.label = 'Data Table'

  const { lineDatapointClass, contentClasses, sparkLineStyles } = useDataVizClasses(config)
  const legendId = useId()

  const hasDateAxis =
    (config.xAxis || config.yAxis) && ['date-time', 'date'].includes((config.xAxis || config.yAxis).type)
  const dataTableDefaultSortBy = hasDateAxis && config.xAxis.dataKey

  const convertLineToBarGraph = isConvertLineToBarGraph(config, filteredData)

  const prepareConfig = (loadedConfig: ChartConfig) => {
    let newConfig = _.defaultsDeep(loadedConfig, defaults)
    _.defaultsDeep(newConfig, {
      table: { showVertical: false }
    })

    _.set(newConfig, 'table.show', _.get(newConfig, 'table.show', !isDashboard))

    _.forEach(newConfig.series, series => {
      _.defaults(series, {
        tooltip: true,
        axis: 'Left'
      })
    })

    if (newConfig.visualizationType === 'Bump Chart') {
      newConfig.xAxis.type === 'date-time'
    }
    if (!isDashboard) return coveUpdateWorker(newConfig)
    return newConfig
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
      newConfig.visualizationSubType = 'stacked'
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
      !convertLineToBarGraph
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
      dispatch({ type: 'SET_SERIES_HIGHLIGHT', payload: newConfig.legend?.seriesHighlight })
    }

    setConfig(newConfig)
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

  const setFilters = (newFilters: VizFilter[]) => {
    if (!config.dynamicSeries) {
      const _newFilters = addValuesToFilters(newFilters, excludedData)
      setConfig({
        ...config,
        filters: _newFilters
      })
    }

    if (config.filterBehavior === 'Filter Change') {
      const newFilteredData = filterVizData(newFilters, excludedData)

      dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
      if (config.dynamicSeries) {
        const runtime = getNewRuntime(config, newFilteredData)
        setConfig({
          ...config,
          filters: newFilters,
          runtime
        })
      }
    }
  }

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect

      width = isEditor ? width - EDITOR_WIDTH : width

      const newViewport = getViewport(width)

      dispatch({ type: 'SET_VIEWPORT', payload: newViewport })

      if (entry.target.dataset.lollipop === 'true') {
        width = width - 2.5
      }

      width = width
      dispatch({ type: 'SET_DIMENSIONS', payload: [width, height] })
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    dispatch({ type: 'SET_CONTAINER', payload: node })
  }, []) // eslint-disable-line

  const prepareData = async newConfig => {
    try {
      const urlFilters = newConfig.filters
        ? newConfig.filters.filter(filter => filter.type === 'url').length > 0
          ? true
          : false
        : false

      if (newConfig.dataUrl && !urlFilters) {
        // handle urls with spaces in the name.
        if (newConfig.dataUrl) newConfig.dataUrl = `${newConfig.dataUrl}`
        let newData = await fetchRemoteData(newConfig.dataUrl, 'Chart')

        if (newData && newConfig.dataDescription) {
          newData = transform.autoStandardize(newData)
          newData = transform.developerStandardize(newData, newConfig.dataDescription)
        }

        if (newData) {
          newConfig.data = newData
        }
      } else if (newConfig.formattedData) {
        newConfig.data = newConfig.formattedData
      } else if (newConfig.dataDescription) {
        newConfig.data = transform.autoStandardize(newConfig.data)
        newConfig.data = transform.developerStandardize(newConfig.data, newConfig.dataDescription)
      }
    } catch (err) {
      console.error('Error on prepareData function ', err)
    }
    return newConfig
  }
  useEffect(() => {
    try {
      if (configObj) {
        const preparedConfig = prepareConfig(_.cloneDeep(configObj))
        const { formattedData } = preparedConfig
        preparedConfig.data = formattedData
        dispatch({ type: 'SET_STATE_DATA', payload: formattedData })
        dispatch({ type: 'SET_EXCLUDED_DATA', payload: formattedData })
        updateConfig(preparedConfig, formattedData)
      }
    } catch (err) {
      console.error('Could not Load!')
    }
  }, [configObj?.data?.length ? configObj.data : null])

  /**
   * When cove has a config and container ref publish the cove_loaded event.
   */
  useEffect(() => {
    if (container && !isLoading && !_.isEmpty(config) && !coveLoadedEventRan) {
      publish('cove_loaded', { config: config })
      dispatch({ type: 'SET_LOADED_EVENT', payload: true })
    }
  }, [container, config, isLoading]) // eslint-disable-line

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
      setConfig(newConfigHere)
      dispatch({ type: 'SET_FILTERED_DATA', payload: filterVizData(externalFilters, excludedData) })
    }
  }, [externalFilters]) // eslint-disable-line

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if (stateData && config.xAxis && config.runtime?.seriesKeys) {
      const newColorScale = getColorScale(config)
      dispatch({ type: 'SET_COLOR_SCALE', payload: newColorScale })
      //  setColorScale(newColorScale)
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
      if (!legend) throw new Error('No legend available to set previous focus on.')
      legend.focus()
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
    if (num === '') return 'N/A'
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
    //  specify keys that needs  to be cleaned to render chart and skip rest
    const CIkeys: string[] = Object.values(_.get(config, 'confidenceKeys', {})) as string[]
    const seriesKeys: string[] = _.get(config, 'series', []).map((s: any) => s.dataKey)
    const keysToClean: string[] = [...(seriesKeys ?? []), ...(CIkeys ?? [])]

    // key that does not need to be cleaned
    const excludedKey = config.xAxis.dataKey
    return config?.xAxis?.dataKey ? transform.cleanData(data, excludedKey, keysToClean) : data
  }

  const getTableRuntimeData = () => {
    if (visualizationType === 'Sankey') return config?.data?.[0]?.tableData
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
    const classes = ['subtext mt-4']
    const isLegendOnBottom = legend?.position === 'bottom' || isLegendWrapViewport(currentViewport)

    if (config.isResponsiveTicks) classes.push('subtext--responsive-ticks ')
    if (config.brush?.active && !isLegendOnBottom) classes.push('subtext--brush-active ')
    if (config.brush?.active && config.legend.hide) classes.push('subtext--brush-active ')
    return classes
  }

  if (!isLoading) {
    const tableLink = (
      <a href={`#data-table-${config.dataKey}`} className='margin-left-href'>
        {config.dataKey} (Go to Table)
      </a>
    )

    body = (
      <>
        {isEditor && <EditorPanel datasets={datasets} />}
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
                title={title}
                superTitle={config.superTitle}
                classes={['chart-title', `${config.theme}`, 'cove-component__header', 'mb-3']}
                style={undefined}
              />

              {/* Visualization Wrapper */}
              <div className={getChartWrapperClasses().join(' ')}>
                {/* Intro Text/Message */}
                {config?.introText && config.visualizationType !== 'Spark Line' && (
                  <section className={`introText mb-4`}>{parse(config.introText)}</section>
                )}

                {/* Filters */}
                {config.filters && !externalFilters && config.visualizationType !== 'Spark Line' && (
                  <Filters
                    config={config}
                    setFilters={setFilters}
                    excludedData={excludedData}
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
                        : legend.position === 'bottom' ||
                          legend.position === 'top' ||
                          visualizationType === 'Sankey' ||
                          visualizationType === 'Spark Line'
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
                      (convertLineToBarGraph ? (
                        <div ref={parentRef} style={{ width: `100%` }}>
                          <ParentSize>
                            {parent => (
                              <LinearChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
                            )}
                          </ParentSize>
                        </div>
                      ) : (
                        <div ref={parentRef} style={{ width: '100%' }}>
                          <ParentSize>
                            {parent => {
                              const labelMargin = 120
                              const widthReduction =
                                config.showLineSeriesLabels &&
                                (config.legend.position !== 'right' || config.legend.hide)
                                  ? labelMargin
                                  : 0
                              return (
                                <LinearChart
                                  ref={svgRef}
                                  parentWidth={parent.width - widthReduction}
                                  parentHeight={parent.height}
                                />
                              )
                            }}
                          </ParentSize>
                        </div>
                      ))}
                    {/* Sparkline */}
                    {config.visualizationType === 'Spark Line' && (
                      <>
                        <Filters
                          config={config}
                          setFilters={setFilters}
                          excludedData={excludedData}
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

                {config.description && config.visualizationType !== 'Spark Line' && (
                  <div className={getChartSubTextClasses().join(' ')}>{parse(config.description)}</div>
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
                    /* changing the "key" will force the table to re-render
                    when the default sort changes while editing */
                    key={dataTableDefaultSortBy}
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
                    defaultSortBy={dataTableDefaultSortBy}
                    displayGeoName={name => name}
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
                {config?.legacyFootnotes && (
                  <section className='footnotes pt-2 mt-4'>{parse(config.legacyFootnotes)}</section>
                )}
              </div>
              <FootnotesStandAlone
                config={configObj.footnotes}
                filters={config.filters?.filter(f => f.filterFootnotes)}
              />
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
    ...state,
    brushConfig,
    capitalize,
    convertLineToBarGraph,
    clean,
    colorPalettes,
    dashboardConfig,
    debugSvg: isDebug,
    formatDate,
    formatNumber,
    formatTooltipsDate,
    getXAxisData,
    getYAxisData,
    handleChartAriaLabels,
    handleLineType,
    handleChartTabbing,
    highlight,
    handleShowAll,
    isDashboard,
    isDebug,
    handleDragStateChange,
    isEditor,
    isNumber,
    legend,
    legendId,
    legendRef,
    lineOptions,
    missingRequiredSections,
    outerContainerRef,
    parentRef,
    parseDate,
    rawData: _.cloneDeep(stateData) ?? {},
    setConfig,
    setEditing,
    setParentConfig,
    setSharedFilter,
    setSharedFilterValue,
    svgRef,
    tableData: filteredData || excludedData,
    transformedData: clean(filteredData || excludedData),
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
