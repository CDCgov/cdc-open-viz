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
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i]
    const dataKey = pattern?.dataKey ?? ''

    if (String(dataKey).trim() === '' || !hasPatternValue(pattern?.dataValue)) {
      continue
    }

    if (patternValuesMatch(pattern.dataValue, rowObj[dataKey])) {
      return {
        pattern,
        patternIndex: i,
        matchedDataKey: dataKey
      }
    }
  }

  // Second pass: broad matches (blank dataKey) compare against all row values.
  const rowEntries = Object.entries(rowObj)
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i]

    if (String(pattern?.dataKey ?? '').trim() !== '' || !hasPatternValue(pattern?.dataValue)) {
      continue
    }

    for (const [rowKey, rowValue] of rowEntries) {
      if (patternValuesMatch(pattern.dataValue, rowValue)) {
        return {
          pattern,
          patternIndex: i,
          matchedDataKey: rowKey
        }
      }
    }
  }

  return null
}
