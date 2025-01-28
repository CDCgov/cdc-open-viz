export default function isRightAlignedTableValue(value = '') {
  if (!value) return false
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }
  if (typeof value === 'string') {
    return value === 'N/A' || /^[\$\d\.\%]*$/.test(value)
  }
  return false
}
