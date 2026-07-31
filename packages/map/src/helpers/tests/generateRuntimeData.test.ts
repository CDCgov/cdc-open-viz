import { describe, expect, it } from 'vitest'
import generateRuntimeData, { generateBubbleLayerRuntimeData } from '../generateRuntimeData'
import { createBubbleSizeScale, getBubbleSizeLegendItems } from '../bubbleLayers'
import {
  createCategoricalBubbleSizeScale,
  getOrderedBubbleSizeCategories,
  shouldIncludeNonGeoDataInBubbleSizeDomain
} from '../bubbleSize'

describe('generateRuntimeData', () => {
  const createCategoricalBubbleSizeConfig = (overrides: any = {}) => ({
    columns: {
      geo: { name: '' },
      primary: { name: '' },
      latitude: { name: '' },
      longitude: { name: '' },
      navigate: { name: '' },
      categorical: { name: '' }
    },
    general: {
      displayAsHex: false,
      geoType: 'us',
      type: 'data'
    },
    legend: {
      type: 'equalnumber'
    },
    bubble: {
      layers: [
        {
          sizeType: 'category',
          minBubbleSize: 4,
          maxBubbleSize: 28,
          extraBubbleBorder: false,
          showBubbleZeros: false,
          sizeCategoryValuesOrder: [],
          legend: {
            size: { show: true }
          },
          columns: {
            geo: { name: 'state' },
            primary: { name: '' },
            size: { name: 'caseRange' }
          },
          ...overrides.layer
        }
      ]
    },
    data: [
      { state: 'Alabama', caseRange: '1 - 4' },
      { state: 'Nongeo', caseRange: '>20' },
      { state: 'Arizona', caseRange: '5 - 9' },
      ...(overrides.data ?? [])
    ]
  })

  it('keeps separate rows for latitude/longitude bubble layers with duplicate labels', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'us',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            locationSource: 'latitude-longitude',
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'site' },
              latitude: { name: 'latitude' },
              longitude: { name: 'longitude' },
              primary: { name: 'visits' }
            }
          }
        ]
      },
      data: [
        { site: 'Clinic', latitude: 39.7392, longitude: -104.9903, visits: 10 },
        { site: 'Clinic', latitude: 47.6062, longitude: -122.3321, visits: 20 }
      ]
    }

    const result = generateRuntimeData(config, [], 1, false)

    expect(Object.keys(result)).toEqual(['coordinate-bubble-0-clinic', 'coordinate-bubble-1-clinic'])
  })

  it('skips latitude/longitude bubble rows with blank coordinates', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'us',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            locationSource: 'latitude-longitude',
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'site' },
              latitude: { name: 'latitude' },
              longitude: { name: 'longitude' },
              primary: { name: 'visits' }
            }
          }
        ]
      },
      data: [
        { site: 'Blank', latitude: '', longitude: '', visits: 10 },
        { site: 'Clinic', latitude: '47.6062', longitude: '-122.3321', visits: 20 }
      ]
    }

    const result = generateRuntimeData(config, [], 1, false)

    expect(Object.keys(result)).toEqual(['coordinate-bubble-1-clinic'])
  })

  it('preserves map geography UIDs when a latitude/longitude bubble layer is added to a configured state map', () => {
    const config: any = {
      columns: {
        geo: { name: 'State' },
        primary: { name: 'Rate' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'us',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            locationSource: 'latitude-longitude',
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'site' },
              latitude: { name: 'latitude' },
              longitude: { name: 'longitude' },
              primary: { name: 'visits' }
            }
          }
        ]
      },
      data: [
        { State: 'Alabama', Rate: '10', site: 'Clinic', latitude: 33.5186, longitude: -86.8104, visits: '5' },
        { State: 'California', Rate: '20', site: 'Clinic', latitude: 34.0522, longitude: -118.2437, visits: '8' }
      ]
    }

    const result = generateRuntimeData(config, [], 2, false)

    expect(Object.keys(result)).toEqual(['US-AL', 'US-CA'])
    expect(result['US-AL']).toMatchObject({ State: 'Alabama', Rate: 10, visits: 5 })
  })

  it('keeps coordinate UIDs for layer-scoped latitude/longitude bubble runtime data', () => {
    const config: any = {
      columns: {
        geo: { name: 'State' },
        primary: { name: 'Rate' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'us',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            locationSource: 'latitude-longitude',
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'site' },
              latitude: { name: 'latitude' },
              longitude: { name: 'longitude' },
              primary: { name: 'visits' }
            }
          }
        ]
      },
      data: [
        { State: 'Alabama', Rate: '10', site: 'Clinic', latitude: 33.5186, longitude: -86.8104, visits: '5' },
        { State: 'California', Rate: '20', site: 'Clinic', latitude: 34.0522, longitude: -118.2437, visits: '8' }
      ]
    }

    const result = generateBubbleLayerRuntimeData(config, config.bubble.layers[0], [], 3)

    expect(Object.keys(result)).toEqual(['coordinate-bubble-0-clinic', 'coordinate-bubble-1-clinic'])
  })

  it('generates layer-scoped runtime data from each bubble layer geography column', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'world',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'sourceCountry' },
              primary: { name: 'cases' }
            }
          },
          {
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'reportedCountry' },
              primary: { name: 'cases' }
            }
          }
        ]
      },
      data: [
        { sourceCountry: 'Atlantis', reportedCountry: 'Brazil', cases: '5', region: 'A' },
        { sourceCountry: 'Atlantis', reportedCountry: 'France', cases: '7', region: 'B' }
      ]
    }

    const result = generateBubbleLayerRuntimeData(
      config,
      config.bubble.layers[1],
      [{ columnName: 'region', active: 'A', type: 'data' }] as any,
      2
    )

    expect(Object.keys(result)).toEqual(['BRA'])
    expect(result.BRA.cases).toBe(5)
  })

  it('uses bubble layer geography when the configured map geography column is not present in the data', () => {
    const config: any = {
      columns: {
        geo: { name: 'FIPS Codes' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'us',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            minBubbleSize: 4,
            maxBubbleSize: 28,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'STATE' },
              primary: { name: 'Rate' },
              size: { name: 'Rate' }
            }
          }
        ]
      },
      data: [
        { STATE: 'Alabama', Rate: '130' },
        { STATE: 'California', Rate: '30' }
      ]
    }

    const result = generateRuntimeData(config, [], 3, false)

    expect(Object.keys(result)).toEqual(['US-AL', 'US-CA'])
    expect(result['US-AL']).toMatchObject({ STATE: 'Alabama', Rate: 130 })
  })

  it('keeps a unified bubble size scale and legend when filtered layer runtime data changes', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'world',
        type: 'data'
      },
      legend: {
        type: 'category'
      },
      bubble: {
        layers: [
          {
            minBubbleSize: 4,
            maxBubbleSize: 28,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            legend: {
              type: 'category',
              size: { show: true }
            },
            columns: {
              geo: { name: 'country' },
              primary: { name: 'disease' },
              size: { name: 'cases' }
            }
          }
        ]
      },
      data: [
        { country: 'Brazil', disease: 'A', cases: '0', region: 'Americas' },
        { country: 'France', disease: 'A', cases: '50', region: 'Americas' },
        { country: 'India', disease: 'B', cases: '100', region: 'Asia-Pacific' },
        { country: 'Japan', disease: 'B', cases: '200', region: 'Asia-Pacific' },
        { country: 'Canada', disease: 'B', cases: '', region: 'Americas' }
      ]
    }
    const layer = config.bubble.layers[0]
    const americasData = generateBubbleLayerRuntimeData(
      config,
      layer,
      [{ columnName: 'region', active: 'Americas', type: 'data' }] as any,
      3
    )
    const asiaData = generateBubbleLayerRuntimeData(
      config,
      layer,
      [{ columnName: 'region', active: 'Asia-Pacific', type: 'data' }] as any,
      4
    )
    const unfilteredData = generateBubbleLayerRuntimeData(config, layer, [], 5)
    const americasValues = Object.values(americasData ?? {}).map((row: any) => row.cases)
    const asiaValues = Object.values(asiaData ?? {}).map((row: any) => row.cases)
    const unfilteredValues = Object.values(unfilteredData ?? {}).map((row: any) => row.cases)
    const unifiedScale = createBubbleSizeScale(unfilteredValues, layer)

    if (!unifiedScale) throw new Error('Expected unified bubble size scale')

    expect(Object.keys(americasData)).toEqual(['BRA', 'FRA', 'CAN'])
    expect(Object.keys(asiaData)).toEqual(['IND', 'JPN'])
    expect(unifiedScale.visibleValues).toEqual([50, 100, 200])
    expect(unifiedScale.domain).toEqual([1, 200])
    expect(unifiedScale.getRadius(0)).toBeNull()
    expect(
      americasValues.map(value => unifiedScale.getRadius(value)).filter((radius): radius is number => radius !== null)
    ).toEqual([unifiedScale.getRadius(50)])
    expect(
      asiaValues.map(value => unifiedScale.getRadius(value)).filter((radius): radius is number => radius !== null)
    ).toEqual([unifiedScale.getRadius(100), unifiedScale.getRadius(200)])
    expect(getBubbleSizeLegendItems(unfilteredValues, layer, 'en-US')).toEqual([
      { value: 50, radius: unifiedScale.getRadius(50), label: '50' },
      { value: 100, radius: unifiedScale.getRadius(100), label: '100' },
      { value: 200, radius: unifiedScale.getRadius(200), label: '200' }
    ])
  })

  it('excludes no-UID categorical size values from ordered scale and legend categories by default', () => {
    const config: any = createCategoricalBubbleSizeConfig({
      layer: {
        sizeCategoryValuesOrder: ['1 - 4', '5 - 9', '>20']
      }
    })
    const layer = config.bubble.layers[0]
    const renderRuntimeData = generateBubbleLayerRuntimeData(config, layer, [], 6)
    const scaleRuntimeData = generateBubbleLayerRuntimeData(
      config,
      layer,
      [],
      6,
      shouldIncludeNonGeoDataInBubbleSizeDomain(layer)
    )
    const scaleRows = Object.values(scaleRuntimeData ?? {}) as any[]

    expect(Object.keys(renderRuntimeData)).toEqual(['US-AL', 'US-AZ'])
    expect(scaleRows.map(row => row.caseRange)).toEqual(['1 - 4', '5 - 9'])
    expect(getOrderedBubbleSizeCategories(scaleRows, 'caseRange', layer.sizeCategoryValuesOrder, false)).toEqual([
      '1 - 4',
      '5 - 9'
    ])
  })

  it('includes opted-in no-UID categorical size values in radius ordering and size legend items', () => {
    const config: any = createCategoricalBubbleSizeConfig({
      layer: {
        includeNonGeoDataInSizeDomain: true,
        sizeCategoryValuesOrder: ['1 - 4', '5 - 9', '>20']
      }
    })
    const layer = config.bubble.layers[0]
    const renderedRows = Object.values(generateBubbleLayerRuntimeData(config, layer, [], 7) ?? {}) as any[]
    const scaleRows = Object.values(
      generateBubbleLayerRuntimeData(config, layer, [], 7, shouldIncludeNonGeoDataInBubbleSizeDomain(layer)) ?? {}
    ) as any[]
    const categories = getOrderedBubbleSizeCategories(scaleRows, 'caseRange', layer.sizeCategoryValuesOrder, false)
    const scale = createCategoricalBubbleSizeScale(categories, layer.minBubbleSize, layer.maxBubbleSize)
    const legendItems = categories.map(value => ({
      value,
      radius: Number(scale(value) ?? layer.minBubbleSize),
      label: value
    }))

    expect(categories).toEqual(['1 - 4', '5 - 9', '>20'])
    expect(renderedRows.map(row => [row.state, scale(row.caseRange)])).toEqual([
      ['Alabama', 4],
      ['Arizona', 16]
    ])
    expect(scale('>20')).toBe(28)
    expect(legendItems).toEqual([
      { value: '1 - 4', radius: 4, label: '1 - 4' },
      { value: '5 - 9', radius: 16, label: '5 - 9' },
      { value: '>20', radius: 28, label: '>20' }
    ])
  })

  it('keeps no-UID categorical rows out of rendered bubble runtime data', () => {
    const config: any = createCategoricalBubbleSizeConfig()
    const layer = config.bubble.layers[0]

    expect(Object.values(generateBubbleLayerRuntimeData(config, layer, [], 8) ?? {})).toEqual([
      expect.objectContaining({ state: 'Alabama' }),
      expect.objectContaining({ state: 'Arizona' })
    ])
  })

  it('excludes no-UID categorical zero values from scale categories when zero bubbles are hidden', () => {
    const config: any = createCategoricalBubbleSizeConfig({
      layer: {
        includeNonGeoDataInSizeDomain: true
      },
      data: [
        { state: 'Nongeo', caseRange: '0' },
        { state: 'Not a state', caseRange: '' },
        { state: 'Another invalid place', caseRange: null },
        { state: 'Second nongeo', caseRange: '>20' }
      ]
    })
    const layer = config.bubble.layers[0]
    const scaleRows = Object.values(
      generateBubbleLayerRuntimeData(config, layer, [], 9, shouldIncludeNonGeoDataInBubbleSizeDomain(layer)) ?? {}
    ) as any[]

    expect(getOrderedBubbleSizeCategories(scaleRows, 'caseRange', [], false)).toEqual(['1 - 4', '5 - 9', '>20'])
    expect(getOrderedBubbleSizeCategories(scaleRows, 'caseRange', [], true)).toEqual(['0', '1 - 4', '5 - 9', '>20'])
  })

  it('does not include no-UID rows in numeric bubble size scale data even when the option is true', () => {
    const config: any = {
      ...createCategoricalBubbleSizeConfig({
        layer: {
          sizeType: 'numeric',
          sizeCategoryValuesOrder: undefined,
          includeNonGeoDataInSizeDomain: true
        }
      }),
      data: [
        { state: 'Alabama', caseRange: '1' },
        { state: 'Nongeo', caseRange: '999' },
        { state: 'Arizona', caseRange: '5' }
      ]
    }
    const layer = config.bubble.layers[0]
    const scaleRows = Object.values(
      generateBubbleLayerRuntimeData(config, layer, [], 10, shouldIncludeNonGeoDataInBubbleSizeDomain(layer)) ?? {}
    ) as any[]
    const scale = createBubbleSizeScale(
      scaleRows.map(row => row.caseRange),
      layer
    )

    expect(scaleRows.map(row => row.caseRange)).toEqual([1, 5])
    expect(scale?.domain).toEqual([1, 5])
  })

  it('does not include invalid latitude/longitude rows in categorical size domains even when the option is true', () => {
    const config: any = {
      ...createCategoricalBubbleSizeConfig({
        layer: {
          locationSource: 'latitude-longitude',
          includeNonGeoDataInSizeDomain: true,
          columns: {
            geo: { name: '' },
            latitude: { name: 'latitude' },
            longitude: { name: 'longitude' },
            primary: { name: '' },
            size: { name: 'caseRange' }
          }
        }
      }),
      data: [
        { latitude: '', longitude: '', caseRange: '>20' },
        { latitude: 'not a latitude', longitude: '-84.39', caseRange: '5 - 9' },
        { latitude: '33.75', longitude: '-84.39', caseRange: '1 - 4' }
      ]
    }
    const layer = config.bubble.layers[0]
    const scaleRows = Object.values(
      generateBubbleLayerRuntimeData(config, layer, [], 11, shouldIncludeNonGeoDataInBubbleSizeDomain(layer)) ?? {}
    ) as any[]

    expect(shouldIncludeNonGeoDataInBubbleSizeDomain(layer)).toBe(false)
    expect(scaleRows.map(row => row.caseRange)).toEqual(['1 - 4'])
    expect(getOrderedBubbleSizeCategories(scaleRows, 'caseRange', [], false)).toEqual(['1 - 4'])
  })

  it('does not coerce categorical bubble size column values to numbers', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'world',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            sizeType: 'category',
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'country' },
              primary: { name: '' },
              size: { name: 'caseRange' }
            }
          }
        ]
      },
      data: [{ country: 'Brazil', caseRange: '1 - 4' }]
    }

    const result = generateBubbleLayerRuntimeData(config, config.bubble.layers[0], [], 3)

    expect(result.BRA.caseRange).toBe('1 - 4')
  })

  it('continues coercing numeric bubble size column values to numbers', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'world',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'country' },
              primary: { name: '' },
              size: { name: 'cases' }
            }
          }
        ]
      },
      data: [{ country: 'Brazil', cases: '1234' }]
    }

    const result = generateBubbleLayerRuntimeData(config, config.bubble.layers[0], [], 4)

    expect(result.BRA.cases).toBe(1234)
  })

  it('does not partially coerce non-numeric bubble size values while size type is numeric', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'world',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'country' },
              primary: { name: '' },
              size: { name: 'caseRange' }
            }
          }
        ]
      },
      data: [{ country: 'Brazil', caseRange: '1-10' }]
    }

    const result = generateBubbleLayerRuntimeData(config, config.bubble.layers[0], [], 5)

    expect(result.BRA.caseRange).toBe('1-10')
  })
})
