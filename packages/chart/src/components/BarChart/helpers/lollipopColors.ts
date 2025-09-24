import chroma from 'chroma-js'

/**
 * Adjusts color for lollipop stem (lighter than original for contrast)
 */
export const getLollipopStemColor = (baseColor: string): string => {
  const lightness = chroma(baseColor).get('hsl.l')

  if (lightness > 0.7) {
    // Very light colors: darken slightly to ensure visibility
    return chroma(baseColor).darken(0.1).hex()
  } else if (lightness > 0.4) {
    // Medium colors: lighten moderately
    return chroma(baseColor).brighten(0.5).hex()
  } else {
    // Dark colors: lighten significantly but keep visible
    return chroma(baseColor).brighten(1.0).hex()
  }
}

/**
 * Adjusts color for lollipop head (darker than original for contrast)
 */
export const getLollipopHeadColor = (baseColor: string): string => {
  const lightness = chroma(baseColor).get('hsl.l')
  return lightness > 0.6 ? chroma(baseColor).darken(1.5).hex() : baseColor
}
