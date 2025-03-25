import ConfigContext from '../context'
import { navigationHandler } from '../helpers'
import { useContext } from 'react'

const useGeoClickHandler = () => {
  const { state, setState, setModal, setSharedFilter, customNavigationHandler } = useContext(ConfigContext)

  const geoClickHandler = (geoDisplayName: string, geoData: object) => {
    if (setSharedFilter) {
      setSharedFilter(state.uid, geoData)
    }

    // If world-geocode map zoom to geo point
    if (['world-geocode'].includes(state.general.type)) {
      const lat = geoData[state.columns.latitude.name]
      const long = geoData[state.columns.longitude.name]

      setState({
        ...state,
        mapPosition: { coordinates: [long, lat], zoom: 3 }
      })
    }

    // If modals are set, or we are on a mobile viewport, display modal
    if (window.matchMedia('(any-hover: none)').matches || 'click' === state.tooltips.appearanceType) {
      setModal({
        geoName: geoDisplayName,
        keyedData: geoData
      })

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (state.columns.navigate && geoData[state.columns.navigate.name]) {
      navigationHandler(state.general.navigationTarget, geoData[state.columns.navigate.name], customNavigationHandler)
    }
  }

  return { geoClickHandler }
}

export default useGeoClickHandler
