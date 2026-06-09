import { ChartConfig } from '../types/ChartConfig'

export type YAxisAutoPaddingMode = 'none' | 'inline-label'

export const getYAxisAutoPaddingMode = (config: ChartConfig): YAxisAutoPaddingMode => {
  const inlineLabel = config.yAxis?.inlineLabel
  if (inlineLabel && inlineLabel.includes(' ')) {
    return 'inline-label'
  }

  return 'none'
}
