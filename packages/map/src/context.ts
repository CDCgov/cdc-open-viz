import { createContext } from 'react'
import { MapConfig } from './types/MapConfig'

type MapContext = {
  container
  setSharedFilter
  setModal
  customNavigationHandler
  tooltipRef
  containerEl
  applyLegendToRow
  applyTooltipsToGeo
  data
  displayGeoName
  filteredCountryCode
  generateColorsArray
  generateRuntimeData
  geoClickHandler
  handleCircleClick: Function
  hasZoom
  innerContainerRef
  isDashboard
  isDebug
  isEditor
  loadConfig
  position
  resetLegendToggles
  runtimeFilters
  runtimeLegend
  setAccessibleStatus
  setFilteredCountryCode
  setParentConfig
  setPosition
  setRuntimeData
  setRuntimeFilters
  setRuntimeLegend
  setSharedFilterValue
  setState
  state: MapConfig
  tooltipId: string
}

const ConfigContext = createContext({} as MapContext)

export default ConfigContext
