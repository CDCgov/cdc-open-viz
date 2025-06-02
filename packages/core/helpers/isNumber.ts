/**
 * Checks whether the given input is a valid number.
 *
 * Handles both numeric types and numeric strings, including negative values.
 *
 * @param value - The value to check. Can be of any type.
 * @returns boolean - True if the value is a number or a numeric string.
 */
export default function isNumber(value: unknown = ''): boolean {
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }

  if (typeof value === 'string') {
    return value.trim() !== '' && /^-?\d+(\.\d+)?$/.test(value.trim())
    // Matches optional leading "-", integers, or decimals (e.g., "-123", "123.45")
  }

  return false
}
