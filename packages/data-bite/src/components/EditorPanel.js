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
import { IMAGE_POSITIONS, BITE_LOCATIONS, DATA_FUNCTIONS } from '../CdcDataBite'

const TextField = memo(({label, section = null, subsection = null, fieldName, updateField, value: stateValue, type = "input", i = null, min = null, max = null, ...attributes}) => {
  const [ value, setValue ] = useState(stateValue);

  const [ debouncedValue ] = useDebounce(value, 500);

  useEffect(() => {
    if('string' === typeof debouncedValue && stateValue !== debouncedValue ) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue, section, subsection, fieldName, i, stateValue, updateField])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`;

  const onChange = (e) => {
    //TODO: This block gives a warning/error in the console, but it still works.
    if('number' !== type || min === null){
      setValue(e.target.value);
    } else {
      if(!e.target.value || ( parseFloat(min) <= parseFloat(e.target.value ) & parseFloat(max) >= parseFloat(e.target.value))) {
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
    setParentConfig,
    isDashboard
  } = useContext(Context);

  const [ displayPanel, setDisplayPanel ] = useState(true);
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

  useEffect(() => {
    // Pass up to Editor if needed
    if(setParentConfig) {
      const newConfig = convertStateToConfig()
      
      setParentConfig(newConfig)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  const onBackClick = () => {
    setDisplayPanel(!displayPanel);
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

  const removeFilter = (index) => {
    let filters = [...config.filters];

    filters.splice(index, 1);

    updateConfig({...config, filters})
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [...config.filters];

    filters[index][name] = value;

    updateConfig({...config, filters});
  }

  const addNewFilter = () => {
    let filters = config.filters ? [...config.filters] : [];

    filters.push({values: []});

    updateConfig({...config, filters});
  }

  const getColumns = (filter = true) => {
    let columns = {}

    data.map(row => {
      Object.keys(row).forEach(columnName => columns[columnName] = true)
    })

    return Object.keys(columns)
  }

  const getFilterColumnValues = (index) => {
    let filterDataOptions = []
    const filterColumnName = config.filters[index].columnName;
    if (data && filterColumnName) {
      data.forEach(function(row) {
        if ( undefined !== row[filterColumnName] && -1 === filterDataOptions.indexOf(row[filterColumnName]) ) {
          filterDataOptions.push(row[filterColumnName]);
        }
      })
      filterDataOptions.sort();
    }
    return filterDataOptions;
  }

  if(loading) {
    return null
  }

  return (
    <ErrorBoundary component="EditorPanel">
      {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error /> }
      {(!config.dataColumn || !config.dataFunction) && <Confirm />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick}></button>
      <section className={displayPanel ? 'editor-panel' : 'hidden editor-panel'}>
        <div className="heading-2">Configure Data Bite</div>
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
                    Data {(!config.dataColumn || !config.dataFunction) && <WarningImage width="25" className="warning-icon" />}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.dataColumn || ""} fieldName="dataColumn" label="Data Column" updateField={updateField} initial="Select" required={true} options={getColumns()} />
                  <Select value={config.dataFunction || ""} fieldName="dataFunction" label="Data Function" updateField={updateField} initial="Select" required={true} options={DATA_FUNCTIONS} />
                  <ul className="column-edit">
                    <li className="three-col">
                      <TextField value={config.prefix} fieldName="prefix" label="Prefix" updateField={updateField} />
                      <TextField value={config.suffix} fieldName="suffix" label="Suffix" updateField={updateField} />
                      <TextField type="number" value={config.roundToPlace} fieldName="roundToPlace" label="Round" updateField={updateField} />
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Filters
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul className="filters-list">
                    {config.filters && config.filters.map((filter, index) => (
                        <fieldset className="edit-block">
                          <button type="button" className="remove-column" onClick={() => {removeFilter(index)}}>Remove</button>
                          <label>
                            <span className="edit-label column-heading">Column</span>
                            <select value={filter.columnName} onChange={(e) => {updateFilterProp('columnName', index, e.target.value)}}>
                              <option value="">- Select Option -</option>
                              {getColumns().map((dataKey) => (
                                <option value={dataKey}>{dataKey}</option>
                              ))}
                            </select>
                          </label>
                          <label>
                            <span className="edit-label column-heading">Column Value</span>
                            <select value={filter.columnValue} onChange={(e) => {updateFilterProp('columnValue', index, e.target.value)}}>
                              <option value="">- Select Option -</option>
                              {getFilterColumnValues(index).map((dataKey) => (
                                <option value={dataKey}>{dataKey}</option>
                              ))}
                            </select>
                          </label>
                        </fieldset>
                      )
                    )}
                  </ul>

                  <button type="button" onClick={addNewFilter} className="btn btn-primary">Add Filter</button>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Visual
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Select value={config.biteStyle} fieldName="biteStyle" label="Data Bite Style" updateField={updateField} options={BITE_LOCATIONS} initial="Select" />
                  {config.biteStyle === 'image' && <TextField value={config.imageUrl} fieldName="imageUrl" label="Image URL" updateField={updateField} />}
                  {['graphic', 'image'].includes(config.biteStyle) && <Select value={config.bitePosition || ""} fieldName="bitePosition" label="Image/Graphic Position" updateField={updateField} initial="Select" options={IMAGE_POSITIONS} />}
                  <TextField type="number" value={config.biteFontSize} fieldName="biteFontSize" label="Bite Font Size" updateField={updateField} min="16" max="65" />
                  <Select value={config.fontSize} fieldName="fontSize" label="Overall Font Size" updateField={updateField} options={['small', 'medium', 'large']} />
                  <CheckBox value={config.shadow} fieldName="shadow" label="Display Shadow" updateField={updateField} />
                  <label className="header">
                    <span className="edit-label">Theme</span>
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