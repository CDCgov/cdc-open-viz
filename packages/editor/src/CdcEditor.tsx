import React, { useState, useEffect, useCallback, useReducer, useMemo } from 'react'
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
import ModernStylesPreviewBar from './components/ModernStylesPreviewBar'
import { applyModernizationRecipe, getModernizationRecipe } from './helpers/modernizationRecipes'
import { type ModernizationRecipe } from './helpers/modernizationRecipes'

import './scss/main.scss'
import editorReducer, { EditorState } from '@cdc/core/contexts/editor.reducer'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { WCMSProps } from '@cdc/core/types/WCMSProps'
import { devToolsStore } from '@cdc/core/helpers/withDevTools'

const getModernStylesActionSubject = (type?: string) => {
  if (type === 'chart' || type === 'map' || type === 'dashboard') return type
  return 'visualization'
}

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
  const [modernStylesPreview, setModernStylesPreview] = useState<{
    originalConfig: EditorState['config']
    previewConfig: EditorState['config']
    recipe: ModernizationRecipe
  } | null>(null)

  const effectiveConfig = modernStylesPreview?.previewConfig || state.config
  const availableModernizationRecipe = useMemo(
    () => getModernizationRecipe(cloneConfig(state.tempConfig || state.config)),
    [state.tempConfig, state.config]
  )

  const setTempConfigAndUpdate = config => {
    if (modernStylesPreview) return
    updateVizConfig(cloneConfig(config))
    dispatch({ type: 'EDITOR_TEMP_SAVE', payload: config })
  }

  const startModernStylesPreview = () => {
    const modernizationBaseConfig = cloneConfig(state.tempConfig || state.config)
    const recipe = getModernizationRecipe(modernizationBaseConfig)

    if (!recipe) return

    setModernStylesPreview({
      originalConfig: cloneConfig(state.config),
      previewConfig: applyModernizationRecipe(recipe, modernizationBaseConfig),
      recipe
    })
  }

  const keepModernStylesPreview = () => {
    if (!modernStylesPreview) return

    const keptConfig = cloneConfig(modernStylesPreview.previewConfig)
    dispatch({ type: 'EDITOR_SAVE', payload: keptConfig })
    setModernStylesPreview(null)
  }

  const discardModernStylesPreview = () => {
    setModernStylesPreview(null)
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
    let strippedConfig = stripConfig(state.config, true)

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
      isModernStylesPreview: Boolean(modernStylesPreview),
      modernStylesAction:
        availableModernizationRecipe && !modernStylesPreview
          ? {
              label: `Preview a modernized version of this ${getModernStylesActionSubject(effectiveConfig.type)}`,
              onClick: startModernStylesPreview
            }
          : undefined
    }),
    [state, effectiveConfig, modernStylesPreview, availableModernizationRecipe]
  )

  const previewBar = modernStylesPreview ? (
    <ModernStylesPreviewBar
      recipe={modernStylesPreview.recipe}
      onKeep={keepModernStylesPreview}
      onDiscard={discardModernStylesPreview}
    />
  ) : null

  return (
    <GlobalContextProvider>
      <ConfigContext.Provider value={contextValue}>
        <EditorDispatchContext.Provider value={dispatch}>
          <div
            className={`cove-visualization cdc-editor ${state.currentViewport}${
              modernStylesPreview ? ' modern-styles-preview-mode' : ''
            }`}
            ref={outerContainerRef}
          >
            <Tabs className='top-level'>
              <TabPane title='1. Choose Visualization Type' className='choose-type'>
                <ChooseTab />
              </TabPane>
              <TabPane title='2. Import Data' className='data-designer' disableRule={!state.config.type}>
                <DataImport />
              </TabPane>

              <TabPane title='3. Configure' className='configure' disableRule={configureDisabled}>
                <ConfigureTab
                  containerEl={containerEl}
                  previewKey={modernStylesPreview?.recipe.id}
                  previewBar={previewBar}
                  previewOriginalConfig={modernStylesPreview?.originalConfig}
                />
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
