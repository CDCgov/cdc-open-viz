// this function will auto add REVERSE keyword for each palette.Note it doest reverse QUALATITIVE pallets
export function updatePaletteNames(colorPalettes) {
    let sequentialReversed = {};
  
    for (const [paletteName, hexCodeArr] of Object.entries(colorPalettes)) {
       const palette = String(paletteName);

      if (!palette.startsWith('qualitative') && !palette.endsWith('reverse')){
        let reverse = palette.concat('reverse'); // add to the end of the string "reverse"
        sequentialReversed[reverse] = [...hexCodeArr].reverse(); // reverses arrays elements and create new keys on object
      }
    }
  
    return sequentialReversed;
  }