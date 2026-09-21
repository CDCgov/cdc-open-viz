import { AllChartsConfig } from '../types/ChartConfig'
import { getDynamicYAxisCategories } from './getDynamicYAxisCategories'

type DataDrivenYAxisConfig = Pick<AllChartsConfig, 'yAxis'>

export const isDataDrivenYAxis = (config: DataDrivenYAxisConfig) =>
  config.yAxis.type === 'categorical' &&
  (config.yAxis.categoryMode === 'data-driven' ||
    (config.yAxis.categoryMode === undefined && !!config.yAxis.dataDrivenCategories))

export const getDataDrivenYAxisCategories = (config: DataDrivenYAxisConfig, data: Record<string, any>[]) => {
  if (!isDataDrivenYAxis(config) || !config.yAxis.dataDrivenCategories) return null

  return getDynamicYAxisCategories({
    config: config.yAxis.dataDrivenCategories,
    data
  })
}
