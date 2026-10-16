import React, { useEffect, useCallback, useReducer, useMemo, useRef, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import getViewport from '@cdc/core/helpers/getViewport'

import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import ConfigContext, { EditorDispatchContext } from '@cdc/core/contexts/EditorContext'

import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'

import DataImport from './components/DataImport'
import ChooseTab from './components/ChooseTab'
import ConfigureTab from './components/ConfigureTab'
import ModernStylesWorkspace from './components/ModernStylesWorkspace'
import TabPane from './components/TabPane'
import { GlobalTabs as Tabs } from './components/Tabs'
import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
import { saveConfigToWindow as updateVizConfig } from './helpers/saveConfigToWindow'
import { legacyConfigSupport } from './helpers/legacyConfigSupport'
import useModernizationSession from './hooks/useModernizationSession'

import './scss/main.scss'
import editorReducer, { EditorState } from '@cdc/core/contexts/editor.reducer'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { WCMSProps } from '@cdc/core/types/WCMSProps'
import { devToolsStore } from '@cdc/core/helpers/withDevTools'

const CdcEditor: React.FC<WCMSProps> = ({
  config: configObj,
  configUrl,
  hostname,
  containerEl,
  sharepath,
  isDebug
}) => {
  const initialState: EditorState = useMemo(() => {
    let startingTab = 0

    if (
      (configObj?.data || configObj?.dataUrl || configObj?.originalFormattedData || configObj?.datasets) &&
      configObj?.type
    ) {
      startingTab = 2
    }
    const conf = legacyConfigSupport(configObj || { newViz: true, errors: [], currentViewport: 'lg' })
    return { config: conf, errors: [], currentViewport: 'lg', globalActive: startingTab, sharepath, isDebug, hostname }
  }, [configObj])

  useEffect(() => {
    // for testing reducer using Redux Dev Tools
    devToolsStore && devToolsStore?.init()
    document.addEventListener('click', e => {
      // Prevents mistaken clicks on label from triggering checkbox
      // Can be removed once all custom checkboxes are replaced with Checkbox component from @cdc/core/components/EditorPanel/Inputs.tsx
      if (e.target.className === 'checkbox') {
        if (!['SPAN', 'INPUT'].includes(e.target.nodeName)) {
          e.preventDefault()
        }
      }
    })
  }, [])

  const [state, dispatch] = useReducer(editorReducer, initialState)
  const modernizationSaveRef = useRef(false)
  const saveModernizationConfig = useCallback(config => {
    modernizationSaveRef.current = true
    dispatch({ type: 'EDITOR_SAVE', payload: config })
  }, [])
  const modernization = useModernizationSession({
    config: state.config,
    tempConfig: state.tempConfig,
    onSave: saveModernizationConfig
  })
  const effectiveConfig = modernization.effectiveConfig
  const modernizationActiveRef = useRef(modernization.isActive)
  useLayoutEffect(() => {
    modernizationActiveRef.current = modernization.isActive
  }, [modernization.isActive])

  const setTempConfigAndUpdate = useCallback(config => {
    if (modernizationActiveRef.current) return
    updateVizConfig(cloneConfig(config))
    dispatch({ type: 'EDITOR_TEMP_SAVE', payload: config })
  }, [])

  const resizeObserver = new ResizeObserver(entries => {
    const container = entries[0]
    const { width } = container.contentRect
    const newViewport = getViewport(width)
    if (state.currentViewport !== newViewport) dispatch({ type: 'EDITOR_SET_VIEWPORT', payload: newViewport })
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  useEffect(() => {
    const isModernizationSave = modernizationSaveRef.current
    modernizationSaveRef.current = false
    // Modernization saves must strip remote data; consider whether every committed config emission should do the same.
    const strippedConfig = stripConfig(state.config, !isModernizationSave)

    const parsedData = JSON.stringify(strippedConfig)
    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })
    window.dispatchEvent(event)
  }, [state.config])

  const configureDisabled = useMemo(() => {
    let disabled = true

    if (effectiveConfig.type !== 'dashboard') {
      if (effectiveConfig.formattedData) {
        disabled = false
      }
    } else {
      if (effectiveConfig.datasets && Object.keys(effectiveConfig.datasets).length > 0) {
        disabled = false
      }
    }
  }, [effectiveConfig.type, effectiveConfig.datasets, effectiveConfig.formattedData])

  const contextValue = useMemo(
    () => ({
      ...state,
      config: effectiveConfig,
      setTempConfig: setTempConfigAndUpdate,
      modernStylesAction: modernization.action
    }),
    [state, effectiveConfig, modernization.action]
  )

  return (
    <GlobalContextProvider>
      <ConfigContext.Provider value={contextValue}>
        <EditorDispatchContext.Provider value={dispatch}>
          <div className={`cove-visualization cdc-editor ${state.currentViewport}`} ref={outerContainerRef}>
            {modernization.workspaceProps ? (
              <ModernStylesWorkspace
                {...modernization.workspaceProps}
                containerEl={containerEl}
                isDebug={state.isDebug}
                configUrl={configUrl}
              />
            ) : (
              <Tabs className='top-level'>
                <TabPane title='1. Choose Visualization Type' className='choose-type'>
                  <ChooseTab />
                </TabPane>
                <TabPane title='2. Import Data' className='data-designer' disableRule={!state.config.type}>
                  <DataImport />
                </TabPane>

                <TabPane title='3. Configure' className='configure' disableRule={configureDisabled}>
                  <ConfigureTab containerEl={containerEl} />
                </TabPane>
              </Tabs>
            )}
          </div>
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
      <OverlayFrame />
    </GlobalContextProvider>
  )
}

export default CdcEditor
