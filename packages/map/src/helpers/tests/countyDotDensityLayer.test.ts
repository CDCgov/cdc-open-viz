import { describe, expect, it, vi } from 'vitest'
import type { GeoProjection } from 'd3-geo'
import type { DotDensityGeometry } from '../dotDensity'
import { prepareCountyDotDensity, drawCountyDotDensity } from '../countyDotDensityLayer'

const county: DotDensityGeometry = {
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
const settings = {
  dotValue: 5,
  seed: 42,
  series: [
    { id: 'a', column: 'a', color: '#0072B2' },
    { id: 'b', column: 'b', color: '#D55E00' }
  ]
}

describe('county dot density layer', () => {
  it('uses only production runtime rows and gives categories independent stable positions', () => {
    const result = prepareCountyDotDensity([county], { '04013': { a: 50, b: 50 } }, settings)
    expect(result.error).toBe('')
    expect(result.dots).toHaveLength(20)
    expect(result.dots.filter(dot => dot.seriesId === 'a').map(dot => dot.position)).not.toEqual(
      result.dots.filter(dot => dot.seriesId === 'b').map(dot => dot.position)
    )
    expect(prepareCountyDotDensity([county], { '04013': { a: 50, b: 50 } }, settings)).toEqual(result)
    expect(prepareCountyDotDensity([county], {}, settings).dots).toHaveLength(0)
  })

  it('enforces the combined category budget and rejects invalid settings without partial output', () => {
    expect(prepareCountyDotDensity([county], { '04013': { a: 300000, b: 300000 } }, settings).error).toContain(
      'Increase the dot value'
    )
    expect(prepareCountyDotDensity([county], {}, { ...settings, dotValue: 0 }).error).toContain('positive')
    expect(prepareCountyDotDensity([county], { '04013': { a: -5, b: 'invalid' } }, settings).dots).toHaveLength(0)
  })

  it('reports missing, negative, and invalid counts without treating them as observed zeros', () => {
    const result = prepareCountyDotDensity([county], { '04013': { a: null, b: -5 } }, settings)
    expect(result.dots).toHaveLength(0)
    expect(result.skippedValues).toBe(2)
    expect(prepareCountyDotDensity([county], { '04013': { a: 0, b: '0' } }, settings).skippedValues).toBe(0)
    expect(prepareCountyDotDensity([county], { '04013': { a: 5 } }, settings).error).toContain('missing from the data')
    expect(prepareCountyDotDensity([county], {}, { ...settings, series: [] }).error).toContain('Choose at least')
    expect(
      prepareCountyDotDensity(
        [county],
        {},
        { ...settings, series: [{ ...settings.series[0], color: 'invalid-color' }] }
      ).error
    ).toContain('valid color')
    expect(
      prepareCountyDotDensity([county], {}, { ...settings, series: [settings.series[0], settings.series[0]] }).error
    ).toContain('unique')
  })

  it('draws through the supplied projection, respects county/category visibility, and scales radius with zoom', () => {
    const result = prepareCountyDotDensity([county], { '04013': { a: 10, b: 10 } }, settings)
    const canvas = document.createElement('canvas')
    const context = { canvas, save: vi.fn(), restore: vi.fn(), beginPath: vi.fn(), arc: vi.fn(), fill: vi.fn() }
    const projection = vi.fn(([x, y]) => [x + 20, y + 10])
    drawCountyDotDensity(
      context as unknown as CanvasRenderingContext2D,
      projection as unknown as GeoProjection,
      result,
      2,
      4,
      ['b'],
      () => true
    )
    expect(context.arc).toHaveBeenCalledTimes(2)
    expect(context.arc.mock.calls[0][2]).toBe(0.5)
    expect(JSON.parse(canvas.dataset.seriesCounts!)).toEqual({ a: 2, b: 0 })
    expect(canvas.dataset.positionSignature).toBe(result.signature)
    drawCountyDotDensity(
      context as unknown as CanvasRenderingContext2D,
      projection as unknown as GeoProjection,
      result,
      2,
      1,
      [],
      () => false
    )
    expect(canvas.dataset.drawnDots).toBe('0')
  })
})
