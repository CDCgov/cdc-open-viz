import React, { useState, useEffect, useCallback, memo, useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

import { useDebounce } from 'use-debounce'

import ConfigContext from '../ConfigContext'
import WarningImage from '../images/warning.svg'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { useColorPalette } from '../hooks/useColorPalette'

import InputToggle from '@cdc/core/components/inputs/InputToggle'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import useReduceData from '../hooks/useReduceData'
import useRightAxis from '../hooks/useRightAxis'
import { useFilters } from '@cdc/core/components/Filters'
import { useHighlightedBars } from '../hooks/useHighlightedBars'

/* eslint-disable react-hooks/rules-of-hooks */
const TextField = memo(({ label, tooltip, section = null, subsection = null, fieldName, updateField, value: stateValue, type = 'input', i = null, min = null, ...attributes }) => {
  const [value, setValue] = useState(stateValue)

  const [debouncedValue] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue]) // eslint-disable-line

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = e => {
    if ('number' !== type || min === null) {
      setValue(e.target.value)
    } else {
      if (!e.target.value || min <= parseFloat(e.target.value)) {
        setValue(e.target.value)
      } else {
        setValue(min.toString())
      }
    }
  }

  let formElement = <input type='text' name={name} onChange={onChange} {...attributes} value={value} />

  if ('textarea' === type) {
    formElement = <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>
  }

  if ('number' === type) {
    formElement = <input type='number' name={name} onChange={onChange} {...attributes} value={value} />
  }

  if ('date' === type) {
    formElement = <input type='date' name={name} onChange={onChange} {...attributes} value={value} />
  }

  return (
    <label>
      <span className='edit-label column-heading'>
        {label}
        {tooltip}
      </span>
      {formElement}
    </label>
  )
})

const CheckBox = memo(({ label, value, fieldName, section = null, subsection = null, tooltip, updateField, ...attributes }) => (
  <label className='checkbox column-heading'>
    <input
      type='checkbox'
      name={fieldName}
      checked={value}
      onChange={e => {
        updateField(section, subsection, fieldName, !value)
      }}
      {...attributes}
    />
    <span className='edit-label'>
      {label}
      {tooltip}
    </span>
  </label>
))

const Select = memo(({ label, value, options, fieldName, section = null, subsection = null, required = false, tooltip, updateField, initial: initialValue, ...attributes }) => {
  let optionsJsx = options.map((optionName, index) => (
    <option value={optionName} key={index}>
      {optionName}
    </option>
  ))

  if (initialValue) {
    optionsJsx.unshift(
      <option value='' key='initial'>
        {initialValue}
      </option>
    )
  }

  return (
    <label>
      <span className='edit-label'>
        {label}
        {tooltip}
      </span>
      <select
        className={required && !value ? 'warning' : ''}
        name={fieldName}
        value={value}
        onChange={event => {
          updateField(section, subsection, fieldName, event.target.value)
        }}
        {...attributes}
      >
        {optionsJsx}
      </select>
    </label>
  )
})

const Regions = memo(({ config, updateConfig }) => {
  let regionUpdate = (fieldName, value, i) => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions[i][fieldName] = value
    updateConfig({ ...config, regions })
  }

  let updateField = (section, subsection, fieldName, value, i) => regionUpdate(fieldName, value, i)

  let removeColumn = i => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions.splice(i, 1)

    updateConfig({ ...config, regions })
  }

  let addColumn = () => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions.push({})

    updateConfig({ ...config, regions })
  }

  return (
    <>
      {config.regions &&
        config.regions.map(({ label, color, from, to, background }, i) => (
          <div className='edit-block' key={`region-${i}`}>
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
            <TextField value={label} label='Region Label' fieldName='label' i={i} updateField={updateField} />
            <div className='two-col-inputs'>
              <TextField value={color} label='Text Color' fieldName='color' updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)} />
              <TextField value={background} label='Background' fieldName='background' updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)} />
            </div>
            <div className='two-col-inputs'>
              <TextField value={from} label='From Value' fieldName='from' updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)} />
              <TextField value={to} label='To Value' fieldName='to' updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)} />
            </div>
          </div>
        ))}
      {!config.regions && <p style={{ textAlign: 'center' }}>There are currently no regions.</p>}
      <button
        type='button'
        className='btn full-width'
        onClick={e => {
          e.preventDefault()
          addColumn()
        }}
      >
        Add Region
      </button>
    </>
  )
})

const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

const EditorPanel = () => {
  const { config, updateConfig, transformedData: data, loading, colorPalettes, twoColorPalette, unfilteredData, excludedData, isDashboard, setParentConfig, missingRequiredSections, isDebug, setFilteredData, lineOptions } = useContext(ConfigContext)

  const { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, unfilteredData)

  const { twoColorPalettes, sequential, nonSequential } = useColorPalette(config, updateConfig)

  // argument acts as props
  const { handleFilterOrder, filterOrderOptions, filterStyleOptions } = useFilters({ config, setConfig: updateConfig, filteredData: data, setFilteredData })

  const approvedCurveTypes = {
    Linear: 'curveLinear',
    Cardinal: 'curveCardinal',
    Natural: 'curveNatural',
    'Monotone X': 'curveMonotoneX',
    Step: 'curveStep'
  }

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
    newSeries.push({ dataKey: seriesKey, type: config.visualizationType })
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
      Object.keys(columns).forEach(key => {
        if (
          (config.series && config.series.filter(series => series.dataKey === key).length > 0) ||
          (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key))
          /*
            TODO: Resolve errors when config keys exist, but have no value
              Proposal:  (((confidenceUpper && confidenceLower) || confidenceUpper || confidenceLower) && Object.keys(config.confidenceKeys).includes(key))
          */
        ) {
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

  const visHasLegend = () => {
    const { visualizationType } = config

    switch (visualizationType) {
      case 'Box Plot':
        return false
      default:
        return true
    }
  }

  const visCanAnimate = () => {
    const { visualizationType } = config
    switch (visualizationType) {
      case 'Area Chart':
        return false
      case 'Scatter Plot':
        return false
      case 'Box Plot':
        return false
      default:
        return true
    }
  }

  const visHasDataCutoff = () => {
    const { visualizationType } = config
    switch (visualizationType) {
      case 'Box Plot':
        return false
      case 'Pie':
        return false
      default:
        return true
    }
  }

  const visHasLabelOnData = () => {
    const { visualizationType } = config
    switch (visualizationType) {
      case 'Area Chart':
        return false
      case 'Box Plot':
        return false
      case 'Pie':
        return false
      case 'Scatter Plot':
        return false
      default:
        return true
    }
  }

  const visHasAnchors = () => {
    const { visualizationType } = config
    switch (visualizationType) {
      case 'Area Chart':
        return true
      case 'Combo':
        return true
      case 'Line':
        return true
      case 'Bar':
        return true
      case 'Scatter Plot':
        return true
      default:
        return false
    }
  }

  const visHasBarBorders = () => {
    const { series, visualizationType } = config
    if (visualizationType === 'Box Plot') return false
    if (visualizationType === 'Scatter Plot') return false
    if (visualizationType === 'Pie') return false
    return series?.some(series => series.type === 'Bar' || series.type === 'Paired Bar' || series.type === 'Deviation Bar')
  }

  const handleSeriesChange = (idx1, idx2) => {
    let seriesOrder = config.series
    let [movedItem] = seriesOrder.splice(idx1, 1)
    seriesOrder.splice(idx2, 0, movedItem)
    updateConfig({ ...config, series: seriesOrder })
  }

  if (config.isLollipopChart && config?.series?.length > 1) {
    config.runtime.editorErrorMessage = 'Lollipop charts must use only one data series'
  }

  if (config.isLollipopChart && config?.series?.length === 0) {
    config.runtime.editorErrorMessage = 'Add a data series'
  }

  const section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
  const [warningMsg, setWarningMsg] = useState({ maxMsg: '', minMsg: '' })

  const validateMaxValue = () => {
    const enteredValue = config[section].max
    let message = ''

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
    setWarningMsg(prevMsg => ({ ...prevMsg, maxMsg: message }))
  }

  const validateMinValue = () => {
    const enteredValue = config[section].min
    let minVal = Number(minValue)
    let message = ''

    switch (true) {
      case config.useLogScale && ['Line', 'Combo', 'Bar'].includes(config.visualizationType) && enteredValue < 0:
        message = 'Negative numbers are not supported in logarithmic scale'
        break
      case (config.visualizationType === 'Line' || config.visualizationType === 'Spark Line') && enteredValue && parseFloat(enteredValue) > minVal:
        message = 'Value should not exceed ' + minValue
        break
      case config.visualizationType === 'Combo' && isAllLine && enteredValue && parseFloat(enteredValue) > minVal:
        message = 'Value should not exceed ' + minValue
        break
      case (config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && !isAllLine)) && enteredValue && minVal > 0 && parseFloat(enteredValue) > 0:
        message = config.useLogScale ? 'Value must be equal to 0' : 'Value must be less than or equal to 0'
        break
      case config.visualizationType === 'Deviation Bar' && parseFloat(enteredValue) >= Math.min(minVal, config.xAxis.target):
        message = 'Value must be less than ' + Math.min(minVal, config.xAxis.target)
        break
      case config.visualizationType !== 'Deviation Bar' && enteredValue && minVal < 0 && parseFloat(enteredValue) > minVal:
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

  // prettier-ignore
  const enabledChartTypes = [
    'Area Chart',
    'Bar',
    'Box Plot',
    'Combo',
    'Deviation Bar',
    'Line',
    'Paired Bar',
    'Pie',
    'Scatter Plot',
    'Spark Line'
  ]

  const isLoadedFromUrl = config?.dataKey?.includes('http://') || config?.dataKey?.includes('https://')

  // if isDebug = true, then try to set the category and data col to reduce clicking
  const setCategoryAxis = () => {
    // only for debug mode
    if (undefined !== isDebug && isDebug && !config?.xAxis?.dataKey) {
      // then try to set the x axis to appropriate value so we dont have to manually do it
      let datakeys = getColumns(false)
      if (datakeys.includes('Date')) return 'Date'
      if (datakeys.includes('Race')) return 'Race'
      // add other known Category cols here to extend debug
    }
    return ''
  }
  const setDataColumn = () => {
    // only for debug mode
    if (undefined !== isDebug && isDebug && getColumns(false).length > 0) {
      // then try to set the x axis to appropriate value so we dont have to manually do it
      let datacols = getColumns(false).filter(x => x !== 'Date' && x !== 'Race')
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

  const chartsWithOptions = ['Area Chart', 'Combo', 'Line', 'Bar']

  const columnsOptions = [
    <option value='' key={'Select Option'}>
      - Select Option -
    </option>
  ]

  if (config.data && config.series) {
    Object.keys(config.data[0]).map(colName => {
      // OMIT ANY COLUMNS THAT ARE IN DATA SERIES!
      const found = config?.series.some(el => el.dataKey === colName)
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
          suffix: ''
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

  return (
    <ErrorBoundary component='EditorPanel'>
      {config.newViz && <Confirm />}
      {undefined === config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}></button>
      <section className={`${displayPanel ? 'editor-panel cove' : 'hidden editor-panel cove'}${isDashboard ? ' dashboard' : ''}`}>
        <div aria-level='2' role='heading' className='heading-2'>
          Configure Chart
        </div>
        <section className='form-container'>
          <form>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                {' '}
                {/* General */}
                <AccordionItemHeading>
                  <AccordionItemButton>General</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.visualizationType} fieldName='visualizationType' label='Chart Type' updateField={updateField} options={enabledChartTypes} />
                  {(config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && <Select value={config.visualizationSubType || 'Regular'} fieldName='visualizationSubType' label='Chart Subtype' updateField={updateField} options={['regular', 'stacked']} />}
                  {config.visualizationType === 'Bar' && <Select value={config.orientation || 'vertical'} fieldName='orientation' label='Orientation' updateField={updateField} options={['vertical', 'horizontal']} />}
                  {config.visualizationType === 'Deviation Bar' && <Select label='Orientation' options={['horizontal']} />}
                  {(config.visualizationType === 'Bar' || config.visualizationType === 'Deviation Bar') && <Select value={config.isLollipopChart ? 'lollipop' : config.barStyle || 'flat'} fieldName='barStyle' label='bar style' updateField={updateField} options={showBarStyleOptions()} />}
                  {(config.visualizationType === 'Bar' || config.visualizationType === 'Deviation Bar') && config.barStyle === 'rounded' && <Select value={config.tipRounding || 'top'} fieldName='tipRounding' label='tip rounding' updateField={updateField} options={['top', 'full']} />}
                  {(config.visualizationType === 'Bar' || config.visualizationType === 'Deviation Bar') && config.barStyle === 'rounded' && (
                    <Select value={config.roundingStyle || 'standard'} fieldName='roundingStyle' label='rounding style' updateField={updateField} options={['standard', 'shallow', 'finger']} />
                  )}
                  {config.visualizationType === 'Bar' && config.orientation === 'horizontal' && <Select value={config.yAxis.labelPlacement || 'Below Bar'} section='yAxis' fieldName='labelPlacement' label='Label Placement' updateField={updateField} options={['Below Bar', 'On Date/Category Axis']} />}
                  {config.orientation === 'horizontal' && (config.yAxis.labelPlacement === 'Below Bar' || config.yAxis.labelPlacement === 'On Date/Category Axis' || config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar') ? (
                    <CheckBox value={config.yAxis.displayNumbersOnBar} section='yAxis' fieldName='displayNumbersOnBar' label={config.isLollipopChart ? 'Display Numbers after Bar' : 'Display Numbers on Bar'} updateField={updateField} />
                  ) : (
                    visHasLabelOnData() && <CheckBox value={config.labels} fieldName='labels' label='Display label on data' updateField={updateField} />
                  )}
                  {config.visualizationType === 'Pie' && <Select fieldName='pieType' label='Pie Chart Type' updateField={updateField} options={['Regular', 'Donut']} />}

                  <TextField
                    value={config.title || 'Chart Title'}
                    fieldName='title'
                    id='title'
                    label='Title'
                    placeholder='Chart Title'
                    //defaultValue='Chart Title'
                    updateField={updateField}
                    //onChange={handleTitleChange}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Title is required to set the name of the download file but can be hidden using the option below.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <CheckBox value={config.showTitle} fieldName='showTitle' label='Show Title' updateField={updateField} />
                  <TextField
                    value={config.superTitle}
                    updateField={updateField}
                    fieldName='superTitle'
                    label='Super Title'
                    placeholder='Super Title'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Super Title</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <TextField
                    type='textarea'
                    value={config.introText}
                    updateField={updateField}
                    fieldName='introText'
                    label='Intro Text'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Intro Text</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <TextField
                    type='textarea'
                    value={config.description}
                    fieldName='description'
                    label='Subtext'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <TextField
                    type='textarea'
                    value={config.footnotes}
                    updateField={updateField}
                    fieldName='footnotes'
                    label='Footnotes'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Footnotes</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  {config.orientation === 'vertical' && <TextField type='number' value={config.heights.vertical} section='heights' fieldName='vertical' label='Chart Height' updateField={updateField} />}
                </AccordionItemPanel>
              </AccordionItem>
              {config.visualizationType !== 'Pie' && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Data Series {(!config.series || config.series.length === 0 || (config.visualizationType === 'Paired Bar' && config.series.length < 2)) && <WarningImage width='25' className='warning-icon' />}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {(!config.series || config.series.length === 0) && config.visualizationType !== 'Paired Bar' && <p className='warning'>At least one series is required</p>}
                    {(!config.series || config.series.length === 0 || config.series.length < 2) && config.visualizationType === 'Paired Bar' && <p className='warning'>Select two data series for paired bar chart (e.g., Male and Female).</p>}
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
                      <>
                        <fieldset>
                          <legend className='edit-label float-left'>Displaying</legend>
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>A data series is a set of related data points plotted in a chart and typically represented in the chart legend.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </fieldset>

                        <DragDropContext onDragEnd={({ source, destination }) => handleSeriesChange(source.index, destination.index)}>
                          <Droppable droppableId='filter_order'>
                            {provided => (
                              <ul {...provided.droppableProps} className='series-list' ref={provided.innerRef}>
                                {config.series.map((series, i) => {
                                  if (config.visualizationType === 'Combo' || 'Area Chart') {
                                    let changeType = (i, value) => {
                                      let series = [...config.series]
                                      series[i].type = value

                                      series[i].axis = 'Left'

                                      updateConfig({ ...config, series })
                                    }

                                    let changeLineType = (i, value) => {
                                      let series = [...config.series]
                                      series[i].lineType = value
                                      updateConfig({ ...config, series })
                                    }

                                    let changeSeriesName = (i, value) => {
                                      let series = [...config.series]
                                      let seriesLabelsCopy = { ...config.runtime.seriesLabels }
                                      series[i].name = value
                                      seriesLabelsCopy[series[i].dataKey] = series[i].name

                                      let newConfig = {
                                        ...config,
                                        series
                                      }

                                      updateConfig(newConfig)
                                    }

                                    let typeDropdown = (
                                      <>
                                        <label htmlFor='type-dropdown'>Series Type</label>
                                        <select
                                          name='type-dropdown'
                                          value={series.type}
                                          onChange={event => {
                                            changeType(i, event.target.value)
                                          }}
                                        >
                                          <option value='' default key='default'>
                                            Select
                                          </option>
                                          {config.visualizationType === 'Combo' && <option value='Bar'>Bar</option>}
                                          <option value='Line' key='Line'>
                                            Solid Line
                                          </option>
                                          <option value='dashed-sm' key='dashed-sm'>
                                            Small Dashed
                                          </option>
                                          <option value='dashed-md' key='dashed-md'>
                                            Medium Dashed
                                          </option>
                                          <option value='dashed-lg' key='dashed-lg'>
                                            Large Dashed
                                          </option>
                                          <option value='Area Chart' key='Area Chart'>
                                            Area
                                          </option>
                                        </select>
                                      </>
                                    )

                                    // used for assigning axis
                                    let changeAxis = (i, value) => {
                                      let series = [...config.series]
                                      series[i].axis = value
                                      updateConfig({ ...config, series })
                                    }

                                    // assign an axis dropdown
                                    let axisDropdown = (
                                      <>
                                        <label htmlFor='assign-axis'>Assign an axis</label>
                                        <select
                                          name='assign-axis'
                                          value={series.axis}
                                          onChange={event => {
                                            changeAxis(i, event.target.value)
                                          }}
                                        >
                                          <option value='Left' default key='left'>
                                            left
                                          </option>
                                          <option value='Right' key='right'>
                                            right
                                          </option>
                                        </select>
                                      </>
                                    )

                                    // line type dropdown
                                    const lineType = (
                                      <>
                                        <label htmlFor='line-type'>Line Type</label>
                                        <select
                                          name='line-type'
                                          value={series.lineStyle}
                                          onChange={event => {
                                            changeLineType(i, event.target.value)
                                          }}
                                          key='lineTypeSelection'
                                        >
                                          <option value='' default>
                                            Select
                                          </option>

                                          {Object.keys(approvedCurveTypes).map(curveName => {
                                            return (
                                              <option key={`curve-option-${approvedCurveTypes[curveName]}`} value={approvedCurveTypes[curveName]}>
                                                {curveName}
                                              </option>
                                            )
                                          })}
                                        </select>
                                      </>
                                    )

                                    const seriesName = (
                                      <>
                                        <label htmlFor='series-name'>Series Name</label>
                                        <input
                                          type='text'
                                          key={`series-name-${i}`}
                                          value={series.name ? series.name : ''}
                                          onChange={event => {
                                            changeSeriesName(i, event.target.value)
                                          }}
                                        />
                                      </>
                                    )

                                    return (
                                      <Draggable key={series.dataKey} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
                                        {(provided, snapshot) => (
                                          <>
                                            <div key={i} className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                              <div className={`series-list__name ${series.dataKey.length > 15 ? ' series-list__name--truncate' : ''}`} data-title={series.dataKey}></div>
                                              <Accordion allowZeroExpanded>
                                                <AccordionItem className='series-item series-item--chart'>
                                                  <AccordionItemHeading className='series-item__title'>
                                                    <AccordionItemButton className={chartsWithOptions.includes(config.visualizationType) ? 'accordion__button' : 'accordion__button hide-arrow'}>
                                                      <Icon display='move' size={15} style={{ cursor: 'default' }} />
                                                      {series.dataKey}
                                                      {config.series && config.series.length > 1 && (
                                                        <button className='series-list__remove' onClick={() => removeSeries(series.dataKey)}>
                                                          Remove
                                                        </button>
                                                      )}
                                                    </AccordionItemButton>
                                                  </AccordionItemHeading>
                                                  {chartsWithOptions.includes(config.visualizationType) && (
                                                    <AccordionItemPanel>
                                                      <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        {config.visualizationType === 'Combo' && (
                                                          <>
                                                            <span className='series-list__dropdown series-item__dropdown'>{typeDropdown}</span>
                                                            {hasRightAxis && config.series && (series.type === 'Line' || series.type === 'dashed-sm' || series.type === 'dashed-md' || series.type === 'dashed-lg') && <span className='series-item__dropdown series-list__dropdown'>{axisDropdown}</span>}
                                                          </>
                                                        )}
                                                        {['Line', 'dashed-sm', 'dashed-md', 'dashed-lg', 'Area Chart'].some(item => item.includes(series.type)) && <span className='series-item__dropdown series-list__dropdown series-list__dropdown--lineType'>{lineType}</span>}
                                                        {['Line', 'dashed-sm', 'dashed-md', 'dashed-lg', 'Area Chart', 'Bar'].some(item => item.includes(series.type)) && <span className='series-item__input  series-item__input--name'>{seriesName}</span>}
                                                      </div>
                                                    </AccordionItemPanel>
                                                  )}
                                                </AccordionItem>
                                              </Accordion>
                                            </div>
                                          </>
                                        )}
                                      </Draggable>
                                    )
                                  }

                                  return (
                                    <Draggable key={`series.dataKey--${i}`} draggableId={`draggableFilter-${series.dataKey}`} index={i}>
                                      {(provided, snapshot) => (
                                        <li
                                          key={series.dataKey}
                                          className={snapshot.isDragging ? 'currently-dragging' : ''}
                                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          {/*<div  className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>*/}
                                          <div className='series-list__name' data-title={series.dataKey}>
                                            <div className='series-list__name--text'>{series.dataKey}</div>
                                          </div>
                                          {config.series && config.series.length > 1 && (
                                            <button className='series-list__remove' onClick={() => removeSeries(series.dataKey)}>
                                              &#215;
                                            </button>
                                          )}
                                          {/*</div>*/}
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
                      </>
                    )}

                    {config.series && config.series.length <= 1 && config.visualizationType === 'Bar' && (
                      <>
                        <span className='divider-heading'>Confidence Keys</span>
                        <Select value={config.confidenceKeys.upper || ''} section='confidenceKeys' fieldName='upper' label='Upper' updateField={updateField} initial='Select' options={getColumns()} />
                        <Select value={config.confidenceKeys.lower || ''} section='confidenceKeys' fieldName='lower' label='Lower' updateField={updateField} initial='Select' options={getColumns()} />
                      </>
                    )}

                    {config.series && config.series.length === 1 && <Select fieldName='visualizationType' label='Rank by Value' initial='Select' onChange={e => sortSeries(e.target.value)} options={['asc', 'desc']} />}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              {config.visualizationType === 'Box Plot' && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Measures</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <h4 style={{ fontSize: '18px' }}>Labels for 5-Number Summary</h4>

                    {/* prettier-ignore */}
                    {/* max */}
                    <TextField
                      type='text'
                      value={config.boxplot.labels.maximum}
                      fieldName='maximum'
                      section='boxplot'
                      subsection='labels'
                      label='Maximum'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Highest value, excluding outliers</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />

                    {/* prettier-ignore */}
                    {/* Q3 */}
                    <TextField
                      type='text'
                      value={config.boxplot.labels.q3}
                      fieldName='q3'
                      section='boxplot'
                      subsection='labels'
                      label='Upper Quartile'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Represented by top line of box. 25% of data are higher.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />

                    {/* prettier-ignore */}
                    {/* median */}
                    <TextField
                      type='text'
                      value={config.boxplot.labels.median}
                      fieldName='median'
                      section='boxplot'
                      subsection='labels'
                      label='Median'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Middle data point. Half of data are higher value.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />

                    {/* prettier-ignore */}
                    {/* q1 */}
                    <TextField
                      type='text'
                      value={config.boxplot.labels.q1}
                      fieldName='q1'
                      section='boxplot'
                      subsection='labels'
                      label='Lower Quartile'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Represented by bottom line of box. 25% of data are lower.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />

                    {/* prettier-ignore */}
                    {/* minimum */}
                    <TextField
                      type='text'
                      value={config.boxplot.labels.minimum}
                      fieldName='minimum'
                      section='boxplot'
                      subsection='labels'
                      label='Minimum'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Lowest value, excluding outliers</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <br />
                    <h4 style={{ fontSize: '18px' }}>Labels for Additional Measures</h4>

                    {/* iqr */}
                    <TextField type='text' value={config.boxplot.labels.iqr} fieldName='iqr' section='boxplot' subsection='labels' label='Interquartile Range' updateField={updateField} />

                    {/* count */}
                    <TextField type='text' value={config.boxplot.labels.total} fieldName='total' section='boxplot' subsection='labels' label='Total' updateField={updateField} />

                    {/* mean */}
                    <TextField type='text' value={config.boxplot.labels.mean} fieldName='mean' section='boxplot' subsection='labels' label='Mean' updateField={updateField} />
                    {/* outliers */}
                    <TextField type='text' value={config.boxplot.labels.outliers} fieldName='outliers' section='boxplot' subsection='labels' label='Outliers' updateField={updateField} />
                    {/* values */}
                    <TextField type='text' value={config.boxplot.labels.values} fieldName='values' section='boxplot' subsection='labels' label='Values' updateField={updateField} />
                    <br />
                    <h4 style={{ fontSize: '18px' }}>Percentages for Quartiles</h4>
                    <TextField
                      type='number'
                      value={config.boxplot.firstQuartilePercentage ? config.boxplot.firstQuartilePercentage : 25}
                      fieldName='firstQuartilePercentage'
                      section='boxplot'
                      label='Lower Quartile'
                      max={100}
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Represented by bottom line of box. 25% of data are lower.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />

                    <TextField
                      type='number'
                      value={config.boxplot.thirdQuartilePercentage ? config.boxplot.thirdQuartilePercentage : 75}
                      fieldName='thirdQuartilePercentage'
                      label='Upper Quartile'
                      section='boxplot'
                      max={100}
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Represented by top line of box. 25% of data are higher.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {config.visualizationType !== 'Pie' ? (config.orientation !== 'horizontal' ? 'Left Value Axis' : 'Value Axis') : 'Data Format'}
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
                      {config.runtime.seriesKeys && config.runtime.seriesKeys.length === 1 && config.visualizationType !== 'Box Plot' && <CheckBox value={config.isLegendValue} fieldName='isLegendValue' label='Use Legend Value in Hover' updateField={updateField} />}
                      <TextField value={config.yAxis.numTicks} placeholder='Auto' type='number' section='yAxis' fieldName='numTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />
                      {config.visualizationType === 'Paired Bar' && <TextField value={config.yAxis.tickRotation || 0} type='number' min='0' section='yAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />}
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
                              <Icon display='question' />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>{`Increase the size if elements in the ${config.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`}</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                      {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
                      {/* <TextField value={config.yAxis.axisPadding} type='number' max={10} min={0} section='yAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateField} /> */}
                      {config.orientation === 'horizontal' && <TextField value={config.xAxis.labelOffset} section='xAxis' fieldName='labelOffset' label='Label offset' type='number' className='number-narrow' updateField={updateField} />}
                      {config.orientation !== 'horizontal' && <CheckBox value={config.yAxis.gridLines} section='yAxis' fieldName='gridLines' label='Display Gridlines' updateField={updateField} />}
                      <CheckBox value={config.yAxis.enablePadding} section='yAxis' fieldName='enablePadding' label='Add Padding to Value Axis Scale' updateField={updateField} />
                      {config.visualizationSubType === 'regular' && <CheckBox value={config.useLogScale} fieldName='useLogScale' label='use logarithmic scale' updateField={updateField} />}
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
                          <Icon display='question' />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>{`This option abbreviates very large or very small numbers on the value axis`}</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField value={config.dataFormat.roundTo} type='number' section='dataFormat' fieldName='roundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
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
                      <CheckBox value={config.xAxis.hideAxis} section='xAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />
                      <CheckBox value={config.xAxis.hideLabel} section='xAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />
                      <CheckBox value={config.xAxis.hideTicks} section='xAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />
                      <TextField value={config.xAxis.max} section='xAxis' fieldName='max' label='max value' type='number' placeholder='Auto' updateField={updateField} />
                      <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                      <TextField value={config.xAxis.min} section='xAxis' fieldName='min' type='number' label='min value' placeholder='Auto' updateField={updateField} />
                      <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
                      {config.visualizationType === 'Deviation Bar' && (
                        <>
                          <TextField value={config.xAxis.target} section='xAxis' fieldName='target' type='number' label='Deviation point' placeholder='Auto' updateField={updateField} />
                          <TextField value={config.xAxis.targetLabel || 'Target'} section='xAxis' fieldName='targetLabel' type='text' label='Deviation point Label' updateField={updateField} />
                          <CheckBox value={config.xAxis.showTargetLabel} section='xAxis' fieldName='showTargetLabel' label='Display Deviation point label' updateField={updateField} />
                        </>
                      )}
                    </>
                  ) : (
                    config.visualizationType !== 'Pie' && (
                      <>
                        <CheckBox value={config.yAxis.hideAxis} section='yAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />
                        <CheckBox value={config.yAxis.hideLabel} section='yAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />
                        <CheckBox value={config.yAxis.hideTicks} section='yAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />

                        <TextField value={config.yAxis.max} section='yAxis' fieldName='max' type='number' label='max value' placeholder='Auto' updateField={updateField} />
                        <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
                        <TextField value={config.yAxis.min} section='yAxis' fieldName='min' type='number' label='min value' placeholder='Auto' updateField={updateField} />
                        <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
                      </>
                    )
                  )}

                  {/* start: anchors */}
                  {visHasAnchors() && config.orientation !== 'horizontal' ? (
                    <div className='edit-block'>
                      <h3>Anchors</h3>
                      <Accordion allowZeroExpanded>
                        {config.yAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem className='series-item series-item--chart'>
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
                          anchors.push({})
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
                  ) : (
                    <div className='edit-block'>
                      <h3>Anchors</h3>
                      <Accordion allowZeroExpanded>
                        {config.xAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem className='series-item series-item--chart'>
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
                          anchors.push({})
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
              {/* Right Value Axis Settings */}
              {hasRightAxis && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Right Value Axis</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <TextField value={config.yAxis.rightLabel} section='yAxis' fieldName='rightLabel' label='Label' updateField={updateField} />
                    <TextField value={config.yAxis.rightNumTicks} placeholder='Auto' type='number' section='yAxis' fieldName='rightNumTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />
                    <TextField value={config.yAxis.rightAxisSize} type='number' section='yAxis' fieldName='rightAxisSize' label='Size (Width)' className='number-narrow' updateField={updateField} />
                    <TextField value={config.yAxis.rightLabelOffsetSize} type='number' section='yAxis' fieldName='rightLabelOffsetSize' label='Label Offset' className='number-narrow' updateField={updateField} />

                    <span className='divider-heading'>Number Formatting</span>
                    <CheckBox value={config.dataFormat.rightCommas} section='dataFormat' fieldName='rightCommas' label='Add commas' updateField={updateField} />
                    <TextField value={config.dataFormat.rightRoundTo} type='number' section='dataFormat' fieldName='rightRoundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
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
                              {config.visualizationType === 'Pie' && <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>}
                              {config.visualizationType !== 'Pie' && <p>Enter a data prefix (such as "$"), if applicable.</p>}
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
                              {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                              {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                    </div>

                    <CheckBox value={config.yAxis.rightHideAxis} section='yAxis' fieldName='rightHideAxis' label='Hide Axis' updateField={updateField} />
                    <CheckBox value={config.yAxis.rightHideLabel} section='yAxis' fieldName='rightHideLabel' label='Hide Label' updateField={updateField} />
                    <CheckBox value={config.yAxis.rightHideTicks} section='yAxis' fieldName='rightHideTicks' label='Hide Ticks' updateField={updateField} />
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {config.visualizationType !== 'Pie' ? (config.visualizationType === 'Bar' ? 'Date/Category Axis' : 'Date/Category Axis') : 'Segments'}
                    {!config.xAxis.dataKey && <WarningImage width='25' className='warning-icon' />}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.visualizationType !== 'Pie' && (
                    <>
                      <Select value={config.xAxis.type} section='xAxis' fieldName='type' label='Data Type' updateField={updateField} options={config.visualizationType !== 'Scatter Plot' ? ['categorical', 'date'] : ['categorical', 'continuous', 'date']} />
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
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                                  {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
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
                                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                                  {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
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
                                  <Icon display='question' />
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
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>When this option is checked, you can select source-file values for exclusion from the date/category axis. </p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                        updateField={updateField}
                      />

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
                      <TextField value={config.xAxis.numTicks} placeholder='Auto' type='number' min='1' section='xAxis' fieldName='numTicks' label='Number of ticks' className='number-narrow' updateField={updateField} />

                      <TextField value={config.xAxis.size} type='number' min='0' section='xAxis' fieldName='size' label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'} className='number-narrow' updateField={updateField} />

                      {/* Hiding this for now, not interested in moving the axis lines away from chart comp. right now. */}
                      {/* <TextField value={config.xAxis.axisPadding} type='number' max={10} min={0} section='xAxis' fieldName='axisPadding' label={'Axis Padding'} className='number-narrow' updateField={updateField} /> */}

                      {config.xAxis.type === 'continuous' && (
                        <>
                          <CheckBox value={config.dataFormat.bottomCommas} section='dataFormat' fieldName='bottomCommas' label='Add commas' updateField={updateField} />
                          <TextField value={config.dataFormat.bottomRoundTo} type='number' section='dataFormat' fieldName='bottomRoundTo' label='Round to decimal point' className='number-narrow' updateField={updateField} min={0} />
                        </>
                      )}

                      {config.yAxis.labelPlacement !== 'Below Bar' && <TextField value={config.xAxis.tickRotation} type='number' min='0' section='xAxis' fieldName='tickRotation' label='Tick rotation (Degrees)' className='number-narrow' updateField={updateField} />}
                      {config.orientation === 'horizontal' ? (
                        <>
                          <CheckBox value={config.yAxis.hideAxis} section='yAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />
                          <CheckBox value={config.yAxis.hideLabel} section='yAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />
                        </>
                      ) : (
                        <>
                          <CheckBox value={config.xAxis.hideAxis} section='xAxis' fieldName='hideAxis' label='Hide Axis' updateField={updateField} />
                          <CheckBox value={config.xAxis.hideLabel} section='xAxis' fieldName='hideLabel' label='Hide Label' updateField={updateField} />
                          <CheckBox value={config.xAxis.hideTicks} section='xAxis' fieldName='hideTicks' label='Hide Ticks' updateField={updateField} />
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
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
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
                  {visHasAnchors() && config.orientation !== 'horizontal' ? (
                    <div className='edit-block'>
                      <h3>Anchors</h3>
                      <Accordion allowZeroExpanded>
                        {config.xAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem className='series-item series-item--chart'>
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
                          anchors.push({})
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
                  ) : (
                    <div className='edit-block'>
                      <h3>Anchors</h3>
                      <Accordion allowZeroExpanded>
                        {config.yAxis?.anchors?.map((anchor, index) => (
                          <AccordionItem className='series-item series-item--chart'>
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
                          anchors.push({})
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
              {config.visualizationType !== 'Pie' && config.visualizationType !== 'Paired Bar' && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Regions</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Regions config={config} updateConfig={updateConfig} />
                  </AccordionItemPanel>
                </AccordionItem>
              )}{' '}
              {/* Columns */}
              {config.visualizationType !== 'Box Plot' && config.table.showVertical && (
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
                                value={config.columns[val] ? config.columns[val].name : columnsOptions[0]}
                                onChange={event => {
                                  editColumn(val, 'name', event.target.value)
                                }}
                              >
                                {columnsOptions}
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
                                    checked={config.columns[val].useCommas}
                                    onChange={event => {
                                      editColumn(val, 'useCommas', event.target.checked)
                                    }}
                                  />
                                  <span className='edit-label'>Add Commas to Numbers</span>
                                </label>
                              </li>
                              <li>
                                <label className='checkbox'>
                                  <input
                                    type='checkbox'
                                    checked={config.columns[val].dataTable}
                                    onChange={event => {
                                      editColumn(val, 'dataTable', event.target.checked)
                                    }}
                                  />
                                  <span className='edit-label'>Display in Data Table</span>
                                </label>
                              </li>
                              {/* disable for now */}
                              {/*
                            <li>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  checked={config.columns[val].tooltip}
                                  onChange={event => {
                                    editColumn(val, 'tooltip', event.target.checked)
                                  }}
                                />
                                <span className='edit-label'>Display in Tooltips</span>
                              </label>
                            </li>
                                */}
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
                              <label>
                                <span className='edit-label column-heading'>Category</span>
                                <TextField
                                  value={val}
                                  section='legend'
                                  subsection={null}
                                  fieldName='additionalCategories'
                                  updateField={(section, subsection, fieldName, value) => {
                                    const updatedAdditionaCategories = [...config.legend.additionalCategories]
                                    updatedAdditionaCategories[i] = value
                                    updateField(section, subsection, fieldName, updatedAdditionaCategories)
                                  }}
                                />
                              </label>
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
              {visHasLegend() && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Legend</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <CheckBox value={config.legend.reverseLabelOrder} section='legend' fieldName='reverseLabelOrder' label='Reverse Labels' updateField={updateField} />
                    {/* <fieldset className="checkbox-group">
                    <CheckBox value={config.legend.dynamicLegend} section="legend" fieldName="dynamicLegend" label="Dynamic Legend" updateField={updateField}/>
                    {config.legend.dynamicLegend && (
                      <>
                        <TextField value={config.legend.dynamicLegendDefaultText} section="legend" fieldName="dynamicLegendDefaultText" label="Dynamic Legend Default Text" updateField={updateField} />
                        <TextField value={config.legend.dynamicLegendItemLimit} type="number" min="0" section="legend" fieldName="dynamicLegendItemLimit" label={'Dynamic Legend Limit'} className="number-narrow" updateField={updateField}/>
                        <TextField value={config.legend.dynamicLegendItemLimitMessage} section="legend" fieldName="dynamicLegendItemLimitMessage" label="Dynamic Legend Item Limit Message" updateField={updateField} />
                        <TextField value={config.legend.dynamicLegendChartMessage} section="legend" fieldName="dynamicLegendChartMessage" label="Dynamic Legend Chart Message" updateField={updateField} />
                      </>
                    )}
                  </fieldset> */}
                    <CheckBox
                      value={config.legend.hide ? true : false}
                      section='legend'
                      fieldName='hide'
                      label='Hide Legend'
                      updateField={updateField}
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>With a single-series chart, consider hiding the legend to reduce visual clutter.</p>
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

                    {config.visualizationType !== 'Box Plot' && <CheckBox value={config.legend.showLegendValuesTooltip ? true : false} section='legend' fieldName='showLegendValuesTooltip' label='Show Legend Values in Tooltip' updateField={updateField} />}

                    {config.visualizationType === 'Bar' && config.visualizationSubType === 'regular' && config.runtime.seriesKeys.length === 1 && (
                      <Select value={config.legend.colorCode} section='legend' fieldName='colorCode' label='Color code by category' initial='Select' updateField={updateField} options={getDataValueOptions(data)} />
                    )}
                    <Select value={config.legend.behavior} section='legend' fieldName='behavior' label='Legend Behavior (When clicked)' updateField={updateField} options={['highlight', 'isolate']} />
                    <TextField value={config.legend.label} section='legend' fieldName='label' label='Title' updateField={updateField} />
                    <Select value={config.legend.position} section='legend' fieldName='position' label='Position' updateField={updateField} options={['right', 'left', 'bottom']} />
                    {config.legend.position === 'bottom' && <CheckBox value={config.legend.singleRow} section='legend' fieldName='singleRow' label='Single Row Legend' updateField={updateField} />}
                    <TextField type='textarea' value={config.legend.description} updateField={updateField} section='legend' fieldName='description' label='Legend Description' />
                  </AccordionItemPanel>
                </AccordionItem>
              )}
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
                                {getFilters(true).map((dataKey, index) => (
                                  <option value={dataKey} key={index}>
                                    {dataKey}
                                  </option>
                                ))}
                              </select>
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
                                                  <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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

                  {((config.series?.some(series => series.type === 'Line') && config.visualizationType === 'Combo') || config.visualizationType === 'Line' || config.visualizationType === 'Spark Line') && (
                    <Select value={config.lineDatapointStyle} fieldName='lineDatapointStyle' label='Line Datapoint Style' updateField={updateField} options={['hidden', 'hover', 'always show']} />
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
                  <label>
                    <span className='edit-label'>Chart Color Palette</span>
                  </label>
                  {/* eslint-enable */}
                  {config.visualizationType !== 'Paired Bar' && config.visualizationType !== 'Deviation Bar' && (
                    <>
                      <InputToggle fieldName='isPaletteReversed' size='small' label='Use selected palette in reverse order' updateField={updateField} value={config.isPaletteReversed} />
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
                  {config.orientation === 'horizontal' && !config.isLollipopChart && config.yAxis.labelPlacement !== 'On Bar' && <TextField type='number' value={config.barHeight || '25'} fieldName='barHeight' label=' Bar Thickness' updateField={updateField} min='15' />}
                  {((config.visualizationType === 'Bar' && config.orientation !== 'horizontal') || config.visualizationType === 'Combo') && <TextField value={config.barThickness} type='number' fieldName='barThickness' label='Bar Thickness' updateField={updateField} />}
                  {(config.orientation === 'horizontal' || config.visualizationType === 'Paired Bar') && <TextField type='number' value={config.barSpace || '15'} fieldName='barSpace' label='Bar Space' updateField={updateField} min='0' />}
                  {(config.visualizationType === 'Bar' || config.visualizationType === 'Line' || config.visualizationType === 'Combo') && <CheckBox value={config.topAxis.hasLine} section='topAxis' fieldName='hasLine' label='Add Top Axis Line' updateField={updateField} />}

                  {config.visualizationType === 'Spark Line' && (
                    <div className='cove-accordion__panel-section checkbox-group'>
                      <CheckBox value={config.visual?.border} section='visual' fieldName='border' label='Display Border' updateField={updateField} />
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
                </AccordionItemPanel>
              </AccordionItem>
              {/* Spark Line has no data table */}
              {config.visualizationType !== 'Spark Line' && (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Data Table</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <TextField
                      value={config.table.label}
                      updateField={updateField}
                      section='table'
                      fieldName='label'
                      id='tableLabel'
                      label='Data Table Title'
                      placeholder='Data Table'
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Label is required for Data Table for 508 Compliance</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <CheckBox
                      value={config.table.show}
                      section='table'
                      fieldName='show'
                      label='Show Data Table'
                      updateField={updateField}
                      className='column-heading'
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    {config.visualizationType !== 'Box Plot' && (
                      <CheckBox
                        value={config.table.showVertical}
                        section='table'
                        fieldName='showVertical'
                        label='Show Vertical Data'
                        updateField={updateField}
                        className='column-heading'
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>This will draw the data table with vertical data instead of horizontal.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                    )}
                    <TextField value={config.table.indexLabel} section='table' fieldName='indexLabel' label='Index Column Header' updateField={updateField} />
                    <TextField
                      value={config.table.caption}
                      updateField={updateField}
                      section='table'
                      type='textarea'
                      fieldName='caption'
                      label='Data Table Caption'
                      placeholder=' Data table'
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter a description of the data table to be read by screen readers.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <CheckBox value={config.table.limitHeight} section='table' fieldName='limitHeight' label='Limit Table Height' updateField={updateField} />
                    {config.table.limitHeight && <TextField value={config.table.height} section='table' fieldName='height' label='Data Table Height' type='number' min='0' max='500' placeholder='Height(px)' updateField={updateField} />}
                    <CheckBox value={config.table.expanded} section='table' fieldName='expanded' label='Expanded by Default' updateField={updateField} />
                    {isDashboard && <CheckBox value={config.table.showDataTableLink} section='table' fieldName='showDataTableLink' label='Show Data Table Name & Link' updateField={updateField} />}
                    {isLoadedFromUrl && <CheckBox value={config.table.showDownloadUrl} section='table' fieldName='showDownloadUrl' label='Show URL to Automatically Updated Data' updateField={updateField} />}
                    <CheckBox value={config.table.download} section='table' fieldName='download' label='Show Download CSV Link' updateField={updateField} />
                    {/* <CheckBox value={config.table.showDownloadImgButton} section='table' fieldName='showDownloadImgButton' label='Display Image Button' updateField={updateField} /> */}
                    {/* <CheckBox value={config.table.showDownloadPdfButton} section='table' fieldName='showDownloadPdfButton' label='Display PDF Button' updateField={updateField} /> */}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
            </Accordion>
          </form>
          {config.type !== 'Spark Line' && <AdvancedEditor loadConfig={updateConfig} state={config} convertStateToConfig={convertStateToConfig} />}
        </section>
      </section>
    </ErrorBoundary>
  )
}

export default EditorPanel
