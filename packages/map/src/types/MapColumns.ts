import { type EditorColumnProperties } from '@cdc/core/types/EditorColumnProperties'

/**
 * Base column properties with name required, all others optional
 */
type BaseColumnProperties = Pick<EditorColumnProperties, 'name'> &
  Partial<Pick<EditorColumnProperties, 'label' | 'tooltip' | 'dataTable' | 'prefix' | 'suffix'>>

/**
 * Simple column type for name-only columns
 */
type SimpleColumnProperties = Pick<EditorColumnProperties, 'name'>

/**
 * Geographic/location column configuration
 * Used for identifying geographic regions (states, counties, countries, etc.)
 */
export type GeoColumnProperties = BaseColumnProperties

/**
 * Latitude coordinate column configuration
 * Used for geocoded/bubble maps
 */
export type LatitudeColumnProperties = SimpleColumnProperties

/**
 * Longitude coordinate column configuration
 * Used for geocoded/bubble maps
 */
export type LongitudeColumnProperties = SimpleColumnProperties

/**
 * Navigation URL column configuration
 * Contains URLs for click-through navigation
 */
export type NavigateColumnProperties = SimpleColumnProperties

/**
 * Primary data column configuration
 * The main data value to visualize on the map
 */
export type PrimaryColumnProperties = BaseColumnProperties

/**
 * Map column configuration structure
 * Defines all column mappings for map data
 */
export type MapColumns = {
  /** Geographic identifier column */
  geo: GeoColumnProperties
  /** Primary data value column */
  primary: PrimaryColumnProperties
  /** Navigation URL column */
  navigate: NavigateColumnProperties
  /** Latitude coordinate column (for geocoded maps) */
  latitude: LatitudeColumnProperties
  /** Longitude coordinate column (for geocoded maps) */
  longitude: LongitudeColumnProperties
  /** Categorical/classification column */
  categorical: { name: string }
}
