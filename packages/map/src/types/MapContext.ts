import { DataRow, type MapConfig } from './MapConfig'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { type RefObject } from 'react'

export type MapContext = {
  currentViewport: ViewPort
  content: { geoName: string; keyedData: Record<string, any> }
  dimensions: DimensionsType
  displayDataAsText: string | number
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
  isDashboard: boolean
  isEditor: boolean
  isFilterValueSupported: boolean
  loadConfig: (configObj: MapConfig) => void
  logo: string
  mapId: string
  position: 'side' | 'top' | 'bottom'
  resetLegendToggles: Function
  runtimeFilters: Function
  runtimeLegend
  setParentConfig: Function
  setRuntimeData: Function
  setSharedFilterValue: Function
  setConfig: (newState: MapConfig) => MapConfig
  config: MapConfig
  viewport: ViewPort
  statesToShow: string[]
  scale: number
  translate: [number, number]
  topoData: object
  runtimeData: Object[]
  tooltipId: string
  interactionLabel?: string
}
