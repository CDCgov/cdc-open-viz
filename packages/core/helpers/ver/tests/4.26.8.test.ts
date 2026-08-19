import update_4_26_8 from '../4.26.8'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

describe('update_4_26_8', () => {
  const mapConfig = (overrides: any = {}) => {
    const { general = {}, legend = {}, ...rest } = overrides

    return {
      type: 'map',
      version: '4.26.7',
      color: 'sequential_blue',
      general: {
        equalNumberOptIn: false,
        palette: { name: 'sequential_blue', version: '2.0', isReversed: false },
        ...general
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        ...legend
      },
      ...rest
    }
  }

  it('backfills missing chart right title placement to side', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.7',
      yAxis: {
        rightLabel: 'Rate'
      }
    }

    const result = update_4_26_8(config)

    expect(result.yAxis.rightTitlePlacement).toBe('side')
    expect(result.version).toBe('4.26.8')
    expect(config.yAxis.rightTitlePlacement).toBeUndefined()
  })

  it('preserves authored right title placement', () => {
    const result = update_4_26_8({
      type: 'chart',
      version: '4.26.7',
      yAxis: {
        rightLabel: 'Rate',
        rightTitlePlacement: 'top'
      }
    } as any)

    expect(result.yAxis.rightTitlePlacement).toBe('top')
  })

  it('updates dashboard chart visualizations recursively through coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.7',
      rows: [],
      visualizations: {
        chartA: {
          type: 'chart',
          yAxis: {
            rightLabel: 'Rate'
          }
        }
      }
    } as any)

    expect(result.visualizations.chartA.yAxis.rightTitlePlacement).toBe('side')
  })

  it('migrates standard and nested dashboard column orders without changing persisted state', () => {
    const standard = {
      order: 'column',
      values: ['March', 'January'],
      orderedValues: ['January', 'March'],
      defaultValue: 'January',
      active: 'March',
      unrelated: true
    }
    const nested = {
      filterStyle: 'nested-dropdown',
      order: 'column',
      values: ['2025', '2026'],
      orderedValues: ['2026', '2025'],
      subGrouping: {
        order: 'column',
        valuesLookup: { '2026': { values: ['March', 'January'], orderedValues: ['January', 'March'] } }
      }
    }

    const result = update_4_26_8({
      type: 'dashboard',
      version: '4.26.7',
      dashboard: { sharedFilters: [standard, nested] },
      visualizations: {
        chartA: { type: 'chart', filters: [{ order: 'column', orderColumn: 'sort' }] },
        mapA: { type: 'map', filters: [{ order: 'column', orderColumn: 'sort' }] }
      }
    } as any)

    expect(result.dashboard.sharedFilters[0]).toEqual({ ...standard, order: 'data' })
    expect(result.dashboard.sharedFilters[1]).toEqual({
      ...nested,
      order: 'cust',
      subGrouping: { ...nested.subGrouping, order: 'cust' }
    })
    expect(result.visualizations.chartA.filters[0]).toEqual({ order: 'column', orderColumn: 'sort' })
    expect(result.visualizations.mapA.filters[0]).toEqual({ order: 'column', orderColumn: 'sort' })
  })

  it('migrates shared filters through multi-dashboard traversal and is idempotent', () => {
    const config = {
      type: 'dashboard',
      version: '4.26.7',
      visualizations: {},
      rows: [],
      multiDashboards: [
        {
          rows: [],
          dashboard: {
            sharedFilters: [{ order: 'column', values: ['March'], orderedValues: ['March'] }]
          },
          visualizations: {}
        },
        {
          rows: [],
          dashboard: {
            sharedFilters: [
              {
                filterStyle: 'nested-dropdown',
                order: 'column',
                values: ['2026'],
                subGrouping: { order: 'column', valuesLookup: {} }
              }
            ]
          },
          visualizations: {}
        }
      ]
    }

    const once = coveUpdateWorker(config as any)
    const twice = update_4_26_8(once as any)

    expect(once.multiDashboards[0].dashboard.sharedFilters[0].order).toBe('data')
    expect(once.multiDashboards[0].dashboard.sharedFilters[0].values).toEqual(['March'])
    expect(once.multiDashboards[1].dashboard.sharedFilters[0].order).toBe('cust')
    expect(once.multiDashboards[1].dashboard.sharedFilters[0].subGrouping.order).toBe('cust')
    expect(twice).toEqual({ ...once, version: '4.26.8' })
  })

  it.each([
    ['v1 map', { general: { palette: { name: 'sequential_blue_green', version: '1.0' } } }, '1.0'],
    ['v2 category map', { legend: { type: 'category' } }, '1.0'],
    ['v2 equal-interval map', { legend: { type: 'equalinterval' } }, '1.0'],
    ['non-opted-in v2 equal-number map', {}, '1.0'],
    ['opted-in v2 equal-number map', { general: { equalNumberOptIn: true } }, '2.0'],
    [
      'v2 qualitative map',
      { general: { equalNumberOptIn: true, palette: { name: 'qualitative_standard', version: '2.0' } } },
      '1.0'
    ],
    ['unsupported bin count', { general: { equalNumberOptIn: true }, legend: { numberOfItems: 10 } }, '1.0'],
    [
      'custom-color map whose historical equal-number path ignores custom colors',
      {
        general: {
          equalNumberOptIn: true,
          palette: { name: 'sequential_blue', version: '2.0', customColors: ['#000', '#fff'] }
        }
      },
      '2.0'
    ]
  ])('preserves the historical distribution for a %s', (_name, overrides, expected) => {
    const config = mapConfig(overrides)
    const result = update_4_26_8(config)

    expect(result.general.palette.distributionVersion).toBe(expected)
    expect(config.general.palette.distributionVersion).toBeUndefined()
  })

  it('marks historically V2 divergent maps for the palette-aware V2 distribution', () => {
    const config = mapConfig({
      general: { equalNumberOptIn: true, palette: { name: 'divergent_blue_orange', version: '2.0' } }
    })
    const result = update_4_26_8(config)

    expect(result.general.palette.distributionVersion).toBe('2.0')
    expect(config.general.palette.distributionVersion).toBeUndefined()
  })

  it('preserves an authored distribution version', () => {
    const result = update_4_26_8(
      mapConfig({
        general: {
          equalNumberOptIn: true,
          palette: { name: 'sequential_blue', version: '2.0', distributionVersion: '1.0' }
        }
      })
    )

    expect(result.general.palette.distributionVersion).toBe('1.0')
  })

  it('backfills maps nested in dashboards without adding the field to charts', () => {
    const result = update_4_26_8({
      type: 'dashboard',
      version: '4.26.7',
      visualizations: {
        legacyMap: mapConfig({ legend: { type: 'category' } }),
        v2Map: mapConfig({ general: { equalNumberOptIn: true } }),
        chart: { type: 'chart', general: { palette: { name: 'sequential_blue', version: '2.0' } }, yAxis: {} }
      }
    })

    expect(result.visualizations.legacyMap.general.palette.distributionVersion).toBe('1.0')
    expect(result.visualizations.v2Map.general.palette.distributionVersion).toBe('2.0')
    expect(result.visualizations.chart.general.palette.distributionVersion).toBeUndefined()
  })

  it('creates the required palette field for a sparse legacy map', () => {
    const result = update_4_26_8({ type: 'map', version: '4.26.7' } as any)

    expect(result.general.palette.distributionVersion).toBe('1.0')
  })

  it('backfills maps in multi-dashboard children through coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.7',
      rows: [],
      visualizations: {},
      multiDashboards: [
        {
          rows: [],
          visualizations: {
            childMap: mapConfig({ general: { equalNumberOptIn: true } })
          }
        }
      ]
    } as any)

    expect(result.multiDashboards[0].visualizations.childMap.general.palette.distributionVersion).toBe('2.0')
  })
})
