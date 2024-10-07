// Define an interface for the function's parameter
interface BarConfigProps {
  defaultBarWidth?: number
  defaultBarHeight?: number
  bar?: { [key: string]: any }
  isNumber?: Function
  config: { [key: string]: any }
  getTextWidth: (a: string, b: string) => string
  barWidth: number
  isVertical: boolean
}

// Function to create bar width based on suppression status and missing data label
export const getBarConfig = ({
  bar,
  defaultBarHeight,
  defaultBarWidth,
  config,
  isNumber,
  getTextWidth,
  barWidth,
  isVertical
}: BarConfigProps) => {
  const heightMini = 3 /// height of small bars aka suppressed/NA/Zero valued
  let barHeight = defaultBarHeight

  let barWidthHorizontal = defaultBarWidth

  let barLabel = ''
  let isSuppressed = false
  let showMissingDataLabel = false
  let showZeroValueData = false
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
    const labelFits = Number(labelWidth) < barWidth && barWidth > 10
    showMissingDataLabel = true
    barHeight = labelFits ? heightMini : 0
    barWidthHorizontal = heightMini
  }
  // Handle undefined, null, or non-calculable bar.value

  if (!isSuppressed && bar.value === '0' && config.general.showZeroValueData) {
    const labelWidth = getTextWidth('0', `normal ${barWidth / 2}px sans-serif`)
    const labelFits = Number(labelWidth) < barWidth && barWidth > 10
    showZeroValueData = true
    barHeight = labelFits ? heightMini : 0
    barWidthHorizontal = heightMini
  }

  const getBarY = (defaultBarY, yScale) => {
    // calculate Y position of small bars (suppressed,N/A,Zero valued) bars
    if (isSuppressed || showMissingDataLabel || showZeroValueData) {
      if (config.isLollipopChart) {
        return yScale - heightMini * 2
      } else {
        return yScale - heightMini
      }
    }
    return defaultBarY
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
    if (showZeroValueData) label = '0'

    // determine label width in pixels & check if it fits to the bar width
    const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
    const labelFits = Number(labelWidth) < barWidth && barWidth > 10
    if (config.isLollipopChart) {
      return label
    } else {
      return labelFits && isVertical ? label : !isVertical ? label : ''
    }
  }
  return { barWidthHorizontal, barHeight, isSuppressed, showMissingDataLabel, getBarY, getAbsentDataLabel }
}

export const testZeroValue = value => {
  if (value === undefined || value === null) {
    return
  }
  const regex = /^0(\.0)?$/
  return regex.test(value.toString())
}
