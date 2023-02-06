import { useState, useEffect } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import { useGlobalStore } from '../../stores/globalStore'
import { useConfigStore } from '../../stores/configStore'

// Helpers
import dataTransform from '../../helpers/dataTransform'

const ConfigProxy = ({ configObj, configUrl, defaults = null, runtime = null, children }) => {
  const { viewMode } = useGlobalStore((state) => state)
  const { setConfigDefaults, updateConfig } = useConfigStore((state) => state)

  const [ cycle, setCycle ] = useState(false)
  const [ loadingConfig, setLoadingConfig ] = useState(true)

  const transform = new dataTransform()

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
          updateConfig(newConfig, runtime) // Set final config data in ConfigContext, TODO: COVE Refactor - is this being parsed properly? Is runtime being attached?
          setLoadingConfig(false) // Tell subcomponents that the config is ready
        })
        .catch(console.error)
        .finally(() => {
          setCycle(true) // Switch to end the useLoadConfig cycle
        })
    }
  }, [ cycle, configObj, configUrl ])

  return (loadingConfig ? <></> : children)
}

ConfigProxy.propTypes = {
  /** A *__json object__* containing values used for configuration of the dashboard or component */
  configObj: PropTypes.object,
  /** A *__url referral to a json object__* containing values used for configuration of the dashboard or component  */
  configUrl: PropTypes.string,
  /** A json object containing any default, baseline values for a visualization. */
  defaults: PropTypes.object,
  /** A visualization-specific function that is run against the resolved *configObj* or *configURL* object; returns a modified object based off those processed values */
  runtime: PropTypes.func,
}

export default ConfigProxy
