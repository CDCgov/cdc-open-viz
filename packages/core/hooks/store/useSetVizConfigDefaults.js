import { useEffect } from 'react'

// Store
import useStore from '../../store/store'

const useSetVizConfigDefaults = (visualizationKey, defaults) => {
  const visualizations = useStore(state => state.visualizations)
  const setConfigDefaults = useStore(state => state.setConfigDefaults)

  useEffect(() => {
    if (visualizationKey && defaults) setConfigDefaults(defaults, visualizationKey)
  }, [visualizationKey, defaults, setConfigDefaults])


  return visualizationKey ? visualizations[visualizationKey] : null
}

export default useSetVizConfigDefaults
