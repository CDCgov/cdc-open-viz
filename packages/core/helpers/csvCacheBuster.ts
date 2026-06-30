import cacheBustingString from './cacheBustingString'

export const CSV_CACHE_BUSTER_PARAM = 'cacheBust'

export const addCsvCacheBuster = (dataUrl: string): string => {
  const url = new URL(dataUrl, window.location.origin)
  url.searchParams.set(CSV_CACHE_BUSTER_PARAM, cacheBustingString())
  return url.href
}
