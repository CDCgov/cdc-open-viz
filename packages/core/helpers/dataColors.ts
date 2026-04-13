export const DATA_COLOR_PRESETS = ['#d7f2ed', '#b8e5ac', '#fea82f', '#f45b53', '#a03169'] as const

export type DataColorMapping = {
  sourceValue: string
  color: string
}

export type DataColorConfig = {
  column?: string
  mappings?: DataColorMapping[]
}

export type DataColorResolutionState = 'resolved' | 'ambiguous' | 'unmapped' | 'disabled'

export type DataColorResolution = {
  state: DataColorResolutionState
  color?: string
  textColor?: string
}

type ResolveDataColorArgs = {
  data: Record<string, any>[]
  dataColors?: DataColorConfig
}

/**
 * Returns the relative luminance of a hex color per WCAG 2.1.
 * Used to pick black or white text for sufficient contrast.
 */
const relativeLuminance = (hex: string): number => {
  const raw = hex.replace('#', '')
  const r = parseInt(raw.substring(0, 2), 16) / 255
  const g = parseInt(raw.substring(2, 4), 16) / 255
  const b = parseInt(raw.substring(4, 6), 16) / 255

  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

/** Pick '#000000' or '#ffffff' for best WCAG contrast against `bgHex`. */
export const contrastTextColor = (bgHex: string): string => {
  const lum = relativeLuminance(bgHex)
  // WCAG contrast ratio: (L1 + 0.05) / (L2 + 0.05)
  const contrastWithWhite = (1 + 0.05) / (lum + 0.05)
  const contrastWithBlack = (lum + 0.05) / (0 + 0.05)
  return contrastWithWhite >= contrastWithBlack ? '#ffffff' : '#000000'
}

/** Always uses the first row in `data` as the representative for color lookup. */
export const resolveDataColor = ({ data = [], dataColors }: ResolveDataColorArgs): DataColorResolution => {
  if (!dataColors?.column || !dataColors.mappings?.length) {
    return { state: 'disabled' }
  }

  const sourceRow = data.length > 0 ? data[0] : undefined

  if (!sourceRow) {
    return { state: 'ambiguous' }
  }

  const sourceValue = sourceRow[dataColors.column]
  if (sourceValue === undefined || sourceValue === null) {
    return { state: 'unmapped' }
  }

  const sourceValueString = String(sourceValue)
  const mapping = dataColors.mappings.find(m => m.sourceValue === sourceValueString)

  if (!mapping?.color) {
    return { state: 'unmapped' }
  }

  return { state: 'resolved', color: mapping.color, textColor: contrastTextColor(mapping.color) }
}
