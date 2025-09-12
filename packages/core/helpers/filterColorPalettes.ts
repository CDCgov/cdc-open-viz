import { getColorPaletteVersion } from './getColorPaletteVersion'
import { chartColorPalettes, twoColorPalette } from '../data/colorPalettes'

export interface FilterColorPalettesOptions {
  config: any
  isReversed?: boolean
  colorPalettes?: any
  visualizationType?: string
}

export interface FilteredPalettes {
  sequential: string[]
  nonSequential: string[]
  accessibleColors: string[]
  twoColorPalettes?: string[]
}

/**
 * Universal color palette filtering function that works across all visualization types
 * Combines chart and map palette filtering logic with backwards compatibility
 */
export const filterColorPalettes = ({
  config,
  isReversed,
  colorPalettes,
  visualizationType
}: FilterColorPalettesOptions): FilteredPalettes => {
  // Use provided colorPalettes or fall back to chart palettes
  const palettes = colorPalettes || chartColorPalettes
  const version = getColorPaletteVersion(config)
  const versionKey = `v${version}`
  const currentPalettes = palettes[versionKey] || palettes.v2

  // Handle two-color palettes for specific chart types
  if (visualizationType === 'Paired Bar' || visualizationType === 'Deviation Bar') {
    const twoColorPalettes = filterTwoColorPalettes(currentPalettes, isReversed)
    return {
      sequential: [],
      nonSequential: [],
      accessibleColors: [],
      twoColorPalettes
    }
  }

  // Handle regular palette filtering
  const isReversedFromConfig = isReversed !== undefined
    ? isReversed
    : config.general?.palette?.isReversed

  return filterRegularPalettes(currentPalettes, version, isReversedFromConfig)
}

/**
 * Filter two-color palettes (for Paired Bar and Deviation Bar charts)
 */
function filterTwoColorPalettes(_palettes: any, isReversed?: boolean): string[] {
  // Use the imported twoColorPalette directly
  return Object.keys(twoColorPalette).filter(name =>
    isReversed ? name.endsWith('reverse') : !name.endsWith('reverse')
  )
}

/**
 * Filter regular palettes (sequential, non-sequential, accessible)
 */
function filterRegularPalettes(palettes: any, version: number, isReversed?: boolean): FilteredPalettes {
  const sequential: string[] = []
  const nonSequential: string[] = []
  const accessibleColors: string[] = []

  for (const paletteName in palettes) {
    const isPaletteReversed = paletteName.endsWith('reverse')
    const matchesReversed = (!isReversed && !isPaletteReversed) || (isReversed && isPaletteReversed)

    if (version === 1) {
      filterV1Palette(paletteName, matchesReversed, sequential, nonSequential, accessibleColors)
    } else {
      filterV2Palette(paletteName, matchesReversed, sequential, nonSequential, accessibleColors)
    }
  }

  return { sequential, nonSequential, accessibleColors }
}

/**
 * Filter V1 palettes using original chart logic
 */
function filterV1Palette(
  paletteName: string,
  matchesReversed: boolean,
  sequential: string[],
  nonSequential: string[],
  accessibleColors: string[]
): void {
  if (!matchesReversed) return

  if (paletteName.startsWith('sequential')) {
    sequential.push(paletteName)
  } else if (paletteName.startsWith('qualitative') && !paletteName.startsWith('colorblindsafe')) {
    nonSequential.push(paletteName)
  } else if (paletteName.startsWith('colorblindsafe') || paletteName.includes('colorblindsafe')) {
    accessibleColors.push(paletteName)
  }
}

/**
 * Filter V2 palettes using updated logic for new palette structure
 */
function filterV2Palette(
  paletteName: string,
  matchesReversed: boolean,
  sequential: string[],
  nonSequential: string[],
  accessibleColors: string[]
): void {
  if (!matchesReversed) return

  if (paletteName.startsWith('sequential')) {
    sequential.push(paletteName)
  } else if (paletteName.startsWith('divergent')) {
    nonSequential.push(paletteName)
  } else if (paletteName.includes('colorblindsafe') || paletteName.startsWith('qualitative-standard')) {
    accessibleColors.push(paletteName)
  } else if (paletteName.startsWith('qualitative') && !paletteName.includes('colorblindsafe')) {
    // V2 qualitative palettes go to accessible colors if they're standard
    if (paletteName.includes('standard')) {
      accessibleColors.push(paletteName)
    }
  }
}

/**
 * Legacy function for backwards compatibility with chart package
 */
export const filterChartColorPalettes = (config: any) => {
  const version = config?.general?.palette?.version || '2.0'

  if (version === '1.0') {
    return chartColorPalettes.v1
  }

  if (version === '2.0') {
    return chartColorPalettes.v2
  }

  return chartColorPalettes.v2
}