import { useContext } from 'react'
import ConfigContext from '../context'
import { navigationHandler } from '../helpers/navigationHandler'

const geoClickHandler = (key, value) => {
  const { setSharedFilter, state, setState, setModal, customNavigationHandler } = useContext(ConfigContext)
  const { general } = state
  const latitudeColumnName: string = state.columns.latitude.name
  const longitudeColumnName: string = state.columns.longitude.name
  const navigationColumnName: string = state.columns.navigate?.name
  const explicitlySetModal: boolean = 'click' === state.tooltips.appearanceType
  const mobileViewport: boolean = window.matchMedia('(any-hover: none)').matches

  if (setSharedFilter) {
    setSharedFilter(state.uid, value)
  }

  // If world-geocode map zoom to geo point
  if (['world-geocode'].includes(general.type)) {
    const lat: number = value[latitudeColumnName]
    const long: number = value[longitudeColumnName]

    setState({
      ...state,
      mapPosition: { coordinates: [long, lat], zoom: 3 }
    })
  }

  if (mobileViewport || explicitlySetModal) {
    setModal({
      geoName: key,
      keyedData: value
    })

    return
  }

  // Otherwise if this item has a link specified for it, do regular navigation.
  if (state.columns.navigate && value[navigationColumnName]) {
    navigationHandler(state.general.navigationTarget, value[navigationColumnName], customNavigationHandler)
  }
}

export { geoClickHandler }
