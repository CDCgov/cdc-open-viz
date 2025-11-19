import { getTextWidth } from '@cdc/core/helpers/getTextWidth'

interface CalculateHorizontalBarCategoryLabelWidthProps {
  yScale: any
  parentWidth: number
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
  parentWidth,
  formatDate,
  parseDate,
  tickLabelFont,
  xAxisType,
  labelPlacement
}: CalculateHorizontalBarCategoryLabelWidthProps): number => {
  if (labelPlacement !== 'On Date/Category Axis') return 0

  const categoryValues = yScale.domain()

  if (!categoryValues || categoryValues.length === 0) {
    return parentWidth * 0.3
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

  const paddedWidth = maxLabelWidth + 20
  const maxAllowedWidth = parentWidth * 0.3

  return Math.min(paddedWidth, maxAllowedWidth)
}
