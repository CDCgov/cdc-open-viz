import { ChartConfig } from '../types/ChartConfig'

export const shouldUseYAxisAutoPadding = (config: ChartConfig): boolean => {
  const inlineLabel = config.yAxis?.inlineLabel
  const inlineLabelHasNoSpace = !inlineLabel?.includes(' ')

  return Boolean((inlineLabel && !inlineLabelHasNoSpace) || config.yAxis?.titlePlacement === 'top')
}
