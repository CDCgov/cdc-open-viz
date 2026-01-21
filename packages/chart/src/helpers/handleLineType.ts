const DASH_PATTERNS = {
  SMALL: '5 5',
  MEDIUM: '10 5',
  LARGE: '15 5',
  SOLID: 0
} as const

export const handleLineType = (lineType: string): string | number => {
  switch (lineType) {
    case 'dashed-sm':
    case 'Dashed Small':
      return DASH_PATTERNS.SMALL
    case 'dashed-md':
    case 'Dashed Medium':
      return DASH_PATTERNS.MEDIUM
    case 'dashed-lg':
    case 'Dashed Large':
      return DASH_PATTERNS.LARGE
    default:
      return DASH_PATTERNS.SOLID
  }
}
