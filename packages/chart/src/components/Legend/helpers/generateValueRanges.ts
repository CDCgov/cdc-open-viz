/**
 * generateValueRanges - Creates value range bins for legend display
 *
 * Supports equal interval distribution with scaffolding for future quantile support.
 * Ranges are inclusive with no overlap, starting at 1 (e.g., 1-100, 101-200).
 */

export type RangeDistribution = 'equal' | 'quantile'

export type ValueRange = {
  min: number
  max: number
  label: string
}

export type GenerateValueRangesOptions = {
  minValue?: number
  maxValue: number
  numRanges: number
  distribution?: RangeDistribution
  formatNumber?: (value: number, axis?: string) => string
}

/**
 * Generates an array of value ranges for legend display
 */
export const generateValueRanges = ({
  minValue = 0,
  maxValue,
  numRanges,
  distribution = 'equal',
  formatNumber
}: GenerateValueRangesOptions): ValueRange[] => {
  if (numRanges <= 0 || maxValue <= minValue) {
    return []
  }

  const ranges: ValueRange[] = []

  if (distribution === 'equal') {
    const rangeSize = (maxValue - minValue) / numRanges

    for (let i = 0; i < numRanges; i++) {
      // Calculate raw boundaries
      const rawMin = minValue + i * rangeSize
      const rawMax = minValue + (i + 1) * rangeSize

      // For display:
      // - First range starts at floor of minValue
      // - Subsequent ranges start at previous max + 1 (monotonic constraint)
      // - Last range ends exactly at ceil of maxValue
      let displayMin: number
      let displayMax: number

      if (i === 0) {
        displayMin = Math.floor(rawMin)
      } else {
        // Start at previous range's max + 1 to avoid overlap
        displayMin = ranges[i - 1].max + 1
      }

      if (i === numRanges - 1) {
        // Last range ends exactly at maxValue
        displayMax = Math.ceil(maxValue)
      } else {
        displayMax = Math.floor(rawMax)
      }

      // Ensure min <= max (can happen with very small ranges)
      if (displayMin > displayMax) {
        displayMax = displayMin
      }

      // Format numbers if formatter provided
      const formattedMin = formatNumber ? formatNumber(displayMin, 'left') : displayMin.toLocaleString()
      const formattedMax = formatNumber ? formatNumber(displayMax, 'left') : displayMax.toLocaleString()

      ranges.push({
        min: displayMin,
        max: displayMax,
        label: displayMin === displayMax ? formattedMin : `${formattedMin}–${formattedMax}`
      })
    }
  } else if (distribution === 'quantile') {
    // Scaffolding for future quantile-based distribution
    // Would require passing in the actual data values to calculate percentiles
    // Currently, silently fall back to equal interval distribution
    return generateValueRanges({ minValue, maxValue, numRanges, distribution: 'equal', formatNumber })
  }

  return ranges
}
