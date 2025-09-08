import { MapConfig } from '../types/MapConfig'

export interface PatternInfo {
  pattern?: string
  dataKey: string
  size?: string
  patternIndex: number
}

export const getPatternForRow = (
  rowObj: Record<string, any>, 
  config: MapConfig
): PatternInfo | null => {
  if (!config.map?.patterns || !rowObj) {
    return null
  }

  // Find a pattern that matches this row's data
  for (let i = 0; i < config.map.patterns.length; i++) {
    const patternData = config.map.patterns[i]
    const hasMatchingValues = patternData.dataValue === rowObj[patternData.dataKey]
    
    if (hasMatchingValues) {
      return {
        pattern: patternData.pattern,
        dataKey: patternData.dataKey,
        size: patternData.size,
        patternIndex: i
      }
    }
  }

  return null
}