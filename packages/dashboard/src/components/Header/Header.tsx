import { useEffect, useContext } from 'react'

import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'

import './index.scss'
import MultiConfigTabs from '../MultiConfigTabs'
import { Tab } from '../../types/Tab'
import _ from 'lodash'

type HeaderProps = {
  back?: any
  subEditor?: boolean
  visualizationKey?: string
}

const Header = (props: HeaderProps) => {
  const tabs: Tab[] = ['Dashboard Description', 'Data Table Settings', 'Dashboard Preview']
  const { visualizationKey, subEditor } = props
  const { config, setParentConfig, tabSelected, data } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const back = () => {
    if (!visualizationKey) return
    const newConfig = _.cloneDeep(config)
    newConfig.visualizations[visualizationKey].editing = false
    dispatch({ type: 'SET_CONFIG', payload: newConfig })

    // the Widget component will do a data fetch if no data is available for the visualization
    // this is intended to help visualization developers.
    type SampleData = Record<string, { sample: boolean }> & Object[]
    if (Object.values(data).some((d: SampleData) => d?.sample)) {
      const sampleDataRemoved = Object.keys(data).reduce((acc, key) => {
        if ((data[key] as SampleData)?.sample) {
          acc[key] = []
        } else {
          acc[key] = data[key]
        }
        return acc
      }, {})

      dispatch({ type: 'SET_DATA', payload: sampleDataRemoved })
    }
  }

  const changeConfigValue = (parentObj, key, value) => {
    let newConfig = { ...config }
    if (!newConfig[parentObj]) newConfig[parentObj] = {}
    newConfig[parentObj][key] = value
    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })
  }

  const convertStateToConfig = () => {
    const strippedState = _.cloneDeep(config)
    delete strippedState.newViz
    delete strippedState.runtime

    return strippedState
  }

  useEffect(() => {
    const parsedData = convertStateToConfig()

    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: JSON.stringify(parsedData) })

    window.dispatchEvent(event)

    // Pass up to Editor if needed
    if (setParentConfig) {
      setParentConfig(parsedData)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  const handleCheck = e => {
    const { checked } = e.currentTarget
    if (checked) {
      dispatch({ type: 'INITIALIZE_MULTIDASHBOARDS' })
    }
  }

  if (!config) return null

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
            <input type='checkbox' onChange={handleCheck} checked={multiInitialized} disabled={multiInitialized} /> make
            multidashboard
          </span>
          <br />
          <input
            type='text'
            placeholder='Enter Dashboard Name Here'
            defaultValue={config.dashboard?.title}
            onChange={e => changeConfigValue('dashboard', 'title', e.target.value)}
          />
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
            {tabSelected === 'Dashboard Description' && (
              <input
                type='text'
                className='description-input'
                placeholder='Type a dashboard description here.'
                defaultValue={config.dashboard?.description}
                onChange={e => changeConfigValue('dashboard', 'description', e.target.value)}
              />
            )}
            {tabSelected === 'Data Table Settings' && (
              <>
                <div className='wrap'>
                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={config.table.show}
                      onChange={e => changeConfigValue('table', 'show', e.target.checked)}
                    />
                    Show Data Table(s)
                  </label>
                  <br />

                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={config.table.expanded}
                      onChange={e => changeConfigValue('table', 'expanded', e.target.checked)}
                    />
                    Expanded by Default
                  </label>
                  <br />
                </div>

                <div className='wrap'>
                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={config.table.limitHeight}
                      onChange={e => changeConfigValue('table', 'limitHeight', e.target.checked)}
                    />
                    Limit Table Height
                  </label>
                  {config.table.limitHeight && (
                    <input
                      className='table-height-input'
                      type='text'
                      placeholder='Height (px)'
                      defaultValue={config.table.height}
                      onChange={e => changeConfigValue('table', 'height', e.target.value)}
                    />
                  )}
                </div>

                <div className='wrap'>
                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={config.table.download}
                      onChange={e => changeConfigValue('table', 'download', e.target.checked)}
                    />
                    Show Download CSV Link
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={config.table.showDownloadUrl}
                      onChange={e => changeConfigValue('table', 'showDownloadUrl', e.target.checked)}
                    />
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
