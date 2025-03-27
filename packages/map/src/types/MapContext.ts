import { type MapConfig } from './MapConfig'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { DimensionsType } from '@cdc/core/types/Dimensions'

export type MapContext = {
  currentViewport: ViewPort
  data
  dimensions: DimensionsType
  displayDataAsText
  displayGeoName
  filteredCountryCode
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
  setState: (newState: MapConfig) => MapConfig
  state: MapConfig
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
