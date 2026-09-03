import { describe, expect, it } from 'vitest'
import { hashObj } from '@cdc/core/helpers/hashObj'
import initialState from '../../data/initial-state'
import { addUIDs } from '../addUIDs'
import generateRuntimeData from '../generateRuntimeData'
import { generateRuntimeLegend } from '../generateRuntimeLegend'
import { generateRuntimeLegendHash } from '../generateRuntimeLegendHash'
import { mapColorPalettesV2 } from '@cdc/core/data/mapColorPalettes'
import {
  divergentColorDistribution,
  mapV1ColorDistribution,
  qualitativeStandardColorDistribution,
  v2ColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'

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

const buildEqualNumberConfig = (separateZero = false) => {
  const config = buildConfig()

  config.general.equalNumberOptIn = true
  config.legend.type = 'equalnumber'
  config.legend.numberOfItems = 3
  config.legend.separateZero = separateZero
  config.columns.primary.roundToPlace = 0
  config.data = [
    { state: 'Alabama', value: 0 },
    { state: 'Alaska', value: 10 },
    { state: 'Arizona', value: 20 },
    { state: 'Arkansas', value: 20 },
    { state: 'California', value: 30 },
    { state: 'Colorado', value: 30 },
    { state: 'Connecticut', value: 40 }
  ]

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
  it('preserves trailing percent decoration as numeric legend presentation metadata', () => {
    const config = buildEqualNumberConfig(false)
    config.columns.primary.suffix = ''
    config.data = config.data.map(row => ({ ...row, value: `${row.value}%` }))

    const { runtimeLegend } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.valueSuffix).toBe('%')
  })

  it('does not infer percent decoration when active numeric values use mixed presentation', () => {
    const config = buildEqualNumberConfig(false)
    config.columns.primary.suffix = ''
    config.data = config.data.map((row, index) => ({
      ...row,
      value: index === 0 ? `${row.value}%` : row.value
    }))

    const { runtimeLegend } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.valueSuffix).toBeUndefined()
  })

  it('infers percent decoration from filtered runtime rows when source data mixes units', () => {
    const config = buildEqualNumberConfig(false)
    config.columns.primary.suffix = ''
    const percentageRows = config.data.slice(0, 2).map(row => ({ ...row, value: `${row.value}%` }))
    const countRows = config.data.slice(2).map(row => ({ ...row }))
    config.data = [...percentageRows, ...countRows]

    const { runtimeLegend } = getRuntimeLegend(config, percentageRows)

    expect(runtimeLegend.valueSuffix).toBe('%')
  })

  it('infers percent decoration after excluding numeric special-class rows', () => {
    const config = buildEqualNumberConfig(false)
    config.columns.primary.suffix = ''
    config.legend.specialClasses = [{ key: 'state', value: 'Alabama', label: 'Not reported' }]
    config.data = config.data.map((row, index) => ({
      ...row,
      value: index === 0 ? row.value : `${row.value}%`
    }))

    const { runtimeLegend } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.valueSuffix).toBe('%')
  })

  it.each([
    ['2.0', mapV1ColorDistribution[5]],
    ['2.1', v2ColorDistribution[5]]
  ])('uses palette version %s in the equal-number path', (paletteVersion, indices) => {
    const config = buildConfig()
    config.general.equalNumberOptIn = true
    config.general.palette = {
      isReversed: false,
      name: 'sequential_blue',
      version: paletteVersion
    }
    config.legend.type = 'equalnumber'
    config.legend.numberOfItems = 5
    config.data = Array.from({ length: 20 }, (_, index) => ({
      state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware'][
        index % 8
      ],
      value: index + 1
    }))

    const { runtimeLegend } = getRuntimeLegend(config)

    expect(runtimeLegend.items.map(item => item.color)).toEqual(
      indices.map(index => mapColorPalettesV2.sequential_blue[index])
    )
  })

  it('changes equal-number colors without changing the calculated ranges', () => {
    const results = (['2.0', '2.1'] as const).map(paletteVersion => {
      const config = buildConfig()
      config.general.palette = {
        isReversed: false,
        name: 'sequential_blue',
        version: paletteVersion
      }
      config.legend.type = 'equalnumber'
      config.legend.numberOfItems = 5
      config.data = Array.from({ length: 20 }, (_, index) => ({
        state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware'][
          index % 8
        ],
        value: index + 1
      }))

      const { runtimeLegend } = getRuntimeLegend(config)

      return {
        colors: runtimeLegend.items.map(item => item.color),
        ranges: runtimeLegend.items.map(item => [item.min, item.max])
      }
    })

    expect(results[0].ranges).toEqual(results[1].ranges)
    expect(results[0].colors).not.toEqual(results[1].colors)
  })

  it.each(['2.0', '2.1'])(
    'preserves legacy custom-color assignment with palette version %s in the historical equal-number path',
    paletteVersion => {
      const config = buildConfig()
      config.general.equalNumberOptIn = true
      const customColors = ['#000000', '#ffffff']
      config.general.palette = {
        customColors,
        isReversed: false,
        name: 'sequential_blue',
        version: paletteVersion
      }
      config.legend.type = 'equalnumber'
      config.legend.numberOfItems = 5
      config.data = Array.from({ length: 20 }, (_, index) => ({
        state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware'][
          index % 8
        ],
        value: index + 1
      }))

      const { runtimeLegend } = getRuntimeLegend(config)

      expect(runtimeLegend.items.map(item => item.color)).toEqual(
        mapV1ColorDistribution[5].map(index => customColors[index] ?? customColors[customColors.length - 1])
      )
    }
  )

  it.each([
    ['2.0', [0, 1, 2, 3, 4]],
    ['2.1', qualitativeStandardColorDistribution[5]]
  ])('uses colorblind palette version %s in the equal-number path', (paletteVersion, indices) => {
    const config = buildConfig()
    config.general.equalNumberOptIn = true
    config.general.palette = {
      isReversed: false,
      name: 'qualitative_standard',
      version: paletteVersion
    }
    config.legend.type = 'equalnumber'
    config.legend.numberOfItems = 5
    config.data = Array.from({ length: 20 }, (_, index) => ({
      state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware'][
        index % 8
      ],
      value: index + 1
    }))

    const { runtimeLegend } = getRuntimeLegend(config)

    expect(runtimeLegend.items.map(item => item.color)).toEqual(
      indices.map(index => mapColorPalettesV2.qualitative_standard[index])
    )
  })

  it.each([2, 5])('uses the V2 divergent distribution for %i equal-number bins', count => {
    const config = buildConfig()
    config.general.equalNumberOptIn = true
    config.general.palette = {
      isReversed: false,
      name: 'divergent_blue_orange',
      version: '2.1'
    }
    config.legend.type = 'equalnumber'
    config.legend.numberOfItems = count
    config.data = Array.from({ length: 20 }, (_, index) => ({
      state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware'][
        index % 8
      ],
      value: index + 1
    }))

    const { runtimeLegend } = getRuntimeLegend(config)

    expect(runtimeLegend.items.map(item => item.color)).toEqual(
      divergentColorDistribution[count].map(index => mapColorPalettesV2.divergent_blue_orange[index])
    )
  })

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

  it('does not include the equalNumberOptIn compatibility flag in the runtime legend cache hash', () => {
    const config = buildEqualNumberConfig()
    config.general.equalNumberOptIn = false
    const baselineHash = generateRuntimeLegendHash(config, {})

    config.general.equalNumberOptIn = true

    expect(generateRuntimeLegendHash(config, {})).toBe(baselineHash)
  })

  it('uses current equal-number behavior even when equalNumberOptIn is false', () => {
    const config = buildEqualNumberConfig(false)
    config.general.equalNumberOptIn = false

    const { runtimeLegend } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [0, 13],
      [13.1, 27],
      [27.1, 40]
    ])
  })

  it('starts equal-number ranges at the data minimum when zero is absent and separate zero is off', () => {
    const config = buildEqualNumberConfig(false)
    config.data = config.data.map(row => ({ ...row, value: row.value === 0 ? 5 : row.value }))

    const { runtimeLegend } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [5, 13],
      [13.1, 27],
      [27.1, 40]
    ])
  })

  it('separates zero with current equal-number behavior even when equalNumberOptIn is false', () => {
    const config = buildEqualNumberConfig(true)
    config.general.equalNumberOptIn = false

    const { runtimeLegend, legendMemo } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [0, 0],
      [1, 25],
      [25.1, 40]
    ])
    expect(legendMemo.current.get(hashObj(config.data[0]))).toBe(0)
  })

  it('separates the equal-number zero baseline even when no data rows are zero', () => {
    const config = buildEqualNumberConfig(true)
    config.data = config.data.map(row => ({ ...row, value: row.value === 0 ? 5 : row.value }))

    const { runtimeLegend, legendMemo } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [0, 0],
      [1, 20],
      [20.1, 40]
    ])
    expect(legendMemo.current.get(hashObj(config.data[0]))).not.toBe(0)
  })

  it.each([
    {
      legendType: 'equalnumber',
      breakpoints: undefined,
      expectedRanges: [
        [0, 0],
        [1, 25],
        [25.1, 40]
      ]
    },
    {
      legendType: 'equalinterval',
      breakpoints: undefined,
      expectedRanges: [
        [0, 0],
        [10, 25],
        [25, 40]
      ]
    },
    {
      legendType: 'manual',
      breakpoints: [25],
      expectedRanges: [
        [0, 0],
        [10, 25],
        [25, 40]
      ]
    }
  ])(
    'recognizes formatted numeric zero when separating zero for $legendType legends',
    ({ legendType, breakpoints, expectedRanges }) => {
      const config = buildEqualNumberConfig(true)
      config.legend.type = legendType
      config.legend.breakpoints = breakpoints
      config.data = config.data.map(row => ({ ...row, value: ` ${row.value}% ` }))

      const { runtimeLegend, legendMemo } = getRuntimeLegend(config, config.data)

      expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual(expectedRanges)
      expect(legendMemo.current.get(hashObj(config.data[0]))).toBe(0)
    }
  )

  it('recognizes configured numeric suffixes when separating zero for equal-number legends', () => {
    const config = buildEqualNumberConfig(true)
    const values = [0, 1000, 2000, 2000, 3000, 3000, 4000]
    config.columns.primary.prefix = '~'
    config.columns.primary.suffix = ' cases'
    config.data = config.data.map((row, index) => ({
      ...row,
      value: `~${values[index].toLocaleString('en-US')} cases`
    }))

    const { runtimeLegend, legendMemo } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [0, 0],
      [1, 2500],
      [2500.1, 4000]
    ])
    expect(legendMemo.current.get(hashObj(config.data[0]))).toBe(0)
  })

  it('separates zero for equal-interval legends when the equal-number opt-in flag is true', () => {
    const config = buildEqualNumberConfig(true)
    config.legend.type = 'equalinterval'

    const { runtimeLegend, legendMemo } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [0, 0],
      [10, 25],
      [25, 40]
    ])
    expect(legendMemo.current.get(hashObj(config.data[0]))).toBe(0)
  })

  it('separates zero for manual breakpoint legends', () => {
    const config = buildEqualNumberConfig(true)
    config.legend.type = 'manual'
    config.legend.breakpoints = [25]

    const { runtimeLegend, legendMemo } = getRuntimeLegend(config, config.data)

    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [0, 0],
      [10, 25],
      [25, 40]
    ])
    expect(legendMemo.current.get(hashObj(config.data[0]))).toBe(0)
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
    const criddRows = [
      { geography: 'Alabama', bin: '0', year_dropdown_label: '2025 (provisional data to date)' },
      { geography: 'Alaska', bin: '1 - 2,999', year_dropdown_label: '2025 (provisional data to date)' },
      { geography: 'Arizona', bin: '3,000 - 5,999', year_dropdown_label: '2025 (provisional data to date)' },
      { geography: 'Arkansas', bin: '6,000 - 8,999', year_dropdown_label: '2025 (provisional data to date)' },
      { geography: 'California', bin: '9,000 - 12,000', year_dropdown_label: '2025 (provisional data to date)' },
      { geography: 'Bin 1', bin: '1 - 2,999', year_dropdown_label: '2025 (provisional data to date)' }
    ]
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
