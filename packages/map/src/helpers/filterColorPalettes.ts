export const filterColorPalettes = ({ isReversed, colorPalettes, config }) => {
  const sequential = []
  const nonSequential = []
  const accessibleColors = []

  for (const paletteName in colorPalettes) {
    const isReversedPalette = paletteName.endsWith('reverse')

    const handleV1Palette = () => {
      if (isReversed !== isReversedPalette) return

      if (paletteName.includes('qualitative')) {
        nonSequential.push(paletteName)
      } else if (paletteName.includes('colorblindsafe')) {
        accessibleColors.push(paletteName)
      } else {
        sequential.push(paletteName)
      }
    }

    const handleV2Palette = () => {
      if (isReversed !== isReversedPalette) return

      if (paletteName.includes('divergent')) {
        nonSequential.push(paletteName)
      } else if (paletteName.includes('colorblindsafe')) {
        accessibleColors.push(paletteName)
      } else {
        sequential.push(paletteName)
      }
    }

    if (config.general.palette.version === '1.0') {
      handleV1Palette()
    }

    if (config.general.palette.version === '2.0') {
      handleV2Palette()
    }
  }

  return [sequential, nonSequential, accessibleColors]
}
