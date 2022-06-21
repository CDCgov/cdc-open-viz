import React, { createContext, useContext, useState } from 'react'

import { setConfigKeyValue } from '../helpers/configHelpers'

export const ConfigContext = createContext({})
export const useConfigContext = () => useContext(ConfigContext)

export const ConfigContextProvider = ({ children }) => {
  const merge = require('lodash.merge')

  const [ loadingConfig, setLoadingConfig ] = useState(true) // Loading state for config
  const [ configDefaults, setConfigDefaults ] = useState({}) // Default config object, loaded from local file
  const [ configRuntime, setConfigRuntime ] = useState()
  const [ config, setConfig ] = useState({}) // Working config object, loaded from supplied object, or external json url

  // Working config.data set for visualization
  const [ data, setData ] = useState(config?.data || [])

  // Integrity check for supplied data - set in visualization and updated through context
  const [ missingRequiredSections, setMissingRequiredSections ] = useState(false)

  // Global Actions
  const updateConfig = (newConfig, runtimeInjection = null) => {
    // Create new keys on newConfig from defaults that don't exist
    Object.keys(configDefaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...configDefaults[key], ...newConfig[key] }
      }
    })

    // Process any runtime functions provided (opional) -----------------

    // Developer Note:
    // A component's "runtime" config is generated using the initial config file, and dynamically
    // processing those values through a function. A runtime function generates - and returns - a config object
    // in a modified format. This format is specific for use with a selected component subtype or
    // option (i.e. swapping X and Y axis) using original (or updated) config values. Only
    // "runtime" config values - except for config.data - will be referenced for the final visualization render.

    // 1a) Check if runtime function provided (from initial load), then
    if (runtimeInjection) runtimeInjection(newConfig)

    // 1b) Check if runtime function is in context (for updateField use)
    if (configRuntime) configRuntime(newConfig)

    // 2) If runtime was supplied to useLoadConfig hook, and isn't stored in ConfigContext,
    // then push the runtime function to ConfigContext
    if (runtimeInjection && !configRuntime) setConfigRuntime(() => runtimeInjection)

    //TODO: COVE Refactor - Use newData variable as base to filter and exclude returned data
    //setExcludedData
    //setFilteredData

    setConfig({ ...newConfig })
  }

  const updateField = (fieldPayload, setValue) => {
    let newConfig = {}
    let updateFieldObj = setConfigKeyValue(fieldPayload, setValue)

    merge(newConfig, config, updateFieldObj)

    updateConfig(newConfig)
  }

  //Build Context
  const configContext = {
    config,
    configDefaults,
    configRuntime,
    data,
    loadingConfig,
    missingRequiredSections,
    configActions: {
      setConfig,
      setConfigDefaults,
      setConfigRuntime,
      setData,
      setLoadingConfig,
      setMissingRequiredSections,
      updateField,
      updateConfig
    }
  }

  return (
    <ConfigContext.Provider value={configContext}>
      {children}
    </ConfigContext.Provider>
  )
}

ConfigContextProvider.displayName = 'ConfigContext'
ConfigContext.displayName = 'ConfigContext'
