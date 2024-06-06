// Define an interface for the function's parameter
interface BarConfigProps {
  isSuppressed: boolean
  showMissingDataLabel: boolean
  showZeroValueDataLabel: boolean
  defaultBarWidth?: number
  defaultBarHeight?: number
  suppressedBarWidth?: number
  suppressedBarHeight?: number
  bar?: { [key: string]: any }
  yScale?: Function
  scaleVal?: number
  isNumber?: Function
}

// Function to create bar width based on suppression status and missing data label
export const getBarDimensions = ({ isSuppressed, showMissingDataLabel, defaultBarWidth, suppressedBarWidth, defaultBarHeight, suppressedBarHeight, showZeroValueDataLabel }: BarConfigProps) => {
  let barWidth = defaultBarWidth
  let barHeight = defaultBarHeight
  const showMissingBarHeight = showMissingDataLabel ? 3 : 0
  if (isSuppressed) {
    barHeight = suppressedBarHeight
    barWidth = suppressedBarWidth
  }
  if (showMissingDataLabel) {
    barWidth = suppressedBarWidth
    barHeight = showMissingBarHeight
  }
  if (showZeroValueDataLabel) {
    barHeight = showZeroValueDataLabel ? 3 : 0
    barWidth = suppressedBarWidth
  }

  return { barWidth, barHeight }
}
// Function to create bar Y poinstion based on suppression status and missing data label
export const getBarY = ({ bar, yScale, isSuppressed, scaleVal, showMissingDataLabel, isNumber, suppressedBarHeight, showZeroValueDataLabel }: BarConfigProps): number => {
  const suppressedY = yScale(scaleVal) - suppressedBarHeight
  const missingDataY = yScale(scaleVal) - 3
  const zeroValueDataY = yScale(scaleVal) - 3
  const defaultBarY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)
  let barY = defaultBarY
  if (isSuppressed) {
    barY = suppressedY
  }
  if (showMissingDataLabel) {
    barY = missingDataY
  }
  if (showZeroValueDataLabel) {
    barY = zeroValueDataY
  }
  return barY
}
