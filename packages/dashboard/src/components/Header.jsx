import React, { useState, useEffect } from 'react'

import useGlobalStore from '@cdc/core/stores/global/globalSlice'
import useConfigStore from '@cdc/core/stores/config/configSlice'


import Modal from '@cdc/core/components/ui/Modal'
import InputText from '@cdc/core/components/input/InputText'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import dataTransform from '@cdc/core/helpers/data/dataTransform'
import InputCheckbox from '@cdc/core/components/input/InputCheckbox'
import Button from '@cdc/core/components/element/Button'


const Header = ({ setPreview, tabSelected, setTabSelected, back, subEditor = null }) => {
  // Store Selectors
  const { openOverlay, toggleOverlay } = useGlobalStore(state =>({
    openOverlay: state.openOverlay,
    toggleOverlay: state.toggleOverlay
  }))

  const { config, updateConfig, updateParentConfig } = useConfigStore(state =>({
    config: state.config,
    updateConfig: state.updateConfig,
    updateParentConfig: state.updateParentConfig
  }))

  const [ columns, setColumns ] = useState([])

  const transform = new dataTransform()

  /*const changeConfigValue = (parentObj, key, value) => {
    let newConfig = { ...config }
    if (!newConfig[parentObj]) newConfig[parentObj] = {}
    newConfig[parentObj][key] = value

    updateConfig(newConfig)
  }*/

  const setTab = index => {
    setTabSelected(index)
    if (index === 3) {
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

    updateConfig({ ...config, dashboard: dashboardConfig })

    toggleOverlay()
  }

  const convertStateToConfig = (type = 'JSON') => {
    let strippedState = JSON.parse(JSON.stringify(config))
    delete strippedState.newViz
    delete strippedState.runtime

    if (type === 'JSON') return JSON.stringify(strippedState)

    return strippedState
  }

  useEffect(() => {
    const parsedData = convertStateToConfig()

    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })
    window.dispatchEvent(event)

    // Pass from Dashboard up to Editor if needed
    if (updateParentConfig)
      updateParentConfig(convertStateToConfig('object'))

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ config ])

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
              config.datasets[dataKeys[i]].data = transform.developerStandardize(config.datasets[dataKeys[i]].data, config.datasets[dataKey].dataDescription)
            } catch (e) {
              //Data not able to be standardized, leave as is
            }
          }
        }

        if (config.datasets[dataKeys[i]].data) {
          config.datasets[dataKeys[i]].data.map(row => {
            Object.keys(row).forEach(columnName => (columns[columnName] = true))
          })
        }
      }

      setColumns(Object.keys(columns))
    }

    if (config.datasets) runSetColumns()
    return () => {
    }
  }, [ config.datasets ])

  const filterModal = (filter, index) => {
    const saveChanges = () => {
      let tempConfig = { ...config.dashboard }
      tempConfig.sharedFilters[index] = filter

      updateConfig({ dashboard: tempConfig })

      toggleOverlay()
    }

    const updateFilterProp = (name, index, value) => {
      let newFilter = { ...filter }

      newFilter[name] = value

      openOverlay(filterModal(newFilter, index))
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

    return (
      <Modal>
        <Modal.Content>
          <h2>Dashboard Filter Settings</h2>
          <fieldset className="shared-filter-modal" key={filter.columnName + index}>
            <button
              type="button"
              className="btn btn-primary remove-column"
              onClick={() => {
                removeFilter(index)
              }}
            >
              Remove Filter
            </button>
            <label>
              <span className="edit-label column-heading">Filter: </span>
              <select
                value={filter.columnName}
                onChange={e => {
                  updateFilterProp('columnName', index, e.target.value)
                }}
              >
                <option value="">- Select Option -</option>
                {columns.map(dataKey => (
                  <option value={dataKey} key={`filter-column-select-item-${dataKey}`}>
                    {dataKey}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="edit-label column-heading">Label: </span>
              <input
                type="text"
                value={filter.key}
                onChange={e => {
                  updateFilterProp('key', index, e.target.value)
                }}
              />
            </label>
            <label>
              <span className="edit-label column-heading">Show Dropdown</span>
              <input
                type="checkbox"
                defaultChecked={filter.showDropdown === true}
                onChange={e => {
                  updateFilterProp('showDropdown', index, !filter.showDropdown)
                }}
              />
            </label>
            <label>
              <span className="edit-label column-heading">Set By: </span>
              <select value={filter.setBy} onChange={e => updateFilterProp('setBy', index, e.target.value)}>
                <option value="">- Select Option -</option>
                {Object.keys(config.visualizations).map(vizKey => (
                  <option value={vizKey} key={`set-by-select-item-${vizKey}`}>
                    {config.visualizations[vizKey].general && config.visualizations[vizKey].general.title ? config.visualizations[vizKey].general.title : config.visualizations[vizKey].title || vizKey}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="edit-label column-heading">Used By:</span>
              <ul>
                {filter.usedBy &&
                  filter.usedBy.map(vizKey => (
                    <li key={`used-by-list-item-${vizKey}`}>
                      <span>
                        {config.visualizations[vizKey].general && config.visualizations[vizKey].general.title
                          ? config.visualizations[vizKey].general.title
                          : config.visualizations[vizKey].title || vizKey
                        }
                      </span>
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
                <option value="">- Select Option -</option>
                {Object.keys(config.visualizations)
                  .filter(vizKey => filter.setBy !== vizKey && (!filter.usedBy || filter.usedBy.indexOf(vizKey) === -1) && !config.visualizations[vizKey].usesSharedFilter)
                  .map(vizKey => (
                    <option value={vizKey} key={`used-by-select-item-${vizKey}`}>
                      {config.visualizations[vizKey].general && config.visualizations[vizKey].general.title ? config.visualizations[vizKey].general.title : config.visualizations[vizKey].title || vizKey}
                    </option>
                  ))}
              </select>
            </label>
          </fieldset>
          <Button style={{ marginRight: '1em' }} onClick={toggleOverlay}>
            Cancel
          </Button>
          <Button onClick={saveChanges}>
            Save
          </Button>
        </Modal.Content>
      </Modal>
    )
  }

  return (
    <header className="cove-dashboard__header" role="heading" aria-level="2">
      <div className="cove-dashboard__header-wrapper">
        {subEditor ? (
          <button className="cove-dashboard__header-back" onClick={back} style={{ cursor: 'pointer' }}>
            <span>&#8592;</span> Back to Dashboard
          </button>
        ) : (
          <>
            <p className="mb-1">Dashboard Editor</p>
            <InputText className="mb-0" type="text" placeholder="Enter Dashboard Name Here" configField={[ 'dashboard', 'title' ]}/>
          </>
        )}
      </div>
      {!subEditor && (
        <div className="cove-dashboard__header-nav">
          <ul className="cove-dashboard__header-nav__list">
            <li className="cove-dashboard__header-nav__list--item" data-active={tabSelected === 0} onClick={() => {
              setTab(0)
            }}>
              Dashboard Description
            </li>
            <li className="cove-dashboard__header-nav__list--item" data-active={tabSelected === 1} onClick={() => setTab(1)}>
              Dashboard Filters
            </li>
            <li className="cove-dashboard__header-nav__list--item" data-active={tabSelected === 2} onClick={() => setTab(2)}>
              Data Table Settings
            </li>
            <li className="cove-dashboard__header-nav__list--item" data-active={tabSelected === 3} onClick={() => setTab(3)}>
              Dashboard Preview
            </li>
          </ul>
          <div className="cove-dashboard__header-nav__content">
            {tabSelected === 0 &&
              <InputText className="description-input mb-0" type="text" placeholder="Type a dashboard description here." configField={[ 'dashboard', 'description' ]}/>
            }
            {tabSelected === 1 && (
              <>
                {config.dashboard?.sharedFilters &&
                  config.dashboard?.sharedFilters.map((sharedFilter, index) => (
                    <span className="shared-filter-button" key={`shared-filter-${sharedFilter.key}`}>
                      <a
                        href="#"
                        onClick={e => {
                          e.preventDefault()
                          openOverlay(filterModal(sharedFilter, index))
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

                <div className="cove-dashboard__header-nav__content-options">
                  <InputCheckbox className="cove-dashboard__header-nav__content-options--item" label="Show Table" configField={[ 'table', 'show' ]}/>
                  <InputCheckbox className="cove-dashboard__header-nav__content-options--item" label="Expanded by Default" configField={[ 'table', 'expanded' ]}/>
                  <div className="cove-dashboard__header-nav__content-options--item">
                    <InputCheckbox label="Limit Table Height" configField={[ 'table', 'limitHeight' ]}/>
                    {config.table?.limitHeight &&
                      <InputText className="table-height-input" type="text" placeholder="Height (px)" configField={[ 'table', 'height' ]}/>
                    }
                  </div>
                  <InputCheckbox className="cove-dashboard__header-nav__content-options--item" label="Show CSV Button" configField={[ 'table', 'download' ]}/>
                  <InputCheckbox className="cove-dashboard__header-nav__content-options--item" label="Show Link to Dataset" configField={[ 'table', 'showDownloadUrl' ]}/>
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
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
