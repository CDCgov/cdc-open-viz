/**
 * Calculates the band dimensions for horizon chart rows
 * Used by both HorizonChart (for rendering) and LeftAxis (for label positioning)
 */

const MIN_BAND_HEIGHT = 10

export type HorizonBandCalculation = {
  bandHeight: number
  getRowY: (index: number) => number
}

export function calculateHorizonBands(
  numSeries: number,
  yMax: number,
  bandGap: number | string,
  bottomPadding: number | string = 15
): HorizonBandCalculation {
  const gap = Number(bandGap) || 0
  const padding = Number(bottomPadding) || 0

  const totalGapSpace = (numSeries - 1) * gap + padding
  const bandHeight = Math.max((yMax - totalGapSpace) / numSeries, MIN_BAND_HEIGHT)
  const getRowY = (index: number) => index * (bandHeight + gap)

  return { bandHeight, getRowY }
}
