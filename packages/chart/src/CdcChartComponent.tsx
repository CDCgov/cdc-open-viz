import React, { useState, useEffect, useCallback, useRef, useId, useContext, useReducer, useMemo } from 'react'

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
import _ from 'lodash'
// Primary Components
import ConfigContext, { ChartDispatchContext } from './ConfigContext'
import PieChart from './components/PieChart'
import SankeyChart from './components/Sankey'
import LinearChart from './components/LinearChart'
import { isDateScale } from '@cdc/core/helpers/cove/date'

import { twoColorPalette } from '@cdc/core/data/colorPalettes'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'

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
import { generateColorsArray } from '@cdc/core/helpers/generateColorsArray'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'
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
import EditorContext from '@cdc/core/contexts/EditorContext'
import { EDITOR_WIDTH } from '@cdc/core/helpers/constants'
import { extractCoveData, updateVegaData } from '@cdc/core/helpers/vegaConfig'
// Local helpers
import { isConvertLineToBarGraph } from './helpers/isConvertLineToBarGraph'
import { getBoxPlotConfig } from './helpers/getBoxPlotConfig'
import { getComboChartConfig } from './helpers/getComboChartConfig'
import { getExcludedData } from './helpers/getExcludedData'
import { getColorScale } from './helpers/getColorScale'
import { getTransformedData } from './helpers/getTransformedData'
import { getPiePercent } from './helpers/getPiePercent'
import { prepareSmallMultiplesDataTable } from './helpers/smallMultiplesHelpers'

// styles
import './scss/main.scss'
import { getInitialState, reducer } from './store/chart.reducer'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { getNewRuntime } from './helpers/getNewRuntime'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import { Datasets } from '@cdc/core/types/DataSet'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

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
  interactionLabel: string
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
  datasets,
  interactionLabel
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
    colorScale
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

  // Process markup variables for text fields (memoized to prevent re-processing on every render)
  // Note: XSS Safety - The processed content is parsed using html-react-parser which sanitizes
  // HTML input by default. The markup processor returns plain text with user data substituted.
  const processedTextFields = useMemo(() => {
    if (!config.enableMarkupVariables || !config.markupVariables?.length) {
      return {
        title,
        superTitle: config.superTitle,
        introText: config.introText,
        legacyFootnotes: config.legacyFootnotes,
        description: config.description
      }
    }

    return {
      title: title
        ? processMarkupVariables(title, config.data || [], config.markupVariables, {
            isEditor,
            filters: config.filters || []
          }).processedContent
        : title,
      superTitle: config.superTitle
        ? processMarkupVariables(config.superTitle, config.data || [], config.markupVariables, {
            isEditor,
            filters: config.filters || []
          }).processedContent
        : config.superTitle,
      introText: config.introText
        ? processMarkupVariables(config.introText, config.data || [], config.markupVariables, {
            isEditor,
            filters: config.filters || []
          }).processedContent
        : config.introText,
      legacyFootnotes: config.legacyFootnotes
        ? processMarkupVariables(config.legacyFootnotes, config.data || [], config.markupVariables, {
            isEditor,
            filters: config.filters || []
          }).processedContent
        : config.legacyFootnotes,
      description: config.description
        ? processMarkupVariables(config.description, config.data || [], config.markupVariables, {
            isEditor,
            filters: config.filters || []
          }).processedContent
        : config.description
    }
  }, [
    config.enableMarkupVariables,
    config.markupVariables,
    config.data,
    config.filters,
    title,
    config.superTitle,
    config.introText,
    config.legacyFootnotes,
    config.description,
    isEditor
  ])

  // Destructure processed values
  title = processedTextFields.title
  const processedSuperTitle = processedTextFields.superTitle
  const processedIntroText = processedTextFields.introText
  const processedLegacyFootnotes = processedTextFields.legacyFootnotes
  const processedDescription = processedTextFields.description
  // Note: Axis labels are processed within updateConfig to ensure they use the correct data

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
    // Create defaults without version to avoid overriding legacy configs
    const defaultsWithoutPalette = { ...defaults }

    // Only remove palette defaults for legacy (v1) configs
    // New configs and v2 configs should get the v2 palette defaults
    if (loadedConfig?.general?.palette || (!loadedConfig?.general && !loadedConfig?.color)) {
      // Keep palette defaults for:
      // 1. Configs that already have general.palette (v2 configs)
      // 2. New configs (no general section and no legacy color property)
    } else {
      // Remove palette defaults for legacy configs that have color but no general.palette
      delete defaultsWithoutPalette.general?.palette
    }

    let newConfig = { ...defaultsWithoutPalette, ...loadedConfig }

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

  const getProcessedAxisLabels = useCallback(
    (targetConfig: AllChartsConfig, dataSource: any[] = []) => {
      let processedXAxis = targetConfig.xAxis?.label
      let processedYAxis = targetConfig.yAxis?.label

      if (targetConfig.enableMarkupVariables && targetConfig.markupVariables?.length) {
        if (targetConfig.xAxis?.label) {
          processedXAxis = processMarkupVariables(
            targetConfig.xAxis.label,
            dataSource || [],
            targetConfig.markupVariables,
            {
              isEditor,
              filters: targetConfig.filters || []
            }
          ).processedContent
        }
        if (targetConfig.yAxis?.label) {
          processedYAxis = processMarkupVariables(
            targetConfig.yAxis.label,
            dataSource || [],
            targetConfig.markupVariables,
            {
              isEditor,
              filters: targetConfig.filters || []
            }
          ).processedContent
        }
      }

      const isHorizontalVariant =
        ((targetConfig.visualizationType === 'Bar' || targetConfig.visualizationType === 'Box Plot') &&
          targetConfig.orientation === 'horizontal') ||
        ['Deviation Bar', 'Paired Bar', 'Forest Plot'].includes(targetConfig.visualizationType)

      const runtimeXAxisLabel = isHorizontalVariant
        ? processedYAxis ?? (targetConfig.yAxis as any)?.yAxis?.label ?? targetConfig.yAxis?.label
        : processedXAxis ?? targetConfig.xAxis?.label

      const runtimeYAxisLabel = isHorizontalVariant
        ? processedXAxis ?? (targetConfig.xAxis as any)?.xAxis?.label ?? targetConfig.xAxis?.label
        : processedYAxis ?? targetConfig.yAxis?.label

      return { processedXAxis, processedYAxis, runtimeXAxisLabel, runtimeYAxisLabel, isHorizontalVariant }
    },
    [isEditor]
  )

  const updateConfig = (_config: AllChartsConfig, dataOverride?: any[]) => {
    const newConfig = cloneConfig(_config)
    let data = dataOverride || stateData

    data = handleRankByValue(data, newConfig)

    const { processedXAxis, processedYAxis, runtimeXAxisLabel, runtimeYAxisLabel, isHorizontalVariant } =
      getProcessedAxisLabels(newConfig, data || [])

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
    // Preserve error messages that were set outside of updateConfig (e.g., from pattern settings)
    const existingErrorMessage = _config.runtime?.editorErrorMessage || ''
    const isPieChartValidationError =
      existingErrorMessage === 'Data column section must be set for pie charts.' ||
      existingErrorMessage === 'Segment labels section must be set for pie charts.' ||
      existingErrorMessage === 'Data column and Segment labels sections must be set for pie charts.'
    const shouldPreserveError = existingErrorMessage && !isPieChartValidationError

    newConfig.runtime = {} as Runtime
    newConfig.runtime.series = _.cloneDeep(newConfig.series)
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      // Use the same data that will be passed to PieChart (after exclusions and filters)
      const pieData = currentData.length > 0 ? currentData : newExcludedData
      newConfig.runtime.seriesKeys = _.uniq(pieData.map(d => d[newConfig.xAxis.dataKey]))
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
      newConfig.yAxis.labelPlacement = 'On Date/Category Axis'
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

      // Default to date scaling type for Forecasting charts
      if (newConfig.xAxis.type === 'categorical') {
        newConfig.xAxis.type = 'date'
        // Initialize date parsing formats if they don't exist
        if (!newConfig.xAxis.dateParseFormat) {
          newConfig.xAxis.dateParseFormat = '%Y-%m-%d'
        }
        if (!newConfig.xAxis.dateDisplayFormat) {
          newConfig.xAxis.dateDisplayFormat = '%Y-%m-%d'
        }
      }
    }

    if (newConfig.visualizationType === 'Area Chart' && newConfig.series) {
      newConfig.runtime.areaSeriesKeys = []

      newConfig.series.forEach(series => {
        newConfig.runtime.areaSeriesKeys.push({ ...series, type: 'Area Chart' })
      })
      newConfig.visualizationSubType = 'stacked'
    }

    if (isHorizontalVariant) {
      // For horizontal charts, axes are swapped, so processedYAxis goes to runtime.xAxis and vice versa
      const horizontalXAxisSource = _.cloneDeep((newConfig.yAxis as any)?.yAxis || newConfig.yAxis)
      const horizontalYAxisSource = _.cloneDeep((newConfig.xAxis as any)?.xAxis || newConfig.xAxis)
      newConfig.runtime.xAxis = {
        ...horizontalXAxisSource,
        label: runtimeXAxisLabel ?? horizontalXAxisSource?.label
      }
      newConfig.runtime.yAxis = {
        ...horizontalYAxisSource,
        label: runtimeYAxisLabel ?? horizontalYAxisSource?.label
      }
      newConfig.runtime.yAxis.labelOffset *= -1

      newConfig.runtime.horizontal = false
      newConfig.orientation = 'horizontal'
      // remove after  COVE supports categorical axis on horizonatal bars
      newConfig.yAxis.type = newConfig.yAxis.type === 'categorical' ? 'linear' : newConfig.yAxis.type
    } else if (
      ['Scatter Plot', 'Area Chart', 'Line', 'Forecasting'].includes(newConfig.visualizationType) &&
      !convertLineToBarGraph
    ) {
      newConfig.runtime.xAxis = { ...newConfig.xAxis, label: runtimeXAxisLabel ?? newConfig.xAxis.label }
      newConfig.runtime.yAxis = { ...newConfig.yAxis, label: runtimeYAxisLabel ?? newConfig.yAxis.label }
      newConfig.runtime.horizontal = false
      newConfig.orientation = 'vertical'
    } else {
      newConfig.runtime.xAxis = { ...newConfig.xAxis, label: runtimeXAxisLabel ?? newConfig.xAxis.label }
      newConfig.runtime.yAxis = { ...newConfig.yAxis, label: runtimeYAxisLabel ?? newConfig.yAxis.label }
      newConfig.runtime.horizontal = false
    }

    newConfig.runtime.uniqueId = Date.now()

    // Set error messages: preserve external errors (from pattern settings, etc.) or set validation errors
    if (shouldPreserveError) {
      // Preserve error messages set by editor panels (e.g., pattern contrast errors)
      newConfig.runtime.editorErrorMessage = existingErrorMessage
    } else if (newConfig.visualizationType === 'Pie') {
      // Check for Pie chart validation errors
      const missingDataColumn = !newConfig.yAxis.dataKey || newConfig.yAxis.dataKey === ''
      const missingSegmentLabels = !newConfig.xAxis.dataKey || newConfig.xAxis.dataKey === ''

      if (missingDataColumn && missingSegmentLabels) {
        newConfig.runtime.editorErrorMessage = 'Data column and Segment labels sections must be set for pie charts.'
      } else if (missingDataColumn) {
        newConfig.runtime.editorErrorMessage = 'Data column section must be set for pie charts.'
      } else if (missingSegmentLabels) {
        newConfig.runtime.editorErrorMessage = 'Segment labels section must be set for pie charts.'
      } else {
        newConfig.runtime.editorErrorMessage = ''
      }
    } else {
      // No errors
      newConfig.runtime.editorErrorMessage = ''
    }

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

    if (config.filterBehavior === 'Filter Change' || config.filterBehavior === 'Apply Button') {
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

      const editorIsOpen = isEditor && !!document.querySelector('.editor-panel:not(.hidden)')
      width = editorIsOpen ? width - EDITOR_WIDTH : width

      const newViewport = getViewport(width)

      dispatch({ type: 'SET_VIEWPORT', payload: newViewport })
      dispatch({ type: 'SET_VIZ_VIEWPORT', payload: newViewport })

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
        let newData = await fetchRemoteData(newConfig.dataUrl)

        if (newConfig.vegaConfig) {
          newData = extractCoveData(updateVegaData(newConfig.vegaConfig, newData))
        }

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
        // For dashboard contexts, prioritize data from config (dashboard-filtered data)
        // Only fall back to datasets if no data is present
        let dataToProcess = newConfig.data
        if (!dataToProcess && isDashboard && datasets && newConfig.dataKey) {
          dataToProcess = datasets[newConfig.dataKey]?.data
        }

        if (dataToProcess) {
          newConfig.data = transform.autoStandardize(dataToProcess)
          newConfig.data = transform.developerStandardize(newConfig.data, newConfig.dataDescription)
        }
      } else if (isDashboard && newConfig.data) {
        // Dashboard case where data is already set (filtered data from dashboard context)
        // This ensures dashboard-filtered data is used even without dataDescription
        // The data doesn't need transformation because it's already been processed
      }
    } catch (err) {
      console.error('Error on prepareData function ', err)
    }
    return newConfig
  }

  // Create a stable data change key to detect when data actually changes
  // This prevents unnecessary re-renders while ensuring we catch filter changes
  const dataChangeKey = useMemo(() => {
    // Priority order for data sources:
    // 1. configObj.data - Contains dashboard-filtered data from multi-viz API filters
    // 2. datasets[dataKey] - Fallback for dashboard context when no filtered data exists
    // Using configObj.data when available ensures multi-viz API filters work correctly
    const sourceData = configObj?.data
      ? configObj.data
      : isDashboard && datasets && configObj?.dataKey
      ? datasets[configObj.dataKey]?.data
      : undefined

    if (!sourceData) return 'no-data'

    const len = sourceData.length
    if (len === 0) return 'empty'

    // Include viz-level filters (active values important for tab switching)
    const filtersKey = configObj?.filters
      ? JSON.stringify(configObj.filters.map(f => ({ id: f.id, columnName: f.columnName, active: f.active })))
      : ''

    // Include dashboard-level filters (added by dashboard when multi-viz filters are active)
    const dashboardFiltersKey = (configObj as any)?.dashboardFilters
      ? JSON.stringify((configObj as any).dashboardFilters.map(f => ({ columnName: f.columnName, active: f.active })))
      : ''

    // For small datasets (<=10 rows), create a hash of the entire dataset
    if (len <= 10) {
      try {
        return `${filtersKey}-${dashboardFiltersKey}-${len}-${JSON.stringify(sourceData)}`
      } catch {
        // Fallback if data isn't serializable
        return `${filtersKey}-${dashboardFiltersKey}-${len}-${Date.now()}`
      }
    }

    // For larger datasets, sample first, middle, and last rows to detect changes
    // This is more efficient than hashing the entire dataset
    try {
      const sample = [sourceData[0], sourceData[Math.floor(len / 2)], sourceData[len - 1]]
      return `${filtersKey}-${dashboardFiltersKey}-${len}-${JSON.stringify(sample)}`
    } catch {
      // Fallback if data isn't serializable
      return `${filtersKey}-${dashboardFiltersKey}-${len}-${Date.now()}`
    }
  }, [
    configObj?.data,
    configObj?.filters,
    configObj?.dataKey,
    (configObj as any)?.dashboardFilters,
    isDashboard,
    datasets
  ])

  useEffect(() => {
    const load = async () => {
      try {
        if (configObj) {
          const preparedConfig = await prepareConfig(configObj)
          const preppedData = await prepareData(preparedConfig)

          if (preparedConfig?.formattedData?.length) {
            preppedData.data = preparedConfig.formattedData
          }

          dispatch({ type: 'SET_STATE_DATA', payload: preppedData.data })
          dispatch({ type: 'SET_EXCLUDED_DATA', payload: preppedData.data })
          updateConfig(preparedConfig, preppedData.data)
        }
      } catch (err) {
        console.error('Could not Load!')
      }
    }

    load()
  }, [dataChangeKey])

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

  // Updates runtime axis labels when config or data changes when using markup variables
  useEffect(() => {
    if (
      !config?.runtime ||
      _.isEmpty(config.runtime) ||
      (!config.runtime.xAxis && !config.runtime.yAxis) ||
      !config.markupVariables?.length
    ) {
      return
    }

    const dataSource = (stateData && stateData.length ? stateData : config.data) || []
    const { runtimeXAxisLabel, runtimeYAxisLabel, isHorizontalVariant } = getProcessedAxisLabels(config, dataSource)

    const runtimeClone = _.cloneDeep(config.runtime)

    if (!runtimeClone?.xAxis || !runtimeClone?.yAxis) {
      return
    }

    let shouldUpdateLabels = false

    if (typeof runtimeXAxisLabel !== 'undefined' && runtimeClone.xAxis.label !== runtimeXAxisLabel) {
      runtimeClone.xAxis = { ...runtimeClone.xAxis, label: runtimeXAxisLabel }
      shouldUpdateLabels = true
    }

    if (typeof runtimeYAxisLabel !== 'undefined' && runtimeClone.yAxis.label !== runtimeYAxisLabel) {
      runtimeClone.yAxis = { ...runtimeClone.yAxis, label: runtimeYAxisLabel }
      shouldUpdateLabels = true
    }

    if (shouldUpdateLabels) {
      runtimeClone.uniqueId = Date.now()
      const updatedConfig = { ...config, runtime: runtimeClone } as ChartConfig
      dispatch({ type: 'SET_CONFIG', payload: updatedConfig })

      if (isEditor && !isDashboard) {
        editorContext.setTempConfig(updatedConfig)
      }
    }
  }, [config, stateData, getProcessedAxisLabels, dispatch, editorContext, isEditor, isDashboard])

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = (label: Label): void => {
    if (
      seriesHighlight.length + 1 === config.runtime.seriesKeys.length &&
      config.visualizationType !== 'Forecasting' &&
      !seriesHighlight.includes(label.datum)
    ) {
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
    publishAnalyticsEvent({
      vizType: config?.type,
      vizSubType: getVizSubType(config),
      eventType: 'chart_legend_reset',
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config),
      ...(config.visualizationType === 'Bar' && {
        specifics: `orientation: ${config.orientation === 'horizontal' ? 'horizontal' : 'vertical'}`
      })
    })
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
        preserveOriginalDecimals
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

      // If preserveOriginalDecimals is enabled, don't force decimal places
      if (preserveOriginalDecimals) {
        stringFormattingOptions = {
          useGrouping: addColRoundTo ? true : config.dataFormat.commas ? true : false
        }
      } else {
        stringFormattingOptions = {
          useGrouping: addColRoundTo ? true : config.dataFormat.commas ? true : false,
          minimumFractionDigits: roundToPlace,
          maximumFractionDigits: roundToPlace
        }
      }
    }

    if (axis === 'right') {
      if (preserveOriginalDecimals) {
        stringFormattingOptions = {
          useGrouping: config.dataFormat.rightCommas ? true : false
        }
      } else {
        stringFormattingOptions = {
          useGrouping: config.dataFormat.rightCommas ? true : false,
          minimumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0,
          maximumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0
        }
      }
    }

    const resolveBottomTickRounding = () => {
      if (config.forestPlot?.type === 'Logarithmic' && !bottomRoundTo) return 2
      if (Number(bottomRoundTo)) return Number(bottomRoundTo)
      return 0
    }

    if (axis === 'bottom') {
      if (preserveOriginalDecimals) {
        stringFormattingOptions = {
          useGrouping: config.dataFormat.bottomCommas ? true : false
        }
      } else {
        stringFormattingOptions = {
          useGrouping: config.dataFormat.bottomCommas ? true : false,
          minimumFractionDigits: resolveBottomTickRounding(),
          maximumFractionDigits: resolveBottomTickRounding()
        }
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
      if (prefix && axis === 'left') {
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
      if (suffix && axis === 'left') {
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
    if (config.visualizationType === 'Pie' && !config.dataFormat?.showPiePercent) {
      return getPiePercent(data, config?.yAxis?.dataKey)
    }

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
    const tableConfig: TableConfig = cloneConfig(config)
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
    if (config.xAxis.brushActive && dashboardConfig?.type === 'dashboard' && (!isLegendOnBottom || legend.hide))
      classes.push('dashboard-brush')
    classes.push(...contentClasses)
    return classes
  }

  const getChartSubTextClasses = () => {
    const classes = ['subtext mt-4']
    const isLegendOnBottom = legend?.position === 'bottom' || isLegendWrapViewport(currentViewport)

    if (config.isResponsiveTicks) classes.push('subtext--responsive-ticks ')
    if (config.xAxis.brushActive && !isLegendOnBottom) classes.push('subtext--brush-active ')
    if (config.xAxis.brushActive && config.legend.hide) classes.push('subtext--brush-active ')
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
                superTitle={processedSuperTitle}
                classes={['chart-title', `${config.theme}`, 'cove-component__header', 'mb-3']}
                style={undefined}
                config={config}
              />

              {/* Error Message Display - Show at top before visualization wrapper */}
              {/* {(() => {
                const errorMessage = config.runtime?.editorErrorMessage
                const hasError = errorMessage && typeof errorMessage === 'string' && errorMessage.trim() !== ''
                const shouldShow = undefined === config.newViz && isEditor && config.runtime && hasError
                return shouldShow ? <Error errorMessage={errorMessage} /> : null
              })()} */}

              {/* Visualization Wrapper */}
              <div className={getChartWrapperClasses().join(' ')}>
                {/* Intro Text/Message */}
                {processedIntroText && config.visualizationType !== 'Spark Line' && (
                  <section className={`introText mb-4`}>{parse(processedIntroText)}</section>
                )}

                {/* Filters */}
                {config.filters && !externalFilters && config.visualizationType !== 'Spark Line' && (
                  <Filters
                    config={config}
                    setFilters={setFilters}
                    excludedData={excludedData}
                    dimensions={dimensions}
                    interactionLabel={interactionLabel}
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
                    {/* Check if there is data to display */}
                    {(!filteredData || filteredData.length === 0) && (
                      <div className='no-data-message' style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                        {config.chartMessage?.noData || 'No Data Available'}
                      </div>
                    )}

                    {/* All charts with LinearChart */}
                    {filteredData &&
                      filteredData.length > 0 &&
                      !['Spark Line', 'Line', 'Sankey', 'Pie', 'Sankey'].includes(config.visualizationType) && (
                        <div ref={parentRef} style={{ width: `100%` }}>
                          <ParentSize>
                            {parent => (
                              <LinearChart ref={svgRef} parentWidth={parent.width} parentHeight={parent.height} />
                            )}
                          </ParentSize>
                        </div>
                      )}

                    {filteredData && filteredData.length > 0 && config.visualizationType === 'Pie' && (
                      <ParentSize className='justify-content-center d-flex' style={{ width: `100%` }}>
                        {parent => (
                          <PieChart
                            ref={svgRef}
                            parentWidth={parent.width}
                            parentHeight={parent.height}
                            interactionLabel={interactionLabel}
                          />
                        )}
                      </ParentSize>
                    )}
                    {/* Line Chart */}
                    {filteredData &&
                      filteredData.length > 0 &&
                      config.visualizationType === 'Line' &&
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
                          interactionLabel={interactionLabel}
                        />
                        {processedIntroText && (
                          <section className='introText mb-4' style={{ padding: '0px 0 35px' }}>
                            {parse(processedIntroText)}
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
                      <Legend
                        ref={legendRef}
                        skipId={handleChartTabbing(config, legendId)}
                        interactionLabel={interactionLabel}
                      />
                    )}
                </LegendWrapper>
                {/* Link */}
                {isDashboard && config.table && config.table.show && config.table.showDataTableLink
                  ? tableLink
                  : link && link}
                {/* Description */}

                {processedDescription && config.visualizationType !== 'Spark Line' && (
                  <div className={getChartSubTextClasses().join(' ')}>{parse(processedDescription)}</div>
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
                      interactionLabel={interactionLabel}
                    />
                  )}
                  {config.table.showDownloadPdfButton && (
                    <MediaControls.Button
                      text='Download PDF'
                      title='Download Chart as PDF'
                      type='pdf'
                      state={config}
                      elementToCapture={imageId}
                      interactionLabel={interactionLabel}
                    />
                  )}
                </MediaControls.Section>
                {/* Data Table */}
                {((config.xAxis.dataKey &&
                  config.table.show &&
                  config.visualizationType !== 'Spark Line' &&
                  config.visualizationType !== 'Sankey') ||
                  (config.visualizationType === 'Sankey' && config.table.show)) &&
                  (() => {
                    let dataTableConfig = pivotDynamicSeries(config)
                    let dataTableColumns = config.columns
                    let dataTableRuntimeData = getTableRuntimeData()
                    let dataTableRawData =
                      config.visualizationType === 'Sankey'
                        ? config?.data?.[0]?.tableData
                        : config.table.customTableConfig
                        ? filterVizData(config.filters, config.data)
                        : config.data

                    if (config.smallMultiples?.mode) {
                      const prepared = prepareSmallMultiplesDataTable(config, config.columns, dataTableRuntimeData)
                      dataTableConfig = prepared.config
                      dataTableColumns = prepared.columns
                      dataTableRuntimeData = prepared.runtimeData
                      if (config.smallMultiples.mode === 'by-column') {
                        dataTableRawData = prepared.config.data
                      }
                    }

                    return (
                      <DataTable
                        /* changing the "key" will force the table to re-render
                                    when the default sort changes while editing */
                        key={dataTableDefaultSortBy}
                        config={dataTableConfig}
                        rawData={dataTableRawData}
                        runtimeData={dataTableRuntimeData}
                        expandDataTable={config.table.expanded}
                        columns={dataTableColumns}
                        defaultSortBy={dataTableDefaultSortBy}
                        displayGeoName={name => name}
                        applyLegendToRow={applyLegendToRow}
                        tableTitle={config.table.label}
                        indexTitle={config.table.indexLabel}
                        vizTitle={title}
                        viewport={currentViewport}
                        tabbingId={handleChartTabbing(config, legendId)}
                        colorScale={colorScale}
                        interactionLabel={interactionLabel}
                      />
                    )
                  })()}
                {config?.annotations?.length > 0 && <Annotation.Dropdown />}
                {/* show pdf or image button */}
                {processedLegacyFootnotes && (
                  <section className='footnotes pt-2 mt-4'>{parse(processedLegacyFootnotes)}</section>
                )}
              </div>
              <FootnotesStandAlone
                config={configObj.footnotes}
                filters={config.filters?.filter(f => f.filterFootnotes)}
                markupVariables={config.markupVariables}
                enableMarkupVariables={config.enableMarkupVariables}
                data={config.data}
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

  // Get version-specific color palettes based on current config
  const colorPalettes = filterChartColorPalettes(config)

  const contextValues = {
    ...state,
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
    interactionLabel,
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
    rawData: stateData ?? {},
    setConfig,
    setEditing,
    setParentConfig,
    setSharedFilter,
    setSharedFilterValue,
    svgRef,
    tableData: filteredData || excludedData,
    transformedData: getTransformedData({ brushData: state.brushData, filteredData, excludedData, clean }),
    twoColorPalette,
    unfilteredData: stateData,
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
