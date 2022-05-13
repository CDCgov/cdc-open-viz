import React, { useState, useEffect, useCallback } from 'react'

// IE11
import 'core-js/stable'
import ResizeObserver from 'resize-observer-polyfill'

import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import WizardContext from './WizardContext'

import getViewport from '@cdc/core/helpers/getViewport'

import DataImport from './components/DataImport'
import ChooseTab from './components/ChooseTab'
import ConfigureTab from './components/ConfigureTab'
import Tabs from './components/Tabs'

import './scss/cove-wizard.scss'

const CdcWizard = ({ config: configObj = { newViz: true }, hostname, containerEl }) => {
  const [ config, setConfig ] = useState(configObj)
  const [ tempConfig, setTempConfig ] = useState(null)
  const [ errors, setErrors ] = useState([])

  const [ currentViewport, setCurrentViewport ] = useState('lg')
  const [ dimensions, setDimensions ] = useState([])

  let startingTab = 0

  if (config.data && config.type) {
    startingTab = 2
  }

  const [ globalActive, setGlobalActive ] = useState(startingTab)

  const resizeObserver = new ResizeObserver(([ container ]) => {
    let { width, height } = container.contentRect
    let newViewport = getViewport(width)

    setDimensions([ width, height ])
    setCurrentViewport(newViewport)
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  // Temp Config is for changes made in the components proper - to prevent render cycles. Regular config is for changes made in the first two tabs.
  useEffect(() => {
    if (null !== tempConfig) {
      const parsedData = JSON.stringify(tempConfig)
      // Emit the data in a regular JS event so it can be consumed by anything.
      const event = new CustomEvent('updateVizConfig', { detail: parsedData })
      window.dispatchEvent(event)
    }
  }, [ tempConfig ])

  useEffect(() => {
    const parsedData = JSON.stringify(config)
    // Emit the data in a regular JS event so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedData })
    window.dispatchEvent(event)
  }, [ config ])

  useEffect(() => {
    if (globalActive > -1) {
      setGlobalActive(-1)
    }
  }, [ globalActive ])

  const maxFileSize = 10 // Represents number of MB. Maybe move this to a prop eventually but static for now.

  const errorMessages = {
    emptyCols: 'It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.',
    emptyData: 'Your data file is empty.',
    dataType: 'Your datatype is not supported.',
    fileType: 'The file type that you are trying to upload is not supported.',
    formatting: 'Please check the formatting of your data file.',
    failedFetch: 'Error fetching or parsing data file.',
    urlInvalid: 'Please make sure to use a valid URL.',
    cannotReach: 'Cannot reach URL, please make sure it\'s correct.',
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
    setTempConfig
  }

  return (
    <GlobalContextProvider>
        <WizardContext.Provider value={state}>
          <div className={`cove-wizard ${currentViewport}`} ref={outerContainerRef}>
            {/* cdc-open-viz-module cdc-editor*/}
            <Tabs startingTab={globalActive} fullsize>
              {/* top-level */}
              <Tabs.Pane title="1. Import Data" className="data-designer">
                <DataImport/>
              </Tabs.Pane>
              <Tabs.Pane title="2. Choose Visualization Type" className="choose-type"
                         disableRule={!config.data && !config.formattedData}>
                <ChooseTab/>
              </Tabs.Pane>
              <Tabs.Pane title="3. Configure" className="configure" disableRule={null === config.data || !config.type}>
                <ConfigureTab containerEl={containerEl}/>
              </Tabs.Pane>
            </Tabs>
          </div>
        </WizardContext.Provider>
    </GlobalContextProvider>
  )
}

export default CdcWizard
