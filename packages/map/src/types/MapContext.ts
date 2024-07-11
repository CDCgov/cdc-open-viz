import { type MapConfig } from './MapConfig'

export type MapContext = {
  applyLegendToRow
  applyTooltipsToGeo
  closeModal
  columnsInData
  currentViewport
  data
  displayDataAsText
  displayGeoName
  filteredCountryCode
  generateColorsArray
  generateRuntimeData
  geoClickHandler
  handleCircleClick: Function
  handleDragStateChange: Function
  isDraggingAnnotation: boolean
  handleMapAriaLabels
  hasZoom
  innerContainerRef
  isDashboard
  isDebug
  isEditor
  loadConfig
  navigationHandler
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
  supportedCities
  supportedCounties
  supportedCountries
  supportedTerritories
  titleCase
  viewport
}
