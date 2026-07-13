import { describe, expect, it } from 'vitest'
import { hashObj } from '@cdc/core/helpers/hashObj'
import initialState from '../../data/initial-state'
import { getBubbleRenderData } from '../bubbleRenderData'

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
