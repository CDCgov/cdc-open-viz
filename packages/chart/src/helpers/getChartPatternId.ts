import { sanitizeToSvgId } from '@cdc/core/helpers/cove/string'

const getStableKeyHash = (input: string): string => {
  // djb2 variant, deterministic and cheap for short editor keys
  let hash = 5381
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i)
  }
  return (hash >>> 0).toString(36)
}

export const getChartPatternId = (patternKey: string): string => {
  const rawKey = String(patternKey)
  const sanitizedKey = sanitizeToSvgId(rawKey)
  const hashSuffix = getStableKeyHash(rawKey)
  return `chart-pattern-${sanitizedKey}-${hashSuffix}`
}
