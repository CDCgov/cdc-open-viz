import type { GeoProjection } from 'd3-geo'
import { getAvailableMapColumns } from './getMissingRequiredMapFields'
import chroma from 'chroma-js'
import { generateDensityDots, getDotCount, type DotDensityGeometry, type DotPosition } from './dotDensity'

export type CountyDotDensitySettings = {
  dotValue: number
  seed: number
  series: readonly { id: string; column: string; color: string }[]
}
type Dot = { countyId: string; seriesId: string; color: string; position: DotPosition; order: number }

/** Runs on geometry/data/settings changes, never on a zoom frame or disease toggle. */
export const prepareCountyDotDensity = (
  features: DotDensityGeometry[],
  runtimeData: Record<string, Record<string, unknown>>,
  settings: CountyDotDensitySettings,
  sourceColumns?: readonly string[]
): { dots: Dot[]; error: string; signature: string; skippedValues: number } => {
  const { dotValue, seed, series } = settings
  const empty = (error: string) => ({ dots: [], error, signature: '', skippedValues: 0 })
  if (!Number.isFinite(dotValue) || dotValue <= 0 || !Number.isFinite(seed)) {
    return empty('Choose a positive, finite dot value and a finite seed.')
  }
  if (!series.length) return empty('Choose at least one count column for dot density.')
  if (series.some(item => typeof item.color !== 'string' || !chroma.valid(item.color)))
    return empty('Choose a valid color for each dot density series.')
  if (
    series.some(item => typeof item.id !== 'string' || !item.id.trim()) ||
    new Set(series.map(item => item.id)).size !== series.length
  ) {
    return empty('Dot density series must have unique, nonempty IDs.')
  }
  const rows = features.filter(feature => runtimeData[String(feature.id)])
  // Filtering can omit every value of an existing column without removing its mapping.
  const availableColumns = new Set(
    sourceColumns ?? getAvailableMapColumns(rows.map(feature => runtimeData[String(feature.id)]))
  )
  const hasSchema = sourceColumns !== undefined ? availableColumns.size > 0 : rows.length > 0
  const missing = hasSchema && series.find(item => !availableColumns.has(item.column))
  if (missing) return empty(`Count column "${missing.column}" is missing from the data.`)
  let skippedValues = 0
  const values = new Map<string, number[]>()
  rows.forEach(feature =>
    values.set(
      String(feature.id),
      series.map(item => {
        const raw = runtimeData[String(feature.id)][item.column]
        const value = typeof raw === 'number' || (typeof raw === 'string' && raw.trim() !== '') ? Number(raw) : NaN
        if (!Number.isFinite(value) || value < 0) {
          skippedValues++
          return 0
        }
        return value
      })
    )
  )
  const requested = rows.reduce(
    (sum, feature) =>
      sum +
      series.reduce(
        (total, _category, index) => total + getDotCount(values.get(String(feature.id))![index], dotValue),
        0
      ),
    0
  )
  if (requested > 100000)
    return empty(
      `${requested.toLocaleString()} dots requested. Increase the dot value to stay within the 100,000-dot prototype budget.`
    )

  const dots: Dot[] = []
  const signatures: string[] = []
  for (const feature of rows) {
    const countyId = String(feature.id)
    for (let categoryIndex = 0; categoryIndex < series.length; categoryIndex++) {
      const category = series[categoryIndex]
      const result = generateDensityDots({
        feature: { ...feature, id: `${countyId}:${category.id}` },
        value: values.get(countyId)![categoryIndex],
        dotValue,
        seed
      })
      if (!result.complete)
        return empty('Placement limit reached. Increase the dot value; no partial distribution is shown.')
      signatures.push(
        `${countyId}:${category.id}:${result.points
          .slice(0, 3)
          .map(point => point.join(','))
          .join(';')}`
      )
      result.points.forEach((position, index) =>
        dots.push({
          countyId,
          seriesId: category.id,
          color: category.color,
          position,
          // Deterministically mix paint order so one category is not always on top.
          order:
            (Math.imul(index + 1, 2654435761) ^
              Math.imul(Number(countyId), 1597334677) ^
              Math.imul(categoryIndex + 1, 3812015801)) >>>
            0
        })
      )
    }
  }
  dots.sort((a, b) => a.order - b.order)
  return { dots, error: '', signature: signatures.join('|'), skippedValues }
}

/** Uses the county renderer's already-transformed context and exact projection. */
export const drawCountyDotDensity = (
  context: CanvasRenderingContext2D,
  projection: GeoProjection,
  prepared: ReturnType<typeof prepareCountyDotDensity>,
  radius: number,
  zoomScale: number,
  hiddenSeries: readonly string[],
  isCountyVisible: (id: string) => boolean
) => {
  const counts: Record<string, number> = {}
  const validRadius = Number.isFinite(radius) && radius > 0
  context.save()
  if (validRadius) {
    const dotRadius = radius / zoomScale
    for (const dot of prepared.dots) {
      counts[dot.seriesId] ??= 0
      if (hiddenSeries.includes(dot.seriesId) || !isCountyVisible(dot.countyId)) continue
      const position = projection(dot.position)
      if (!position) continue
      counts[dot.seriesId] = (counts[dot.seriesId] || 0) + 1
      context.fillStyle = dot.color
      context.beginPath()
      context.arc(position[0], position[1], dotRadius, 0, Math.PI * 2)
      context.fill()
    }
  }
  context.restore()
  const canvas = context.canvas
  canvas.dataset.drawnDots = String(Object.values(counts).reduce((sum, count) => sum + count, 0))
  canvas.dataset.seriesCounts = JSON.stringify(counts)
  canvas.dataset.positionSignature = prepared.signature
  canvas.dataset.densityError = validRadius ? prepared.error : 'Choose a positive, finite dot radius.'
}
