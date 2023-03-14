import { createContext, useCallback, useContext, useEffect, useState } from 'react'

// Third Party
import { merge } from 'lodash'

// Store
import useStore, { store } from '@cdc/core/store/store'

// Helpers
import coveUpdateWorker from '../../helpers/update/coveUpdateWorker'
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'
import { resolveConfig } from 'prettier'

// Context
export const ConfigContext = createContext({})
ConfigContext.displayName = 'VisualizationConfig'

export const VisConfigProvider = ({ visualizationKey = '__default__', config: configObj, configUrl, children, defaultConfig, transformConfig } = {}) => {
  const [loading, setLoading] = useState(false)
  const addVisConfig = useStore(state => state.addVisConfig)
  const updateVisConfig = useStore(state => state.updateVisConfig)
  const storedConfig = useStore(state => state.visualizations[visualizationKey])
  const dashboardStoredConfig = useStore(state => state.visualizations['__default__']?.visualizations?.[visualizationKey])

  const getData = useStore(state => state.getData)

  const finalConfig = useCallback(() => {
    let resolvedConfig = dashboardStoredConfig ?? storedConfig
    if (!resolvedConfig) {
      return null
    }

    if (transformConfig) {
      resolvedConfig = transformConfig(resolvedConfig)
    }

    return resolvedConfig
  }, [dashboardStoredConfig, storedConfig, transformConfig])

  useEffect(() => {
    async function initConfig() {
      const config = dashboardStoredConfig ?? configObj ?? (await fetchAsyncUrl(configUrl))

      if (dashboardStoredConfig) console.log('using dashboard stored config', dashboardStoredConfig)
      if (configObj) console.log('using config obj', configObj)
      if (configUrl) console.log('using config url', configUrl)

      const resolvedConfig = merge(defaultConfig, config)
      console.log('initConfig resolvedConfig', resolvedConfig)
      const processedConfig = { ...coveUpdateWorker(resolvedConfig) }

      // Run update worker on config, then set in store
      if (!dashboardStoredConfig) {
        // Doesn't exist in dashboard store, so add it as either the default, or a new visualization
        addVisConfig(visualizationKey, processedConfig)
      } else {
        // Exists as dashboard store, so update it
        updateVisConfig(visualizationKey, processedConfig)
      }

      // Get initial data off config and put in store
      await getData(visualizationKey, processedConfig)

      setLoading(false)
    }

    console.log('loading, storedConfig', loading, storedConfig)
    if (loading || storedConfig) {
      return
    }

    setLoading(true)
    void initConfig()
  }, [configUrl, defaultConfig, loading, configObj, visualizationKey, storedConfig, dashboardStoredConfig, getData, addVisConfig, updateVisConfig])

  if (loading || !finalConfig()) {
    console.log('no stored config!')
    return null
  }

  const contextValue = { ...finalConfig(), visualizationKey }

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>
}

export const useVisConfig = () => {
  const { visualizationKey, ...config } = useContext(ConfigContext)

  // Actions -------------------------------------------------------------------------------------------------------
  const storeUpdateVisConfig = useStore(state => state.updateVisConfig)
  const storeUpdateVisConfigField = useStore(state => state.updateVisConfigField)

  // Action Proxies ------------------------------------------------------------------------------------------------
  const updateVisConfig = useCallback(
    updates => {
      storeUpdateVisConfig(visualizationKey, updates)
    },
    [storeUpdateVisConfig, visualizationKey]
  )

  const updateVisConfigField = useCallback(
    (fieldPayload, setValue, merge = true) => {
      storeUpdateVisConfigField(visualizationKey, fieldPayload, setValue, merge)
    },
    [storeUpdateVisConfigField, visualizationKey]
  )
  // ---------------------------------------------------------------------------------------------------------------

  return {
    config,
    updateVisConfig,
    updateVisConfigField
  }
}
