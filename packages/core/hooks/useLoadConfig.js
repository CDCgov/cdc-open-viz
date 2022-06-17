import { useState, useEffect } from 'react'

//Context
import { useGlobalContext } from '../context/GlobalContext'
import { useConfigContext } from '../context/ConfigContext'

//Helpers
import DataTransform from '../helpers/DataTransform'

const useLoadConfig = (configObj, configUrlObj, defaults, runtime = null) => {
  const { view } = useGlobalContext()
  const { config, configActions } = useConfigContext()

  const [ loadingConfig, setLoadingConfig ] = useState(true)
  const [ cycle, setCycle ] = useState(false)

  const transform = new DataTransform()
  const reloadConfig = () => setCycle(false)

  useEffect(() => {
    configActions.setConfigDefaults({ ...defaults })

    const fetchConfig = async () => {
      const merge = require('lodash.merge')
      let response = configObj || await (await fetch(configUrlObj)).json()

      //Set data variable and check if included through a URL.
      //If so, fetch that data
      let data = response.formattedData || response.data || {}

      if (response.dataUrl) {
        const dataString = await fetch(response.dataUrl)

        data = await dataString.json()
        if (response.dataDescription) {
          data = transform.autoStandardize(data)
          data = transform.developerStandardize(data, response.dataDescription)
        }
      }

      //Push data to config context state
      configActions.setData(data)

      //Build the new config object, tie it all together
      let newConfig = merge(defaults, response)

      newConfig.data = data

      //Add any runtime entries (visualization specific) to the config
      if (runtime) runtime(newConfig, data)

      //Make config entry for table visibility - TODO: COVE Refactor - May no longer need with global context inclusion of view mode?
      if (undefined === newConfig.table.show) newConfig.table.show = 'dashboard' === view
      configActions.updateConfig(newConfig, data)
    }

    if (!cycle) {
      fetchConfig()
        .catch(console.error)
        .finally(()=>{
          setCycle(true)
          setLoadingConfig(false)
        })
    }
  }, [ cycle, configObj, configUrlObj ])

  useEffect(() => {
    reloadConfig()
  }, [ config ])

  return [ loadingConfig, reloadConfig ]
}

export default useLoadConfig
