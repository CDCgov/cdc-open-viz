import { useState, useEffect } from 'react'

//Context
import { useGlobalContext } from '../context/GlobalContext'
import { useConfigContext } from '../context/ConfigContext'

//Helpers
import DataTransform from '../helpers/DataTransform'

const useLoadConfig = (configObj, configUrlObj, defaults, runtime = null) => {
  const { view } = useGlobalContext()
  const { configActions, loadingConfig } = useConfigContext()

  const [ cycle, setCycle ] = useState(false)

  const transform = new DataTransform()
  const reloadConfig = () => setCycle(false)

  useEffect(() => {
    //Store the default config context object in ConfigContext
    configActions.setConfigDefaults({ ...defaults })

    const fetchConfig = async () => {
      //Check if "data" is included through a URL, or directly, and set value
      let response = configObj || await (await fetch(configUrlObj)).json()
      let responseData = response.formattedData || response.data || {}

      //If a data URL is provided, fetch data then return. Overrides any previous data set.
      if (response.dataUrl) {
        const dataString = await fetch(response.dataUrl)
        responseData = await dataString.json()

        //If data from the URL has a "data description", use the standardization functions on that returned data
        if (response.dataDescription) {
          responseData = transform.autoStandardize(responseData)
          responseData = transform.developerStandardize(responseData, response.dataDescription)
        }
      }

      //Create the new config object with defaults and data
      let newConfig = { ...defaults, ...response }

      //Create new keys on newConfig from defaults that don't exist
      Object.keys(defaults).forEach(key => {
        if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
          newConfig[key] = { ...defaults[key], ...newConfig[key] }
        }
      })

      newConfig.data = responseData //Attach data to newConfig

      //Make config entry for table visibility - TODO: COVE Refactor - May no longer need with global context inclusion of view mode?
      if (undefined === newConfig.table.show) newConfig.table.show = 'dashboard' === view

      configActions.setData(newConfig.data) //Push data to ConfigContext
      return newConfig
    }

    if (!cycle) {
      fetchConfig()
        .then((newConfig)=>{
          configActions.updateConfig(newConfig, runtime) //Sets final config data in ConfigContext
          configActions.setLoadingConfig(false) //Tells subcomponents that the config is ready
        })
        .catch(console.error)
        .finally(() => {
            setCycle(true) //Switch to end the useLoadConfig cycle
        })
    }
  }, [ cycle, configObj, configUrlObj ])

  return [ loadingConfig, reloadConfig ]
}

export default useLoadConfig
