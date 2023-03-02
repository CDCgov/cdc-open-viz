import React, { createContext, useCallback, useContext, useEffect, useRef, Suspense } from 'react'

// Third Party
import { useStore } from 'zustand'
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../stores/configStore'
import RenderFallback from '../loader/RenderFallback'

export const ConfigStoreContext = createContext({})
export const useConfigStoreContext = () => useContext(ConfigStoreContext)

const ConfigProxy = (
  {
    configObj,
    configUrl,
    defaults = null,
    runtime = null,
    visualizationKey = null,
    children
  }
) => {
  // Store Selectors
  const { config, setConfigDefaults, fetchConfig, runConfigUpdater } = useConfigStore(state => state)
  const sliceStoreConfigObj = useStore(useConfigStore, store => store.config.visualizations)

  const loadingConfig = useRef(true)

  useEffect(() => {
    if (visualizationKey) {
      // If a visualizationKey is provided, then we are in a component consumed by Dashboard or Wizard
      setConfigDefaults(defaults, visualizationKey) // Update the config with defaults
    } else {
      setConfigDefaults(defaults) // Update the config with defaults
      fetchConfig(configObj, configUrl) // Get initial configObj, or object from configUrl
      runConfigUpdater() // Run the updater for config entry maintenance
    }
    loadingConfig.current = false // Tell subcomponents that the config is ready
  }, [ configObj, configUrl, defaults, setConfigDefaults, fetchConfig, runConfigUpdater ])


  const processedConfigEntry = useCallback(() => {
    if (config?.visualizations?.[visualizationKey]) {
      console.log('sliced', sliceStoreConfigObj[visualizationKey])
      return sliceStoreConfigObj[visualizationKey]
    } else {
      return configObj
    }
  }, [ config, configObj ])


  if (visualizationKey) return (
    <ConfigStoreContext.Provider value={{ config: processedConfigEntry() }}>
      <Suspense fallback={<RenderFallback/>}>
        {!loadingConfig.current && children}
      </Suspense>
    </ConfigStoreContext.Provider>
  )

  return (
    <Suspense fallback={<RenderFallback/>}>
      {!loadingConfig.current && children}
    </Suspense>
  )
}

ConfigProxy.propTypes = {
  /** A *__json object__* containing values used for configuration of the dashboard or component */
  configObj: PropTypes.object,
  /** A *__url referral to a json object__* containing values used for configuration of the dashboard or component  */
  configUrl: PropTypes.string,
  /** A json object containing any default, baseline values for a visualization. */
  defaults: PropTypes.object,
  /** A visualization-specific function, or hook, that is run against the resolved *configObj* or *configURL* object; returns a modified object with those processed values */
  runtime: PropTypes.func
}

export default ConfigProxy
