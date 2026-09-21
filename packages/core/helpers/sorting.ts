export type SortDirection = 'asc' | 'desc'

const naturalCollator = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'base'
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

export const compareNatural = (a: unknown, b: unknown, direction: SortDirection = 'asc'): number => {
  return naturalCollator.compare(String(a ?? ''), String(b ?? '')) * directionMultiplier(direction)
}

export const sortByNatural = <T>(
  values: readonly T[],
  getValue: (value: T) => unknown = identity,
  direction: SortDirection = 'asc'
): T[] => {
  return [...values].sort((a, b) => compareNatural(getValue(a), getValue(b), direction))
}
