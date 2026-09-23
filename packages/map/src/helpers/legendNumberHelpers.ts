import type { MapConfig } from '../types/MapConfig'

const CURRENCY_SYMBOLS = ['$', '\u20ac', '\u00a3', '\u00a5']
const NUMERIC_STRING_PATTERN = /^[+-]?(?:(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d*)?|\.\d+)$/

const stripAffix = (input: string, affix: unknown, side: 'start' | 'end') => {
  if (typeof affix !== 'string' || affix.trim() === '') return input

  const trimmedAffix = affix.trim()
  const trimmedInput = input.trim()

  if (side === 'start' && trimmedInput.startsWith(trimmedAffix)) {
    return trimmedInput.slice(trimmedAffix.length)
  }

  if (side === 'end' && trimmedInput.endsWith(trimmedAffix)) {
    return trimmedInput.slice(0, -trimmedAffix.length)
  }

  return input
}

export const parseLegendNumber = (value: unknown, primaryColumn: MapConfig['columns']['primary']): number | null => {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null
  }

  if (typeof value !== 'string') return null

  let normalized = value.trim()
  if (!normalized) return null

  normalized = stripAffix(normalized, primaryColumn?.prefix, 'start').trim()
  const configuredSuffix = typeof primaryColumn?.suffix === 'string' ? primaryColumn.suffix.trim() : ''
  const strippedConfiguredPercent = configuredSuffix === '%' && normalized.endsWith(configuredSuffix)
  normalized = stripAffix(normalized, primaryColumn?.suffix, 'end').trim()

  if (CURRENCY_SYMBOLS.includes(normalized[0])) {
    normalized = normalized.slice(1).trim()
  }

  if (normalized.endsWith('%')) {
    if (strippedConfiguredPercent) return null
    normalized = normalized.slice(0, -1).trim()
  }

  if (!NUMERIC_STRING_PATTERN.test(normalized)) {
    return null
  }

  const parsedNumber = Number(normalized.replace(/,/g, ''))
  return Number.isFinite(parsedNumber) ? parsedNumber : null
}
