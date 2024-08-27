import { type MapConfig, type ViewportSize } from './MapConfig'

export type MapContext = {
  applyLegendToRow
  applyTooltipsToGeo
  closeModal
  columnsInData
  currentViewport: ViewportSize
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
  isFilterValueSupported: boolean
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
  setStateToShow: (string) => void
  stateToShow: string
  scale: number
  translate: [number, number]
  topoData
  setScale: (number) => void
  setTranslate: ([x, y]: [number, number]) => void
  runtimeData: Object[]
  tooltipId: string
  setTopoData: Function
  getTextWidth: (text: string, font: string) => string | undefined
}
