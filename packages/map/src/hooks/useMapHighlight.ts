import { useContext } from 'react'
import ConfigContext from '../context'
import { createMapHighlight, isSupportedMapHighlightValue } from '../helpers/mapHighlight'

export default function useMapHighlight() {
  const { config, selectedLocationId, setSharedFilterValue, isFilterValueSupported } = useContext(ConfigContext)
  // Preserve the existing US dashboard scope; world maps previously only highlighted selector choices.
  const dashboardHighlightActive = Boolean(
    setSharedFilterValue &&
      (config.general.geoType === 'us'
        ? isSupportedMapHighlightValue(setSharedFilterValue)
        : config.general.geoType !== 'world' && isFilterValueSupported)
  )
  return createMapHighlight({ selectedLocationId, sharedFilterValue: setSharedFilterValue, dashboardHighlightActive })
}
