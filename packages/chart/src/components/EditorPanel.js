import React, { useState, useEffect, useCallback, memo, useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'

import { timeParse, timeFormat } from 'd3-time-format'
import { useDebounce, useDebouncedCallback } from 'use-debounce'

import Context from '../context'
import WarningImage from '../images/warning.svg'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { useColorPalette } from '../hooks/useColorPalette'

import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox';
import InputToggle from '@cdc/core/components/inputs/InputToggle';
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import useReduceData from '../hooks/useReduceData';

const TextField = memo(({label, tooltip, section = null, subsection = null, fieldName, updateField, value: stateValue, type = "input", i = null, min = null, ...attributes}) => {
  const [ value, setValue ] = useState(stateValue);

  const [ debouncedValue ] = useDebounce(value, 500);

  useEffect(() => {
    if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [ debouncedValue ])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = (e) => {

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

  let formElement = <input type="text" name={name} onChange={onChange} {...attributes} value={value}/>

  if ('textarea' === type) {
    formElement = (
      <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>
    )
  }

  if ('number' === type) {
    formElement = <input type="number" name={name} onChange={onChange} {...attributes} value={value}/>
  }

  if ('date' === type) {
    formElement = <input type="date" name={name} onChange={onChange} {...attributes} value={value}/>
  }

  return (
    <label>
      <span className="edit-label column-heading">{label}{tooltip}</span>
      {formElement}
    </label>
  )
})

const CheckBox = memo(({ label, value, fieldName, section = null, subsection = null, tooltip, updateField, ...attributes }) => (
  <label className="checkbox">
    <input type="checkbox" name={fieldName} checked={value} onChange={() => {
      updateField(section, subsection, fieldName, !value)
    }} {...attributes}/>
    <span className="edit-label">{label}{tooltip}</span>
  </label>
))

const Select = memo(({ label, value, options, fieldName, section = null, subsection = null, required = false, tooltip, updateField, initial: initialValue, ...attributes }) => {
  let optionsJsx = options.map((optionName, index) => <option value={optionName} key={index}>{optionName}</option>)

  if (initialValue) {
    optionsJsx.unshift(<option value="" key="initial">{initialValue}</option>)
  }

  return (
    <label>
      <span className="edit-label">{label}{tooltip}</span>
      <select className={required && !value ? 'warning' : ''} name={fieldName} value={value} onChange={(event) => {
        updateField(section, subsection, fieldName, event.target.value)
      }} {...attributes}>
        {optionsJsx}
      </select>
    </label>
  )
})

const Regions = memo(({ config, updateConfig }) => {
  let regionUpdate = (fieldName, value, i) => {
    let regions = []

    if (config.regions) {
      regions = [ ...config.regions ]
    }

    regions[i][fieldName] = value
    updateConfig({ ...config, regions })
  }

  let updateField = (section, subsection, fieldName, value, i) => regionUpdate(fieldName, value, i)

  let removeColumn = (i) => {
    let regions = []

    if (config.regions) {
      regions = [ ...config.regions ]
    }

    regions.splice(i, 1)

    updateConfig({ ...config, regions })
  }

  let addColumn = () => {

    let regions = []

    if (config.regions) {
      regions = [ ...config.regions ]
    }

    regions.push({})

    updateConfig({ ...config, regions })
  }

  return (
    <>
      {config.regions && config.regions.map(({ label, color, from, to, background }, i) => (
        <div className="edit-block" key={`region-${i}`}>
          <button type="button" className="remove-column" onClick={(event) => {
            event.preventDefault()
            removeColumn(i)
          }}>Remove
          </button>
          <TextField value={label} label="Region Label" fieldName="label" i={i} updateField={updateField}/>
          <div className="two-col-inputs">
            <TextField value={color} label="Text Color" fieldName="color" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
            <TextField value={background} label="Background" fieldName="background" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
          </div>
          <div className="two-col-inputs">
            <TextField value={from} label="From Value" fieldName="from" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
            <TextField value={to} label="To Value" fieldName="to" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
          </div>
        </div>
      ))}
      {!config.regions && <p style={{ textAlign: 'center' }}>There are currently no regions.</p>}
      <button type="button" className="btn full-width" onClick={(e) => {
        e.preventDefault()
        addColumn()
      }}>Add Region
      </button>
    </>
  )
})

const headerColors = [ 'theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber' ]

const EditorPanel = () => {
  const {
    config,
    updateConfig,
    transformedData: data,
    loading,
    colorPalettes,
    unfilteredData,
    excludedData,
    transformedData,
    isDashboard,
    setParentConfig,
    missingRequiredSections,
    setFilteredData
  } = useContext(Context)

  const {minValue,maxValue} = useReduceData(config,data)
  const {paletteName,isPaletteReversed,filteredPallets,filteredQualitative,dispatch} = useColorPalette(colorPalettes,config);
	useEffect(()=>{
		if(paletteName) updateConfig({...config, palette:paletteName})
	},[paletteName])

  useEffect(()=>{
    dispatch({type:"GET_PALETTE",payload:colorPalettes,paletteName:config.palette})
 },[dispatch,config.palette]);

  useEffect(() => {
    dispatch({ type: 'GET_PALETTE', payload: colorPalettes, paletteName: config.palette })
  }, [ dispatch, config.palette ])


  const filterOptions = [
    {
      label: 'Ascending Alphanumeric',
      value: 'asc'
    },
    {
      label: 'Descending Alphanumeric',
      value: 'desc'
    },
    {
      label: 'Custom',
      value: 'cust'
    }
  ]

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
  })

  const sortableItemStyles = {
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
    zIndex: '999',
  }

  let hasLineChart = false

  const enforceRestrictions = (updatedConfig) => {
    if (updatedConfig.orientation === 'horizontal') {
      updatedConfig.labels = false
    }
    if (updatedConfig.table.show === undefined) {
      updatedConfig.table.show = !isDashboard
    }
  }

  const updateField = (section, subsection, fieldName, newValue) => {
    // Top level
    if (null === section && null === subsection) {
      let updatedConfig = { ...config, [fieldName]: newValue }

      enforceRestrictions(updatedConfig)

      updateConfig(updatedConfig)
      return
    }

    const isArray = Array.isArray(config[section])

    let sectionValue = isArray ? [ ...config[section], newValue ] : { ...config[section], [fieldName]: newValue }

    if (null !== subsection) {
      if (isArray) {
        sectionValue = [ ...config[section] ]
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

  const [ displayPanel, setDisplayPanel ] = useState(true)
  const [ lollipopColorStyle, setLollipopColorStyle ] = useState('two-tone')

  if (loading) {
    return null
  }

  const setLollipopShape = (shape) => {
    updateConfig({
      ...config,
      lollipopShape: shape
    })
  }

  const removeFilter = (index) => {
    let filters = [ ...config.filters ]

    filters.splice(index, 1)

    updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [ ...config.filters ]

    filters[index][name] = value

    updateConfig({ ...config, filters })
  }

  const addNewFilter = () => {
    let filters = config.filters ? [ ...config.filters ] : []

    filters.push({ values: [] })

    updateConfig({ ...config, filters })
  }

  const addNewSeries = (seriesKey) => {
    let newSeries = config.series ? [ ...config.series ] : []
    newSeries.push({ dataKey: seriesKey, type: 'Bar' })
    updateConfig({ ...config, series: newSeries })
  }

  const removeSeries = (seriesKey) => {


    let series = [ ...config.series ]
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

  const addNewExclusion = (exclusionKey) => {
    let newExclusion = [ ...config.exclusions.keys ]
    newExclusion.push(exclusionKey)

    let payload = { ...config.exclusions, keys: newExclusion }
    updateConfig({ ...config, exclusions: payload })
  }

  const removeExclusion = (excludeValue) => {
    let exclusionsIndex = -1
    let exclusions = [ ...config.exclusions.keys ]

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

    unfilteredData.map(row => {
      Object.keys(row).forEach(columnName => columns[columnName] = true)
    })

    if (filter) {
      let confidenceUpper = config.confidenceKeys?.upper && config.confidenceKeys?.upper !== ''
      let confidenceLower = config.confidenceKeys?.lower && config.confidenceKeys?.lower !== ''

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

  const getDataValues = (dataKey, unique = false) => {
    let values = []
    excludedData.map(e => {
      values.push(e[dataKey])
    })
    return unique ? [ ...new Set(values) ] : values
  }

 
  const showBarStyleOptions = ()=>{
    if (config.visualizationType === 'Bar' && config.visualizationSubType !== 'stacked' && (config.orientation==='horizontal' || config.orientation==='vertical') ) {
      return ['flat','rounded','lollipop']
    } else {
      return ['flat','rounded']
    }
  }

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
  }

  const Error = () => {
    return (
      <section className="waiting">
        <section className="waiting-container">
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )

  }

  const Confirm = () => {
    const confirmDone = (e) => {
      e.preventDefault()

      let newConfig = { ...config }
      delete newConfig.newViz

      updateConfig(newConfig)
    }

    return (
      <section className="waiting">
        <section className="waiting-container">
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
          <button className="btn" style={{ margin: '1em auto' }} disabled={missingRequiredSections()} onClick={confirmDone}>I'm Done</button>
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
  }, [ config ])
  
  // Set paired bars to be horizontal, even though that option doesn't display
  useEffect(() => {
    if(config.visualizationType === 'Paired Bar') {
        updateConfig({
          ...config,
          orientation: 'horizontal'
      })
    }
  }, []);

  useEffect(() => {
    if (config.orientation === 'horizontal') {
      updateConfig({
        ...config,
        lollipopShape: config.lollipopShape
      })
    }
  }, [ config.isLollipopChart, config.lollipopShape ])

  const ExclusionsList = useCallback(() => {
    const exclusions = [ ...config.exclusions.keys ]
    return (
      <ul className="series-list">
        {exclusions.map((exclusion, index) => {
          return (
            <li key={exclusion}>
              <div className="series-list__name" data-title={exclusion}>
                <div className="series-list__name--text">
                  {exclusion}
                </div>
              </div>
              <span className="series-list__remove" onClick={() => removeExclusion(exclusion)}>&#215;</span>
            </li>
          )
        })}
      </ul>
    )
  }, [ config ])

  const ErrorWithLolliopChart = ({ message }) => {
    return (
      <section className="waiting">
        <section className="waiting-container">
          <h3>Error With Configuration</h3>
          <p>{message}</p>
        </section>
      </section>
    )
  }
  const handleFilterChange = (idx1, idx2, filterIndex, filter) => {

    let filterOrder = filter.values
    let [ movedItem ] = filterOrder.splice(idx1, 1)
    filterOrder.splice(idx2, 0, movedItem)
    let filters = [ ...config.filters ]
    let filterItem = { ...config.filters[filterIndex] }
    filterItem.active = filter.values[0]
    filterItem.values = filterOrder
    filterItem.order = 'cust'
    filters[filterIndex] = filterItem
    setFilteredData(filters)
  }

  if (config.isLollipopChart && config?.series?.length > 1) {
    config.runtime.editorErrorMessage = 'Lollipop charts must use only one data series'
  }

  if (config.isLollipopChart && config?.series?.length === 0) {
    config.runtime.editorErrorMessage = 'Add a data series'
  }

  const section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
  const [warningMsg,updateWarningMsg] = useState({maxMsg:'',minMsg:''})
  
  const onMaxChangeHandler = (e) => {
     const enteredValue = e.target.value;

     var existPositiveValue;
     let value;

     // loop through series keys
    if (config.runtime.seriesKeys) {
      for(let i = 0; i < config.runtime.seriesKeys.length; i++) {
        existPositiveValue = data.some(d => d[config.runtime.seriesKeys[i]] >= 0);
      }
    }

     // input >= max
    if (Number(enteredValue) >= maxValue) {
        value = enteredValue
        updateWarningMsg(function(prevMsg){return{...prevMsg,maxMsg:''}})
    }
    
    // input < max && a positive number exists
    if (Number(enteredValue)< maxValue && existPositiveValue) {
        updateWarningMsg(function(presMsg){return{...presMsg,maxMsg:'Max value must be more than '+ maxValue}})
    }
    
    // input < max && all numbers negatice
    if (Number(enteredValue) < maxValue && !existPositiveValue) {
        updateWarningMsg(function(presMsg){return{...presMsg,maxMsg:'Value must be more than or equal to 0'}})
    }
    updateField(section, null, 'max', value)
    
    if (!enteredValue.length) {
      updateWarningMsg(function(prevMsg){return{...prevMsg,maxMsg:''}})
    }
  }
  
  const onMinChangeHandler = (e) => {
    const enteredValue = e.target.value;
    let value;
    if (config.visualizationType === 'Line') {
      if (Number(enteredValue) > minValue) {
        updateWarningMsg(function (presMsg) { return { ...presMsg, minMsg: 'Value must be less than ' + minValue}})
      } else {
        value = enteredValue
        updateWarningMsg(function (presMsg) { return { ...presMsg, minMsg: '' } })
      }
      } else {
        if (Number(enteredValue) > minValue) {
          updateWarningMsg(function (presMsg) { return { ...presMsg, minMsg: 'Value must be less than '+ minValue }})
        } else if (Number(enteredValue) > 0  ) {
          updateWarningMsg(function (presMsg) { return { ...presMsg, minMsg: 'Value must be less than or equal to 0' }})
        } else {
          value = enteredValue
          updateWarningMsg(function (presMsg) { return { ...presMsg, minMsg: '' }})
        }
       
      }
      updateField(section, null, 'min', value)

      if (!enteredValue.length) {
        updateWarningMsg(function (presMsg) { return {...presMsg, minMsg: ''}})
      }
    }
  

  useEffect(() => {
    if (config[section].max && config[section].max < maxValue) {
      updateField(section,null,'max',maxValue)
      updateWarningMsg(function (presMsg) {return {...presMsg, maxMsg: `Entered value ${config[section].max} is not valid `}})
    } 
  }, [data,maxValue])
  
  useEffect(() => {
    if (config.visualizationType === 'Line') {
      if (config[section].min && config[section].min > minValue) {
        updateWarningMsg(function (presMsg) { return { ...presMsg, minMsg: `Entered value ${config[section].min} is not valid`}})
        updateField(section,null,'min',minValue)
      }
    } else {
      if (config[section].min && config[section].min < minValue) {
        updateWarningMsg(function (presMsg) { return { ...presMsg, minMsg: `Entered value ${config[section].min} is not valid`}})
        updateField(section,null,'min',minValue)
      }
    }
  }, [data,minValue])
  
  return (
    <ErrorBoundary component="EditorPanel">
      {config.newViz && <Confirm/>}
      {undefined === config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error/>}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}></button>
      <section className={`${displayPanel ? 'editor-panel cove' : 'hidden editor-panel cove'}${isDashboard ? ' dashboard' : ''}`}>
        <div aria-level="2" role="heading" className="heading-2">Configure Chart</div>
        <section className="form-container">
          <form>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem> {/* General */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    General
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.visualizationType} fieldName="visualizationType" label="Chart Type" updateField={updateField} options={[ 'Pie', 'Line', 'Bar', 'Combo', 'Paired Bar' ]}/>
                  {config.visualizationType === 'Bar' && <Select value={config.visualizationSubType || 'Regular'} fieldName="visualizationSubType" label="Chart Subtype" updateField={updateField} options={[ 'regular', 'stacked' ]}/>}
                  {config.visualizationType === 'Bar' && <Select value={config.orientation || 'vertical'} fieldName="orientation" label="Orientation" updateField={updateField} options={[ 'vertical', 'horizontal' ]}/>}
                  {config.visualizationType === 'Bar' &&  <Select value={ config.isLollipopChart? 'lollipop': config.barStyle || 'flat'} fieldName="barStyle" label="bar style" updateField={updateField}  options={showBarStyleOptions()}/>}
                  {(config.visualizationType === 'Bar' && config.barStyle==='rounded' ) &&   <Select value={config.tipRounding||'top'} fieldName="tipRounding" label="tip rounding" updateField={updateField} options={['top','full']}/>}
                  {(config.visualizationType === 'Bar' && config.barStyle==='rounded' ) &&   <Select value={config.roundingStyle||'standard'} fieldName="roundingStyle" label="rounding style" updateField={updateField} options={['standard','shallow','finger']}/>}
                  {(config.visualizationType === 'Bar' && config.orientation === 'horizontal') &&
                    <Select value={config.yAxis.labelPlacement || 'Below Bar'} section="yAxis" fieldName="labelPlacement" label="Label Placement" updateField={updateField} options={[ 'Below Bar', 'On Date/Category Axis' ]}/>
                  }
                  {config.orientation === 'horizontal' && (config.yAxis.labelPlacement === 'Below Bar' || config.yAxis.labelPlacement === 'On Date/Category Axis') &&
                    <CheckBox value={config.yAxis.displayNumbersOnBar} section="yAxis" fieldName="displayNumbersOnBar" label={config.isLollipopChart ? 'Display Numbers after Bar' : 'Display Numbers on Bar'} updateField={updateField}/>
                  }
                  {config.visualizationType === 'Pie' && <Select fieldName="pieType" label="Pie Chart Type" updateField={updateField} options={[ 'Regular', 'Donut' ]}/>}
                  <TextField value={config.title} fieldName="title" label="Title" updateField={updateField}/>

                  <TextField type="textarea" value={config.description} fieldName="description" label="Subtext" updateField={updateField} tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                      <Tooltip.Content>
                        <p>Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.</p>
                      </Tooltip.Content>
                    </Tooltip>
                  }/>

                  {config.visualizationSubType !== 'horizontal' &&
                    <TextField type="number" value={config.height} fieldName="height" label="Chart Height" updateField={updateField}/>
                  }
                </AccordionItemPanel>
              </AccordionItem>


              {config.visualizationType !== 'Pie' &&
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Data Series {((!config.series || config.series.length === 0) || (config.visualizationType === 'Paired Bar' && config.series.length < 2)) && <WarningImage width="25" className="warning-icon"/>}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {((!config.series || config.series.length === 0) && (config.visualizationType !== 'Paired Bar')) && <p className="warning">At least one series is required</p>}
                    {((!config.series || config.series.length === 0 || config.series.length < 2) && (config.visualizationType === 'Paired Bar')) && <p className="warning">Select two data series for paired bar chart (e.g., Male and Female).</p>}
                    {config.series && config.series.length !== 0 && (
                      <>
                        <label>
                          <span className="edit-label">
                            Displaying
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                              <Tooltip.Content>
                                <p>A data series is a set of related data points plotted in a chart and typically represented in the chart legend.</p>
                              </Tooltip.Content>
                            </Tooltip>
                          </span>
                        </label>
                        <ul className="series-list">
                          {config.series.map((series, i) => {

                            if (config.visualizationType === 'Combo') {
                              let changeType = (i, value) => {
                                let series = [ ...config.series ]
                                series[i].type = value
                                updateConfig({ ...config, series })
                              }

                              let typeDropdown = (
                                <select value={series.type} onChange={(event) => {
                                  changeType(i, event.target.value)
                                }} style={{ width: '100px', marginRight: '10px' }}>
                                  <option value="" default>Select</option>
                                  <option value="Bar">Bar</option>
                                  <option value="Line">Line</option>
                                </select>
                              )

                              return (
                                <li key={series.dataKey}>
                                  <div className={`series-list__name${series.dataKey.length > 15 ? ' series-list__name--truncate' : ''}`} data-title={series.dataKey}>
                                    <div className="series-list__name-text">{series.dataKey}</div>
                                  </div>
                                  <span>
                                    <span className="series-list__dropdown">{typeDropdown}</span>
                                    {config.series.length > 1 &&
                                      <span className="series-list__remove" onClick={() => removeSeries(series.dataKey)}>&#215;</span>
                                    }
                                  </span>
                                </li>
                              )
                            }

                            return (
                              <li key={series.dataKey}>
                                <div className="series-list__name" data-title={series.dataKey}>
                                  <div className="series-list__name--text">
                                    {series.dataKey}
                                  </div>
                                </div>
                                {config.series.length > 1 &&
                                  <span className="series-list__remove" onClick={() => removeSeries(series.dataKey)}>&#215;</span>
                                }
                              </li>
                            )
                          })}
                        </ul>
                      </>)}

                    <Select fieldName="visualizationType" label="Add Data Series" initial="Select" onChange={(e) => {
                      if (e.target.value !== '' && e.target.value !== 'Select') {
                        addNewSeries(e.target.value)
                      }
                      e.target.value = ''
                    }} options={getColumns()}/>
                    {config.series && config.series.length <= 1 && config.visualizationType === 'Bar' && (
                      <>
                        <span className="divider-heading">Confidence Keys</span>
                        <Select value={config.confidenceKeys.upper || ''} section="confidenceKeys" fieldName="upper" label="Upper" updateField={updateField} initial="Select" options={getColumns()}/>
                        <Select value={config.confidenceKeys.lower || ''} section="confidenceKeys" fieldName="lower" label="Lower" updateField={updateField} initial="Select" options={getColumns()}/>
                      </>
                    )}
                  </AccordionItemPanel>
                </AccordionItem>
              }

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {config.visualizationType !== 'Pie'
                      ? config.visualizationType === 'Bar' ? 'Value Axis' : 'Value Axis'
                      : 'Data Format'
                    }
                    {config.visualizationType === 'Pie' && !config.yAxis.dataKey && <WarningImage width="25" className="warning-icon"/>}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.visualizationType === 'Pie' &&
                    <Select value={config.yAxis.dataKey || ''} section="yAxis" fieldName="dataKey" label="Data Column" initial="Select" required={true} updateField={updateField} options={getColumns(false)} tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>Select the source data to be visually represented.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }/>
                  }
                  {config.visualizationType !== 'Pie' && (
                    <>
                      <TextField value={config.yAxis.label} section="yAxis" fieldName="label" label="Label" updateField={updateField}/>
                      <TextField value={config.yAxis.numTicks} placeholder="Auto" type="number" section="yAxis" fieldName="numTicks" label="Number of ticks" className="number-narrow" updateField={updateField}/>
                      <TextField value={config.yAxis.size} type="number" section="yAxis" fieldName="size" label={config.orientation === 'horizontal' ? 'Size (Height)' : 'Size (Width)'} className="number-narrow" updateField={updateField}/>
                      {config.orientation !== 'horizontal' && <CheckBox value={config.yAxis.gridLines} section="yAxis" fieldName="gridLines" label="Display Gridlines" updateField={updateField}/>}
                    </>
                  )}
                  <span className="divider-heading">Number Formatting</span>
                  <CheckBox value={config.dataFormat.commas} section="dataFormat" fieldName="commas" label="Add commas" updateField={updateField}/>
                  <TextField value={config.dataFormat.roundTo} type="number" section="dataFormat" fieldName="roundTo" label="Round to decimal point" className="number-narrow" updateField={updateField} min={0}/>
                  <div className="two-col-inputs">
                    <TextField value={config.dataFormat.prefix} section="dataFormat" fieldName="prefix" label="Prefix" updateField={updateField} tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                        <Tooltip.Content>
                          {config.visualizationType === 'Pie' && <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>}
                          {config.visualizationType !== 'Pie' && <p>Enter a data prefix (such as "$"), if applicable.</p>}
                        </Tooltip.Content>
                      </Tooltip>
                    }/>
                    <TextField value={config.dataFormat.suffix} section="dataFormat" fieldName="suffix" label="Suffix" updateField={updateField} tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                        <Tooltip.Content>
                          {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                          {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
                        </Tooltip.Content>
                      </Tooltip>
                    }/>
                  </div>
                 
                  {(config.orientation === 'horizontal') ?  // horizontal - x is vertical y is horizontal
                    <>
                      <CheckBox value={config.xAxis.hideAxis} section="xAxis" fieldName="hideAxis" label="Hide Axis" updateField={updateField} />
                      <CheckBox value={config.xAxis.hideLabel} section="xAxis" fieldName="hideLabel" label="Hide Label" updateField={updateField} />
                      <CheckBox value={config.xAxis.hideTicks} section="xAxis" fieldName="hideTicks" label="Hide Ticks" updateField={updateField} />
                      <TextField value={config.xAxis.max} type='number' label='update max value' placeholder='Auto' onChange={(e) => onMaxChangeHandler(e)} />
                      <span style={{color:'red',display:'block'}} >{warningMsg.maxMsg}</span>
                    </>
                    : (config.visualizationType !=='Pie') &&
                    <>
                      <CheckBox value={config.yAxis.hideAxis} section="yAxis" fieldName="hideAxis" label="Hide Axis" updateField={updateField} />
                      <CheckBox value={config.yAxis.hideLabel} section="yAxis" fieldName="hideLabel" label="Hide Label" updateField={updateField} />
                      <CheckBox value={config.yAxis.hideTicks} section="yAxis" fieldName="hideTicks" label="Hide Ticks" updateField={updateField} />
                      <TextField value={config.yAxis.max} type='number' label='update max value' placeholder='Auto' onChange={(e) => onMaxChangeHandler(e)} />
                      <span style={{color:'red',display:'block'}} >{warningMsg.maxMsg}</span>
                      <TextField value={config.yAxis.min} type='number' label='update min value' placeholder='Auto' onChange={(e)=>onMinChangeHandler(e)}  />
                      <span style={{color:'red',display:'block'}} >{warningMsg.minMsg}</span>
                    </>
                  }
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {config.visualizationType !== 'Pie'
                      ? config.visualizationType === 'Bar' ? 'Date/Category Axis' : 'Date/Category Axis'
                      : 'Segments'
                    }
                    {!config.xAxis.dataKey && <WarningImage width="25" className="warning-icon"/>}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.visualizationType !== 'Pie' && <>
                    <Select value={config.xAxis.type} section="xAxis" fieldName="type" label="Data Type" updateField={updateField} options={[ 'categorical', 'date' ]}/>
                    <Select value={config.xAxis.dataKey || ''} section="xAxis" fieldName="dataKey" label="Data Key" initial="Select" required={true} updateField={updateField} options={getColumns(false)} tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>Select the column or row containing the categories or dates for this axis. </p>
                        </Tooltip.Content>
                      </Tooltip>
                    }/>
                  </>}

                  {config.visualizationType === 'Pie' &&
                    <Select value={config.xAxis.dataKey || ''} section="xAxis" fieldName="dataKey" label="Segment Labels" initial="Select" required={true} updateField={updateField} options={getColumns(false)} tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }/>
                  }

                  {config.visualizationType !== 'Pie' && (
                    <>
                      <TextField value={config.xAxis.label} section="xAxis" fieldName="label" label="Label" updateField={updateField}/>

                      {config.xAxis.type === 'date' && (
                        <>
                          <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>Format how charts should parse and display your dates using <a href="https://github.com/d3/d3-time-format#locale_format" target="_blank" rel="noreferrer">these guidelines</a>.</p>
                          <TextField value={config.xAxis.dateParseFormat} section="xAxis" fieldName="dateParseFormat" placeholder="Ex. %Y-%m-%d" label="Date Parse Format" updateField={updateField}/>
                          <TextField value={config.xAxis.dateDisplayFormat} section="xAxis" fieldName="dateDisplayFormat" placeholder="Ex. %Y-%m-%d" label="Date Display Format" updateField={updateField}/>
                        </>
                      )}

                      <CheckBox value={config.exclusions.active} section="exclusions" fieldName="active" label={config.xAxis.type === 'date' ? 'Limit by start and/or end dates' : 'Exclude one or more values'} tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                          <Tooltip.Content>
                            <p>When this option is checked, you can select source-file values for exclusion from the date/category axis. </p>
                          </Tooltip.Content>
                        </Tooltip>
                      } updateField={updateField}/>

                      {config.exclusions.active &&
                        <>
                          {config.xAxis.type === 'categorical' &&
                            <>
                              {config.exclusions.keys.length > 0 &&
                                <>
                                  <label><span className="edit-label">Excluded Keys</span></label>
                                  <ExclusionsList/>
                                </>
                              }

                              <Select fieldName="visualizationType" label="Add Exclusion" initial="Select" onChange={(e) => {
                                if (e.target.value !== '' && e.target.value !== 'Select') {
                                  addNewExclusion(e.target.value)
                                }
                                e.target.value = ''
                              }} options={getDataValues(config.xAxis.dataKey, true)}/>
                            </>
                          }

                          {config.xAxis.type === 'date' &&
                            <>
                              <TextField type="date" section="exclusions" fieldName="dateStart" label="Start Date" updateField={updateField} value={config.exclusions.dateStart || ''}/>
                              <TextField type="date" section="exclusions" fieldName="dateEnd" label="End Date" updateField={updateField} value={config.exclusions.dateEnd || ''}/>
                            </>
                          }
                        </>
                      }

                      {config.xAxis.type === 'date' &&
                        <>
                          <TextField value={config.xAxis.numTicks} placeholder="Auto" type="number" min="1" section="xAxis" fieldName="numTicks" label="Number of ticks" className="number-narrow" updateField={updateField}/>
                        </>
                      }

                      <TextField value={config.xAxis.size} type="number" min="0" section="xAxis" fieldName="size" label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'} className="number-narrow" updateField={updateField}/>

                      {config.yAxis.labelPlacement !== 'Below Bar' &&
                        <TextField value={config.xAxis.tickRotation} type="number" min="0" section="xAxis" fieldName="tickRotation" label="Tick rotation (Degrees)" className="number-narrow" updateField={updateField}/>
                      }
                      {(config.orientation === 'horizontal') ?
                        <>
                          <CheckBox value={config.yAxis.hideAxis} section="yAxis" fieldName="hideAxis" label="Hide Axis" updateField={updateField}/>
                          <CheckBox value={config.yAxis.hideLabel} section="yAxis" fieldName="hideLabel" label="Hide Label" updateField={updateField}/>
                        </>
                        :
                        <>
                          <CheckBox value={config.xAxis.hideAxis} section="xAxis" fieldName="hideAxis" label="Hide Axis" updateField={updateField}/>
                          <CheckBox value={config.xAxis.hideLabel} section="xAxis" fieldName="hideLabel" label="Hide Label" updateField={updateField}/>
                          <CheckBox value={config.xAxis.hideTicks} section="xAxis" fieldName="hideTicks" label="Hide Ticks" updateField={updateField}/>
                        </>
                      }
                    </>
                  )}

                  {config.visualizationType === 'Pie' &&
                    <>
                      <CheckBox value={config.exclusions.active} section="exclusions" fieldName="active" label={'Exclude one or more values'} updateField={updateField} tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                          <Tooltip.Content>
                            <p>When this option is checked, you can select values for exclusion from the pie segments.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }/>
                      {config.exclusions.active &&
                        <>
                          {config.exclusions.keys.length > 0 &&
                            <>
                              <label><span className="edit-label">Excluded Keys</span></label>
                              <ExclusionsList/>
                            </>
                          }

                          <Select fieldName="visualizationType" label="Add Exclusion" initial="Select" onChange={(e) => {
                            if (e.target.value !== '' && e.target.value !== 'Select') {
                              addNewExclusion(e.target.value)
                            }
                            e.target.value = ''
                          }} options={getDataValues(config.xAxis.dataKey, true)}/>
                        </>
                      }
                    </>
                  }
                </AccordionItemPanel>
              </AccordionItem>

              {(config.visualizationType !== 'Pie' && config.visualizationType !== 'Paired Bar') &&
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Regions
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Regions config={config} updateConfig={updateConfig}/>
                  </AccordionItemPanel>
                </AccordionItem>
              }

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Legend
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <CheckBox value={config.legend.reverseLabelOrder} section="legend" fieldName="reverseLabelOrder" label="Reverse Labels" updateField={updateField}/>
                  <CheckBox value={config.legend.hide} section="legend" fieldName="hide" label="Hide Legend" updateField={updateField} tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                      <Tooltip.Content>
                        <p>With a single-series chart, consider hiding the legend to reduce visual clutter.</p>
                      </Tooltip.Content>
                    </Tooltip>
                  }/>
                  <Select value={config.legend.behavior} section="legend" fieldName="behavior" label="Legend Behavior (When clicked)" updateField={updateField} options={[ 'highlight', 'isolate' ]}/>
                  <TextField value={config.legend.label} section="legend" fieldName="label" label="Title" updateField={updateField}/>
                  <Select value={config.legend.position} section="legend" fieldName="position" label="Position" updateField={updateField} options={[ 'right', 'left' ]}/>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Filters
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.filters && <ul className="filters-list">
                    {config.filters.map((filter, index) => (
                        <fieldset className="edit-block" key={index}>
                          <button type="button" className="remove-column" onClick={() => {
                            removeFilter(index)
                          }}>Remove
                          </button>
                          <label>
                            <span className="edit-label column-heading">Filter</span>
                            <select value={filter.columnName} onChange={(e) => {
                              updateFilterProp('columnName', index, e.target.value)
                            }}>
                              <option value="">- Select Option -</option>
                              {getColumns().map((dataKey, index) => (
                                <option value={dataKey} key={index}>{dataKey}</option>
                              ))}
                            </select>
                          </label>
                          <label>
                            <span className="edit-label column-heading">Label</span>
                            <input type="text" value={filter.label} onChange={(e) => {
                              updateFilterProp('label', index, e.target.value)
                            }}/>
                          </label>

                          <label>
                            <span className="edit-filterOrder column-heading">Filter Order</span>
                            <select value={filter.order ? filter.order : 'asc'} onChange={(e) => updateFilterProp('order', index, e.target.value)}>
                              {filterOptions.map((option, index) => {
                                return <option value={option.value} key={`filter-${index}`}>{option.label}</option>
                              })}
                            </select>

                            {filter.order === 'cust' &&
                              <DragDropContext
                                onDragEnd={({ source, destination }) =>
                                  handleFilterChange(source.index, destination.index, index, config.filters[index])
                                }>
                                <Droppable droppableId="filter_order">
                                  {(provided) => (
                                    <ul
                                      {...provided.droppableProps}
                                      className="sort-list"
                                      ref={provided.innerRef}
                                      style={{ marginTop: '1em' }}
                                    >
                                      {config.filters[index]?.values.map((value, index) => {
                                        return (
                                          <Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
                                            {(provided, snapshot) => (
                                              <li>
                                                <div className={snapshot.isDragging ? 'currently-dragging' : ''}
                                                     style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
                                                     ref={provided.innerRef}
                                                     {...provided.draggableProps}
                                                     {...provided.dragHandleProps}>
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
                            }
                          </label>

                        </fieldset>
                      )
                    )}
                  </ul>}
                  {!config.filters && <p style={{ textAlign: 'center' }}>There are currently no filters.</p>}
                  <button type="button" onClick={addNewFilter} className="btn full-width">Add Filter</button>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Visual
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

                  {config.isLollipopChart &&
                    <>
                      <label className="header">
                        <span className="edit-label">Lollipop Shape</span>
                        <div onChange={(e) => {
                          setLollipopShape(e.target.value)
                        }}>
                          <label>
                            <input
                              type="radio"
                              name="lollipopShape"
                              value="circle"
                              checked={config.lollipopShape === 'circle'}
                            />
                            Circle
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="lollipopShape"
                              value="square"
                              checked={config.lollipopShape === 'square'}
                            />
                            Square
                          </label>
                        </div>

                      </label>
                      <Select value={config.lollipopColorStyle ? config.lollipopColorStyle : 'two-tone'} fieldName="lollipopColorStyle" label="Lollipop Color Style" updateField={updateField} options={[ 'regular', 'two-tone' ]}/>
                      <Select value={config.lollipopSize ? config.lollipopSize : 'small'} fieldName="lollipopSize" label="Lollipop Size" updateField={updateField} options={[ 'small', 'medium', 'large' ]}/>
                    </>
                  }

                  <Select value={config.fontSize} fieldName="fontSize" label="Font Size" updateField={updateField} options={[ 'small', 'medium', 'large' ]}/>

                  {config.series?.some(series => series.type === 'Bar' || series.type === 'Paired Bar') &&
                    <Select value={config.barHasBorder} fieldName="barHasBorder" label="Bar Borders" updateField={updateField} options={[ 'true', 'false' ]}/>
                  }

                  {((config.series?.some(series => series.type === 'Line') && config.visualizationType === 'Combo') || config.visualizationType === 'Line') &&
                    <Select value={config.lineDatapointStyle} fieldName="lineDatapointStyle" label="Line Datapoint Style" updateField={updateField} options={[ 'hidden', 'hover', 'always show' ]}/>
                  }

                  <label className="header">
                    <span className="edit-label">Header Theme</span>
                    <ul className="color-palette">
                      {headerColors.map((palette) => (
                        <li title={palette} key={palette} onClick={() => {
                          updateConfig({ ...config, theme: palette })
                        }} className={config.theme === palette ? 'selected ' + palette : palette}>
                        </li>
                      ))}
                    </ul>
                  </label>
                  <label>
                    <span className="edit-label">Chart Color Palette</span>
                  </label>
                  {/* <InputCheckbox fieldName='isPaletteReversed'  size='small' label='Use selected palette in reverse order'   updateField={updateField}  value={isPaletteReversed} /> */}
                  <InputToggle fieldName="isPaletteReversed" size="small" label="Use selected palette in reverse order" updateField={updateField} value={isPaletteReversed}/>
                  <span>Sequential</span>
                  <ul className="color-palette">
                    {filteredPallets.map((palette) => {

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
                        <li title={palette} key={palette} onClick={() => {
                          updateConfig({ ...config, palette })
                        }} className={config.palette === palette ? 'selected' : ''}>
                          <span style={colorOne}></span>
                          <span style={colorTwo}></span>
                          <span style={colorThree}></span>
                        </li>
                      )
                    })}
                  </ul>
                  <span>Non-Sequential</span>
                  <ul className="color-palette">
                    {filteredQualitative.map((palette) => {

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
                        <li title={palette} key={palette} onClick={() => {
                          updateConfig({ ...config, palette })
                        }} className={config.palette === palette ? 'selected' : ''}>
                          <span style={colorOne}></span>
                          <span style={colorTwo}></span>
                          <span style={colorThree}></span>
                        </li>
                      )
                    })}
                  </ul>

                  {config.visualizationType !== 'Pie' && (
                    <>
                      {config.orientation !== 'horizontal' &&
                        <CheckBox value={config.labels} fieldName="labels" label="Display label on data" updateField={updateField}/>
                      }
                      <TextField value={config.dataCutoff} type="number" fieldName="dataCutoff" className="number-narrow" label="Data Cutoff" updateField={updateField} tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                          <Tooltip.Content>
                            <p>Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }/>
                    </>
                  )}
                  {(config.orientation === 'horizontal' && config.yAxis.labelPlacement !== 'On Bar') &&
                    <TextField type="number" value={config.barHeight || '25'} fieldName="barHeight" label="Bar Thickness" updateField={updateField} min="15"/>
                  }
                  {((config.visualizationType === 'Bar' && config.orientation !== 'horizontal') || config.visualizationType === 'Combo') &&
                    <TextField value={config.barThickness} type="number" fieldName="barThickness" label="Bar Thickness" updateField={updateField}/>
                  }

                  {config.orientation === 'horizontal' && (config.yAxis.labelPlacement === 'Below Bar' || config.yAxis.labelPlacement === 'On Date/Category Axis' || config.visualizationType === 'Paired Bar') &&
                    <CheckBox value={config.yAxis.displayNumbersOnBar} section="yAxis" fieldName="displayNumbersOnBar" label={config.isLollipopChart ? 'Display Numbers after Bar' : 'Display Numbers on Bar'} updateField={updateField} />
                  }
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Data Table
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <CheckBox value={config.table.show} section="table" fieldName="show" label="Show Table" updateField={updateField} tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target><Icon display="question" style={{ marginLeft: '0.5rem' }}/></Tooltip.Target>
                      <Tooltip.Content>
                        <p>Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.</p>
                      </Tooltip.Content>
                    </Tooltip>
                  }/>
                  <CheckBox value={config.table.expanded} section="table" fieldName="expanded" label="Expanded by Default" updateField={updateField}/>
                  <CheckBox value={config.table.download} section="table" fieldName="download" label="Display Download Button" updateField={updateField}/>
                  <TextField value={config.table.label} section="table" fieldName="label" label="Label" updateField={updateField}/>
                  <TextField value={config.table.indexLabel} section="table" fieldName="indexLabel" label="Index Column Header" updateField={updateField}/>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </form>
        </section>
      </section>
    </ErrorBoundary>
  )
}

export default EditorPanel
