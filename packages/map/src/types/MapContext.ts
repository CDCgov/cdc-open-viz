import { type MapConfig, type ViewportSize } from './MapConfig'

export type MapContext = {
  applyLegendToRow
  applyTooltipsToGeo
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
  hasZoom
  innerContainerRef
  isDashboard
  isDebug
  isEditor
  isFilterValueSupported: boolean
  loadConfig
  logo: string
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
}
