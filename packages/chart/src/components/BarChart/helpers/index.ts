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
        const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
        const labelFits = labelWidth < barWidth && barWidth > 10
        barHeight = labelFits ? 3 : 0
        barWidthHorizontal = 3
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

    barHeight = labelFits ? 3 : 0
    barWidthHorizontal = 3
    barLabel = labelFits && isVertical ? 'N/A' : !isVertical ? 'N/A' : ''
  }
  // handle zero values
  if (!isSuppressed && String(bar.value) === '0' && config.general.showZeroValueDataLabel) {
    const labelWidth = getTextWidth(barLabel, `normal ${barWidth / 2}px sans-serif`)
    const labelFits = labelWidth < barWidth && barWidth > 10
    barHeight = labelFits ? 3 : 0
    barWidthHorizontal = 3
    showZeroValueDataLabel = true
    barLabel = labelFits && isVertical ? '0' : !isVertical ? '0' : ''
  }

  return { barWidthHorizontal, barHeight, barLabel, isSuppressed, showMissingDataLabel, showZeroValueDataLabel }
}
