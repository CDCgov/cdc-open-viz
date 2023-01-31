import { useState, useEffect } from 'react'

// Store
import { useGlobalStore } from '../stores/globalStore'
import { useConfigStore } from '../stores/configStore'

// Helpers
import DataTransform from '../helpers/DataTransform'

const useLoadConfig = (configObj, configUrl, defaults = null, runtime = null) => {
  const { viewMode } = useGlobalStore((state) => state)
  const { setConfigDefaults, updateConfig } = useConfigStore((state) => state)

  const [ cycle, setCycle ] = useState(false)
  const [ loadingConfig, setLoadingConfig ] = useState(true)

  const transform = new DataTransform()

  const reloadConfig = () => {
    setLoadingConfig(true)
    setCycle(false)
  }

  useEffect(() => {
    const fetchConfigUrl = async (url) => {
      let urlObj = null
      try {
        const res = await fetch(url)
        const text = await res.text()
        urlObj = JSON.parse(text)
      } catch (err) {
        console.error('Supplied config URL is not in JSON format - invalid address?')
      }
      return urlObj
    }

    const fetchConfig = async () => {
      // If defaults exist, store the default config context object in ConfigContext
      if (defaults) setConfigDefaults({ ...defaults })

      // Check if "data" is included through a URL, or directly, and set value
      let response = configObj || await fetchConfigUrl(configUrl) || {}

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

      return newConfig
    }


    if (!cycle) {
      fetchConfig()
        .then((newConfig) => {
          updateConfig(newConfig, runtime) // Set final config data in ConfigContext
          setLoadingConfig(false) // Tell subcomponents that the config is ready
        })
        .catch(console.error)
        .finally(() => {
          setCycle(true) // Switch to end the useLoadConfig cycle
        })
    }
  }, [ cycle, configObj, configUrl ])

  return [ loadingConfig, reloadConfig ]
}

export default useLoadConfig
