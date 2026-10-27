import { describe, expect, it } from 'vitest'
import initialState from '../../data/initial-state'
import { createDefaultBubbleLayer } from '../bubbleLayers'
import { prepareBubbleCandidates } from '../bubbleRenderData'
import { getBubbleLocation, getBubbleProjection, isTerritoryBubblePlaceable } from '../bubblePlacement'
import generateRuntimeData from '../generateRuntimeData'
import { getOverlayLegendVisibility } from '../overlayLegendVisibility'

const build = () => {
  const config = structuredClone(initialState) as any
  config.general.geoType = 'us'
  config.columns.geo.name = 'State'
  config.columns.primary.name = 'Value'
  config.legend.type = 'category'
  config.data = [
    { State: 'Alabama', Value: 'A', Size: 10, Tab: 'First' },
    { State: 'Alabama', Value: 'B', Size: 30, Tab: 'Second' },
    { State: 'California', Value: 'C', Size: 0, Tab: 'Second' }
  ]
  config.filters = [{ columnName: 'Tab', active: 'First', type: 'data' }]
  config.map.patterns = [
    { dataKey: '', dataValue: 'A', pattern: 'waves' },
    { dataKey: 'Value', dataValue: 'A', pattern: 'circles' },
    { dataKey: 'Value', dataValue: 'B', pattern: 'diagonalLines' }
  ]
  config.bubble.layers = [
    createDefaultBubbleLayer({
      columns: {
        geo: { name: 'State' },
        primary: { name: '' },
        size: { name: 'Size' }
      }
    } as any)
  ]
  return config
}
const usage = (config: any) =>
  getOverlayLegendVisibility({
    config,
    runtimeData: generateRuntimeData(config, config.filters, 0, true),
    runtimeFilters: config.filters
  })
const candidates = (config: any) =>
  prepareBubbleCandidates({ config, geoType: config.general.geoType, runtimeFilters: config.filters })

const patternUsage = (config: any, runtimeData: Record<string, any>, filteredStateCode?: string) => [
  ...getOverlayLegendVisibility({ config, runtimeData, runtimeFilters: config.filters, filteredStateCode })
    .patternIndexes
]

describe('overlay legend visibility', () => {
  it('collects only winning patterns and restores entries across tabs without changing radius domains', () => {
    const config = build()
    const firstRadius = candidates(config)[0].radius
    expect([...usage(config).patternIndexes]).toEqual([1])
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
    config.filters[0].active = 'Second'
    expect([...usage(config).patternIndexes]).toEqual([2])
    expect(candidates(config)[0].radius).toBeGreaterThan(firstRadius)
    config.filters[0].active = 'First'
    expect(candidates(config)[0].radius).toBe(firstRadius)
    expect([...usage(config).patternIndexes]).toEqual([1])
    config.map.patterns.splice(1, 1)
    expect([...usage(config).patternIndexes]).toEqual([0])
  })

  it.each([false, undefined])('requires explicitly enabled setting (%s)', setting => {
    const config = build()
    config.legend.hideUnusedPatternAndBubbleLegends = setting
    expect(usage(config).patternIndexes.size).toBe(0)
    expect(usage(config).bubbleLayerIndexes.size).toBe(0)
  })

  it('keeps repeated geographies in later small-multiple tiles', () => {
    const config = build()
    config.filters = []
    config.data[0].Size = 0
    config.smallMultiples = { mode: true, tileColumn: 'Tab' }
    expect([...usage(config).patternIndexes]).toEqual([1, 2])
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
  })

  it.each(['world', 'single-state', 'us-region'])('does not claim patterns in unsupported mode %s', geoType => {
    const config = build()
    config.general.geoType = geoType
    expect(usage(config).patternIndexes.size).toBe(0)
  })

  it('shares geography and territory eligibility with rendering', () => {
    const config = build()
    const row = { Value: 'A' }
    expect(patternUsage(config, { unmatched: row })).toEqual([])
    expect(patternUsage(config, {})).toEqual([])
    expect(patternUsage(config, { 'US-PR': row })).toEqual([1])
    config.general.displayAsHex = true
    expect(patternUsage(config, { 'US-PR': row })).toEqual([])
    expect(patternUsage(config, { 'US-AL': row })).toEqual([1])
    expect(usage(config).bubbleLayerIndexes.size).toBe(0)
    config.general.geoType = 'us-county'
    config.general.territoriesAlwaysShow = false
    expect(patternUsage(config, { '01001': row })).toEqual([1])
    expect(patternUsage(config, { '72001': row })).toEqual([])
    config.general.territoriesAlwaysShow = true
    expect(patternUsage(config, { '72001': row })).toEqual([1])
  })

  it('shares county selection and geocode overview rules with rendering', () => {
    const config = build()
    config.general.geoType = 'us-county'
    config.general.showNeighboringStates = false
    const row = { Value: 'A' }
    expect(patternUsage(config, { '01001': row }, '01')).toEqual([1])
    expect(patternUsage(config, { '06001': row }, '01')).toEqual([])
    config.general.showNeighboringStates = true
    expect(patternUsage(config, { '06001': row }, '01')).toEqual([1])
    config.general.type = 'us-geocode'
    expect(patternUsage(config, { '01001': row })).toEqual([])
    expect(patternUsage(config, { '01': row })).toEqual([1])
    expect(patternUsage(config, { '51620': row }, '51')).toEqual([])
    expect(patternUsage(config, { '01001': row }, '01')).toEqual([1])
    config.map.patterns[1].pattern = undefined
    expect(patternUsage(config, { '01001': row }, '01')).toEqual([])
  })

  it('tracks each layer independently when tabs exchange usage', () => {
    const config = build()
    config.data.forEach(row => {
      row.OtherSize = row.Tab === 'First' ? 0 : 12
    })
    config.bubble.layers.push(
      createDefaultBubbleLayer({
        columns: {
          geo: { name: 'State' },
          primary: { name: '' },
          size: { name: 'OtherSize' }
        }
      } as any)
    )
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
    config.filters[0].active = 'Second'
    config.data[1].Size = 0
    expect([...usage(config).bubbleLayerIndexes]).toEqual([1])
  })

  it('handles zeros, blank and invalid sizes and independent configured-layer indexes after drafts', () => {
    const config = build()
    config.bubble.layers.unshift(createDefaultBubbleLayer())
    config.bubble.layers.push(
      createDefaultBubbleLayer({
        columns: {
          geo: { name: 'State' },
          size: { name: 'Missing' }
        }
      } as any)
    )
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
    for (const value of [0, '', 'invalid', null]) {
      config.data[0].Size = value
      expect(usage(config).bubbleLayerIndexes.size).toBe(0)
    }
    config.data[0].Size = 0
    config.bubble.layers[1].showBubbleZeros = true
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
    config.bubble.layers[1].sizeType = 'category'
    config.data[0].Size = 'Small'
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
  })

  it('checks explicit coordinates and projection eligibility without consulting legend interactions', () => {
    const config = build()
    Object.assign(config.bubble.layers[0], {
      locationSource: 'latitude-longitude',
      columns: {
        geo: { name: 'State' },
        size: { name: 'Size' },
        latitude: { name: 'Lat' },
        longitude: { name: 'Lon' }
      }
    })
    config.data[0].Lat = ''
    config.data[0].Lon = -86
    expect(usage(config).bubbleLayerIndexes.size).toBe(0)
    config.data[0].Lat = 32
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
    const candidate = candidates(config)[0]
    expect(getBubbleLocation(candidate, 'us', (() => null) as any)).toBeNull()
    expect(getBubbleLocation(candidate, 'us', (() => [NaN, NaN]) as any)).toBeNull()
    config.data[0].Lat = 0
    config.data[0].Lon = 0
    expect(usage(config).bubbleLayerIndexes.size).toBe(0)
  })

  it('places world geography bubbles and excludes unmatched locations', () => {
    const config = build()
    config.general.geoType = 'world'
    config.data[0].State = 'France'
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
    config.data[0].State = 'Unmatched'
    expect(usage(config).bubbleLayerIndexes.size).toBe(0)
  })

  it('uses the separate territory placement path only when the territory is displayed', () => {
    const config = build()
    config.data[0].State = 'Puerto Rico'
    const candidate = candidates(config)[0]
    expect(getBubbleLocation(candidate, 'us', getBubbleProjection('us'))).toBeNull()
    expect(isTerritoryBubblePlaceable(candidate, config, {})).toBe(false)
    expect([...usage(config).bubbleLayerIndexes]).toEqual([0])
    config.general.displayAsHex = true
    expect(usage(config).bubbleLayerIndexes.size).toBe(0)
  })
})
