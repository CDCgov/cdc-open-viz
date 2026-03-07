import { PatternSelection } from '../types/MapConfig'
import { patternValuesMatch } from './patternMatching'

export type MatchedPattern = {
  pattern: PatternSelection
  patternIndex: number
  matchedDataKey: string
}

const hasPatternValue = (value: unknown): boolean => String(value ?? '').trim() !== ''

export const getMatchingPatternForRow = (
  rowObj: Record<string, any> | null | undefined,
  patterns: PatternSelection[] | null | undefined
): MatchedPattern | null => {
  if (!rowObj || !Array.isArray(patterns) || patterns.length === 0) {
    return null
  }

  // First pass: specific key matches always win over broad matches.
  // If multiple specific patterns match, keep the last configured one to
  // preserve prior "last overlay wins" map behavior.
  let lastSpecificMatch: MatchedPattern | null = null
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i]
    const dataKey = pattern?.dataKey ?? ''

    if (String(dataKey).trim() === '' || !hasPatternValue(pattern?.dataValue)) {
      continue
    }

    if (patternValuesMatch(pattern.dataValue, rowObj[dataKey])) {
      lastSpecificMatch = {
        pattern,
        patternIndex: i,
        matchedDataKey: dataKey
      }
    }
  }
  if (lastSpecificMatch) {
    return lastSpecificMatch
  }

  // Second pass: broad matches (blank dataKey) compare against all row values.
  // If multiple broad patterns match, keep the last configured one.
  const rowEntries = Object.entries(rowObj)
  let lastBroadMatch: MatchedPattern | null = null
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i]

    if (String(pattern?.dataKey ?? '').trim() !== '' || !hasPatternValue(pattern?.dataValue)) {
      continue
    }

    for (const [rowKey, rowValue] of rowEntries) {
      if (patternValuesMatch(pattern.dataValue, rowValue)) {
        lastBroadMatch = {
          pattern,
          patternIndex: i,
          matchedDataKey: rowKey
        }
      }
    }
  }

  return lastBroadMatch
}
