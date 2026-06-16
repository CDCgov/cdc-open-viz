import { describe, expect, it } from 'vitest'
import initialState from '../../data/initial-state'
import { generateRuntimeLegend } from '../generateRuntimeLegend'
import { generateRuntimeLegendHash } from '../generateRuntimeLegendHash'

const makeMemo = () => ({ current: new Map<string, number>() })

const bubbleOnlyConfig = (): any => ({
  general: {
    geoType: 'us',
    type: 'data',
    displayAsHex: false,
    palette: { name: 'sequential_blue', isReversed: false },
    equalNumberOptIn: false
  },
  columns: {
    geo: { name: 'state', tooltip: false, label: 'State' },
    primary: { name: 'cases', tooltip: false, label: 'Cases' },
    navigate: { name: '' },
    categorical: { name: '' }
  },
  legend: {
    type: 'equalnumber',
    numberOfItems: 3,
    specialClasses: [],
    unified: false,
    separateZero: false,
    additionalCategories: [],
    categoryValuesOrder: [],
    showSpecialClassesLast: false
  },
  data: [
    { state: 'Alabama', cases: 10 },
    { state: 'California', cases: 20 },
    { state: 'Texas', cases: 30 },
    { state: 'Florida', cases: 15 }
  ]
})

// Simulates an empty choropleth runtimeData object — what a bubble-only map produces
// because config.columns.geo.name is blank and no UIDs are assigned for the choropleth layer.
const emptyRuntimeData = {}

describe('generateRuntimeLegend — bubble-only map data source', () => {
  it('produces no legend items when unified is false and runtimeData is empty (pre-fix behavior)', () => {
    const config = bubbleOnlyConfig()
    config.legend.unified = false

    const result = generateRuntimeLegend(
      config,
      emptyRuntimeData as any,
      'hash-a',
      () => {},
      [] as any,
      makeMemo(),
      makeMemo()
    )

    const items = Array.isArray(result) ? result : result.items
    expect(items).toHaveLength(0)
  })

  it('produces legend items when unified is true and runtimeData is empty (post-fix: uses raw data rows)', () => {
    const config = bubbleOnlyConfig()
    config.legend.unified = true

    const result = generateRuntimeLegend(
      config,
      emptyRuntimeData as any,
      'hash-b',
      () => {},
      [] as any,
      makeMemo(),
      makeMemo()
    )

    expect(Array.isArray(result)).toBe(false)
    expect((result as any).items.length).toBeGreaterThan(0)
  })
})

const buildConfig = () => {
  const config = JSON.parse(JSON.stringify(initialState))

  config.columns.geo.name = 'state'
  config.columns.primary.name = 'value'
  config.legend.type = 'manual'
  config.legend.breakpoints = [20, 40, 60, 80]
  config.legend.specialClasses = []
  config.general.geoType = 'us'
  config.data = [
    { state: 'Alabama', value: 5 },
    { state: 'Alaska', value: 18 },
    { state: 'Arizona', value: 21 },
    { state: 'Arkansas', value: 37 },
    { state: 'California', value: 49 },
    { state: 'Colorado', value: 65 },
    { state: 'Connecticut', value: 95 }
  ]

  return config
}

describe('generateRuntimeLegend — manual breakpoints', () => {
  it('builds manual breakpoint bins from authored legend breakpoints', () => {
    const config = buildConfig()
    const legendMemo = { current: new Map<string, number>() }
    const legendSpecialClassLastMemo = { current: new Map<string, number>() }

    const runtimeLegend = generateRuntimeLegend(
      config,
      config.data,
      'manual-breakpoints',
      () => undefined,
      { fromHash: 7 } as any,
      legendMemo,
      legendSpecialClassLastMemo
    ) as any

    expect(runtimeLegend).toMatchObject({
      fromHash: 'manual-breakpoints',
      runtimeDataHash: 7
    })
    expect(runtimeLegend.items).toHaveLength(5)
    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [5, 20],
      [20, 40],
      [40, 60],
      [60, 80],
      [80, 95]
    ])
    expect(legendMemo.current.size).toBe(config.data.length)
  })

  it('includes manual breakpoints in the runtime legend cache hash', () => {
    const config = buildConfig()
    const baselineHash = generateRuntimeLegendHash(config, {})

    config.legend.breakpoints = [10, 30, 50, 70]

    expect(generateRuntimeLegendHash(config, {})).not.toBe(baselineHash)
  })
})
