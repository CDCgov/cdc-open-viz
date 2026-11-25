import { describe, expect, it } from 'vitest'
import { hashObj } from '@cdc/core/helpers/hashObj'
import initialState from '../../data/initial-state'
import { getBubbleRenderData } from '../bubbleRenderData'
import { createNewMapConfig } from '../createNewMapConfig'
import { generateBubbleSizeDomainData, generateBubbleLayerRuntimeData } from '../generateRuntimeData'
import { createBubbleSizeScale, getBubbleSizeLegendItems } from '../bubbleLayers'
import { getOrderedBubbleSizeCategories } from '../bubbleSize'
import numericFixture from '../../_stories/_mock/bubble-tabbed-numeric.json'
import categoryFixture from '../../_stories/_mock/bubble-tabbed-category.json'

const makeMemo = (entries: [number, number][] = []) => ({ current: new Map(entries) })
const noopBubbleMemo = () => makeMemo()
const tooltip = (displayName: string) => `Tooltip: ${displayName}`

const buildConfig = (bubbleLayerOverrides: Record<string, any> = {}, dataOverrides?: Record<string, any>[]) => {
  const config = JSON.parse(JSON.stringify(initialState))

  config.general.geoType = 'us'
  config.general.type = 'data'
  config.general.palette = { name: 'bluegreen', isReversed: false, version: 1 }
  config.columns.geo.name = ''
  config.columns.primary.name = ''
  config.columns.categorical = config.columns.categorical ?? { name: '' }
  config.columns.categorical.name = ''
  config.legend.type = 'equalnumber'
  config.legend.numberOfItems = 2
  config.legend.specialClasses = []
  config.legend.additionalCategories = []
  config.legend.categoryValuesOrder = []
  config.legend.showSpecialClassesLast = false
  config.data = dataOverrides ?? [
    { State: 'Alabama', Cases: 10, Category: 'Low', Group: 'A' },
    { State: 'California', Cases: 30, Category: 'High', Group: 'B' },
    { State: 'Puerto Rico', Cases: 20, Category: 'Medium', Group: 'A' }
  ]
  config.bubble = {
    layers: [
      {
        locationSource: 'data-column',
        sizeType: 'numeric',
        includeNonGeoDataInSizeDomain: false,
        minBubbleSize: 4,
        maxBubbleSize: 20,
        opacity: 0.5,
        extraBubbleBorder: true,
        showBubbleZeros: false,
        staticColor: '#123456',
        legend: { show: true, size: { show: false } },
        columns: {
          geo: { name: 'State' },
          primary: { name: '' },
          size: { name: 'Cases' },
          latitude: { name: '' },
          longitude: { name: '' },
          categorical: { name: '' }
        },
        ...bubbleLayerOverrides
      }
    ]
  }

  return config
}

const getRows = (config: any, options: Record<string, any> = {}) =>
  getBubbleRenderData({
    config,
    geoType: 'us',
    getBubbleLegendMemo: noopBubbleMemo,
    getBubbleLegendSpecialClassLastMemo: noopBubbleMemo,
    legendMemo: makeMemo(),
    legendSpecialClassLastMemo: makeMemo(),
    runtimeBubbleLegend: undefined,
    runtimeData: { fromHash: 1 },
    runtimeFilters: [] as any,
    runtimeLegend: undefined,
    tooltipId: 'map-test',
    applyTooltipsToGeo: tooltip,
    ...options
  })

describe('bubbleRenderData', () => {
  it('returns numeric radii, static color fallback, opacity, border, tooltip, and territory uid rows', () => {
    const rows = getRows(buildConfig())
    const puertoRico = rows.find(row => row.uid === 'US-PR')

    expect(rows[0].radius).toBe(20)
    expect(rows[1].radius).toBeCloseTo(14.4827586207)
    expect(rows[2].radius).toBeCloseTo(8.9655172414)
    expect(puertoRico).toMatchObject({
      uid: 'US-PR',
      fillColor: '#123456',
      opacity: 0.5,
      extraBubbleBorder: true,
      layerIndex: 0,
      tooltipHtml: 'Tooltip: Puerto Rico',
      tooltipId: 'map-test',
      displayName: 'Puerto Rico'
    })
    expect(puertoRico?.radius).toBeCloseTo(14.4827586207)
  })

  it('maps categorical size values through the configured category order', () => {
    const rows = getRows(
      buildConfig({
        sizeType: 'category',
        sizeCategoryValuesOrder: ['Low', 'Medium', 'High'],
        columns: {
          geo: { name: 'State' },
          primary: { name: '' },
          size: { name: 'Category' },
          latitude: { name: '' },
          longitude: { name: '' },
          categorical: { name: '' }
        }
      })
    )

    expect(rows.map(row => [row.uid, row.radius])).toEqual([
      ['US-CA', 20],
      ['US-PR', 12],
      ['US-AL', 4]
    ])
  })

  it('hides zero values unless the layer opts into showing bubble zeros', () => {
    const config = buildConfig({}, [
      { State: 'Alabama', Cases: 0 },
      { State: 'California', Cases: 10 },
      { State: 'Puerto Rico', Cases: 0 }
    ])

    expect(getRows(config).map(row => row.uid)).toEqual(['US-CA'])

    config.bubble.layers[0].showBubbleZeros = true
    expect(
      getRows(config)
        .map(row => row.uid)
        .sort()
    ).toEqual(['US-AL', 'US-CA', 'US-PR'])
  })

  it('uses non-geo rows for categorical size domain without rendering them', () => {
    const rows = getRows(
      buildConfig(
        {
          sizeType: 'category',
          includeNonGeoDataInSizeDomain: true,
          columns: {
            geo: { name: 'State' },
            primary: { name: '' },
            size: { name: 'Category' },
            latitude: { name: '' },
            longitude: { name: '' },
            categorical: { name: '' }
          }
        },
        [
          { State: 'Alabama', Category: 'Low' },
          { State: 'Puerto Rico', Category: 'Medium' },
          { State: 'Not a geography', Category: 'High' }
        ]
      )
    )

    expect(rows.map(row => row.uid)).toEqual(['US-PR', 'US-AL'])
    expect(rows.find(row => row.uid === 'US-PR')?.radius).toBe(12)
  })

  it('filters rows hidden by bubble-layer and map legends', () => {
    const config = buildConfig({
      columns: {
        geo: { name: 'State' },
        primary: { name: 'Group' },
        size: { name: 'Cases' },
        latitude: { name: '' },
        longitude: { name: '' },
        categorical: { name: '' }
      }
    })
    const alabama = { ...config.data[0] }
    const california = { ...config.data[1] }
    const puertoRico = { ...config.data[2] }
    const bubbleLegendMemo = makeMemo([
      [hashObj(alabama), 0],
      [hashObj(california), 1],
      [hashObj(puertoRico), 0]
    ])
    const mapLegendMemo = makeMemo([
      [hashObj(alabama), 0],
      [hashObj(california), 0],
      [hashObj(puertoRico), 1]
    ])

    const rows = getRows(config, {
      runtimeBubbleLegend: {
        items: [
          { bin: 0, color: '#111111' },
          { bin: 1, color: '#222222', hidden: true }
        ]
      },
      runtimeLegend: {
        items: [
          { bin: 0, color: '#333333' },
          { bin: 1, color: '#444444', hidden: true }
        ]
      },
      getBubbleLegendMemo: () => bubbleLegendMemo,
      legendMemo: mapLegendMemo
    })

    expect(rows.map(row => row.uid)).toEqual(['US-AL'])
    expect(rows[0].fillColor).toBe('#111111')
  })
})

describe('tabbed size domains', () => {
  it.each([numericFixture, categoryFixture])(
    'preserves all eligible rows independent of tab and row order',
    fixture => {
      const config = createNewMapConfig(fixture)
      const reversed = createNewMapConfig({ ...fixture, data: [...fixture.data].reverse() })
      const layer = config.bubble.layers[0]
      const domain = generateBubbleSizeDomainData(config, layer)
      const reversedDomain = generateBubbleSizeDomainData(reversed, layer)
      const sizeColumn = layer.columns.size.name
      expect(domain).toHaveLength(6)
      expect(domain.map(row => row[sizeColumn]).sort()).toEqual(reversedDomain.map(row => row[sizeColumn]).sort())
      expect(getOrderedBubbleSizeCategories(domain, sizeColumn)).toEqual(
        getOrderedBubbleSizeCategories(reversedDomain, sizeColumn)
      )
      expect(
        getBubbleSizeLegendItems(
          domain.map(row => row.Cases),
          layer,
          'en-US'
        )
      ).toEqual(
        getBubbleSizeLegendItems(
          reversedDomain.map(row => row.Cases),
          layer,
          'en-US'
        )
      )
      const scale = createBubbleSizeScale(
        domain.map(row => row.Cases),
        layer
      )
      expect(scale.getRadius(100)).toBe(20)
      // Rendering continues to filter before deduplication, while the domain stays unfiltered.
      for (const active of ['Earlier', 'Later']) {
        const runtimeFilters = [{ columnName: 'Tab', active }]
        const summarize = config =>
          getRows(config, { runtimeFilters })
            .map(row => [row.uid, row.radius])
            .sort()
        expect(summarize(config)).toEqual(summarize(reversed))
        expect(Object.values(generateBubbleLayerRuntimeData(config, layer, runtimeFilters as any, 0))).toHaveLength(3)
      }
    }
  )

  it('retains the categorical-only unmatched geography opt-in', () => {
    const config = createNewMapConfig(categoryFixture)
    const layer = config.bubble.layers[0]
    layer.includeNonGeoDataInSizeDomain = true
    expect(generateBubbleSizeDomainData(config, layer)).toHaveLength(7)
    layer.sizeType = 'numeric'
    expect(generateBubbleSizeDomainData(config, layer)).toHaveLength(6)
  })

  it('validates coordinate domain rows even when their geography matches', () => {
    const config = createNewMapConfig(numericFixture)
    const layer = config.bubble.layers[0]
    layer.locationSource = 'latitude-longitude'
    layer.columns.latitude = { name: 'lat' }
    layer.columns.longitude = { name: 'lng' }
    config.data = [
      { State: 'Alabama', lat: 0, lng: 0, Cases: 10 },
      { State: 'Alabama', lat: 32, lng: -86, Cases: 100 },
      { State: 'Alabama', lat: '', lng: -86, Cases: 1000 },
      { State: 'California', lat: 'bad', lng: -120, Cases: 2000 }
    ] as any
    expect(generateBubbleSizeDomainData(config, layer).map(row => row.Cases)).toEqual([10, 100])
  })

  it('builds a separate domain for each layer without changing ordinary row deduplication', () => {
    const config = createNewMapConfig(numericFixture)
    const first = config.bubble.layers[0]
    const second = { ...first, columns: { ...first.columns, geo: { name: 'Other State' } } }
    config.bubble.layers.push(second)
    config.data = config.data.map(row => ({ ...row, 'Other State': row.Tab === 'Earlier' ? 'Alabama' : 'Unmatched' }))
    expect(generateBubbleSizeDomainData(config, first)).toHaveLength(6)
    expect(generateBubbleSizeDomainData(config, second)).toHaveLength(3)
    expect(Object.values(generateBubbleLayerRuntimeData(config, first, [], 0))).toHaveLength(3)
  })
})
