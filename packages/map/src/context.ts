import { createContext } from 'react'
import { MapConfig } from './types/MapConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

type MapContext = {
  applyLegendToRow
  applyTooltipsToGeo
  closeModal
  columnsInData
  currentViewport
  data
  dashboardConfig: DashboardConfig
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
  tooltipId: string
  viewport
}

const ConfigContext = createContext({} as MapContext)

export default ConfigContext
