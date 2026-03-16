import React, { useState, useEffect, useCallback, useRef, useId, useContext, useReducer, useMemo } from 'react'

// IE11
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'
// Core components
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { VisualizationContainer, VisualizationContent } from '@cdc/core/components/Layout'
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
import { timeParse } from 'd3-time-format'
import parse from 'html-react-parser'
import cloneDeep from 'lodash/cloneDeep'
import defaultsDeep from 'lodash/defaultsDeep'
import lodashDefaults from 'lodash/defaults'
import findKey from 'lodash/findKey'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import isString from 'lodash/isString'
import kebabCase from 'lodash/kebabCase'
import pick from 'lodash/pick'
import remove from 'lodash/remove'
import set from 'lodash/set'
import uniq from 'lodash/uniq'
import xor from 'lodash/xor'
// Primary Components
import ConfigContext, { ChartDispatchContext } from './ConfigContext'
import PieChart from './components/PieChart'
import RadarChart from './components/RadarChart'
import SankeyChart from './components/Sankey'
import LinearChart from './components/LinearChart'
import { isDateScale, formatDate as coreFormatDate } from '@cdc/core/helpers/cove/date'

import { twoColorPalette } from '@cdc/core/data/colorPalettes'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'

import SparkLine from './components/Sparkline'
import Legend from './components/Legend'
import WarmingStripesGradientLegend from './components/WarmingStripes/WarmingStripesGradientLegend'
import defaults from './data/initial-state'
import { LEGACY_CHART_DEFAULTS } from './data/legacy-defaults'
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
import { getVisibleAnnotations } from './components/Annotations/helpers/getVisibleAnnotations'
// Core Helpers
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { backfillDefaults } from '@cdc/core/helpers/backfillDefaults'
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
import { ENABLE_CHART_MAP_TP5_TREATMENT, ENABLE_CHART_VISUAL_SETTINGS } from '@cdc/core/helpers/constants'
import CalloutFlag from '@cdc/core/assets/callout-flag.svg?url'

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
    colorScale,
    brushData
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

    const markupOptions = {
      isEditor,
      filters: config.filters || [],
      locale: config.locale,
      dataMetadata: config.dataMetadata
    }

    return {
      title: title
        ? processMarkupVariables(title, config.data || [], config.markupVariables, markupOptions).processedContent
        : title,
      superTitle: config.superTitle
        ? processMarkupVariables(config.superTitle, config.data || [], config.markupVariables, markupOptions)
            .processedContent
        : config.superTitle,
      introText: config.introText
        ? processMarkupVariables(config.introText, config.data || [], config.markupVariables, markupOptions)
            .processedContent
        : config.introText,
      legacyFootnotes: config.legacyFootnotes
        ? processMarkupVariables(config.legacyFootnotes, config.data || [], config.markupVariables, markupOptions)
            .processedContent
        : config.legacyFootnotes,
      description: config.description
        ? processMarkupVariables(config.description, config.data || [], config.markupVariables, markupOptions)
            .processedContent
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

  const convertLineToBarGraph = isConvertLineToBarGraph(config, filteredData)

  // Declaratively calculate series keys for pie charts based on filtered data
  const pieSeriesKeys = useMemo(() => {
    if (config.visualizationType !== 'Pie' || !config.xAxis?.dataKey) return null
    const data = filteredData?.length > 0 ? filteredData : excludedData
    if (!data) return null
    return uniq(data.map(d => d[config.xAxis.dataKey]))
  }, [config.visualizationType, config.xAxis?.dataKey, filteredData, excludedData])

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

    // Override palette defaults for Line charts specifically
    if (loadedConfig?.visualizationType === 'Line' && !loadedConfig?.general?.palette) {
      if (!defaultsWithoutPalette.general) {
        defaultsWithoutPalette.general = {}
      }
      defaultsWithoutPalette.general.palette = {
        isReversed: false,
        version: '2.0',
        name: 'divergent_blue_cyan'
      }
    }

    // Override palette defaults for Horizon Chart specifically
    if (loadedConfig?.visualizationType === 'Horizon Chart' && !loadedConfig?.general?.palette) {
      if (!defaultsWithoutPalette.general) {
        defaultsWithoutPalette.general = {}
      }
      defaultsWithoutPalette.general.palette = {
        isReversed: false,
        version: '2.0',
        name: 'sequential_blue'
      }
    }

    let newConfig = { ...defaultsWithoutPalette, ...loadedConfig }

    // Ensure Horizon Chart has enough palette colors for all layers
    if (newConfig.visualizationType === 'Horizon Chart') {
      const numLayers = newConfig.horizon?.numLayers ?? 4
      const currentCount = get(newConfig, 'general.paletteColorCount', 4)
      set(newConfig, 'general.paletteColorCount', Math.max(currentCount, numLayers))
    }

    defaultsDeep(newConfig, {
      table: { showVertical: false }
    })

    set(newConfig, 'table.show', get(newConfig, 'table.show', !isDashboard))

    forEach(newConfig.series, series => {
      lodashDefaults(series, {
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
        const axisMarkupOptions = {
          isEditor,
          filters: targetConfig.filters || [],
          locale: targetConfig.locale,
          dataMetadata: targetConfig.dataMetadata
        }
        if (targetConfig.xAxis?.label) {
          processedXAxis = processMarkupVariables(
            targetConfig.xAxis.label,
            dataSource || [],
            targetConfig.markupVariables,
            axisMarkupOptions
          ).processedContent
        }
        if (targetConfig.yAxis?.label) {
          processedYAxis = processMarkupVariables(
            targetConfig.yAxis.label,
            dataSource || [],
            targetConfig.markupVariables,
            axisMarkupOptions
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

    // Backfill missing properties from defaults, respecting legacy values
    backfillDefaults(newConfig, defaults, LEGACY_CHART_DEFAULTS)

    // Auto-populate table.defaultSort for date-axis charts if not already set by user
    const hasDateAxisType = ['date-time', 'date'].includes(newConfig.xAxis?.type)
    if (hasDateAxisType && newConfig.xAxis?.dataKey && !newConfig.table?.defaultSort?.column) {
      newConfig.table = {
        ...newConfig.table,
        defaultSort: { column: newConfig.xAxis.dataKey, sortDirection: 'desc' }
      }
    }

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
    newConfig.runtime.series = cloneDeep(newConfig.series)
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      // Use the same data that will be passed to PieChart (after exclusions and filters)
      const pieData = currentData.length > 0 ? currentData : newExcludedData
      newConfig.runtime.seriesKeys = uniq(pieData.map(d => d[newConfig.xAxis.dataKey]))
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
      newConfig.runtime.isPieChart = true // Flag to know when to use derived keys
    } else if (newConfig.visualizationType === 'Radar') {
      // Radar chart: seriesKeys are the entity names from xAxis.dataKey
      const radarData = currentData.length > 0 ? currentData : newExcludedData
      newConfig.runtime.seriesKeys = uniq(radarData.map(d => d[newConfig.xAxis.dataKey]))
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
    } else {
      const finalData = dataOverride || newConfig.formattedData || newConfig.data
      newConfig.runtime.seriesKeys = (newConfig.runtime.series || []).flatMap(series => {
        if (series.dynamicCategory) {
          remove(newConfig.runtime.seriesLabelsAll, label => label === series.dataKey)
          remove(newConfig.runtime.series, s => s.dataKey === series.dataKey)
          // grab the dynamic series keys from the data
          const seriesKeys: string[] = uniq(finalData.map(d => d[series.dynamicCategory]))
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

    if (newConfig.visualizationType === 'Horizon Chart' && newConfig.series) {
      // Apply horizon defaults if not set
      newConfig.horizon = {
        numLayers: 4,
        mode: 'offset', // Always offset for now, mirror hidden from UI
        bandGap: 15,
        bottomPadding: 15,
        ...newConfig.horizon
      }

      // Set categorical as default xAxis type for horizon charts if not already set
      if (!newConfig.xAxis.type) {
        newConfig.xAxis.type = 'categorical'
      }
    }

    if (isHorizontalVariant) {
      // For horizontal charts, axes are swapped, so processedYAxis goes to runtime.xAxis and vice versa
      const horizontalXAxisSource = cloneDeep((newConfig.yAxis as any)?.yAxis || newConfig.yAxis)
      const horizontalYAxisSource = cloneDeep((newConfig.xAxis as any)?.xAxis || newConfig.xAxis)
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

      const editorIsOpen = isEditor
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
        let { data: newData, dataMetadata } = await fetchRemoteData(newConfig.dataUrl)
        newConfig.dataMetadata = dataMetadata

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
      } else if (newConfig.formattedData && Array.isArray(newConfig.formattedData)) {
        newConfig.data = newConfig.formattedData
      } else if (newConfig.dataDescription) {
        // For dashboard contexts, get data from datasets if config.data is undefined
        let dataToProcess = newConfig.data
        if (!dataToProcess && isDashboard && datasets && newConfig.dataKey) {
          dataToProcess = datasets[newConfig.dataKey]?.data
        }

        if (dataToProcess) {
          newConfig.data = transform.autoStandardize(dataToProcess)
          newConfig.data = transform.developerStandardize(newConfig.data, newConfig.dataDescription)
        }
      }
    } catch (err) {
      console.error('Error on prepareData function ', err)
    }
    return newConfig
  }

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
        console.error('Could not Load!', err)
      }
    }

    load()
  }, [configObj?.data?.length ? configObj.data : null])

  /**
   * When cove has a config and container ref publish the cove_loaded event.
   */
  useEffect(() => {
    if (container && !isLoading && !isEmpty(config) && !coveLoadedEventRan) {
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

  // Declaratively update runtime series keys for pie charts when derived value changes
  if (config.runtime?.isPieChart && pieSeriesKeys && !isEqual(pieSeriesKeys, config.runtime?.seriesKeys)) {
    const newConfig = {
      ...config,
      runtime: {
        ...config.runtime,
        seriesKeys: pieSeriesKeys,
        seriesLabelsAll: pieSeriesKeys
      }
    }
    setConfig(newConfig)
  }

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

  // Clear brush selection when brush slider is disabled
  useEffect(() => {
    const isBrushDisabled = !config?.xAxis?.brushActive
    const hasBrushData = Array.isArray(brushData) && brushData.length > 0

    if (isBrushDisabled && hasBrushData) {
      dispatch({ type: 'SET_BRUSH_DATA', payload: [] })
    }
  }, [config?.xAxis?.brushActive, brushData])

  // Updates runtime axis labels when config or data changes when using markup variables
  useEffect(() => {
    if (
      !config?.runtime ||
      isEmpty(config.runtime) ||
      (!config.runtime.xAxis && !config.runtime.yAxis) ||
      !config.markupVariables?.length
    ) {
      return
    }

    const dataSource = (stateData && stateData.length ? stateData : config.data) || []
    const { runtimeXAxisLabel, runtimeYAxisLabel, isHorizontalVariant } = getProcessedAxisLabels(config, dataSource)

    const runtimeClone = cloneDeep(config.runtime)

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

    const newHighlight = findKey(config.runtime.seriesLabels, v => v === label.datum) || label.datum

    const newSeriesHighlight = xor(seriesHighlight, [newHighlight])
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
    const displayFormat =
      config.runtime[section].dateDisplayFormat || config.runtime[section].dateParseFormat || '%Y-%m-%d'
    let formattedDate = coreFormatDate(displayFormat, date, config.locale)
    // Show years only once
    if (config.xAxis.showYearsOnce && displayFormat?.includes('%Y') && ticks) {
      const prevDate = ticks[i - 1] ? ticks[i - 1].value : null
      const prevFormattedDate = coreFormatDate(displayFormat, prevDate, config.locale)
      const year = formattedDate.match(/\d{4}/)
      const prevYear = prevFormattedDate.match(/\d{4}/)
      if (year && prevYear && year[0] === prevYear[0]) {
        formattedDate = formattedDate.replace(year, '')
      }
    }
    return formattedDate
  }

  const formatTooltipsDate = date => {
    return coreFormatDate(config.tooltips.dateDisplayFormat, date, config.locale)
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
      num = num.toLocaleString(config.locale, stringFormattingOptions)
    }
    let result = ''

    if (abbreviated && axis === 'left' && shouldAbbreviate) {
      num = abbreviateNumber(parseFloat(num), config.locale)
    }

    if (bottomAbbreviated && axis === 'bottom' && shouldAbbreviate) {
      num = abbreviateNumber(parseFloat(num), config.locale)
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
    const CIkeys: string[] = Object.values(get(config, 'confidenceKeys', {})) as string[]
    const seriesKeys: string[] = get(config, 'series', []).map((s: any) => s.dataKey)
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
    return data.map(d => pick(d, usedColumns))
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

  // Transform and clean data for chart rendering
  const transformedData = getTransformedData({ brushData: state.brushData, filteredData, excludedData, clean })

  // Filter annotations to only those visible in current data view
  const visibleAnnotations = getVisibleAnnotations(config.annotations, transformedData, config.xAxis?.dataKey)
  const isTp5Treatment = ENABLE_CHART_MAP_TP5_TREATMENT && config.visual?.tp5Treatment
  const visualSettingClasses = new Set([
    'component--has-border-color-theme',
    'component--has-accent',
    'component--has-background',
    'component--hide-background-color'
  ])
  const tp5Classes = new Set(['component--tp5-treatment', 'component--tp5-treatment-background'])
  const bodyClasses = contentClasses.filter(className => {
    if (!ENABLE_CHART_VISUAL_SETTINGS && visualSettingClasses.has(className)) return false
    if (!ENABLE_CHART_MAP_TP5_TREATMENT && tp5Classes.has(className)) return false
    return true
  })
  if (isTp5Treatment && !bodyClasses.includes('no-borders')) bodyClasses.push('no-borders')
  const chartTitle = (
    <Title
      showTitle={config.showTitle}
      isDashboard={isDashboard}
      title={title}
      superTitle={processedSuperTitle}
      titleStyle={isTp5Treatment ? 'small' : config.titleStyle}
      classes={['chart-title', `${config.theme}`, 'cove-visualization__title', isTp5Treatment ? '' : 'mb-3']}
      style={undefined}
      config={config}
    />
  )

  // Prevent render if loading
  let body = <Loading />

  const makeClassName = string => {
    if (!isString(string)) return undefined

    return kebabCase(string)
  }
  const getChartWrapperClasses = () => {
    const isLegendOnBottom = legend?.position === 'bottom' || isLegendWrapViewport(currentViewport)
    const classes = ['chart-container', 'p-relative']
    const visualSettingClasses = ['component--has-border-color-theme', 'component--has-accent']
    if (legend?.position) {
      if (isLegendWrapViewport(currentViewport) && legend?.position !== 'top') {
        classes.push('legend-bottom')
      } else {
        classes.push(`legend-${legend.position}`)
      }
    }
    if (legend?.hide) classes.push('legend-hidden')
    if (contentClasses.includes('sparkline')) classes.push('sparkline')
    if (lineDatapointClass) classes.push(lineDatapointClass)
    if (!config.barHasBorder) classes.push('chart-bar--no-border')
    if (config.xAxis.brushActive && dashboardConfig?.type === 'dashboard' && (!isLegendOnBottom || legend.hide))
      classes.push('dashboard-brush')

    if (!ENABLE_CHART_VISUAL_SETTINGS) {
      const filtered = classes.filter(className => !visualSettingClasses.includes(className))
      if (!filtered.includes('no-borders')) filtered.push('no-borders')
      return filtered
    }

    return classes
  }

  const getChartSubTextClasses = () => {
    const classes = ['subtext mt-4']
    const isLegendOnBottom = legend?.position === 'bottom' || isLegendWrapViewport(currentViewport)

    if (config.isResponsiveTicks) classes.push('subtext--responsive-ticks ')
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
        {config.newViz && <Confirm updateConfig={updateConfig} config={config} />}
        {!missingRequiredSections(config) && !config.newViz && (
          <VisualizationContent
            innerClassName={`type-${makeClassName(config.visualizationType)}`}
            innerProps={{ 'aria-label': handleChartAriaLabels(config), tabIndex: 0 }}
            bodyClassName={bodyClasses.join(' ')}
            bodyWrapClassName={isTp5Treatment ? 'cdc-callout d-flex flex-column tp5-chart-callout' : ''}
            header={isTp5Treatment ? null : chartTitle}
            footer={
              <FootnotesStandAlone
                config={configObj.footnotes}
                filters={config.filters?.filter(f => f.filterFootnotes)}
                markupVariables={config.markupVariables}
                enableMarkupVariables={config.enableMarkupVariables}
                data={config.data}
                dataMetadata={config.dataMetadata}
              />
            }
          >
            {isTp5Treatment && (
              <img
                src={CalloutFlag}
                alt=''
                className='cdc-callout__flag'
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  top: '-0.36rem',
                  right: '1.08rem',
                  width: '1.84rem',
                  height: 'auto'
                }}
              />
            )}
            {isTp5Treatment && chartTitle}

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
            {visibleAnnotations.length > 0 && (
              <SkipTo
                skipId={handleChartTabbing(config, legendId)}
                skipMessage={`Skip over annotations`}
                key={`skip-annotations`}
              />
            )}
            <div className={getChartWrapperClasses().join(' ')}>
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
                    !['Spark Line', 'Line', 'Sankey', 'Pie', 'Radar'].includes(config.visualizationType) && (
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
                  {/* Radar Chart */}
                  {filteredData && filteredData.length > 0 && config.visualizationType === 'Radar' && (
                    <ParentSize className='justify-content-center d-flex' style={{ width: `100%` }}>
                      {parent => (
                        <RadarChart
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
                              config.showLineSeriesLabels && (config.legend.position !== 'right' || config.legend.hide)
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
                      {processedDescription && (
                        <div className='subtext' style={{ padding: '35px 0 15px' }}>
                          {parse(processedDescription)}
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
                  config.visualizationType !== 'Sankey' &&
                  !(config.visualizationType === 'Warming Stripes' && config.legend?.style === 'gradient') &&
                  !(config.visualizationType === 'Warming Stripes' && config.smallMultiples?.mode) && (
                    <Legend
                      ref={legendRef}
                      skipId={handleChartTabbing(config, legendId)}
                      interactionLabel={interactionLabel}
                    />
                  )}
                {config.visualizationType === 'Warming Stripes' &&
                  config.legend?.style === 'gradient' &&
                  !config.smallMultiples?.mode && <WarmingStripesGradientLegend />}
              </LegendWrapper>
            </div>
            {/* Link */}
            {isDashboard && config.table && config.table.show && config.table.showDataTableLink
              ? tableLink
              : link && link}
            {/* Description */}

            {processedDescription && config.visualizationType !== 'Spark Line' && (
              <div className={getChartSubTextClasses().join(' ')}>{parse(processedDescription)}</div>
            )}

            {/* Data Table */}
            {(config.xAxis.dataKey &&
              config.table.show &&
              config.visualizationType !== 'Spark Line' &&
              config.visualizationType !== 'Sankey') ||
            (config.visualizationType === 'Sankey' && config.table.show)
              ? (() => {
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
                      key={config.table?.defaultSort?.column || ''}
                      config={dataTableConfig}
                      rawData={dataTableRawData}
                      runtimeData={dataTableRuntimeData}
                      expandDataTable={config.table.expanded}
                      columns={dataTableColumns}
                      displayGeoName={name => name}
                      applyLegendToRow={applyLegendToRow}
                      tableTitle={config.table.label}
                      indexTitle={config.table.indexLabel}
                      vizTitle={title}
                      viewport={currentViewport}
                      tabbingId={handleChartTabbing(config, legendId)}
                      colorScale={colorScale}
                      imageRef={imageId}
                      showDownloadImgButton={config.table.showDownloadImgButton}
                      showDownloadPdfButton={config.table.showDownloadPdfButton}
                      includeContextInDownload={config.table?.includeContextInDownload}
                      interactionLabel={interactionLabel}
                    />
                  )
                })()
              : (config.table.showDownloadImgButton || config.table.showDownloadPdfButton) && (
                  <div className='w-100 d-flex justify-content-end'>
                    <MediaControls.Section classes={['download-links', 'mt-4', 'mb-2']}>
                      {config.table.showDownloadImgButton && (
                        <MediaControls.DownloadLink
                          type='image'
                          title='Download Chart as Image'
                          state={config}
                          elementToCapture={imageId}
                          interactionLabel={interactionLabel}
                          includeContextInDownload={config.table?.includeContextInDownload}
                        />
                      )}
                      {config.table.showDownloadPdfButton && (
                        <MediaControls.DownloadLink
                          type='pdf'
                          title='Download Chart as PDF'
                          state={config}
                          elementToCapture={imageId}
                          interactionLabel={interactionLabel}
                          includeContextInDownload={config.table?.includeContextInDownload}
                        />
                      )}
                    </MediaControls.Section>
                  </div>
                )}
            {visibleAnnotations.length > 0 && <Annotation.Dropdown />}
            {/* show pdf or image button */}
            {processedLegacyFootnotes && (
              <section className='footnotes pt-2 mt-4'>{parse(processedLegacyFootnotes)}</section>
            )}
          </VisualizationContent>
        )}
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
    transformedData,
    twoColorPalette,
    unfilteredData: stateData,
    updateConfig,
    visibleAnnotations
  }

  return (
    <ConfigContext.Provider value={contextValues}>
      <ChartDispatchContext.Provider value={dispatch}>
        <VisualizationContainer
          config={config}
          isEditor={isEditor}
          currentViewport={currentViewport}
          ref={outerContainerRef}
          imageId={imageId}
          editorPanel={!isLoading ? <EditorPanel datasets={datasets} /> : null}
        >
          {body}
        </VisualizationContainer>
      </ChartDispatchContext.Provider>
    </ConfigContext.Provider>
  )
}

export default CdcChart
