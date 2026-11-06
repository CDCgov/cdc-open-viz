import chroma from 'chroma-js'

export const PATTERN_COLOR_LIGHT = '#FFFFFF'
export const PATTERN_COLOR_DARK = '#1C1D1F'

export const isAutomaticPatternColor = (color?: string): boolean => !color?.trim()

/** Resolve an automatic pattern against its local fill; preserve authored CSS colors. */
export const resolvePatternColor = (color: string | undefined, backgroundColor: string): string => {
  if (!isAutomaticPatternColor(color)) return color
  if (!chroma.valid(backgroundColor)) return PATTERN_COLOR_DARK

  return chroma.contrast(PATTERN_COLOR_LIGHT, backgroundColor) > chroma.contrast(PATTERN_COLOR_DARK, backgroundColor)
    ? PATTERN_COLOR_LIGHT
    : PATTERN_COLOR_DARK
}
