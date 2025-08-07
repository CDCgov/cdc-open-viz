import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import ConfigContext, { MapDispatchContext } from '../context'
import { navigationHandler } from '../helpers'
import { useContext } from 'react'

const useGeoClickHandler = () => {
  const { config: state, setConfig, setSharedFilter, customNavigationHandler, interactionLabel } = useContext(ConfigContext)
  const dispatch = useContext(MapDispatchContext)

  const geoClickHandler = (geoDisplayName: string, geoData: object): void => {
    if (setSharedFilter) {
      setSharedFilter(state.uid, geoData)
    }

    // If world-geocode map zoom to geo point
    if (['world-geocode'].includes(state.general.type)) {
      const lat = geoData[state.columns.latitude.name]
      const long = geoData[state.columns.longitude.name]

      setConfig({
        ...state,
        mapPosition: { coordinates: [long, lat], zoom: 3 }
      })
    }

    // If modals are set, or we are on a mobile viewport, display modal
    if (window.matchMedia('(any-hover: none)').matches || 'click' === state.tooltips.appearanceType) {
      const modalData = {
        geoName: geoDisplayName,
        keyedData: geoData
      }
      dispatch({ type: 'SET_MODAL', payload: modalData })
      publishAnalyticsEvent('map_tooltip', 'click', `${interactionLabel}|${geoDisplayName}`, 'map')


      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (state.columns.navigate && geoData[state.columns.navigate.name]) {
      navigationHandler(state.general.navigationTarget, geoData[state.columns.navigate.name], customNavigationHandler)
      publishAnalyticsEvent('map_tooltip', 'click', `${interactionLabel}|${geoDisplayName}`, 'map')
    }
  }

  return { geoClickHandler }
}

export default useGeoClickHandler
