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

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import BarIcon from '@cdc/core/assets/chart-bar-solid.svg';
import LineIcon from '@cdc/core/assets/chart-line-solid.svg';
import PieIcon from '@cdc/core/assets/chart-pie-solid.svg';
import UsaIcon from '@cdc/core/assets/usa-graphic.svg';
import WorldIcon from '@cdc/core/assets/world-graphic.svg';

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

const TextField = memo(({label, section = null, subsection = null, fieldName, updateField, value: stateValue, type = "input", i = null, min = null, ...attributes}) => {
  const [ value, setValue ] = useState(stateValue);

  const [ debouncedValue ] = useDebounce(value, 500);

  useEffect(() => {
    if('string' === typeof debouncedValue && stateValue !== debouncedValue ) {
      updateField(section, subsection, fieldName, debouncedValue, i)
    }
  }, [debouncedValue])

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
  let optionsJsx = options.map(optionName => <option value={optionName} key={optionName}>{optionName}</option>)

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
    rawData,
    setParentConfig,
    setEditing
  } = useContext(Context);

  const enforceRestrictions = (updatedConfig) => {
    // TODO
  };

  const updateField = (section, subsection, fieldName, newValue) => {
    // Top level
    if( null === section && null === subsection) {
      let dashboardConfig = config.dashboard;

      dashboardConfig[fieldName] = newValue;

      let updatedConfig = {...config, dashboard: dashboardConfig};

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
    //TODO 

    return false;
  };

  const [ displayPanel, setDisplayPanel ] = useState(true);

  // Used to pipe a JSON version of the config you are creating out
  const [ configData, setConfigData ] = useState({})

  if(loading) {
    return null
  }

  const getColumns = (filter = true) => {
    let columns = {}

    rawData.map(row => {
      Object.keys(row).forEach(columnName => columns[columnName] = true)
    })

    if(filter) {
      Object.keys(columns).forEach(key => {
        if((config.series && config.series.filter(series => series.dataKey === key).length > 0) || (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key)) ) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
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

  const addVisualization = (type, subType) => {
    let newVisualizations = config.visualizations ? {...config.visualizations} : {}
    
    let newVisualizationConfig = {type, newViz: true};

    if(type === 'chart'){
      newVisualizationConfig.visualizationType = subType;
    } else if(type === 'map'){
      newVisualizationConfig.general = {};
      newVisualizationConfig.general.geoType = subType;
    }

    newVisualizations[type + Date.now()] = newVisualizationConfig;
      
    updateConfig({...config, visualizations: newVisualizations})
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const removeVisualization = (visualizationKey) => {
    let newConfig = {...config};

    delete newConfig.visualizations[visualizationKey];

    updateConfig(newConfig);
  }

  const convertStateToConfig = (type = "JSON") => {
    let strippedState = JSON.parse(JSON.stringify(config))
    if(false === missingRequiredSections()) {
      delete strippedState.newViz
    }
    delete strippedState.runtime

    if(type === "JSON") {
      return JSON.stringify( strippedState )
    }

    return strippedState
  }

  useEffect(() => {
    const parsedData = convertStateToConfig()

    const formattedData = JSON.stringify(JSON.parse(parsedData), undefined, 2);

    setConfigData(formattedData)

    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateMapConfig', { detail: parsedData})

    window.dispatchEvent(event)

    // Pass up to Editor if needed
    if(setParentConfig) {
      const newConfig = convertStateToConfig("object")
      setParentConfig(newConfig)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  const removeFilter = (index) => {
    let dashboardConfig = config.dashboard;

    dashboardConfig.filters.splice(index, 1);

    updateConfig({...config, dashboard: dashboardConfig});
  }

  const updateFilterProp = (name, index, value) => {
    let dashboardConfig = config.dashboard;

    dashboardConfig.filters[index][name] = value;

    updateConfig({...config, dashboard: dashboardConfig});
  }

  const addNewFilter = () => {
    let dashboardConfig = config.dashboard;

    dashboardConfig.filters = dashboardConfig.filters || [];

    dashboardConfig.filters.push({values: []});

    updateConfig({...config, dashboard: dashboardConfig});
  }

  return (
    <ErrorBoundary component="EditorPanel">
      {config.runtime && config.runtime.editorErrorMessage && <Error /> }
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel) }></button>
      <section className={displayPanel ? 'editor-panel' : 'hidden editor-panel'}>
        <h2>Configure Dashboard</h2>
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
                  <TextField value={config.dashboard.title} section="dashboard" fieldName="title" label="Title" updateField={updateField} />
                  <TextField type="textarea" value={config.dashboard.description} section="dashboard" fieldName="description" label="Description" updateField={updateField} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem> {/* Visualizations */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Visualizations
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h2>Current Visualizations</h2>
                  <ol className="current-viz-list">
                    {Object.keys(config.visualizations).map((visualizationKey) => (
                      <li>
                        {config.visualizations[visualizationKey].type === 'chart' && (config.visualizations[visualizationKey].visualizationType + ' Chart')} 
                        {config.visualizations[visualizationKey].type === 'map' && (capitalize(config.visualizations[visualizationKey].general.geoType) + ' Map')} 
                        <button type="button" onClick={() => {setEditing(visualizationKey)}}>Edit</button>
                        <button type="button" onClick={() => {removeVisualization(visualizationKey)}}>Remove</button>
                      </li>
                    ))}
                  </ol>

                  <h2>Add Visualization</h2>
                  <h3>Chart</h3>
                  <button className="viz-icon" type="button" onClick={() => addVisualization('chart', 'Bar')}><BarIcon /><span>Bar</span></button>
                  <button className="viz-icon" type="button" onClick={() => addVisualization('chart', 'Line')}><LineIcon /><span>Line</span></button>
                  <button className="viz-icon" type="button" onClick={() => addVisualization('chart', 'Pie')}><PieIcon /><span>Pie</span></button>
                  <h3>Map</h3>
                  <button className="viz-icon" type="button" onClick={() => addVisualization('map', 'us')}><UsaIcon /><span>United States</span></button>
                  <button className="viz-icon" type="button" onClick={() => addVisualization('map', 'world')}><WorldIcon /><span>World</span></button>
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
                    {config.dashboard.filters && config.dashboard.filters.map((filter, index) => (
                        <fieldset className="edit-block">
                          <button type="button" className="remove-column" onClick={() => {removeFilter(index)}}>Remove</button>
                          <label>
                            <span className="edit-label column-heading">Filter</span>
                            <select value={filter.columnName} onChange={(e) => {updateFilterProp('columnName', index, e.target.value)}}>
                              <option value="">- Select Option -</option>
                              {getColumns().map((dataKey) => (
                                <option value={dataKey}>{dataKey}</option>
                              ))}
                            </select>
                          </label>
                          <label>
                            <span className="edit-label column-heading">Label</span>
                            <input type="text" value={filter.label} onChange={(e) => {updateFilterProp('label', index, e.target.value)}}/>
                          </label>
                        </fieldset>
                      )
                    )}
                  </ul>

                  <button type="button" onClick={addNewFilter} className="btn btn-primary">Add Filter</button>
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