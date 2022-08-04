import React, { useState, useEffect } from 'react'

//Third party
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

//Hooks
import useColorPalette from '../hooks/useColorPalette'
import useReduceData from '../hooks/useReduceData'

//Helpers
import { colorPalettesChart as colorPalettes } from '@cdc/core/data/colorPalettes'

//Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Components
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import ColorPicker from '@cdc/core/components/ui/ColorPicker'
import EditorPanelGlobal from '@cdc/core/components/EditorPanelGlobal'
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import InputSlider from '@cdc/core/components/inputs/InputSlider'
import InputText from '@cdc/core/components/inputs/InputText'
import ListGroup from '@cdc/core/components/elements/ListGroup'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'

const themeColors = [ 'theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber' ]

const Regions = () => {
  const { config, configActions } = useConfigContext()

  let regionUpdate = (fieldName, value, index) => {
    let regions = []
    if (config.regions) regions = [ ...config.regions ]
    regions[index][fieldName] = value
    configActions.updateConfig({ ...config, regions })
  }

  let removeColumn = (index) => {
    let regions = []
    if (config.regions) regions = [ ...config.regions ]
    regions.splice(index, 1)
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
      {config.regions && config.regions.map(({ label, color, from, to, background }, index) => (
        <SectionBlock key={`region-${index}`}>
          <Button className="cove-button--remove" onClick={() => {
            removeColumn(index)
          }}>Remove</Button>
          <InputText label="Region Label" configField="label" i={index}/>

          <div className="grid grid-gap-2">
            <div className="col-6">
              <InputText label="Text Color" fieldName="color" onChange={(e) => regionUpdate('color', e.target.value, index)}/>
            </div>
            <div className="col-6">
              <InputText label="Background" fieldName="background" onChange={(e) => regionUpdate('background', e.target.value, index)}/>
            </div>
          </div>

          <div className="grid grid-gap-2">
            <div className="col-6">
              <InputText label="From Value" fieldName="from" onChange={(e) => regionUpdate('from', e.target.value, index)}/>
            </div>
            <div className="col-6">
              <InputText label="To Value" fieldName="to" onChange={(e) => regionUpdate('to', e.target.value, index)}/>
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
  const { config, configActions, data, missingRequiredSections } = useConfigContext()

  const [ warningMsg, updateWarningMsg ] = useState({ maxMsg: '', minMsg: '' })
  const { minValue, maxValue } = useReduceData(config, data)
  const { paletteName, isPaletteReversed, filteredPallets, filteredQualitative, dispatch } = useColorPalette(colorPalettes, config)

  useEffect(() => {
    if (paletteName) {
      configActions.updateConfig({ ...config, palette: paletteName })
    }
  }, [ paletteName ])

  useEffect(() => {
    dispatch({ type: 'GET_PALETTE', payload: colorPalettes, paletteName: config.palette })
  }, [ dispatch, config.palette ])

  /*useEffect(() => {
    if (setParentConfig) {
      const newConfig = convertStateToConfig()
      setParentConfig(newConfig)
    }
  }, [ config ])*/

  useEffect(() => {
    if (config.orientation === 'horizontal') {
      configActions.updateConfig({
        ...config,
        lollipopShape: config.lollipopShape
      })
    }
  }, [ config.isLollipopChart, config.lollipopShape ])

  useEffect(() => {
    //TODO: COVE Refactor - Dear god, standardize this..
    const section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
    if (config[section].max && config[section].max < maxValue) {
      configActions.updateField([section, 'max'], maxValue)
      updateWarningMsg(function (presMsg) {
        return { ...presMsg, maxMsg: `Entered value ${config[section].max} is not valid ` }
      })
    }
  }, [ data, maxValue ])

  useEffect(() => {
    //TODO: COVE Refactor - Dear god, standardize this..
    const section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
    if (config.visualizationType === 'Line') {
      if (config[section].min && config[section].min > minValue) {
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, minMsg: `Entered value ${config[section].min} is not valid` }
        })
        configActions.updateField([section, 'min'], minValue)
      }
    } else {
      if (config[section].min && config[section].min < minValue) {
        updateWarningMsg(function (presMsg) {
          return { ...presMsg, minMsg: `Entered value ${config[section].min} is not valid` }
        })
        configActions.updateField([section, 'min'], minValue)
      }
    }
  }, [ data, minValue ])

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
    // excludedData.map(e => values.push(e[dataKey]))
    return unique ? [ ...new Set(values) ] : values
  }

  const showLollipopCheckbox = () => {
    // When to show lollipop checkbox. Update as the need grows (ie. vertical bars, diverging, etc.)
    return config.visualizationType === 'Bar' && (config.orientation === 'horizontal' || config.orientation === 'regular') && config.visualizationSubType !== 'stacked'
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    if (false === missingRequiredSections()) delete strippedState.newViz
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
    //TODO: COVE Refactor - Dear god, standardize this..
    let section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
    const enteredValue = e.target.value

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
    console.log('running updateField')
    configActions.updateField([section, 'max'], value)

    if (!enteredValue.length) {
      updateWarningMsg(function (prevMsg) {
        return { ...prevMsg, maxMsg: '' }
      })
    }
  }

  const onMinChangeHandler = (e) => {
    //TODO: COVE Refactor - Dear god, standardize this..
    let section = config.orientation === 'horizontal' ? 'xAxis' : 'yAxis'
    const enteredValue = e.target.value
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
    console.log('running updateField')
    configActions.updateField([section, 'min'], value)

    if (!enteredValue.length) {
      updateWarningMsg(function (presMsg) {
        return { ...presMsg, minMsg: '' }
      })
    }
  }

  const panelGeneral = (
    <Accordion.Section label="General">
      <InputSelect label="Chart Type" options={[ 'Pie', 'Line', 'Bar', 'Combo', 'Paired Bar' ]} configField="visualizationType"/>

      {config.visualizationType === 'Bar' &&
        <>
          <InputSelect label="Chart Subtype" options={[ 'regular', 'stacked' ]} configField="visualizationSubType"/>
          <InputSelect label="Orientation" options={[ 'vertical', 'horizontal' ]} configField="orientation"/>
          {config.orientation === 'horizontal' &&
            <InputSelect label="Label Placement" options={[ 'Below Bar', 'On Date/Category Axis' ]} configField={[ 'yAxis', 'labelPlacement' ]}/>
          }
        </>
      }

      {(showLollipopCheckbox()) &&
        <InputCheckbox label="Use lollipop styling" className="mt-3" tooltip="Select this option to replace each bar with a line and a dot at the end." configField="isLollipopChart"/>
      }

      {config.orientation === 'horizontal' && (config.yAxis.labelPlacement === 'Below Bar' || config.yAxis.labelPlacement === 'On Date/Category Axis') &&
        <InputCheckbox label={config.isLollipopChart ? 'Display Numbers after Bar' : 'Display Numbers on Bar'} className="mt-3" configField={[ 'yAxis', 'displayNumbersOnBar' ]}/>
      }

      {config.visualizationType === 'Pie' &&
        <InputSelect label="Pie Chart Type" options={[ 'Regular', 'Donut' ]} configField="pieType"/>
      }

      <InputText label="Title" configField="title"/>

      <InputText label="Subtext" type="textarea" configField="description"
                 tooltip="Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub."
      />

      {config.orientation !== 'horizontal' &&
        <InputText label="Chart Height" type="number" configField="height"/>
      }
    </Accordion.Section>
  )

  const panelDataSeries = config.visualizationType !== 'Pie' &&
    <Accordion.Section label="Data Series" warnIf={((!config.series || config.series.length === 0) || (config.visualizationType === 'Paired Bar' && config.series.length < 2))}>
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

      {/*TODO: COVE Refactor - This is broken*/}
      <InputSelect label="Add Data Series" options={getColumns()} initial="Select" initialSnap={true} onChange={(e) => {
        if (e.target.value !== '' && e.target.value !== 'Select') addNewSeries(e.target.value)
      }}/>

      {config.series && config.series.length <= 1 && config.visualizationType === 'Bar' && (
        <>
          <SectionWrapper label="Confidence Keys">
            <InputSelect label="Upper" options={getColumns()} initial="Select" configField={[ 'confidenceKeys', 'upper' ]}/>
            <InputSelect label="Lower" options={getColumns()} initial="Select" configField={[ 'confidenceKeys', 'lower' ]}/>
          </SectionWrapper>
        </>
      )}
    </Accordion.Section>

  const panelValueDataFormat = (
    <Accordion.Section label={`${config.visualizationType !== 'Pie' ? config.visualizationType === 'Bar' ? 'Value Axis' : 'Value Axis' : 'Data Format'}`} warnIf={config.visualizationType === 'Pie' && !config.yAxis.dataKey}>
      {config.visualizationType === 'Pie' ?
        <InputSelect label="Data Column" options={getColumns(false)} initial="Select" required={true}
                     tooltip="Select the source data to be visually represented." configField={[ 'yAxis', 'dataKey' ]}
        />
        :
        <>
          <InputText label="Label" configField={[ 'yAxis', 'label' ]}/>
          <InputText label="Number of ticks" type="number" placeholder="Auto" configField={[ 'yAxis', 'numTicks' ]}/>
          <InputText label={config.orientation === 'horizontal' ? 'Size (Height)' : 'Size (Width)'} type="number" configField={[ 'yAxis', 'size' ]}/>
          {config.orientation !== 'horizontal' &&
            <InputCheckbox label="Display Gridlines" section="yAxis" configField={[ 'yAxis', 'gridLines' ]}/>
          }
        </>
      }

      <SectionWrapper label="Number Formatting" tooltip="Section for more info">
        <InputCheckbox className="mt-1" label="Add commas" configField={[ 'dataFormat', 'commas' ]}/>
        <InputText label="Round to decimal point" type="number" min={0} configField={[ 'dataFormat', 'roundTo' ]}/>

        <div className="grid grid-gap-2">
          <div className="col-6">
            <InputText label="Prefix" tooltip={
              <>
                {config.visualizationType === 'Pie' && <p>Enter a data prefix to display in the data table and chart tooltips, if applicable.</p>}
                {config.visualizationType !== 'Pie' && <p>Enter a data prefix (such as "$"), if applicable.</p>}
              </>
            } configField={[ 'dataFormat', 'prefix' ]}/>
          </div>
          <div className="col-6">
            <InputText label="Suffix" tooltip={
              <>
                {config.visualizationType === 'Pie' && <p>Enter a data suffix to display in the data table and tooltips, if applicable.</p>}
                {config.visualizationType !== 'Pie' && <p>Enter a data suffix (such as "%"), if applicable.</p>}
              </>
            } configField={[ 'dataFormat', 'suffix' ]}/>
          </div>
        </div>
      </SectionWrapper>

      {(config.orientation === 'horizontal') ?  // horizontal - x is vertical y is horizontal
        <>
          <InputCheckbox label="Hide Axis" configField={[ 'xAxis', 'hideAxis' ]}/>


          <InputCheckbox label="Hide Label" configField={[ 'xAxis', 'hideLabel' ]}/>
          <InputCheckbox label="Hide Ticks" configField={[ 'xAxis', 'hideTicks' ]}/>
          <InputText label="update max value" type="number" placeholder="Auto" onChange={(e) => onMaxChangeHandler(e)}/>
          {/*TODO: Adjust with COVE Refactor*/}
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>
        </>
        : config.visualizationType !== 'Pie' &&
        <>
          <InputCheckbox label="Hide Axis" configField={[ 'yAxis', 'hideAxis' ]}/>
          <InputCheckbox label="Hide Label" configField={[ 'yAxis', 'hideLabel' ]}/>
          <InputCheckbox label="Hide Ticks" configField={[ 'yAxis', 'hideTicks' ]}/>

          <InputText label="update max value" type="number" placeholder="Auto" onChange={(e) => onMaxChangeHandler(e)}/>
          {/*TODO: Adjust with COVE Refactor*/}
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.maxMsg}</span>

          <InputText label="update min value" type="number" placeholder="Auto" onChange={(e) => onMinChangeHandler(e)}/>
          {/*TODO: Adjust with COVE Refactor*/}
          <span style={{ color: 'red', display: 'block' }}>{warningMsg.minMsg}</span>
        </>
      }
    </Accordion.Section>
  )

  const panelAxisSegments = (
    <Accordion.Section label={`${config.visualizationType !== 'Pie' ? config.visualizationType === 'Bar' ? 'Date/Category Axis' : 'Date/Category Axis' : 'Segments'}`} warnIf={!config.xAxis.dataKey}>
      {config.visualizationType !== 'Pie' &&
        <InputSelect label="Data Type" options={[ 'categorical', 'date' ]} configField={[ 'xAxis', 'type' ]}/>
      }

      <InputSelect label="Data Key" options={getColumns(false)} initial="Select" required={true}
                   tooltip={config.visualizationType === 'Pie' ?
                     `Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."` :
                     `Select the column or row containing the categories or dates for this axis.`}
                   configField={[ 'xAxis', 'dataKey' ]}/>

      {config.visualizationType !== 'Pie' && (
        <>
          <InputText label="Label" configField={[ 'xAxis', 'label' ]}/>
          {config.xAxis.type === 'date' && (
            <>
              <p style={{ padding: '1.5em 0 0.5em', fontSize: '.9rem', lineHeight: '1rem' }}>
                Format how charts should parse and display your dates using <a href="https://github.com/d3/d3-time-format#locale_format" target="_blank" rel="noreferrer">these guidelines</a>.
              </p>
              <InputText label="Date Parse Format" placeholder="Ex. %Y-%m-%d" configField={[ 'xAxis', 'dateParseFormat' ]}/>
              <InputText label="Date Display Format" placeholder="Ex. %Y-%m-%d" configField={[ 'xAxis', 'dateDisplayFormat' ]}/>
            </>
          )}

          <InputCheckbox label={config.xAxis.type === 'date' ? 'Limit by start and/or end dates' : 'Exclude one or more values'}
                         tooltip="When this option is checked, you can select source-file values for exclusion from the date/category axis." configField={[ 'exclusions', 'active' ]}/>

          {config.exclusions.active &&
            <>
              {config.xAxis.type === 'categorical' &&
                <>
                  {config.exclusions.keys.length > 0 &&
                    <>
                      <ListGroup label="Excluded Keys" items={config.exclusions.keys} removeAction={removeExclusion}/>
                    </>
                  }

                  <InputSelect label="Add Exclusion" options={getDataValues(config.xAxis.dataKey, true)} initial="Select" initialSnap onChange={(e) => addNewExclusion(e.target.value)}/>
                </>
              }

              {config.xAxis.type === 'date' &&
                <>
                  <InputText label="Start Date" type="date" configField={[ 'exclusions', 'dateStart' ]}/>
                  <InputText label="End Date" type="date" configField={[ 'exclusions', 'dateEnd' ]}/>
                </>
              }
            </>
          }

          {config.xAxis.type === 'date' &&
            <>
              <InputText label="Number of ticks" type="number" placeholder="Auto" min="1" configField={[ 'xAxis', 'numTicks' ]}/>
            </>
          }

          <InputText label={config.orientation === 'horizontal' ? 'Size (Width)' : 'Size (Height)'} type="number" min="0" configField={[ 'xAxis', 'size' ]}/>

          {config.yAxis.labelPlacement !== 'Below Bar' &&
            <InputText label="Tick rotation (Degrees)" type="number" min="0" configField={[ 'xAxis', 'tickRotation' ]}/>
          }

          {(config.orientation === 'horizontal') ?
            <>
              <InputCheckbox label="Hide Axis" configField={[ 'yAxis', 'hideAxis' ]}/>
              <InputCheckbox label="Hide Label" configField={[ 'yAxis', 'hideLabel' ]}/>
            </>
            :
            <>
              <InputCheckbox label="Hide Axis" configField={[ 'xAxis', 'hideAxis' ]}/>
              <InputCheckbox label="Hide Label" configField={[ 'xAxis', 'hideLabel' ]}/>
              <InputCheckbox label="Hide Ticks" configField={[ 'xAxis', 'hideTicks' ]}/>
            </>
          }
        </>
      )}

      {config.visualizationType === 'Pie' &&
        <>
          <InputSelect label="Segment Labels" options={getColumns(false)} initial="Select" required={true}
                       tooltip={``} configField={[ 'xAxis', 'dataKey' ]}/>
          <InputCheckbox label="Exclude one or more values" tooltip="When this option is checked, you can select values for exclusion from the pie segments."
                         configField={[ 'exclusions', 'active' ]}/>
          {config.exclusions.active &&
            <>
              {config.exclusions.keys.length > 0 &&
                <>
                  <ListGroup label="Excluded Keys" items={config.exclusions?.keys} removeAction={removeExclusion}/>
                </>
              }

              <InputSelect label="Add Exclusion" options={getDataValues(config.xAxis?.dataKey, true)} initial="Select" onChange={(e) => addNewExclusion(e.target.value)}/>
            </>
          }
        </>
      }
    </Accordion.Section>
  )

  const panelRegions = (config.visualizationType !== 'Pie' && config.visualizationType !== 'Paired Bar') &&
    <Accordion.Section label="Regions">
      <Regions/>
    </Accordion.Section>

  const panelLegend = (
    <Accordion.Section label="Legend">
      {config.orientation === 'horizontal' &&
        <InputCheckbox label="Reverse Labels" configField={[ 'legend', 'reverseLabelOrder' ]}/>
      }
      <InputCheckbox label="Hide Legend" tooltip="With a single-series chart, consider hiding the legend to reduce visual clutter."
                     configField={[ 'legend', 'hide' ]}/>
      <InputSelect label="Legend Behavior (When clicked)" options={[ 'highlight', 'isolate' ]} configField={[ 'legend', 'behavior' ]}/>
      <InputText label="Title" configField={[ 'legend', 'label' ]}/>
      <InputSelect label="Position" options={[ 'right', 'left' ]} configField={[ 'legend', 'position' ]}/>
    </Accordion.Section>
  )

  const panelFilters = (
    <Accordion.Section label="Filters">
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
    </Accordion.Section>
  )

  const panelVisual = (
    <Accordion.Section label="Visual">
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
                  defaultChecked={config.lollipopShape === 'circle'}
                />
                Circle
              </label>
              <label>
                <input
                  type="radio"
                  name="lollipopShape"
                  value="square"
                  defaultChecked={config.lollipopShape === 'square'}
                />
                Square
              </label>
            </div>
          </label>
          <InputSelect label="Lollipop Color Style" options={[ 'regular', 'two-tone' ]} configField="lollipopColorStyle"/>
          <InputSelect label="Lollipop Size" options={[ 'small', 'medium', 'large' ]} configField="lollipopSize"/>
        </>
      }

      <InputSelect label="Font Size" options={[ 'small', 'medium', 'large' ]} configField="fontSize"/>

      {config.series?.some(series => series.type === 'Bar') &&
        <InputSelect label="Bar Borders" options={[ 'true', 'false' ]} configField="barHasBorder"/>
      }

      {((config.series?.some(series => series.type === 'Line') && config.visualizationType === 'Combo') || config.visualizationType === 'Line') &&
        <InputSelect label="Line Datapoint Style" options={[ 'hidden', 'hover', 'always show' ]} configField="lineDatapointStyle"/>
      }

      <ColorPicker label="Theme Colors" colors={themeColors}
                   tooltip="Select the theme color for the component" colorTooltip/>

      <InputSlider size="medium" label="Reverse Colors"
                   tooltip="Reverse the colors for the selected color palette"
                   labelPosition="top"
                   configField="isPaletteReversed"/>

      {/*<ColorPicker label="Sequential" colors={themeColors}
                   tooltip="Select the theme color for the component" colorTooltip/>

      <Label>Sequential</Label>
      <ul className="color-palette">
        {filteredPallets.map((palette) => {
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
        })}
      </ul>

      <Label>Non-Sequential</Label>
      <ul className="color-palette">
        {filteredQualitative.map((palette) => {
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
        })}
      </ul>*/}

      {config.visualizationType !== 'Pie' && (
        <>
          {config.orientation !== 'horizontal' &&
            <InputCheckbox label="Display label on data" configField="labels"/>
          }
          <InputText label="Data Cutoff" type="number"
                     tooltip={`Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.`}
                     configField="dataCutoff"/>
        </>
      )}
      {((config.visualizationType === 'Bar' && config.orientation !== 'horizontal') || config.visualizationType === 'Combo') &&
        <InputText label="Bar Thickness" type="number" configField="barThickness"/>
      }
    </Accordion.Section>
  )

  const panelDataTable = (
    <Accordion.Section label="Data Table">
      <InputCheckbox label="Show Table"
                     tooltip="Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement."
                     configField={[ 'table', 'show' ]}/>
      <InputCheckbox label="Expanded by Default" configField={[ 'table', 'expanded' ]}/>
      <InputCheckbox label="Display Download Button" configField={[ 'table', 'download' ]}/>
      <InputText label="Label" configField={[ 'table', 'label' ]}/>
      <InputText label="Index Column Header" configField={[ 'table', 'indexLabel' ]}/>
    </Accordion.Section>
  )

  return (
    <>
      {EditorPanelGlobal()}
      {panelGeneral}
      {panelDataSeries}
      {panelValueDataFormat}
      {panelAxisSegments}
      {panelRegions}
      {panelLegend}
      {panelFilters}
      {panelVisual}
      {panelDataTable}
    </>
  )
}

export default EditorPanels
