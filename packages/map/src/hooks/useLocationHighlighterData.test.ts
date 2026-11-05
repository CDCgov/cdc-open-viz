import { renderHook } from '@testing-library/react'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import { useLocationHighlighterData } from './useLocationHighlighterData'

const makeInput = (year = '2024') => ({
  config: createNewMapConfig({
    general: { type: 'data', geoType: 'us' },
    columns: { geo: { name: 'State' } },
    locationHighlighter: { enabled: true }
  } as any),
  runtimeData: { 'US-AK': { State: 'Alaska', Year: year, URL: `/alaska-${year}` } } as unknown,
  sourceData: [{ State: 'Alaska', Year: year, URL: `/alaska-${year}` }],
  runtimeFilters: [{ columnName: 'Year', active: year }] as any
})

describe('useLocationHighlighterData', () => {
  it('holds a consistent snapshot through intermediate filter payloads and accepts the new geography data', () => {
    const previous = makeInput()
    const next = makeInput('2025')
    const { result, rerender } = renderHook(useLocationHighlighterData, { initialProps: previous })
    const snapshot = result.current
    for (const runtimeData of [next.runtimeFilters, [], { init: true }]) {
      rerender({ ...next, runtimeData })
      expect(result.current).toBe(snapshot)
      expect(result.current?.config).toBe(previous.config)
      expect(result.current?.sourceData).toBe(previous.sourceData)
      expect(result.current?.runtimeFilters).toBe(previous.runtimeFilters)
    }
    rerender(next)
    expect(result.current?.runtimeData).toBe(next.runtimeData)
    expect(result.current?.sourceData).toBe(next.sourceData)
    expect(result.current?.runtimeFilters).toBe(next.runtimeFilters)
  })

  it('accepts a completed empty geography result instead of retaining a removed selection', () => {
    const input = makeInput()
    const { result, rerender } = renderHook(useLocationHighlighterData, { initialProps: input })
    const empty = {}
    rerender({ ...input, runtimeData: empty })
    expect(result.current?.runtimeData).toBe(empty)
    rerender({ ...input, runtimeData: [] })
    expect(result.current?.runtimeData).toBe(empty)
  })

  it('does not invent data before initialization or retain a snapshot when the selector is disabled', () => {
    const input = makeInput()
    const { result, rerender } = renderHook(useLocationHighlighterData, {
      initialProps: { ...input, runtimeData: { init: true } as unknown }
    })
    expect(result.current).toBeNull()
    rerender(input)
    expect(result.current?.runtimeData).toBe(input.runtimeData)
    const config = createNewMapConfig({ ...input.config, locationHighlighter: { enabled: false } } as any)
    rerender({ ...input, config })
    expect(result.current).toBeNull()
    rerender({ ...input, runtimeData: [] })
    expect(result.current).toBeNull()
  })

  it('keeps separate map instances independent', () => {
    const first = makeInput()
    const second = makeInput('2025')
    const { result, rerender } = renderHook(
      ({ a, b }) => [useLocationHighlighterData(a), useLocationHighlighterData(b)],
      {
        initialProps: { a: first, b: second }
      }
    )
    rerender({ a: { ...first, runtimeData: [] }, b: second })
    expect(result.current[0]?.runtimeData).toBe(first.runtimeData)
    expect(result.current[1]?.runtimeData).toBe(second.runtimeData)
  })
})
