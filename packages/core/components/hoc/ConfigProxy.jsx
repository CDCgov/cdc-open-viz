import React, { useEffect, Suspense } from 'react'

// Third Party
import PropTypes from 'prop-types'

// Store
import useConfigStore from '../../stores/configStore'
import RenderFallback from '../loader/RenderFallback'

const ConfigProxy = ({ configObj, configUrl, setParentConfig, defaults = null, runtime = null, children }) => {
  // Store Selectors
  const { fetchConfig, processConfigDefaults, runConfigUpdater } = useConfigStore(state => state)

  useEffect(() => {
    fetchConfig(configObj, configUrl) // Get initial configObj, or object from configUrl
    processConfigDefaults(defaults) // Update the config with defaults
    runConfigUpdater() // Run the updater for config entry maintenance
  }, [configObj, configUrl, defaults, fetchConfig, processConfigDefaults, runConfigUpdater])

  return (
    <Suspense fallback={<RenderFallback/>}>
      {children}
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
