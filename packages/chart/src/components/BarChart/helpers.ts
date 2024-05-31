// Define an interface for the function's parameter
interface BarConfigProps {
  isSuppressed: boolean
  showMissingDataLabel: boolean
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
export const getBarDimensions = ({ isSuppressed, showMissingDataLabel, defaultBarWidth, suppressedBarWidth, defaultBarHeight, suppressedBarHeight }: BarConfigProps) => {
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

  return { barWidth, barHeight }
}
// Function to create bar Y poinstion based on suppression status and missing data label
export const getBarY = ({ bar, yScale, isSuppressed, scaleVal, showMissingDataLabel, isNumber, suppressedBarHeight }: BarConfigProps): number => {
  const suppressedY = yScale(scaleVal) - suppressedBarHeight
  const missingDataY = yScale(scaleVal) - 3
  const defaultBarY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)
  let barY = defaultBarY
  if (isSuppressed) {
    barY = suppressedY
  }
  if (showMissingDataLabel) {
    barY = missingDataY
  }

  return barY
}
