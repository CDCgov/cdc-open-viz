import { colorPalettesChart, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { useEffect } from 'react'

export const useColorPalette = (config, updateConfig) => {
  let twoColorPalettes = []
  let sequential = []
  let nonSequential = []

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

    for (const paletteName in colorPalettesChart) {
      const isSequential = paletteName.startsWith('sequential')
      const isQualitative = paletteName.startsWith('qualitative')
      const colorblindsafe = paletteName.startsWith('colorblindsafe')
      const isReversed = paletteName.endsWith('reverse')

      if (isSequential && ((!config.isPaletteReversed && !isReversed) || (config.isPaletteReversed && isReversed))) {
        seqPalettes.push(paletteName)
      }

      if (
        (isQualitative || colorblindsafe) &&
        ((!config.isPaletteReversed && !isReversed) || (config.isPaletteReversed && isReversed))
      ) {
        nonSeqPalettes.push(paletteName)
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

  // Update palette based on isPaletteReversed
  useEffect(() => {
    let palette = ''

    if (config.isPaletteReversed && !config.palette.endsWith('reverse')) {
      palette = config.palette + 'reverse'
    }

    if (!config.isPaletteReversed && config.palette.endsWith('reverse')) {
      palette = config.palette.slice(0, -7)
    }

    updateConfig({ ...config, palette: palette })
  }, [config.isPaletteReversed])

  // Return all palettes
  return { twoColorPalettes, sequential, nonSequential }
}
