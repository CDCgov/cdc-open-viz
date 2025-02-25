import { footnotesSymbols } from '@cdc/core/helpers/footnoteSymbols'

const numericStrings = ['N/A', 'NA', ''].concat(footnotesSymbols.map(s => s[0]))

export default function isRightAlignedTableValue(value = '') {
  if (!value) return false
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }
  if (typeof value === 'string') {
    return numericStrings.includes(value) || /^[\$\d\.\%\,\-\s\(\)CI]*$/.test(value)
  }
  return false
}
