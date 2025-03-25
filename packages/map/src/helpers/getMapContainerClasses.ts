import { type MapConfig } from './../types/MapConfig'

export const getMapContainerClasses = (state: MapConfig, modal) => {
  const { general } = state

  let mapContainerClasses = [
    'map-container',
    state.legend?.position,
    state.general.type,
    state.general.geoType,
    'outline-none'
  ]

  if (modal) {
    mapContainerClasses.push('modal-background')
  }

  if (general.type === 'navigation' && true === general.fullBorder) {
    mapContainerClasses.push('full-border')
  }
  return mapContainerClasses
}
