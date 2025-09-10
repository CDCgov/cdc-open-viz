import React, { useState, useEffect, useCallback, useReducer, useMemo } from 'react'

// IE11
// import 'core-js/stable' // temp remove, appears to be used with html2pdf.js which we're temp removing
import ResizeObserver from 'resize-observer-polyfill'

import getViewport from '@cdc/core/helpers/getViewport'

import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import ConfigContext, { EditorDispatchContext } from '@cdc/core/contexts/EditorContext'

import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'

import DataImport from './components/DataImport'
import ChooseTab from './components/ChooseTab'
import ConfigureTab from './components/ConfigureTab'
import TabPane from './components/TabPane'
import { GlobalTabs as Tabs } from './components/Tabs'
import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
import { saveConfigToWindow as updateVizConfig } from './helpers/saveConfigToWindow'
import { legacyConfigSupport } from './helpers/legacyConfigSupport'

import './scss/main.scss'
import editorReducer, { EditorState } from '@cdc/core/contexts/editor.reducer'
import _ from 'lodash'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { WCMSProps } from '@cdc/core/types/WCMSProps'
import { devToolsStore } from '@cdc/core/helpers/withDevTools'

const CdcEditor: React.FC<WCMSProps> = ({ config: configObj, hostname, containerEl, sharepath, isDebug }) => {
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

  const setTempConfigAndUpdate = config => {
    updateVizConfig(cloneConfig(config))
    dispatch({ type: 'EDITOR_TEMP_SAVE', payload: config })
  }

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
    let strippedConfig = stripConfig(state.config)

    const parsedData = JSON.stringify(strippedConfig)
    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })
    window.dispatchEvent(event)
  }, [state.config])

  const configureDisabled = useMemo(() => {
    let disabled = true

    if (state.config.type !== 'dashboard') {
      if (state.config.formattedData) {
        disabled = false
      }
    } else {
      if (state.config.datasets && Object.keys(state.config.datasets).length > 0) {
        disabled = false
      }
    }
  }, [state.config.type, state.config.datasets])

  return (
    <GlobalContextProvider>
      <ConfigContext.Provider value={{ ...state, setTempConfig: setTempConfigAndUpdate }}>
        <EditorDispatchContext.Provider value={dispatch}>
          <div className={`cdc-open-viz-module cdc-editor ${state.currentViewport}`} ref={outerContainerRef}>
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
          </div>
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
      <OverlayFrame />
    </GlobalContextProvider>
  )
}

export default CdcEditor
