import { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import { getAutoDetectedDateParseFormat, isDateScale } from '@cdc/core/helpers/cove/date'
import { Accordion } from 'react-accessible-accordion'

// @cdc/core
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ModernStylesAction from '@cdc/core/components/EditorPanel/ModernStylesAction'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'

// chart components
import Panels from './components/Panels'
import PaletteConversionModal, { V21_PALETTE_CONVERSION_MESSAGE } from '@cdc/core/components/PaletteConversionModal'

// cdc additional
import { useEditorPermissions } from './useEditorPermissions'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import ConfigContext from '../../ConfigContext'
import useReduceData from '../../hooks/useReduceData'
import getMinMax from '../../helpers/getMinMax'

import { type ChartContext } from '../../types/ChartContext'
import { type ChartConfig } from '../../types/ChartConfig'

import '@cdc/core/components/EditorPanel/EditorPanel.styles.css'
import './editor-panel.scss'
import EditorPanelContext from './EditorPanelContext'
import cloneDeep from 'lodash/cloneDeep'
import { updateFieldRankByValue } from './helpers/updateFieldRankByValue'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { Datasets } from '@cdc/core/types/DataSet'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { paletteMigrationMap, twoColorPaletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { isV1Palette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { USE_V2_MIGRATION } from '@cdc/core/helpers/constants'
import { getSeriesOwnedColumnNames } from '../../helpers/seriesColumnSettings'
import type { RightDataFormatField, RightYAxisField } from './components/Panels/RightValueAxisPanel/RightValueAxisPanel'
import {
  supportsForecastConfidenceIntervalExpansion,
  type LegendField
} from './components/Panels/LegendPanel/LegendPanel'
import {
  DataSeriesSectionProvider,
  type DataSeriesRootField,
  type DataSeriesSectionContextValue
} from './components/Panels/DataSeriesPanel/DataSeriesPanelContext'
import type {
  PieDataFormatField,
  PieDataFormatSectionContextValue,
  PieYAxisField
} from './components/Panels/CategoryAxisPanel/PieDataFormatSectionContext'
import type {
  ValueAxisControlsContextValue,
  ValueAxisDataFormatField,
  ValueAxisRootField,
  ValueAxisXAxisField,
  ValueAxisYAxisField
} from './components/Panels/ValueAxisPanel/ValueAxisControlsContext'
import type { CategoryAxisPanelContextValue } from './components/Panels/CategoryAxisPanel/CategoryAxisPanelContext'

type ChartEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<ChartEditorPanelProps> = ({ datasets }) => {
  const {
    config,
    updateConfig,
    tableData,
    transformedData: data,
    isLoading,
    colorScale,
    colorPalettes,
    twoColorPalette,
    unfilteredData,
    excludedData,
    isDashboard,
    setParentConfig,
    missingRequiredSections,
    isDebug,
    setFilteredData,
    lineOptions,
    rawData,
    highlight,
    handleShowAll,
    dimensions
  } = useContext<ChartContext>(ConfigContext)
  const isBarRace = config.visualizationType === 'Bar' && config.visualizationSubType === 'racing'
  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, unfilteredData)
  const properties = {
    data,
    tableData: data,
    config,
    minValue,
    maxValue,
    existPositiveValue,
    isAllLine
  }
  const { leftMax, rightMax } = getMinMax(properties)

  const {
    visHasAnchors,
    visHasBrushChart,
    visHasCategoricalAxis,
    visHasLegend,
    visHasLegendAxisAlign,
    visHasLegendColorCategory,
    visHasSelectableLegendValues,
    visSupportsClickingLegend,
    visSupportsDateCategoryAxis,
    visSupportsDateCategoryAxisLabel,
    visSupportsDateCategoryAxisLine,
    visSupportsDateCategoryAxisMax,
    visSupportsDateCategoryAxisMin,
    visSupportsDateCategoryAxisPadding,
    visSupportsDateCategoryAxisTicks,
    visSupportsDateCategoryHeight,
    visSupportsDateCategoryNumTicks,
    visSupportsDateCategoryTickRotation,
    visSupportsDynamicSeries,
    visSupportsAutoMaxStrategy,
    visSupportsFilterDomainBehavior,
    visSupportsFilters,
    visSupportsLeftValueAxis,
    visSupportsPreliminaryData,
    visSupportsRankByValue,
    visSupportsResponsiveTicks,
    visSupportsRightValueAxis,
    visSupportsValueAxisGridLines,
    visSupportsValueAxisLabels,
    visSupportsValueAxisLine,
    visSupportsValueAxisMax,
    visSupportsValueAxisMin,
    visSupportsValueAxisTicks,
    visSupportsYPadding
  } = useEditorPermissions()

  // when the visualization type changes we
  // have to update the individual series type & axis details
  // dataKey is unchanged here.
  // ie. { dataKey: 'series_name', type: 'Bar', axis: 'Left'}
  useEffect(() => {
    let newSeries = []
    if (config.series) {
      newSeries = config.series.map(series => {
        return {
          ...series,
          type:
            config.visualizationType === 'Combo' ? 'Bar' : config.visualizationType ? config.visualizationType : 'Bar',
          axis: 'Left',
          tooltip: series.tooltip ?? true
        }
      })
    }

    updateConfig({
      ...config,
      series: newSeries
    })
  }, [config.visualizationType]) // eslint-disable-line

  // Scatter Plots default date/category axis is 'continuous'
  useEffect(() => {
    if (config.visualizationType === 'Scatter Plot') {
      updateConfig({
        ...config,
        xAxis: {
          ...config.xAxis,
          type: 'continuous'
        }
      })
    }
  }, [])

  useEffect(() => {
    if (config.visualizationType !== 'Bar') {
      updateConfig({ ...config, tooltips: { ...config.tooltips, singleSeries: false } })
    }
  }, [config.visualizationType])

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
  })

  const sortableItemStyles = {
    animate: false,
    animateReplay: true,
    display: 'block',
    boxSizing: 'border-box',
    border: '1px solid #D1D1D1',
    borderRadius: '2px',
    background: '#F1F1F1',
    padding: '.4em .6em',
    fontSize: '.8em',
    marginRight: '.3em',
    marginBottom: '.3em',
    cursor: 'move',
    zIndex: '999'
  }

  const enforceRestrictions = updatedConfig => {
    if (updatedConfig.orientation === 'horizontal') {
      updatedConfig.labels = false
    }
    if (updatedConfig.table.show === undefined) {
      updatedConfig.table.show = !isDashboard
    }
    // DEV-3293 - Force combo to always be vertical
    if (updatedConfig.visualizationType === 'Combo') {
      updatedConfig.orientation = 'vertical'
    }
    if (isDateScale(updatedConfig.xAxis) && !updatedConfig.xAxis.padding) {
      updatedConfig.xAxis.padding = 0
    }
    if (isDateScale(updatedConfig.xAxis) && updatedConfig.xAxis.dataKey && !updatedConfig.table.defaultSort?.column) {
      updatedConfig.table.defaultSort = {
        column: updatedConfig.xAxis.dataKey,
        sortDirection: 'desc'
      }
    }
    // Default Radar charts to a taller height
    if (updatedConfig.visualizationType === 'Radar' && updatedConfig.heights?.vertical <= 400) {
      updatedConfig.heights.vertical = 400
    }
    // DEV-8008 - Remove Bar styling when Line is converted to Bar
    if (updatedConfig.visualizationType === 'Line') {
      if (updatedConfig.visualizationSubType !== 'racing') updatedConfig.visualizationSubType = 'regular'
      updatedConfig.barStyle = 'flat'
      updatedConfig.isLollipopChart = false
    }
  }

  const updateField = updateFieldFactory(config, updateConfig)
  const getAutoDetectedXAxisDateParseFormat = (dataKey = config.xAxis.dataKey, axisType = config.xAxis.type) => {
    const hasExistingDateParseFormat =
      typeof config.xAxis.dateParseFormat === 'string' && config.xAxis.dateParseFormat.trim() !== ''

    if (hasExistingDateParseFormat || !['date', 'date-time'].includes(axisType)) {
      return undefined
    }

    return getAutoDetectedDateParseFormat(config.data, dataKey)
  }

  const updateFieldDeprecated = (section, subsection, fieldName, newValue) => {
    if (isDebug)
      console.error(
        '#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue',
        section,
        subsection,
        fieldName,
        newValue
      ) // eslint-disable-line

    if (section === 'boxplot' && (subsection === 'legend' || subsection === 'labels')) {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config.boxplot[subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }

    const truthy = val => {
      if (val === 0) return true // indexes can be used as keys
      return !!val
    }

    if (section === 'columns' && truthy(subsection) && truthy(fieldName)) {
      updateConfig({
        ...config,
        columns: {
          ...config.columns,
          [subsection]: {
            ...config.columns[subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }

    if (section === 'xAxis' && !truthy(subsection) && fieldName === 'dataKey') {
      const autoDetectedDateParseFormat = getAutoDetectedXAxisDateParseFormat(newValue)
      const updatedConfig = {
        ...config,
        xAxis: {
          ...config.xAxis,
          dataKey: newValue,
          categoryOrder: [],
          categoryOrderType: 'data',
          ...(autoDetectedDateParseFormat ? { dateParseFormat: autoDetectedDateParseFormat } : {})
        }
      }

      enforceRestrictions(updatedConfig)
      updateConfig(updatedConfig)
      return
    }

    if (null === section && null === subsection) {
      // special case that allows for updating the config object directly
      if (!truthy(fieldName)) console.error('fieldName is required')
      let updatedConfig = { ...config, [fieldName]: newValue }
      enforceRestrictions(updatedConfig)
      updateConfig(updatedConfig)
      return
    }

    const isArray = Array.isArray(config[section])

    let sectionValue = isArray ? [...config[section], newValue] : { ...config[section], [fieldName]: newValue }

    if (truthy(subsection)) {
      if (isArray) {
        sectionValue = [...config[section]]
        sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue }
      } else if (typeof newValue === 'string') {
        sectionValue[subsection] = newValue
      } else if (truthy(fieldName)) {
        sectionValue = { ...config[section], [subsection]: { ...config[section][subsection], [fieldName]: newValue } }
      }
    }

    let updatedConfig = { ...config, [section]: sectionValue }

    enforceRestrictions(updatedConfig)

    updateConfig(updatedConfig)
  }

  const updateRightYAxisField = (field: RightYAxisField, value: unknown) =>
    updateFieldDeprecated('yAxis', null, field, value)

  const updateRightDataFormatField = (field: RightDataFormatField, value: unknown) =>
    updateFieldDeprecated('dataFormat', null, field, value)

  const updateRightTitlePlacement = (value: 'side' | 'top') => updateField('yAxis', null, 'rightTitlePlacement', value)

  const [displayViewportOverrides, setDisplayViewportOverrides] = useState(false)
  const [showConversionModal, setShowConversionModal] = useState(false)
  const [pendingPaletteSelection, setPendingPaletteSelection] = useState<{
    palette: string
    action: () => void
    seriesIndex?: number
    stageIndex?: number
    type?: 'general' | 'twoColor' | 'forecast'
  } | null>(null)

  const setLollipopShape = shape => {
    updateConfig({
      ...config,
      lollipopShape: shape
    })
  }

  const addNewSeries = seriesKey => {
    let newSeries = config.series ? [...config.series] : []
    let forecastingStages = Array.from(new Set(data.map(item => item[seriesKey])))
    let forecastingStageArr = []

    forecastingStages.forEach(stage => {
      forecastingStageArr.push({ key: stage })
    })

    if (config.visualizationType === 'Forecasting') {
      newSeries.push({
        dataKey: seriesKey,
        type: config.visualizationType,
        stages: forecastingStageArr,
        stageColumn: seriesKey,
        axis: 'Left',
        tooltip: true
      })
    } else {
      newSeries.push({ dataKey: seriesKey, type: config.visualizationType, axis: 'Left', tooltip: true })
    }
    updateConfig({ ...config, series: newSeries }) // left axis series keys
  }

  const addNewExclusion = exclusionKey => {
    let newExclusion = [...(config.exclusions?.keys ?? [])]
    newExclusion.push(exclusionKey)

    let payload = { ...config.exclusions, keys: newExclusion }
    updateConfig({ ...config, exclusions: payload })
  }

  const removeExclusion = excludeValue => {
    let exclusionsIndex = -1
    let exclusions = [...(config.exclusions?.keys ?? [])]

    for (let i = 0; i < exclusions.length; i++) {
      if (exclusions[i] === excludeValue) {
        exclusionsIndex = i
        break
      }
    }

    if (exclusionsIndex !== -1) {
      exclusions.splice(exclusionsIndex, 1)

      let newExclusions = { ...config.exclusions, keys: exclusions }
      let newExclusionsPayload = { ...config, exclusions: newExclusions }

      updateConfig(newExclusionsPayload)
    }
  }

  // Select data source with memoization (replaces getColumns data source selection logic)
  const dataSourceForColumns = useMemo(() => {
    if (unfilteredData && unfilteredData.length > 0) {
      return unfilteredData
    } else if (isDashboard && datasets && config.dataKey && datasets[config.dataKey]?.data?.length > 0) {
      return datasets[config.dataKey].data
    } else if (rawData && rawData.length > 0) {
      return rawData
    } else if (data && data.length > 0) {
      return data
    } else if (config.data && config.data.length > 0) {
      return config.data
    }
    return []
  }, [unfilteredData, isDashboard, datasets, config.dataKey, config.data, rawData, data])

  // Extract column names from data with memoization (replaces getColumns)
  const allColumns = useDataColumns(dataSourceForColumns)
  const seriesOwnedColumnNames = useMemo(() => getSeriesOwnedColumnNames(config.series), [config.series])

  // Filter out series columns and confidence key columns (except lower and upper)
  const filteredColumns = useMemo(() => {
    const { lower, upper } = config.confidenceKeys || {}
    return allColumns.filter(key => {
      // Filter out series columns
      if (config.series && config.series.some(series => series.dataKey === key)) {
        return false
      }
      // Filter out confidence key columns (except lower and upper)
      if (
        config.confidenceKeys &&
        Object.keys(config.confidenceKeys).includes(key) &&
        ((lower && upper) || lower || upper) &&
        key !== lower &&
        key !== upper
      ) {
        return false
      }
      return true
    })
  }, [allColumns, config.series, config.confidenceKeys])

  // Maintain backwards compatibility with getColumns(filter) API
  const getColumns = useCallback(
    (filter = true) => (filter ? filteredColumns : allColumns),
    [filteredColumns, allColumns]
  )

  const isHeatMap = config.visualizationType === 'HeatMap'
  const heatMapOwnedColumnNames = useMemo(
    () => [config.xAxis?.dataKey, ...(config.series || []).map(series => series.dataKey)].filter(Boolean),
    [config.xAxis?.dataKey, config.series]
  )

  const getDataValueOptions = (data: Record<string, any>[]): string[] => {
    if (!data) return []
    const set = new Set<string>()
    for (let i = 0; i < data.length; i++) {
      for (const [key] of Object.entries(data[i])) {
        set.add(key)
      }
    }
    return Array.from(set)
  }

  const getDataValues = (dataKey, unique = false) => {
    let values = []
    excludedData.forEach(e => {
      values.push(e[dataKey])
    })
    return unique ? [...new Set(values)] : values
  }

  const getAvailableExclusionValues = dataKey => {
    const excludedKeys = (config.exclusions.keys || []).map(String)
    return getDataValues(dataKey, true).filter(value => !excludedKeys.includes(String(value)))
  }

  const updateCategoryOrderType = (categoryOrderType: 'data' | 'custom', categoryOrder: string[]) => {
    updateConfig({
      ...config,
      xAxis: {
        ...config.xAxis,
        categoryOrderType,
        categoryOrder
      }
    })
  }

  const updateCategoryOrder = (categoryOrder: string[]) => {
    updateConfig({
      ...config,
      xAxis: {
        ...config.xAxis,
        categoryOrder
      }
    })
  }

  // prettier-ignore
  const {
    highlightedBarValues,
    getHighlightedSeriesValues,
    handleUpdateHighlightedBar,
    handleAddNewHighlightedBar,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBarColor,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBorderWidth
  } = useHighlightedBars(config, updateConfig)

  useEffect(() => {
    if (config.orientation === 'horizontal') {
      updateConfig({
        ...config,
        lollipopShape: config.lollipopShape
      })
    }
  }, [config.isLollipopChart, config.lollipopShape]) // eslint-disable-line

  const handleSeriesChange = (idx1, idx2) => {
    let seriesOrder = config.series
    let [movedItem] = seriesOrder.splice(idx1, 1)
    seriesOrder.splice(idx2, 0, movedItem)
    updateConfig({ ...config, series: seriesOrder })
  }

  if (config.isLollipopChart && config?.series?.length > 1) {
    config.runtime.editorErrorMessage = 'Lollipop charts must use only one data series'
  }
  if (config.visualizationType === 'Paired Bar' && config?.series?.length !== 2) {
    config.runtime.editorErrorMessage = 'Paired Bar charts must use exactly two data series'
  }

  if (config.visualizationType === 'Deviation Bar' && config?.series?.length !== 1) {
    config.runtime.editorErrorMessage = 'Deviation Bar charts must use exactly one data series'
  }
  if (config.isLollipopChart && config?.series?.length === 0) {
    config.runtime.editorErrorMessage = 'Add a data series'
  }
  if (config.visualizationType === 'HeatMap') {
    const missingMappings = [
      !config.xAxis?.dataKey && 'Date/Category Axis',
      (!config.series || config.series.length === 0) && 'Data Series'
    ].filter(Boolean)

    config.runtime.editorErrorMessage =
      missingMappings.length > 0 ? `${missingMappings.join(', ')} must be set for heatmaps.` : ''
  }

  const section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
  const [warningMsg, setWarningMsg] = useState({ maxMsg: '', minMsg: '', rightMaxMessage: '', minMsgRight: '' })

  // Palette migration functions
  const handlePaletteSelection = (palette: string) => {
    try {
      // Check if config exists and has basic structure
      if (!config) {
        console.error('COVE: Config is undefined in handlePaletteSelection')
        return
      }

      // Check if it's a v1 palette configuration
      const isV1PaletteConfig = isV1Palette(config)
      const shouldUpgradePalette = USE_V2_MIGRATION && (isV1PaletteConfig || config.general?.palette?.version === '2.0')

      const executeSelection = () => {
        const _newConfig = cloneConfig(config)
        if (!_newConfig.general.palette) {
          _newConfig.general.palette = {}
        }

        // If v2 migration is disabled, use the original palette name and keep v1 version
        if (!USE_V2_MIGRATION) {
          _newConfig.general.palette.name = palette
          _newConfig.general.palette.version = '1.0'
        } else {
          // V2 migration logic
          const migratedName = palette ? migratePaletteWithMap(palette, paletteMigrationMap, false) : undefined
          _newConfig.general.palette.name = migratedName
          if (shouldUpgradePalette) {
            _newConfig.general.palette.version = '2.1'
          }
        }
        updateConfig(_newConfig)
      }

      if (shouldUpgradePalette) {
        setPendingPaletteSelection({ palette, action: executeSelection, type: 'general' })
        setShowConversionModal(true)
      } else {
        executeSelection()
      }
    } catch (error) {
      console.error('COVE: Error in handlePaletteSelection:', error)
    }
  }

  // Two-color palette migration function
  const handleTwoColorPaletteSelection = (palette: string) => {
    try {
      // Check if config exists and has basic structure
      if (!config) {
        console.error('COVE: Config is undefined in handleTwoColorPaletteSelection')
        return
      }

      // Check if it's a v1 palette configuration
      const isV1PaletteConfig = isV1Palette(config)

      const executeSelection = () => {
        const _newConfig = cloneConfig(config)
        if (!_newConfig.twoColor) {
          _newConfig.twoColor = { palette: '', isPaletteReversed: false }
        }

        // If v2 migration is disabled, use the original palette name and keep v1 version
        if (!USE_V2_MIGRATION) {
          _newConfig.twoColor.palette = palette
          if (!_newConfig.general) {
            _newConfig.general = {}
          }
          if (!_newConfig.general.palette) {
            _newConfig.general.palette = {}
          }
          _newConfig.general.palette.version = '1.0'
        } else {
          // V2 migration logic
          const migratedPaletteName = isV1PaletteConfig
            ? migratePaletteWithMap(palette, twoColorPaletteMigrationMap, false)
            : palette

          _newConfig.twoColor.palette = migratedPaletteName

          if (isV1PaletteConfig) {
            if (!_newConfig.general) {
              _newConfig.general = {}
            }
            if (!_newConfig.general.palette) {
              _newConfig.general.palette = {}
            }
            _newConfig.general.palette.version = '2.1'

            // Create backup for rollback functionality (consistent with standard format)
            if (!_newConfig.general.palette.backups) {
              _newConfig.general.palette.backups = []
            }
            _newConfig.general.palette.backups.push({
              name: config.twoColor?.palette || palette,
              version: '1.0',
              isReversed: false,
              type: 'twoColor'
            })
          }
        }
        updateConfig(_newConfig)
      }

      if (isV1PaletteConfig) {
        setPendingPaletteSelection({ palette, action: executeSelection, type: 'twoColor' })
        setShowConversionModal(true)
      } else {
        executeSelection()
      }
    } catch (error) {
      console.error('COVE: Error in handleTwoColorPaletteSelection:', error)
    }
  }

  // Forecast palette selection - includes v1/v2 migration modal logic
  const handleForecastPaletteSelection = (palette: string, seriesIndex: number, stageIndex: number) => {
    try {
      if (!config) {
        console.error('COVE: Config is undefined in handleForecastPaletteSelection')
        return
      }

      // Check if it's a v1 palette configuration
      const isV1PaletteConfig = isV1Palette(config)

      const executeSelection = () => {
        const copyOfSeries = [...config.series]
        const copyOfStages = [...(copyOfSeries[seriesIndex].stages || [])]
        copyOfStages[stageIndex] = { ...copyOfStages[stageIndex], color: palette }
        copyOfSeries[seriesIndex] = { ...copyOfSeries[seriesIndex], stages: copyOfStages }

        const _newConfig = cloneConfig(config)
        _newConfig.series = copyOfSeries

        // If this is the first v2 palette selection, upgrade to v2
        if (isV1PaletteConfig && USE_V2_MIGRATION) {
          if (!_newConfig.general) {
            _newConfig.general = {}
          }
          if (!_newConfig.general.palette) {
            _newConfig.general.palette = {}
          }
          _newConfig.general.palette.version = '2.1'

          // Forecast-specific migration map for v1 → v2 palette names (all lowercase-hyphen format)
          const forecastPaletteMigrationMap: Record<string, string> = {
            // Sequential Blue variants → sequential-blue
            'sequential-blue': 'sequential-blue',
            'sequential-blue-two': 'sequential-blue',
            'sequential-blue-three': 'sequential-blue',
            'sequential-blue-2-(mpx)': 'sequential-blue',
            'sequential-blue-2-mpx': 'sequential-blue',
            // Sequential Orange variants → sequential-orange
            'sequential-orange': 'sequential-orange',
            'sequential-orange-two': 'sequential-orange',
            'sequential-orange-(mpx)': 'sequential-orange',
            'sequential-orange-mpx': 'sequential-orange',
            // Other sequential palettes (no variants, just normalize)
            'sequential-green': 'sequential-green',
            'sequential-purple': 'sequential-purple',
            'sequential-teal': 'sequential-teal',
            // Reverse variants - Sequential Blue
            'sequential-bluereverse': 'sequential-bluereverse',
            'sequential-blue-reverse': 'sequential-bluereverse',
            'sequential-blue-tworeverse': 'sequential-bluereverse',
            'sequential-blue-two-reverse': 'sequential-bluereverse',
            'sequential-blue-threereverse': 'sequential-bluereverse',
            'sequential-blue-three-reverse': 'sequential-bluereverse',
            'sequential-blue-2-(mpx)reverse': 'sequential-bluereverse',
            'sequential-blue-2-(mpx)-reverse': 'sequential-bluereverse',
            'sequential-blue-2-mpxreverse': 'sequential-bluereverse',
            'sequential-blue-2-mpx-reverse': 'sequential-bluereverse',
            // Reverse variants - Sequential Orange
            'sequential-orangereverse': 'sequential-orangereverse',
            'sequential-orange-reverse': 'sequential-orangereverse',
            'sequential-orange-tworeverse': 'sequential-orangereverse',
            'sequential-orange-two-reverse': 'sequential-orangereverse',
            'sequential-orange-(mpx)reverse': 'sequential-orangereverse',
            'sequential-orange-(mpx)-reverse': 'sequential-orangereverse',
            'sequential-orange-mpxreverse': 'sequential-orangereverse',
            'sequential-orange-mpx-reverse': 'sequential-orangereverse',
            // Reverse variants - Other sequential palettes
            'sequential-greenreverse': 'sequential-greenreverse',
            'sequential-green-reverse': 'sequential-greenreverse',
            'sequential-purplereverse': 'sequential-purplereverse',
            'sequential-purple-reverse': 'sequential-purplereverse',
            'sequential-tealreverse': 'sequential-tealreverse',
            'sequential-teal-reverse': 'sequential-tealreverse'
          }

          // Migrate and normalize all forecast stage colors to v2 format
          _newConfig.series.forEach((series: any) => {
            if (series.type === 'Forecasting' && series.stages) {
              series.stages.forEach((stage: any) => {
                if (stage.color) {
                  // First, try to migrate using the map
                  const migrated = forecastPaletteMigrationMap[stage.color] || stage.color
                  // Then normalize to lowercase with hyphens
                  stage.color = migrated.toLowerCase().replace(/ /g, '-').replace(/_/g, '-')
                }
              })
            }
          })
        }

        updateConfig(_newConfig)
      }

      if (isV1PaletteConfig) {
        setPendingPaletteSelection({ palette, action: executeSelection, type: 'forecast', seriesIndex, stageIndex })
        setShowConversionModal(true)
      } else {
        executeSelection()
      }
    } catch (error) {
      console.error('COVE: Error in handleForecastPaletteSelection:', error)
    }
  }

  // Modal handlers
  const handleConversionConfirm = () => {
    if (pendingPaletteSelection) {
      pendingPaletteSelection.action()
    }
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const handleConversionCancel = () => {
    // Don't update config - just close modal and discard pending selection
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const handleReturnToV1 = () => {
    if (pendingPaletteSelection) {
      const _newConfig = cloneConfig(config)
      const { palette, type } = pendingPaletteSelection

      // Handle based on palette type
      if (type === 'forecast') {
        // Forecast palette selection
        const { seriesIndex, stageIndex } = pendingPaletteSelection
        if (seriesIndex !== undefined && stageIndex !== undefined) {
          const copyOfSeries = [..._newConfig.series]
          const copyOfStages = [...copyOfSeries[seriesIndex].stages]
          copyOfStages[stageIndex] = { ...copyOfStages[stageIndex], color: palette }
          copyOfSeries[seriesIndex] = { ...copyOfSeries[seriesIndex], stages: copyOfStages }
          _newConfig.series = copyOfSeries
        }
      } else if (type === 'twoColor') {
        // Two-color palette selection
        if (!_newConfig.twoColor) {
          _newConfig.twoColor = { palette: '', isPaletteReversed: false }
        }
        _newConfig.twoColor.palette = palette
      } else {
        // General palette selection (type === 'general' or undefined for backwards compatibility)
        if (!_newConfig.general) {
          _newConfig.general = {}
        }
        if (!_newConfig.general.palette) {
          _newConfig.general.palette = {}
        }
        _newConfig.general.palette.name = palette
      }

      // Keep the current palette version
      if (!_newConfig.general) {
        _newConfig.general = {}
      }
      if (!_newConfig.general.palette) {
        _newConfig.general.palette = {}
      }
      _newConfig.general.palette.version = config.general?.palette?.version || '1.0'
      updateConfig(_newConfig)
    }
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const validateMaxValue = () => {
    const enteredValue = config[section].max
    const enteredRightMax = config[section].rightMax

    let message = ''
    let rightMaxMessage = ''

    if (config.visualizationType !== 'Combo') {
      switch (true) {
        case enteredValue && parseFloat(enteredValue) < parseFloat(maxValue) && existPositiveValue:
          message = 'Max value must be more than ' + maxValue
          break
        case enteredValue && parseFloat(enteredValue) < 0 && !existPositiveValue:
          message = 'Value must be more than or equal to 0'
          break
        default:
          message = ''
      }
    }

    if (config.visualizationType === 'Combo') {
      switch (true) {
        case enteredValue && parseFloat(enteredValue) < leftMax:
          message = 'Max value must be more than ' + leftMax
          break
        case enteredRightMax && parseFloat(enteredRightMax) < rightMax:
          rightMaxMessage = 'Max value must be more than ' + rightMax
          break
        case enteredValue && parseFloat(enteredValue) < 0 && !existPositiveValue:
          message = 'Value must be more than or equal to 0'
          break
        default:
          message = ''
      }
    }

    setWarningMsg(prevMsg => ({ ...prevMsg, maxMsg: message, rightMaxMessage: rightMaxMessage }))
  }

  const validateMinValue = () => {
    const enteredValue = parseFloat(config[section].min)
    let minVal = Number(minValue)
    let message = ''

    switch (true) {
      case config.useLogScale && ['Line', 'Combo', 'Bar'].includes(config.visualizationType) && enteredValue < 0:
        message = 'Negative numbers are not supported in logarithmic scale'
        break
      case (config.visualizationType === 'Line' || config.visualizationType === 'Spark Line') && enteredValue > minVal:
        message = 'Value should not exceed ' + minValue
        break
      case config.visualizationType === 'Combo' && isAllLine && enteredValue > minVal:
        message = 'Value should not exceed ' + minValue
        break
      case (config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && !isAllLine)) &&
        minVal > 0 &&
        enteredValue > 0:
        message = config.useLogScale ? 'Value must be equal to 0' : 'Value must be less than or equal to 0'
        break
      case config.visualizationType === 'Deviation Bar' && enteredValue >= Math.min(minVal, config.xAxis.target):
        message = 'Value must be less than ' + Math.min(minVal, config.xAxis.target)
        break
      case config.visualizationType !== 'Deviation Bar' && enteredValue && minVal < 0 && enteredValue > minVal:
        message = 'Value should not exceed ' + minValue
        break
      default:
        message = ''
    }
    setWarningMsg(prevMsg => ({ ...prevMsg, minMsg: message }))
  }
  useEffect(() => {
    validateMinValue()
    validateMaxValue()
  }, [minValue, maxValue, config]) // eslint-disable-line

  const isLoadedFromUrl = config?.dataKey?.includes('http://') || config?.dataKey?.includes('https://')

  // if isDebug = true, then try to set the category and data col to reduce clicking
  const setCategoryAxis = () => {
    // only for debug mode
    if (undefined !== isDebug && isDebug && !config?.xAxis?.dataKey) {
      // then try to set the x axis to appropriate value so we dont have to manually do it
      let datakeys = getColumns(false)
      if (datakeys.includes('Date')) return 'Date'
      if (datakeys.includes('Race')) return 'Race'
      if (datakeys.includes('Month')) return 'Month'
      // add other known Category cols here to extend debug
    }
    return config?.xAxis?.dataKey || ''
  }
  const setDataColumn = () => {
    // only for debug mode
    if (undefined !== isDebug && isDebug && getColumns(false).length > 0) {
      // then try to set the x axis to appropriate value so we dont have to manually do it
      let datacols = getColumns(false).filter(x => x !== setCategoryAxis())
      if (datacols.length > 0) {
        return datacols[0]
      }
    }
    return ''
  }
  if (isDebug && !config.xAxis.dataKey) config.xAxis.dataKey = setCategoryAxis()
  if (isDebug && config?.series?.length === 0) {
    let setdatacol = setDataColumn()
    if (setdatacol !== '') addNewSeries(setdatacol)
    if (isDebug) console.log('### COVE DEBUG: Chart: Setting default datacol=', setdatacol) // eslint-disable-line
  }

  const chartsWithOptions = [
    'Bump Chart',
    'Area Chart',
    'Combo',
    'HeatMap',
    'Line',
    'Bar',
    'Forecasting',
    'Scatter Plot',
    'Paired Bar',
    'Deviation Bar'
  ]

  const removeAdditionalColumn = columnName => {
    const newColumns = cloneDeep(config.columns)

    delete newColumns[columnName]

    updateConfig({
      ...config,
      columns: newColumns
    })
  }

  const editColumn = async (addCol, columnName, setval) => {
    // not using special classes like in map editorpanel so removed those cases
    switch (columnName) {
      case 'name':
        updateConfig({
          ...config,
          columns: {
            ...config.columns,
            [addCol]: {
              ...config.columns[addCol],
              [columnName]: setval
            }
          }
        })
        break
      default:
        updateConfig({
          ...config,
          columns: {
            ...config.columns,
            [addCol]: {
              ...config.columns[addCol],
              [columnName]: setval
            }
          }
        })
        break
    }
  }

  const updateSeriesTooltip = (column, event) => {
    let updatedColumns = config.columns

    updatedColumns[column].tooltips = event

    updateConfig({
      ...config,
      columns: updatedColumns
    })
  }

  const colorCodeByCategory =
    config.visualizationType === 'Bar' &&
    config.visualizationSubType === 'regular' &&
    config.runtime.seriesKeys.length === 1
  const supportsLegendColorCategory = visHasLegendColorCategory()
  const legendIsolateOptions =
    visHasSelectableLegendValues && config.legend.behavior === 'isolate' && !colorCodeByCategory
      ? getColumns(false).filter(d => d !== config.xAxis.dataKey)
      : []

  const updateSeriesIsolateValues = updatedValues => {
    updateConfig({ ...config, legend: { ...config.legend, seriesHighlight: updatedValues } })
  }

  const updateLegendBehavior = newValue => {
    const legend = { ...config.legend, behavior: newValue }
    const updatedConfig = { ...config, legend }

    if (newValue === 'highlight' && config.legend.seriesHighlight?.length) {
      updatedConfig.legend.seriesHighlight.length = 0
    }

    updateConfig(updatedConfig)
  }

  const updateLegendField = (field: LegendField, value: unknown, subsection?: 'hideBorder') =>
    updateFieldDeprecated('legend', subsection || null, field, value)

  const updateViewportOverrides = (property, viewport, numTicks) => {
    const propertyObject = { ...config.xAxis[property] }
    propertyObject[viewport] = numTicks
    const updatedConfig = { ...config, xAxis: { ...config.xAxis, [property]: propertyObject } }

    updateConfig(updatedConfig)
  }

  const handleConfidenceKeyChange = (fieldName: 'upper' | 'lower', columnName: string) => {
    const updatedConfig = cloneConfig(config)
    updatedConfig.confidenceKeys[fieldName] = columnName

    // Auto-add confidence key column to tooltips and data table
    if (columnName) {
      const existingColumn = updatedConfig.columns[columnName]
      const baseColumnProps = { dataTable: true, tooltips: true }
      updatedConfig.columns = {
        ...updatedConfig.columns,
        [columnName]: existingColumn
          ? { ...existingColumn, ...baseColumnProps }
          : {
              name: columnName,
              label: columnName,
              ...baseColumnProps
            }
      }
    }

    updateConfig(updatedConfig)
  }

  const updateDataSeriesRootField = (field: DataSeriesRootField, value: unknown) =>
    updateFieldDeprecated(null, null, field, value)

  const updateRankByValue = (value: ChartConfig['rankByValue']) => {
    const [newConfig, newData] = updateFieldRankByValue(config, value, data)
    updateConfig(newConfig, newData)
  }

  const hasDynamicCategory = ![undefined, '- Select - '].includes(config.series?.[0]?.dynamicCategory)
  const hasMultipleSeries = config.series?.length > 1

  const highlightedSeriesOptions = useMemo(() => {
    if (
      !(
        config.visualizationType === 'Bar' &&
        config.series?.length === 1 &&
        config.highlightedBarValues?.length > 0 &&
        getHighlightedSeriesValues
      )
    ) {
      return []
    }

    return [...new Set(getHighlightedSeriesValues())].sort().map(option => ({ value: option, label: option }))
  }, [
    config.visualizationType,
    config.series?.length,
    config.highlightedBarValues?.length,
    config.data,
    config.xAxis.dataKey
  ])

  const supportsDynamicSeries = visSupportsDynamicSeries()
  const supportsRankByValue = visSupportsRankByValue()
  const supportsPreliminaryData = visSupportsPreliminaryData()
  const dataSeriesSectionContextValue = useMemo<DataSeriesSectionContextValue>(
    () => ({
      model: {
        visualizationType: config.visualizationType,
        isLollipopChart: config.isLollipopChart,
        dynamicSeries: config.dynamicSeries,
        dynamicSeriesType: config.dynamicSeriesType,
        dynamicSeriesLineType: config.dynamicSeriesLineType,
        series: config.series,
        confidenceKeys: config.confidenceKeys,
        rankByValue: config.rankByValue,
        supportsDynamicSeries,
        supportsRankByValue,
        seriesOptions: getColumns().filter(column => column !== config.xAxis?.dataKey),
        columnOptions: getColumns(),
        curveOptions: Object.values(approvedCurveTypes)
      },
      onRootFieldChange: updateDataSeriesRootField,
      onAddSeries: addNewSeries,
      onReorderSeries: handleSeriesChange,
      onConfidenceKeyChange: handleConfidenceKeyChange,
      onRankByValueChange: updateRankByValue,
      getColumns,
      handleForecastPaletteSelection,
      renderSeriesItem: (series, index) => (
        <Panels.Series.Item
          getItemStyle={getItemStyle}
          sortableItemStyles={sortableItemStyles}
          chartsWithOptions={chartsWithOptions}
          series={series}
          index={index}
          key={`series-list-${index}`}
        />
      ),
      preliminaryData: supportsPreliminaryData ? { config, updateConfig, data } : undefined
    }),
    [config, data, getColumns, supportsDynamicSeries, supportsRankByValue, supportsPreliminaryData, updateConfig]
  )

  const pieDataFormatSectionContextValue = useMemo<PieDataFormatSectionContextValue>(
    () => ({
      model: {
        dataKey: config.yAxis.dataKey,
        label: config.yAxis.label,
        columnOptions: getColumns(false),
        commas: config.dataFormat.commas,
        abbreviated: config.dataFormat.abbreviated,
        showPiePercent: config.dataFormat.showPiePercent,
        roundTo: config.dataFormat.roundTo,
        preserveOriginalDecimals: config.dataFormat.preserveOriginalDecimals,
        prefix: config.dataFormat.prefix,
        suffix: config.dataFormat.suffix
      },
      onYAxisChange: (field: PieYAxisField, value: unknown) => updateFieldDeprecated('yAxis', null, field, value),
      onDataFormatChange: (field: PieDataFormatField, value: unknown) =>
        updateFieldDeprecated('dataFormat', null, field, value)
    }),
    [config, getColumns]
  )

  const valueAxisControlsContextValue = useMemo<ValueAxisControlsContextValue>(
    () => ({
      model: {
        visualizationType: config.visualizationType,
        visualizationSubType: config.visualizationSubType,
        orientation: config.orientation,
        isBarRace,
        hasCategoricalAxis: visHasCategoricalAxis(),
        seriesCount: config.runtime.seriesKeys?.length || 0,
        yAxis: {
          type: config.yAxis.type,
          categoryMode: config.yAxis.categoryMode,
          dataDrivenCategories: config.yAxis.dataDrivenCategories,
          label: config.yAxis.label,
          titlePlacement: config.yAxis.titlePlacement,
          inlineLabel: config.yAxis.inlineLabel,
          size: config.yAxis.size,
          hideAxis: config.yAxis.hideAxis,
          hideLabel: config.yAxis.hideLabel,
          hideTicks: config.yAxis.hideTicks,
          tickRotation: config.yAxis.tickRotation,
          numTicks: config.yAxis.numTicks,
          gridLines: config.yAxis.gridLines,
          labelsAboveGridlines: config.yAxis.labelsAboveGridlines,
          smallestLeftAxisMax: config.yAxis.smallestLeftAxisMax,
          autoMaxStrategy: config.yAxis.autoMaxStrategy,
          filterDomainBehavior: config.yAxis.filterDomainBehavior,
          max: config.yAxis.max,
          min: config.yAxis.min,
          enablePadding: config.yAxis.enablePadding,
          scalePadding: config.yAxis.scalePadding
        },
        xAxis: {
          maxTickRotation: config.xAxis.maxTickRotation,
          hideAxis: config.xAxis.hideAxis,
          hideLabel: config.xAxis.hideLabel,
          hideTicks: config.xAxis.hideTicks,
          max: config.xAxis.max,
          min: config.xAxis.min,
          target: config.xAxis.target,
          targetLabel: config.xAxis.targetLabel,
          showTargetLabel: config.xAxis.showTargetLabel
        },
        dataFormat: {
          commas: config.dataFormat.commas,
          abbreviated: config.dataFormat.abbreviated,
          roundTo: config.dataFormat.roundTo,
          preserveOriginalDecimals: config.dataFormat.preserveOriginalDecimals,
          prefix: config.dataFormat.prefix,
          suffix: config.dataFormat.suffix
        },
        root: {
          isLegendValue: config.isLegendValue,
          isResponsiveTicks: config.isResponsiveTicks
        },
        warnings: { max: warningMsg.maxMsg, min: warningMsg.minMsg },
        permissions: {
          gridLines: visSupportsValueAxisGridLines(),
          axisLine: visSupportsValueAxisLine(),
          axisLabels: visSupportsValueAxisLabels(),
          axisTicks: visSupportsValueAxisTicks(),
          axisMax: visSupportsValueAxisMax(),
          axisMin: visSupportsValueAxisMin(),
          autoMaxStrategy: visSupportsAutoMaxStrategy(),
          filterDomainBehavior: visSupportsFilterDomainBehavior(),
          yPadding: visSupportsYPadding()
        }
      },
      onLegacyYAxisChange: (field: ValueAxisYAxisField, value: unknown) =>
        updateFieldDeprecated('yAxis', null, field, value),
      onCurrentYAxisChange: (field: 'titlePlacement' | 'inlineLabel', value: unknown) =>
        updateField('yAxis', null, field, value),
      onLegacyXAxisChange: (field: ValueAxisXAxisField, value: unknown) =>
        updateFieldDeprecated('xAxis', null, field, value),
      onDataFormatChange: (field: ValueAxisDataFormatField, value: unknown) =>
        updateFieldDeprecated('dataFormat', null, field, value),
      onRootChange: (field: ValueAxisRootField, value: unknown) => updateFieldDeprecated(null, null, field, value),
      onAxisTypeChange: value => {
        const isDataDriven = value === 'categorical-data-driven'
        const isCategorical = value === 'categorical' || isDataDriven
        const nextYAxis = {
          ...config.yAxis,
          type: isCategorical ? 'categorical' : value
        }

        if (isDataDriven) {
          nextYAxis.categoryMode = 'data-driven'
          nextYAxis.dataDrivenCategories = config.yAxis.dataDrivenCategories || {
            categories: [],
            manualCategories: config.yAxis.categories || []
          }
          nextYAxis.categories = []
        } else if (isCategorical) {
          nextYAxis.categoryMode = 'manual'
          nextYAxis.categories = config.yAxis.dataDrivenCategories?.manualCategories || config.yAxis.categories || []
        } else {
          delete nextYAxis.categoryMode
        }

        updateConfig({ ...config, yAxis: nextYAxis })
      }
    }),
    [config, data, isBarRace, lineOptions, updateConfig, warningMsg]
  )

  const categoryAxisPanelContextValue: CategoryAxisPanelContextValue = {
    config,
    isBarRace,
    excludedData: excludedData as Record<string, any>[],
    lineOptions,
    displayViewportOverrides,
    highlightedBarValues,
    highlightedSeriesOptions,
    updateConfig,
    updateField,
    updateFieldDeprecated,
    getColumns,
    getAutoDetectedXAxisDateParseFormat,
    updateCategoryOrder,
    updateCategoryOrderType,
    setCategoryAxis,
    getAvailableExclusionValues,
    addNewExclusion,
    removeExclusion,
    setDisplayViewportOverrides,
    updateViewportOverrides,
    visHasBrushChart,
    visSupportsDateCategoryAxisLabel,
    visSupportsDateCategoryAxisLine,
    visSupportsDateCategoryAxisMax,
    visSupportsDateCategoryAxisMin,
    visSupportsDateCategoryAxisPadding,
    visSupportsDateCategoryAxisTicks,
    visSupportsDateCategoryHeight,
    visSupportsDateCategoryNumTicks,
    visSupportsDateCategoryTickRotation,
    visSupportsResponsiveTicks,
    visHasAnchors,
    handleAddNewHighlightedBar,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBar,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBorderWidth,
    handleUpdateHighlightedBarColor
  }

  const editorContextValues = {
    addNewExclusion,
    data,
    editColumn,
    getColumns,
    getDataValueOptions,
    getDataValues,
    getItemStyle,
    handleSeriesChange,
    handleAddNewHighlightedBar,
    setCategoryAxis,
    updateField: updateFieldDeprecated,
    warningMsg,
    highlightedBarValues,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBar,
    handleRemoveHighlightedBar,
    isPaletteReversed: config.general?.palette?.isReversed,
    getHighlightedSeriesValues,
    handleUpdateHighlightedBorderWidth,
    handleUpdateHighlightedBarColor,
    setLollipopShape,
    handlePaletteSelection,
    handleTwoColorPaletteSelection,
    handleForecastPaletteSelection
  }
  if (isLoading) {
    return <></>
  }

  if (isLoading) {
    return null
  }

  // Custom convertStateToConfig for chart that preserves newViz when required sections are missing
  const customConvertStateToConfig = () => {
    let strippedState = cloneConfig(config)
    if (false === missingRequiredSections(config)) {
      delete strippedState.newViz
    }
    delete strippedState.runtime
    return strippedState
  }

  return (
    <EditorPanelContext.Provider value={editorContextValues}>
      <BaseEditorPanel
        config={config}
        updateConfig={updateConfig as (config: any) => void}
        loading={isLoading}
        setParentConfig={setParentConfig as ((config: any) => void) | undefined}
        isDashboard={isDashboard}
        title='Configure Chart'
      >
        {({ displayPanel, convertStateToConfig }) => {
          // Use custom convertStateToConfig for chart-specific logic
          const chartConvertStateToConfig = customConvertStateToConfig

          return (
            <>
              <Accordion allowZeroExpanded={true}>
                <Panels.General name='General' />
                <Panels.ForestPlot name='Forest Plot Settings' />
                <Panels.Sankey name='Sankey' />
                <Panels.Network name='Network' />
                <Panels.Dendrogram name='Dendrogram' />
                {config.visualizationType !== 'Pie' &&
                  config.visualizationType !== 'Forest Plot' &&
                  !['Sankey', 'Network', 'Dendrogram'].includes(config.visualizationType) && (
                    <DataSeriesSectionProvider value={dataSeriesSectionContextValue}>
                      <Panels.DataSeries />
                    </DataSeriesSectionProvider>
                  )}
                <Panels.BoxPlot name='Measures' />
                <Panels.Radar name='Radar Chart Settings' />
                {/* Left Value Axis */}
                {visSupportsLeftValueAxis() && (
                  <Panels.ValueAxis
                    config={config}
                    pieDataFormatValue={pieDataFormatSectionContextValue}
                    valueAxisControlsValue={valueAxisControlsContextValue}
                    updateConfig={updateConfig}
                    hasCategoricalAxis={visHasCategoricalAxis()}
                    hasAnchors={visHasAnchors()}
                    lineOptions={lineOptions}
                  />
                )}
                {/* Right Value Axis Settings */}
                {visSupportsRightValueAxis() && (
                  <Panels.RightValueAxis
                    model={{
                      rightLabel: config.yAxis.rightLabel,
                      rightTitlePlacement: config.yAxis.rightTitlePlacement,
                      rightNumTicks: config.yAxis.rightNumTicks,
                      rightCommas: config.dataFormat.rightCommas,
                      rightRoundTo: config.dataFormat.rightRoundTo,
                      rightPrefix: config.dataFormat.rightPrefix,
                      rightSuffix: config.dataFormat.rightSuffix,
                      rightHideAxis: config.yAxis.rightHideAxis,
                      rightHideLabel: config.yAxis.rightHideLabel,
                      rightHideTicks: config.yAxis.rightHideTicks,
                      rightMax: config.yAxis.rightMax,
                      rightMin: config.yAxis.rightMin,
                      smallestRightAxisMax: config.yAxis.smallestRightAxisMax,
                      rightMaxMessage: warningMsg.rightMaxMessage,
                      rightMinMessage: warningMsg.minMsg
                    }}
                    onYAxisChange={updateRightYAxisField}
                    onDataFormatChange={updateRightDataFormatField}
                    onTitlePlacementChange={updateRightTitlePlacement}
                    anchorConfig={{ config, lineOptions, updateConfig }}
                  />
                )}
                {visSupportsDateCategoryAxis() && (
                  <Panels.CategoryAxis config={config} value={categoryAxisPanelContextValue} />
                )}
                <Panels.HeatMapSettings config={config} updateField={updateFieldDeprecated} />
                <Panels.Regions name='Regions' />

                <Panels.Columns
                  config={config}
                  updateField={updateFieldDeprecated}
                  deleteColumn={removeAdditionalColumn}
                  hiddenColumnNames={
                    isHeatMap ? [...seriesOwnedColumnNames, ...heatMapOwnedColumnNames] : seriesOwnedColumnNames
                  }
                />
                {visHasLegend() && (
                  <Panels.Legend
                    model={{
                      visualizationType: config.visualizationType,
                      position: config.legend.position,
                      hide: config.legend.hide,
                      style: config.legend.style,
                      groupBy: config.legend.groupBy,
                      hasShape: config.legend.hasShape,
                      subStyle: config.legend.subStyle,
                      tickRotation: config.legend.tickRotation,
                      hideSuppressedLabels: config.legend.hideSuppressedLabels,
                      hideSuppressionLink: config.legend.hideSuppressionLink,
                      behavior: config.legend.behavior,
                      colorCode: config.legend.colorCode,
                      axisAlign: config.legend.axisAlign,
                      highlightOnHover: config.legend.highlightOnHover,
                      seriesHighlight: config.legend.seriesHighlight,
                      reverseLabelOrder: config.legend.reverseLabelOrder,
                      hideBorder: config.legend.hideBorder,
                      singleRow: config.legend.singleRow,
                      verticalSorted: config.legend.verticalSorted,
                      label: config.legend.label,
                      description: config.legend.description,
                      unified: config.legend.unified,
                      expandForecastConfidenceIntervals: config.legend.expandForecastConfidenceIntervals,
                      hasSuppressionData: Boolean(
                        config.preliminaryData?.some(pd => pd.label && pd.type === 'suppression' && pd.value)
                      ),
                      supportsClicking: visSupportsClickingLegend(),
                      hasDynamicCategory,
                      hasMultipleSeries,
                      supportsColorCategory: supportsLegendColorCategory,
                      supportsAxisAlign: visHasLegendAxisAlign(),
                      supportsSelectableValues: visHasSelectableLegendValues,
                      supportsForecastConfidenceIntervalExpansion: supportsForecastConfidenceIntervalExpansion(
                        config.visualizationType,
                        config.series
                      ),
                      colorCodeByCategory,
                      tooltipsSingleSeries: config.tooltips.singleSeries,
                      groupByOptions: getColumns(),
                      colorCodeOptions: supportsLegendColorCategory ? getDataValueOptions(data) : [],
                      isolateOptions: legendIsolateOptions
                    }}
                    onFieldChange={updateLegendField}
                    onBehaviorChange={updateLegendBehavior}
                    onSeriesHighlightChange={updateSeriesIsolateValues}
                    onShowAll={handleShowAll}
                  />
                )}
                {visSupportsFilters() && (
                  <>
                    {!isBarRace && (
                      <Panels.Filters
                        config={config}
                        updateField={updateField}
                        rawData={rawData}
                        hasFootnotes={isDashboard}
                      />
                    )}
                    <Panels.Footnotes config={config} updateField={updateField} datasets={datasets} />
                  </>
                )}
                <Panels.Visual name='Visual' />
                {!isBarRace && !['Network', 'Dendrogram'].includes(config.visualizationType) && (
                  <Panels.PatternSettings name='PatternSettings' />
                )}
                <Panels.DataTable
                  config={config}
                  columns={Object.keys(data[0] || {})}
                  updateField={updateFieldDeprecated}
                  isDashboard={isDashboard}
                  isLoadedFromUrl={isLoadedFromUrl}
                />
                {!isBarRace && !['Network', 'Dendrogram'].includes(config.visualizationType) && (
                  <Panels.Annotate name='Text Annotations' />
                )}
                {/* {(config.visualizationType === 'Bar' || config.visualizationType === 'Line') && <Panels.DateHighlighting name='Date Highlighting' />} */}
                <Panels.MarkupVariables config={config} data={rawData} updateField={updateField} />
                <Panels.SmallMultiples name='Small Multiples' />
              </Accordion>
              {!isDashboard && <ModernStylesAction />}
              {config.type !== 'Spark Line' && (
                <AdvancedEditor
                  loadConfig={updateConfig}
                  config={config}
                  convertStateToConfig={chartConvertStateToConfig}
                  defaultExpanded={config.visualizationType === 'HeatMap'}
                />
              )}
            </>
          )
        }}
      </BaseEditorPanel>

      {showConversionModal && (
        <PaletteConversionModal
          onConfirm={handleConversionConfirm}
          onCancel={handleConversionCancel}
          onReturnToV1={handleReturnToV1}
          paletteName={pendingPaletteSelection?.palette}
          message={config.general?.palette?.version === '2.0' ? V21_PALETTE_CONVERSION_MESSAGE : undefined}
        />
      )}
    </EditorPanelContext.Provider>
  )
}

export default EditorPanel
