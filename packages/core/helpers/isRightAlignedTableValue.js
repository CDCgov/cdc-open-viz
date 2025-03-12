import { footnotesSymbols } from '@cdc/core/helpers/footnoteSymbols'

const numericStrings = ['N/A', 'NA', ''].concat(footnotesSymbols.map(s => s[0]))

export default function isRightAlignedTableValue(value = '') {
  if (!value) return false
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }
  if (typeof value === 'string') {
    // Dates are not considered numbers
    if (/^\d{4}-\d{2}-\d{2}$/.test(value) || /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(value)) {
      return false
    }
    return numericStrings.includes(value) || /^[\$\d\.\%\,\-\s\(\)CI]*$/.test(value)
  }
  return false
}
