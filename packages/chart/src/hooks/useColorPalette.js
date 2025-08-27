import { twoColorPalette } from '@cdc/core/data/colorPalettes'
import { filterChartColorPalettes } from '../helpers/filterChartColorPalettes'
import { useEffect } from 'react'

export const useColorPalette = (config, updateConfig) => {
  let twoColorPalettes = []
  let sequential = []
  let nonSequential = []
  const accessibleColors = []

  // Get version-specific color palettes
  const colorPalettesChart = filterChartColorPalettes(config)

  // Get two color palettes if visualization type is Paired Bar
  if (config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar') {
    const isReversed = config.twoColor.isPaletteReversed
    twoColorPalettes = Object.keys(twoColorPalette).filter(name =>
      isReversed ? name.endsWith('reverse') : !name.endsWith('reverse')
    )
  } else {
    // Get sequential and non-sequential palettes for other visualization types
    const currentVersion = config.general?.palette?.version || '1.0'
    const isReversed = config.general?.palette?.isReversed

    if (currentVersion === '1.0') {
      // V1 Logic: Filter by existing v1 palette patterns
      sequential = filterV1Palettes(colorPalettesChart, 'sequential', isReversed)
      nonSequential = filterV1Palettes(colorPalettesChart, 'qualitative', isReversed)
      accessibleColors.push(...filterV1Palettes(colorPalettesChart, 'colorblindsafe', isReversed))
    } else {
      // V2 Logic: Filter by new v2 palette patterns
      sequential = filterV2Palettes(colorPalettesChart, 'sequential', isReversed)
      nonSequential = filterV2Palettes(colorPalettesChart, 'nonsequential', isReversed) // qualitative + divergent
      accessibleColors.push(...filterV2Palettes(colorPalettesChart, 'colorblindsafe', isReversed))
    }
  }

  // Helper function for v1 palette filtering
  function filterV1Palettes(palettes, type, isReversed) {
    const results = []
    for (const paletteName in palettes) {
      const isPaletteReversed = paletteName.endsWith('reverse')
      const matchesReversed = (!isReversed && !isPaletteReversed) || (isReversed && isPaletteReversed)

      if (type === 'sequential' && paletteName.startsWith('sequential') && matchesReversed) {
        results.push(paletteName)
      } else if (type === 'qualitative' && paletteName.startsWith('qualitative') && matchesReversed) {
        results.push(paletteName)
      } else if (type === 'colorblindsafe' && paletteName.startsWith('colorblindsafe') && matchesReversed) {
        results.push(paletteName)
      }
    }
    return results
  }

  // Helper function for v2 palette filtering
  function filterV2Palettes(palettes, type, isReversed) {
    const results = []
    for (const paletteName in palettes) {
      const isPaletteReversed = paletteName.endsWith('reverse')
      const matchesReversed = (!isReversed && !isPaletteReversed) || (isReversed && isPaletteReversed)

      if (type === 'sequential' && paletteName.startsWith('sequential') && matchesReversed) {
        results.push(paletteName)
      } else if (type === 'nonsequential' && matchesReversed) {
        // V2 non-sequential includes qualitative AND divergent palettes
        if (paletteName.startsWith('qualitative') || paletteName.startsWith('divergent')) {
          results.push(paletteName)
        }
      } else if (type === 'colorblindsafe' && paletteName.startsWith('colorblindsafe') && matchesReversed) {
        results.push(paletteName)
      }
    }
    return results
  }

  // Update pairedBar.palette based on isPaletteReversed
  useEffect(() => {
    let palette = ''

    if (config.twoColor.isPaletteReversed && !config.twoColor.palette.endsWith('reverse')) {
      palette = config.twoColor.palette + 'reverse'
    }

    if (!config.twoColor.isPaletteReversed && config.twoColor.palette.endsWith('reverse')) {
      palette = config.twoColor.palette.slice(0, -7)
    }

    updateConfig({ ...config, twoColor: { ...config.twoColor, palette: palette } })
  }, [config.twoColor.isPaletteReversed])

  // Update palette based on isReversed
  useEffect(() => {
    let palette = ''
    const isReversed = config.general?.palette?.isReversed
    const currentPaletteName = config.general?.palette?.name || ''

    if (isReversed && !currentPaletteName.endsWith('reverse')) {
      palette = currentPaletteName + 'reverse'
    }

    if (!isReversed && currentPaletteName.endsWith('reverse')) {
      palette = currentPaletteName.slice(0, -7)
    }

    if (palette && palette !== currentPaletteName) {
      updateConfig({
        ...config,
        general: {
          ...config.general,
          palette: {
            ...config.general.palette,
            name: palette
          }
        }
      })
    }
  }, [config.general?.palette?.isReversed])

  // Return all palettes

  return { twoColorPalettes, sequential, nonSequential, accessibleColors }
}
