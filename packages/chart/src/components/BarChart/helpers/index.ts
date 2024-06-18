// Define an interface for the function's parameter
interface BarConfigProps {
  defaultBarWidth?: number
  defaultBarHeight?: number
  bar?: { [key: string]: any }
  isNumber?: Function
  config: { [key: string]: any }
  getTextWidth: Function
  barWidth: number
  isVertical: boolean
}

// Function to create bar width based on suppression status and missing data label
export const getBarConfig = ({ bar, defaultBarHeight, defaultBarWidth, config, isNumber, getTextWidth, barWidth, isVertical }: BarConfigProps) => {
  const heightMini = 3 /// height of small bars aka suppressed/NA/Zero valued
  let barHeight = defaultBarHeight

  let barWidthHorizontal = defaultBarWidth
  // label for vertical/horizontal bars
  let barLabel = ''
  let isSuppressed = false
  let showMissingDataLabel = false
  let showZeroValueDataLabel = false
  const showSuppressedSymbol = config.general.showSuppressedSymbol

  config.preliminaryData.forEach(pd => {
    const hasColumn = !pd.column || pd.column === bar.key
    if (hasColumn && pd.type === 'suppression' && pd.value && String(pd.value) === String(bar.value)) {
      if (!pd.hideBarSymbol && showSuppressedSymbol) {
        const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
        const labelFits = labelWidth < barWidth && barWidth > 10
        barHeight = labelFits ? heightMini : 0
        barWidthHorizontal = heightMini
        isSuppressed = true
      } else {
        barHeight = 0
        barWidthHorizontal = 0
        isSuppressed = true
      }
    }
  })

  // Handle undefined, null, or non-calculable bar.value
  if (!isSuppressed && !isNumber(bar.value) && config.general.showMissingDataLabel) {
    const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
    const labelFits = labelWidth < barWidth && barWidth > 10
    showMissingDataLabel = true
    barHeight = labelFits ? heightMini : 0
    barWidthHorizontal = heightMini
    // check if label fits to the bar width else hide
    barLabel = labelFits && isVertical ? 'N/A' : !isVertical ? 'N/A' : ''
  }
  // handle zero values
  if (!isSuppressed && String(bar.value) === '0' && config.general.showZeroValueDataLabel) {
    const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
    const labelFits = labelWidth < barWidth && barWidth > 10
    barHeight = labelFits ? heightMini : 0
    barWidthHorizontal = heightMini
    showZeroValueDataLabel = true
    // check if label fits to the bar width else hide
    barLabel = labelFits && isVertical ? '0' : !isVertical ? '0' : ''
  }

  const getBarY = (defaultBarY, yScale) => {
    // calculate Y position of small bars (suppressed,N/A,Zero valued) bars
    return isSuppressed || showMissingDataLabel || showZeroValueDataLabel ? yScale - heightMini : defaultBarY
  }

  // Function to determine the label for a bar in a bar chart vertical/Horizontal
  const getBarLabel = yAxisValue => {
    // Initialize label with the yAxisValue
    let label = yAxisValue
    // Check if the label is exactly '0' and if so, hide it
    if (String(label) === '0') label = ''
    // Check if the bar is marked as suppressed. If so, do not show any label.
    if (isSuppressed) label = ''
    // If the config is set to show a label for missing data, display 'N/A'
    if (showMissingDataLabel) label = 'N/A'
    // If the config is set to specifically show zero values, set the label to '0'
    if (showZeroValueDataLabel) label = '0'
    // This conditional checks if label display is disabled globally for vertical bars (via config.labels),
    if (!config.labels && !isSuppressed && !showZeroValueDataLabel && !showMissingDataLabel && isVertical) {
      label = ''
    }
    // This conditional checks if label display is disabled globally for horizontal bars (via config.labels),
    if (!config.yAxis.displayNumbersOnBar && !isVertical && !isSuppressed && !showZeroValueDataLabel && !showMissingDataLabel) {
      label = ''
    }
    // determine label width in pixels & check if it fits to the bar width
    const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
    const labelFits = labelWidth < barWidth && barWidth > 10
    return labelFits && isVertical ? label : !isVertical ? label : ''
  }

  return { barWidthHorizontal, barHeight, barLabel, isSuppressed, showMissingDataLabel, showZeroValueDataLabel, getBarY, getBarLabel }
}
