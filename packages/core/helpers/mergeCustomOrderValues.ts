/**
 * Merges new filter values with existing custom ordered values
 *
 * When order === 'cust', this function ensures that:
 * 1. New values from the data are appended to the end of orderedValues
 * 2. If orderedValues is missing/empty, it initializes with current values
 *
 * @param currentValues - Array of all unique values extracted from current data
 * @param existingOrderedValues - Existing custom ordered values array (may be undefined/empty)
 * @param order - The filter's order setting
 * @returns Updated orderedValues array with new values appended, or undefined if not custom order
 */
export const mergeCustomOrderValues = (
  currentValues: (string | number)[],
  existingOrderedValues: string[] | undefined,
  order: string | undefined
): string[] | undefined => {
  // Only process for custom order
  if (order !== 'cust') {
    return existingOrderedValues
  }

  // Normalize current values to strings (filter values are always displayed as strings)
  const normalizedCurrentValues = currentValues.map(v => String(v))

  // If orderedValues doesn't exist or is empty, initialize with current values
  if (!existingOrderedValues || existingOrderedValues.length === 0) {
    return [...normalizedCurrentValues]
  }

  // Find new values that aren't in orderedValues yet
  const orderedValuesSet = new Set(existingOrderedValues)
  const newValues = normalizedCurrentValues.filter(value => !orderedValuesSet.has(value))

  // Return merged array: existing order + new values appended
  return [...existingOrderedValues, ...newValues]
}
