import { ChartConfig } from '../types/ChartConfig'

export const hasSpacedInlineLabel = (config: ChartConfig): boolean => {
  const inlineLabel = config.yAxis?.inlineLabel
  if (inlineLabel && inlineLabel.includes(' ')) {
    return true
  }

  return false
}
