import { AllChartsConfig } from '../types/ChartConfig'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { getDynamicYAxisCategories } from './getDynamicYAxisCategories'

type DataDrivenYAxisConfig = Pick<AllChartsConfig, 'yAxis'>

export const isDataDrivenYAxis = (config: DataDrivenYAxisConfig) =>
  config.yAxis.categoryMode === 'data-driven' ||
  (config.yAxis.categoryMode === undefined && !!config.yAxis.dataDrivenCategories)

export const applyDataDrivenYAxisCategories = (config: AllChartsConfig, data: Record<string, any>[]) => {
  if (!isDataDrivenYAxis(config) || !config.yAxis.dataDrivenCategories) return null

  const resolvedCategories = getDynamicYAxisCategories({
    config: config.yAxis.dataDrivenCategories,
    data
  })

  config.yAxis.categories = resolvedCategories?.categories || []
  if (resolvedCategories) {
    config.yAxis.max = String(resolvedCategories.axisMax)
    if (config.runtime?.yAxis) {
      config.runtime.yAxis = {
        ...config.runtime.yAxis,
        max: String(resolvedCategories.axisMax)
      }
    }
  } else {
    delete config.yAxis.max
    if (config.runtime?.yAxis) {
      delete config.runtime.yAxis.max
    }
  }

  return resolvedCategories
}

export const getDataDrivenYAxisConfig = (baseConfig: AllChartsConfig, data: Record<string, any>[]) => {
  if (!isDataDrivenYAxis(baseConfig)) return null

  const nextConfig = cloneConfig(baseConfig)
  applyDataDrivenYAxisCategories(nextConfig, data)
  return nextConfig
}
