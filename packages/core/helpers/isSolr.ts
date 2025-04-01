export const isSolrCsv = (dataUrl: string) => {
  if (dataUrl?.includes('wt=csv')) {
    return true
  }
  return false
}

export const isSolrJson = (dataUrl: string) => {
  if (dataUrl?.includes('wt=json')) {
    return true
  }
  return false
}
