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
    const seqPalettes = []
    const nonSeqPalettes = []
    const isReversed = config.general?.palette?.isReversed

    for (const paletteName in colorPalettesChart) {
      const isSequential = paletteName.startsWith('sequential')
      const isQualitative = paletteName.startsWith('qualitative')
      const colorblindsafe = paletteName.startsWith('colorblindsafe')
      const isPaletteReversed = paletteName.endsWith('reverse')

      if (isSequential && ((!isReversed && !isPaletteReversed) || (isReversed && isPaletteReversed))) {
        seqPalettes.push(paletteName)
      }

      if (isQualitative && ((!isReversed && !isPaletteReversed) || (isReversed && isPaletteReversed))) {
        nonSeqPalettes.push(paletteName)
      }
      if (colorblindsafe && ((!isReversed && !isPaletteReversed) || (isReversed && isPaletteReversed))) {
        accessibleColors.push(paletteName)
      }
    }

    sequential = seqPalettes
    nonSequential = nonSeqPalettes
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
