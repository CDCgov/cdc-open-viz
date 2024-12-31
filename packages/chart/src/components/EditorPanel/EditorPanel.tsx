import { useState, useEffect, useCallback, memo, useContext } from 'react'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import chroma from 'chroma-js'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import Layout from '@cdc/core/components/Layout'

// @cdc/core
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Icon from '@cdc/core/components/ui/Icon'
import ColumnsEditor from '@cdc/core/components/EditorPanel/ColumnsEditor'
import DataTableEditor from '@cdc/core/components/EditorPanel/DataTableEditor'
import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import { viewports } from '@cdc/core/helpers/getViewport'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'

// chart components
import Panels from './components/Panels'

// cdc additional
import { useEditorPermissions } from './useEditorPermissions'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import ConfigContext from '../../ConfigContext'
import useReduceData from '../../hooks/useReduceData'
import useRightAxis from '../../hooks/useRightAxis'
import WarningImage from '../../images/warning.svg'
import useMinMax from '../../hooks/useMinMax'

import { type ChartContext } from '../../types/ChartContext'
import { type ChartConfig } from '../../types/ChartConfig'

import './editor-panel.scss'
import { Anchor } from '@cdc/core/types/Axis'
import EditorPanelContext from './EditorPanelContext'
import _ from 'lodash'
import { adjustedSymbols as symbolCodes } from '@cdc/core/helpers/footnoteSymbols'
import { updateFieldRankByValue } from './helpers/updateFieldRankByValue'

interface PreliminaryProps {
  config: ChartConfig
  updateConfig: Function
  data: Record<string, any>[]
}

const PreliminaryData: React.FC<PreliminaryProps> = ({ config, updateConfig, data }) => {
  const isCombo = config.visualizationType === 'Combo'
  const lineSeriesExists = config.runtime.lineSeriesKeys?.length > 0
  const barSeriesExists = config.runtime.barSeriesKeys?.length > 0
  const hasComboLineSeries = isCombo && lineSeriesExists
  const hasComboBarSeries = isCombo && barSeriesExists

  const getColumnOptions = () => {
    return _.uniq(_.flatMap(data, _.keys))
  }

  const getTypeOptions = () => {
    return config.visualizationType === 'Line' || hasComboLineSeries ? ['effect', 'suppression'] : ['suppression']
  }

  const lineCodes = {
    'Dashed Small': '\u002D \u002D \u002D',
    'Dashed Medium': '\u2013 \u2013',
    'Dashed Large': '\u2014 \u2013',
    'Open Circles': '\u25EF',
    'Filled Circles': ''
  }

  const getStyleOptions = type => {
    const options = Object.keys(lineCodes)
    if (type === 'suppression') {
      return options.slice(0, -2)
    } else {
      return options
    }
  }

  const getSymbolOptions = () => {
    if (config.visualizationType === 'Bar' || hasComboBarSeries) {
      return Object.keys(symbolCodes)
    }
  }

  let removeColumn = i => {
    let preliminaryData = []

    if (config.preliminaryData) {
      preliminaryData = [...config.preliminaryData]
    }

    preliminaryData.splice(i, 1)

    updateConfig({ ...config, preliminaryData })
  }

  let addColumn = () => {
    const defaultType = config.visualizationType === 'Line' ? 'effect' : 'suppression'
    let preliminaryData = config.preliminaryData ? [...config.preliminaryData] : []
    const defaultValues = {
      type: defaultType,
      seriesKey: '',
      label: 'Suppressed',
      column: '',
      value: '',
      style: '',
      displayTooltip: true,
      displayLegend: true,
      displayTable: true,
      symbol: '',
      iconCode: '',
      lineCode: '',
      hideBarSymbol: false,
      hideLineStyle: false,
      circleSize: 6,
      displayGray: true
    }
    preliminaryData.push(defaultValues)
    updateConfig({ ...config, preliminaryData })
  }

  let update = (fieldName, value, i) => {
    let preliminaryData = []

    if (config.preliminaryData) {
      preliminaryData = [...config.preliminaryData]
    }

    preliminaryData[i][fieldName] = value
    if (fieldName === 'symbol') {
      preliminaryData[i]['iconCode'] = symbolCodes[value]
    }
    if (fieldName === 'style') {
      preliminaryData[i]['lineCode'] = lineCodes[value]
    }
    updateConfig({ ...config, preliminaryData })
  }

  return (
    <>
      {config.preliminaryData &&
        config.preliminaryData?.map(
          (
            {
              displayGray,
              circleSize,
              column,
              displayLegend,
              displayTable,
              displayTooltip,
              label,
              seriesKey,
              style,
              symbol,
              type,
              value,
              hideBarSymbol,
              hideLineStyle
            },
            i
          ) => {
            return (
              <div key={`preliminaryData-${i}`} className='edit-block'>
                <p> {type === 'suppression' ? 'Suppressed' : 'Effect'} Data</p>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={event => {
                    event.preventDefault()
                    removeColumn(i)
                  }}
                >
                  Remove
                </button>

                <Select
                  value={type}
                  initial={config.visualizationType == 'Bar' ? '' : 'Select'}
                  fieldName='type'
                  label='Type'
                  updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                  options={getTypeOptions()}
                />
                {type === 'suppression' ? (
                  <>
                    <Select
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              {' '}
                              Without a selected "Data Series", the suppression symbol will be applied for all series in
                              the current dataset visualization. However, choosing a specific "data series" will isolate
                              the suppression to that series.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      value={column}
                      initial='Select'
                      fieldName='column'
                      label='Add Data Series'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                      options={config.runtime?.seriesKeys}
                    />
                    <TextField
                      value={value}
                      fieldName='value'
                      label='Suppressed Data  Value'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                    />
                    {(hasComboLineSeries || config.visualizationType === 'Line') && (
                      <>
                        <Select
                          tooltip={
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>
                                  The recommended approach for presenting data is to include a footnote indicating any
                                  data suppression.
                                </p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                          value={style}
                          initial='Select'
                          fieldName='style'
                          label={'suppression line style'}
                          updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          options={getStyleOptions(type)}
                        />
                        <CheckBox
                          value={hideLineStyle}
                          fieldName='hideLineStyle'
                          label='Hide Suppressed line Style'
                          updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                        />
                      </>
                    )}

                    {(hasComboBarSeries || config.visualizationType === 'Bar') && (
                      <>
                        <Select
                          tooltip={
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>
                                  A symbol is <i>required</i> to indicate suppressed data. We suggest "double
                                  asterisks." If "double asterisks" are already used elsewhere (e.g., footnotes), please
                                  select an alternative symbol from the menu to denote data suppression.
                                </p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                          value={symbol}
                          initial='Select'
                          fieldName='symbol'
                          label={config.visualizationType === 'Combo' ? 'suppression bar symbol' : 'suppression symbol'}
                          updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                          options={getSymbolOptions()}
                        />
                        <CheckBox
                          value={hideBarSymbol}
                          fieldName='hideBarSymbol'
                          label='Hide Suppressed Bar Symbol  '
                          updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                        />
                      </>
                    )}

                    <TextField
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>This label will display in the tooltip and legend.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      value={label ? label : 'Suppressed'}
                      fieldName='label'
                      label='Suppressed Data Label'
                      placeholder=''
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                    />
                    <CheckBox
                      display={config.visualizationSubType === 'regular'}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              Deselecting the "Display In Tooltips" option prevents suppressed values from appearing in
                              tooltips.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      value={displayTooltip}
                      fieldName='displayTooltip'
                      label='Display in tooltips'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                    />
                    <CheckBox
                      display={config.visualizationSubType === 'regular'}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              Deselecting "Display in Legend" indicates that you do not want to display suppressed data
                              in the legend.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      value={displayLegend}
                      fieldName='displayLegend'
                      label='Display in legend'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                    />
                    <CheckBox
                      display={config.visualizationSubType === 'regular'}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              Deselecting "Display In Data Table" indicates that you do not want to display suppressed
                              data in the data table.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      value={displayTable}
                      fieldName='displayTable'
                      label='Display in table'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                    />
                    <CheckBox
                      display={config.visualizationSubType === 'regular'}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Selecting this option will apply to chart, tooltip hover, legend, and data table.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      value={displayGray}
                      fieldName='displayGray'
                      label='Highlight Suppressed Data In Gray'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                    />
                  </>
                ) : (
                  <>
                    <Select
                      value={seriesKey}
                      initial='Select'
                      fieldName='seriesKey'
                      label='ASSOCIATE TO SERIES'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                      options={config.runtime.lineSeriesKeys ?? config.runtime?.seriesKeys}
                    />
                    <Select
                      value={column}
                      initial='Select'
                      fieldName='column'
                      label='COLUMN WITH CONFIGURATION VALUE'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                      options={getColumnOptions()}
                    />
                    <TextField
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              If 'Filled Circles' is selected as the style, this field is optional, and the style
                              'Filled Circles' will apply to all points within the associated series data.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      value={value}
                      fieldName='value'
                      label='VALUE TO TRIGGER'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                    />
                    <Select
                      value={style}
                      initial='Select'
                      fieldName='style'
                      label='Style'
                      updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                      options={getStyleOptions(type)}
                    />
                    {style.includes('Circles') && (
                      <TextField
                        className='number-narrow'
                        type='number'
                        value={circleSize}
                        fieldName='circleSize'
                        label='circle size'
                        updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                      />
                    )}
                    {style !== 'Filled Circles' && (
                      <TextField
                        value={label}
                        fieldName='label'
                        label='Label'
                        placeholder=''
                        updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                      />
                    )}
                  </>
                )}
              </div>
            )
          }
        )}

      <button type='button' onClick={addColumn} className='btn btn-primary full-width'>
        {config.visualizationType === 'Line'
          ? 'Add Special Line'
          : config.visualizationType === 'Bar'
          ? ' Add Special Bar'
          : 'Add Special Bar/Line'}
      </button>
    </>
  )
}

interface CategoricalAxisProps {
  config: ChartConfig
  updateConfig: Function
  display: boolean
}

const CategoricalAxis: React.FC<CategoricalAxisProps> = ({ config, updateConfig, display }) => {
  const maxHeight = config?.yAxis?.maxValue

  const totalEnteredHeight =
    config?.yAxis?.categories?.reduce((sum, obj) => sum + (parseFloat(obj.height) || 0), 0) || 0

  const removeColumn = i => {
    let categories = []

    if (config.yAxis.categories) {
      categories = [...config.yAxis.categories]
    }

    categories.splice(i, 1)

    updateConfig({ ...config, yAxis: { ...config.yAxis, categories } })
  }

  const getDarkerColor = () => {
    const timesDarkened = config.yAxis?.categories?.length
    const darkeningFactor = 0.4
    const baseColor = '#ddd'
    return chroma(baseColor)
      .darken(darkeningFactor * timesDarkened)
      .hex()
  }

  const addColumn = () => {
    const categories = config.yAxis.categories ? [...config.yAxis.categories] : []
    const defaultValues = {
      label: 'Label ' + Number(categories.length + 1),
      height: '',
      color: getDarkerColor()
    }
    categories.push(defaultValues)
    updateConfig({ ...config, yAxis: { ...config.yAxis, categories: categories } })
  }

  const update = (fieldName, value, i) => {
    let categories = []

    if (config.yAxis.categories) {
      categories = [...config.yAxis.categories]
    }

    categories[i][fieldName] = value

    updateConfig({ ...config, yAxis: { ...config.yAxis, categories } })
  }

  if (!display) {
    return <></>
  }

  return (
    <>
      {config.yAxis.type === 'categorical' &&
        config.yAxis.categories?.map(({ label, color, height }, i) => {
          return (
            <div key={`preliminaryData-${i}`} className='edit-block'>
              <p>Axis Category {i + 1}</p>
              <button
                type='button'
                className='btn btn-danger'
                onClick={event => {
                  event.preventDefault()
                  removeColumn(i)
                }}
              >
                Remove
              </button>
              <TextField
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        {' '}
                        Category Height will be ignored for the last category. The last category will fill the rest of
                        the axis height.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
                type='number'
                value={height}
                fieldName='height'
                label='Category Height'
                updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
              />
              {Number(totalEnteredHeight) > Number(maxHeight) && config.yAxis.categories.length - 1 === i && (
                <span style={{ color: 'red', display: 'block', fontSize: '15px' }}>
                  Update Max value to show all categories
                </span>
              )}

              <div className='two-col-inputs'>
                <TextField
                  value={color}
                  fieldName='color'
                  label='Color'
                  updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                />
                <TextField
                  value={label}
                  fieldName='label'
                  label='Label'
                  updateField={(_, __, fieldName, value) => update(fieldName, value, i)}
                />
              </div>
            </div>
          )
        })}

      <button type='button' onClick={addColumn} className='btn btn-primary full-width'>
        Add Axis Category
      </button>
    </>
  )
}

const EditorPanel = () => {
  const {
    config,
    updateConfig,
    tableData,
    transformedData: data,
    loading,
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

  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, unfilteredData)
  const properties = { data, config }
  const { leftMax, rightMax } = useMinMax(properties)

  const {
    visHasAnchors,
    visHasBrushChart,
    visHasCategoricalAxis,
    visHasLegend,
    visHasLegendAxisAlign,
    visHasLegendColorCategory,
    visHasSelectableLegendValues,
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
    visSupportsFilters,
    visSupportsLeftValueAxis,
    visSupportsPreliminaryData,
    visSupportsRankByValue,
    visSupportsResponsiveTicks,
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
          axis: 'Left'
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

  const { hasRightAxis } = useRightAxis({ config: config, yMax: config.yAxis.size, data: config.data, updateConfig })

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
    // DEV-8008 - Remove Bar styling when Line is converted to Bar
    if (updatedConfig.visualizationType === 'Line') {
      updatedConfig.visualizationSubType = 'regular'
      updatedConfig.barStyle = 'flat'
      updatedConfig.isLollipopChart = false
    }

    if (['Bump Chart'].includes(updatedConfig.visualizationType)) {
      updatedConfig.xAxis.type = 'date-time'
    }
  }

  const updateField = (section, subsection, fieldName, newValue) => {
    if (isDebug)
      console.log(
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

  const [displayPanel, setDisplayPanel] = useState(true)
  const [displayViewportOverrides, setDisplayViewportOverrides] = useState(false)

  if (loading) {
    return null
  }

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
    let newExclusion = [...config.exclusions.keys]
    newExclusion.push(exclusionKey)

    let payload = { ...config.exclusions, keys: newExclusion }
    updateConfig({ ...config, exclusions: payload })
  }

  const removeExclusion = excludeValue => {
    let exclusionsIndex = -1
    let exclusions = [...config.exclusions.keys]

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

      if (exclusions.length === 0) {
        delete newExclusionsPayload.exclusions.keys
      }

      updateConfig(newExclusionsPayload)
    }
  }

  const getColumns = (filter = true) => {
    let columns = {}
    unfilteredData.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    if (filter) {
      const { lower, upper } = config.confidenceKeys || {}
      Object.keys(columns).forEach(key => {
        if (
          (config.series && config.series.filter(series => series.dataKey === key).length > 0) ||
          (config.confidenceKeys &&
            Object.keys(config.confidenceKeys).includes(key) &&
            ((lower && upper) || lower || upper) &&
            key !== lower &&
            key !== upper)
        ) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
  }

  const getLegendStyleOptions = (option: 'style' | 'subStyle'): string[] => {
    const options: string[] = []

    switch (option) {
      case 'style':
        options.push('circles', 'boxes')
        if (
          config.visualizationType === 'Bar' &&
          (!['right', 'left'].includes(config.legend.position) || !config.legend.position)
        ) {
          options.push('gradient')
        }
        if (config.visualizationType === 'Line') {
          options.push('lines')
        }
        break
      case 'subStyle':
        if (config.visualizationType === 'Bar') {
          options.push('linear blocks')
        } else {
          options.push('linear blocks', 'smooth')
        }

        break
    }
    return options
  }

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

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
    updateConfig({
      ...config,
      showEditorPanel: !displayPanel
    })
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    if (false === missingRequiredSections()) {
      delete strippedState.newViz
    }
    delete strippedState.runtime

    return strippedState
  }

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()
      setParentConfig(newConfig)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  // when the orientation changes, swap x and y axis anchors
  useEffect(() => {
    const prevXAnchors = config.xAxis.anchors.length > 0 ? config.xAxis.anchors : []
    const prevYAnchors = config.yAxis.anchors.length > 0 ? config.yAxis.anchors : []

    updateConfig({
      ...config,
      xAxis: {
        ...config.xAxis,
        anchors: prevYAnchors
      },
      yAxis: {
        ...config.yAxis,
        anchors: prevXAnchors
      }
    })
  }, [config.orientation])

  // Set paired bars to be horizontal, even though that option doesn't display
  useEffect(() => {
    if (config.visualizationType === 'Paired Bar') {
      updateConfig({
        ...config,
        orientation: 'horizontal'
      })
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    if (config.orientation === 'horizontal') {
      updateConfig({
        ...config,
        lollipopShape: config.lollipopShape
      })
    }
  }, [config.isLollipopChart, config.lollipopShape]) // eslint-disable-line

  /// temporary force orientation untill we support Vartical deviaton bar
  useEffect(() => {
    if (config.visualizationType === 'Deviation Bar') {
      updateConfig({ ...config, orientation: 'horizontal' })
    }
  }, [config.visualizationType])

  const ExclusionsList = useCallback(() => {
    const exclusions = [...config.exclusions.keys]
    return (
      <ul className='series-list'>
        {exclusions.map((exclusion, index) => {
          return (
            <li key={exclusion}>
              <div className='series-list__name' data-title={exclusion}>
                <div className='series-list__name--text'>{exclusion}</div>
              </div>
              <button className='series-list__remove' onClick={() => removeExclusion(exclusion)}>
                &#215;
              </button>
            </li>
          )
        })}
      </ul>
    )
  }, [config]) // eslint-disable-line

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

  const section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
  const [warningMsg, setWarningMsg] = useState({ maxMsg: '', minMsg: '', rightMaxMessage: '', minMsgRight: '' })

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
    const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
    let message = ''

    switch (true) {
      case isLogarithmicAxis && ['Line', 'Combo', 'Bar'].includes(config.visualizationType) && enteredValue < 0:
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
        message = isLogarithmicAxis ? 'Value must be equal to 0' : 'Value must be less than or equal to 0'
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
    'Line',
    'Bar',
    'Forecasting',
    'Scatter Plot',
    'Paired Bar',
    'Deviation Bar'
  ]

  const columnsOptions = [
    <option value='' key={'Select Option'}>
      - Select Option -
    </option>
  ]

  if (config.data && config.series) {
    Object.keys(config.data?.[0] || []).map(colName => {
      // OMIT ANY COLUMNS THAT ARE IN DATA SERIES!
      const found = config?.series.some(series => series.dataKey === colName)
      if (colName !== config.xAxis.dataKey && !found) {
        // if not the index then add it
        return columnsOptions.push(
          <option value={colName} key={colName}>
            {colName}
          </option>
        )
      }
    })

    let columnsByKey = {}
    config.data.forEach(datum => {
      Object.keys(datum).forEach(key => {
        columnsByKey[key] = columnsByKey[key] || []
        const value = typeof datum[key] === 'number' ? datum[key].toString() : datum[key]

        if (columnsByKey[key].indexOf(value) === -1) {
          columnsByKey[key].push(value)
        }
      })
    })
  }

  // for pie charts
  if (!config.data && data) {
    if (!data[0]) return
    Object.keys(data[0]).map(colName => {
      // OMIT ANY COLUMNS THAT ARE IN DATA SERIES!
      const found = data.some(el => el.dataKey === colName)
      if (colName !== config.xAxis.dataKey && !found) {
        // if not the index then add it
        return columnsOptions.push(
          <option value={colName} key={colName}>
            {colName}
          </option>
        )
      }
    })

    let columnsByKey = {}
    data.forEach(datum => {
      Object.keys(datum).forEach(key => {
        columnsByKey[key] = columnsByKey[key] || []
        const value = typeof datum[key] === 'number' ? datum[key].toString() : datum[key]

        if (columnsByKey[key].indexOf(value) === -1) {
          columnsByKey[key].push(value)
        }
      })
    })
  }

  const removeAdditionalColumn = columnName => {
    const newColumns = _.cloneDeep(config.columns)

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

  // prettier-ignore
  const {
    highlightedBarValues,
    highlightedSeriesValues,
    handleUpdateHighlightedBar,
    handleAddNewHighlightedBar,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBarColor,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBorderWidth
   } = useHighlightedBars(config, updateConfig)

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
  const getLegendColumns = () => {
    const colorCodeData = data.map(d => d[config.legend.colorCode])
    return colorCodeByCategory ? colorCodeData : getColumns(false).filter(d => d !== config.xAxis.dataKey)
  }

  const updateSeriesIsolateValues = updatedValues => {
    updateConfig({ ...config, legend: { ...config.legend, seriesHighlight: updatedValues } })
  }

  const updateBehavior = (section, fieldName, newValue) => {
    const sectionValue = { ...config[section], [fieldName]: newValue }
    const updatedConfig = { ...config, [section]: sectionValue }

    if (newValue === 'highlight' && config.legend.seriesHighlight?.length) {
      updatedConfig.legend.seriesHighlight.length = 0
    }

    updateConfig(updatedConfig)
  }

  const updateViewportOverrides = (property, viewport, numTicks) => {
    const propertyObject = { ...config.xAxis[property] }
    propertyObject[viewport] = numTicks
    const updatedConfig = { ...config, xAxis: { ...config.xAxis, [property]: propertyObject } }

    updateConfig(updatedConfig)
  }

  const hasDynamicCategory = ![undefined, '- Select - '].includes(config.series?.[0]?.dynamicCategory)
  const hasMultipleSeries = config.series?.length > 1

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
    updateField,
    warningMsg,
    highlightedBarValues,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBar,
    handleRemoveHighlightedBar,
    isPaletteReversed: config.isPaletteReversed,
    highlightedSeriesValues,
    handleUpdateHighlightedBorderWidth,
    handleUpdateHighlightedBarColor,
    setLollipopShape
  }

  return (
    <EditorPanelContext.Provider value={editorContextValues}>
      <ErrorBoundary component='EditorPanel'>
        <Layout.Sidebar
          displayPanel={displayPanel}
          isDashboard={isDashboard}
          title={'Configure Chart'}
          onBackClick={onBackClick}
        >
          <Accordion allowZeroExpanded={true}>
            <Panels.General name='General' />
            <Panels.ForestPlot name='Forest Plot Settings' />
            <Panels.Sankey name='Sankey' />
            {config.visualizationType !== 'Pie' &&
              config.visualizationType !== 'Forest Plot' &&
              config.visualizationType !== 'Sankey' && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Data Series{' '}
                      {(!config.series ||
                        config.series.length === 0 ||
                        (config.visualizationType === 'Paired Bar' && config.series.length < 2)) &&
                        !config.dynamicSeries && <WarningImage width='25' className='warning-icon' />}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {/* FEATURE to be reintroduced by DEV-9747 */}
                    {/* {visSupportsDynamicSeries() && (
                      <CheckBox
                        value={config.dynamicSeries}
                        fieldName='dynamicSeries'
                        label='Dynamically generate series'
                        updateField={updateField}
                      />
                    )} */}
                    {config.dynamicSeries && config.visualizationType === 'Line' && (
                      <Select
                        fieldName='dynamicSeriesType'
                        value={config.dynamicSeriesType}
                        label='Series Type'
                        initial='Select'
                        updateField={updateField}
                        options={['Line', 'dashed-sm', 'dashed-md', 'dashed-lg']}
                      />
                    )}
                    {config.dynamicSeries &&
                      config.visualizationType === 'Line' &&
                      config.dynamicSeriesType === 'Line' && (
                        <Select
                          fieldName='dynamicSeriesLineType'
                          value={config.dynamicSeriesLineType ? config.dynamicSeriesLineType : 'curveLinear'}
                          label='Line Type'
                          initial='Select'
                          updateField={updateField}
                          options={Object.keys(approvedCurveTypes).map(curveName => approvedCurveTypes[curveName])}
                        />
                      )}
                    {(!visSupportsDynamicSeries() || !config.dynamicSeries) && (
                      <>
                        {(!config.series || config.series.length === 0) &&
                          !config.dynamicSeries &&
                          config.visualizationType !== 'Paired Bar' && (
                            <p className='warning'>At least one series is required</p>
                          )}
                        {(!config.series || config.series.length === 0 || config.series.length < 2) &&
                          config.visualizationType === 'Paired Bar' && (
                            <p className='warning'>
                              Select two data series for paired bar chart (e.g., Male and Female).
                            </p>
                          )}
                        <>
                          <Select
                            fieldName='visualizationType'
                            label='Add Data Series'
                            initial='Select'
                            onChange={e => {
                              if (e.target.value !== '' && e.target.value !== 'Select') {
                                addNewSeries(e.target.value)
                              }
                              e.target.value = ''
                            }}
                            options={getColumns()}
                          />
                          {config.series && config.series.length !== 0 && (
                            <Panels.Series.Wrapper getColumns={getColumns}>
                              <fieldset>
                                <legend className='edit-label float-left'>Displaying</legend>
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>
                                      A data series is a set of related data points plotted in a chart and typically
                                      represented in the chart legend.
                                    </p>
                                  </Tooltip.Content>
                                </Tooltip>
                              </fieldset>

                              <DragDropContext
                                onDragEnd={({ source, destination }) =>
                                  handleSeriesChange(source.index, destination.index)
                                }
                              >
                                <Droppable droppableId='filter_order'>
                                  {/* prettier-ignore */}
                                  {provided => {
                                    return (
                                      <ul {...provided.droppableProps} className='series-list' ref={provided.innerRef}>
                                        <Panels.Series.List
                                          series={config.series}
                                          getItemStyle={getItemStyle}
                                          sortableItemStyles={sortableItemStyles}
                                          chartsWithOptions={chartsWithOptions}
                                        />
                                        {provided.placeholder}
                                      </ul>
                                    )
                                  }}
                                </Droppable>
                              </DragDropContext>
                            </Panels.Series.Wrapper>
                          )}
                        </>
                        {((config.series && config.series.length && config.visualizationType === 'Bar') ||
                          (config.series && config.series.length <= 1 && config.visualizationType === 'Line')) && (
                          <>
                            <span className='divider-heading'>Confidence Keys</span>
                            <Select
                              value={config.confidenceKeys.upper || ''}
                              section='confidenceKeys'
                              fieldName='upper'
                              label='Upper'
                              updateField={updateField}
                              initial='Select'
                              options={getColumns()}
                            />
                            <Select
                              value={config.confidenceKeys.lower || ''}
                              section='confidenceKeys'
                              fieldName='lower'
                              label='Lower'
                              updateField={updateField}
                              initial='Select'
                              options={getColumns()}
                            />
                          </>
                        )}
                        {visSupportsRankByValue() && config.series && config.series.length === 1 && (
                          <Select
                            value={config.rankByValue}
                            fieldName='rankByValue'
                            label='Rank by Value'
                            initial='Select'
                            updateField={(_section, _subsection, _fieldName, value) => {
                              const [newConfig, newData] = updateFieldRankByValue(config, value, data)
                              updateConfig(newConfig, newData)
                            }}
                            options={['asc', 'desc']}
                          />
                        )}
                        {/* {visHasDataSuppression() && <DataSuppression config={config} updateConfig={updateConfig} data={data} />} */}
                        {visSupportsPreliminaryData() && (
                          <PreliminaryData config={config} updateConfig={updateConfig} data={data} />
                        )}
                      </>
                    )}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
            <Panels.BoxPlot name='Measures' />
            {/* Left Value Axis */}
            {visSupportsLeftValueAxis() && (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {config.visualizationType === 'Pie'
                      ? 'Data Format'
                      : config.orientation === 'vertical'
                      ? 'Left Value Axis'
                      : 'Value Axis'}
                    {config.visualizationType === 'Pie' && !config.yAxis.dataKey && (
                      <WarningImage width='25' className='warning-icon' />
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.visualizationType === 'Pie' && (
                    <Select
                      value={config.yAxis.dataKey || ''}
                      section='yAxis'
                      fieldName='dataKey'
                      label='Data Column'
                      initial='Select'
                      required={true}
                      updateField={updateField}
                      options={getColumns(false)}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Select the source data to be visually represented.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                  )}
                  {config.visualizationType !== 'Pie' && (
                    <>
                      <label>
                        <span className='edit-label'>
                          Axis Type
                          <Tooltip style={{ textTransform: 'none', display: 'inline-block' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              Select 'Numeric (Linear Scale)' for uniform scaling, 'Numeric (Logarithmic Scale)' for
                              exponential data, or 'Categorical' for discrete categories.
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                        <select
                          value={config.yAxis.type}
                          onChange={e =>
                            updateConfig({
                              ...config,
                              yAxis: {
                                ...config.yAxis,
                                type: e.target.value
                              }
                            })
                          }
                        >
                          <option value='linear'>Numeric (Linear Scale)</option>
                          {config.visualizationSubType !== 'stacked' && (
                            <option value='logarithmic'>Numeric (Logarithmic Scale)</option>
                          )}
                          {config.orientation !== 'horizontal' && <option value='categorical'>Categorical</option>}
                        </select>
                      </label>
                      <CategoricalAxis
                        config={config}
                        updateConfig={updateConfig}
                        data={data}
                        display={visHasCategoricalAxis()}
                      />

                      <TextField
                        display={!visHasCategoricalAxis()}
                        value={config.yAxis.label}
                        section='yAxis'
                        fieldName='label'
                        label='Label '
                        updateField={updateField}
                      />
                      {config.runtime.seriesKeys &&
                        config.runtime.seriesKeys.length === 1 &&
                        !['Box Plot', 'Deviation Bar', 'Forest Plot'].includes(config.visualizationType) && (
                          <CheckBox
                            value={config.isLegendValue}
                            fieldName='isLegendValue'
                            label='Use Legend Value in Hover'
                            updateField={updateField}
                          />
                        )}

                      <TextField
                        display={!visHasCategoricalAxis()}
                        value={config.yAxis.numTicks}
                        placeholder='Auto'
                        type='number'
                        section='yAxis'
                        fieldName='numTicks'
                        label='Number of ticks'
                        className='number-narrow'
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon
                                display='question'
                                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                              />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                Apporoximate number of ticks. Other factors such as space available and data may change
                                the exact number of ticks used.
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                        updateField={updateField}
                      />
                      <TextField
                        value={config.yAxis.size}
                        type='number'
                        section='yAxis'
                        fieldName='size'
                        label={config.orientation === 'horizontal' ? 'Size (Height)' : 'Size (Width)'}
                        className='number-narrow'
                        updateField={updateField}
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon
                                display='question'
                                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                              />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>{`Increase the size if elements in the ${config.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`}</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                      <TextField
                        display={!visHasCategoricalAxis()}
                        value={config.yAxis.labelOffset}
                        section='yAxis'
                        fieldName='labelOffset'
                        label='Label offset'
                        type='number'
                        className='number-narrow'
                        updateField={updateField}
                      />
                      {config.orientation === 'horizontal' && (
                        <CheckBox
                          value={config.isResponsiveTicks}
                          fieldName='isResponsiveTicks'
                          label='Use Responsive Ticks'
                          updateField={updateField}
                        />
                      )}
                      {(config.orientation === 'vertical' || !config.isResponsiveTicks) && (
                        <TextField
                          display={!visHasCategoricalAxis()}
                          value={config.yAxis.tickRotation || 0}
                          type='number'
                          min={0}
                          section='yAxis'
                          fieldName='tickRotation'
                          label='Tick rotation (Degrees)'
                          className='number-narrow'
                          updateField={updateField}
                        />
                      )}
                      {config.isResponsiveTicks && config.orientation === 'horizontal' && (
                        <TextField
                          value={config.xAxis.maxTickRotation}
                          type='number'
                          min={0}
                          section='xAxis'
                          fieldName='maxTickRotation'
                          label='Max Tick Rotation'
                          className='number-narrow'
                          updateField={updateField}
                          tooltip={
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon
                                  display='question'
                                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>Degrees ticks will be rotated if values overlap, especially in smaller viewports.</p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                        />
                      )}

                      {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
                      {/* <TextField value={config.yAxis.axisPadding} type='number' max={10} min={0} section='yAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateField} /> */}
                      {visSupportsValueAxisGridLines() && (
                        <CheckBox
                          value={config.yAxis.gridLines}
                          section='yAxis'
                          fieldName='gridLines'
                          label='Show Gridlines'
                          updateField={updateField}
                        />
                      )}
                      {visSupportsValueAxisGridLines() && (
                        <CheckBox
                          value={config.yAxis.labelsAboveGridlines}
                          section='yAxis'
                          fieldName='labelsAboveGridlines'
                          label='Tick labels above gridlines'
                          updateField={updateField}
                          disabled={!config.yAxis.gridLines}
                          title={!config.yAxis.gridLines ? 'Show gridlines to enable' : ''}
                        />
                      )}
                      {visSupportsYPadding() && (
                        <CheckBox
                          value={config.yAxis.enablePadding}
                          section='yAxis'
                          fieldName='enablePadding'
                          label='Add Padding to Value Axis Scale'
                          updateField={updateField}
                        />
                      )}
                      {config.yAxis.enablePadding && visSupportsYPadding() && (
                        <TextField
                          type='number'
                          section='yAxis'
                          fieldName='scalePadding'
                          label='Padding Percentage'
                          className='number-narrow'
                          updateField={updateField}
                          value={config.yAxis.scalePadding}
                        />
                      )}
                    </>
                  )}
                  <span className='divider-heading'>Number Formatting</span>
                  <CheckBox
                    value={config.dataFormat.commas}
                    section='dataFormat'
                    fieldName='commas'
                    label='Add commas'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>{`Selecting this option will add commas to the left value axis, tooltip hover, and data table.`}</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <CheckBox
                    display={!visHasCategoricalAxis()}
                    value={config.dataFormat.abbreviated}
                    section='dataFormat'
                    fieldName='abbreviated'
                    label='Abbreviate Axis Values'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>{`This option abbreviates very large or very small numbers on the value axis`}</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    value={config.dataFormat.roundTo ? config.dataFormat.roundTo : 0}
                    type='number'
                    section='dataFormat'
                    fieldName='roundTo'
                    label='Round to decimal point'
                    className='number-narrow'
                    updateField={updateField}
                    min={0}
                  />{' '}
                  <div className='two-col-inputs'>
                    <TextField
                      value={config.dataFormat.prefix}
                      section='dataFormat'
                      fieldName='prefix'
                      label='Prefix'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            {config.visualizationType === 'Pie' && (
                              <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>
                            )}
                            {config.visualizationType !== 'Pie' && (
                              <p>Enter a data prefix (such as "$"), if applicable.</p>
                            )}
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <TextField
                      value={config.dataFormat.suffix}
                      section='dataFormat'
                      fieldName='suffix'
                      label='Suffix'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            {config.visualizationType === 'Pie' && (
                              <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>
                            )}
                            {config.visualizationType !== 'Pie' && (
                              <p>Enter a data suffix (such as "%"), if applicable.</p>
                            )}
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                  </div>
                  {config.orientation === 'horizontal' ? ( // horizontal - x is vertical y is horizontal
                    <>
                      {visSupportsValueAxisLine() && (
                        <CheckBox
                          value={config.xAxis.hideAxis}
                          section='xAxis'
                          fieldName='hideAxis'
                          label='Hide Axis'
                          updateField={updateField}
                        />
                      )}
                      {visSupportsValueAxisLabels() && (
                        <CheckBox
                          value={config.xAxis.hideLabel}
                          section='xAxis'
                          fieldName='hideLabel'
                          label='Hide Tick Labels'
                          updateField={updateField}
                        />
                      )}
                      {visSupportsValueAxisTicks() && (
                        <CheckBox
                          value={config.xAxis.hideTicks}
                          section='xAxis'
                          fieldName='hideTicks'
                          label='Hide Ticks'
                          updateField={updateField}
                        />
                      )}
                      {visSupportsValueAxisMax() && (
                        <TextField
                          value={config.xAxis.max}
                          section='xAxis'
                          fieldName='max'
                          label='max value'
                          type='number'
                          placeholder='Auto'
                          updateField={updateField}
                        />
                      )}
                      <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                      {visSupportsValueAxisMin() && (
                        <TextField
                          value={config.xAxis.min}
                          section='xAxis'
                          fieldName='min'
                          type='number'
                          label='min value'
                          placeholder='Auto'
                          updateField={updateField}
                        />
                      )}
                      <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
                      {config.visualizationType === 'Deviation Bar' && (
                        <>
                          <TextField
                            value={config.xAxis.target}
                            section='xAxis'
                            fieldName='target'
                            type='number'
                            label='Deviation point'
                            placeholder='Auto'
                            updateField={updateField}
                          />
                          <TextField
                            value={config.xAxis.targetLabel || 'Target'}
                            section='xAxis'
                            fieldName='targetLabel'
                            type='text'
                            label='Deviation point Label'
                            updateField={updateField}
                          />
                          <CheckBox
                            value={config.xAxis.showTargetLabel}
                            section='xAxis'
                            fieldName='showTargetLabel'
                            label='Show Deviation point label'
                            updateField={updateField}
                          />
                        </>
                      )}
                    </>
                  ) : (
                    config.visualizationType !== 'Pie' && (
                      <>
                        <CheckBox
                          display={!visHasCategoricalAxis()}
                          value={config.dataFormat.onlyShowTopPrefixSuffix}
                          section='dataFormat'
                          fieldName='onlyShowTopPrefixSuffix'
                          label='Only Show Top Prefix/Suffix'
                          updateField={updateField}
                        />
                        <CheckBox
                          display={!visHasCategoricalAxis()}
                          value={config.yAxis.hideAxis}
                          section='yAxis'
                          fieldName='hideAxis'
                          label='Hide Axis'
                          updateField={updateField}
                        />
                        <CheckBox
                          display={!visHasCategoricalAxis()}
                          value={config.yAxis.hideLabel}
                          section='yAxis'
                          fieldName='hideLabel'
                          label='Hide Tick Labels'
                          updateField={updateField}
                        />
                        <CheckBox
                          display={!visHasCategoricalAxis()}
                          value={config.yAxis.hideTicks}
                          section='yAxis'
                          fieldName='hideTicks'
                          label='Hide Ticks'
                          updateField={updateField}
                        />

                        <TextField
                          value={config.yAxis.max}
                          section='yAxis'
                          fieldName='max'
                          type='number'
                          label='left axis max value'
                          placeholder='Auto'
                          updateField={updateField}
                        />
                        <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                        {config.visualizationType !== 'Area Chart' && config.visualizationSubType !== 'stacked' && (
                          <>
                            <TextField
                              value={config.yAxis.min}
                              section='yAxis'
                              fieldName='min'
                              type='number'
                              label='left axis min value'
                              placeholder='Auto'
                              updateField={updateField}
                            />
                            <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
                          </>
                        )}
                      </>
                    )
                  )}
                  {/* start: anchors */}
                  {visHasAnchors() && config.orientation !== 'horizontal' && (
                    <div className='edit-block'>
                      <span className='edit-label column-heading'>Anchors</span>
                      <Accordion allowZeroExpanded>
                        {config.yAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem className='series-item series-item--chart' key={`yaxis-anchors-2-${index}`}>
                            <AccordionItemHeading className='series-item__title'>
                              <>
                                <AccordionItemButton className={'accordion__button accordion__button'}>
                                  Anchor {index + 1}
                                  <button
                                    className='series-list__remove'
                                    onClick={e => {
                                      e.preventDefault()
                                      const copiedAnchorGroups = [...config.yAxis.anchors]
                                      copiedAnchorGroups.splice(index, 1)
                                      updateConfig({
                                        ...config,
                                        yAxis: {
                                          ...config.yAxis,
                                          anchors: copiedAnchorGroups
                                        }
                                      })
                                    }}
                                  >
                                    Remove
                                  </button>
                                </AccordionItemButton>
                              </>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <label>
                                <span>Anchor Value</span>
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>Enter the value as its shown in the data column</p>
                                  </Tooltip.Content>
                                </Tooltip>
                                <input
                                  type='text'
                                  value={config.yAxis.anchors[index].value ? config.yAxis.anchors[index].value : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.yAxis.anchors]
                                    copiedAnchors[index].value = e.target.value
                                    updateConfig({
                                      ...config,
                                      yAxis: {
                                        ...config.yAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                <span>Anchor Color</span>
                                <input
                                  type='text'
                                  value={config.yAxis.anchors[index].color ? config.yAxis.anchors[index].color : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.yAxis.anchors]
                                    copiedAnchors[index].color = e.target.value
                                    updateConfig({
                                      ...config,
                                      yAxis: {
                                        ...config.yAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                Anchor Line Style
                                <select
                                  value={config.yAxis.anchors[index].lineStyle || ''}
                                  onChange={e => {
                                    const copiedAnchors = [...config.yAxis.anchors]
                                    copiedAnchors[index].lineStyle = e.target.value
                                    updateConfig({
                                      ...config,
                                      yAxis: {
                                        ...config.yAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                >
                                  <option>Select</option>
                                  {lineOptions.map(line => (
                                    <option key={line.key}>{line.value}</option>
                                  ))}
                                </select>
                              </label>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      <button
                        className='btn btn-primary full-width'
                        onClick={e => {
                          e.preventDefault()
                          const anchors = [...config.yAxis.anchors]
                          anchors.push({} as Anchor)
                          updateConfig({
                            ...config,
                            yAxis: {
                              ...config.yAxis,
                              anchors
                            }
                          })
                        }}
                      >
                        Add Anchor
                      </button>
                    </div>
                  )}
                  {visHasAnchors() && config.orientation === 'horizontal' && (
                    <div className='edit-block'>
                      <span className='edit-label column-heading'>Anchors</span>
                      <Accordion allowZeroExpanded>
                        {config.xAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem className='series-item series-item--chart' key={`xaxis-anchors-${index}`}>
                            <AccordionItemHeading className='series-item__title'>
                              <>
                                <AccordionItemButton className={'accordion__button accordion__button'}>
                                  Anchor {index + 1}
                                  <button
                                    className='series-list__remove'
                                    onClick={e => {
                                      e.preventDefault()
                                      const copiedAnchorGroups = [...config.xAxis.anchors]
                                      copiedAnchorGroups.splice(index, 1)
                                      updateConfig({
                                        ...config,
                                        xAxis: {
                                          ...config.xAxis,
                                          anchors: copiedAnchorGroups
                                        }
                                      })
                                    }}
                                  >
                                    Remove
                                  </button>
                                </AccordionItemButton>
                              </>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <label>
                                <span>Anchor Value</span>
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>Enter the value as its shown in the data column</p>
                                  </Tooltip.Content>
                                </Tooltip>
                                <input
                                  type='text'
                                  value={config.xAxis.anchors[index].value ? config.xAxis.anchors[index].value : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.xAxis.anchors]
                                    copiedAnchors[index].value = e.target.value
                                    updateConfig({
                                      ...config,
                                      xAxis: {
                                        ...config.xAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                <span>Anchor Color</span>
                                <input
                                  type='text'
                                  value={config.xAxis.anchors[index].color ? config.xAxis.anchors[index].color : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.xAxis.anchors]
                                    copiedAnchors[index].color = e.target.value
                                    updateConfig({
                                      ...config,
                                      xAxis: {
                                        ...config.xAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                Anchor Line Style
                                <select
                                  value={config.xAxis.anchors[index].lineStyle || ''}
                                  onChange={e => {
                                    const copiedAnchors = [...config.xAxis.anchors]
                                    copiedAnchors[index].lineStyle = e.target.value
                                    updateConfig({
                                      ...config,
                                      xAxis: {
                                        ...config.xAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                >
                                  <option>Select</option>
                                  {lineOptions.map(line => (
                                    <option key={line.key}>{line.value}</option>
                                  ))}
                                </select>
                              </label>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      <button
                        className='btn btn-primary full-width'
                        onClick={e => {
                          e.preventDefault()
                          const anchors = [...config.xAxis.anchors]
                          anchors.push({} as Anchor)
                          updateConfig({
                            ...config,
                            xAxis: {
                              ...config.xAxis,
                              anchors
                            }
                          })
                        }}
                      >
                        Add Anchor
                      </button>
                    </div>
                  )}
                  {/* end: anchors */}
                </AccordionItemPanel>
              </AccordionItem>
            )}
            {/* Right Value Axis Settings */}
            {hasRightAxis && (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Right Value Axis</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <TextField
                    value={config.yAxis.rightLabel}
                    section='yAxis'
                    fieldName='rightLabel'
                    label='Label'
                    updateField={updateField}
                  />
                  <TextField
                    value={config.yAxis.rightNumTicks}
                    placeholder='Auto'
                    type='number'
                    section='yAxis'
                    fieldName='rightNumTicks'
                    label='Number of ticks'
                    className='number-narrow'
                    updateField={updateField}
                  />
                  <TextField
                    value={config.yAxis.rightAxisSize}
                    type='number'
                    section='yAxis'
                    fieldName='rightAxisSize'
                    label='Size (Width)'
                    className='number-narrow'
                    updateField={updateField}
                  />
                  <TextField
                    value={config.yAxis.rightLabelOffsetSize}
                    type='number'
                    section='yAxis'
                    fieldName='rightLabelOffsetSize'
                    label='Label Offset'
                    className='number-narrow'
                    updateField={updateField}
                  />

                  <span className='divider-heading'>Number Formatting</span>
                  <CheckBox
                    value={config.dataFormat.rightCommas}
                    section='dataFormat'
                    fieldName='rightCommas'
                    label='Add commas'
                    updateField={updateField}
                  />
                  <TextField
                    value={config.dataFormat.rightRoundTo}
                    type='number'
                    section='dataFormat'
                    fieldName='rightRoundTo'
                    label='Round to decimal point'
                    className='number-narrow'
                    updateField={updateField}
                    min={0}
                  />
                  <div className='two-col-inputs'>
                    <TextField
                      value={config.dataFormat.rightPrefix}
                      section='dataFormat'
                      fieldName='rightPrefix'
                      label='Prefix'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            {config.visualizationType === 'Pie' && (
                              <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>
                            )}
                            {config.visualizationType !== 'Pie' && (
                              <p>Enter a data prefix (such as "$"), if applicable.</p>
                            )}
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <TextField
                      value={config.dataFormat.rightSuffix}
                      section='dataFormat'
                      fieldName='rightSuffix'
                      label='Suffix'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            {config.visualizationType === 'Pie' && (
                              <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>
                            )}
                            {config.visualizationType !== 'Pie' && (
                              <p>Enter a data suffix (such as "%"), if applicable.</p>
                            )}
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                  </div>

                  <CheckBox
                    value={config.yAxis.rightHideAxis}
                    section='yAxis'
                    fieldName='rightHideAxis'
                    label='Hide Axis'
                    updateField={updateField}
                  />
                  <CheckBox
                    value={config.yAxis.rightHideLabel}
                    section='yAxis'
                    fieldName='rightHideLabel'
                    label='Hide Tick Labels'
                    updateField={updateField}
                  />
                  <CheckBox
                    value={config.yAxis.rightHideTicks}
                    section='yAxis'
                    fieldName='rightHideTicks'
                    label='Hide Ticks'
                    updateField={updateField}
                  />

                  <TextField
                    value={config.yAxis.max}
                    section='yAxis'
                    fieldName='rightMax'
                    type='number'
                    label='right axis max value'
                    placeholder='Auto'
                    updateField={updateField}
                  />
                  <span style={{ color: 'red', display: 'block' }}>{warningMsg.rightMaxMessage}</span>
                  <TextField
                    value={config.yAxis.min}
                    section='yAxis'
                    fieldName='rightMin'
                    type='number'
                    label='right axis min value'
                    placeholder='Auto'
                    updateField={updateField}
                  />
                  <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
                </AccordionItemPanel>
              </AccordionItem>
            )}
            {visSupportsDateCategoryAxis() && (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {config.visualizationType === 'Pie' ? 'Segments' : 'Date/Category Axis'}
                    {!config.xAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.visualizationType !== 'Pie' && (
                    <>
                      {config.visualizationType !== 'Forest Plot' && (
                        <>
                          <label>
                            <span className='edit-label'>
                              Data Scaling Type
                              <Tooltip style={{ textTransform: 'none', display: 'inline-block' }}>
                                <Tooltip.Target>
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  Linear scales are employed for quantitative data, while time scales are used for
                                  time-series data.
                                </Tooltip.Content>
                              </Tooltip>
                            </span>
                            <select
                              value={config.xAxis.type}
                              onChange={e =>
                                updateConfig({
                                  ...config,
                                  xAxis: {
                                    ...config.xAxis,
                                    type: e.target.value
                                  }
                                })
                              }
                            >
                              {config.visualizationType !== 'Bump Chart' && (
                                <option value='categorical'>Categorical (Linear Scale)</option>
                              )}
                              {config.visualizationType !== 'Bump Chart' && (
                                <option value='date'>Date (Linear Scale)</option>
                              )}
                              <option value='date-time'>Date (Date Time Scale)</option>
                              {config.visualizationType === 'Scatter Plot' && (
                                <option value={'continuous'}>Continuous</option>
                              )}
                            </select>
                          </label>
                          <CheckBox
                            value={config.xAxis.manual}
                            section='xAxis'
                            fieldName='manual'
                            label='Manual Ticks'
                            updateField={updateField}
                          />
                          <CheckBox
                            display={config.xAxis.type !== 'categorical'}
                            value={config.xAxis.sortByRecentDate}
                            section='xAxis'
                            fieldName='sortByRecentDate'
                            label='Show dates newest to oldest'
                            updateField={updateField}
                          />

                          {visSupportsDateCategoryAxisPadding() && (
                            <TextField
                              value={config.xAxis.padding}
                              type='number'
                              min={0}
                              section='xAxis'
                              fieldName='padding'
                              label={'Padding (Percent)'}
                              className='number-narrow'
                              updateField={updateField}
                              tooltip={
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>
                                      For use with date scale. Extends the earliest and latest dates represented on the
                                      scale by the percentage specified.
                                    </p>
                                  </Tooltip.Content>
                                </Tooltip>
                              }
                            />
                          )}
                        </>
                      )}
                      <Select
                        value={config.xAxis.dataKey || setCategoryAxis() || ''}
                        section='xAxis'
                        fieldName='dataKey'
                        label='Data Key'
                        initial='Select'
                        required={true}
                        updateField={updateField}
                        options={getColumns(false)}
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>Select the column or row containing the categories or dates for this axis. </p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                    </>
                  )}

                  {config.visualizationType === 'Pie' && (
                    <Select
                      value={config.xAxis.dataKey || ''}
                      section='xAxis'
                      fieldName='dataKey'
                      label='Segment Labels'
                      initial='Select'
                      required={true}
                      updateField={updateField}
                      options={getColumns(false)}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              Select the source row or column that contains the segment labels. Depending on the data
                              structure, it may be listed as "Key."
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                  )}

                  {config.visualizationType !== 'Pie' && (
                    <>
                      <TextField
                        value={config.xAxis.label}
                        section='xAxis'
                        fieldName='label'
                        label='Label'
                        updateField={updateField}
                      />

                      {config.xAxis.type === 'continuous' && (
                        <>
                          <TextField
                            value={config.dataFormat.bottomPrefix}
                            section='dataFormat'
                            fieldName='bottomPrefix'
                            label='Prefix'
                            updateField={updateField}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>Enter a data prefix (such as "$"), if applicable.</p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />

                          <TextField
                            value={config.dataFormat.bottomSuffix}
                            section='dataFormat'
                            fieldName='bottomSuffix'
                            label='Suffix'
                            updateField={updateField}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>Enter a data suffix (such as "%"), if applicable.</p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />

                          <CheckBox
                            value={config.dataFormat.bottomAbbreviated}
                            section='dataFormat'
                            fieldName='bottomAbbreviated'
                            label='Abbreviate Axis Values'
                            updateField={updateField}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>{`This option abbreviates very large or very small numbers on the value axis`}</p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />
                        </>
                      )}

                      {isDateScale(config.xAxis) && (
                        <>
                          <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>
                            Format how charts should parse and display your dates using{' '}
                            <a href='https://d3js.org/d3-time-format#locale_format' target='_blank' rel='noreferrer'>
                              these guidelines
                            </a>
                            .
                          </p>
                          <TextField
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    This field specifies the pattern used to read and interpret dates in your dataset,
                                    ensuring the dates are correctly understood and processed.{' '}
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={config.xAxis.dateParseFormat}
                            section='xAxis'
                            fieldName='dateParseFormat'
                            placeholder='Ex. %Y-%m-%d'
                            label='Date Parse Format'
                            updateField={updateField}
                          />
                          <TextField
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    {' '}
                                    Adjusts the date display format on the axis for clear, visual date representation.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={config.xAxis.dateDisplayFormat}
                            section='xAxis'
                            fieldName='dateDisplayFormat'
                            placeholder='Ex. %Y-%m-%d'
                            label='AXIS DATE DISPLAY FORMAT'
                            updateField={updateField}
                          />
                          <TextField
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Specify a custom format for displaying dates in data table. If left empty, dates
                                    will adopt the Axis Date Display format.{' '}
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={config.table.dateDisplayFormat}
                            section='table'
                            fieldName='dateDisplayFormat'
                            placeholder='Ex. %Y-%m-%d'
                            label='DATA TABLE DATE DISPLAY FORMAT'
                            updateField={updateField}
                          />
                          <TextField
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Specify a custom format for displaying dates on hovers. If left empty, dates will
                                    adopt the Axis Date Display format.{' '}
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                            value={config.tooltips.dateDisplayFormat}
                            section='tooltips'
                            fieldName='dateDisplayFormat'
                            placeholder='Ex. %Y-%m-%d'
                            label='HOVER DATE DISPLAY FORMAT'
                            updateField={updateField}
                          />
                        </>
                      )}
                      <CheckBox
                        value={config.exclusions.active}
                        section='exclusions'
                        fieldName='active'
                        label={
                          config.xAxis.type === 'date' || config.xAxis.type === 'date-time'
                            ? 'Limit by start and/or end dates'
                            : 'Exclude one or more values'
                        }
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon
                                display='question'
                                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                              />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                When this option is checked, you can select source-file values for exclusion from the
                                date/category axis.{' '}
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                        updateField={updateField}
                      />
                      <CheckBox
                        value={config.xAxis.showYearsOnce}
                        section='xAxis'
                        fieldName='showYearsOnce'
                        label='Show years once'
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon
                                display='question'
                                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                              />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                When this option is checked and the date format for the axis includes years, each year
                                will only be shown once in the axis.
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                        updateField={updateField}
                      />
                      {visHasBrushChart() && (
                        <CheckBox
                          value={config.brush?.active}
                          section='brush'
                          fieldName='active'
                          label='Brush Slider '
                          updateField={updateField}
                          tooltip={
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon
                                  display='question'
                                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>
                                  Use the brush slider to narrow down your data view to specific values along the axis.
                                  This tool is useful for examining detailed data segments within the larger dataset.{' '}
                                </p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                        />
                      )}

                      {config.exclusions.active && (
                        <>
                          {config.xAxis.type === 'categorical' && (
                            <>
                              {config.exclusions.keys.length > 0 && (
                                <>
                                  <fieldset>
                                    <legend className='edit-label'>Excluded Keys</legend>
                                  </fieldset>
                                  <ExclusionsList />
                                </>
                              )}

                              <Select
                                fieldName='visualizationType'
                                label='Add Exclusion'
                                initial='Select'
                                onChange={e => {
                                  if (e.target.value !== '' && e.target.value !== 'Select') {
                                    addNewExclusion(e.target.value)
                                  }
                                  e.target.value = ''
                                }}
                                options={getDataValues(config.xAxis.dataKey, true)}
                              />
                            </>
                          )}

                          {config.xAxis.type === 'date' ||
                            (config.xAxis.type === 'date-time' && (
                              <>
                                <TextField
                                  type='date'
                                  section='exclusions'
                                  fieldName='dateStart'
                                  label='Start Date'
                                  updateField={updateField}
                                  value={config.exclusions.dateStart || ''}
                                />
                                <TextField
                                  type='date'
                                  section='exclusions'
                                  fieldName='dateEnd'
                                  label='End Date'
                                  updateField={updateField}
                                  value={config.exclusions.dateEnd || ''}
                                />
                              </>
                            ))}
                        </>
                      )}

                      {visSupportsDateCategoryNumTicks() &&
                        config.xAxis.type !== 'date-time' &&
                        config.xAxis.manual && (
                          <>
                            <TextField
                              value={config.xAxis.manualStep}
                              placeholder='Auto'
                              type='number'
                              min={1}
                              section='xAxis'
                              fieldName='manualStep'
                              label='Step count'
                              className='number-narrow'
                              updateField={updateField}
                              tooltip={
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon
                                      display='question'
                                      style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                    />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>
                                      Number of data points which are assigned a tick, starting from the right most data
                                      point. Value of 1 will show a tick at every data point, value of 2 will show a
                                      tick for every other, etc.
                                    </p>
                                  </Tooltip.Content>
                                </Tooltip>
                              }
                            />
                            <div className='viewport-overrides'>
                              <label>
                                <button
                                  onClick={() => setDisplayViewportOverrides(!displayViewportOverrides)}
                                  className='edit-label'
                                >
                                  Step Count: viewport overrides{' '}
                                  <span style={{ transform: `rotate(${displayViewportOverrides ? '90deg' : '0deg'})` }}>
                                    &gt;
                                  </span>
                                </button>
                              </label>
                              {displayViewportOverrides && (
                                <div className='edit-block'>
                                  {Object.keys(viewports).map(viewport => (
                                    <TextField
                                      key={`viewport-step-count-input-${viewport}`}
                                      value={
                                        config.xAxis.viewportStepCount
                                          ? config.xAxis.viewportStepCount[viewport]
                                          : undefined
                                      }
                                      placeholder='Auto'
                                      type='number'
                                      label={viewport}
                                      className='number-narrow'
                                      updateField={(section, fieldName, label, val) =>
                                        updateViewportOverrides('viewportStepCount', viewport, val)
                                      }
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      {visSupportsDateCategoryNumTicks() &&
                        (config.xAxis.type === 'date-time' || !config.xAxis.manual) && (
                          <>
                            <TextField
                              value={config.xAxis.numTicks}
                              placeholder='Auto'
                              type='number'
                              min={1}
                              section='xAxis'
                              fieldName='numTicks'
                              label='Number of ticks'
                              className='number-narrow'
                              updateField={updateField}
                              tooltip={
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon
                                      display='question'
                                      style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                    />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>
                                      Apporoximate number of ticks. Other factors such as space available and data may
                                      change the exact number of ticks used. To enforce an exact number of ticks, check
                                      "Manual Ticks" above.
                                    </p>
                                  </Tooltip.Content>
                                </Tooltip>
                              }
                            />
                            <div className='viewport-overrides'>
                              <label>
                                <button
                                  onClick={() => setDisplayViewportOverrides(!displayViewportOverrides)}
                                  className='edit-label'
                                >
                                  Number of ticks: viewport overrides{' '}
                                  <span style={{ transform: `rotate(${displayViewportOverrides ? '90deg' : '0deg'})` }}>
                                    &gt;
                                  </span>
                                </button>
                              </label>
                              {displayViewportOverrides && (
                                <div className='edit-block'>
                                  {Object.keys(viewports).map(viewport => (
                                    <TextField
                                      key={`viewport-num-ticks-input-${viewport}`}
                                      value={
                                        config.xAxis.viewportNumTicks
                                          ? config.xAxis.viewportNumTicks[viewport]
                                          : undefined
                                      }
                                      placeholder='Auto'
                                      type='number'
                                      label={viewport}
                                      className='number-narrow'
                                      updateField={(section, fieldName, label, val) =>
                                        updateViewportOverrides('viewportNumTicks', viewport, val)
                                      }
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      {visSupportsDateCategoryHeight() && (
                        <TextField
                          value={config.xAxis.size}
                          type='number'
                          min={0}
                          section='xAxis'
                          fieldName='size'
                          label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'}
                          className='number-narrow'
                          updateField={updateField}
                        />
                      )}
                      {config.orientation === 'horizontal' && (
                        <TextField
                          value={config.xAxis.labelOffset}
                          section='xAxis'
                          fieldName='labelOffset'
                          label='Label offset'
                          type='number'
                          className='number-narrow'
                          updateField={updateField}
                        />
                      )}

                      {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
                      {/* <TextField value={config.xAxis.axisPadding} type='number' max={10} min={0} section='xAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateField} /> */}
                      {(config.xAxis.type === 'continuous' || config.forestPlot.type === 'Logarithmic') && (
                        <>
                          <CheckBox
                            value={config.dataFormat.bottomCommas}
                            section='dataFormat'
                            fieldName='bottomCommas'
                            label='Add commas'
                            updateField={updateField}
                          />
                          <TextField
                            value={config.dataFormat.bottomRoundTo}
                            type='number'
                            section='dataFormat'
                            fieldName='bottomRoundTo'
                            label='Round to decimal point'
                            className='number-narrow'
                            updateField={updateField}
                            min={0}
                          />
                        </>
                      )}
                      {visSupportsResponsiveTicks() &&
                        config.orientation === 'vertical' &&
                        config.visualizationType !== 'Paired Bar' && (
                          <CheckBox
                            value={config.isResponsiveTicks}
                            fieldName='isResponsiveTicks'
                            label='Use Responsive Ticks'
                            updateField={updateField}
                          />
                        )}
                      {(config.orientation === 'horizontal' || !config.isResponsiveTicks) &&
                        visSupportsDateCategoryTickRotation() && (
                          <TextField
                            value={config.xAxis.tickRotation}
                            type='number'
                            min={0}
                            section='xAxis'
                            fieldName='tickRotation'
                            label='Tick rotation (Degrees)'
                            className='number-narrow'
                            updateField={updateField}
                          />
                        )}
                      {config.orientation === 'vertical' &&
                        config.isResponsiveTicks &&
                        config.visualizationType !== 'Paired Bar' && (
                          <TextField
                            value={config.xAxis.maxTickRotation}
                            type='number'
                            min={0}
                            section='xAxis'
                            fieldName='maxTickRotation'
                            label='Max Tick Rotation'
                            className='number-narrow'
                            updateField={updateField}
                            tooltip={
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    Degrees ticks will be rotated if values overlap, especially in smaller viewports.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />
                        )}

                      {config.orientation === 'horizontal' ? (
                        <>
                          {visSupportsDateCategoryAxisLine() && (
                            <CheckBox
                              value={config.yAxis.hideAxis}
                              section='yAxis'
                              fieldName='hideAxis'
                              label='Hide Axis'
                              updateField={updateField}
                            />
                          )}
                          {visSupportsDateCategoryAxisLabel() && (
                            <CheckBox
                              value={config.yAxis.hideLabel}
                              section='yAxis'
                              fieldName='hideLabel'
                              label='Hide Tick Labels'
                              updateField={updateField}
                            />
                          )}
                        </>
                      ) : (
                        <>
                          {visSupportsDateCategoryAxisLine() && (
                            <CheckBox
                              value={config.xAxis.hideAxis}
                              section='xAxis'
                              fieldName='hideAxis'
                              label='Hide Axis'
                              updateField={updateField}
                            />
                          )}
                          {visSupportsDateCategoryAxisLabel() && (
                            <CheckBox
                              value={config.xAxis.hideLabel}
                              section='xAxis'
                              fieldName='hideLabel'
                              label='Hide Tick Labels'
                              updateField={updateField}
                            />
                          )}
                          {visSupportsDateCategoryAxisTicks() && (
                            <CheckBox
                              value={config.xAxis.hideTicks}
                              section='xAxis'
                              fieldName='hideTicks'
                              label='Hide Ticks'
                              updateField={updateField}
                            />
                          )}
                        </>
                      )}

                      {config.series?.length === 1 && config.visualizationType === 'Bar' && (
                        <>
                          {/* HIGHLIGHTED BARS */}
                          <label htmlFor='barHighlight'>Bar Highlighting</label>
                          {config.series.length === 1 &&
                            highlightedBarValues.map((highlightedBarValue, i) => (
                              <fieldset>
                                <div className='edit-block' key={`highlighted-bar-${i}`}>
                                  <button className='btn btn-danger' onClick={e => handleRemoveHighlightedBar(e, i)}>
                                    Remove
                                  </button>
                                  <p>Highlighted Bar {i + 1}</p>
                                  <label>
                                    <span className='edit-label column-heading'>Value</span>
                                    <select
                                      value={config.highlightedBarValues[i].value}
                                      onChange={e => handleUpdateHighlightedBar(e, i)}
                                    >
                                      <option value=''>- Select Value -</option>
                                      {highlightedSeriesValues &&
                                        [...new Set(highlightedSeriesValues)]
                                          .sort()
                                          .map(option => (
                                            <option key={`special-class-value-option-${i}-${option}`}>{option}</option>
                                          ))}
                                    </select>
                                  </label>
                                  <label>
                                    <span className='edit-label column-heading'>Color</span>
                                    <input
                                      type='text'
                                      value={
                                        config.highlightedBarValues[i].color ? config.highlightedBarValues[i].color : ''
                                      }
                                      onChange={e => handleUpdateHighlightedBarColor(e, i)}
                                    />
                                  </label>
                                  <label>
                                    <span className='edit-label column-heading'>Border Width</span>
                                    <input
                                      max='5'
                                      min='0'
                                      type='number'
                                      value={
                                        config.highlightedBarValues[i].borderWidth
                                          ? config.highlightedBarValues[i].borderWidth
                                          : ''
                                      }
                                      onChange={e => handleUpdateHighlightedBorderWidth(e, i)}
                                    />
                                  </label>
                                  <label>
                                    <span className='edit-label column-heading'>Legend Label</span>
                                    <input
                                      type='text'
                                      value={
                                        config.highlightedBarValues[i].legendLabel
                                          ? config.highlightedBarValues[i].legendLabel
                                          : ''
                                      }
                                      onChange={e => handleHighlightedBarLegendLabel(e, i)}
                                    />
                                  </label>
                                </div>
                              </fieldset>
                            ))}
                          <button className='btn btn-primary full-width' onClick={e => handleAddNewHighlightedBar(e)}>
                            Add Highlighted Bar
                          </button>
                        </>
                      )}
                    </>
                  )}

                  {config.visualizationType === 'Pie' && (
                    <>
                      <CheckBox
                        value={config.exclusions.active}
                        section='exclusions'
                        fieldName='active'
                        label={'Exclude one or more values'}
                        updateField={updateField}
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon
                                display='question'
                                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                              />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                When this option is checked, you can select values for exclusion from the pie segments.
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                      {config.exclusions.active && (
                        <>
                          {config.exclusions.keys.length > 0 && (
                            <>
                              <fieldset>
                                <legend className='edit-label'>Excluded Keys</legend>
                              </fieldset>
                              <ExclusionsList />
                            </>
                          )}

                          <Select
                            fieldName='visualizationType'
                            label='Add Exclusion'
                            initial='Select'
                            onChange={e => {
                              if (e.target.value !== '' && e.target.value !== 'Select') {
                                addNewExclusion(e.target.value)
                              }
                              e.target.value = ''
                            }}
                            options={getDataValues(config.xAxis.dataKey, true)}
                          />
                        </>
                      )}
                    </>
                  )}

                  {visSupportsDateCategoryAxisMin() && (
                    <TextField
                      value={config.xAxis.min}
                      section='xAxis'
                      fieldName='min'
                      type='number'
                      label='min value'
                      placeholder='Auto'
                      updateField={updateField}
                    />
                  )}

                  {visSupportsDateCategoryAxisMax() && (
                    <TextField
                      value={config.xAxis.max}
                      section='xAxis'
                      fieldName='max'
                      type='number'
                      label='max value'
                      placeholder='Auto'
                      updateField={updateField}
                    />
                  )}

                  {/* anchors */}
                  {visHasAnchors() && config.orientation !== 'horizontal' && (
                    <div className='edit-block'>
                      <span className='edit-label column-heading'>Anchors</span>
                      <Accordion allowZeroExpanded>
                        {config.xAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem className='series-item series-item--chart' key={`xaxis-anchors-2-${index}`}>
                            <AccordionItemHeading className='series-item__title'>
                              <>
                                <AccordionItemButton className={'accordion__button accordion__button'}>
                                  Anchor {index + 1}
                                  <button
                                    className='series-list__remove'
                                    onClick={e => {
                                      e.preventDefault()
                                      const copiedAnchorGroups = [...config.xAxis.anchors]
                                      copiedAnchorGroups.splice(index, 1)
                                      updateConfig({
                                        ...config,
                                        xAxis: {
                                          ...config.xAxis,
                                          anchors: copiedAnchorGroups
                                        }
                                      })
                                    }}
                                  >
                                    Remove
                                  </button>
                                </AccordionItemButton>
                              </>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <label>
                                <span>Anchor Value</span>
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>Enter the value as its shown in the data column</p>
                                  </Tooltip.Content>
                                </Tooltip>
                                <input
                                  type='text'
                                  value={config.xAxis.anchors[index].value ? config.xAxis.anchors[index].value : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.xAxis.anchors]
                                    copiedAnchors[index].value = e.target.value
                                    updateConfig({
                                      ...config,
                                      xAxis: {
                                        ...config.xAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                <span>Anchor Color</span>
                                <input
                                  type='text'
                                  value={config.xAxis.anchors[index].color ? config.xAxis.anchors[index].color : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.xAxis.anchors]
                                    copiedAnchors[index].color = e.target.value
                                    updateConfig({
                                      ...config,
                                      xAxis: {
                                        ...config.xAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                Anchor Line Style
                                <select
                                  value={config.xAxis.anchors[index].lineStyle || ''}
                                  onChange={e => {
                                    const copiedAnchors = [...config.xAxis.anchors]
                                    copiedAnchors[index].lineStyle = e.target.value
                                    updateConfig({
                                      ...config,
                                      xAxis: {
                                        ...config.xAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                >
                                  <option>Select</option>
                                  {lineOptions.map(line => (
                                    <option key={line.key}>{line.value}</option>
                                  ))}
                                </select>
                              </label>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      <button
                        className='btn btn-primary full-width'
                        onClick={e => {
                          e.preventDefault()
                          const anchors = [...config.xAxis.anchors]
                          anchors.push({} as Anchor)
                          updateConfig({
                            ...config,
                            xAxis: {
                              ...config.xAxis,
                              anchors
                            }
                          })
                        }}
                      >
                        Add Anchor
                      </button>
                    </div>
                  )}

                  {visHasAnchors() && config.orientation === 'horizontal' && (
                    <div className='edit-block'>
                      <span className='edit-label column-heading'>Anchors</span>
                      <Accordion allowZeroExpanded>
                        {config.yAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem
                            className='series-item series-item--chart'
                            key={`accordion-yaxis-anchors-${index}`}
                          >
                            <AccordionItemHeading className='series-item__title'>
                              <>
                                <AccordionItemButton className={'accordion__button accordion__button'}>
                                  Anchor {index + 1}
                                  <button
                                    className='series-list__remove'
                                    onClick={e => {
                                      e.preventDefault()
                                      const copiedAnchorGroups = [...config.yAxis.anchors]
                                      copiedAnchorGroups.splice(index, 1)
                                      updateConfig({
                                        ...config,
                                        yAxis: {
                                          ...config.yAxis,
                                          anchors: copiedAnchorGroups
                                        }
                                      })
                                    }}
                                  >
                                    Remove
                                  </button>
                                </AccordionItemButton>
                              </>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <label>
                                <span>Anchor Value</span>
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>Enter the value as its shown in the data column</p>
                                  </Tooltip.Content>
                                </Tooltip>
                                <input
                                  type='text'
                                  value={config.yAxis.anchors[index].value ? config.yAxis.anchors[index].value : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.yAxis.anchors]
                                    copiedAnchors[index].value = e.target.value
                                    updateConfig({
                                      ...config,
                                      yAxis: {
                                        ...config.yAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                <span>Anchor Color</span>
                                <input
                                  type='text'
                                  value={config.yAxis.anchors[index].color ? config.yAxis.anchors[index].color : ''}
                                  onChange={e => {
                                    e.preventDefault()
                                    const copiedAnchors = [...config.yAxis.anchors]
                                    copiedAnchors[index].color = e.target.value
                                    updateConfig({
                                      ...config,
                                      yAxis: {
                                        ...config.yAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                />
                              </label>

                              <label>
                                Anchor Line Style
                                <select
                                  value={config.yAxis.anchors[index].lineStyle || ''}
                                  onChange={e => {
                                    const copiedAnchors = [...config.yAxis.anchors]
                                    copiedAnchors[index].lineStyle = e.target.value
                                    updateConfig({
                                      ...config,
                                      yAxis: {
                                        ...config.yAxis,
                                        anchors: copiedAnchors
                                      }
                                    })
                                  }}
                                >
                                  <option>Select</option>
                                  {lineOptions.map(line => (
                                    <option key={line.key}>{line.value}</option>
                                  ))}
                                </select>
                              </label>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      <button
                        className='btn btn-primary full-width'
                        onClick={e => {
                          e.preventDefault()
                          const anchors = [...config.yAxis.anchors]
                          anchors.push({} as Anchor)
                          updateConfig({
                            ...config,
                            yAxis: {
                              ...config.yAxis,
                              anchors
                            }
                          })
                        }}
                      >
                        Add Anchor
                      </button>
                    </div>
                  )}
                </AccordionItemPanel>
              </AccordionItem>
            )}
            <Panels.Regions name='Regions' />

            {/* Columns */}
            {config.visualizationType !== 'Box Plot' && config.visualizationType !== 'Sankey' && (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Columns</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ColumnsEditor config={config} updateField={updateField} deleteColumn={removeAdditionalColumn} />{' '}
                </AccordionItemPanel>
              </AccordionItem>
            )}
            {/* End Columns */}
            {visHasLegend() && (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Legend</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select
                    value={config.legend?.position}
                    section='legend'
                    fieldName='position'
                    label='Position'
                    updateField={updateField}
                    options={['right', 'left', 'bottom', 'top']}
                  />
                  {(config.legend.position === 'left' ||
                    config.legend.position === 'right' ||
                    !config.legend.position) &&
                    config.legend.style === 'gradient' && (
                      <span style={{ color: 'red', fontSize: '14px' }}>
                        Position must be set to top or bottom to use gradient style.
                      </span>
                    )}

                  <Select
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            If using gradient style, limit the legend to five items for better mobile visibility, and
                            position the legend at the top or bottom.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                    display={!config.legend.hide}
                    value={config.legend.style}
                    section='legend'
                    fieldName='style'
                    label='Legend Style'
                    updateField={updateField}
                    options={getLegendStyleOptions('style')}
                  />

                  <Select
                    display={!config.legend.hide && config.legend.style === 'gradient'}
                    value={config.legend.subStyle}
                    section='legend'
                    fieldName='subStyle'
                    label='Gradient Style'
                    updateField={updateField}
                    options={getLegendStyleOptions('subStyle')}
                  />
                  <TextField
                    display={config.legend.style === 'gradient' && !config.legend.hide}
                    className='number-narrow'
                    type='number'
                    value={config.legend.tickRotation}
                    section='legend'
                    fieldName='tickRotation'
                    label='Tick Rotation (Degrees)'
                    updateField={updateField}
                  />

                  <CheckBox
                    display={config.preliminaryData?.some(pd => pd.label && pd.type === 'suppression' && pd.value)}
                    value={config.legend.hideSuppressedLabels}
                    section='legend'
                    fieldName='hideSuppressedLabels'
                    label='Hide Suppressed Labels'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            Hiding suppressed labels will not override the 'Special Class' assigned to line chart
                            indicating "suppressed" data in the Data Series Panel.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <CheckBox
                    display={config.preliminaryData?.some(pd => pd.label && pd.type === 'suppression' && pd.value)}
                    value={config.legend.hideSuppressionLink}
                    section='legend'
                    fieldName='hideSuppressionLink'
                    label='Hide Suppression Definition Link'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Selecting this option will hide the suppression definition link from display.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  {/* {config.visualizationType === 'Box Plot' &&
                    <>
                      <CheckBox value={config.boxplot.legend.displayHowToReadText} fieldName='displayHowToReadText' section='boxplot' subsection='legend' label='Display How To Read Text' updateField={updateField} />
                      <TextField type='textarea' value={config.boxplot.legend.howToReadText} updateField={updateField} fieldName='howToReadText' section='boxplot' subsection='legend' label='How to read text' />
                    </>
                  } */}
                  <Select
                    display={hasDynamicCategory || hasMultipleSeries}
                    value={config.legend.behavior}
                    section='legend'
                    fieldName='behavior'
                    label='Legend Behavior (When clicked)'
                    updateField={(...[section, , fieldName, value]) => updateBehavior(section, fieldName, value)}
                    options={['highlight', 'isolate']}
                  />
                  <Select
                    display={visHasLegendColorCategory()}
                    value={config.legend.colorCode}
                    section='legend'
                    fieldName='colorCode'
                    label='Color code by category'
                    initial='Select'
                    updateField={updateField}
                    options={getDataValueOptions(data)}
                  />
                  {visHasLegendAxisAlign() && (
                    <CheckBox
                      value={config.legend.axisAlign}
                      fieldName='axisAlign'
                      section='legend'
                      label='Align to Axis on Isolate'
                      updateField={updateField}
                    />
                  )}
                  {config.legend.behavior === 'highlight' && config.tooltips.singleSeries && (
                    <CheckBox
                      value={config.legend.highlightOnHover}
                      section='legend'
                      fieldName='highlightOnHover'
                      label='HIGHLIGHT DATA SERIES ON HOVER'
                      updateField={updateField}
                    />
                  )}
                  {/* start: isolated values */}
                  {visHasSelectableLegendValues && config.legend.behavior === 'isolate' && !colorCodeByCategory && (
                    <fieldset className='primary-fieldset edit-block' key={'additional-highlight-values'}>
                      <label>
                        <span className='edit-label'>
                          Isolate Data Series
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                You can choose data series that are shown on load. Others will be added when the user
                                clicks on them in the legend.
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                      </label>
                      {config.legend.seriesHighlight &&
                        config.legend.seriesHighlight.map((val, i) => (
                          <fieldset className='edit-block' key={`${val}-${i}`}>
                            <button
                              className='btn btn-danger'
                              onClick={event => {
                                event.preventDefault()
                                const updatedSeriesHighlight = [...config.legend.seriesHighlight]
                                updatedSeriesHighlight.splice(i, 1)
                                updateField('legend', null, 'seriesHighlight', updatedSeriesHighlight)
                                if (!updatedSeriesHighlight.length) {
                                  handleShowAll()
                                }
                              }}
                            >
                              Remove
                            </button>
                            <Select
                              value={config.legend.seriesHighlight[i]}
                              fieldName='seriesHighlight'
                              label='Isolate Value'
                              onChange={e => {
                                const updatedSeriesHighlight = [...config.legend.seriesHighlight]
                                if (!updatedSeriesHighlight.includes(e.target.value)) {
                                  updatedSeriesHighlight[i] = e.target.value
                                  updateSeriesIsolateValues([...updatedSeriesHighlight])
                                }
                              }}
                              options={getLegendColumns()}
                            />
                          </fieldset>
                        ))}
                      <button
                        className={'btn btn-primary full-width'}
                        onClick={event => {
                          event.preventDefault()
                          const legendColumns = getLegendColumns()
                          const updatedSeriesHighlight = [...config.legend.seriesHighlight]
                          const seriesLength = updatedSeriesHighlight.length
                          if (seriesLength < legendColumns.length) {
                            const [newSeriesHighlight] = legendColumns.filter(d => !updatedSeriesHighlight.includes(d))
                            updatedSeriesHighlight.push(newSeriesHighlight)
                            updateSeriesIsolateValues([...updatedSeriesHighlight])
                          }
                        }}
                      >
                        Add Isolate Value
                      </button>
                    </fieldset>
                  )}
                  {/* end: isolated values */}
                  <CheckBox
                    display={!config.legend.hide && config.legend.style !== 'gradient'}
                    value={config.legend.reverseLabelOrder}
                    section='legend'
                    fieldName='reverseLabelOrder'
                    label='Reverse Labels'
                    updateField={updateField}
                  />
                  <CheckBox
                    display={!config.legend.hide}
                    value={
                      ['left', 'right'].includes(config.legend.position)
                        ? config.legend.hideBorder.side
                        : config.legend.hideBorder.topBottom
                    }
                    section='legend'
                    subsection='hideBorder'
                    fieldName={['left', 'right'].includes(config.legend.position) ? 'side' : 'topBottom'}
                    label='Hide Legend Box'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Default option for top and bottom legends is ‘No Box.’.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <CheckBox
                    display={
                      !config.legend.hide &&
                      !['left', 'right'].includes(config.legend.position) &&
                      config.legend.style !== 'gradient'
                    }
                    value={config.legend.singleRow}
                    section='legend'
                    fieldName='singleRow'
                    label='Single Row Legend'
                    updateField={updateField}
                  />
                  <CheckBox
                    display={
                      ['bottom', 'top'].includes(config.legend.position) &&
                      !config.legend.hide &&
                      config.legend.style !== 'gradient'
                    }
                    value={config.legend.verticalSorted}
                    section='legend'
                    fieldName='verticalSorted'
                    label='Vertical sorted Legend'
                    updateField={updateField}
                  />
                  <CheckBox
                    value={config.legend.hide ? true : false}
                    section='legend'
                    fieldName='hide'
                    label='Hide Legend'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>With a single-series chart, consider hiding the legend to reduce visual clutter.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    value={config.legend.label}
                    section='legend'
                    fieldName='label'
                    label='Title'
                    updateField={updateField}
                  />
                  <TextField
                    type='textarea'
                    value={config.legend.description}
                    updateField={updateField}
                    section='legend'
                    fieldName='description'
                    label='Legend Description'
                  />
                </AccordionItemPanel>
              </AccordionItem>
            )}
            {visSupportsFilters() && (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Filters</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <VizFilterEditor config={config} updateField={updateField} rawData={rawData} />
                </AccordionItemPanel>
              </AccordionItem>
            )}
            <Panels.Visual name='Visual' />
            {/* Spark Line has no data table */}
            {config.visualizationType !== 'Spark Line' && (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Data Table</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <DataTableEditor
                    config={config}
                    columns={Object.keys(data[0] || {})}
                    updateField={updateField}
                    isDashboard={isDashboard}
                    isLoadedFromUrl={isLoadedFromUrl}
                  />{' '}
                </AccordionItemPanel>
              </AccordionItem>
            )}
            <Panels.Annotate name='Text Annotations' />
            {/* {(config.visualizationType === 'Bar' || config.visualizationType === 'Line') && <Panels.DateHighlighting name='Date Highlighting' />} */}
          </Accordion>
          {config.type !== 'Spark Line' && (
            <AdvancedEditor loadConfig={updateConfig} config={config} convertStateToConfig={convertStateToConfig} />
          )}
        </Layout.Sidebar>
      </ErrorBoundary>
    </EditorPanelContext.Provider>
  )
}

export default EditorPanel
