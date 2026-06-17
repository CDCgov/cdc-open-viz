import { useContext, useRef, useEffect } from 'react'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { DashboardContext, DashboardDispatchContext } from '../../DashboardContext'

import './index.scss'
import MultiConfigTabs from '../MultiConfigTabs'
import { Tab } from '../../types/Tab'

type HeaderProps = {
  back?: any
  displayMode?: 'full' | 'tabs' | 'body'
  subEditor?: boolean
  visualizationKey?: string
}

type DownloadImageMode = 'off' | 'button' | 'link'

const Header = (props: HeaderProps) => {
  const tabs: Tab[] = ['Dashboard Settings', 'Dashboard Preview']
  const { displayMode = 'full', visualizationKey, subEditor } = props
  const { config, setParentConfig, tabSelected, data } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  const back = () => {
    if (!visualizationKey) return

    const newConfig = cloneConfig(config)

    // Ensure visualizations object exists
    if (!newConfig.visualizations || !newConfig.visualizations[visualizationKey]) {
      console.error(`Visualization ${visualizationKey} not found in config`)
      return
    }

    // Explicitly set editing to false
    newConfig.visualizations[visualizationKey] = {
      ...newConfig.visualizations[visualizationKey],
      editing: false,
      showEditorPanel: false
    }

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

      dispatch({ type: 'SET_DATA', payload: { data: sampleDataRemoved } })
    }
  }

  const changeConfigValue = (parentObj, key, value) => {
    const newConfig = {
      ...config,
      [parentObj]: {
        ...(config[parentObj] || {}),
        [key]: value
      }
    }
    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })
  }

  const changeDashboardDownloadValue = (key, value) => {
    const newConfig = {
      ...config,
      dashboard: {
        ...(config.dashboard || {}),
        downloads: {
          ...(config.dashboard?.downloads || {}),
          [key]: value
        }
      }
    }
    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })
  }

  const getDownloadImageMode = (): DownloadImageMode => {
    if (!config.dashboard?.downloads?.downloadImageButton) return 'off'
    return config.dashboard.downloads.downloadImageButtonStyle === 'link' ? 'link' : 'button'
  }

  const changeDownloadImageMode = (mode: DownloadImageMode) => {
    const newConfig = {
      ...config,
      dashboard: {
        ...(config.dashboard || {}),
        downloads: {
          ...(config.dashboard?.downloads || {}),
          downloadImageButton: mode !== 'off'
        }
      }
    }
    if (mode !== 'off') newConfig.dashboard.downloads.downloadImageButtonStyle = mode
    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })
  }

  const convertStateToConfig = () => {
    const strippedState = cloneConfig(config)
    delete strippedState.newViz
    delete strippedState.runtime

    return strippedState
  }

  const configStringRef = useRef<string>()

  // Only update parent when config content actually changes (not just reference)
  useEffect(() => {
    if (displayMode === 'body') return

    const configString = JSON.stringify(convertStateToConfig())
    if (configStringRef.current !== configString) {
      configStringRef.current = configString

      // Emit the data in a regular JS event so it can be consumed by anything.
      const event = new CustomEvent('updateVizConfig', { detail: configString })
      window.dispatchEvent(event)

      // Pass up to Editor if needed
      if (setParentConfig) {
        setParentConfig(JSON.parse(configString))
      }
    }
  }, [config, displayMode, setParentConfig])

  const handleCheck = e => {
    const { checked } = e.currentTarget
    if (checked) {
      dispatch({ type: 'INITIALIZE_MULTIDASHBOARDS' })
    }
  }

  if (!config) return null

  const multiInitialized = !!config.multiDashboards
  const dashboardTitle = config.dashboard?.title ?? ''
  const hasDashboardTitle = String(dashboardTitle).trim().length > 0
  const downloadImageMode = getDownloadImageMode()
  const hasDownloadImageLabel = downloadImageMode !== 'off'
  const showTabs = !subEditor && displayMode !== 'body'
  const showBody = !subEditor && displayMode !== 'tabs'
  const headerClassNames = [
    'editor-heading',
    subEditor ? 'sub-dashboard-viz' : '',
    displayMode === 'tabs' ? 'editor-heading--tabs-only' : '',
    displayMode === 'body' ? 'editor-heading--body-only' : ''
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div aria-level={2} role='heading' className={headerClassNames}>
      {subEditor && (
        <div className='heading-1 back-to' onClick={back} style={{ cursor: 'pointer' }}>
          <span>&#8592;</span> Back to dashboard settings
        </div>
      )}
      {(showTabs || showBody) && (
        <div className='toggle-bar__wrapper'>
          {showTabs && (
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
          )}
          {showBody && (
            <div className='heading-body'>
              {tabSelected === 'Dashboard Settings' && (
                <div className='dashboard-settings'>
                  {multiInitialized && (
                    <div className='dashboard-settings__tabs'>
                      <MultiConfigTabs isEditor />
                    </div>
                  )}
                  <div
                    className={`dashboard-settings__controls${
                      multiInitialized ? ' dashboard-settings__controls--with-tabs' : ''
                    }`}
                  >
                    {!multiInitialized && (
                      <label className='multi-dashboard-toggle checkbox column-heading'>
                        <span className='multi-dashboard-toggle__control'>
                          <input
                            type='checkbox'
                            onChange={handleCheck}
                            checked={multiInitialized}
                            disabled={multiInitialized}
                          />
                        </span>
                        <span className='edit-label column-heading'>Turn into multidashboard</span>
                      </label>
                    )}
                    <div
                      className={`dashboard-settings__control-group dashboard-settings__control-group--title${
                        hasDashboardTitle ? ' has-secondary-control' : ''
                      }`}
                    >
                      <label className='dashboard-settings__field dashboard-settings__field--title'>
                        <span className='edit-label column-heading'>Dashboard title</span>
                        <input
                          type='text'
                          placeholder='Enter dashboard title'
                          value={dashboardTitle}
                          onChange={e => changeConfigValue('dashboard', 'title', e.target.value)}
                        />
                      </label>
                      {hasDashboardTitle && (
                        <label className='dashboard-settings__field dashboard-settings__field--title-style'>
                          <span className='edit-label column-heading'>Title style</span>
                          <select
                            className='cove-form-select'
                            value={config.dashboard?.titleStyle ?? 'small'}
                            onChange={e => changeConfigValue('dashboard', 'titleStyle', e.target.value)}
                          >
                            <option value='small'>Small</option>
                            <option value='large'>Large</option>
                            <option value='legacy'>Legacy</option>
                          </select>
                        </label>
                      )}
                    </div>
                    <div
                      className={`dashboard-settings__control-group dashboard-settings__control-group--download${
                        hasDownloadImageLabel ? ' has-secondary-control' : ''
                      }`}
                    >
                      <label className='dashboard-settings__field dashboard-settings__field--image-mode'>
                        <span className='edit-label column-heading'>Image download control</span>
                        <select
                          aria-label='Download image display'
                          className='cove-form-select download-image-mode-select'
                          value={downloadImageMode}
                          onChange={e => changeDownloadImageMode(e.target.value as DownloadImageMode)}
                        >
                          <option value='off'>Download Image Off</option>
                          <option value='button'>Download Image Button</option>
                          <option value='link'>Download Image Link</option>
                        </select>
                      </label>
                      {hasDownloadImageLabel && (
                        <label className='dashboard-settings__field dashboard-settings__field--image-label'>
                          <span className='edit-label column-heading'>Custom image label</span>
                          <input
                            className='download-image-label-input'
                            type='text'
                            placeholder='Enter customized label'
                            value={config.dashboard?.downloads?.downloadImageLabel ?? ''}
                            onChange={e => changeDashboardDownloadValue('downloadImageLabel', e.target.value)}
                          />
                        </label>
                      )}
                    </div>
                    <label className='dashboard-settings__field dashboard-settings__field--wide'>
                      <span className='edit-label column-heading'>Dashboard description</span>
                      <input
                        type='text'
                        className='description-input'
                        placeholder='Enter dashboard description'
                        value={config.dashboard?.description ?? ''}
                        onChange={e => changeConfigValue('dashboard', 'description', e.target.value)}
                      />
                    </label>
                    {/*
                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={config.dashboard?.downloads?.downloadPdfButton}
                      onChange={e => changeDashboardDownloadValue('downloadPdfButton', e.target.checked)}
                    />
                    Show PDF Download
                  </label>
                  */}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header
