export const sortAsc = (a, b) => {
  return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
}

export const sortDesc = (a, b) => {
  return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
}
