import React, { createContext, useContext, useCallback, useState } from 'react'

import { getConfigKeyValue, setConfigKeyValue } from '../helpers/configHelpers'

export const ConfigContext = createContext({})
export const useConfigContext = () => useContext(ConfigContext)

export const ConfigContextProvider = ({ children }) => {
  const merge = require('lodash.merge')

  //Working config object, loaded from supplied object, or external json url
  const [ config, setConfig ] = useState({})
  const [ configDefaults, setConfigDefaults ] = useState({})

  //Working config.data set for visualization
  const [ data, setData ] = useState(config?.data || [])

  //Integrity check for supplied data - set in visualization and updated through context
  const [ missingRequiredSections, setMissingRequiredSections ] = useState(false)

  //Global Actions
  const updateConfig = useCallback((newConfig, dataOverride = undefined) => {
    let defaultConfig = configDefaults

    Object.keys(defaultConfig).forEach(configKey => {
      if (newConfig[configKey] && 'object' === typeof newConfig[configKey] && !Array.isArray(newConfig[configKey])) {
        newConfig[configKey] = { ...defaultConfig[configKey], ...newConfig[configKey] }
      }
    })

    let newData = dataOverride || data //TODO: COVE Refactor - Use data variable to filter and exclude returned data
    setData(newData)
    setConfig(config => ({ ...config, ...newConfig }))
  }, [ configDefaults, data ])

  const updateField = useCallback((payload, value, test = undefined) => {

    let updateFieldObj = setConfigKeyValue(payload, value)
    let updateFieldVal = getConfigKeyValue(payload, config)

    if (undefined !== updateFieldVal && null !== updateFieldVal) {
      setConfig({ ...config, ...updateFieldObj })
    } else {

      // For some reason, when updating legend > reverse labels with checkbox,
      // it's acting differently than the preload on Chart.Linear.Bar using the updateField on yAxis.labelPlacement

      // [Object.keys(updateFieldObj)[0]]
      updateConfig(merge(config, updateFieldObj))
    }
  }, [ config ])

  //Build Context
  const configContext = {
    config,
    configDefaults,
    data,
    missingRequiredSections,
    configActions: {
      setConfig,
      setConfigDefaults,
      setData,
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
