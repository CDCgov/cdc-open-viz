export const displaySize = size => {
  if (size === undefined) return ''

  if (size > Math.pow(1024, 3)) {
    return Math.round((size / Math.pow(1024, 3)) * 100) / 100 + 'GB'
  } else if (size > Math.pow(1024, 2)) {
    return Math.round((size / Math.pow(1024, 2)) * 100) / 100 + 'MB'
  } else if (size > 1024) {
    return Math.round((size / 1024) * 100) / 100 + 'KB'
  } else {
    return size + 'B'
  }
}
