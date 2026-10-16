import { getTextWidth } from '@cdc/core/helpers/getTextWidth'

interface CalculateHorizontalBarCategoryLabelWidthProps {
  yScale: any
  chartWidth: number
  formatDate: Function
  parseDate: Function
  tickLabelFont: string
  xAxisType?: string
  labelPlacement?: string
}

/**
 * Helper function to calculate category label space for horizontal bar charts
 *
 * @param props Configuration object with chart properties
 * @returns Calculated category label space, capped at 30% of parent width
 */
export const calculateHorizontalBarCategoryLabelWidth = ({
  yScale,
  chartWidth,
  formatDate,
  parseDate,
  tickLabelFont,
  xAxisType,
  labelPlacement
}: CalculateHorizontalBarCategoryLabelWidthProps): number => {
  if (labelPlacement !== 'On Date/Category Axis') return 0

  const categoryValues = yScale.domain()

  if (!categoryValues || categoryValues.length === 0) {
    return chartWidth * 0.3
  }

  const formattedLabels = categoryValues.map(value => {
    if (xAxisType === 'date') {
      try {
        return formatDate(parseDate(value))
      } catch (e) {
        return String(value)
      }
    }
    return String(value)
  })

  const labelWidths = formattedLabels.map(label => getTextWidth(label, tickLabelFont))
  const maxLabelWidth = Math.max(...labelWidths)

  // We need some extra padding or visx will wrap labels too early. Keep a
  // minimum gap so short labels do not sit too close to the chart area.
  const paddedWidth = maxLabelWidth + Math.max(10, Math.ceil(maxLabelWidth * 0.15))

  // Allocate at most 30% of chart width to category labels
  const maxAllowedWidth = chartWidth * 0.3

  return Math.min(paddedWidth, maxAllowedWidth)
}
