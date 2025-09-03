import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import isNumber from '@cdc/core/helpers/isNumber'

// Define an interface for the function's parameter
interface BarConfigProps {
  defaultBarWidth?: number
  defaultBarHeight?: number
  bar?: { [key: string]: any }
  config: { [key: string]: any }
  barWidth: number
  isVertical: boolean
  yAxisValue: number
}

// Function to create bar width based on suppression status and missing data label
export const getBarConfig = ({
  bar,
  defaultBarHeight,
  defaultBarWidth,
  config,
  barWidth,
  isVertical,
  yAxisValue
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
  const absentDataLabel = getAbsentDataLabel(yAxisValue)
  return { barWidthHorizontal, barHeight, isSuppressed, showMissingDataLabel, getBarY, absentDataLabel }
}

export const testZeroValue = value => {
  if (value === undefined || value === null) {
    return
  }
  const regex = /^0(\.0)?$/
  return regex.test(value.toString())
}

export const addMinimumBarHeights = barStacks => {
  const MIN_BAR_HEIGHT = 3

  barStacks[0].bars.forEach((_, i) => {
    let segments = barStacks
      .map(bs => bs.bars[i])
      .filter(s => s.bar.data[s.key])
      .reverse()

    const segmentsNeedingAdjustment = segments.filter(segment => segment.height > 0 && segment.height < MIN_BAR_HEIGHT)
    const segmentsToShrink = segments.filter(segment => segment.height > MIN_BAR_HEIGHT)

    if (segmentsNeedingAdjustment.length > 0 && segmentsToShrink.length > 0) {
      segmentsNeedingAdjustment.forEach(smallSegment => {
        const heightToAdd = MIN_BAR_HEIGHT - smallSegment.height
        const heightToTakePerSegment = heightToAdd / segmentsToShrink.length

        segmentsToShrink.forEach(largeSegment => {
          largeSegment.height -= heightToTakePerSegment
        })

        smallSegment.height = MIN_BAR_HEIGHT
      })

      let cumulativeY = segments[0].y
      segments.forEach(segment => {
        segment.y = cumulativeY
        cumulativeY += segment.height
      })
    }
  })

  return barStacks
}
