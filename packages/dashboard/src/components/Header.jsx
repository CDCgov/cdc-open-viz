import React, { useState, useEffect, useContext } from 'react'

import ConfigContext from '../ConfigContext'

import { DataTransform } from '@cdc/core/helpers/DataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import Modal from '@cdc/core/components/ui/Modal'

const Header = ({ setPreview, tabSelected, setTabSelected, back, subEditor = null }) => {
  const { config, updateConfig, setParentConfig } = useContext(ConfigContext)

  const { overlay } = useGlobalContext()

  const [columns, setColumns] = useState([])

  const transform = new DataTransform()

  const changeConfigValue = (parentObj, key, value) => {
    let newConfig = { ...config }
    if (!newConfig[parentObj]) newConfig[parentObj] = {}
    newConfig[parentObj][key] = value

    updateConfig(newConfig)
  }

  const setTab = index => {
    setTabSelected(index)
    if (index === 4) {
      setPreview(true)
    } else {
      setPreview(false)
    }
  }

  const addNewFilter = () => {
    let dashboardConfig = { ...config.dashboard }

    dashboardConfig.sharedFilters = dashboardConfig.sharedFilters || []

    dashboardConfig.sharedFilters.push({ key: 'Dashboard Filter ' + (dashboardConfig.sharedFilters.length + 1), values: [] })

    updateConfig({ ...config, dashboard: dashboardConfig })
  }

  const removeFilter = index => {
    let dashboardConfig = { ...config.dashboard }

    dashboardConfig.sharedFilters.splice(index, 1)

    // Ensures URL filters refresh after filter removal
    if(dashboardConfig.datasets){
      Object.keys(dashboardConfig.datasets).forEach(datasetKey => {
        delete dashboardConfig.datasets[datasetKey].runtimeDataUrl
      })
    }

    updateConfig({ ...config, dashboard: dashboardConfig })

    overlay?.actions.toggleOverlay()
  }

  const addNewFilterInteraction = () => {
    let dashboardConfig = { ...config.dashboard }

    dashboardConfig.filterInteractions = dashboardConfig.filterInteractions || []

    dashboardConfig.filterInteractions.push({ key: 'Dashboard Filter ' + (dashboardConfig.filterInteractions.length + 1), values: [] })

    updateConfig({ ...config, dashboard: dashboardConfig })
  }

  const removeFilterInteraction = index => {
    let dashboardConfig = { ...config.dashboard }

    dashboardConfig.filterInteractions.splice(index, 1)

    updateConfig({ ...config, dashboard: dashboardConfig })

    overlay?.actions.toggleOverlay()
  }

  const convertStateToConfig = (type = 'JSON') => {
    let strippedState = JSON.parse(JSON.stringify(config))
    delete strippedState.newViz
    delete strippedState.runtime

    if (type === 'JSON') {
      return JSON.stringify(strippedState)
    }

    return strippedState
  }

  useEffect(() => {
    const parsedData = convertStateToConfig()

    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })

    window.dispatchEvent(event)

    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig('object')
      setParentConfig(newConfig)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  useEffect(() => {
    const runSetColumns = async () => {
      let columns = {}
      let dataKeys = Object.keys(config.datasets)

      for (let i = 0; i < dataKeys.length; i++) {
        if (!config.datasets[dataKeys[i]].data && config.datasets[dataKeys[i]].dataUrl) {
          config.datasets[dataKeys[i]].data = await fetchRemoteData(config.datasets[dataKeys[i]].dataUrl)
          if (config.datasets[dataKeys[i]].dataDescription) {
            try {
              config.datasets[dataKeys[i]].data = transform.autoStandardize(config.datasets[dataKeys[i]].data)
              config.datasets[dataKeys[i]].data = transform.developerStandardize(config.datasets[dataKeys[i]].data, config.datasets[dataKeys[i]].dataDescription)
            } catch (e) {
              //Data not able to be standardized, leave as is
            }
          }
        }

        if (config.datasets[dataKeys[i]].data) {
          config.datasets[dataKeys[i]].data.forEach(row => {
            Object.keys(row).forEach(columnName => (columns[columnName] = true))
          })
        }
      }

      setColumns(Object.keys(columns))
    }

    runSetColumns()
  }, [config.datasets])

  const filterInteractionModal = (filterInteraction, index) => {
    const saveChanges = () => {
      let tempConfig = { ...config.dashboard }
      tempConfig.filterInteractions[index] = filterInteraction

      updateConfig({ ...config, dashboard: tempConfig })

      overlay?.actions.toggleOverlay()
    }

    const updateFilterInteractionProp = (name, index, value) => {
      let newFilterInteraction = { ...filterInteraction }

      newFilterInteraction[name] = value

      overlay?.actions.openOverlay(filterInteractionModal(newFilterInteraction, index))
    }

    const addFilterSetterValue = (e) => {
      let newFilterInteraction = { ...filterInteraction }

      newFilterInteraction.filterSetterValues = newFilterInteraction.filterSetterValues || [];
      newFilterInteraction.filterSetterValues.push(e.target.value);

      overlay?.actions.openOverlay(filterInteractionModal(newFilterInteraction, index))
      e.target.value = ''
    }

    const removeFilterSetterValue = (index) => {
      let newFilterInteraction = { ...filterInteraction }

      if(newFilterInteraction.filterSetterValues && newFilterInteraction.filterSetterValues.length > 0){
        newFilterInteraction.filterSetterValues.splice(index, 1);
      } 

      overlay?.actions.openOverlay(filterInteractionModal(newFilterInteraction, index))
    }

    const addFilterGetterValue = (e) => {
      let newFilterInteraction = { ...filterInteraction }

      newFilterInteraction.filterGetterValues = newFilterInteraction.filterGetterValues || [];
      newFilterInteraction.filterGetterValues.push(e.target.value);

      overlay?.actions.openOverlay(filterInteractionModal(newFilterInteraction, index))
      e.target.value = ''
    }

    const removeFilterGetterValue = (index) => {
      let newFilterInteraction = { ...filterInteraction }

      if(newFilterInteraction.filterGetterValues && newFilterInteraction.filterGetterValues.length > 0){
        newFilterInteraction.filterGetterValues.splice(index, 1);
      } 

      overlay?.actions.openOverlay(filterInteractionModal(newFilterInteraction, index))
    }

    return (
      <Modal>
        <Modal.Content>
        <h2>Dashboard Filter Interaction Settings</h2>
        When 
        <select defaultValue={filterInteraction.filterSetter} onChange={e => updateFilterInteractionProp('filterSetter', index, e.target.value)}>
          <option>Select a filter</option>
          {config.dashboard.sharedFilters && config.dashboard.sharedFilters.map(sharedFilter => 
            <option>{sharedFilter.key}</option>
          )}
        </select> is equal to value(s) <br/><br/>
        <ul>
          {filterInteraction.filterSetterValues && filterInteraction.filterSetterValues.map((setterValue, i) => (
            <li>{setterValue} <a href="#" onClick={e => removeFilterSetterValue(i)}>Remove</a></li>
          ))}
        </ul>
        <select onChange={addFilterSetterValue}>
            <option value=''>Select a value</option>
            {config.dashboard.sharedFilters && (config.dashboard.sharedFilters.find(sharedFilter => sharedFilter.key === filterInteraction.filterSetter) || {values: []}).values.filter(val => !filterInteraction.filterSetterValues || !filterInteraction.filterSetterValues.includes(val)).map(value => 
              <option>{value}</option>
            )}
        </select>
        <br/><br/>
        <select defaultValue={filterInteraction.interactionType} onChange={e => updateFilterInteractionProp('interactionType', index, e.target.value)}>
          <option>Select an action</option>
          <option value="remove">Remove filter</option>
          <option value="removeOptions">Remove filter options</option>
          <option value="set">Set filter</option>
        </select> {filterInteraction.interactionType === 'removeOptions' && 'from'} <select defaultValue={filterInteraction.filterGetter} onChange={e => updateFilterInteractionProp('filterGetter', index, e.target.value)}>
          <option>Select a filter</option>
          {config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.key !== filterInteraction.filterSetter).map(sharedFilter => 
            <option>{sharedFilter.key}</option>
          )}
        </select> {filterInteraction.interactionType === 'removeOptions' && (
          <>
              options <br/><br/>
              <ul>
                {filterInteraction.filterGetterValues && filterInteraction.filterGetterValues.map((getterValue, i) => (
                  <li>{getterValue} <a href="#" onClick={e => removeFilterGetterValue(i)}>Remove</a></li>
                ))}
              </ul>
              <select onChange={addFilterGetterValue}>
                  <option value=''>Select a value</option>
                  {config.dashboard.sharedFilters && (config.dashboard.sharedFilters.find(sharedFilter => sharedFilter.key === filterInteraction.filterGetter) || {values: []}).values.filter(val => !filterInteraction.filterGetterValues || !filterInteraction.filterGetterValues.includes(val)).map(value => 
                    <option>{value}</option>
                  )}
              </select><br/><br/>
          </>
        )}
        {filterInteraction.interactionType === 'set' && (
          <>
            to
            <select defaultValue={filterInteraction.filterGetterValue} onChange={e => updateFilterInteractionProp('filterGetterValue', index, e.target.value)}>
              <option>Select a value</option>
              {config.dashboard.sharedFilters && (config.dashboard.sharedFilters.find(sharedFilter => sharedFilter.key === filterInteraction.filterGetter) || {values: []}).values.map(value => 
                <option>{value}</option>
              )}
            </select>
          </>
        )}
        <br/>
        <br/>
        <button type='button' className='btn btn-primary' style={{ display: 'inline-block', 'margin-right': '1em' }} onClick={overlay?.actions.toggleOverlay}>
          Cancel
        </button>
        <button type='button' className='btn btn-primary' style={{ display: 'inline-block' }} onClick={saveChanges}>
          Save
        </button>
        </Modal.Content>
      </Modal>
    )
  }

  const filterModal = (filter, index) => {
    const saveChanges = () => {
      let tempConfig = { ...config.dashboard }
      tempConfig.sharedFilters[index] = filter

      updateConfig({ ...config, dashboard: tempConfig })

      overlay?.actions.toggleOverlay()
    }

    const updateFilterProp = (name, index, value) => {
      let newFilter = { ...filter }

      newFilter[name] = value

      overlay?.actions.openOverlay(filterModal(newFilter, index))
    }

    const updateFilterPropByFunction = (index, func) => {
      let newFilter = { ...filter }

      newFilter = func(newFilter)

      overlay?.actions.openOverlay(filterModal(newFilter, index))
    }

    const addFilterUsedBy = (filter, index, value) => {
      if (!filter.usedBy) filter.usedBy = []
      filter.usedBy.push(value)
      updateFilterProp('usedBy', index, filter.usedBy)
    }

    const removeFilterUsedBy = (filter, index, value) => {
      let usedByIndex = filter.usedBy.indexOf(value)
      if (usedByIndex !== -1) {
        filter.usedBy.splice(usedByIndex, 1)
        updateFilterProp('usedBy', index, filter.usedBy)
      }
    }

    const updateLabel = (e, value) => {
      let newLabels = filter.labels || {}

      newLabels[value] = e.target.value


      updateFilterProp('labels', index, newLabels)
    }

    const removeValue = (valueIndex) => {
      let newLabels = filter.labels || {}
      let newValues = filter.values || []

      delete newLabels[filter.values[valueIndex]]
      newValues.splice(valueIndex, 1)

      updateFilterPropByFunction(index, newFilter => {
        newFilter.labels = newLabels
        newFilter.orderedValue = newValues
        return newFilter
      })
    }

    const addNewValue = (e) => {
      e.preventDefault()
      if (!filter.values || filter.values.indexOf(e.target[0].value) === -1) {
        let newValues = filter.values || []
        newValues.push(e.target[0].value)

        updateFilterPropByFunction(index, newFilter => {
          newFilter.values = newValues
          if (!newFilter.active) {
            newFilter.active = e.target[0].value
          }
          return newFilter
        })

        e.target[0].value = ''
      }
    }

    return (
      <Modal>
        <Modal.Content>
          <h2>Dashboard Filter Settings</h2>
          <fieldset className='shared-filter-modal' key={filter.columnName + index}>
            <button
              type='button'
              className='btn btn-primary remove-column'
              onClick={() => {
                removeFilter(index)
              }}
            >
              Remove Filter
            </button>
            <label>
                <span className='edit-label column-heading'>Filter Type:</span>
                <select defaultValue={filter.type || 'data'} onChange={e => updateFilterProp('type', index, e.target.value)}>
                  <option value="url">URL</option>
                  <option value="data">Data</option>
                </select>
              </label>
            {filter.type === 'url' && <>
              <label>
                <span className='edit-label column-heading'>URL to Filter: </span>
                <select defaultValue={filter.datasetKey || ''} onChange={e => updateFilterProp('datasetKey', index, e.target.value)}> 
                  <option value=''>- Select Option -</option>
                  {Object.keys(config.datasets).map(datasetKey => {
                    if(config.datasets[datasetKey].dataUrl){
                      return <option key={datasetKey} value={datasetKey}>{(datasetKey + config.datasets[datasetKey].dataUrl).substring(0, 50)}</option>
                    }
                    return <React.Fragment key={datasetKey}></React.Fragment>;
                  })}
                </select>
              </label>
              <label>
                <span className='edit-label column-heading'>Query string parameter</span>{' '}
                <input
                  type='text'
                  defaultValue={filter.queryParameter}
                  onChange={e => updateFilterProp('queryParameter', index, e.target.value)}
                />
              </label>
              <span className='edit-label column-heading'>Values</span>{' '}
              <ul className='value-list'>
                {filter.values &&
                  filter.values.map((value, valueIndex) => (
                    <li>
                      {value}
                      <input
                        type='text'
                        value={filter.labels ? filter.labels[value] : undefined}
                        onChange={(e) => updateLabel(e, value)}
                      />
                      <button
                        onClick={() => removeValue(valueIndex)}
                      >
                        X
                      </button>
                    </li>
                  ))}
              </ul>
              <form
                onSubmit={addNewValue}
              >
                <input type='text' /> <button type='submit'>Add New Value</button>
              </form>
            </>}
            {filter.type !== 'url' && <>
              <label>
                <span className='edit-label column-heading'>Filter: </span>
                <select
                  value={filter.columnName}
                  onChange={e => {
                    updateFilterProp('columnName', index, e.target.value)
                  }}
                >
                  <option value=''>- Select Option -</option>
                  {columns.map(dataKey => (
                    <option value={dataKey} key={`filter-column-select-item-${dataKey}`}>
                      {dataKey}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className='edit-label column-heading'>Label: </span>
                <input
                  type='text'
                  value={filter.key}
                  onChange={e => {
                    updateFilterProp('key', index, e.target.value)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Show Dropdown</span>
                <input
                  type='checkbox'
                  defaultChecked={filter.showDropdown === true}
                  onChange={e => {
                    updateFilterProp('showDropdown', index, !filter.showDropdown)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Set By: </span>
                <select value={filter.setBy} onChange={e => updateFilterProp('setBy', index, e.target.value)}>
                  <option value=''>- Select Option -</option>
                  {Object.keys(config.visualizations).map(vizKey => (
                    <option value={vizKey} key={`set-by-select-item-${vizKey}`}>
                      {config.visualizations[vizKey].general && config.visualizations[vizKey].general.title ? config.visualizations[vizKey].general.title : config.visualizations[vizKey].title || vizKey}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className='edit-label column-heading'>Used By:</span>
                <ul>
                  {filter.usedBy &&
                    filter.usedBy.map(vizKey => (
                      <li key={`used-by-list-item-${vizKey}`}>
                        <span>{config.visualizations[vizKey].general && config.visualizations[vizKey].general.title ? config.visualizations[vizKey].general.title : config.visualizations[vizKey].title || vizKey}</span>{' '}
                        <button
                          onClick={e => {
                            e.preventDefault()
                            removeFilterUsedBy(filter, index, vizKey)
                          }}
                        >
                          X
                        </button>
                      </li>
                    ))}
                </ul>
                <select onChange={e => addFilterUsedBy(filter, index, e.target.value)}>
                  <option value=''>- Select Option -</option>
                  {Object.keys(config.visualizations)
                    .filter(vizKey => filter.setBy !== vizKey && (!filter.usedBy || filter.usedBy.indexOf(vizKey) === -1) && !config.visualizations[vizKey].usesSharedFilter)
                    .map(vizKey => (
                      <option value={vizKey} key={`used-by-select-item-${vizKey}`}>
                        {config.visualizations[vizKey].general && config.visualizations[vizKey].general.title ? config.visualizations[vizKey].general.title : config.visualizations[vizKey].title || vizKey}
                      </option>
                    ))}
                </select>
              </label>
            </>}
          </fieldset>
          <button type='button' className='btn btn-primary' style={{ display: 'inline-block', 'margin-right': '1em' }} onClick={overlay?.actions.toggleOverlay}>
            Cancel
          </button>
          <button type='button' className='btn btn-primary' style={{ display: 'inline-block' }} onClick={saveChanges}>
            Save
          </button>
        </Modal.Content>
      </Modal>
    )
  }

  return (
    <div aria-level='2' role='heading' className={`editor-heading${subEditor ? ' sub-dashboard-viz' : ''}`}>
      {subEditor ? (
        <div className='heading-1 back-to' onClick={back} style={{ cursor: 'pointer' }}>
          <span>&#8592;</span> Back to Dashboard
        </div>
      ) : (
        <div className='heading-1'>
          Dashboard Editor
          <br />
          {<input type='text' placeholder='Enter Dashboard Name Here' defaultValue={config.dashboard.title} onChange={e => changeConfigValue('dashboard', 'title', e.target.value)} />}
        </div>
      )}
      {!subEditor && (
        <div className="toggle-bar__wrapper">
          <ul className='toggle-bar'>
            <li
              className={tabSelected === 0 ? 'active' : 'inactive'}
              onClick={() => {
                setTab(0)
              }}
            >
              Dashboard Description
            </li>
            <li
              className={tabSelected === 1 ? 'active' : 'inactive'}
              onClick={() => {
                setTab(1)
              }}
            >
              Dashboard Filters
            </li>
            <li
              className={tabSelected === 2 ? 'active' : 'inactive'}
              onClick={() => {
                setTab(2)
              }}
            >
              Dashboard Filter Interactions
            </li>
            <li
              className={tabSelected === 3 ? 'active' : 'inactive'}
              onClick={() => {
                setTab(3)
              }}
            >
              Data Table Settings
            </li>
            <li
              className={tabSelected === 4 ? 'active' : 'inactive'}
              onClick={() => {
                setTab(4)
              }}
            >
              Dashboard Preview
            </li>
          </ul>
          <div className='heading-body'>
            {tabSelected === 0 && <input type='text' className='description-input' placeholder='Type a dashboard description here.' defaultValue={config.dashboard.description} onChange={e => changeConfigValue('dashboard', 'description', e.target.value)} />}
            {tabSelected === 1 && (
              <>
                {config.dashboard.sharedFilters &&
                  config.dashboard.sharedFilters.map((sharedFilter, index) => (
                    <span className='shared-filter-button' key={`shared-filter-${sharedFilter.key}`}>
                      <a
                        href='#'
                        onClick={e => {
                          e.preventDefault()
                          overlay?.actions.openOverlay(filterModal(sharedFilter, index))
                        }}
                      >
                        {sharedFilter.key}
                      </a>
                      <button onClick={() => removeFilter(index)}>X</button>
                    </span>
                  ))}
                <button onClick={addNewFilter}>Add New Filter</button>
              </>
            )}
            {tabSelected === 2 && (
              <>
                {config.dashboard.filterInteractions &&
                  config.dashboard.filterInteractions.map((filterInteraction, index) => (
                    <span className='shared-filter-button' key={`shared-filter-${index}`}>
                      <a
                        href='#'
                        onClick={e => {
                          e.preventDefault()
                          overlay?.actions.openOverlay(filterInteractionModal(filterInteraction, index))
                        }}
                      >
                        Filter Interaction {index + 1}
                      </a>
                      <button onClick={() => removeFilterInteraction(index)}>X</button>
                    </span>
                ))}
              <button onClick={addNewFilterInteraction}>Add New Filter Interaction</button>
              </>
            )}
            {tabSelected === 3 && (
              <>

                <div className="wrap">
                  <label>
                    <input type='checkbox' defaultChecked={config.table.show} onChange={e => changeConfigValue('table', 'show', e.target.checked)} />
                    Show Data Table(s)
                  </label><br />

                  <label>
                    <input type='checkbox' defaultChecked={config.table.expanded} onChange={e => changeConfigValue('table', 'expanded', e.target.checked)} />
                    Expanded by Default
                  </label><br />
                </div>

                {/* <div className="wrap">
                  <label>
                    <input type='checkbox' defaultChecked={config.table.downloadPdfButton} onChange={e => changeConfigValue('table', 'downloadPdfButton', e.target.checked)} />
                    Show PDF Button
                  </label>
                  <label>
                    <input type='checkbox' defaultChecked={config.table.downloadImageButton} onChange={e => changeConfigValue('table', 'downloadImageButton', e.target.checked)} />
                    Show Image Button
                  </label>
                </div> */}

                <div className="wrap">
                  <label>
                    <input type='checkbox' defaultChecked={config.table.limitHeight} onChange={e => changeConfigValue('table', 'limitHeight', e.target.checked)} />
                    Limit Table Height
                  </label>
                  {config.table.limitHeight && <input class='table-height-input' type='text' placeholder='Height (px)' defaultValue={config.table.height} onChange={e => changeConfigValue('table', 'height', e.target.value)} />}
                </div>

                <div className="wrap">
                  <label>
                    <input type='checkbox' defaultChecked={config.table.download} onChange={e => changeConfigValue('table', 'download', e.target.checked)} />
                    Show Download CSV Link
                  </label>
                  <label>
                    <input type='checkbox' defaultChecked={config.table.showDownloadUrl} onChange={e => changeConfigValue('table', 'showDownloadUrl', e.target.checked)} />
                    Show URL to Automatically Updated Data
                  </label>
                </div>
              </>
            )}
          </div>
        </div >
      )
      }
    </div >
  )
}

export default Header
