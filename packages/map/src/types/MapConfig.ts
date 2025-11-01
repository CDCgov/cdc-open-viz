import { type BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { type VizFilter } from '@cdc/core/types/VizFilter'
import { type Annotation } from '@cdc/core/types/Annotation'
import { EditorPanel_MarkupVariables } from '@cdc/core/types/EditorPanel_MarkupVariables'
import { MapVisual } from './MapVisual'
import { MapLegend } from './MapLegend'
import { MapTable } from './MapTable'
import { MapColumns } from './MapColumns'
import { MapGeneral } from './MapGeneral'
import { HexMapSettings } from './MapHexSettings'
import { PatternSelection } from './MapPattern'
import { MapTooltips } from './MapTooltips'

// Runtime data types
export type RuntimeFilters = VizFilter[] & { fromHash?: number }

/** Coordinate tuple for map positioning [longitude, latitude] */
export type Coordinate = [number, number]

export type DataRow = {
  uid?: string // optional 'uid' property
  [key: string]: string | number | boolean | null | undefined // allowing primitive data types for dynamic columns
}

/**
 * Configuration interface for Map visualizations.
 * Extends BaseVisualizationConfig with map-specific properties.
 */
export interface MapConfig extends BaseVisualizationConfig, EditorPanel_MarkupVariables {
  // Override base properties to be more specific or required
  type: 'map'
  data: (DataRow[] & { fromColumn?: string }) | DataRow[]
  filters: VizFilter[]

  // Override visual to use map-specific visual configuration
  visual: MapVisual

  // Map-specific properties
  annotations: Annotation[]
  /** Map color palette */
  color: string
  /** Column mappings for map data */
  columns: MapColumns
  /** URL for loading runtime data */
  runtimeDataUrl: string
  /** General map configuration */
  general: MapGeneral
  /** Legend configuration */
  legend: MapLegend
  /** Data table configuration */
  table: MapTable
  /** Tooltip configuration */
  tooltips: MapTooltips
  /** Runtime state and error tracking */
  runtime: {
    editorErrorMessage: string[]
  }
  /** Map position and zoom level */
  mapPosition: { coordinates: Coordinate; zoom: number }
  /** Map layer and pattern configuration */
  map: {
    layers: { url: any; namespace: any; fill: any; fillOpacity: any; stroke: any; strokeWidth: any; tooltip: any }[]
    patterns: PatternSelection[]
  }
  /** Hex map configuration */
  hexMap: HexMapSettings
  /** Filter behavior setting */
  filterBehavior: string
  /** Intro text for filters */
  filterIntro: string
}
