import { getMapColorPaletteVersion } from './getMapColorPaletteVersion'

export const filterColorPalettes = ({ isReversed, colorPalettes, config }) => {
  let sequential = []
  let nonSequential = []
  let accessibleColors = []

  for (const paletteName in colorPalettes?.[`v${getMapColorPaletteVersion(config)}`]) {
    const isReversedPalette = paletteName.endsWith('reverse')

    const handleV1Palette = paletteName => {
      if (isReversed !== isReversedPalette) return

      if (paletteName.includes('qualitative')) {
        nonSequential.push(paletteName)
      } else if (paletteName.includes('colorblindsafe')) {
        accessibleColors.push(paletteName)
      } else {
        sequential.push(paletteName)
      }
    }

    const handleV2Palette = paletteName => {
      if (isReversed !== isReversedPalette) return

      if (paletteName.includes('divergent')) {
        nonSequential.push(paletteName)
      } else if (paletteName.includes('colorblindsafe') || paletteName.includes('qualitative')) {
        accessibleColors.push(paletteName)
      } else {
        sequential.push(paletteName)
      }
    }

    if (config.general.palette.version === '1.0') {
      // empty sequential palette
      handleV1Palette(paletteName)
    }

    if (config.general.palette.version === '2.0') {
      // empty sequential palette
      handleV2Palette(paletteName)
    }
  }
  return [sequential, nonSequential, accessibleColors]
}
