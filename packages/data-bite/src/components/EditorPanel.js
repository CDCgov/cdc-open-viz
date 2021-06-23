import React, { useState, useEffect, memo, useContext } from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';

import { useDebounce } from 'use-debounce';
import Context from '../context';
import WarningImage from '../images/warning.svg';
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import Waiting from '@cdc/core/components/Waiting';
import * as Constants from '../constants';

const TextField = memo(({label, section = null, subsection = null, fieldName, updateField, value: stateValue, type = "input", i = null, min = null, ...attributes}) => {
  const [ value, setValue ] = useState(stateValue);

  const [ debouncedValue ] = useDebounce(value, 500);

  useEffect(() => {
    if('string' === typeof debouncedValue && stateValue !== debouncedValue ) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue, section, subsection, fieldName, i])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`;

  const onChange = (e) => {
    if('number' !== type || min === null){
      setValue(e.target.value);
    } else {
      if(!e.target.value || min <= parseFloat(e.target.value)){
        setValue(e.target.value);
      } else {
        setValue(min.toString());
      }
    }
  };

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

const Select = memo(({label, value, options, fieldName, section = null, subsection = null, required = false, updateField, initial: initialValue, ...attributes}) => {
  let optionsJsx = '';
  if ( Array.isArray(options)) { //Handle basic array
    optionsJsx = options.map(optionName => <option value={optionName} key={optionName}>{optionName}</option>)
  } else { //Handle object with value/name pairs
    optionsJsx = [];
    for (const [optionValue, optionName] of Object.entries(options)) {
      optionsJsx.push(<option value={optionValue} key={optionValue}>{optionName}</option>)
    }
  }

  if(initialValue) {
    optionsJsx.unshift(<option value="" key="initial">{initialValue}</option>)
  }

  return (
    <label>
      <span className="edit-label">{label}</span>
      <select className={required && !value ? 'warning' : ''} name={fieldName} value={value} onChange={(event) => { updateField(section, subsection, fieldName, event.target.value) }} {...attributes}>
        {optionsJsx}
      </select>
    </label>
  )
})

const headerColors = ['theme-blue','theme-purple','theme-brown','theme-teal','theme-pink','theme-orange','theme-slate','theme-indigo','theme-cyan','theme-green','theme-amber']

const EditorPanel = memo(() => {
  const {
    config,
    updateConfig,
    loading,
    data,
    setParentConfig
  } = useContext(Context);

  const enforceRestrictions = (updatedConfig) => {
   //If there are any dependencies between fields, etc../
  };

  const updateField = (section, subsection, fieldName, newValue) => {
    // Top level
    if( null === section && null === subsection) {
      let updatedConfig = {...config, [fieldName]: newValue};

      if ( 'filterColumn' === fieldName ) {
        updatedConfig.filterValue = '';
      }

      enforceRestrictions(updatedConfig);

      updateConfig(updatedConfig);
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

    let updatedConfig = {...config, [section]: sectionValue};

    enforceRestrictions(updatedConfig);

    updateConfig(updatedConfig)
  }

  const missingRequiredSections = () => {
    //Whether to show error message if something is required to show a data-bite and isn't filled in
    return false;
  };

  const [ displayPanel, setDisplayPanel ] = useState(true);

  // Used to pipe a JSON version of the config you are creating out
  const [ configData, setConfigData ] = useState({})

  useEffect(() => {
    // Pass up to Editor if needed
    if(setParentConfig) {
      const newConfig = convertStateToConfig()
      setParentConfig(newConfig)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  if(loading) {
    return null
  }

  const Error = () => {
    return (
      <section className="waiting">
        <section className="waiting-container">
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    );
  }

  const getColumns = (filter = true) => {
      let columns = {}

      data.map(row => {
        Object.keys(row).forEach(columnName => columns[columnName] = true)
      })

      return Object.keys(columns)
  }

  const getColumnValues = () => {
    let filterDataOptions = []
    if (data && config.filterColumn) {
      data.forEach(function(row) {
        if ( -1 === filterDataOptions.indexOf(row[config.filterColumn]) ) {
          filterDataOptions.push(row[config.filterColumn]);
        }
      })
      filterDataOptions.sort();
    }
    return filterDataOptions;

  }

  const Confirm = () => {
    return (
      <section className="waiting">
        <section className="waiting-container">
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
          <button className="btn" style={{margin: '1em auto'}} disabled={missingRequiredSections()} onClick={(e) => {e.preventDefault(); updateConfig({...config, newViz: false})}}>I'm Done</button>
        </section>
      </section>
    );
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    if(false === missingRequiredSections()) {
      delete strippedState.newViz
    }
    delete strippedState.runtime

    return strippedState
  }

  return (
    <ErrorBoundary component="EditorPanel">
      {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error /> }
      {config.newViz && <Confirm />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel) }></button>
      <section className={displayPanel ? 'editor-panel' : 'hidden editor-panel'}>
        <h2>Configure Data Bite</h2>
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
                  <TextField value={config.title} fieldName="title" label="Title" placeholder="Data Bite Title" updateField={updateField} />
                  <TextField type="textarea" value={config.biteBody} fieldName="biteBody" label="Message" updateField={updateField} />
                  <TextField value={config.subtext} fieldName="subtext" label="Subtext/Citation" placeholder="Data Bite Subtext or Citation" updateField={updateField} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Data
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.dataColumn || ""} fieldName="dataColumn" label="Data Column" updateField={updateField} initial="Select" options={getColumns()} />
                  <Select value={config.dataFunction || ""} fieldName="dataFunction" label="Data Function" updateField={updateField} initial="Select" options={Constants.DATA_FUNCTIONS} />
                  <ul className="column-edit">
                    <li className="three-col">
                      <TextField value={config.prefix} fieldName="prefix" label="Prefix" updateField={updateField} />
                      <TextField value={config.suffix} fieldName="suffix" label="Suffix" updateField={updateField} />
                      <TextField type="number" value={config.roundToPlace} fieldName="roundToPlace" label="Round" updateField={updateField} />
                    </li>
                  </ul>
                  <Select value={config.filterColumn || ""} fieldName="filterColumn" label="Filter Column" updateField={updateField} initial="Select" options={getColumns()} />
                  <Select value={config.filterValue || ""} fieldName="filterValue" label="Filter Value" updateField={updateField} initial="Select" options={getColumnValues()} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Visual
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.biteLocation} fieldName="biteLocation" label="Bite Layout" updateField={updateField} options={Constants.BITE_LOCATIONS} initial="Select" />
                  <TextField value={config.imageUrl} fieldName="imageUrl" label="Image URL" updateField={updateField} />
                  <Select value={config.imagePosition || ""} fieldName="imagePosition" label="Image Position" updateField={updateField} initial="Select" options={Constants.IMAGE_POSITIONS} />
                  <Select value={config.fontSize} fieldName="fontSize" label="Font Size" updateField={updateField} options={['small', 'medium', 'large']} />
                  <label className="header">
                    <span className="edit-label">Header Theme</span>
                    <ul className="color-palette">
                      {headerColors.map( (palette) => (
                        <li title={ palette } key={ palette } onClick={ () => { updateConfig({...config, theme: palette})}} className={ config.theme === palette ? "selected " + palette : palette}>
                        </li>
                      ))}
                    </ul>
                  </label>
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