import React, { useCallback, useEffect, useReducer, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import { Config } from './types/Config'
import getViewport from '@cdc/core/helpers/getViewport'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'
import Title from '@cdc/core/components/ui/Title'
import Layout from '@cdc/core/components/Layout'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel/EditorPanel'
import ScheduleGrid from './components/ScheduleGrid'
import defaults from './data/initial-state'
import { publish } from '@cdc/core/helpers/events'
import scheduleReducer from './store/schedule.reducer'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

import './scss/main.scss'

type CdcScheduleTableProps = {
  configUrl?: string
  config?: Config
  isDashboard?: boolean
  isEditor?: boolean
  setConfig?: (config: Config) => void
}

const ScheduleTableContent = ({ config, isEditor }) => {
  const { innerContainerClasses, contentClasses } = useDataVizClasses(config)

  return (
    <div className='cove-component__content' style={{ gridArea: 'content' }}>
      <div className='schedule-table-title-wrapper'>
        <Title
          showTitle={config.showTitle}
          title={config.title}
          config={config}
          classes={['schedule-table-title', 'mb-0']}
          theme={config.theme}
        />
      </div>
      <div className={contentClasses.join(' ')}>
        <ScheduleGrid config={config} viewport='lg' />
      </div>
    </div>
  )
}

const CdcScheduleTable = ({
  configUrl,
  config: configObj,
  isDashboard = false,
  isEditor = false,
  setConfig: setParentConfig
}: CdcScheduleTableProps) => {
  // Default States
  const [state, dispatch] = useReducer(scheduleReducer, {
    config: configObj ?? defaults,
    loading: true,
    viewport: 'lg',
    coveLoadedHasRan: false,
    container: null
  })

  const { loading, config, viewport: currentViewport, coveLoadedHasRan, container } = state


  // Update config function
  const updateConfig = (newConfig: Config) => {
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })
    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()
    newConfig.runtime.editorErrorMessage = ''
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }

  // Load config function
  const loadConfig = useCallback(async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    let responseData = response.data ?? []

    if (response.dataUrl) {
      responseData = await fetchRemoteData(response.dataUrl)
    }

    response.data = responseData

    const processedConfig = { ...coveUpdateWorker(response) }
    updateConfig({ ...defaults, ...processedConfig })
    dispatch({ type: 'SET_LOADING', payload: false })
  }, [configUrl, configObj])

  // Resize observer for viewport detection
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width)
      dispatch({ type: 'SET_VIEWPORT', payload: newViewport })
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    dispatch({ type: 'SET_CONTAINER', payload: node })
  }, [])

  // Load initial config
  useEffect(() => {
    loadConfig().catch(err => console.log(err))
  }, [])

  // Publish cove_loaded event
  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
    }
  }, [config, container])

  // Update config when prop changes
  useEffect(() => {
    if (configObj && !configObj.dataUrl) {
      updateConfig({ ...defaults, ...configObj })
    }
  }, [configObj?.data])

  let content = <Loading />

  if (loading === false && config) {
    let selectedPalette = undefined
    const editorPanel = isEditor && (
      <EditorPanel key="sidebar">
        {({ selectedPalette: paletteFromPanel }) => {
          selectedPalette = paletteFromPanel
          return null
        }}
      </EditorPanel>
    )
    content = [
      editorPanel,
      <Layout.Responsive key="content" isEditor={isEditor}>
        <div className="cove-component__content" style={{ gridArea: 'content' }}>
          <div className='schedule-table-title-wrapper'>
            <Title
              showTitle={config.showTitle}
              title={config.title}
              config={config}
              classes={['schedule-table-title', 'mb-0']}
              theme={config.theme}
            />
          </div>
          <div className={useDataVizClasses(config).contentClasses.join(' ')}>
            <ScheduleGrid config={config} viewport='lg' selectedPalette={selectedPalette} />
          </div>
        </div>
      </Layout.Responsive>
    ]
  }

  // Default showEditorPanel to true in editor mode if not set, or if ?editor=true
  const showEditorPanel = (isEditor || editorMode) ? (config?.showEditorPanel !== false) : config?.showEditorPanel

  // Apply editor-panel--visible class if panel is open
  const wrapperClass = showEditorPanel ? 'editor-panel--visible' : 'editor-panel--hidden'
  return (
    <ErrorBoundary component='ScheduleTable'>
      <ConfigContext.Provider
        value={{
          config,
          updateConfig,
          loading,
          data: config?.data || [],
          setParentConfig,
          isDashboard,
          outerContainerRef
        }}
      >
        <Layout.VisualizationWrapper
          config={config}
          isEditor={isEditor}
          ref={outerContainerRef}
          showEditorPanel={showEditorPanel}
          className={wrapperClass}
        >
          {content}
        </Layout.VisualizationWrapper>
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcScheduleTable
