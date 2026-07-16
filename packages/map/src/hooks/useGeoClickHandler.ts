import ConfigContext, { MapDispatchContext } from '../context'
import { navigationHandler } from '../helpers/navigationHandler'
import { useContext } from 'react'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle } from '@cdc/core/helpers/metrics/utils'
import { getConfiguredBubbleLayers } from '../helpers/bubbleLayers'

const useGeoClickHandler = () => {
  const {
    config: state,
    setConfig,
    setSharedFilter,
    clearSharedFilter,
    hasActiveSharedFilter,
    setSharedFilterValue,
    customNavigationHandler,
    interactionLabel
  } = useContext(ConfigContext)
  const dispatch = useContext(MapDispatchContext)

  const geoClickHandler = (geoDisplayName: string, geoData: object): void => {
    if (setSharedFilter) {
      // Get the column name for the filter (from dashboardFilters config)
      const filterColumnName = state.dashboardFilters?.[0]?.columnName || state.columns?.geo?.name
      const clickedValue = filterColumnName ? geoData[filterColumnName] : geoDisplayName

      // Toggle behavior: if the clicked value matches the current filter value, clear it
      if (hasActiveSharedFilter && setSharedFilterValue === clickedValue && clearSharedFilter) {
        clearSharedFilter(state.uid)
      } else {
        setSharedFilter(state.uid, geoData)
      }
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

    // Bubble maps do not support click tooltip modals; bubble clicks have their own map behavior.
    if ('click' === state.tooltips.appearanceType && !getConfiguredBubbleLayers(state).length) {
      const modalData = {
        geoName: geoDisplayName,
        keyedData: geoData
      }
      dispatch({ type: 'SET_MODAL', payload: modalData })

      // Track modal click analytics event
      if (interactionLabel) {
        const locationName = geoDisplayName.replace(/[^a-zA-Z0-9]/g, '_')
        publishAnalyticsEvent({
          vizType: 'map',
          eventType: `modal_trigger` as any,
          eventAction: 'click',
          eventLabel: interactionLabel,
          vizTitle: getVizTitle(state),
          specifics: `clicked on: ${String(locationName).toLowerCase()}`
        })
      }

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (state.columns.navigate && geoData[state.columns.navigate.name]) {
      // Track navigation click analytics event
      if (interactionLabel) {
        const locationName = geoDisplayName.replace(/[^a-zA-Z0-9]/g, '_')
        publishAnalyticsEvent({
          vizType: 'map',
          eventType: `map_trigger` as any,
          eventAction: 'click',
          eventLabel: interactionLabel,
          vizTitle: getVizTitle(state),
          specifics: `clicked on: ${String(locationName).toLowerCase()}`
        })
      }

      navigationHandler(state.general.navigationTarget, geoData[state.columns.navigate.name], customNavigationHandler)
    }
  }

  return { geoClickHandler }
}

export default useGeoClickHandler
