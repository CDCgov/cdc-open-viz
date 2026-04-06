import { MapConfig } from '../types/MapConfig'
import { getMatchingPatternForRow } from './getMatchingPatternForRow'

interface PatternInfo {
  pattern?: string
  dataKey: string
  size?: string
  patternIndex: number
  color?: string
}

export const getPatternForRow = (rowObj: Record<string, any>, config: MapConfig): PatternInfo | null => {
  const matchedPattern = getMatchingPatternForRow(rowObj, config.map?.patterns)

  if (!matchedPattern) {
    return null
  }

  return {
    pattern: matchedPattern.pattern.pattern,
    // Broad matches resolve to the row key that matched, so IDs/classes stay stable.
    dataKey: matchedPattern.matchedDataKey,
    size: matchedPattern.pattern.size,
    patternIndex: matchedPattern.patternIndex,
    color: matchedPattern.pattern.color
  }
}
