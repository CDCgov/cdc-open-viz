import { LegendGrouping } from './MapLegend'

/**
 * Hex map configuration settings
 * Controls how hexagonal tile maps are displayed and styled
 */
export type HexMapSettings = {
  /** Type of hex map display */
  type: 'shapes' | 'standard'
  /** Shape-based legend groupings for hex maps */
  shapeGroups: LegendGrouping[]
}
