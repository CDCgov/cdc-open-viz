import React, { useState, useEffect, useCallback } from 'react'

// IE11
// import 'core-js/stable' // temp remove, appears to be used with html2pdf.js which we're temp removing
import ResizeObserver from 'resize-observer-polyfill'

import getViewport from '@cdc/core/helpers/getViewport'

import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import ConfigContext from './ConfigContext'

import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'

import DataImport from './components/DataImport'
import ChooseTab from './components/ChooseTab'
import ConfigureTab from './components/ConfigureTab'
import TabPane from './components/TabPane'
import Tabs from './components/Tabs'

import './scss/main.scss'

export default function CdcEditor({ config: configObj = { newViz: true }, hostname, containerEl, sharepath, isDebug }) {
  const [config, setConfig] = useState(configObj)
  const [tempConfig, setTempConfig] = useState(null)
  const [errors, setErrors] = useState([])

  const setTempConfigAndUpdate = config => {
    updateVizConfig(config)
    setTempConfig(config)
  }

  const [currentViewport, setCurrentViewport] = useState('lg')
  const [dimensions, setDimensions] = useState([])

  let startingTab = 0

  if ((config.data || config.dataUrl) && config.type) {
    startingTab = 2
  }

  // Legacy support - dashboards using a single dataset
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

  const [globalActive, setGlobalActive] = useState(startingTab)

  const resizeObserver = new ResizeObserver(([container]) => {
    let { width, height } = container.contentRect
    let newViewport = getViewport(width)

    setDimensions([width, height])
    setCurrentViewport(newViewport)
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  const stripConfig = configToStrip => {
    let strippedConfig = { ...configToStrip }

    if (strippedConfig.type === 'dashboard') {
      if (strippedConfig.datasets) {
        Object.keys(strippedConfig.datasets).forEach(datasetKey => {
          delete strippedConfig.datasets[datasetKey].formattedData
          if (strippedConfig.datasets[datasetKey].dataUrl) {
            delete strippedConfig.datasets[datasetKey].data
          }
        })
      }
      if (strippedConfig.visualizations) {
        Object.keys(strippedConfig.visualizations).forEach(vizKey => {
          delete strippedConfig.visualizations[vizKey].runtime
          delete strippedConfig.visualizations[vizKey].formattedData
          delete strippedConfig.visualizations[vizKey].data
        })
      }
    } else {
      delete strippedConfig.runtime
      delete strippedConfig.formattedData
      if (strippedConfig.dataUrl) {
        delete strippedConfig.data
      }
    }

    return strippedConfig
  }

  const updateVizConfig = newTempConfig => {
    if (null !== newTempConfig) {
      // Remove runtime/unnecessary items from config before saving to WCMS, performance optimization
      let strippedConfig = stripConfig(newTempConfig)

      const parsedData = JSON.stringify(strippedConfig)
      // Emit the data in a regular JS event so it can be consumed by anything.
      const event = new CustomEvent('updateVizConfig', { detail: parsedData, bubbles: true })
      window.dispatchEvent(event)
    }
  }

  // Temp Config is for changes made in the components proper - to prevent render cycles. Regular config is for changes made in the first two tabs.
  useEffect(() => {
    updateVizConfig(tempConfig)
  }, [JSON.stringify(tempConfig)])

  useEffect(() => {
    let strippedConfig = stripConfig(config)

    const parsedData = JSON.stringify(strippedConfig)
    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })
    window.dispatchEvent(event)
  }, [config])

  useEffect(() => {
    if (globalActive > -1) {
      setGlobalActive(-1)
    }
  }, [globalActive])

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
    globalActive,
    setGlobalActive,
    tempConfig,
    setTempConfig: setTempConfigAndUpdate,
    sharepath,
    isDebug
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
        <div className={`cdc-open-viz-module cdc-editor ${currentViewport}`} ref={outerContainerRef}>
          <Tabs className='top-level' startingTab={globalActive}>
            <TabPane title='1. Choose Visualization Type' className='choose-type'>
              <ChooseTab />
            </TabPane>
            <TabPane title='2. Import Data' className='data-designer' disableRule={!config.type}>
              <DataImport />
            </TabPane>

            <TabPane title='3. Configure' className='configure' disableRule={configureDisabled}>
              <ConfigureTab containerEl={containerEl} />
            </TabPane>
          </Tabs>
        </div>
      </ConfigContext.Provider>
      <OverlayFrame />
    </GlobalContextProvider>
  )
}
