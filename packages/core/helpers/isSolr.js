export const isSolrCsv = dataUrl => {
  if (dataUrl.includes('wt=csv')) {
    return true
  }
  return false
}

export const isSolrJson = dataUrl => {
  if (dataUrl?.includes('wt=json')) {
    return true
  }
  return false
}
