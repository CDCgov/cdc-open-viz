import { describe, expect, it } from 'vitest'
import generateRuntimeData, { generateBubbleLayerRuntimeData } from '../generateRuntimeData'
import { createBubbleSizeScale, getBubbleSizeLegendItems } from '../bubbleLayers'

describe('generateRuntimeData', () => {
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
})
