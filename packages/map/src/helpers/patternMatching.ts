import isNumber from '@cdc/core/helpers/isNumber'

const normalizeString = (value: unknown): string => String(value ?? '').trim()

/**
 * Matches a configured pattern value against a row value.
 * Numeric-looking values are compared numerically; other values use trimmed string comparison.
 */
export const patternValuesMatch = (configValue: unknown, rowValue: unknown): boolean => {
  if (configValue === null || configValue === undefined || rowValue === null || rowValue === undefined) {
    return false
  }

  const normalizedConfig = normalizeString(configValue)
  const normalizedRow = normalizeString(rowValue)

  if (isNumber(normalizedConfig) && isNumber(normalizedRow)) {
    return Number(normalizedConfig) === Number(normalizedRow)
  }

  return normalizedConfig === normalizedRow
}
