import { ChartConfig } from '../types/ChartConfig'

export type YAxisAutoPaddingMode = 'none' | 'inline-label' | 'top-title'

export const getYAxisAutoPaddingMode = (config: ChartConfig): YAxisAutoPaddingMode => {
  const inlineLabel = config.yAxis?.inlineLabel
  if (inlineLabel && inlineLabel.includes(' ')) {
    return 'inline-label'
  }

  const yAxisTitle = String(config.yAxis?.label || config.runtime?.yAxis?.label || '').trim()
  if (config.yAxis?.titlePlacement === 'top' && yAxisTitle) {
    return 'top-title'
  }

  return 'none'
}
