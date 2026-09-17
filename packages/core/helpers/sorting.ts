export type SortDirection = 'asc' | 'desc'

const numericTextCollator = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'accent'
})

const identity = <T>(value: T) => value

const directionMultiplier = (direction: SortDirection) => (direction === 'desc' ? -1 : 1)

export const toSortableNumber = (value: unknown): number => {
  if (typeof value === 'string') return parseFloat(value.replace(/,/g, ''))
  return Number(value)
}

export const compareNumeric = (a: unknown, b: unknown, direction: SortDirection = 'asc'): number => {
  const numericA = toSortableNumber(a)
  const numericB = toSortableNumber(b)
  const aIsSortable = Number.isFinite(numericA)
  const bIsSortable = Number.isFinite(numericB)

  if (!aIsSortable && !bIsSortable) return 0
  if (!aIsSortable) return 1
  if (!bIsSortable) return -1

  return (numericA - numericB) * directionMultiplier(direction)
}

export const sortByNumber = <T>(
  values: readonly T[],
  getValue: (value: T) => unknown = identity,
  direction: SortDirection = 'asc'
): T[] => {
  return [...values].sort((a, b) => compareNumeric(getValue(a), getValue(b), direction))
}

/**
 * Compares text with embedded numbers in numeric order.
 * For example, "Week 2" sorts before "Week 10"; case is ignored, accents are preserved.
 */
export const compareNumericText = (a: unknown, b: unknown, direction: SortDirection = 'asc'): number => {
  return numericTextCollator.compare(String(a ?? ''), String(b ?? '')) * directionMultiplier(direction)
}

/**
 * Returns a copy sorted by numeric text comparison without mutating the input.
 * Use this for display labels or keys where embedded numbers should sort by value.
 */
export const sortByNumericText = <T>(
  values: readonly T[],
  getValue: (value: T) => unknown = identity,
  direction: SortDirection = 'asc'
): T[] => {
  return [...values].sort((a, b) => compareNumericText(getValue(a), getValue(b), direction))
}
