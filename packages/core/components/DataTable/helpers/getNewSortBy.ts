type SortBy = {
  asc: boolean
  column?: string
}

export const getNewSortBy = (
  sortBy: SortBy,
  column: string,
  index: number
): { column: string; asc: boolean; colIndex: number } => {
  let asc
  let sortByCol = column
  const ascending = sortBy.asc === true
  const descending = sortBy.asc === false
  const isInactive = sortBy.asc === undefined
  const noColumnSelected = sortBy.column === undefined
  if (noColumnSelected || sortBy.column !== column) {
    // this is the first time a column is clicked
    asc = true
  } else {
    // clicking the same column
    if (descending) {
      // reset
      sortByCol = undefined
      asc = undefined
    }
    if (isInactive) {
      asc = true
    }
    if (ascending) {
      asc = false
    }
  }
  return { column: sortByCol, asc, colIndex: index }
}
