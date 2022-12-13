export function updatePaletteNames(colorPalettes) {
  // this function adds REVERSE keyword to each palette
  delete colorPalettes.qualitative9 // delete palette before reversing
  let palettereversed = {}
  for (const [paletteName, hexCodeArr] of Object.entries(colorPalettes)) {
    const paletteStr = String(paletteName)

    if (!paletteStr.endsWith('reverse')) {
      let palette = paletteStr.concat('reverse') // add to the end of the string "reverse"
      palettereversed[palette] = [...hexCodeArr].reverse() // reverses arrays elements and create new keys on object
    } else {
      palettereversed = { ...colorPalettes }
    }
  }
  return { ...palettereversed, ...colorPalettes }
}
