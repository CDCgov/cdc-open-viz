import { RecommendationCategory } from '../types/Config'

/**
 * Get recommendation category configuration by value
 * @param value - The recommendation value to look up
 * @param recommendations - Array of recommendation category configs
 * @returns The matching recommendation config, or a default if not found
 */
export const getRecommendationConfig = (
  value: string,
  recommendations: RecommendationCategory[]
): RecommendationCategory => {
  const match = recommendations.find(rec => rec.value === value)

  if (match) {
    return match
  }

  // Return default gray config if no match found
  return {
    value: value,
    label: value,
    color: '#f5f5f5',
    symbol: ''
  }
}
