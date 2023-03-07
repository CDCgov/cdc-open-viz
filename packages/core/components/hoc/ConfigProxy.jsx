import React, { createContext, useState, useEffect, useCallback, useContext, Suspense } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Hooks
import useSetConfig from '../../hooks/store/useSetConfig'
import useSetVizConfigDefaults from '../../hooks/store/useSetVizConfigDefaults'

// Components - Core
import RenderFallback from '../loader/RenderFallback'

// Store
import useStore from '../../store/store'
// import configSlice from '../../store/config/configSlice'
// import visualizationSlice from '../../store/visualization/visualizationSlice'

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
  // const [ isLoading, setIsLoading ] = useState(true)     // TODO: still likely needed, but how/when to implement resolve using the hooks?

  const subVizConfig = useSetVizConfigDefaults(visualizationKey, defaults) // If consumed by Wizard or Dashboard, set the defaults for the visualization config
  const vizConfig = useSetConfig(configObj, configUrl, defaults, visualizationKey) // If a standalone component, set the config to the root\

  const getConfigObj = useCallback(() => {
    if (visualizationKey) return subVizConfig
    return vizConfig
  }, [subVizConfig, vizConfig])

  return (
    <Suspense fallback={<RenderFallback/>}>
      <ConfigStoreContext.Provider value={getConfigObj()}>
        {/*{!isLoading && children}*/}
        {children}
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
