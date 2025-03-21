import { useContext } from 'react'
import ConfigContext from '../context'
import { navigationHandler } from '../helpers/navigationHandler'

const geoClickHandler = (key, value) => {
  const { setSharedFilter, state, setState, setModal, customNavigationHandler } = useContext(ConfigContext)

  if (setSharedFilter) {
    setSharedFilter(state.uid, value)
  }

  // If world-geocode map zoom to geo point
  if (['world-geocode'].includes(state.general.type)) {
    const lat = value[state.columns.latitude.name]
    const long = value[state.columns.longitude.name]

    setState({
      ...state,
      mapPosition: { coordinates: [long, lat], zoom: 3 }
    })
  }

  // If modals are set, or we are on a mobile viewport, display modal
  if (window.matchMedia('(any-hover: none)').matches || 'click' === state.tooltips.appearanceType) {
    setModal({
      geoName: key,
      keyedData: value
    })

    return
  }

  // Otherwise if this item has a link specified for it, do regular navigation.
  if (state.columns.navigate && value[state.columns.navigate.name]) {
    navigationHandler(state.general.navigationTarget, value[state.columns.navigate.name], customNavigationHandler)
  }
}

export { geoClickHandler }
