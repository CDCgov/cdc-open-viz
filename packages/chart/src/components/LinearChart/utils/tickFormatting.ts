import { useCallback, useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { isDateScale } from '@cdc/core/helpers/cove/date'

type TickFormattingOptions = {
  isLogarithmicAxis: boolean
  orientation: 'horizontal' | 'vertical'
  visualizationType: string
  min: number
  max: number
  shouldAbbreviate: boolean
}

/**
 * Shared logarithmic tick handling
 * Both left and bottom formatters convert 0.1 to 0 for logarithmic scales
 */
const handleLogarithmicTick = (tick: number, isLogarithmic: boolean): number => {
  if (isLogarithmic && tick === 0.1) {
    return 0
  }
  return tick
}

/**
 * Hook that provides consolidated tick formatting functions for both axes.
 * Consolidates handleLeftTickFormatting and handleBottomTickFormatting
 * from LinearChart.tsx (Phase 3.1 of refactoring plan)
 */
export const useTickFormatters = (options: TickFormattingOptions) => {
  const { config, formatDate, formatNumber, parseDate } = useContext(ConfigContext)
  const { runtime, data, xAxis } = config
  const { isLogarithmicAxis, orientation, visualizationType, min, max, shouldAbbreviate } = options

  /**
   * Format ticks for the left (Y) axis
   */
  const handleLeftTickFormatting = useCallback(
    (tick: number | string, index: number, ticks: any[]) => {
      // Handle logarithmic scale
      let processedTick = typeof tick === 'number' ? handleLogarithmicTick(tick, isLogarithmicAxis) : tick

      // Forest Plot special case - return data key value
      if (visualizationType === 'Forest Plot') {
        if (data && !data[index]) return ''
        return data[index][xAxis.dataKey]
      }

      // Date scale on y-axis
      if (isDateScale(runtime.yAxis)) {
        return formatDate(parseDate(processedTick))
      }

      // Vertical orientation with small range (needs more precision)
      if (orientation === 'vertical' && max - min < 3 && !config.dataFormat?.roundTo) {
        return formatNumber(processedTick, 'left', shouldAbbreviate, false, false, '1', {
          index,
          length: ticks.length
        })
      }

      // Standard vertical orientation formatting
      if (orientation === 'vertical') {
        return formatNumber(processedTick, 'left', shouldAbbreviate, false, false, undefined, {
          index,
          length: ticks.length
        })
      }

      return processedTick
    },
    [
      isLogarithmicAxis,
      visualizationType,
      data,
      xAxis.dataKey,
      runtime.yAxis,
      orientation,
      min,
      max,
      config.dataFormat?.roundTo,
      shouldAbbreviate,
      formatDate,
      formatNumber,
      parseDate
    ]
  )

  /**
   * Format ticks for the bottom (X) axis
   */
  const handleBottomTickFormatting = useCallback(
    (tick: number | string | Date, index: number, ticks: any[]) => {
      // Handle logarithmic scale
      let processedTick = typeof tick === 'number' ? handleLogarithmicTick(tick, isLogarithmicAxis) : tick

      // Date scale formatting (most common case for x-axis)
      if (isDateScale(runtime.xAxis) && visualizationType !== 'Forest Plot') {
        return formatDate(processedTick, index, ticks)
      }

      // Horizontal orientation (bars)
      if (orientation === 'horizontal' && visualizationType !== 'Forest Plot') {
        return formatNumber(processedTick, 'left', shouldAbbreviate)
      }

      // Continuous x-axis type
      if (xAxis.type === 'continuous' && visualizationType !== 'Forest Plot') {
        return formatNumber(processedTick, 'bottom', shouldAbbreviate)
      }

      // Forest Plot special case with prefix/suffix
      if (visualizationType === 'Forest Plot') {
        return formatNumber(
          processedTick,
          'left',
          config.dataFormat.abbreviated,
          runtime.xAxis.prefix,
          runtime.xAxis.suffix,
          Number(config.dataFormat.roundTo)
        )
      }

      return processedTick
    },
    [
      isLogarithmicAxis,
      runtime.xAxis,
      visualizationType,
      orientation,
      xAxis.type,
      shouldAbbreviate,
      config.dataFormat.abbreviated,
      config.dataFormat.roundTo,
      formatDate,
      formatNumber
    ]
  )

  return {
    handleLeftTickFormatting,
    handleBottomTickFormatting
  }
}

export default useTickFormatters
