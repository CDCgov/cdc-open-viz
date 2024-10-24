import { createContext } from 'react'
import { MapConfig } from './types/MapConfig'

type MapContext = {
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
  handleMapAriaLabels
  handleCircleClick: Function
  hasZoom
  innerContainerRef
  isDashboard
  isDebug
  isEditor
  // div that has aria-live region set to assertive
  liveRegionRef: React.RefObject<HTMLDivElement>
  loadConfig
  navigationHandler
  position
  resetLegendToggles
  runtimeFilters
  runtimeLegend
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
  tooltipId: string
  viewport
  setShowTooltip: Function
}

const ConfigContext = createContext({} as MapContext)

export default ConfigContext
