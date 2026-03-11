/**
 * Sorts two values based on a user-defined custom order array.
 * Values not found in customOrder are pushed to the end.
 */
export const applyCustomOrder = (valueA: string, valueB: string, customOrder: string[]): number => {
  const indexA = customOrder.indexOf(String(valueA))
  const indexB = customOrder.indexOf(String(valueB))

  // Both found in custom order — sort by position
  if (indexA !== -1 && indexB !== -1) return indexA - indexB
  // Only A found — A comes first
  if (indexA !== -1) return -1
  // Only B found — B comes first
  if (indexB !== -1) return 1
  // Neither found — maintain relative order
  return 0
}
