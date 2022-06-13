import { useState, useEffect } from 'react'

//Context
import { useGlobalContext } from '../context/GlobalContext'
import { useConfigContext } from '../context/ConfigContext'

//Helpers
import DataTransform from '../helpers/DataTransform'

const useLoadConfig = (configObj, configUrl) => {
  const [ loaded, setLoaded ] = useState(false)

  const { view } = useGlobalContext()
  const { config, configActions } = useConfigContext()

  const transform = new DataTransform()

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching config data')
      let response = configObj || await (await fetch(configUrl)).json()

      // If data is included through a URL, fetch that and store
      let data = response.formattedData || response.data || {}

      if (response.dataUrl) {
        const dataString = await fetch(response.dataUrl)

        data = await dataString.json()
        if (response.dataDescription) {
          data = transform.autoStandardize(data)
          data = transform.developerStandardize(data, response.dataDescription)
        }
      }

      let newConfig = { ...config, ...response }
      if (undefined === newConfig.table.show) newConfig.table.show = 'dashboard' === view

      configActions.updateConfig(newConfig, data)
    }

    if (!loaded) {
      setLoaded(true)
      fetchData().catch(console.error)
    }
  }, [ loaded ])

  const reloadConfig = () => setLoaded(false)

  return [ reloadConfig ]
}

export default useLoadConfig
