import React, { useState, useEffect, memo, useContext } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import ConfigContext from '../ConfigContext'

import Accordion from '@cdc/core/components/ui/Accordion'
import InputText from '@cdc/core/components/inputs/InputText'
import { useDebounce } from 'use-debounce'

import '@cdc/core/styles/v2/components/editor.scss';

const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

const TextField = memo(({label, section = null, subsection = null, fieldName, updateField, value: stateValue, tooltip, type = "input", i = null, min = null, max = null, ...attributes}) => {
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
	  <>
		{label && label.length > 0 &&
		  <label>
			<span className="edit-label column-heading">{label}{tooltip}</span>
			{formElement}
		  </label>
		}
		{(!label || label.length === 0) && formElement}
	  </>
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

const EditorPanel = memo((props) => {
	const {
		config,
		updateConfig,
		loading,
		stateData:data,
		setParentConfig,
		isDashboard
	} = useContext(ConfigContext) 

	const [displayPanel, setDisplayPanel] = useState(true)
	const [showConfigConfirm, setShowConfigConfirm] = useState(false)


	const updateField = (section, subsection, fieldName, newValue) => {
		// Top level
		if (null === section && null === subsection) {
			let updatedConfig = { ...config, [fieldName]: newValue }

			if ('filterColumn' === fieldName) {
				updatedConfig.filterValue = ''
			}

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

		updateConfig(updatedConfig)
	}

	const missingRequiredSections = () => {
		return false
	}

	  // Filters -----------------------------------------------
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
		  if(data.length){
			data.map(row => {
			  return Object.keys(row).forEach(columnName => columns[columnName] = true)
			 })
		  }
	
	
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

	useEffect(() => {
		// Pass up to Editor if needed
		if (setParentConfig) {
			const newConfig = convertStateToConfig()

			setParentConfig(newConfig)
		}
	}, [config])

	useEffect(() => {
		if (!showConfigConfirm) {
			let newConfig = { ...config }
			delete newConfig.newViz
			updateConfig(newConfig)
		}
	}, [])

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
					<p>Set all required options to the left and confirm below to display a preview of the markup.</p>
					<button className="btn" style={{ margin: '1em auto' }}
						onClick={confirmDone}>I'm Done
					</button>
				</section>
			</section>
		)
	}
	const convertStateToConfig = () => {
		let strippedState = JSON.parse(JSON.stringify(config))
		delete strippedState.newViz
		delete strippedState.runtime

		return strippedState
	}
	const editorContent = (
		<> 
		<Accordion>
			<Accordion.Section title="General">
			<TextField value={config.title} fieldName="title" label="Title" placeholder="Title" updateField={updateField} />
			</Accordion.Section>
		</Accordion>
		<Accordion>
			<Accordion.Section title="Data">
			<Select value={config.fontSize} fieldName="textColumn" label="Text Column" updateField={updateField} options={getColumns()} />
			{config.filters &&
			<ul className="filters-list">
			{config.filters.map((filter, index) => (
				<fieldset className="edit-block" key={index}>
					<button type="button" className="remove-column" onClick={() => {removeFilter(index)}}>Remove</button>
					<label>
						<span className="edit-label column-heading">Column</span>
						<select value={filter.columnName ? filter.columnName : ''} onChange={(e) => {updateFilterProp('columnName', index, e.target.value)}}>
							<option value="">- Select Option -</option>
							{getColumns().map((dataKey, index) => (
							<option value={dataKey} key={index}>{dataKey}</option>
							))}
						</select>
					</label>
					<label>
						<span className="edit-label column-heading">Column Value</span>
						<select value={filter.columnValue} onChange={(e) => {updateFilterProp('columnValue', index, e.target.value)}}>
							<option value="">- Select Option -</option>
							{getFilterColumnValues(index).map((dataKey, index) => (
							<option value={dataKey} key={index}>{dataKey}</option>
							))}
						</select>
					</label>
				</fieldset>
				))}
			</ul>
                  }
                  {(!config.filters || config.filters.length === 0) &&
                    <div>
                      <fieldset className="edit-block">
                        <p style={{textAlign: "center"}}>There are currently no filters.</p>
                      </fieldset>
                    </div>
                  }
                  <button type="button" onClick={addNewFilter} className="btn full-width">Add Filter</button>
			</Accordion.Section>
		</Accordion>
		<Accordion>
			<Accordion.Section title="Visual">
				<Select value={config.fontSize} fieldName="fontSize" label="Overall Font Size" updateField={updateField} options={['small', 'medium', 'large']} />
				<CheckBox value={config.visual?.border} section="visual" fieldName="border" label="Display Border" updateField={updateField} />
				<CheckBox value={config.visual?.accent} section="visual" fieldName="accent" label="Use Accent Style" updateField={updateField} />
				<CheckBox value={config.visual?.background} section="visual" fieldName="background" label="Use Theme Background Color" updateField={updateField} />
				<CheckBox value={config.visual?.hideBackgroundColor} section="visual" fieldName="hideBackgroundColor" label="Hide Background Color" updateField={updateField} />
				<label >
				<span className="edit-label">Theme</span>
				{/* <ul className="color-palette">
					{headerColors.map( (palette) => (
					<li title={ palette } key={ palette } onClick={ () => { updateConfig({...config, theme: palette})}} className={ config.theme === palette ? "selected " + palette : palette} />
					))}
				</ul> */}
				</label>
			</Accordion.Section>
		</Accordion>
		</>
	)

	if (loading) return null

	return (
		<ErrorBoundary component="EditorPanel">
			<div className="cove-editor">
				{!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
				{config.newViz && showConfigConfirm && <Confirm />}
				<button className={`cove-editor--toggle` + (!displayPanel ? ` collapsed` : ``)}
					title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick} />
				<section className={`cove-editor__panel` + (displayPanel ? `` : ' hidden')}>
					<div className="cove-editor__panel-container">
						<h2 className="cove-editor__heading">Configure Filtered Text</h2>
						<section className="cove-editor__content">
							{editorContent}
						</section>
					</div>
				</section>
				<div className="cove-editor__content">
					<div className="cove-editor__content-wrap">
						{props.children}
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
})

export default EditorPanel
