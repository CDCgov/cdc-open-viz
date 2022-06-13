import React, { createContext, useContext, useState } from 'react'

export const ConfigContext = createContext({})
export const useConfigContext = () => useContext(ConfigContext)

export const ConfigContextProvider = ({ defaults, children }) => {
  const [ config, setConfig ] = useState(defaults)
  const [ missingRequiredSections, setMissingRequiredSections ] = useState(false)

  //Global Actions
  const updateConfig = (newConfig) => {
    Object.keys(config).forEach(configKey => {
      if (newConfig[configKey] && 'object' === typeof newConfig[configKey] && !Array.isArray(newConfig[configKey])) {
        newConfig[configKey] = { ...config[configKey], ...newConfig[configKey] }
      }
    })
    setConfig(config => ({...config, ...newConfig}))
  }

  const updateField = (payload, value) => {
    const configHasProp = (prop, obj = config) => {
      return obj.hasOwnProperty(prop)
    }

    if ('string' === typeof payload) {
      setConfig(config => ({...config, [payload]: value}))
      return
    }

    let updateFieldObj = {}

    const updateConfigKey = {
      1: {
        'entry': () => updateFieldObj[payload[0]] = value,
        'validate': () => configHasProp(payload[0])
      },
      2: {
        'entry': () => {
          updateFieldObj[payload[0]] = {}
          updateFieldObj[payload[0]][payload[1]] = value
        },
        'validate': () => configHasProp(payload[0]) && configHasProp(payload[1], config[[payload[0]]])
      },
      3: {
        'entry': () => {
          updateFieldObj[payload[0]] = {}
          updateFieldObj[payload[0]][payload[1]] = {}
          updateFieldObj[payload[0]][payload[1]][payload[2]] = value
        },
        'validate': () => configHasProp(payload[0]) && configHasProp(payload[1], config[[payload[0]]]) && configHasProp(payload[2], config[[payload[0]]][[payload[1]]])
      }
    }

    updateConfigKey[payload.length].entry()

    if (updateConfigKey[payload.length].validate()) {
      setConfig(config => ({...config, ...updateFieldObj }))
    } else {
      updateConfig(updateFieldObj)
    }
  }

  //Build Context
  const configContext = {
    config,
    missingRequiredSections,
    configActions: {
      setConfig,
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

ConfigContext.displayName = 'ConfigContext'
