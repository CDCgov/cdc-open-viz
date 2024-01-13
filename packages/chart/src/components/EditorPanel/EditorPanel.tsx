import { useState, useEffect, useCallback, memo, useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

// @cdc/core
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Icon from '@cdc/core/components/ui/Icon'
import InputToggle from '@cdc/core/components/inputs/InputToggle'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import EditorPanelContext from './components/EditorPanelContext'

// chart components
import Panels from './components/Panels'

// cdc additional
import { useColorPalette } from '../../hooks/useColorPalette'
import { useEditorPermissions } from './useEditorPermissions'
import { useFilters } from '@cdc/core/components/Filters'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import ConfigContext from '../../ConfigContext'
import useReduceData from '../../hooks/useReduceData'
import WarningImage from '../../images/warning.svg'
import useMinMax from '../../hooks/useMinMax'

import { type ChartConfig } from '../../types/ChartConfig'
import { type ChartContext } from '../../types/ChartContext'

import './editor-panel.scss'
import { Anchor } from '@cdc/core/types/Axis'
import DataTableEditor from '@cdc/core/components/EditorPanel/DataTableEditor'

const DataSuppression = memo(({ config, updateConfig, data }: any) => {
  const getColumnOptions = () => {
    const keys = new Set()
    data.forEach(d => {
      Object.keys(d).forEach(key => {
        keys.add(key)
      })
    })
    return [...keys]
  }

  const getIconOptions = () => {
    return ['star']
  }

  let removeColumn = i => {
    let suppressedData = []

    if (config.suppressedData) {
      suppressedData = [...config.suppressedData]
    }

    suppressedData.splice(i, 1)

    updateConfig({ ...config, suppressedData })
  }

  let addColumn = () => {
    let suppressedData = config.suppressedData ? [...config.suppressedData] : []
    suppressedData.push({ label: '', column: '', value: '', icon: '' })
    updateConfig({ ...config, suppressedData })
  }

  let update = (fieldName, value, i) => {
    let suppressedData = []

    if (config.suppressedData) {
      suppressedData = [...config.suppressedData]
    }

    suppressedData[i][fieldName] = value
    updateConfig({ ...config, suppressedData })
  }

  return (
    <>
      {config.suppressedData &&
        config.suppressedData.map(({ label, column, value, icon }, i) => {
          return (
            <div key={`suppressed-${i}`} className='edit-block'>
              <button
                type='button'
                className='remove-column'
                onClick={event => {
                  event.preventDefault()
                  removeColumn(i)
                }}
              >
                Remove
              </button>
              <Select value={column} initial='Select' fieldName='column' label='Column' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} options={getColumnOptions()} />
              <TextField value={value} fieldName='value' label='Value' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} />
              <Select value={icon} initial='Select' fieldName='icon' label='Icon' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} options={getIconOptions()} />
              <TextField value={label} fieldName='label' label='Label' placeholder='suppressed' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} />
            </div>
          )
        })}

      <button type='button' onClick={addColumn} className='btn full-width'>
        Add Suppression Class
      </button>
    </>
  )
})
const PreliminaryData = memo(({ config, updateConfig, data }) => {
  const getColumnOptions = () => {
    const keys = new Set()
    data.forEach(d => {
      Object.keys(d).forEach(key => {
        keys.add(key)
      })
    })
    return [...keys]
  }

  const getTypeOptions = () => {
    if (config.visualizationType === 'Line' || config.visualizationType === 'Combo') {
      return ['effect']
    } else {
      return ['suppression']
    }
  }

  const getStyleOptions = () => {
    if (config.visualizationType === 'Line' || config.visualizationType === 'Combo') {
      return ['Dashed Small', 'Dashed Medium', 'Dashed Large', 'Open Circles']
    }
    if (config.visualizationType === 'Bar') {
      return ['star']
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
    let preliminaryData = config.preliminaryData ? [...config.preliminaryData] : []
    preliminaryData.push({ type: '', label: '', column: '', value: '', style: '' })
    updateConfig({ ...config, preliminaryData })
  }

  let update = (fieldName, value, i) => {
    let preliminaryData = []

    if (config.preliminaryData) {
      preliminaryData = [...config.preliminaryData]
    }

    preliminaryData[i][fieldName] = value
    updateConfig({ ...config, preliminaryData })
  }

  return (
    <>
      {config.preliminaryData &&
        config.preliminaryData.map(({ seriesKey, type, label, column, value, style }, i) => {
          return (
            <div key={`preliminaryData-${i}`} className='edit-block'>
              <button
                type='button'
                className='remove-column'
                onClick={event => {
                  event.preventDefault()
                  removeColumn(i)
                }}
              >
                Remove
              </button>
              <Select value={type} initial='Select' fieldName='type' label='Type' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} options={getTypeOptions()} />
              <Select value={seriesKey} initial='Select' fieldName='seriesKey' label='ASSOCIATE TO SERIES' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} options={config.runtime?.seriesKeys} />
              <Select value={column} initial='Select' fieldName='column' label='COLUMN WITH CONFIGURATION VALUE' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} options={getColumnOptions()} />
              <TextField value={value} fieldName='value' label='VALUE TO TRIGGER' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} />
              <Select value={style} initial='Select' fieldName='style' label='Style' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} options={getStyleOptions()} />

              <TextField value={label} fieldName='label' label='Label' placeholder='suppressed' updateField={(section, subsection, fieldName, value) => update(fieldName, value, i)} />
            </div>
          )
        })}

      <button type='button' onClick={addColumn} className='btn full-width'>
        {config.visualizationType === 'Line' ? 'Add Special Line' : config.visualizationType === 'Bar' ? ' Add Special Bar' : 'Add Special Line/Bar'}
      </button>
    </>
  )
})

const EditorPanel = () => {
  const { config, updateConfig, transformedData: data, loading, colorPalettes, twoColorPalette, unfilteredData, excludedData, isDashboard, setParentConfig, missingRequiredSections, isDebug, setFilteredData, lineOptions, rawData } = useContext<ChartContext>(ConfigContext)

  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, unfilteredData)

  const { twoColorPalettes, sequential, nonSequential } = useColorPalette(config, updateConfig)

  const properties = { data, config }
  const { leftMax, rightMax } = useMinMax(properties)

  const {
    enabledChartTypes,
    headerColors,
    visSupportsTooltipLines,
    visSupportsNonSequentialPallete,
    visSupportsSequentialPallete,
    visSupportsReverseColorPalette,
    visHasLabelOnData,
    visHasNumbersOnBars,
    visHasAnchors,
    visHasBarBorders,
    visHasDataCutoff,
    visCanAnimate,
    visHasLegend,
    visHasBrushChart,
    visSupportsDateCategoryAxis,
    visSupportsValueAxisMin,
    visSupportsValueAxisMax,
    visSupportsDateCategoryAxisLabel,
    visSupportsDateCategoryAxisLine,
    visSupportsDateCategoryAxisTicks,
    visSupportsDateCategoryTickRotation,
    visSupportsDateCategoryNumTicks,
    visSupportsRegions,
    visSupportsFilters,
    visSupportsValueAxisGridLines,
    visSupportsValueAxisLine,
    visSupportsValueAxisTicks,
    visSupportsValueAxisLabels,
    visSupportsBarSpace,
    visSupportsBarThickness,
    visSupportsFootnotes,
    visSupportsSuperTitle,
    visSupportsDataCutoff,
    visSupportsChartHeight,
    visSupportsLeftValueAxis,
    visSupportsTooltipOpacity,
    visSupportsRankByValue,
    visSupportsResponsiveTicks,
    visSupportsDateCategoryHeight,
    visHasDataSuppression
  } = useEditorPermissions()

  // argument acts as props
  const { handleFilterOrder, filterOrderOptions, filterStyleOptions } = useFilters({ config, setConfig: updateConfig, filteredData: data, setFilteredData })

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
          type: config.visualizationType === 'Combo' ? 'Bar' : config.visualizationType ? config.visualizationType : 'Bar',
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

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
  })

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
  }

  const updateField = (section, subsection, fieldName, newValue) => {
    if (isDebug) console.log('#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue', section, subsection, fieldName, newValue) // eslint-disable-line

    if (section === 'boxplot' && subsection === 'legend') {
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

    if (section === 'boxplot' && subsection === 'labels') {
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

    if (section === 'columns' && subsection !== '' && fieldName !== '') {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config[section][subsection],
            [fieldName]: newValue
          }
        }
      })
      return
    }
    if (null === section && null === subsection) {
      let updatedConfig = { ...config, [fieldName]: newValue }
      enforceRestrictions(updatedConfig)
      updateConfig(updatedConfig)
      return
    }

    const isArray = Array.isArray(config[section])

    let sectionValue = isArray ? [...config[section], newValue] : { ...config[section], [fieldName]: newValue }

    if (null !== subsection) {
      if (isArray) {
        sectionValue = [...config[section]]
        sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue }
      } else if (typeof newValue === 'string') {
        sectionValue[subsection] = newValue
      } else {
        sectionValue = { ...config[section], [subsection]: { ...config[section][subsection], [fieldName]: newValue } }
      }
    }

    let updatedConfig = { ...config, [section]: sectionValue }

    enforceRestrictions(updatedConfig)

    updateConfig(updatedConfig)
  }

  const [displayPanel, setDisplayPanel] = useState(true)

  if (loading) {
    return null
  }

  useEffect(() => {
    if (!config.general?.boxplot) return
    if (!config.general.boxplot.firstQuartilePercentage) {
      updateConfig({
        ...config,
        boxplot: {
          ...config.boxplot,
          firstQuartilePercentage: 25
        }
      })
    }
  }, [config])

  const setLollipopShape = shape => {
    updateConfig({
      ...config,
      lollipopShape: shape
    })
  }

  const removeFilter = index => {
    let filters = [...config.filters]

    filters.splice(index, 1)

    updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [...config.filters]

    filters[index][name] = value

    updateConfig({ ...config, filters })
  }

  const addNewFilter = () => {
    let filters = config.filters ? [...config.filters] : []

    filters.push({ values: [] })

    updateConfig({ ...config, filters })
  }

  const addNewSeries = seriesKey => {
    let newSeries = config.series ? [...config.series] : []
    let forecastingStages = Array.from(new Set(data.map(item => item[seriesKey])))
    let forecastingStageArr = []

    forecastingStages.forEach(stage => {
      forecastingStageArr.push({ key: stage })
    })

    if (config.visualizationType === 'Forecasting') {
      newSeries.push({ dataKey: seriesKey, type: config.visualizationType, stages: forecastingStageArr, stageColumn: seriesKey, axis: 'Left', tooltip: true })
    } else {
      newSeries.push({ dataKey: seriesKey, type: config.visualizationType, axis: 'Left', tooltip: true })
    }
    updateConfig({ ...config, series: newSeries }) // left axis series keys
  }

  const sortSeries = e => {
    const series = config.series[0].dataKey
    const sorted = data.sort((a, b) => a[series] - b[series])
    const newData = e === 'asc' ? sorted : sorted.reverse()
    updateConfig({ ...config }, newData)
  }

  const removeSeries = seriesKey => {
    let series = [...config.series]
    let seriesIndex = -1

    for (let i = 0; i < series.length; i++) {
      if (series[i].dataKey === seriesKey) {
        seriesIndex = i
        break
      }
    }

    if (seriesIndex !== -1) {
      series.splice(seriesIndex, 1)

      let newConfig = { ...config, series }

      if (series.length === 0) {
        delete newConfig.series
      }

      updateConfig(newConfig)
    }

    if (config.visualizationType === 'Paired Bar') {
      updateConfig({
        ...config,
        series: []
      })
    }
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

  const getFilters = () => {
    let columns = {}

    unfilteredData.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    return Object.keys(columns)
  }

  const getColumns = (filter = true) => {
    let columns = {}
    unfilteredData.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    if (filter) {
      const { lower, upper } = config.confidenceKeys || {}
      Object.keys(columns).forEach(key => {
        if ((config.series && config.series.filter(series => series.dataKey === key).length > 0) || (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key) && ((lower && upper) || lower || upper) && key !== lower && key !== upper)) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
  }

  const getDataValueOptions = data => {
    if (!data) return []
    const set = new Set()
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

  const showBarStyleOptions = () => {
    if ((config.visualizationType === 'Bar' || config.visualizationType === 'Deviation Bar') && config.visualizationSubType !== 'stacked' && (config.orientation === 'horizontal' || config.orientation === 'vertical')) {
      return ['flat', 'rounded', 'lollipop']
    } else {
      return ['flat', 'rounded']
    }
  }

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
  }

  const Error = () => {
    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  const Confirm = () => {
    const confirmDone = e => {
      e.preventDefault()

      let newConfig = { ...config }
      delete newConfig.newViz

      updateConfig(newConfig)
    }

    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
          <button className='btn' style={{ margin: '1em auto' }} disabled={missingRequiredSections()} onClick={confirmDone}>
            I'm Done
          </button>
        </section>
      </section>
    )
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
      case (config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && !isAllLine)) && minVal > 0 && enteredValue > 0:
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

  // prevents adding duplicates
  const additionalColumns = Object.keys(config.columns).filter(value => {
    const defaultCols = [config.xAxis.dataKey] // ['geo', 'navigate', 'primary', 'latitude', 'longitude']

    if (true === defaultCols.includes(value)) {
      return false
    }
    return true
  })

  // just adds a new column but not set to any data yet
  const addAdditionalColumn = number => {
    const columnKey = `additionalColumn${number}`

    updateConfig({
      ...config,
      columns: {
        ...config.columns,
        [columnKey]: {
          label: 'New Column',
          dataTable: false,
          tooltips: false,
          prefix: '',
          suffix: '',
          forestPlot: false,
          startingPoint: '0',
          forestPlotAlignRight: false
        }
      }
    })
  }

  const removeAdditionalColumn = columnName => {
    const newColumns = config.columns

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

  return (
    <EditorPanelContext.Provider value={{ enabledChartTypes, showBarStyleOptions, editColumn, setCategoryAxis, updateField, warningMsg, data, getDataValueOptions, sortSeries, getColumns, getItemStyle, handleSeriesChange }}>
      <ErrorBoundary component='EditorPanel'>
        {config.newViz && <Confirm />}
        {undefined === config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
        <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}></button>
        <section className={`${displayPanel ? 'editor-panel cove' : 'hidden editor-panel cove'}${isDashboard ? ' dashboard' : ''}`}>
          <div aria-level={2} role='heading' className='heading-2'>
            Configure Chart
          </div>
          <section className='form-container'>
            <Accordion allowZeroExpanded={true}>
              <Panels.General name='General' />
              <Panels.ForestPlot name='Forest Plot Settings' />
              <Panels.Series name='Data Series' preliminaryData={<PreliminaryData config={config} updateConfig={updateConfig} data={data} />} />

              <Panels.BoxPlot name='Measures' />
              {/* Left Value Axis */}
              {visSupportsLeftValueAxis() && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {config.visualizationType === 'Pie' ? 'Data Format' : config.orientation === 'vertical' ? 'Left Value Axis' : 'Value Axis'}
                      {config.visualizationType === 'Pie' && !config.yAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
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
                        <TextField value={config.yAxis.label} section='yAxis' fieldName='label' label='Label' updateField={updateField} />
                        {config.runtime.seriesKeys && config.runtime.seriesKeys.length === 1 && !['Box Plot', 'Deviation Bar', 'Forest Plot'].includes(config.visualizationType) && (
                          <CheckBox value={config.isLegendValue} fieldName='isLegendValue' label='Use Legend Value in Hover' updateField={updateField} />
                        )}
                        <TextField value={config.yAxis.numTicks} placeholder='Auto' type='number' section='yAxis' fieldName='numTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />
                        {config.visualizationType === 'Paired Bar' && <TextField value={config.yAxis.tickRotation || 0} type='number' min={0} section='yAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />}
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
                                <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>{`Increase the size if elements in the ${config.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`}</p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                        />
                        {config.orientation === 'horizontal' && config.visualizationType !== 'Paired Bar' && <CheckBox value={config.isResponsiveTicks} fieldName='isResponsiveTicks' label='Use Responsive Ticks' updateField={updateField} />}
                        {(config.orientation === 'vertical' || !config.isResponsiveTicks) && <TextField value={config.yAxis.tickRotation} type='number' min={0} section='yAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />}
                        {config.isResponsiveTicks && config.orientation === 'horizontal' && config.visualizationType !== 'Paired Bar' && (
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
                                  <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
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
                        {config.orientation === 'horizontal' && <TextField value={config.xAxis.labelOffset} section='xAxis' fieldName='labelOffset' label='Label offset' type='number' className='number-narrow' updateField={updateField} />}
                        {visSupportsValueAxisGridLines() && <CheckBox value={config.yAxis.gridLines} section='yAxis' fieldName='gridLines' label='Show Gridlines' updateField={updateField} />}
                        <CheckBox value={config.yAxis.enablePadding} section='yAxis' fieldName='enablePadding' label='Add Padding to Value Axis Scale' updateField={updateField} />
                        {config.visualizationSubType === 'regular' && config.visualizationType !== 'Forest Plot' && <CheckBox value={config.useLogScale} fieldName='useLogScale' label='use logarithmic scale' updateField={updateField} />}
                      </>
                    )}
                    <span className='divider-heading'>Number Formatting</span>
                    <CheckBox value={config.dataFormat.commas} section='dataFormat' fieldName='commas' label='Add commas' updateField={updateField} />
                    <CheckBox
                      value={config.dataFormat.abbreviated}
                      section='dataFormat'
                      fieldName='abbreviated'
                      label='Abbreviate Axis Values'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>{`This option abbreviates very large or very small numbers on the value axis`}</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <TextField value={config.dataFormat.roundTo ? config.dataFormat.roundTo : 0} type='number' section='dataFormat' fieldName='roundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
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
                              {config.visualizationType === 'Pie' && <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>}
                              {config.visualizationType !== 'Pie' && <p>Enter a data prefix (such as "$"), if applicable.</p>}
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
                              {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                              {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                    </div>

                    {config.orientation === 'horizontal' ? ( // horizontal - x is vertical y is horizontal
                      <>
                        {visSupportsValueAxisLine() && <CheckBox value={config.xAxis.hideAxis} section='xAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />}
                        {visSupportsValueAxisLabels() && <CheckBox value={config.xAxis.hideLabel} section='xAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />}
                        {visSupportsValueAxisTicks() && <CheckBox value={config.xAxis.hideTicks} section='xAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />}
                        {visSupportsValueAxisMax() && <TextField value={config.xAxis.max} section='xAxis' fieldName='max' label='max value' type='number' placeholder='Auto' updateField={updateField} />}
                        <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                        {visSupportsValueAxisMin() && <TextField value={config.xAxis.min} section='xAxis' fieldName='min' type='number' label='min value' placeholder='Auto' updateField={updateField} />}
                        <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
                        {config.visualizationType === 'Deviation Bar' && (
                          <>
                            <TextField value={config.xAxis.target} section='xAxis' fieldName='target' type='number' label='Deviation point' placeholder='Auto' updateField={updateField} />
                            <TextField value={config.xAxis.targetLabel || 'Target'} section='xAxis' fieldName='targetLabel' type='text' label='Deviation point Label' updateField={updateField} />
                            <CheckBox value={config.xAxis.showTargetLabel} section='xAxis' fieldName='showTargetLabel' label='Show Deviation point label' updateField={updateField} />
                          </>
                        )}
                      </>
                    ) : (
                      config.visualizationType !== 'Pie' && (
                        <>
                          <CheckBox value={config.yAxis.hideAxis} section='yAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />
                          <CheckBox value={config.yAxis.hideLabel} section='yAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />
                          <CheckBox value={config.yAxis.hideTicks} section='yAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />

                          <TextField value={config.yAxis.max} section='yAxis' fieldName='max' type='number' label='left axis max value' placeholder='Auto' updateField={updateField} />
                          <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                          <TextField value={config.yAxis.min} section='yAxis' fieldName='min' type='number' label='left axis min value' placeholder='Auto' updateField={updateField} />
                          <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
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
                          className='btn full-width'
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
                          className='btn full-width'
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
              <Panels.RightAxis name='Right Value Axis' />

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
                            <Select value={config.xAxis.type} section='xAxis' fieldName='type' label='Data Type' updateField={updateField} options={config.visualizationType !== 'Scatter Plot' ? ['categorical', 'date'] : ['categorical', 'continuous', 'date']} />
                            <CheckBox value={config.xAxis.sortDates} section='xAxis' fieldName='sortDates' label='Force Date Scale (Sort Dates)' updateField={updateField} />{' '}
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
                              <p>Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                    )}

                    {config.visualizationType !== 'Pie' && (
                      <>
                        <TextField value={config.xAxis.label} section='xAxis' fieldName='label' label='Label' updateField={updateField} />

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
                                    <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>Enter a data suffix (such as "%"), if applicable.</p>
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
                                    <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
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
                                    <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>{`This option abbreviates very large or very small numbers on the value axis`}</p>
                                  </Tooltip.Content>
                                </Tooltip>
                              }
                            />
                          </>
                        )}

                        {config.xAxis.type === 'date' && (
                          <>
                            <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>
                              Format how charts should parse and display your dates using{' '}
                              <a href='https://github.com/d3/d3-time-format#locale_format' target='_blank' rel='noreferrer'>
                                these guidelines
                              </a>
                              .
                            </p>
                            <TextField value={config.xAxis.dateParseFormat} section='xAxis' fieldName='dateParseFormat' placeholder='Ex. %Y-%m-%d' label='Date Parse Format' updateField={updateField} />
                            <TextField value={config.xAxis.dateDisplayFormat} section='xAxis' fieldName='dateDisplayFormat' placeholder='Ex. %Y-%m-%d' label='Date Display Format' updateField={updateField} />
                          </>
                        )}

                        <CheckBox
                          value={config.exclusions.active}
                          section='exclusions'
                          fieldName='active'
                          label={config.xAxis.type === 'date' ? 'Limit by start and/or end dates' : 'Exclude one or more values'}
                          tooltip={
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>When this option is checked, you can select source-file values for exclusion from the date/category axis. </p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                          updateField={updateField}
                        />
                        {/* {visHasBrushChart && <CheckBox value={config.brush.active} section='brush' fieldName='active' label='Brush Slider ' updateField={updateField} />} */}

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

                            {config.xAxis.type === 'date' && (
                              <>
                                <TextField type='date' section='exclusions' fieldName='dateStart' label='Start Date' updateField={updateField} value={config.exclusions.dateStart || ''} />
                                <TextField type='date' section='exclusions' fieldName='dateEnd' label='End Date' updateField={updateField} value={config.exclusions.dateEnd || ''} />
                              </>
                            )}
                          </>
                        )}

                        {visSupportsDateCategoryNumTicks() && <TextField value={config.xAxis.numTicks} placeholder='Auto' type='number' min={1} section='xAxis' fieldName='numTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />}
                        {visSupportsDateCategoryHeight() && <TextField value={config.xAxis.size} type='number' min={0} section='xAxis' fieldName='size' label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'} className='number-narrow' updateField={updateField} />}

                        {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
                        {/* <TextField value={config.xAxis.axisPadding} type='number' max={10} min={0} section='xAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateField} /> */}
                        {(config.xAxis.type === 'continuous' || config.forestPlot.type === 'Logarithmic') && (
                          <>
                            <CheckBox value={config.dataFormat.bottomCommas} section='dataFormat' fieldName='bottomCommas' label='Add commas' updateField={updateField} />
                            <TextField value={config.dataFormat.bottomRoundTo} type='number' section='dataFormat' fieldName='bottomRoundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
                          </>
                        )}
                        {visSupportsResponsiveTicks() && config.orientation === 'vertical' && config.visualizationType !== 'Paired Bar' && <CheckBox value={config.isResponsiveTicks} fieldName='isResponsiveTicks' label='Use Responsive Ticks' updateField={updateField} />}
                        {(config.orientation === 'horizontal' || !config.isResponsiveTicks) && visSupportsDateCategoryTickRotation() && (
                          <TextField value={config.xAxis.tickRotation} type='number' min={0} section='xAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />
                        )}
                        {config.orientation === 'vertical' && config.isResponsiveTicks && config.visualizationType !== 'Paired Bar' && (
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
                                  <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>Degrees ticks will be rotated if values overlap, especially in smaller viewports.</p>
                                </Tooltip.Content>
                              </Tooltip>
                            }
                          />
                        )}

                        {config.orientation === 'horizontal' ? (
                          <>
                            {visSupportsDateCategoryAxisLine() && <CheckBox value={config.yAxis.hideAxis} section='yAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />}
                            {visSupportsDateCategoryAxisLabel() && <CheckBox value={config.yAxis.hideLabel} section='yAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />}
                          </>
                        ) : (
                          <>
                            {visSupportsDateCategoryAxisLine() && <CheckBox value={config.xAxis.hideAxis} section='xAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />}
                            {visSupportsDateCategoryAxisLabel() && <CheckBox value={config.xAxis.hideLabel} section='xAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />}
                            {visSupportsDateCategoryAxisTicks() && <CheckBox value={config.xAxis.hideTicks} section='xAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />}
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
                                    <button className='remove-column' onClick={e => handleRemoveHighlightedBar(e, i)}>
                                      Remove
                                    </button>
                                    <p>Highlighted Bar {i + 1}</p>
                                    <label>
                                      <span className='edit-label column-heading'>Value</span>
                                      <select value={config.highlightedBarValues[i].value} onChange={e => handleUpdateHighlightedBar(e, i)}>
                                        <option value=''>- Select Value -</option>
                                        {highlightedSeriesValues && [...new Set(highlightedSeriesValues)].sort().map(option => <option key={`special-class-value-option-${i}-${option}`}>{option}</option>)}
                                      </select>
                                    </label>
                                    <label>
                                      <span className='edit-label column-heading'>Color</span>
                                      <input type='text' value={config.highlightedBarValues[i].color ? config.highlightedBarValues[i].color : ''} onChange={e => handleUpdateHighlightedBarColor(e, i)} />
                                    </label>
                                    <label>
                                      <span className='edit-label column-heading'>Border Width</span>
                                      <input max='5' min='0' type='number' value={config.highlightedBarValues[i].borderWidth ? config.highlightedBarValues[i].borderWidth : ''} onChange={e => handleUpdateHighlightedBorderWidth(e, i)} />
                                    </label>
                                    <label>
                                      <span className='edit-label column-heading'>Legend Label</span>
                                      <input type='text' value={config.highlightedBarValues[i].legendLabel ? config.highlightedBarValues[i].legendLabel : ''} onChange={e => handleHighlightedBarLegendLabel(e, i)} />
                                    </label>
                                  </div>
                                </fieldset>
                              ))}
                            <button className='btn full-width' onClick={e => handleAddNewHighlightedBar(e)}>
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
                                <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>When this option is checked, you can select values for exclusion from the pie segments.</p>
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
                          className='btn full-width'
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
                            <AccordionItem className='series-item series-item--chart' key={`accordion-yaxis-anchors-${index}`}>
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
                          className='btn full-width'
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
              {config.visualizationType !== 'Box Plot' && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Columns</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {'navigation' !== config.type && (
                      <fieldset className='primary-fieldset edit-block'>
                        <label>
                          <span className='edit-label'>
                            Additional Columns
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>You can specify additional columns to display in tooltips and / or the supporting data table.</p>
                              </Tooltip.Content>
                            </Tooltip>
                          </span>
                        </label>
                        {additionalColumns.map(val => (
                          <fieldset className='edit-block' key={val}>
                            <button
                              className='remove-column'
                              onClick={event => {
                                event.preventDefault()
                                removeAdditionalColumn(val)
                              }}
                            >
                              Remove
                            </button>
                            <label>
                              <span className='edit-label column-heading'>Column</span>
                              <select
                                value={config.columns[val] ? config.columns[val].name : getColumns()[0]}
                                onChange={event => {
                                  editColumn(val, 'name', event.target.value)
                                }}
                              >
                                {getColumns().map(option => (
                                  <option>{option}</option>
                                ))}
                              </select>
                            </label>
                            <label>
                              <span className='edit-label column-heading'>Associate to Series</span>
                              <select
                                value={config.columns[val] ? config.columns[val].series : ''}
                                onChange={event => {
                                  editColumn(val, 'series', event.target.value)
                                }}
                              >
                                <option value=''>Select series</option>
                                {config.series.map(series => (
                                  <option>{series.dataKey}</option>
                                ))}
                              </select>
                            </label>
                            <TextField value={config.columns[val].label} section='columns' subsection={val} fieldName='label' label='Label' updateField={updateField} />
                            <ul className='column-edit'>
                              <li className='three-col'>
                                <TextField value={config.columns[val].prefix} section='columns' subsection={val} fieldName='prefix' label='Prefix' updateField={updateField} />
                                <TextField value={config.columns[val].suffix} section='columns' subsection={val} fieldName='suffix' label='Suffix' updateField={updateField} />
                                <TextField type='number' value={config.columns[val].roundToPlace} section='columns' subsection={val} fieldName='roundToPlace' label='Round' updateField={updateField} />
                              </li>
                              <li>
                                <label className='checkbox'>
                                  <input
                                    type='checkbox'
                                    checked={config.columns[val].commas}
                                    onChange={event => {
                                      editColumn(val, 'commas', event.target.checked)
                                    }}
                                  />
                                  <span className='edit-label'>Add Commas to Numbers</span>
                                </label>
                              </li>
                              <li>
                                {config.table.showVertical && (
                                  <label className='checkbox'>
                                    <input
                                      type='checkbox'
                                      checked={config.columns[val].dataTable}
                                      onChange={event => {
                                        editColumn(val, 'dataTable', event.target.checked)
                                      }}
                                    />
                                    <span className='edit-label'>Show in Data Table</span>
                                  </label>
                                )}
                              </li>
                              {/* disable for now */}

                              <li>
                                <label className='checkbox'>
                                  <input
                                    type='checkbox'
                                    checked={config.columns[val].tooltips || false}
                                    onChange={event => {
                                      updateSeriesTooltip(val, event.target.checked)
                                    }}
                                  />
                                  <span className='edit-label'>Show in tooltip</span>
                                </label>
                              </li>

                              {config.visualizationType === 'Forest Plot' && (
                                <>
                                  <li>
                                    <label className='checkbox'>
                                      <input
                                        type='checkbox'
                                        checked={config.columns[val].forestPlot || false}
                                        onChange={event => {
                                          editColumn(val, 'forestPlot', event.target.checked)
                                        }}
                                      />
                                      <span className='edit-label'>Show in Forest Plot</span>
                                    </label>
                                  </li>
                                  <li>
                                    <label className='checkbox'>
                                      <input
                                        type='checkbox'
                                        checked={config.columns[val].forestPlotAlignRight || false}
                                        onChange={event => {
                                          editColumn(val, 'forestPlotAlignRight', event.target.checked)
                                        }}
                                      />
                                      <span className='edit-label'>Align Right</span>
                                    </label>
                                  </li>

                                  {!config.columns[val].forestPlotAlignRight && (
                                    <li>
                                      <label className='text'>
                                        <span className='edit-label'>Forest Plot Starting Point</span>
                                        <input
                                          type='number'
                                          value={config.columns[val].forestPlotStartingPoint || 0}
                                          onChange={event => {
                                            editColumn(val, 'forestPlotStartingPoint', event.target.value)
                                          }}
                                        />
                                      </label>
                                    </li>
                                  )}
                                </>
                              )}
                            </ul>
                          </fieldset>
                        ))}
                        <button
                          className={'btn full-width'}
                          onClick={event => {
                            event.preventDefault()
                            addAdditionalColumn(additionalColumns.length + 1)
                          }}
                        >
                          Add Column
                        </button>
                      </fieldset>
                    )}
                    {'category' === config.legend.type && (
                      <fieldset className='primary-fieldset edit-block'>
                        <label>
                          <span className='edit-label'>
                            Additional Category
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>You can provide additional categories to ensure they appear in the legend</p>
                              </Tooltip.Content>
                            </Tooltip>
                          </span>
                        </label>
                        {config.legend.additionalCategories &&
                          config.legend.additionalCategories.map((val, i) => (
                            <fieldset className='edit-block' key={val}>
                              <button
                                className='remove-column'
                                onClick={event => {
                                  event.preventDefault()
                                  const updatedAdditionaCategories = [...config.legend.additionalCategories]
                                  updatedAdditionaCategories.splice(i, 1)
                                  updateField('legend', null, 'additionalCategories', updatedAdditionaCategories)
                                }}
                              >
                                Remove
                              </button>
                              <TextField
                                value={val}
                                label='Category'
                                section='legend'
                                subsection={null}
                                fieldName='additionalCategories'
                                updateField={(section, subsection, fieldName, value) => {
                                  const updatedAdditionaCategories = [...config.legend.additionalCategories]
                                  updatedAdditionaCategories[i] = value
                                  updateField(section, subsection, fieldName, updatedAdditionaCategories)
                                }}
                              />
                            </fieldset>
                          ))}
                        <button
                          className={'btn full-width'}
                          onClick={event => {
                            event.preventDefault()
                            const updatedAdditionaCategories = [...(config.legend.additionalCategories || [])]
                            updatedAdditionaCategories.push('')
                            updateField('legend', null, 'additionalCategories', updatedAdditionaCategories)
                          }}
                        >
                          Add Category
                        </button>
                      </fieldset>
                    )}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              {/* End Columns */}
              <Panels.Legend name='Legend' />
              {visSupportsFilters() && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Filters</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {config.filters && (
                      <>
                        {/* prettier-ignore */}
                        <Select
                        value={config.filterBehavior}
                        fieldName='filterBehavior'
                        label='Filter Behavior'
                        updateField={updateField}
                        options={['Apply Button', 'Filter Change']}
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                        />
                        <br />
                      </>
                    )}
                    {config.filters && (
                      <ul className='filters-list'>
                        {/* Whether filters should apply onChange or Apply Button */}

                        {config.filters.map((filter, index) => {
                          if (filter.type === 'url') return <></>

                          return (
                            <fieldset className='edit-block' key={index}>
                              <button
                                type='button'
                                className='remove-column'
                                onClick={() => {
                                  removeFilter(index)
                                }}
                              >
                                Remove
                              </button>
                              <label>
                                <span className='edit-label column-heading'>Filter</span>
                                <select
                                  value={filter.columnName}
                                  onChange={e => {
                                    updateFilterProp('columnName', index, e.target.value)
                                  }}
                                >
                                  <option value=''>- Select Option -</option>
                                  {getFilters().map((dataKey, index) => (
                                    <option value={dataKey} key={index}>
                                      {dataKey}
                                    </option>
                                  ))}
                                </select>
                              </label>

                              <label>
                                <span className='edit-showDropdown column-heading'>Show Filter Input</span>
                                <input
                                  type='checkbox'
                                  checked={filter.showDropdown === undefined ? true : filter.showDropdown}
                                  onChange={e => {
                                    updateFilterProp('showDropdown', index, e.target.checked)
                                  }}
                                />
                              </label>

                              <label>
                                <span className='edit-label column-heading'>Filter Style</span>

                                <select
                                  value={filter.filterStyle}
                                  onChange={e => {
                                    updateFilterProp('filterStyle', index, e.target.value)
                                  }}
                                >
                                  {filterStyleOptions.map(item => {
                                    return <option value={item}>{item}</option>
                                  })}
                                </select>
                              </label>
                              <label>
                                <span className='edit-label column-heading'>Label</span>
                                <input
                                  type='text'
                                  value={filter.label}
                                  onChange={e => {
                                    updateFilterProp('label', index, e.target.value)
                                  }}
                                />
                              </label>

                              <label>
                                <span className='edit-filterOrder column-heading'>Filter Order</span>
                                <select value={filter.order ? filter.order : 'asc'} onChange={e => updateFilterProp('order', index, e.target.value)}>
                                  {filterOrderOptions.map((option, index) => {
                                    return (
                                      <option value={option.value} key={`filter-${index}`}>
                                        {option.label}
                                      </option>
                                    )
                                  })}
                                </select>

                                {filter.order === 'cust' && (
                                  <DragDropContext onDragEnd={({ source, destination }) => handleFilterOrder(source.index, destination.index, index, config.filters[index])}>
                                    <Droppable droppableId='filter_order'>
                                      {provided => (
                                        <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
                                          {config.filters[index]?.values.map((value, index) => {
                                            return (
                                              <Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
                                                {(provided, snapshot) => (
                                                  <li>
                                                    <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                      {value}
                                                    </div>
                                                  </li>
                                                )}
                                              </Draggable>
                                            )
                                          })}
                                          {provided.placeholder}
                                        </ul>
                                      )}
                                    </Droppable>
                                  </DragDropContext>
                                )}
                              </label>
                            </fieldset>
                          )
                        })}
                      </ul>
                    )}
                    {!config.filters && <p style={{ textAlign: 'center' }}>There are currently no filters.</p>}
                    <button type='button' onClick={addNewFilter} className='btn full-width'>
                      Add Filter
                    </button>
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Visual</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.isLollipopChart && (
                    <>
                      <fieldset className='header'>
                        <legend className='edit-label'>Lollipop Shape</legend>
                        <div
                          onChange={e => {
                            setLollipopShape(e.target.value)
                          }}
                        >
                          <label className='radio-label'>
                            <input type='radio' name='lollipopShape' value='circle' checked={config.lollipopShape === 'circle'} />
                            Circle
                          </label>
                          <label className='radio-label'>
                            <input type='radio' name='lollipopShape' value='square' checked={config.lollipopShape === 'square'} />
                            Square
                          </label>
                        </div>
                      </fieldset>
                      <Select value={config.lollipopColorStyle ? config.lollipopColorStyle : 'two-tone'} fieldName='lollipopColorStyle' label='Lollipop Color Style' updateField={updateField} options={['regular', 'two-tone']} />
                      <Select value={config.lollipopSize ? config.lollipopSize : 'small'} fieldName='lollipopSize' label='Lollipop Size' updateField={updateField} options={['small', 'medium', 'large']} />
                    </>
                  )}

                  {config.visualizationType === 'Box Plot' && (
                    <fieldset className='fieldset fieldset--boxplot'>
                      <legend className=''>Box Plot Settings</legend>
                      <Select value={config.boxplot.borders} fieldName='borders' section='boxplot' label='Box Plot Borders' updateField={updateField} options={['true', 'false']} />
                      <CheckBox value={config.boxplot.plotOutlierValues} fieldName='plotOutlierValues' section='boxplot' label='Plot Outliers' updateField={updateField} />
                      <CheckBox value={config.boxplot.plotNonOutlierValues} fieldName='plotNonOutlierValues' section='boxplot' label='Plot non-outlier values' updateField={updateField} />
                    </fieldset>
                  )}

                  <Select value={config.fontSize} fieldName='fontSize' label='Font Size' updateField={updateField} options={['small', 'medium', 'large']} />
                  {visHasBarBorders() && <Select value={config.barHasBorder} fieldName='barHasBorder' label='Bar Borders' updateField={updateField} options={['true', 'false']} />}
                  {visCanAnimate() && <CheckBox value={config.animate} fieldName='animate' label='Animate Visualization' updateField={updateField} />}

                  {/*<CheckBox value={config.animateReplay} fieldName="animateReplay" label="Replay Animation When Filters Are Changed" updateField={updateField} />*/}

                  {((config.series?.some(series => series.type === 'Line' || series.type === 'dashed-lg' || series.type === 'dashed-sm' || series.type === 'dashed-md') && config.visualizationType === 'Combo') || config.visualizationType === 'Line') && (
                    <>
                      <Select value={config.lineDatapointStyle} fieldName='lineDatapointStyle' label='Line Datapoint Style' updateField={updateField} options={['hidden', 'hover', 'always show']} />
                      <Select value={config.lineDatapointColor} fieldName='lineDatapointColor' label='Line Datapoint Color' updateField={updateField} options={['Same as Line', 'Lighter than Line']} />
                    </>
                  )}

                  {/* eslint-disable */}
                  <label className='header'>
                    <span className='edit-label'>Header Theme</span>
                    <ul className='color-palette'>
                      {headerColors.map(palette => (
                        <button
                          title={palette}
                          key={palette}
                          onClick={e => {
                            e.preventDefault()
                            updateConfig({ ...config, theme: palette })
                          }}
                          className={config.theme === palette ? 'selected ' + palette : palette}
                        ></button>
                      ))}
                    </ul>
                  </label>
                  {/* eslint-enable */}
                  {(visSupportsNonSequentialPallete() || visSupportsNonSequentialPallete()) && (
                    <>
                      <label>
                        <span className='edit-label'>Chart Color Palette</span>
                      </label>
                      {visSupportsReverseColorPalette() && <InputToggle fieldName='isPaletteReversed' size='small' label='Use selected palette in reverse order' updateField={updateField} value={config.isPaletteReversed} />}
                      {visSupportsSequentialPallete() && (
                        <>
                          <span>Sequential</span>
                          <ul className='color-palette'>
                            {sequential.map(palette => {
                              const colorOne = {
                                backgroundColor: colorPalettes[palette][2]
                              }

                              const colorTwo = {
                                backgroundColor: colorPalettes[palette][3]
                              }

                              const colorThree = {
                                backgroundColor: colorPalettes[palette][5]
                              }

                              return (
                                <button
                                  title={palette}
                                  key={palette}
                                  onClick={e => {
                                    e.preventDefault()
                                    updateConfig({ ...config, palette })
                                  }}
                                  className={config.palette === palette ? 'selected' : ''}
                                >
                                  <span style={colorOne}></span>
                                  <span style={colorTwo}></span>
                                  <span style={colorThree}></span>
                                </button>
                              )
                            })}
                          </ul>
                        </>
                      )}
                      {visSupportsNonSequentialPallete() && (
                        <>
                          <span>Non-Sequential</span>
                          <ul className='color-palette'>
                            {nonSequential.map(palette => {
                              const colorOne = {
                                backgroundColor: colorPalettes[palette][2]
                              }

                              const colorTwo = {
                                backgroundColor: colorPalettes[palette][4]
                              }

                              const colorThree = {
                                backgroundColor: colorPalettes[palette][6]
                              }

                              return (
                                <button
                                  title={palette}
                                  key={palette}
                                  onClick={e => {
                                    e.preventDefault()
                                    updateConfig({ ...config, palette })
                                  }}
                                  className={config.palette === palette ? 'selected' : ''}
                                >
                                  <span style={colorOne}></span>
                                  <span style={colorTwo}></span>
                                  <span style={colorThree}></span>
                                </button>
                              )
                            })}
                          </ul>
                        </>
                      )}
                    </>
                  )}
                  {(config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar') && (
                    <>
                      <InputToggle section='twoColor' fieldName='isPaletteReversed' size='small' label='Use selected palette in reverse order' updateField={updateField} value={config.twoColor.isPaletteReversed} />
                      <ul className='color-palette'>
                        {twoColorPalettes.map(palette => {
                          const colorOne = {
                            backgroundColor: twoColorPalette[palette][0]
                          }

                          const colorTwo = {
                            backgroundColor: twoColorPalette[palette][1]
                          }

                          return (
                            <button
                              title={palette}
                              key={palette}
                              onClick={e => {
                                e.preventDefault()
                                updateConfig({ ...config, twoColor: { ...config.twoColor, palette } })
                              }}
                              className={config.twoColor.palette === palette ? 'selected' : ''}
                            >
                              <span className='two-color' style={colorOne}></span>
                              <span className='two-color' style={colorTwo}></span>
                            </button>
                          )
                        })}
                      </ul>
                    </>
                  )}

                  {visHasDataCutoff() && (
                    <>
                      <TextField
                        value={config.dataCutoff}
                        type='number'
                        fieldName='dataCutoff'
                        className='number-narrow'
                        label='Data Cutoff'
                        updateField={updateField}
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                    </>
                  )}
                  {visSupportsBarThickness() && config.orientation === 'horizontal' && !config.isLollipopChart && config.yAxis.labelPlacement !== 'On Bar' && <TextField type='number' value={config.barHeight || '25'} fieldName='barHeight' label=' Bar Thickness' updateField={updateField} min={15} />}
                  {((config.visualizationType === 'Bar' && config.orientation !== 'horizontal') || config.visualizationType === 'Combo') && <TextField value={config.barThickness} type='number' fieldName='barThickness' label='Bar Thickness' updateField={updateField} />}
                  {visSupportsBarSpace() && <TextField type='number' value={config.barSpace || '15'} fieldName='barSpace' label='Bar Space' updateField={updateField} min={0} />}
                  {(config.visualizationType === 'Bar' || config.visualizationType === 'Line' || config.visualizationType === 'Combo') && <CheckBox value={config.topAxis.hasLine} section='topAxis' fieldName='hasLine' label='Add Top Axis Line' updateField={updateField} />}

                  {config.visualizationType === 'Spark Line' && (
                    <div className='cove-accordion__panel-section checkbox-group'>
                      <CheckBox value={config.visual?.border} section='visual' fieldName='border' label='Show Border' updateField={updateField} />
                      <CheckBox value={config.visual?.borderColorTheme} section='visual' fieldName='borderColorTheme' label='Use Border Color Theme' updateField={updateField} />
                      <CheckBox value={config.visual?.accent} section='visual' fieldName='accent' label='Use Accent Style' updateField={updateField} />
                      <CheckBox value={config.visual?.background} section='visual' fieldName='background' label='Use Theme Background Color' updateField={updateField} />
                      <CheckBox value={config.visual?.hideBackgroundColor} section='visual' fieldName='hideBackgroundColor' label='Hide Background Color' updateField={updateField} />
                    </div>
                  )}

                  {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') && <CheckBox value={config.showLineSeriesLabels} fieldName='showLineSeriesLabels' label='Append Series Name to End of Line Charts' updateField={updateField} />}
                  {(config.visualizationType === 'Line' || config.visualizationType === 'Combo') && config.showLineSeriesLabels && (
                    <CheckBox value={config.colorMatchLineSeriesLabels} fieldName='colorMatchLineSeriesLabels' label='Match Series Color to Name at End of Line Charts' updateField={updateField} />
                  )}

                  {visSupportsTooltipLines() && (
                    <>
                      <CheckBox value={config.visual.verticalHoverLine} fieldName='verticalHoverLine' section='visual' label='Vertical Hover Line' updateField={updateField} />
                      <CheckBox value={config.visual.horizontalHoverLine} fieldName='horizontalHoverLine' section='visual' label='Horizontal Hover Line' updateField={updateField} />
                    </>
                  )}
                  {visSupportsTooltipOpacity() && (
                    <label>
                      <span className='edit-label column-heading'>Tooltip Opacity</span>
                      <input
                        type='number'
                        value={config.tooltips.opacity ? config.tooltips.opacity : 100}
                        onChange={e =>
                          updateConfig({
                            ...config,
                            tooltips: {
                              ...config.tooltips,
                              opacity: e.target.value
                            }
                          })
                        }
                      />
                    </label>
                  )}
                  {config.visualizationType === 'Bar' && <CheckBox value={config.tooltips.singleSeries} fieldName='singleSeries' section='tooltips' label='SHOW HOVER FOR SINGLE DATA SERIES' updateField={updateField} />}

                  <label>
                    <span className='edit-label column-heading'>No Data Message</span>
                    <input
                      type='text'
                      value={config.chartMessage.noData ? config.chartMessage.noData : ''}
                      onChange={e =>
                        updateConfig({
                          ...config,
                          chartMessage: {
                            ...config.chartMessage,
                            noData: e.target.value
                          }
                        })
                      }
                    />
                  </label>
                </AccordionItemPanel>
              </AccordionItem>
              {/* Spark Line has no data table */}
              {config.visualizationType !== 'Spark Line' && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Data Table</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <DataTableEditor config={config} columns={Object.keys(data[0] || {})} updateField={updateField} isDashboard={isDashboard} isLoadedFromUrl={isLoadedFromUrl} />{' '}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              {/* {(config.visualizationType === 'Bar' || config.visualizationType === 'Line') && <Panels.DateHighlighting name='Date Highlighting' />} */}
            </Accordion>
            {config.type !== 'Spark Line' && <AdvancedEditor loadConfig={updateConfig} state={config} convertStateToConfig={convertStateToConfig} />}
          </section>
        </section>
      </ErrorBoundary>
    </EditorPanelContext.Provider>
  )
}

export default EditorPanel
