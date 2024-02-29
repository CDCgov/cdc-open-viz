import { useEffect, useContext } from 'react'

import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'

// types
import { type SharedFilter } from '../../types/SharedFilter'
import { type DashboardConfig as Config } from '../../types/DashboardConfig'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'

import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import Select from '@cdc/core/components/ui/Select'

import './index.scss'
import MultiConfigTabs from '../MultiConfigTabs'
import { Tab } from '../../types/Tab'
import FilterModal from './FilterModal'
import _ from 'lodash'

type HeaderProps = {
  back?: any
  subEditor?: any
  visualizationKey?: string
}

export const FilterBehavior = {
  Apply: 'Apply Button',
  OnChange: 'Filter Change'
}

const Header = (props: HeaderProps) => {
  const tabs: Tab[] = ['Dashboard Description', 'Dashboard Filters', 'Data Table Settings', 'Dashboard Preview']
  const { visualizationKey, subEditor } = props
  const { config, setParentConfig, tabSelected } = useContext(DashboardContext)
  if (!config) return null
  const dispatch = useContext(DashboardDispatchContext)
  const back = () => {
    if (!visualizationKey) return
    const newConfig = _.cloneDeep(config)
    newConfig.visualizations[visualizationKey].editing = false
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }

  const { overlay } = useGlobalContext()

  const changeConfigValue = (parentObj, key, value) => {
    let newConfig = { ...config }
    if (!newConfig[parentObj]) newConfig[parentObj] = {}
    newConfig[parentObj][key] = value
    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })
  }

  const addNewFilter = () => {
    let dashboardConfig = { ...config.dashboard }

    dashboardConfig.sharedFilters = dashboardConfig.sharedFilters || []
    const newFilter: SharedFilter = { key: 'Dashboard Filter ' + (dashboardConfig.sharedFilters.length + 1) }
    dashboardConfig.sharedFilters.push(newFilter)

    dispatch({ type: 'UPDATE_CONFIG', payload: [{ ...config, dashboard: dashboardConfig }] })
  }

  const removeFilter = index => {
    let dashboardConfig = { ...config.dashboard }
    let visualizations = { ...config.visualizations }

    dashboardConfig.sharedFilters?.splice(index, 1)

    Object.keys(visualizations).forEach(vizKey => {
      if (visualizations[vizKey].visualizationType === 'filter-dropdowns' && visualizations[vizKey].hide && visualizations[vizKey].hide.length > 0) {
        if (visualizations[vizKey].hide.indexOf(index) !== -1) {
          visualizations[vizKey].hide.splice(visualizations[vizKey].hide.indexOf(index), 1)
        }
        visualizations[vizKey].hide.forEach((hideIndex, i) => {
          if (hideIndex > index) {
            visualizations[vizKey].hide[i] = hideIndex - 1
          }
        })
      }
    })

    // Ensures URL filters refresh after filter removal
    if (dashboardConfig.datasets) {
      Object.keys(dashboardConfig.datasets).forEach(datasetKey => {
        dashboardConfig.datasets![datasetKey].runtimeDataUrl = ''
      })
    }

    const newConfig = { ...config, visualizations, dashboard: dashboardConfig }
    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })

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

  const handleCheck = e => {
    const { checked } = e.currentTarget
    if (checked) {
      dispatch({ type: 'INITIALIZE_MULTIDASHBOARDS' })
    }
  }

  const multiInitialized = !!config.multiDashboards

  return (
    <div aria-level={2} role='heading' className={`editor-heading${subEditor ? ' sub-dashboard-viz' : ''}`}>
      {subEditor ? (
        <div className='heading-1 back-to' onClick={back} style={{ cursor: 'pointer' }}>
          <span>&#8592;</span> Back to Dashboard
        </div>
      ) : (
        <div className='heading-1'>
          Dashboard Editor{' '}
          <span className='small'>
            <input type='checkbox' onChange={handleCheck} checked={multiInitialized} disabled={multiInitialized} /> make multidashboard
          </span>
          <br />
          {<input type='text' placeholder='Enter Dashboard Name Here' defaultValue={config.dashboard?.title} onChange={e => changeConfigValue('dashboard', 'title', e.target.value)} />}
        </div>
      )}
      {!subEditor && (
        <div className='toggle-bar__wrapper'>
          <MultiConfigTabs isEditor />
          <ul className='toggle-bar'>
            {tabs.map(tab => {
              return (
                <li
                  key={tab}
                  className={tabSelected === tab ? 'active' : 'inactive'}
                  onClick={() => {
                    dispatch({ type: 'SET_TAB_SELECTED', payload: tab })
                  }}
                >
                  {tab}
                </li>
              )
            })}
          </ul>
          <div className='heading-body'>
            {tabSelected === 'Dashboard Description' && <input type='text' className='description-input' placeholder='Type a dashboard description here.' defaultValue={config.dashboard?.description} onChange={e => changeConfigValue('dashboard', 'description', e.target.value)} />}
            {tabSelected === 'Dashboard Filters' && (
              <>
                {config.dashboard.sharedFilters &&
                  config.dashboard.sharedFilters.map((sharedFilter, index) => (
                    <span className='shared-filter-button' key={`shared-filter-${sharedFilter.key}`}>
                      <a
                        href='#'
                        onClick={e => {
                          e.preventDefault()
                          overlay?.actions.openOverlay(<FilterModal index={index} config={config} filterState={sharedFilter} removeFilter={removeFilter} />)
                        }}
                      >
                        {sharedFilter.key}
                      </a>
                      <button onClick={() => removeFilter(index)}>X</button>
                    </span>
                  ))}
                <button onClick={addNewFilter}>Add New Filter</button>

                <Select
                  value={config.filterBehavior}
                  fieldName='filterBehavior'
                  label='Filter Behavior'
                  initial='- Select Option -'
                  onchange={e => {
                    const newConfig = { ...config, filterBehavior: e.target.value }
                    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })
                  }}
                  options={Object.values(FilterBehavior)}
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' color='' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.</p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />
              </>
            )}
            {tabSelected === 'Data Table Settings' && (
              <>
                <div className='wrap'>
                  <label>
                    <input type='checkbox' defaultChecked={config.table.show} onChange={e => changeConfigValue('table', 'show', e.target.checked)} />
                    Show Data Table(s)
                  </label>
                  <br />

                  <label>
                    <input type='checkbox' defaultChecked={config.table.expanded} onChange={e => changeConfigValue('table', 'expanded', e.target.checked)} />
                    Expanded by Default
                  </label>
                  <br />
                </div>

                <div className='wrap'>
                  <label>
                    <input type='checkbox' defaultChecked={config.table.limitHeight} onChange={e => changeConfigValue('table', 'limitHeight', e.target.checked)} />
                    Limit Table Height
                  </label>
                  {config.table.limitHeight && <input className='table-height-input' type='text' placeholder='Height (px)' defaultValue={config.table.height} onChange={e => changeConfigValue('table', 'height', e.target.value)} />}
                </div>

                <div className='wrap'>
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
        </div>
      )}
    </div>
  )
}

export default Header
