import React, { useEffect, useRef } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import useGlobalStore from '../../stores/globalStore'
import useConfigStore from '../../stores/configStore'

// Helpers
import dataTransform from '../../helpers/dataTransform'
import coveUpdateWorker from '../../helpers/update/coveUpdateWorker'

const ConfigProxy = ({ configObj, configUrl, setParentConfig, defaults = null, runtime = null, children }) => {
  // Store Selectors
  const viewMode = useGlobalStore((state) => state.viewMode)

  const { setConfigDefaults, updateConfig, updateParentConfig, setUpdateParentConfig } = useConfigStore(state =>({
    setConfigDefaults: state.setConfigDefaults,
    updateConfig: state.updateConfig,
    updateParentConfig: state.updateParentConfig,
    setUpdateParentConfig: state.setUpdateParentConfig
  }))

  const cycled = useRef(false)
  const loadingConfig = useRef(true)

  const transform = new dataTransform()

  if (setParentConfig && !updateParentConfig) setUpdateParentConfig(setParentConfig)

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

      // Validates config file and updates any previous entries into new format
      newConfig = coveUpdateWorker(newConfig)

      newConfig.data = responseData // Attach data to newConfig

      // Make config entry for table visibility - TODO: COVE Refactor - May no longer need with global context inclusion of view mode?
      if (newConfig.table && undefined === newConfig.table.show) newConfig.table.show = 'dashboard' === viewMode

      if (runtime) runtime(newConfig) // If provided a runtime function, run it on newConfig to transform

      return newConfig
    }

    if (!cycled.current) {
      fetchConfig()
        .then((newConfig) => {
          updateConfig(newConfig) // Set final config data in configStore
          loadingConfig.current = false // Tell subcomponents that the config is ready
        })
        .catch(console.error)
        .finally(() => {
          cycled.current = true // Stop the config load cycle
        })
    }
  }, [ configObj, configUrl ])

  return (loadingConfig.current ? <></> : children)
}

ConfigProxy.propTypes = {
  /** A *__json object__* containing values used for configuration of the dashboard or component */
  configObj: PropTypes.object,
  /** A *__url referral to a json object__* containing values used for configuration of the dashboard or component  */
  configUrl: PropTypes.string,
  /** A json object containing any default, baseline values for a visualization. */
  defaults: PropTypes.object,
  /** A visualization-specific function, or hook, that is run against the resolved *configObj* or *configURL* object; returns a modified object with those processed values */
  runtime: PropTypes.func,
}

export default ConfigProxy
