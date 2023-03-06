import React, { useState, useEffect, useCallback } from 'react'

// IE11
import 'core-js/stable'
import ResizeObserver from 'resize-observer-polyfill'

// Context
import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import ConfigContext from './ConfigContext'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'

// Components - Core
import Overlay from '@cdc/core/components/ui/Overlay'

// Components - Local
import Tabs from './components/Tabs'
import TabVizSelect from './components/Tab.Viz.Select'
import TabVizData from './components/Tab.Viz.Data'
import TabVizConfig from './components/Tab.Viz.Config'
// import TabVizConfigure from 'components/Tab.Viz.Configure'
// import TabPane from './components/TabPane'

// Styles
import './scss/cove-wizard.scss'

const CdcEditor = ({ config: configObj = { newViz: true }, hostname, containerEl, sharepath }) => {
  const [ config, setConfig ] = useState(configObj)
  const [ tempConfig, setTempConfig ] = useState(null)
  const [ errors, setErrors ] = useState([])

  const [ activeTab, setActiveTab ] = useState(0)

  const [ currentViewport, setCurrentViewport ] = useState('lg')
  const [ dimensions, setDimensions ] = useState([])

  useEffect(() => {
    if (config.data && config.type) setActiveTab(2)
    return () => {
    }
  }, [ config.data, config.type ])

  /** OpenVizWrapper Config Logic ---------------------------------------------------------------------------------------------------------------------------
   * This section is used to emit an event containing the updated config settings. These settings are applied to a hidden input field in WCMS, so they
   * can be processed, and saved, in the system environment.
   *
   * Temp Config is for changes made in the components proper - to prevent render cycles. Regular config is for changes made in the first two tabs.
   */
  useEffect(() => {
    if (null !== tempConfig) {
      const parsedData = JSON.stringify(tempConfig)
      // Emit the data in a regular JS event so it can be consumed by anything.
      const event = new CustomEvent('updateVizConfig', { detail: parsedData, bubbles: true })
      window.dispatchEvent(event)
    }
  }, [ tempConfig ])

  useEffect(() => {
    const parsedData = JSON.stringify(config)
    // Emit the data in a regular JS event, so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })
    window.dispatchEvent(event)
  }, [ config ])

  /** --------------------------------------------------------------------------------------------------------------- End OpenVizWrapper Config Logic */

  // TODO: COVE Refactor - Lift this into the coveUpdateWorker
  // Legacy support - Migrate dashboard data using a single dataset per visualization
  if (config.type === 'dashboard') {
    let legacyUpdateNeeded = false
    let newConfig

    if (config.data || config.dataUrl) {
      legacyUpdateNeeded = true
      newConfig = { ...config }

      newConfig.datasets = {}
      newConfig.datasets[config.dataFileName || 'dataset-1'] = {
        data: config.data,
        dataUrl: config.dataUrl,
        dataFileName: config.dataFileName || 'dataset-1',
        dataFileSourceType: config.dataFileSourceType
      }

      Object.keys(newConfig.visualizations).forEach(vizKey => {
        newConfig.visualizations[vizKey].dataKey = config.dataFileName || 'dataset-1'
        newConfig.visualizations[vizKey].dataDescription = newConfig.dataDescription
        newConfig.visualizations[vizKey].formattedData = newConfig.formattedData
      })

      delete newConfig.data
      delete newConfig.dataUrl
      delete newConfig.dataFileName
      delete newConfig.dataFileSourceType
      delete newConfig.dataDescription
      delete newConfig.formattedData
    }

    if (config.dashboard && config.dashboard.filters) {
      legacyUpdateNeeded = true
      newConfig = { ...config }

      newConfig.dashboard.sharedFilters = newConfig.dashboard.sharedFilters || []
      newConfig.dashboard.filters.forEach(filter => {
        newConfig.dashboard.sharedFilters.push({ ...filter, key: filter.label, showDropdown: true, usedBy: Object.keys(newConfig.visualizations) })
      })

      delete newConfig.dashboard.filters
    }

    if (legacyUpdateNeeded) {
      setConfig(newConfig)
    }
  }

  const resizeObserver = new ResizeObserver(([ container ]) => {
    let { width, height } = container.contentRect
    let newViewport = CoveHelper.General.getViewport(width)

    setDimensions([ width, height ])
    setCurrentViewport(newViewport)
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  const maxFileSize = 10 // Represents number of MB. Maybe move this to a prop eventually but static for now.

  const errorMessages = {
    emptyCols: 'It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.',
    emptyData: 'Your data file is empty.',
    dataType: 'Your datatype is not supported.',
    fileType: 'The file type that you are trying to upload is not supported.',
    formatting: 'Please check the formatting of your data file.',
    failedFetch: 'Error fetching or parsing data file.',
    urlInvalid: 'Please make sure to use a valid URL.',
    cannotReach: "Cannot reach URL, please make sure it's correct.",
    fileTooLarge: `File is too large. Maximum file size is ${maxFileSize}MB.`
  }

  const state = {
    config,
    setConfig,
    errors,
    setErrors,
    errorMessages,
    maxFileSize,
    hostname,
    activeTab,
    setActiveTab,
    tempConfig,
    setTempConfig,
    sharepath
  }

  let configureDisabled = true

  if (config.type !== 'dashboard') {
    if (config.formattedData) {
      configureDisabled = false
    }
  } else {
    if (config.datasets && Object.keys(config.datasets).length > 0) {
      configureDisabled = false
    }
  }

  return (
    <GlobalContextProvider>
      <ConfigContext.Provider value={state}>
        <div className="cove cove-fullscreen">
          {/*<div className={`cdc-open-viz-module cdc-editor ${currentViewport}`} ref={outerContainerRef}>*/}
          <Tabs startingTab={activeTab} fullsize>
            <Tabs.Content title="1. Choose Visualization Type">
              <TabVizSelect/>
            </Tabs.Content>
            <Tabs.Content title="2. Import Data" className="cove-wizard__data-designer" disableRule={!config.type}>
              <TabVizData/>
            </Tabs.Content>
            <Tabs.Content title="3. Configure" disableRule={configureDisabled}>
              <TabVizConfig containerEl={containerEl}/>
            </Tabs.Content>
          </Tabs>
          <Overlay/>
        </div>
      </ConfigContext.Provider>
    </GlobalContextProvider>
  )
}
export default CdcEditor
