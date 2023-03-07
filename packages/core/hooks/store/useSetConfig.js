import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

// Store
import useStore from '../../store/store'

// Helpers
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'

const useSetConfig = (configObj, configUrl, defaults, visualizationKey = null) => {
  const config = useStore(state => state.config)
  const setConfig = useStore(state => state.setConfig)
  const setConfigDefaults = useStore(state => state.setConfigDefaults)
  const runConfigUpdater = useStore(state => state.runConfigUpdater)
  const getData = useStore(state => state.getData)

  async function fetchConfig() {
    let response = configObj || await fetchAsyncUrl(configUrl) || {}

    await setConfigDefaults(defaults) // Update the config with defaults

    setConfig(response) // Get initial configObj, or object from configUrl

    await getData(response) // Get initial data

    await runConfigUpdater() // Run the updater for config entry maintenance
  }

  useEffect(() => {
    if (!visualizationKey) fetchConfig().then(resolve => resolve)
  }, [configObj, configUrl, defaults, visualizationKey])

  return config
}

export default useSetConfig
