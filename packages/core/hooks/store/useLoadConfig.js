import { useEffect, useState } from 'react'

// Store
import useStore from '../../store/store'

// Helpers
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'
import coveUpdateWorker from '../../helpers/update/coveUpdateWorker'

export const useLoadConfig = ({ config: configObj, configUrl, visualizationKey } = {}, defaultConfig = {}) => {
  const [ isLoading, setIsLoading ] = useState(true)

  const setConfig = useStore(state => state.setConfig)
  const addVisualization = useStore(state => state.addVisualization)
  const getData = useStore(state => state.getData)

  useEffect(() => {
    const fetchConfig = async () => {
      let remoteConfigUrl = await fetchAsyncUrl(configUrl) || {}

      await setConfig({ ...coveUpdateWorker({ ...defaultConfig, ...configObj ?? remoteConfigUrl }) }) // Run update worker on config, then set in store
      await getData(configObj ?? remoteConfigUrl) // Get initial data off config and put in store
    }

    if (visualizationKey) {
      addVisualization(visualizationKey, { ...defaultConfig, ...configObj })
      setIsLoading(false)
    } else {
      void fetchConfig().then(() => setIsLoading(false))
    }
  }, [ configObj, configUrl ])

  return [ isLoading ]
}
