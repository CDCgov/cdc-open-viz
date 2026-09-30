type HeatMapXAxisTickValuesOptions = {
  domain: string[]
  formattedLabels: Record<string, string>
  gridWidth?: number
  rotationDegrees: number
  requestedCount?: unknown
  measureLabel: (label: string) => number
  fontSize: number
  minimumGap?: number
}

const getPositiveInteger = (value: unknown) => {
  const numericValue = Number(value)

  if (!Number.isFinite(numericValue) || numericValue <= 0) return undefined

  return Math.floor(numericValue)
}

const sampleDomain = (domain: string[], requestedCount: number) => {
  const count = Math.min(Math.max(requestedCount, 1), domain.length)

  if (count >= domain.length) return domain
  if (count === 1) return [domain[0]]

  const lastIndex = domain.length - 1
  const sampledIndexes = Array.from({ length: count }, (_, index) => Math.round((index * lastIndex) / (count - 1)))

  return Array.from(new Set(sampledIndexes)).map(index => domain[index])
}

/**
 * HeatMap cells always use the complete x-domain. This helper only chooses which
 * domain values receive axis ticks and labels, preserving the first and last values
 * whenever at least two labels fit.
 */
export const getHeatMapXAxisTickValues = ({
  domain,
  formattedLabels,
  gridWidth,
  rotationDegrees,
  requestedCount,
  measureLabel,
  fontSize,
  minimumGap = 12
}: HeatMapXAxisTickValuesOptions) => {
  if (domain.length <= 1) return domain

  const configuredCount = getPositiveInteger(requestedCount)
  if (configuredCount) return sampleDomain(domain, configuredCount)
  if (gridWidth === undefined) return domain

  const radians = (Math.abs(rotationDegrees) * Math.PI) / 180
  const projectedLabelWidths = domain.map(value => {
    const labelWidth = measureLabel(formattedLabels[value] || value)
    return Math.abs(Math.cos(radians)) * labelWidth + Math.abs(Math.sin(radians)) * fontSize
  })
  const bandWidth = gridWidth / domain.length
  const everyLabelFits =
    rotationDegrees === 0 &&
    projectedLabelWidths.every((labelWidth, index) => {
      if (index === 0) return true

      const previousLabelWidth = projectedLabelWidths[index - 1]
      return previousLabelWidth / 2 + labelWidth / 2 + minimumGap <= bandWidth
    })

  // Band-scale labels are centered in neighboring cells. Check their actual pairwise
  // widths before falling back to the conservative widest-label density estimate.
  // Rotated labels use directional anchors, so they remain on the conservative path.
  if (everyLabelFits) return domain

  const widestProjectedLabel = projectedLabelWidths.reduce(
    (widestLabel, labelWidth) => Math.max(widestLabel, labelWidth),
    fontSize
  )
  const availableTickCount = Math.max(1, Math.floor(gridWidth / (widestProjectedLabel + minimumGap)))

  return sampleDomain(domain, availableTickCount)
}
