import { scaleLinear, scaleLog } from '@visx/scale'
import { ChartConfig } from '../types/ChartConfig'
import { countNumOfTicks } from './countNumOfTicks'

/**
 * Calculates Y-axis values with auto-padding applied when inline labels are used.
 * This replaces the async useEffect approach with synchronous calculation during render.
 *
 * @param min - Base minimum Y-axis value from useMinMax
 * @param max - Base maximum Y-axis value from useMinMax
 * @param config - Chart configuration
 * @param data - Chart data array
 * @param parentHeight - Chart container height
 * @param currentViewport - Current viewport size
 * @returns Object with adjusted min/max values
 */
export const calculateYAxisWithAutoPadding = (
  min: number,
  max: number,
  config: ChartConfig,
  data: any[],
  parentHeight: number,
  currentViewport: string
): { min: number; max: number } => {
  // Basic validation
  if (config.orientation === 'horizontal' || config.yAxis?.max || typeof min !== 'number' || typeof max !== 'number') {
    return { min, max }
  }

  // Calculate tick count (same logic as original useEffect)
  const isForestPlot = config.visualizationType === 'Forest Plot'
  const [yTickCount] = ['yAxis'].map(axis =>
    countNumOfTicks({
      axis,
      max,
      runtime: config.runtime,
      currentViewport,
      isHorizontal: config.orientation === 'horizontal',
      data,
      config,
      min
    })
  )
  const handleNumTicks = isForestPlot ? data.length : yTickCount

  // Create temporary yScale to calculate D3 ticks (same as original useEffect)
  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  const adjustedMin = isLogarithmicAxis && min >= 0 && min < 1 ? min + 0.1 : min
  const scaleFunc = isLogarithmicAxis ? scaleLog : scaleLinear
  const TOP_PADDING = 10

  const tempYScale = scaleFunc({
    domain: [adjustedMin, max],
    range: [parentHeight, TOP_PADDING],
    nice: isLogarithmicAxis,
    zero: isLogarithmicAxis
  })

  // Get D3 ticks and calculate auto-padding (same logic as original useEffect)
  const ticks = tempYScale.ticks(handleNumTicks)
  if (!Array.isArray(ticks) || ticks.length === 0) {
    return { min, max }
  }

  const MINIMUM_DISTANCE_PERCENTAGE = 0.025
  const topGridLine = Math.max(...ticks)
  const needsPaddingThreshold = topGridLine - max * MINIMUM_DISTANCE_PERCENTAGE
  const maxValueIsGreaterThanThreshold = max > needsPaddingThreshold

  if (!maxValueIsGreaterThanThreshold) {
    return { min, max }
  }

  // Calculate the auto-padding adjustment (exact same logic as original useEffect)
  const tickGap = ticks.length === 1 ? ticks[0] : ticks[1] - ticks[0]
  const nextTick = Math.max(...ticks) + tickGap

  return { min, max: nextTick }
}
