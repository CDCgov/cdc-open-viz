import { createContext, Dispatch } from 'react'
import { MapConfig } from './types/MapConfig'
import MapActions from './store/map.actions'

type MapContext = {
  container
  setSharedFilter
  customNavigationHandler
  tooltipRef
  containerEl
  applyLegendToRow
  data
  displayGeoName
  filteredCountryCode
  generateColorsArray
  generateRuntimeData
  geoClickHandler
  handleCircleClick: Function
  innerContainerRef
  isDashboard
  isEditor
  mapId: string
  loadConfig
  position
  resetLegendToggles
  runtimeFilters
  runtimeLegend
  setParentConfig
  setRuntimeData
  setRuntimeFilters
  setRuntimeLegend
  setSharedFilterValue
  setConfig: Function
  config: MapConfig
  tooltipId: string
  legendMemo
  legendSpecialClassLastMemo
  translate
  scale
  annotations
}

export const MapDispatchContext = createContext<Dispatch<MapActions>>(() => {})

const ConfigContext = createContext({} as MapContext)

export default ConfigContext
