import ConfigContext, { MapDispatchContext } from '../context'
import { navigationHandler } from '../helpers'
import { useContext } from 'react'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

const useGeoClickHandler = () => {
  const {
    config: state,
    setConfig,
    setSharedFilter,
    customNavigationHandler,
    interactionLabel
  } = useContext(ConfigContext)
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

      // Track modal click analytics event
      if (interactionLabel) {
        const locationName = geoDisplayName.replace(/[^a-zA-Z0-9]/g, '_')
        publishAnalyticsEvent(`map_click_${locationName}`, 'click', interactionLabel, 'map', {
          title: state?.title || state?.general?.title
        })
      }

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (state.columns.navigate && geoData[state.columns.navigate.name]) {
      // Track navigation click analytics event
      if (interactionLabel) {
        const locationName = geoDisplayName.replace(/[^a-zA-Z0-9]/g, '_')
        publishAnalyticsEvent(`map_click_${locationName}`, 'click', interactionLabel, 'map', {
          title: state?.title || state?.general?.title,
          url: geoData[state.columns.navigate.name]
        })
      }

      navigationHandler(state.general.navigationTarget, geoData[state.columns.navigate.name], customNavigationHandler)
    }
  }

  return { geoClickHandler }
}

export default useGeoClickHandler
