import { describe, expect, it } from 'vitest'
import { generateRuntimeLegend } from '../generateRuntimeLegend'

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
