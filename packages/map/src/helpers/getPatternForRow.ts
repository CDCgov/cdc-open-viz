import { MapConfig } from '../types/MapConfig'
import { getMatchingPatternForRow } from './getMatchingPatternForRow'
import { patternSizes } from '../components/UsaMap/helpers/patternSizes'

interface PatternInfo {
  pattern?: string
  dataKey: string
  size?: number
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
    dataKey: matchedPattern.matchedDataKey,
    size: patternSizes[matchedPattern.pattern.size] ?? 10,
    patternIndex: matchedPattern.patternIndex,
    color: matchedPattern.pattern.color
  }
}
