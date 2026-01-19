/**
 * Color palette types for visualizations
 */

/**
 * A single color palette - an array of color hex strings
 */
export type ColorPalette = string[]

/**
 * Collection of named color palettes
 */
export type ColorPalettes = Record<string, ColorPalette>

/**
 * Versioned color palettes structure (v1, v2, etc.)
 */
export type VersionedColorPalettes = {
  v1: ColorPalettes
  v2: ColorPalettes
  [version: string]: ColorPalettes
}

/**
 * Palette configuration embedded in visualization configs
 */
export type PaletteConfig = {
  /** Name of the palette to use */
  name?: string
  /** Palette version (1, 2, etc.) */
  version?: string
  /** Whether the palette colors should be reversed */
  isReversed?: boolean
  /** Custom colors override for the palette */
  customColors?: string[]
  /** Custom colors in a specific order */
  customColorsOrdered?: string[]
}

/**
 * Two-color palette structure for divergent visualizations
 */
export type TwoColorPalette = Record<string, string[]>
