interface ColorPalettes {
  [paletteName: string]: string[]
}

export const updatePaletteNames = (colorPalettes: ColorPalettes): ColorPalettes => {
  // This function adds REVERSE keyword to each palette
  delete colorPalettes.qualitative9 // Delete palette before reversing

  let paletteReversed: ColorPalettes = {}
  for (const [paletteName, hexCodeArr] of Object.entries(colorPalettes)) {
    const paletteStr = String(paletteName)

    if (!paletteStr.endsWith('reverse')) {
      let palette = paletteStr.concat('reverse') // Add to the end of the string "reverse"
      paletteReversed[palette] = [...hexCodeArr].reverse() // Reverses array elements and create new keys on object
    }
  }
  return { ...paletteReversed, ...colorPalettes }
}
