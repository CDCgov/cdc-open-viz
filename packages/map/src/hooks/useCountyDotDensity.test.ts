import { renderHook } from '@testing-library/react'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { MapConfig } from '../types/MapConfig'
import type { DotDensityGeometry } from '../helpers/dotDensity'
import * as densityLayer from '../helpers/countyDotDensityLayer'
import useCountyDotDensity from './useCountyDotDensity'

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
const geos = [county]
const data = [{ FIPS: '04013', a: 50, b: 25 }]
const runtimeData = { '04013': data[0] }
const config = {
  general: { geoType: 'us-county', type: 'data' },
  data,
  dotDensity: {
    enabled: true,
    dotValue: 5,
    seed: 42,
    radius: 1.5,
    series: [{ id: 'a', column: 'a', color: '#0072B2', label: 'A' }]
  }
} as unknown as MapConfig
const hiddenSeries: string[] = []
const useLayer = (next: MapConfig) => useCountyDotDensity(next, runtimeData, geos, null, hiddenSeries)

afterEach(() => vi.restoreAllMocks())

describe('useCountyDotDensity', () => {
  it('redraws radius-only edits without preparing geographic dots again', () => {
    const prepare = vi.spyOn(densityLayer, 'prepareCountyDotDensity')
    const { result, rerender } = renderHook(useLayer, { initialProps: config })
    const prepared = result.current.densityLayer
    const initialCalls = prepare.mock.calls.length
    rerender({ ...cloneConfig(config), dotDensity: { ...config.dotDensity!, radius: 3 } })
    expect(result.current.dotDensity?.radius).toBe(3)
    expect(result.current.densityLayer).toBe(prepared)
    expect(prepare).toHaveBeenCalledTimes(initialCalls)
  })

  it('ignores equivalent series objects and display labels when deciding placement', () => {
    const { result, rerender } = renderHook(useLayer, { initialProps: config })
    const prepared = result.current.densityLayer
    rerender({
      ...config,
      dotDensity: {
        ...config.dotDensity!,
        series: config.dotDensity!.series.map(series => ({ ...series, label: 'Renamed' }))
      }
    })
    expect(result.current.densityLayer).toBe(prepared)
  })

  it.each([
    ['seed', { seed: 99 }],
    ['quantity', { dotValue: 10 }],
    ['column', { series: [{ ...config.dotDensity!.series[0], column: 'b' }] }],
    ['identity', { series: [{ ...config.dotDensity!.series[0], id: 'new-id' }] }]
  ])('prepares again when %s changes', (_name, change) => {
    const { result, rerender } = renderHook(useLayer, { initialProps: config })
    const prepared = result.current.densityLayer
    rerender({ ...config, dotDensity: { ...config.dotDensity!, ...change } })
    expect(result.current.densityLayer).not.toBe(prepared)
    expect(result.current.densityLayer?.error).toBe('')
  })

  it('uses source schema when filtered rows omit a configured column', () => {
    const sparseRuntime = { '04013': { FIPS: '04013', a: 50 } }
    const { result } = renderHook(() =>
      useCountyDotDensity(
        {
          ...config,
          dotDensity: {
            ...config.dotDensity!,
            series: [config.dotDensity!.series[0], { id: 'b', column: 'b', color: '#D55E00', label: 'B' }]
          }
        },
        sparseRuntime,
        geos,
        null,
        hiddenSeries
      )
    )
    expect(result.current.densityLayer?.error).toBe('')
    expect(result.current.densityLayer?.dots).toHaveLength(10)
    expect(result.current.densityLayer?.skippedValues).toBe(1)
  })

  it('uses supplied dashboard source columns when config.data is already filtered', () => {
    const sparseData = [{ FIPS: '04013', a: 50 }]
    const { result } = renderHook(() =>
      useCountyDotDensity(
        {
          ...config,
          data: sparseData,
          dataKey: 'dashboardData',
          dotDensity: {
            ...config.dotDensity!,
            series: [config.dotDensity!.series[0], { id: 'b', column: 'b', label: 'B', color: '#d55e00' }]
          }
        },
        { '04013': sparseData[0] },
        geos,
        null,
        hiddenSeries,
        ['FIPS', 'a', 'b']
      )
    )
    expect(result.current.densityLayer?.error).toBe('')
    expect(result.current.densityLayer?.dots).toHaveLength(10)
    expect(result.current.densityLayer?.skippedValues).toBe(1)
  })

  it('does not prepare state shapes from the renderable geography set', () => {
    const { result } = renderHook(() =>
      useCountyDotDensity(
        config,
        { ...runtimeData, '04': { a: 5000000 } },
        [{ ...county, id: '04' }, county],
        null,
        hiddenSeries
      )
    )
    expect(result.current.densityLayer?.error).toBe('')
    expect(result.current.densityLayer?.dots).toHaveLength(10)
    expect(result.current.densityLayer?.dots.every(dot => dot.countyId === '04013')).toBe(true)
  })
})

it('updates palette colors without changing geographic positions or counts', () => {
  const { result, rerender } = renderHook(useLayer, { initialProps: config })
  const before = result.current.densityLayer!
  rerender({
    ...config,
    general: {
      ...config.general,
      palette: { name: 'qualitative_standard', version: '2.1', isReversed: false, customColorsOrdered: ['#abcdef'] }
    }
  })
  const after = result.current.densityLayer!
  expect(after).not.toBe(before)
  expect(after.dots.map(dot => dot.color)).toEqual(Array(10).fill('#abcdef'))
  expect(after.dots.map(dot => dot.position)).toEqual(before.dots.map(dot => dot.position))
})
