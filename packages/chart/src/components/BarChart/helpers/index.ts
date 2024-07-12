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

  let barLabel = ''
  let isSuppressed = false
  let showMissingDataLabel = false
  let showZeroValueDataLabel = false
  const showSuppressedSymbol = config.general.showSuppressedSymbol

  config.preliminaryData.forEach(pd => {
    const hasColumn = !pd.column || pd.column === bar.key
    if (hasColumn && pd.type === 'suppression' && pd.value && String(pd.value) === String(bar.value)) {
      if (!pd.hideBarSymbol && showSuppressedSymbol) {
        barHeight = barWidth > 10 ? heightMini : 0
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
  }
  // handle zero values
  if (!isSuppressed && String(bar.value) === '0' && config.general.showZeroValueDataLabel) {
    const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
    const labelFits = labelWidth < barWidth && barWidth > 10
    barHeight = labelFits ? heightMini : 0
    barWidthHorizontal = heightMini
    showZeroValueDataLabel = true
  }

  const getBarY = (defaultBarY, yScale) => {
    // calculate Y position of small bars (suppressed,N/A,Zero valued) bars
    return isSuppressed || showMissingDataLabel || showZeroValueDataLabel ? yScale - heightMini : defaultBarY
  }

  // Function to determine the label for a bar in a bar chart vertical/Horizontal
  const getAbsentDataLabel = yAxisValue => {
    // Initialize label with the yAxisValue
    let label = ''
    // Check if the label is exactly '0' and if so, hide it
    if (String(yAxisValue) === '0') label = ''
    // Check if the bar is marked as suppressed. If so, do not show any label.
    if (isSuppressed) label = ''
    // If the config is set to show a label for missing data, display 'N/A'
    if (showMissingDataLabel) label = 'N/A'
    // If the config is set to specifically show zero values, set the label to '0'
    if (showZeroValueDataLabel) label = '0'

    // determine label width in pixels & check if it fits to the bar width
    const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
    const labelFits = labelWidth < barWidth && barWidth > 10
    return labelFits && isVertical ? label : !isVertical ? label : ''
  }

  return { barWidthHorizontal, barHeight, isSuppressed, showMissingDataLabel, showZeroValueDataLabel, getBarY, getAbsentDataLabel }
}
