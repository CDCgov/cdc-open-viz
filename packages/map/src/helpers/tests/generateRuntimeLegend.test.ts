import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { hashObj } from '@cdc/core/helpers/hashObj'
import initialState from '../../data/initial-state'
import { addUIDs } from '../addUIDs'
import generateRuntimeData from '../generateRuntimeData'
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

const buildCategoryConfig = (values: Array<string | number>) => {
  const config = buildConfig()

  config.legend.type = 'category'
  config.legend.categoryValuesOrder = []
  config.legend.additionalCategories = []
  config.data = values.map((value, index) => ({
    state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware'][index],
    value
  }))

  return config
}

const getCategoryLegendValues = config => {
  const { runtimeLegend } = getRuntimeLegend(config, config.data)

  return runtimeLegend.items.map(item => item.value)
}

const getRuntimeLegend = (
  config,
  runtimeData = config.data,
  runtimeFilters = Object.assign([], { fromHash: 7 }) as any
) => {
  const legendMemo = { current: new Map<string, number>() }
  const legendSpecialClassLastMemo = { current: new Map<string, number>() }

  const runtimeLegend = generateRuntimeLegend(
    config,
    runtimeData,
    'category-legend',
    () => undefined,
    runtimeFilters,
    legendMemo,
    legendSpecialClassLastMemo
  )

  return { runtimeLegend, legendMemo, legendSpecialClassLastMemo }
}

const buildRuntimeDataFromUidRows = config => {
  addUIDs(config, config.columns.geo.name)

  return Object.fromEntries(config.data.filter(row => row.uid).map(row => [row.uid, row]))
}

describe('generateRuntimeLegend', () => {
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

  it('automatically orders numeric and range category values', () => {
    const config = buildCategoryConfig(['1,000 - 1,999', '1.5', '1 - 14', '0', '1,000.5', '15-29', '1,000'])

    expect(getCategoryLegendValues(config)).toEqual([
      '0',
      '1 - 14',
      '1.5',
      '15-29',
      '1,000',
      '1,000 - 1,999',
      '1,000.5'
    ])
  })

  it('keeps automatic category ordering stable for numeric ties', () => {
    const config = buildCategoryConfig(['1.0', '1', '1 - 1', '2'])

    expect(getCategoryLegendValues(config)).toEqual(['1.0', '1', '1 - 1', '2'])
  })

  it('automatically orders numeric categories before non-numeric categories', () => {
    const config = buildCategoryConfig(['15 - 29', 'Unknown', '0', 'N/A', '1 - 14'])

    expect(getCategoryLegendValues(config)).toEqual(['0', '1 - 14', '15 - 29', 'Unknown', 'N/A'])
  })

  it('automatically orders common open-ended and to-range category values', () => {
    const config = buildCategoryConfig(['30+', '10 to 19', '<10', '20 to 29', '0', '>40'])

    expect(getCategoryLegendValues(config)).toEqual(['0', '<10', '10 to 19', '20 to 29', '30+', '>40'])
  })

  it('uses populated categoryValuesOrder instead of automatic category ordering', () => {
    const config = buildCategoryConfig(['0', '1 - 14', '15 - 29'])
    config.legend.categoryValuesOrder = ['15 - 29', '1 - 14', '0']

    expect(getCategoryLegendValues(config)).toEqual(['15 - 29', '1 - 14', '0'])
  })

  it('includes additionalCategories in automatic category ordering after adding them to the domain', () => {
    const config = buildCategoryConfig(['15 - 29', '0'])
    config.legend.additionalCategories = ['1 - 14', '30 - 44']

    expect(getCategoryLegendValues(config)).toEqual(['0', '1 - 14', '15 - 29', '30 - 44'])
  })

  it('excludes no-UID rows from category domains by default', () => {
    const config = buildCategoryConfig(['0'])
    config.data.push({ state: 'Bin 1', value: '1 - 14' })

    const runtimeData = buildRuntimeDataFromUidRows(config)
    const { runtimeLegend } = getRuntimeLegend(config, runtimeData)

    expect(runtimeLegend.items.map(item => item.value)).toEqual(['0'])
  })

  it('includes no-UID category values in the domain when opted in', () => {
    const config = buildCategoryConfig(['0'])
    config.legend.includeNonGeoDataInDomain = true
    config.data.push({ state: 'Bin 1', value: '1 - 14' })

    const runtimeData = buildRuntimeDataFromUidRows(config)
    const { runtimeLegend } = getRuntimeLegend(config, runtimeData)

    expect(runtimeLegend.items.map(item => item.value)).toEqual(['0', '1 - 14'])
  })

  it('does not create legendMemo mappings for included no-UID category values', () => {
    const config = buildCategoryConfig(['0'])
    config.legend.includeNonGeoDataInDomain = true
    const domainOnlyRow = { state: 'Bin 1', value: '1 - 14' }
    config.data.push(domainOnlyRow)

    const runtimeData = buildRuntimeDataFromUidRows(config)
    const { legendMemo } = getRuntimeLegend(config, runtimeData)

    expect(legendMemo.current.size).toBe(1)
    expect(legendMemo.current.has(hashObj(domainOnlyRow))).toBe(false)
  })

  it('does not apply includeNonGeoDataInDomain to non-category legends', () => {
    const config = buildConfig()
    config.legend.includeNonGeoDataInDomain = true
    config.data = [
      { state: 'Alabama', value: 5 },
      { state: 'Bin 1', value: 999 }
    ]

    const runtimeData = buildRuntimeDataFromUidRows(config)
    const { runtimeLegend, legendMemo } = getRuntimeLegend(config, runtimeData)

    expect(JSON.stringify(runtimeLegend.items)).not.toContain('999')
    expect(legendMemo.current.size).toBe(1)
  })

  it('includes CRIDD synthetic bin rows in the category legend without adding them to runtime data', () => {
    const criddRows = JSON.parse(
      readFileSync(
        `${process.cwd()}/../dashboard/examples/private/cridd/__data__/state_maps/campylobacter_state_map.json`,
        'utf8'
      )
    )
    const config = buildConfig()
    config.columns.geo.name = 'geography'
    config.columns.primary.name = 'bin'
    config.legend.type = 'category'
    config.legend.unified = true
    config.legend.includeNonGeoDataInDomain = true
    config.legend.categoryValuesOrder = []
    config.legend.specialClasses = [{ key: 'bin', value: 'N/A', label: 'N/A' }]
    config.data = criddRows
    const runtimeFilters = [
      {
        columnName: 'year_dropdown_label',
        active: '2025 (provisional data to date)',
        values: [],
        filterStyle: 'dropdown'
      }
    ] as any

    const runtimeData = generateRuntimeData(config, runtimeFilters, 99, true, false)
    const { runtimeLegend } = getRuntimeLegend(config, runtimeData, runtimeFilters)

    expect(runtimeLegend.items.map(item => item.value)).toEqual([
      '0',
      '1 - 2,999',
      '3,000 - 5,999',
      '6,000 - 8,999',
      '9,000 - 12,000'
    ])
    expect(Object.values(runtimeData).some(row => String(row.geography).startsWith('Bin'))).toBe(false)
  })
})
