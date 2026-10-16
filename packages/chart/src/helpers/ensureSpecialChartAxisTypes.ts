import { type ChartConfig } from '../types/ChartConfig'

export const ensureSpecialChartAxisTypes = <T extends Pick<ChartConfig, 'visualizationType' | 'xAxis'>>(
  config: T
): T => {
  if (config.visualizationType === 'Bump Chart' && config.xAxis) {
    config.xAxis.type = 'date-time'
  }

  return config
}
