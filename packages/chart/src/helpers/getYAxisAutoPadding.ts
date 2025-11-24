import { ChartConfig } from '../types/ChartConfig'

/**
 * Calculates the Y-axis auto padding to prevent data labels from overlapping with axis tick labels.
 * This is used when inline labels are enabled and there's potential for overlap.
 *
 * @param yScale - The D3 scale object for the Y-axis (must have .ticks() method)
 * @param handleNumTicks - The number of ticks to display on the axis
 * @param maxValue - The maximum data value (from useReduceData)
 * @param minValue - The minimum data value (from useReduceData)
 * @param config - The chart configuration object
 * @returns The calculated auto padding percentage (0-100+), or 0 if no padding needed
 */
export const getYAxisAutoPadding = (
  yScale: any,
  handleNumTicks: number,
  maxValue: number,
  minValue: number,
  config: ChartConfig
): number => {
  // Early returns for cases where auto padding is not needed
  if (!yScale?.ticks || config.orientation === 'horizontal' || config.yAxis?.max) {
    return 0
  }

  const ticks = yScale.ticks(handleNumTicks)

  if (!Array.isArray(ticks) || ticks.length === 0) {
    return 0
  }

  // minimum percentage of the max value that the distance should be from the top grid line
  const MINIMUM_DISTANCE_PERCENTAGE = 0.025

  const topGridLine = Math.max(...ticks)
  const needsPaddingThreshold = topGridLine - maxValue * MINIMUM_DISTANCE_PERCENTAGE
  const maxValueIsGreaterThanThreshold = maxValue > needsPaddingThreshold

  if (!maxValueIsGreaterThanThreshold) return 0

  const tickGap = ticks.length === 1 ? ticks[0] : ticks[1] - ticks[0]
  const nextTick = Math.max(...ticks) + tickGap
  const divideBy = minValue < 0 ? maxValue / 2 : maxValue
  const calculatedPadding = (nextTick - maxValue) / divideBy

  // if auto padding is too close to next tick, add one more ticks worth of padding
  const newPadding =
    calculatedPadding > MINIMUM_DISTANCE_PERCENTAGE ? calculatedPadding : calculatedPadding + tickGap / divideBy

  /* sometimes even though the padding is getting to the next tick exactly,
  d3 still doesn't show the tick. we add 0.1 to ensure to tip it over the edge */
  return newPadding * 100 + 0.1
}
