/**
 * Configuration settings for Horizon Chart visualization
 *
 * Horizon charts display multiple time series as stacked rows,
 * with each series shown as layered bands to compress vertical space.
 */

/**
 * Palette configuration structure (matches general.palette structure)
 */
export type HorizonPalette = {
  name?: string
  version?: '1.0' | '2.0'
  isReversed?: boolean
  customColors?: string[]
  customColorsOrdered?: string[]
}

export type HorizonConfigSettings = {
  /**
   * Number of horizon layers/bands per series
   * More layers = finer granularity, but denser visual
   * @default 4
   */
  numLayers: number

  /**
   * Rendering mode for data values
   * - 'offset': All values treated as positive (absolute values)
   * - 'mirror': Negative values mirrored with contrasting colors. Not currently used.
   * @default 'offset'
   */
  mode: 'offset' | 'mirror'

  /**
   * Gap in pixels between series bands
   * Bands will fill available chart height minus gaps
   * @default 15
   */
  bandGap: number

  /**
   * Padding in pixels below the bottom band (above x-axis)
   * @default 15
   */
  bottomPadding: number

  /**
   * Optional secondary palette for negative values (mirror mode only)
   * Uses same structure as general.palette for consistency
   * Not exposed in UI initially - scaffolded for future use
   */
  negativePalette?: HorizonPalette
}

/**
 * Default configuration for Horizon charts
 */
export const HORIZON_DEFAULTS: HorizonConfigSettings = {
  numLayers: 4,
  mode: 'offset',
  bandGap: 15,
  bottomPadding: 15
}
