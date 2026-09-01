import update_4_26_8 from '../4.26.8'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

describe('update_4_26_8', () => {
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
})
