// this function will auto add REVERSE keyword for each palette.Note it doest reverse QUALATITIVE pallets
export function updatePaletteNames(colorPalettes) {
    let sequentialReversed = {};
  
    for (const [paletteName, hexCodeArr] of Object.entries(colorPalettes)) {
      if (!String(paletteName).startsWith('qualitative') && String(paletteName.endsWith('reverse'))){
        let reverse = String(paletteName).concat('reverse'); // add to the end of the string "reverse"
        sequentialReversed[reverse] = [...hexCodeArr].reverse(); // reverses arrays elements and create new keys on object
      }
    }
  
    return sequentialReversed;
  }