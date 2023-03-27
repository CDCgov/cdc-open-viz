import { createContext, useCallback, useContext, useEffect, useState, useRef, useTransition } from 'react'

// Third Party
import { merge } from 'lodash'

// Store
import useStore from '../../store/store'

// Helpers
import coveUpdateWorker from '../../helpers/update/coveUpdateWorker'
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'
import { isConfigEqual } from '../../helpers/configHelpers'

// Context
export const ConfigContext = createContext({})
ConfigContext.displayName = 'VisualizationConfig'

export const VisConfigProvider = ({ visualizationKey = '__default__', config: configObj, configUrl, children, defaultConfig, transformConfig } = {}) => {
  const [ loading, setLoading ] = useState(false)

  const configRef = useRef(configObj)
  const updateDetected = useRef(false)

  // Config Store Selectors
  const addVisConfig = useStore(state => state.addVisConfig)
  const updateVisConfig = useStore(state => state.updateVisConfig)
  const storedConfig = useStore(state => state.visualizations[visualizationKey])
  const dashboardStoredConfig = useStore(state => state.visualizations['__default__']?.visualizations?.[visualizationKey])

  // Data Store Selectors
  const getData = useStore(state => state.getData)

  const finalConfig = useCallback(() => {
    let resolvedConfig = dashboardStoredConfig ?? storedConfig

    // If no resolved config, return null
    if (!resolvedConfig) return null

    if (transformConfig) {
      resolvedConfig = transformConfig(resolvedConfig)
    }

    return resolvedConfig
  }, [ dashboardStoredConfig, storedConfig, transformConfig ])

  useEffect(() => {
    // If the configObj changes externally, trigger a
    // recycle of the initConfig loader.
    if (!isConfigEqual(configObj, configRef.current)) {
      configRef.current = configObj
      updateDetected.current = true
    }
  }, [configObj])

  useEffect(() => {
    async function initConfig() {
      const config = dashboardStoredConfig ?? configObj ?? (await fetchAsyncUrl(configUrl))

      const resolvedConfig = merge(defaultConfig, config)
      const processedConfig = { ...await coveUpdateWorker(resolvedConfig) }

      // Run update worker on config, then set in store
      if (dashboardStoredConfig) {
        // Exists as dashboard store, so update it
        updateVisConfig(visualizationKey, processedConfig)
      } else {
        // Doesn't exist in dashboard store, so add it as either the default, or a new visualization
        addVisConfig(visualizationKey, processedConfig)
      }

      // Get initial data off config and put in store
      await getData(visualizationKey, processedConfig)

      updateDetected.current = false
      setLoading(false)
    }

    if (!updateDetected.current) { // If no update detected, continue to next check
      // If loading, or stored config already exists, return early
      if (loading || storedConfig) return
    }

    // Otherwise, start loading
    setLoading(true)

    void initConfig()
  }, [ configObj, configUrl, defaultConfig, loading, visualizationKey, storedConfig, dashboardStoredConfig, getData, addVisConfig, updateVisConfig ])

  // No stored config found, so return null
  if (loading || !finalConfig()) return null

  // Build context value
  const contextValue = { ...finalConfig(), visualizationKey }

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>
}

export const useVisConfig = () => {
  const { visualizationKey, ...config } = useContext(ConfigContext)

  const [, startTransition ] = useTransition()

  // Actions -------------------------------------------------------------------------------------------------------
  const storeUpdateVisConfig = useStore(state => state.updateVisConfig)
  const storeUpdateVisConfigField = useStore(state => state.updateVisConfigField)

  // Action Proxies ------------------------------------------------------------------------------------------------
  const updateVisConfig = useCallback(
    updates => {
      startTransition(() => storeUpdateVisConfig(visualizationKey, updates))
    },
    [ storeUpdateVisConfig, visualizationKey ]
  )

  const updateVisConfigField = useCallback(
    (fieldPayload, setValue, merge = true) => {
      startTransition(() => storeUpdateVisConfigField(visualizationKey, fieldPayload, setValue, merge))
    },
    [ storeUpdateVisConfigField, visualizationKey ]
  )
  // ---------------------------------------------------------------------------------------------------------------

  return {
    config,
    visualizationKey,
    updateVisConfig,
    updateVisConfigField
  }
}
