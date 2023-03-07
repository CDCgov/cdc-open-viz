import { useEffect } from 'react'

// Store
import useStore from '../../store/store'

const useSetVizConfigDefaults = (visualizationKey, defaults, setIsLoading) => {
  const { visualizations, setConfigDefaults } = useStore()

  useEffect(() => {
    if (visualizationKey && defaults) setConfigDefaults(defaults, visualizationKey)
  }, [ visualizationKey, defaults ])

  if (visualizationKey) {
    setIsLoading(false)
    return visualizations[visualizationKey]
  }

  return visualizationKey ? visualizations[visualizationKey] : null
}

export default useSetVizConfigDefaults
