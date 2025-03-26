import { createContext } from 'react'
import { MapConfig } from './types/MapConfig'

type MapContext = {
  setRequiredColumns
  container
  setSharedFilter
  setModal
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
  legendMemo
  legendSpecialClassLastMemo
  translate
  scale
}

const ConfigContext = createContext({} as MapContext)

export default ConfigContext
