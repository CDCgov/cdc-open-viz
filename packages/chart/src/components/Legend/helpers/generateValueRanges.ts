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

      // For display: first range starts at 1, subsequent ranges start at previous max + 1
      const displayMin = i === 0 ? 1 : Math.round(rawMin) + 1
      const displayMax = Math.round(rawMax)

      // Format numbers if formatter provided
      const formattedMin = formatNumber ? formatNumber(displayMin, 'left') : displayMin.toLocaleString()
      const formattedMax = formatNumber ? formatNumber(displayMax, 'left') : displayMax.toLocaleString()

      ranges.push({
        min: displayMin,
        max: displayMax,
        label: `${formattedMin}–${formattedMax}`
      })
    }
  } else if (distribution === 'quantile') {
    // Scaffolding for future quantile-based distribution
    // Would require passing in the actual data values to calculate percentiles
    console.warn('Quantile distribution not yet implemented, falling back to equal intervals')
    return generateValueRanges({ minValue, maxValue, numRanges, distribution: 'equal', formatNumber })
  }

  return ranges
}
