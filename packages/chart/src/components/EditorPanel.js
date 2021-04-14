import React, { useState, useEffect, useCallback, memo, useContext } from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import { useDebounce } from 'use-debounce';

import Context from '../context';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Waiting from '@cdc/core/components/Waiting'

// IE11 Custom Event polyfill
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();

const TextField = memo(({label, section = null, subsection = null, fieldName, updateField, value: stateValue, type = "input", ...attributes}) => {
  const [ value, setValue ] = useState(stateValue);

  const [ debouncedValue ] = useDebounce(value, 500);

  useEffect(() => {
    if('string' === typeof debouncedValue && stateValue !== debouncedValue ) {
      updateField(section, subsection, fieldName, debouncedValue)
    }
  }, [debouncedValue])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`;

  const onChange = (e) => setValue(e.target.value);

  let formElement = <input type="text" name={name} onChange={onChange} {...attributes} value={value} />

  if('textarea' === type) {
    formElement = (
      <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>
    )
  }
  
  if('number' === type) {
    formElement = <input type="number" name={name} onChange={onChange} {...attributes} value={value} />
  }

  return (
    <label>
      <span className="edit-label column-heading">{label}</span>
      {formElement}
    </label>
  )
})

const CheckBox = memo(({label, value, fieldName, section = null, subsection = null, updateField, ...attributes}) => (
  <label className="checkbox">
    <input type="checkbox" name={fieldName} checked={ value } onChange={() => { updateField(section, subsection, fieldName, !value) }} {...attributes}/>
    <span className="edit-label">{label}</span>
  </label>
))

const Select = memo(({label, value, options, fieldName, section = null, subsection = null, updateField, initialValue, ...attributes}) => {
  let optionsJsx = options.map(optionName => <option value={optionName}>{optionName}</option>)

  if(initialValue) {
    optionsJsx.unshift(<option value={initialValue} disabled>{initialValue}</option>)
  }

  return (
    <label>
      <span className="edit-label">{label}</span>
      <select name={fieldName} value={value} onChange={(event) => { updateField(section, subsection, fieldName, event.target.value) }} {...attributes}>
        {optionsJsx}
      </select>
    </label>
  )
})

const headerColors = ['theme-blue','theme-purple','theme-brown','theme-teal','theme-pink','theme-orange','theme-slate','theme-indigo','theme-cyan','theme-green','theme-amber']

const EditorPanel = memo(() => {
  const { config, setConfig, loading, colorPalettes, data } = useContext(Context);

  const updateField = (section, subsection, fieldName, newValue) => {
    // Top level
    if( null === section && null === subsection) {
      setConfig({...config, [fieldName]: newValue})
      return
    }

    const isArray = Array.isArray(config[section]);

    let sectionValue = isArray ? [...config[section], newValue] : {...config[section], [fieldName]: newValue};

    if(null !== subsection) {
      if(isArray) {
        sectionValue = [...config[section]]
        sectionValue[subsection] = {...sectionValue[subsection], [fieldName]: newValue}
      } else if(typeof newValue === "string") {
        sectionValue[subsection] = newValue
      } else {
        sectionValue = {...config[section], [subsection]: { ...config[section][subsection], [fieldName]: newValue}}
      }
    }

    let updatedConfig = {
      [section]: sectionValue
    }

    setConfig({...config, ...updatedConfig})
  }

  const [ requiredColumns, setRequiredColumns ] = useState([])
  const [ addSeries, setAddSeries ] = useState('');
  const [ displayPanel, setDisplayPanel ] = useState(true)

  if(loading) {
    return null
  }

  const removeSeriesKey = (i) => {
    let seriesKeys = [...config.seriesKeys]
    seriesKeys.splice(i, 1)

    let newConfig = {...config, seriesKeys}

    if(seriesKeys.length === 0) {
      delete newConfig.seriesKeys
    }

    setConfig(newConfig)
  }

  const addNewSeries = (value) => {
    let newSeriesKeys = config.seriesKeys ? [...config.seriesKeys] : []
    newSeriesKeys.push(value)
    setConfig({...config, seriesKeys: newSeriesKeys})
  }

  const getColumns = () => {
    let columns = {}

    data.map(row => {
      Object.keys(row).forEach(columnName => columns[columnName] = true)
    })

    return Object.keys(columns)
  }

  return (
    <ErrorBoundary component="EditorPanel">
      {0 !== requiredColumns.length && <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel) }></button>
      <section className={displayPanel ? 'editor-panel' : 'hidden editor-panel'}>
        <h2>Configure Chart</h2>
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
                  <Select value={config.visualizationType} fieldName="visualizationType" label="Chart Type" updateField={updateField} options={['Pie', 'Line', 'Bar', 'Combo']} />
                  {config.visualizationType === "Bar" && <Select value={config.visualizationSubType || "Regular"} fieldName="visualizationSubType" label="Chart Subtype" updateField={updateField} options={['regular', 'stacked', 'horizontal']} />}
                  <TextField value={config.title} fieldName="title" label="Title" updateField={updateField} />
                  <TextField type="textarea" value={config.description} fieldName="description" label="Description" updateField={updateField} />
                </AccordionItemPanel>
              </AccordionItem>
              {config.visualizationType !== "Pie" && <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Data Series
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {config.seriesKeys && (
                    <>
                      <label><span className="edit-label">Displaying</span></label>
                      <ul className="series-list">
                        {config.seriesKeys.map((key, i) => (
                          <li key={key}>{key} <span onClick={() => removeSeriesKey(i)}>X</span></li>
                        ))}
                      </ul>
                    </>)}
                    <Select value={addSeries} fieldName="visualizationType" label="Add Data Series" onChange={(e) => { setAddSeries(e.target.value)}} options={getColumns()} />
                    <button onClick={(e) => { e.preventDefault(); addNewSeries(addSeries) }} className="btn btn-primary">Add Data Series</button>
                </AccordionItemPanel>
              </AccordionItem>}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Y Axis
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.yAxis.dataKey} section="yAxis" fieldName="dataKey" label="Data Key" updateField={updateField} options={['Race', 'Age-adjusted rate']} />
                  <TextField value={config.yAxis.label} section="yAxis" fieldName="label" label="Label" updateField={updateField} />
                  <TextField value={config.yAxis.numTicks} placeholder="Auto" type="number" section="yAxis" fieldName="numTicks" label="Number of ticks" className="number-narrow" updateField={updateField} />
                  <TextField value={config.yAxis.size} type="number" section="yAxis" fieldName="size" label="Size (width)" className="number-narrow" updateField={updateField} />
                  <CheckBox value={config.yAxis.gridLines} section="yAxis" fieldName="gridLines" label="Display Gridlines" updateField={updateField} />
                  <span className="divider-heading">Number Formatting</span>
                  <CheckBox value={config.dataFormat.commas} section="dataFormat" fieldName="commas" label="Add commas" updateField={updateField} />
                  <TextField value={config.dataFormat.roundTo} type="number" section="dataFormat" fieldName="roundTo" label="Round to decimal point" className="number-narrow" updateField={updateField} />
                  <TextField value={config.dataFormat.prefix} section="dataFormat" fieldName="prefix" label="Prefix" updateField={updateField} />
                  <TextField value={config.dataFormat.suffix} section="dataFormat" fieldName="suffix" label="Suffix" updateField={updateField} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    X Axis
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <TextField value={config.xAxis.label} section="xAxis" fieldName="label" label="Label" updateField={updateField} />
                  <Select value={config.xAxis.dataKey} section="xAxis" fieldName="dataKey" label="Data Key" updateField={updateField} options={['Race', 'Age-adjusted rate']} />
                  <Select value={config.xAxis.type} section="xAxis" fieldName="type" label="Data Type" updateField={updateField} options={['categorical', 'date']} />
                  {config.xAxis.type === "date" && (
                    <>
                      <p style={{padding: '.5em 0', fontSize: '.9rem', lineHeight: '1rem'}}>Format how charts should parse and display your dates using <a href="https://github.com/d3/d3-time-format#locale_format" target="_blank">these guidelines</a>.</p>
                      <TextField value={config.xAxis.dateParseFormat} section="xAxis" fieldName="dateParseFormat" placeholder="Ex. %Y-%m-%d" label="Date Parse Format" updateField={updateField} />
                      <TextField value={config.xAxis.dateDisplayFormat} section="xAxis" fieldName="dateDisplayFormat" placeholder="Ex. %Y-%m-%d" label="Date Display Format" updateField={updateField} />
                    </>
                  )}
                  <TextField value={config.xAxis.size} type="number" section="xAxis" fieldName="size" label="Size (height)" className="number-narrow" updateField={updateField} />
                  <TextField value={config.xAxis.tickRotation} type="number" section="xAxis" fieldName="tickRotation" label="Tick rotation (Degrees)" className="number-narrow" updateField={updateField} />                  
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Regions
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    Lorem ipsum
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Legend
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <CheckBox value={config.legend.hide} section="legend" fieldName="hide" label="Hide Legend" updateField={updateField} />
                  <Select value={config.legend.behavior} section="legend" fieldName="behavior" label="Legend Behavior (When clicked)" updateField={updateField} options={['highlight', 'isolate']} />
                  <TextField value={config.legend.label} section="legend" fieldName="label" label="Title" updateField={updateField} />
                  <Select value={config.legend.position} section="legend" fieldName="position" label="Position" updateField={updateField} options={['right', 'left']} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Visual
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.fontSize} fieldName="fontSize" label="Font Size" updateField={updateField} options={['small', 'medium', 'large']} />
                  <label className="header">
                    <span className="edit-label">Header Theme</span>
                    <ul className="color-palette">
                      {headerColors.map( (palette) => (
                        <li title={ palette } key={ palette } onClick={ () => { setConfig({...config, theme: palette})}} className={ config.theme === palette ? "selected " + palette : palette}>
                        </li>
                      ))}
                    </ul>
                  </label>
                  <label>
                    <span className="edit-label">Chart Color Palette</span>
                  </label>
                  <h5>Quantitative</h5>
                  <ul className="color-palette">
                    {Object.keys(colorPalettes).filter((name) => name.includes('qualitative')).map( (palette) => {

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
                          <li title={ palette } key={ palette } onClick={ () => { setConfig({...config, palette}) }} className={ config.palette === palette ? "selected" : ""}>
                            <span style={colorOne}></span>
                            <span  style={colorTwo}></span>
                            <span  style={colorThree}></span>
                          </li>
                      )
                    })}
                  </ul>
                  <h5>Sequential</h5>
                  <ul className="color-palette">
                    {Object.keys(colorPalettes).filter((name) => name.includes('sequential')).map( (palette) => {

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
                          <li title={ palette } key={ palette } onClick={ () => { setConfig({...config, palette}) }} className={ config.palette === palette ? "selected" : ""}>
                            <span style={colorOne}></span>
                            <span  style={colorTwo}></span>
                            <span  style={colorThree}></span>
                          </li>
                      )
                    })}
                  </ul>
                  <CheckBox value={config.labels} fieldName="labels" label="Display label on data" updateField={updateField} />
                  <TextField value={config.dataCutoff} type="number" fieldName="dataCutoff" className="number-narrow" label="Data Cutoff" updateField={updateField} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Data Table
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <CheckBox value={config.table.expanded} section="table" fieldName="expanded" label="Expanded by Default" updateField={updateField} />
                  <CheckBox value={config.table.download} section="table" fieldName="download" label="Display Download Button" updateField={updateField} />
                  <TextField value={config.table.label} section="table" fieldName="label" label="Label" updateField={updateField} />
                </AccordionItemPanel>
              </AccordionItem>
           </Accordion>
          </form>
        </section>
      </section>
    </ErrorBoundary>
  )
})

export default EditorPanel;