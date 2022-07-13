import React, { useState, useEffect } from 'react'

import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import Modal from '@cdc/core/components/ui/Modal'

const Header = ({setPreview, tabSelected, setTabSelected, back, config, setConfig, subEditor = null}) => {

  const { overlay } = useGlobalContext()

  const [ columns, setColumns ] = useState([])

  const changeConfigValue = (parentObj, key, value) => {
    let newConfig = {...config};
    if(!newConfig[parentObj]) newConfig[parentObj] = {};
    newConfig[parentObj][key] = value;
    setConfig(config)
  }

  const setTab = (index) => {
    setTabSelected(index)
    if(index === 3){
      setPreview(true)
    } else {
      setPreview(false)
    }
  }

  const updateFilterProp = (name, index, value) => {
    let dashboardConfig = {...config.dashboard};

    dashboardConfig.sharedFilters[index][name] = value;

    setConfig({...config, dashboard: dashboardConfig});

    overlay?.actions.openOverlay(filterModal(dashboardConfig.sharedFilters[index], index))
  }

  const addNewFilter = () => {
    let dashboardConfig = {...config.dashboard};

    dashboardConfig.sharedFilters = dashboardConfig.sharedFilters || [];

    dashboardConfig.sharedFilters.push({key: 'Dashboard Filter ' + (dashboardConfig.sharedFilters.length + 1), values: []});

    setConfig({...config, dashboard: dashboardConfig});

  }

  const removeFilter = (index) => {
    let dashboardConfig = {...config.dashboard};

    dashboardConfig.sharedFilters.splice(index, 1);

    setConfig({...config, dashboard: dashboardConfig});

    overlay?.actions.toggleOverlay();
  }

  const addFilterUsedBy = (filter, index, value) => {
    if(!filter.usedBy) filter.usedBy = [];
    filter.usedBy.push(value);
    updateFilterProp('usedBy', index, filter.usedBy);
  }

  const removeFilterUsedBy = (filter, index, value) => {
    let usedByIndex = filter.usedBy.indexOf(value);
    if(usedByIndex !== -1){
      filter.usedBy.splice(usedByIndex, 1);
      updateFilterProp('usedBy', index, filter.usedBy);
    }

  }

  useEffect(() => {
    const runSetColumns = async () => {
      let columns = {};
      let dataKeys = Object.keys(config.datasets);

      for(let i = 0; i < dataKeys.length; i++){
        if(!config.datasets[dataKeys[i]].data && config.datasets[dataKeys[i]].dataUrl){
          config.datasets[dataKeys[i]].data = await fetchRemoteData(config.datasets[dataKeys[i]].dataUrl);
          if(config.datasets[dataKeys[i]].dataDescription) {
            try {
              config.datasets[dataKeys[i]].data = transform.autoStandardize(config.datasets[dataKeys[i]].data);
              config.datasets[dataKeys[i]].data = transform.developerStandardize(config.datasets[dataKeys[i]].data, config.datasets[dataKey].dataDescription);
            } catch(e) {
              //Data not able to be standardized, leave as is
            }
          }
        }

        if(config.datasets[dataKeys[i]].data) {
          config.datasets[dataKeys[i]].data.map(row => {
            Object.keys(row).forEach(columnName => columns[columnName] = true)
          })
        }
      }

      setColumns(Object.keys(columns))
    }

    runSetColumns()
  }, [config.datasets]);

  const filterModal = (filter, index) => (
    <Modal>
      <Modal.Content>
        <fieldset className="shared-filter-modal" key={filter.columnName + index}>
          <button type="button" className="remove-column" onClick={() => {removeFilter(index)}}>Remove Filter</button>
          <label>
            <span className="edit-label column-heading">Filter: </span>
            <select value={filter.columnName} onChange={(e) => {updateFilterProp('columnName', index, e.target.value)}}>
              <option value="">- Select Option -</option>
              {columns.map((dataKey) => (
                <option value={dataKey} key={`filter-column-select-item-${dataKey}`}>{dataKey}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="edit-label column-heading">Label: </span>
            <input type="text" value={filter.key} onChange={(e) => {updateFilterProp('key', index, e.target.value)}}/>
          </label>
          <label>
            <span className="edit-label column-heading">Show Dropdown</span>
            <input type="checkbox" defaultChecked={filter.showDropdown === true} onChange={(e) => {updateFilterProp('showDropdown', index, !filter.showDropdown)}}/>
          </label>
          <label>
            <span className="edit-label column-heading">Set By: </span>
            <select value={filter.setBy} onChange={e => updateFilterProp('setBy', index, e.target.value)}>
              <option value="">- Select Option -</option>
              {Object.keys(config.visualizations).map((vizKey) => (
                <option value={vizKey} key={`set-by-select-item-${vizKey}`}>{vizKey}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="edit-label column-heading">Used By:</span>
            <ul>
              {filter.usedBy && filter.usedBy.map(vizKey => (
                <li key={`used-by-list-item-${vizKey}`}><span>{vizKey}</span> <button onClick={() => removeFilterUsedBy(filter, index, vizKey)}>X</button></li>
              ))}
            </ul>
            <select onChange={e => addFilterUsedBy(filter, index, e.target.value)}>
              <option value="">- Select Option -</option>
              {Object.keys(config.visualizations).filter(vizKey => !config.visualizations[vizKey].usesSharedFilter).map((vizKey) => (
                <option value={vizKey} key={`used-by-select-item-${vizKey}`}>{vizKey}</option>
              ))}
            </select>
          </label>
        </fieldset>
      </Modal.Content>
    </Modal>
  )

  return (
    <div aria-level="2" role="heading" className={`editor-heading${subEditor ? ' sub-dashboard-viz' : ''}`}>
      {subEditor ? <div className="heading-1 back-to" onClick={back} style={{cursor: 'pointer'}}><span>&#8592;</span> Back to Dashboard</div> : <div className="heading-1">Dashboard Editor<br/>{<input type="text" placeholder="Enter Dashboard Name Here" defaultValue={config.dashboard.title} onChange={e => changeConfigValue('dashboard', 'title', e.target.value)}/>}</div>}
      {!subEditor && <div>
        <ul className="toggle-bar">
          <li className={tabSelected === 0 ? 'active' : 'inactive'} onClick={() => {setTab(0)}}>Dashboard Description</li>
          <li className={tabSelected === 1 ? 'active' : 'inactive'} onClick={() => {setTab(1)}}>Dashboard Filters</li>
          <li className={tabSelected === 2 ? 'active' : 'inactive'} onClick={() => {setTab(2)}}>Data Table Settings</li>
          <li className={tabSelected === 3 ? 'active' : 'inactive'} onClick={() => {setTab(3)}}>Dashboard Preview</li>
        </ul>
        <div className="heading-body">
          {tabSelected === 0 && <input type="text" className="description-input" placeholder="Type a dashboard description here." defaultValue={config.dashboard.description} onChange={e => changeConfigValue('dashboard', 'description', e.target.value)} />}
          {tabSelected === 1 && (
            <>
              {config.dashboard.sharedFilters && config.dashboard.sharedFilters.map((sharedFilter, index) => (
                <span className="shared-filter-button" key={`shared-filter-${sharedFilter.key}`}>
                  <a href="#" onClick={(e) => {e.preventDefault(); overlay?.actions.openOverlay(filterModal(sharedFilter, index))}}>{sharedFilter.key}</a>
                  <button onClick={() => removeFilter(index)}>X</button>
                </span>
              ))}
              <button onClick={addNewFilter}>Add New Filter</button></>
          )}
          {tabSelected === 2 && (
            <>
              <label>Show Table</label><input type="checkbox" defaultChecked={config.table.show} onChange={e => changeConfigValue('table', 'show', e.target.checked)}  />
              <label>Expanded by Default</label><input type="checkbox" defaultChecked={config.table.expanded} onChange={e => changeConfigValue('table', 'expanded', e.target.checked)} />
              <label>Display Download Button</label><input type="checkbox" defaultChecked={config.table.download} onChange={e => changeConfigValue('table', 'download', e.target.checked)} />
            </>
          )}
        </div>
      </div>}
    </div>
  )
}

export default Header
