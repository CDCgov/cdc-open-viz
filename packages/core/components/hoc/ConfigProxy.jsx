import React, { createContext, useState, useCallback, useContext, useEffect, Suspense } from 'react'

// Third Party
import { useStore } from 'zustand'
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../stores/configStore'
import useDataStore from '../../stores/dataStore'

// Components - Core
import RenderFallback from '../loader/RenderFallback'
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'

// Store Exports
export const ConfigStoreContext = createContext({})
export const useConfigStoreContext = () => useContext(ConfigStoreContext)

// Component
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
  const { store, config, setConfigDefaults, updateConfig, runConfigUpdater } = useConfigStore(state => ({
    store: state,
    config: state.config,
    setConfigDefaults: state.setConfigDefaults,
    updateConfig: state.updateConfig,
    runConfigUpdater: state.runConfigUpdater
  }))

  const { getData } = useDataStore()

  const sliceStoreConfigObj = useStore(useConfigStore, store => store.config?.visualizations)

  const [ isLoading, setIsLoading ] = useState(true)

  // Loads the config object and sets defaults
  useEffect(() => {
    if (visualizationKey) {
      // If a visualizationKey is provided, then we are in a component consumed by Dashboard or Wizard
      setConfigDefaults(defaults, visualizationKey) // Update the config with defaults
        .then(setIsLoading(false))
    } else {
      async function fetchConfig() {
        let response = configObj || await fetchAsyncUrl(configUrl) || {}

        setConfigDefaults(defaults) // Update the config with defaults

        updateConfig(response) // Get initial configObj, or object from configUrl
        getData(response) // Get initial data

        runConfigUpdater() // Run the updater for config entry maintenance
      }
      fetchConfig().then(() => setIsLoading(false))
    }
  }, [ configObj, configUrl, visualizationKey ])

  // Determine the config object entry to use:
  // Again, if a visualizationKey is provided, then we are in a component consumed by Dashboard or Wizard
  const getStoreObj = useCallback(() => {
    if (config?.visualizations?.[visualizationKey]) {
      return sliceStoreConfigObj[visualizationKey]
    } else {
      return store
    }
  }, [ store, config ])

  return (
    <Suspense fallback={<RenderFallback/>}>
      <ConfigStoreContext.Provider value={getStoreObj()}>
        {!isLoading && children}
      </ConfigStoreContext.Provider>
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
