import React, { useState, useEffect } from 'react'

//Third party
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

//Hooks
import useColorPalette from '../hooks/useColorPalette'
import useReduceData from '../hooks/useReduceData'

//Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Components
import Button from '@cdc/core/components/elements/Button'
import ColorPicker from '@cdc/core/components/ui/ColorPicker'
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import InputSlider from '@cdc/core/components/inputs/InputSlider'
import InputText from '@cdc/core/components/inputs/InputText'
import Label from '@cdc/core/components/elements/Label'
import ListGroup from '@cdc/core/components/elements/ListGroup'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'

const headerColors = [ 'theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber' ]

const Regions = () => {
  const { config, configActions} = useConfigContext()

  let regionUpdate = (fieldName, value, i) => {
    let regions = []
    if (config.regions) regions = [ ...config.regions ]
    regions[i][fieldName] = value
    configActions.updateConfig({ ...config, regions })
  }

  let updateField = (section, subsection, fieldName, value, i) => regionUpdate(fieldName, value, i)

  let removeColumn = (i) => {
    let regions = []
    if (config.regions) regions = [ ...config.regions ]
    regions.splice(i, 1)
    configActions.updateConfig({ ...config, regions })
  }

  let addColumn = () => {
    let regions = []
    if (config.regions) regions = [ ...config.regions ]
    regions.push({})
    configActions.updateConfig({ ...config, regions })
  }

  return (
    <>
      {config.regions && config.regions.map(({ label, color, from, to, background }, i) => (
        <SectionBlock key={`region-${i}`}>
          <Button className="cove-button--remove" onClick={() => {
            removeColumn(i)
          }}>Remove</Button>
          <InputText label="Region Label" value={label} fieldName="label" i={i}/>

          <div className="grid grid-gap-2">
            <div className="col-6">
              <InputText label="Text Color" value={color} fieldName="color" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
            </div>
            <div className="col-6">
              <InputText label="Background" value={background} fieldName="background" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
            </div>
          </div>

          <div className="grid grid-gap-2">
            <div className="col-6">
              <InputText label="From Value" value={from} fieldName="from" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
            </div>
            <div className="col-6">
              <InputText label="To Value" value={to} fieldName="to" updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}/>
            </div>
          </div>
        </SectionBlock>
      ))}
      {!config.regions &&
        <p className="mb-2" style={{ textAlign: 'center' }}>There are currently no regions.</p>
      }
      <Button onClick={() => {
        addColumn()
      }} fluid>Add Region</Button>
    </>
  )
}

const EditorPanels = () => {
  const { config, configActions } = useConfigContext()

  /*config,
  updateConfig,
  transformedData: data,
  colorPalettes,
  unfilteredData,
  excludedData,
  transformedData,
  isDashboard,
  setParentConfig,
  missingRequiredSections,
  setFilteredData*/

  const [ warningMsg, updateWarningMsg ] = useState({ maxMsg: '', minMsg: '' })
  // const { minValue, maxValue } = useReduceData(config, data)
  // const { paletteName, isPaletteReversed, filteredPallets, filteredQualitative, dispatch } = useColorPalette(colorPalettes, config)

  /*  useEffect(() => {
      if (paletteName) updateConfig({ ...config, palette: paletteName })
    }, [ paletteName ])

    useEffect(() => {
      dispatch({ type: 'GET_PALETTE', payload: colorPalettes, paletteName: config.palette })
    }, [ dispatch, config.palette ])

    useEffect(() => {
      if (setParentConfig) {
        const newConfig = convertStateToConfig()
        setParentConfig(newConfig)
      }
    }, [ config ])

    useEffect(() => {
      if (config.orientation === 'horizontal') {
        updateConfig({
          ...config,
          lollipopShape: config.lollipopShape
        })
      }
    }, [ config.isLollipopChart, config.lollipopShape ])

    useEffect(() => {
      if (config[section].max && config[section].max < maxValue) {
        updateField(section, null, 'max', maxValue)
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, maxMsg: `Entered value ${config[section].max} is not valid ` }
        })
      }
    }, [ data, maxValue ])

    useEffect(() => {
      if (config.visualizationType === 'Line') {
        if (config[section].min && config[section].min > minValue) {
          updateWarningMsg(function (presMsg) {
            return { ...presMsg, minMsg: `Entered value ${config[section].min} is not valid` }
          })
          updateField(section, null, 'min', minValue)
        }
      } else {
        if (config[section].min && config[section].min < minValue) {
          updateWarningMsg(function (presMsg) {
            return { ...presMsg, minMsg: `Entered value ${config[section].min} is not valid` }
          })
          updateField(section, null, 'min', minValue)
        }
      }
    }, [ data, minValue ])*/

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

  const enforceRestrictions = (updatedConfig) => {
    if (updatedConfig.orientation === 'horizontal') {
      updatedConfig.labels = false
    }
    if (updatedConfig.table.show === undefined) {
      // updatedConfig.table.show = !isDashboard
    }
  }

  const setLollipopShape = (shape) => {
    configActions.updateConfig({
      ...config,
      lollipopShape: shape
    })
  }

  const removeFilter = (index) => {
    let filters = [ ...config.filters ]

    filters.splice(index, 1)

    configActions.updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [ ...config.filters ]

    filters[index][name] = value

    configActions.updateConfig({ ...config, filters })
  }

  const addNewFilter = () => {
    let filters = config.filters ? [ ...config.filters ] : []

    filters.push({ values: [] })

    configActions.updateConfig({ ...config, filters })
  }

  const addNewSeries = (seriesKey) => {
    let newSeries = config.series ? [ ...config.series ] : []
    newSeries.push({ dataKey: seriesKey, type: 'Bar' })
    configActions.updateConfig({ ...config, series: newSeries })
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

      configActions.updateConfig(newConfig)
    }

    if (config.visualizationType === 'Paired Bar') {
      configActions.updateConfig({
        ...config,
        series: []
      })
    }
  }

  const addNewExclusion = (exclusionKey) => {
    let newExclusion = [ ...config.exclusions.keys ]
    newExclusion.push(exclusionKey)

    let payload = { ...config.exclusions, keys: newExclusion }
    configActions.updateConfig({ ...config, exclusions: payload })
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

      configActions.updateConfig(newExclusionsPayload)
    }
  }

  const getColumns = (filter = true) => {
    let columns = {}

    config.data?.map(row => {
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
    /*excludedData.map(e => {
      values.push(e[dataKey])
    })*/
    return unique ? [ ...new Set(values) ] : values
  }

  const showLollipopCheckbox = () => {
    // When to show lollipop checkbox. Update as the need grows (ie. vertical bars, diverging, etc.)
    return config.visualizationType === 'Bar' && (config.orientation === 'horizontal' || config.orientation === 'regular') && config.visualizationSubType !== 'stacked'
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    /*if (false === missingRequiredSections()) {
      delete strippedState.newViz
    }*/
    delete strippedState.runtime
    return strippedState
  }

  const ErrorWithLolliopChart = ({ message }) => {
    return (
      <section className="cove-splash__waiting">
        <section className="cove-splash__waiting__container">
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
    // setFilteredData(filters)
  }

  //TODO: COVE Refactor - Move to Chart component with other messages
  if (config.isLollipopChart && config?.series?.length > 1) {
    config.runtime.editorErrorMessage = 'Lollipop chart must use only one data series'
  }

  //TODO: COVE Refactor - Move to Chart component with other messages
  if (config.isLollipopChart && config?.series?.length === 0) {
    config.runtime.editorErrorMessage = 'Add a data series'
  }

  const onMaxChangeHandler = (e) => {
    /*const enteredValue = e.target.value

    let existPositiveValue
    let value

    // loop through series keys
    if (config.runtime.seriesKeys) {
      for (let i = 0; i < config.runtime.seriesKeys.length; i++) {
        existPositiveValue = data.some(d => d[config.runtime.seriesKeys[i]] >= 0)
      }
    }

    // input >= max
    if (Number(enteredValue) >= maxValue) {
      value = enteredValue
      updateWarningMsg(function (prevMsg) {
        return { ...prevMsg, maxMsg: '' }
      })
    }

    // input < max && a positive number exists
    if (Number(enteredValue) < maxValue && existPositiveValue) {
      updateWarningMsg(function (presMsg) {
        return { ...presMsg, maxMsg: 'Max value must be more than ' + maxValue }
      })
    }

    // input < max && all numbers negatice
    if (Number(enteredValue) < maxValue && !existPositiveValue) {
      updateWarningMsg(function (presMsg) {
        return { ...presMsg, maxMsg: 'Value must be more than or equal to 0' }
      })
    }
    updateField(config.orientation === 'horizontal' ? 'xAxis' : 'yAxis', null, 'max', value)

    if (!enteredValue.length) {
      updateWarningMsg(function (prevMsg) {
        return { ...prevMsg, maxMsg: '' }
      })
    }*/
  }

  const onMinChangeHandler = (e) => {
    /*const enteredValue = e.target.value
    let value
    if (config.visualizationType === 'Line') {
      if (Number(enteredValue) > minValue) {
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, minMsg: 'Value must be less than ' + minValue }
        })
      } else {
        value = enteredValue
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, minMsg: '' }
        })
      }
    } else {
      if (Number(enteredValue) > minValue) {
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, minMsg: 'Value must be less than ' + minValue }
        })
      } else if (Number(enteredValue) > 0) {
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, minMsg: 'Value must be less than or equal to 0' }
        })
      } else {
        value = enteredValue
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, minMsg: '' }
        })
      }
    }
    updateField(config.orientation === 'horizontal' ? 'xAxis' : 'yAxis', null, 'min', value)

    if (!enteredValue.length) {
      updateWarningMsg(function (presMsg) {
        return { ...presMsg, minMsg: '' }
      })
    }*/
  }

  const panelGeneral = (
    <panel label="General">
      <InputSelect label="Chart Type" value={config.visualizationType} options={[ 'Pie', 'Line', 'Bar', 'Combo', 'Paired Bar' ]} fieldName="visualizationType"/>

      {config.visualizationType === 'Bar' &&
        <>
          <InputSelect label="Chart Subtype" value={config.visualizationSubType || 'Regular'} options={[ 'regular', 'stacked' ]} fieldName="visualizationSubType"/>
          <InputSelect label="Orientation" value={config.orientation || 'vertical'} options={[ 'vertical', 'horizontal' ]} fieldName="orientation"/>
          {config.orientation === 'horizontal' &&
            <InputSelect label="Label Placement" value={config.yAxis.labelPlacement || 'Below Bar'} options={[ 'Below Bar', 'On Date/Category Axis' ]} section="yAxis" fieldName="labelPlacement"/>
          }
        </>
      }

      {(showLollipopCheckbox()) &&
        <InputCheckbox label="Use lollipop styling" className="mt-3" value={config.isLollipopChart} tooltip="Select this option to replace each bar with a line and a dot at the end." fieldName="isLollipopChart"/>
      }

      {config.orientation === 'horizontal' && (config.yAxis.labelPlacement === 'Below Bar' || config.yAxis.labelPlacement === 'On Date/Category Axis') &&
        <InputCheckbox label={config.isLollipopChart ? 'Display Numbers after Bar' : 'Display Numbers on Bar'} className="mt-3" value={config.yAxis.displayNumbersOnBar} section="yAxis" fieldName="displayNumbersOnBar"/>
      }

      {config.visualizationType === 'Pie' &&
        <InputSelect label="Pie Chart Type" options={[ 'Regular', 'Donut' ]} fieldName="pieType"/>
      }
      <InputText label="Title" value={config.title} fieldName="title"/>

      <InputText label="Subtext" value={config.description} type="textarea" fieldName="description"
                 tooltip="Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub."
      />

      {config.orientation !== 'horizontal' &&
        <InputText label="Chart Height" value={config.height} type="number" fieldName="height"/>
      }
    </panel>
  )

  const panelDataSeries = config.visualizationType !== 'Pie' &&
    <panel label="Data Series" warnIf={((!config.series || config.series.length === 0) || (config.visualizationType === 'Paired Bar' && config.series.length < 2))}>
        {((!config.series || config.series.length === 0) && (config.visualizationType !== 'Paired Bar')) &&
          <p className="warning">At least one series is required</p>
        }

        {((!config.series || config.series.length === 0 || config.series.length < 2) && (config.visualizationType === 'Paired Bar')) &&
          <p className="warning">Select two data series for paired bar chart (e.g., Male and Female).</p>
        }

        {config.series && config.series.length !== 0 &&
          <>
            {config.visualizationType === 'Combo'
              ?
              <ListGroup label="Displaying" tooltip="A data series is a set of related data points plotted in a chart and typically represented in the chart legend."
                         items={config.series} textValueKey={'dataKey'} canClear={false}
                         options={[ [ 'Select', 'Bar', 'Line' ] ]} removeAction={removeSeries}
                         optionsSection="series" optionsSubsection="type"

              />
              :
              <ListGroup label="Displaying" tooltip="A data series is a set of related data points plotted in a chart and typically represented in the chart legend."
                         items={config.series} textValueKey={'dataKey'} canClear={false} removeAction={removeSeries}
              />
            }
          </>
        }

        <InputSelect label="Add Data Series" options={getColumns()} initial="Select" onChange={(e) => {
          if (e.target.value !== '' && e.target.value !== 'Select') {
            addNewSeries(e.target.value)
          }
          e.target.value = ''
        }} fieldName="visualizationType"/>

        {config.series && config.series.length <= 1 && config.visualizationType === 'Bar' && (
          <>
            <SectionWrapper label="Confidence Keys">
              <InputSelect label="Upper" value={config.confidenceKeys.upper || ''} options={getColumns()} initial="Select" section="confidenceKeys" fieldName="upper"/>
              <InputSelect label="Lower" value={config.confidenceKeys.lower || ''} options={getColumns()} initial="Select" section="confidenceKeys" fieldName="lower"/>
            </SectionWrapper>
          </>
        )}
      </panel>

  const panelValueDataFormat = (
    <panel label={`${config.visualizationType !== 'Pie' ? config.visualizationType === 'Bar' ? 'Value Axis' : 'Value Axis' : 'Data Format'}`} warnIf={config.visualizationType === 'Pie' && !config.yAxis.dataKey}>
      {config.visualizationType === 'Pie' ?
        <>
          <InputSelect label="Data Column" value={config.yAxis.dataKey || ''} options={getColumns(false)} initial="Select" required={true}
                       tooltip="Select the source data to be visually represented." section="yAxis" fieldName="dataKey"
          />
        </>
        :
        <>
          <InputText label="Label" value={config.yAxis.label} section="yAxis" fieldName="label"/>
          <InputText label="Number of ticks" value={config.yAxis.numTicks} type="number" placeholder="Auto" section="yAxis" fieldName="numTicks"/>
          <InputText label={config.orientation === 'horizontal' ? 'Size (Height)' : 'Size (Width)'} value={config.yAxis.size} type="number" section="yAxis" fieldName="size"/>
          {config.orientation !== 'horizontal' &&
            <InputCheckbox label="Display Gridlines" value={config.yAxis.gridLines} section="yAxis" fieldName="gridLines"/>
          }
        </>
      }

      <SectionWrapper label="Number Formatting" tooltip="Section for more info">
        <InputCheckbox className="mt-1" label="Add commas" value={config.dataFormat.commas} section="dataFormat" fieldName="commas"/>
        <InputText label="Round to decimal point" value={config.dataFormat.roundTo} type="number" min={0} section="dataFormat" fieldName="roundTo"/>

        <div className="grid grid-gap-2">
          <div className="col-6">
            <InputText label="Prefix" value={config.dataFormat.prefix} tooltip={
              <>
                {config.visualizationType === 'Pie' && <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>}
                {config.visualizationType !== 'Pie' && <p>Enter a data prefix (such as "$"), if applicable.</p>}
              </>
            } section="dataFormat" fieldName="prefix"/>
          </div>
          <div className="col-6">
            <InputText label="Suffix" value={config.dataFormat.suffix} tooltip={
              <>
                {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
              </>
            } section="dataFormat" fieldName="suffix"/>
          </div>
        </div>
      </SectionWrapper>

      {(config.orientation === 'horizontal') ?  // horizontal - x is vertical y is horizontal
        <>
          <InputCheckbox label="Hide Axis" value={config.xAxis.hideAxis} section="xAxis" fieldName="hideAxis"/>
          <InputCheckbox label="Hide Label" value={config.xAxis.hideLabel} section="xAxis" fieldName="hideLabel"/>
          <InputCheckbox label="Hide Ticks" value={config.xAxis.hideTicks} section="xAxis" fieldName="hideTicks"/>
          <InputText label="update max value" value={config.xAxis.max} type="number" placeholder="Auto" onChange={(e) => onMaxChangeHandler(e)}/>
          {/*TODO: Adjust with COVE Refactor*/}
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
        </>
        : config.visualizationType !== 'Pie' &&
        <>
          <InputCheckbox label="Hide Axis" value={config.yAxis.hideAxis} section="yAxis" fieldName="hideAxis"/>
          <InputCheckbox label="Hide Label" value={config.yAxis.hideLabel} section="yAxis" fieldName="hideLabel"/>
          <InputCheckbox label="Hide Ticks" value={config.yAxis.hideTicks} section="yAxis" fieldName="hideTicks"/>

          <InputText label="update max value" value={config.yAxis.max} type="number" placeholder="Auto" onChange={(e) => onMaxChangeHandler(e)}/>
          {/*TODO: Adjust with COVE Refactor*/}
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>

          <InputText label="update min value" value={config.yAxis.min} type="number" placeholder="Auto" onChange={(e) => onMinChangeHandler(e)}/>
          {/*TODO: Adjust with COVE Refactor*/}
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
        </>
      }
    </panel>
  )

  const panelAxisSegments = (
    <panel label={`${config.visualizationType !== 'Pie' ? config.visualizationType === 'Bar' ? 'Date/Category Axis' : 'Date/Category Axis' : 'Segments'}`} warnIf={!config.xAxis.dataKey}>
      {config.visualizationType !== 'Pie' && <>
        <InputSelect label="Data Type" value={config.xAxis.type} options={[ 'categorical', 'date' ]} section="xAxis" fieldName="type"/>
        <InputSelect label="Data Key" value={config.xAxis.dataKey || ''} options={getColumns(false)} initial="Select" required={true}
                     tooltip="Select the column or row containing the categories or dates for this axis." section="xAxis" fieldName="dataKey"/>
      </>}

      {config.visualizationType === 'Pie' &&
        <InputSelect label="Segment Labels" value={config.xAxis.dataKey || ''} options={getColumns(false)} initial="Select" required={true}
                     tooltip={`Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."`} section="xAxis" fieldName="dataKey"/>
      }

      {config.visualizationType !== 'Pie' && (
        <>
          <InputText label="Label" value={config.xAxis.label} section="xAxis" fieldName="label"/>
          {config.xAxis.type === 'date' && (
            <>
              <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>
                Format how charts should parse and display your dates using <a href="https://github.com/d3/d3-time-format#locale_format" target="_blank" rel="noreferrer">these guidelines</a>.
              </p>
              <InputText label="Date Parse Format" value={config.xAxis.dateParseFormat} placeholder="Ex. %Y-%m-%d" section="xAxis" fieldName="dateParseFormat"/>
              <InputText label="Date Display Format" value={config.xAxis.dateDisplayFormat} placeholder="Ex. %Y-%m-%d" section="xAxis" fieldName="dateDisplayFormat"/>
            </>
          )}

          <InputCheckbox label={config.xAxis.type === 'date' ? 'Limit by start and/or end dates' : 'Exclude one or more values'} value={config.exclusions.active}
                         tooltip="When this option is checked, you can select source-file values for exclusion from the date/category axis." section="exclusions" fieldName="active"/>

          {config.exclusions.active &&
            <>
              {config.xAxis.type === 'categorical' &&
                <>
                  {config.exclusions.keys.length > 0 &&
                    <>
                      <ListGroup label="Excluded Keys" items={config.exclusions.keys} removeAction={removeExclusion}/>
                    </>
                  }

                  <InputSelect label="Add Exclusion" options={getDataValues(config.xAxis.dataKey, true)} initial="Select" onChange={(e) => {
                    if (e.target.value !== '' && e.target.value !== 'Select') {
                      addNewExclusion(e.target.value)
                    }
                    e.target.value = ''
                  }} fieldName="visualizationType"/>
                </>
              }

              {config.xAxis.type === 'date' &&
                <>
                  <InputText label="Start Date" value={config.exclusions.dateStart || ''} type="date" section="exclusions" fieldName="dateStart"/>
                  <InputText label="End Date" value={config.exclusions.dateEnd || ''} type="date" section="exclusions" fieldName="dateEnd"/>
                </>
              }
            </>
          }

          {config.xAxis.type === 'date' &&
            <>
              <InputText label="Number of ticks" value={config.xAxis.numTicks} type="number" placeholder="Auto" min="1" section="xAxis" fieldName="numTicks"/>
            </>
          }

          <InputText label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'} value={config.xAxis.size} type="number" min="0" section="xAxis" fieldName="size"/>

          {config.yAxis.labelPlacement !== 'Below Bar' &&
            <InputText label="Tick rotation (Degrees)" value={config.xAxis.tickRotation} type="number" min="0" section="xAxis" fieldName="tickRotation"/>
          }

          {(config.orientation === 'horizontal') ?
            <>
              <InputCheckbox label="Hide Axis" value={config.yAxis.hideAxis} section="yAxis" fieldName="hideAxis"/>
              <InputCheckbox label="Hide Label" value={config.yAxis.hideLabel} section="yAxis" fieldName="hideLabel"/>
            </>
            :
            <>
              <InputCheckbox label="Hide Axis" value={config.xAxis.hideAxis} section="xAxis" fieldName="hideAxis"/>
              <InputCheckbox label="Hide Label" value={config.xAxis.hideLabel} section="xAxis" fieldName="hideLabel"/>
              <InputCheckbox label="Hide Ticks" value={config.xAxis.hideTicks} section="xAxis" fieldName="hideTicks"/>
            </>
          }
        </>
      )}

      {config.visualizationType === 'Pie' &&
        <>
          <InputCheckbox label="Exclude one or more values" value={config.exclusions.active} tooltip="When this option is checked, you can select values for exclusion from the pie segments."
                         section="exclusions" fieldName="active"/>
          {config.exclusions.active &&
            <>
              {config.exclusions.keys.length > 0 &&
                <>
                  <ListGroup label="Excluded Keys" items={config.exclusions.keys} removeAction={removeExclusion}/>
                </>
              }

              <InputSelect label="Add Exclusion" options={getDataValues(config.xAxis.dataKey, true)} initial="Select" onChange={(e) => {
                if (e.target.value !== '' && e.target.value !== 'Select') {
                  addNewExclusion(e.target.value)
                }
                e.target.value = ''
              }} fieldName="visualizationType"/>
            </>
          }
        </>
      }
    </panel>
  )

  const panelRegions = (config.visualizationType !== 'Pie' && config.visualizationType !== 'Paired Bar') &&
      <panel label="Regions">
        <Regions config={config}/>
      </panel>

  const panelLegend = (
    <panel label="Legend">
      {config.orientation === 'horizontal' &&
        <InputCheckbox label="Reverse Labels" value={config.legend.reverseLabelOrder} section="legend" fieldName="reverseLabelOrder"/>
      }
      <InputCheckbox label="Hide Legend" value={config.legend.hide} tooltip="With a single-series chart, consider hiding the legend to reduce visual clutter."
                     section="legend" fieldName="hide"/>
      <InputSelect label="Legend Behavior (When clicked)" value={config.legend.behavior} options={[ 'highlight', 'isolate' ]} section="legend" fieldName="behavior"/>
      <InputText label="Title" value={config.legend.label} section="legend" fieldName="label"/>
      <InputSelect label="Position" value={config.legend.position} options={[ 'right', 'left' ]} section="legend" fieldName="position"/>
    </panel>
  )

  const panelFilters = (
    <panel label="Filters">
      {config.filters && config.filters.map((filter, index) => (
        <SectionBlock key={index}>
          <Button className="cove-button--remove" onClick={() => {
            removeFilter(index)
          }}>Remove</Button>

          <InputSelect label="Filter" options={getColumns()} initial="- Select Option -" onChange={(e) => {
            updateFilterProp('columnName', index, e.target.value)
          }} value={filter.columnName}/>

          <InputText label="Label" value={filter.label} type="text" onChange={(e) => {
            updateFilterProp('label', index, e.target.value)
          }}/>

          <SectionBlock>
            <InputSelect label="Filter Order" options={filterOptions} value={filter.order ? filter.order : 'asc'} onChange={(e) => {
              updateFilterProp('order', index, e.target.value)
            }}/>
          </SectionBlock>

          {filter.order === 'cust' &&
            <DragDropContext onDragEnd={({ source, destination }) => handleFilterChange(source.index, destination.index, index, config.filters[index])}>
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
        </SectionBlock>
      ))}
      {!config.filters &&
        <p className="mb-2" style={{ textAlign: 'center' }}>There are currently no filters.</p>
      }
      <Button onClick={addNewFilter} fluid>Add Filter</Button>
    </panel>
  )

  const panelVisual = (
    <panel label="Visual">
      {config.isLollipopChart &&
        <>
          {/*TODO: Change below inputs with COVE refactor*/}
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
          <InputSelect label="Lollipop Color Style" value={config.lollipopColorStyle ? config.lollipopColorStyle : 'two-tone'} options={[ 'regular', 'two-tone' ]} fieldName="lollipopColorStyle"/>
          <InputSelect label="Lollipop Size" value={config.lollipopSize ? config.lollipopSize : 'small'} options={[ 'small', 'medium', 'large' ]} fieldName="lollipopSize"/>
        </>
      }

      <InputSelect label="Font Size" value={config.fontSize} options={[ 'small', 'medium', 'large' ]} fieldName="fontSize"/>

      {config.series?.some(series => series.type === 'Bar') &&
        <InputSelect label="Bar Borders" value={config.barHasBorder} options={[ 'true', 'false' ]} fieldName="barHasBorder"/>
      }

      {((config.series?.some(series => series.type === 'Line') && config.visualizationType === 'Combo') || config.visualizationType === 'Line') &&
        <InputSelect label="Line Datapoint Style" value={config.lineDatapointStyle} options={[ 'hidden', 'hover', 'always show' ]} fieldName="lineDatapointStyle"/>
      }

      <ColorPicker label="Header Theme" colors={headerColors} config={config}
                   tooltip="Select the theme color for the component" colorTooltip/>

      <InputSlider size="medium" label="Reverse Colors"
                   tooltip="Reverse the colors for the selected color palette"
                   labelPosition="top"
        // value={isPaletteReversed}
                   fieldName="isPaletteReversed"/>

      <ColorPicker label="Sequential" colors={headerColors} config={config}
                   tooltip="Select the theme color for the component" colorTooltip/>

      <Label>Sequential</Label>
      <ul className="color-palette">
        {/*{filteredPallets.map((palette) => {
          const colorOne = { backgroundColor: colorPalettes[palette][2] }
          const colorTwo = { backgroundColor: colorPalettes[palette][3] }
          const colorThree = { backgroundColor: colorPalettes[palette][5] }

          return (
            <li title={palette} key={palette} onClick={() => {
              updateConfig({ ...config, palette })
            }} className={config.palette === palette ? 'selected' : ''}>
              <span style={colorOne}></span>
              <span style={colorTwo}></span>
              <span style={colorThree}></span>
            </li>
          )
        })}*/}
      </ul>

      <Label>Non-Sequential</Label>
      <ul className="color-palette">
        {/*{filteredQualitative.map((palette) => {
          const colorOne = { backgroundColor: colorPalettes[palette][2] }
          const colorTwo = { backgroundColor: colorPalettes[palette][4] }
          const colorThree = { backgroundColor: colorPalettes[palette][6] }

          return (
            <li title={palette} key={palette} onClick={() => {
              updateConfig({ ...config, palette })
            }} className={config.palette === palette ? 'selected' : ''}>
              <span style={colorOne}></span>
              <span style={colorTwo}></span>
              <span style={colorThree}></span>
            </li>
          )
        })}*/}
      </ul>

      {config.visualizationType !== 'Pie' && (
        <>
          {config.orientation !== 'horizontal' &&
            <InputCheckbox label="Display label on data" value={config.labels} fieldName="labels"/>
          }
          <InputText label="Data Cutoff" value={config.dataCutoff} type="number" tooltip={`Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.`}
                     fieldName="dataCutoff"/>
        </>
      )}
      {(config.orientation === 'horizontal' && config.yAxis.labelPlacement !== 'On Bar') &&
        <InputText label="Bar Thickness" value={config.barHeight || '25'} type="number" min="15" fieldName="barHeight"/>
      }
      {((config.visualizationType === 'Bar' && config.orientation !== 'horizontal') || config.visualizationType === 'Combo') &&
        <InputText label="Bar Thickness" value={config.barThickness} type="number" fieldName="barThickness"/>
      }
    </panel>
  )

  const panelDataTable = (
    <panel label="Data Table">
      <InputCheckbox label="Show Table" value={config.table.show} tooltip="Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement."
                     section="table" fieldName="show"/>
      <InputCheckbox label="Expanded by Default" value={config.table.expanded} section="table" fieldName="expanded"/>
      <InputCheckbox label="Display Download Button" value={config.table.download} section="table" fieldName="download"/>
      <InputText label="Label" value={config.table.label} section="table" fieldName="label"/>
      <InputText label="Index Column Header" value={config.table.indexLabel} section="table" fieldName="indexLabel"/>
    </panel>
  )

  return [
    panelGeneral,
    panelDataSeries,
    panelValueDataFormat,
    panelAxisSegments,
    panelRegions,
    panelLegend,
    panelFilters,
    panelVisual,
    panelDataTable
  ]
}

export default EditorPanels
