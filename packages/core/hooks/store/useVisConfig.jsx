import { createContext, useCallback, useContext, useEffect, useState } from 'react'

// Third Party
import { merge } from 'lodash'

// Store
import useStore from '../../store/store'

// Helpers
import coveUpdateWorker from '../../helpers/update/coveUpdateWorker'
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'

// Context
export const ConfigContext = createContext({})
ConfigContext.displayName = 'VisualizationConfig'

export const VisConfigProvider = ({ visualizationKey = '__default__', config: configObj, configUrl, children, defaultConfig } = {}) => {
  const [loading, setLoading] = useState(false)
  const addVisConfig = useStore(state => state.addVisConfig)
  const updateVisConfig = useStore(state => state.updateVisConfig)
  const storedConfig = useStore(state => state.visualizations[visualizationKey])
  const dashboardStoredConfig = useStore(state => state.visualizations['__default__']?.visualizations?.[visualizationKey])

  const getData = useStore(state => state.getData)

  useEffect(() => {
    async function initConfig() {
      const config = dashboardStoredConfig ?? configObj ?? (await fetchAsyncUrl(configUrl))

      if (dashboardStoredConfig) console.log('using dashboard stored config', dashboardStoredConfig)
      if (configObj) console.log('using config obj', configObj)
      if (configUrl) console.log('using config url', configUrl)

      const resolvedConfig = merge(defaultConfig, config)

      // Run update worker on config, then set in store
      if (!dashboardStoredConfig) {
        // Doesn't exist in dashboard store, so add it as either the default, or a new visualization
        addVisConfig(visualizationKey, { ...coveUpdateWorker(resolvedConfig) })
      } else {
        // Exists as dashboard store, so update it
        updateVisConfig(visualizationKey, { ...coveUpdateWorker(resolvedConfig) })
      }

      // Get initial data off config and put in store
      getData(config)

      setLoading(false)
    }

    if (loading || storedConfig) {
      return
    }

    setLoading(true)
    void initConfig()
    return () => {}
  }, [configUrl, defaultConfig, loading, configObj, visualizationKey])

  const finalConfig = useCallback(() => dashboardStoredConfig ?? storedConfig, [dashboardStoredConfig, storedConfig])

  if (!finalConfig()) {
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
