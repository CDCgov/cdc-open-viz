type CategoryNumericSortKey = {
  lower: number
  upper: number
}

type SortByConfiguredCategoryOrderOptions<T> = {
  getValue?: (item: T) => unknown
}

const numericPattern = String.raw`[+-]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?`
const exactNumberPattern = new RegExp(`^\\s*(${numericPattern})\\s*$`)
const boundedRangePattern = new RegExp(`^\\s*(${numericPattern})\\s*(?:-|to)\\s*(${numericPattern})\\s*$`, 'i')
const greaterThanPattern = new RegExp(`^\\s*>\\s*(${numericPattern})\\s*$`)
const lessThanPattern = new RegExp(`^\\s*<\\s*(${numericPattern})\\s*$`)
const plusRangePattern = new RegExp(`^\\s*(${numericPattern})\\s*\\+\\s*$`)

const parseCategoryNumber = (value: string): number => Number(value.replace(/,/g, ''))

const isValidSortKey = ({ lower, upper }: CategoryNumericSortKey): boolean =>
  Number.isFinite(lower) && (Number.isFinite(upper) || upper === Number.POSITIVE_INFINITY) && lower <= upper

export const getCategoryNumericSortKey = (value: unknown): CategoryNumericSortKey | null => {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? { lower: value, upper: value } : null
  }

  if (typeof value !== 'string') {
    return null
  }

  const boundedRangeMatch = value.match(boundedRangePattern)
  if (boundedRangeMatch) {
    const sortKey = {
      lower: parseCategoryNumber(boundedRangeMatch[1]),
      upper: parseCategoryNumber(boundedRangeMatch[2])
    }

    return isValidSortKey(sortKey) ? sortKey : null
  }

  const greaterThanMatch = value.match(greaterThanPattern)
  if (greaterThanMatch) {
    const sortKey = {
      lower: parseCategoryNumber(greaterThanMatch[1]),
      upper: Number.POSITIVE_INFINITY
    }

    return isValidSortKey(sortKey) ? sortKey : null
  }

  const lessThanMatch = value.match(lessThanPattern)
  if (lessThanMatch) {
    const upper = parseCategoryNumber(lessThanMatch[1])
    const sortKey = {
      lower: 0,
      upper
    }

    return isValidSortKey(sortKey) ? sortKey : null
  }

  const plusRangeMatch = value.match(plusRangePattern)
  if (plusRangeMatch) {
    const sortKey = {
      lower: parseCategoryNumber(plusRangeMatch[1]),
      upper: Number.POSITIVE_INFINITY
    }

    return isValidSortKey(sortKey) ? sortKey : null
  }

  const exactNumberMatch = value.match(exactNumberPattern)
  if (exactNumberMatch) {
    const number = parseCategoryNumber(exactNumberMatch[1])
    const sortKey = { lower: number, upper: number }

    return isValidSortKey(sortKey) ? sortKey : null
  }

  return null
}

export const sortAutomaticCategoryValues = <T>(values: T[], getValue: (item: T) => unknown = value => value): T[] => {
  const parsedValues = values.map((value, index) => ({
    value,
    index,
    parsed: getCategoryNumericSortKey(getValue(value))
  }))

  const sortableValues = parsedValues.filter(item => item.parsed)
  const nonSortableValues = parsedValues.filter(item => !item.parsed)

  if (!sortableValues.length) {
    return values
  }

  const sortedNumericValues = sortableValues.sort((a, b) => {
    if (a.parsed!.lower !== b.parsed!.lower) {
      return a.parsed!.lower - b.parsed!.lower
    }

    if (a.parsed!.upper !== b.parsed!.upper) {
      return a.parsed!.upper - b.parsed!.upper
    }

    return a.index - b.index
  })

  return [...sortedNumericValues, ...nonSortableValues].map(item => item.value)
}

export const sortByConfiguredCategoryOrder = <T>(
  values: T[],
  configuredOrder: unknown[] = [],
  { getValue = value => value }: SortByConfiguredCategoryOrderOptions<T> = {}
): T[] => {
  if (!configuredOrder.length) {
    return values
  }

  return [...values].sort((a, b) => {
    const aValue = getValue(a)
    const bValue = getValue(b)
    const aIdx = configuredOrder.indexOf(aValue)
    const bIdx = configuredOrder.indexOf(bValue)

    if (aIdx === bIdx) return 0
    if (aIdx === -1) return 1
    if (bIdx === -1) return -1
    return aIdx - bIdx
  })
}
