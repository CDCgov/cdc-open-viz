import { footnotesSymbols } from '@cdc/core/helpers/footnoteSymbols'

const numericStrings = ['N/A', 'NA', '', 'Suppressed'].concat(footnotesSymbols.map(s => s[0]))

export default function isRightAlignedTableValue(value = '') {
  if (!value) return true
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }
  if (typeof value === 'string') {
    // Dates like 2024-09-12 are not considered numbers
    if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(value)) {
      return false
    }
    return numericStrings.includes(value) || /^[\$\d\.\%\,\-\s\(\)CI<>]*$/.test(value)
  }
  return false
}
