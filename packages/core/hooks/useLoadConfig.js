import { useState, useEffect } from 'react'

// Context
import { useGlobalContext } from '../context/GlobalContext'
import { useConfigContext } from '../context/ConfigContext'

// Helpers
import DataTransform from '../helpers/DataTransform'

const useLoadConfig = (configObj, configUrlObj, defaults = null, runtime = null) => {
  const { viewMode } = useGlobalContext()
  const { configActions } = useConfigContext()

  const [ cycle, setCycle ] = useState(false)
  const [ loadingConfig, setLoadingConfig ] = useState(true)

  const transform = new DataTransform()

  const reloadConfig = () => {
    setLoadingConfig(true)
    setCycle(false)
  }

  useEffect(() => {
    const fetchConfig = async () => {
      // If defaults exist, store the default config context object in ConfigContext
      if (defaults) configActions.setConfigDefaults({ ...defaults })

      // Check if "data" is included through a URL, or directly, and set value
      let response = configObj || await (await fetch(configUrlObj)).json()
      let responseData = response.formattedData || response.data || []

      // If a data URL is provided, fetch data then return. Overrides any previous data set.
      if (response.dataUrl) {
        const dataString = await fetch(response.dataUrl)
        responseData = await dataString.json()

        // If data from the URL has a "data description", use the standardization functions on that returned data
        if (response.dataDescription) {
          responseData = transform.autoStandardize(responseData)
          responseData = transform.developerStandardize(responseData, response.dataDescription)
        }
      }

      // If defaults exist, create the new config object with shallow merge of defaults and data
      let newConfig = defaults ? { ...defaults, ...response } : { ...response }

      // If defaults exist, create new keys on newConfig from defaults that don't exist
      if (defaults) {
        Object.keys(defaults).forEach(key => {
          if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
            newConfig[key] = { ...defaults[key], ...newConfig[key] }
          }
        })
      }

      newConfig.data = responseData // Attach data to newConfig

      // Make config entry for table visibility - TODO: COVE Refactor - May no longer need with global context inclusion of view mode?
      if (newConfig.table && undefined === newConfig.table.show) newConfig.table.show = 'dashboard' === viewMode

      configActions.setData(newConfig.data) //Push data to ConfigContext
      return newConfig
    }


    if (!cycle) {
      fetchConfig()
        .then((newConfig) => {
          configActions.updateConfig(newConfig, runtime) // Set final config data in ConfigContext
          setLoadingConfig(false) // Tell subcomponents that the config is ready
        })
        .catch(console.error)
        .finally(() => {
          setCycle(true) // Switch to end the useLoadConfig cycle
        })
    }
  }, [ cycle, configObj, configUrlObj ])

  return [ loadingConfig, reloadConfig ]
}

export default useLoadConfig
