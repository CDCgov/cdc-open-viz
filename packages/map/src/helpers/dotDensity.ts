import { geoArea, geoBounds, geoContains } from 'd3-geo'
import { randomLcg } from 'd3'
import type { Feature, MultiPolygon, Polygon, Position } from 'geojson'

export type DotDensityGeometry = Feature<Polygon | MultiPolygon>
export type DotPosition = [number, number]

export const getDotCount = (value: number, dotValue: number): number => {
  if (!Number.isFinite(dotValue) || dotValue <= 0) throw new RangeError('Dot value must be positive and finite')
  if (!Number.isFinite(value) || value <= 0) return 0
  const quotient = value / dotValue
  const nearestInteger = Math.round(quotient)
  // Recover exact decimal multiples (33 / 1.1), while preserving real remainders.
  // Cap the tolerance so large quotients cannot turn fractional dots into whole dots.
  const tolerance = Math.min(2 * Number.EPSILON * quotient, 1e-9)
  return Math.abs(quotient - nearestInteger) <= tolerance ? nearestInteger : Math.floor(quotient)
}

/** County identity makes placement independent of row order and which other counties are visible. */
const countySeed = (id: string, seed: number): number => {
  let hash = seed | 0
  for (let i = 0; i < id.length; i++) hash = Math.imul(hash ^ id.charCodeAt(i), 16777619)
  return hash >>> 0
}

/**
 * Uniform spherical-area sampling, not uniform latitude sampling. Select an island by
 * area BEFORE rejection sampling, so its bounding-box shape cannot bias its weight.
 * Call once per data/settings change; project and draw these positions separately.
 */
export const generateDensityDots = ({
  feature,
  value,
  dotValue,
  seed = 42,
  maxDots = 100000,
  maxAttempts = 1000000
}: {
  feature: DotDensityGeometry
  value: number
  dotValue: number
  seed?: number
  maxDots?: number
  maxAttempts?: number
}): { points: DotPosition[]; requested: number; complete: boolean } => {
  const requested = getDotCount(value, dotValue)
  if (!Number.isFinite(seed)) throw new RangeError('Seed must be finite')
  if (!Number.isSafeInteger(maxDots) || maxDots < 0 || !Number.isSafeInteger(maxAttempts) || maxAttempts < 0) {
    throw new RangeError('Sampling limits must be nonnegative safe integers')
  }
  if (!Number.isSafeInteger(requested) || requested > maxDots) throw new RangeError('Dot budget exceeded')
  if (!requested) return { points: [], requested, complete: true }

  const coordinates: Position[][][] =
    feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates
  const components = coordinates
    .filter(rings => rings.length > 0 && rings[0].length >= 4)
    .map(coordinates => {
      const polygon: Polygon = { type: 'Polygon', coordinates }
      return { polygon, area: geoArea(polygon), bounds: geoBounds(polygon) }
    })
    .filter(component => Number.isFinite(component.area) && component.area > 0)
  const totalArea = components.reduce((sum, component) => sum + component.area, 0)
  const random = randomLcg(countySeed(String(feature.id ?? ''), seed))
  const radians = Math.PI / 180
  const points: DotPosition[] = []
  let attempts = 0

  while (points.length < requested && attempts < maxAttempts && totalArea > 0) {
    let target = random() * totalArea
    const component = components.find(component => (target -= component.area) < 0) || components[components.length - 1]
    const [[west, south], [east, north]] = component.bounds
    const longitudeWidth = east >= west ? east - west : east + 360 - west
    const minSin = Math.sin(south * radians)
    const maxSin = Math.sin(north * radians)

    while (attempts < maxAttempts) {
      attempts++
      const longitude = west + random() * longitudeWidth
      const latitude = Math.asin(minSin + random() * (maxSin - minSin)) / radians
      const point: DotPosition = [longitude > 180 ? longitude - 360 : longitude, latitude]
      if (geoContains(component.polygon, point)) {
        points.push(point)
        break
      }
    }
  }

  return { points, requested, complete: points.length === requested }
}
