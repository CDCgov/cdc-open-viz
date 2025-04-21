import { DataRow, type MapConfig } from './MapConfig'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import { VizFilter } from '@cdc/core/types/VizFilter'

export type MapContext = {
  currentViewport: ViewPort
  data: DataRow[]
  dimensions: DimensionsType
  displayDataAsText
  displayGeoName: (key: string, convertFipsCodes: boolean) => string
  filteredCountryCode: string
  generateRuntimeData: (
    configObj: MapConfig,
    filters: VizFilter[],
    hash: number,
    test?: boolean
  ) => { [uid: string]: DataRow }
  geoClickHandler: (geoDisplayName: string, geoData: object) => void
  handleCircleClick: Function
  handleDragStateChange: Function
  isDraggingAnnotation: boolean
  hasZoom
  innerContainerRef
  isDashboard: boolean
  isDebug: boolean
  isEditor: boolean
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
