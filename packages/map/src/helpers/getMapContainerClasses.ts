import { type MapConfig } from './../types/MapConfig'
import { isMultiCountryActive } from './getCountriesPicked'
import { isBelowBreakpoint } from '@cdc/core/helpers/viewports'

export const getMapContainerClasses = (state: MapConfig, modal, currentViewport?: string) => {
  const { general } = state
  const legendWrapping =
    (state.legend?.position === 'left' || state.legend?.position === 'right') &&
    currentViewport &&
    (currentViewport === 'md' || isBelowBreakpoint('md', currentViewport))

  let mapContainerClasses = [
    'map-container',
    'visualization-container',
    legendWrapping ? 'legend-wrapped-bottom' : state.legend?.position,
    state.general.type,
    state.general.geoType,
    'outline-none',
    'position-relative'
  ]

  if (modal) {
    mapContainerClasses.push('modal-background')
  }

  if (general.type === 'navigation' && true === general.fullBorder) {
    mapContainerClasses.push('full-border')
  }

  // Add multi-country class when multi-country mode is active
  if (isMultiCountryActive(state)) {
    mapContainerClasses.push('multi-country-selected')
  }

  return mapContainerClasses
}
