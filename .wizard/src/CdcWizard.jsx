import React, { useEffect, useState } from 'react'

// Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import { useConfigContext } from '@cdc/core/context/ConfigContext'
import WizardContext from './context/WizardContext'

// Hooks
import useLoadConfig from '@cdc/core/hooks/useLoadConfig'

//Components - Core
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'

//Components - Local
import Wizard from './components/Wizard'

// Styles
import './scss/cove-wizard.scss'

//Visualization
const CdcWizard = ({ configObj = { newViz: true }, configUrlObj, hostname, containerEl }) => {
  const [ loadingConfig ] = useLoadConfig(configObj, configUrlObj)

  const { globalActions } = useGlobalContext()
  const { config } = useConfigContext()

  const [ tempConfig, setTempConfig ] = useState(null)
  const [ errors, setErrors ] = useState([])

  // Calculate the starting tab for Wizard
  let startingTab = 0
  if (config.data && config.type) startingTab = 2

  // Set global Wizard component settings
  useEffect(() => {
    // Set view mode to wizard
    globalActions.setViewMode('wizard')

    // Set starting tab for Wizard in global context state
    globalActions.setWizardActiveTab(startingTab)
  }, [])

  // Event emit Temp Config options:
  // Temp Config is for changes made in the components proper - to prevent render cycles. Regular config is for changes made in the first two tabs.
  useEffect(() => {
    if (null !== tempConfig) {
      const parsedConfig = JSON.stringify(tempConfig)
      // Emit the config in a regular JS event, so it can be consumed by anything.
      const event = new CustomEvent('updateVizConfig', { detail: parsedConfig })
      window.dispatchEvent(event)
    }
  }, [ tempConfig ])

  // Event emit Config options:
  useEffect(() => {
    const parsedConfig = JSON.stringify(config)
    // Emit the data in a regular JS event, so it can be consumed by anything.
    const event = new CustomEvent('updateVizConfig', { detail: parsedConfig })
    window.dispatchEvent(event)
  }, [ config ])

  const maxFileSize = 10 // Represents number of MB. Maybe move this to a prop eventually but static for now.

  // TODO: COVE Refactor - Move these to global error management system
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

  const wizardContext = {
    containerEl,
    errors,
    errorMessages,
    hostname,
    maxFileSize,
    setErrors,
    setTempConfig,
    tempConfig
  }

  return (
    <ErrorBoundary component="CdcWizard">
      <WizardContext.Provider value={wizardContext}>
        {loadingConfig ? <></> : <Wizard hostname={hostname} containerEl={containerEl}/>}
      </WizardContext.Provider>
      <OverlayFrame/>
    </ErrorBoundary>
  )
}


export default CdcWizard
