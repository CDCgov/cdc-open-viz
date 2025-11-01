/**
 * Shared color palette configuration used across visualizations
 */
export interface Palette {
  /** Name of the color palette */
  name?: string
  /** Version of the palette */
  version?: string
  /** Whether palette colors are reversed */
  isReversed?: boolean
  /** Custom color array when using custom palette */
  customColors?: string[]
}
