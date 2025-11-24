import { type MapConfig } from './../types/MapConfig'
import { isMultiCountryActive } from './getCountriesPicked'

export const getMapContainerClasses = (state: MapConfig, modal) => {
  const { general } = state

  let mapContainerClasses = [
    'map-container',
    state.legend?.position,
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
