import { colorPalettesChart, twoColorPalette } from '@cdc/core/data/colorPalettes'

export const getColorPalette = config => {
  let twoColorPalettes = []
  let sequential = []
  let nonSequential = []
  const accessibleColors = []

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

      if (isQualitative && ((!config.isPaletteReversed && !isReversed) || (config.isPaletteReversed && isReversed))) {
        nonSeqPalettes.push(paletteName)
      }
      if (colorblindsafe && ((!config.isPaletteReversed && !isReversed) || (config.isPaletteReversed && isReversed))) {
        accessibleColors.push(paletteName)
      }
    }

    sequential = seqPalettes
    nonSequential = nonSeqPalettes
  }

  return { twoColorPalettes, sequential, nonSequential, accessibleColors }
}
