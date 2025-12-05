import { clamp } from 'lodash'

// TODO: generalize this to be used in legends other than linear block gradient

const LEGEND_SEPARATOR_SIZE = 0.02
const LEGEND_SEPARATOR_SIZE_MAX = 20
const LEGEND_SEPARATOR_SIZE_MIN = 8

const useLegendSeparators = (separators, legendWidth, allowsLegendSeparators) => {
  const legendSeparators = allowsLegendSeparators
    ? separators?.replace(' ', '').split(',').map(Number).filter(Boolean) || []
    : []
  const separatorSize = clamp(legendWidth * LEGEND_SEPARATOR_SIZE, LEGEND_SEPARATOR_SIZE_MIN, LEGEND_SEPARATOR_SIZE_MAX)
  const legendSeparatorsToSubtract = legendSeparators.length * separatorSize
  const getTickSeparatorsAdjustment = (index: number) =>
    legendSeparators.reduce((acc, separators) => (index >= separators ? acc + separatorSize : acc), 0)

  return {
    legendSeparators,
    separatorSize,
    legendSeparatorsToSubtract,
    getTickSeparatorsAdjustment
  }
}

export default useLegendSeparators
