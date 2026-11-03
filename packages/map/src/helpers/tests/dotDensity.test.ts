import { describe, expect, it } from 'vitest'
import { geoContains } from 'd3-geo'
import { generateDensityDots, getDotCount, type DotDensityGeometry } from '../dotDensity'

// D3 uses clockwise exterior rings and counterclockwise holes for small spherical polygons.
const square: DotDensityGeometry = {
  type: 'Feature',
  id: '04013',
  properties: {},
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [0, 0],
        [0, 10],
        [10, 10],
        [10, 0],
        [0, 0]
      ]
    ]
  }
}
const generate = (overrides = {}) => generateDensityDots({ feature: square, value: 1000, dotValue: 10, ...overrides })

describe('dot density placement', () => {
  it('represents quantities with whole dots and rejects invalid dot values', () => {
    expect(getDotCount(109, 10)).toBe(10)
    for (const value of [0, -1, NaN, Infinity]) expect(getDotCount(value, 10)).toBe(0)
    for (const dotValue of [0, -1, NaN, Infinity]) expect(() => getDotCount(100, dotValue)).toThrow(RangeError)
  })

  it('places the requested number inside the polygon and repeats exactly', () => {
    const result = generate()
    expect(result.complete).toBe(true)
    expect(result.points).toHaveLength(100)
    expect(result.points.every(point => geoContains(square, point))).toBe(true)
    expect(generate()).toEqual(result)
    expect(generate({ seed: 43 }).points).not.toEqual(result.points)
    expect(generate({ feature: { ...square, id: '04001' } }).points).not.toEqual(result.points)
    expect(generate({ value: 500 }).points).toEqual(result.points.slice(0, 50))
  })

  it('excludes polygon holes', () => {
    const feature: DotDensityGeometry = {
      ...square,
      geometry: {
        type: 'Polygon',
        coordinates: [
          ...square.geometry.coordinates,
          [
            [2, 2],
            [8, 2],
            [8, 8],
            [2, 8],
            [2, 2]
          ]
        ]
      } as DotDensityGeometry['geometry']
    }
    const result = generate({ feature })
    expect(result.complete).toBe(true)
    expect(result.points.every(point => geoContains(feature, point))).toBe(true)
    expect(result.points.some(([x, y]) => x > 2 && x < 8 && y > 2 && y < 8)).toBe(false)
  })

  it('weights separate islands by area rather than assigning equal numbers to each', () => {
    const feature: DotDensityGeometry = {
      ...square,
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [0, 0],
              [0, 1],
              [1, 1],
              [1, 0],
              [0, 0]
            ]
          ],
          [
            [
              [20, 0],
              [20, 2],
              [22, 2],
              [22, 0],
              [20, 0]
            ]
          ]
        ]
      }
    }
    const result = generate({ feature, value: 10000 })
    expect(result.complete).toBe(true)
    expect(result.points.every(point => geoContains(feature, point))).toBe(true)
    const largerIslandCount = result.points.filter(([x]) => x > 10).length
    expect(largerIslandCount).toBeGreaterThan(740)
    expect(largerIslandCount).toBeLessThan(860)
  })

  it('samples across the antimeridian without distributing dots around the world', () => {
    const feature: DotDensityGeometry = {
      ...square,
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [179, 0],
            [179, 2],
            [-179, 2],
            [-179, 0],
            [179, 0]
          ]
        ]
      }
    }
    const result = generate({ feature })
    expect(result.complete).toBe(true)
    expect(result.points.every(point => Math.abs(point[0]) >= 179 && geoContains(feature, point))).toBe(true)
  })

  it('does not allocate unbounded arrays and reports bounded sampling shortfalls', () => {
    expect(() => generate({ maxDots: 99 })).toThrow('Dot budget exceeded')
    expect(() => generate({ value: Number.MAX_VALUE, dotValue: Number.MIN_VALUE })).toThrow(RangeError)
    expect(() => generate({ seed: NaN })).toThrow(RangeError)
    expect(() => generate({ maxAttempts: -1 })).toThrow(RangeError)
    expect(generate({ maxAttempts: 0 })).toEqual({ points: [], requested: 100, complete: false })
    expect(generate({ value: 0 })).toEqual({ points: [], requested: 0, complete: true })
    expect(generate({ feature: { ...square, geometry: { type: 'Polygon', coordinates: [] } } }).complete).toBe(false)
  })
})
