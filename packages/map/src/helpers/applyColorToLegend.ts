import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import chroma from 'chroma-js'
import { type MapConfig } from '../types/MapConfig'
import { colorDistributions } from './colorDistributions'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'

// Palette name migrations from v1 to v2
const mapPaletteNameMigrations = {
  yelloworangered: 'sequential_yellow_orange_red',
  yelloworangebrown: 'sequential_yellow_orange_brown',
  pinkpurple: 'sequential_pink_purple',
  pinkpurplereverse: 'sequential_pink_purplereverse',
  bluegreen: 'sequential_blue_green',
  bluegreenreverse: 'sequential_blue_greenreverse',
  orangered: 'sequential_orange_red',
  orangeredreverse: 'sequential_orange_redreverse',
  red: 'sequential_red',
  redreverse: 'sequential_redreverse',
  greenblue: 'sequential_green_blue',
  greenbluereverse: 'sequential_green_bluereverse',
  yelloworangeredreverse: 'sequential_yellow_orange_redreverse',
  yelloworangebrownreverse: 'sequential_yellow_orange_brownreverse',
  yellowpurple: 'divergent_yellow_purple',
  yellowpurplereverse: 'divergent_yellow_purplereverse',
  qualitative1: 'qualitative1',
  qualitative2: 'qualitative2',
  qualitative3: 'qualitative3',
  qualitative4: 'qualitative4',
  qualitative9: 'qualitative9',
  'sequential-blue-2(MPX)': 'sequential_blue_extended',
  'sequential-blue-2(MPX)reverse': 'sequential_blue_extendedreverse',
  'sequential-orange(MPX)': 'sequential_orange_extended',
  'sequential-orange(MPX)reverse': 'sequential_orange_extendedreverse',
  colorblindsafe: 'colorblindsafe',
  qualitative1reverse: 'qualitative1reverse',
  qualitative2reverse: 'qualitative2reverse',
  qualitative3reverse: 'qualitative3reverse',
  qualitative4reverse: 'qualitative4reverse',
  qualitative9reverse: 'qualitative9reverse',
  colorblindsafereverse: 'colorblindsafereverse'
}

type LegendItem = {
  special: boolean
}

/**
 * applyColorToLegend
 * @param legendIdx legend item index
 * @param config chart config
 * @param result hash of legend items
 * @returns string - the corresponding color for the legend item
 */
export const applyColorToLegend = (legendIdx: number, config: MapConfig, result: LegendItem[] = []): string => {
  if (!config) throw new Error('Config is required')

  const { legend, general } = config
  const { geoType, palette = { name: 'bluegreen', isReversed: false } } = general
  // Support both migrated (general.palette.name) and legacy (config.color) palette locations
  const version = getColorPaletteVersion(config)
  let color = general?.palette?.name || config.color || palette.name || 'bluegreen'

  // Apply palette migration if needed (v1 name -> v2 name)
  if (mapPaletteNameMigrations[color]) {
    color = mapPaletteNameMigrations[color]
  }

  const specialClasses = legend?.specialClasses ?? []

  // Try multiple approaches to find the palette
  let mapColorPalette = general?.palette?.customColors

  if (!mapColorPalette) {
    // Try the detected version first
    mapColorPalette = colorPalettes?.[`v${version}`]?.[color]
  }

  if (!mapColorPalette) {
    // Try v2 explicitly
    mapColorPalette = colorPalettes?.v2?.[color]
  }

  if (!mapColorPalette) {
    // Try v1 with original color name
    const originalColor = general?.palette?.name || config.color || palette.name || 'bluegreen'
    mapColorPalette = colorPalettes?.v1?.[originalColor]
  }

  if (!mapColorPalette) {
    // Final fallback
    mapColorPalette = colorPalettes.v1['bluegreen']
  }

  // Handle Region Maps need for a 10th color
  if (geoType === 'us-region' && mapColorPalette.length < 10 && mapColorPalette.length > 8) {
    const newColor = chroma(mapColorPalette[config.general.palette.isReversed ? 0 : 8])
      .darken(0.75)
      .hex()
    config.general.palette.isReversed ? mapColorPalette.unshift(newColor) : mapColorPalette.push(newColor)
  }

  const colorIdx = legendIdx - specialClasses.length

  // Handle special classes coloring
  if (result[legendIdx]?.special) {
    const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses.length)
    return specialClassColors[legendIdx]
  }

  // Use qualitative color palettes directly
  if (color.includes('qualitative')) return mapColorPalette[colorIdx]

  // Determine color distribution
  const amt =
    Math.max(result.length - specialClasses.length, 1) < 10
      ? Math.max(result.length - specialClasses.length, 1)
      : Object.keys(colorDistributions).length
  const distributionArray = colorDistributions[amt] ?? []

  // Safety check to ensure mapColorPalette exists and is an array
  if (!mapColorPalette || !Array.isArray(mapColorPalette) || mapColorPalette.length === 0) {
    console.warn('No valid color palette found, returning gray fallback')
    return '#d3d3d3'
  }

  const specificColor =
    distributionArray[legendIdx - specialClasses.length] ??
    mapColorPalette[colorIdx] ??
    mapColorPalette[mapColorPalette.length - 1]

  // Ensure specificColor is valid
  if (typeof specificColor === 'number' && specificColor < mapColorPalette.length) {
    return mapColorPalette[specificColor]
  } else if (typeof specificColor === 'string') {
    return specificColor
  }

  // Final fallback
  return mapColorPalette[0] || '#d3d3d3'
}
