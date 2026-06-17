import { type ChartConfig } from '../types/ChartConfig'

type YAxisFinalizationEligibilityProps = {
  config: ChartConfig
  hasSpacedInlineLabel: boolean
  hasValidExplicitLeftMax: boolean
  isHorizontal: boolean
}

const chartUsesStandardPrimaryYScale = (config: ChartConfig) => {
  return !['Bump Chart', 'Forest Plot'].includes(config.visualizationType)
}

const isLinearOrLegacyYAxis = (config: ChartConfig) => {
  const yAxisType = config.yAxis.type

  return yAxisType === undefined || yAxisType === '' || yAxisType === 'linear'
}

export const getYAxisFinalizationEligibility = ({
  config,
  hasSpacedInlineLabel,
  hasValidExplicitLeftMax,
  isHorizontal
}: YAxisFinalizationEligibilityProps) => {
  const hasStandardLinearPrimaryYAxis =
    !isHorizontal && isLinearOrLegacyYAxis(config) && chartUsesStandardPrimaryYScale(config)
  const supportsInlineLabelHeadroom = hasStandardLinearPrimaryYAxis && config.visualizationType !== 'Combo'
  const shouldUseInlineLabelHeadroom = hasSpacedInlineLabel && supportsInlineLabelHeadroom
  const shouldUseCleanTopTick =
    !hasValidExplicitLeftMax && (config.yAxis.autoMaxStrategy === 'clean-top-tick' || shouldUseInlineLabelHeadroom)

  return {
    hasStandardLinearPrimaryYAxis,
    supportsInlineLabelHeadroom,
    shouldUseCleanTopTick,
    shouldUseInlineLabelHeadroom,
    shouldFinalizePrimaryYAxis: shouldUseCleanTopTick && hasStandardLinearPrimaryYAxis
  }
}
