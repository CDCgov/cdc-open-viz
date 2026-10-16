import { describe, expect, it } from 'vitest'
import update_4_24_8_1 from '../4.24.8-1'
import update_4_24_10_1 from '../4.24.10-1'
import update_4_25_4_1 from '../4.25.4-1'
import update_4_26_8_1 from '../4.26.8-1'

describe.each([
  ['4.24.8-1', update_4_24_8_1, { type: 'dashboard', dashboard: {}, visualizations: {}, rows: [] }],
  ['4.24.10-1', update_4_24_10_1, { type: 'dashboard', dashboard: {}, visualizations: {}, rows: [] }],
  ['4.25.4-1', update_4_25_4_1, { type: 'dashboard', visualizations: {}, rows: [] }],
  ['4.26.8-1', update_4_26_8_1, { type: 'chart', visualizationType: 'Bar' }]
])('%s', (version, migrate, config) => {
  it('stamps its own version when called directly', () => {
    expect(migrate(config as any).version).toBe(version)
  })
})

describe('dashboard filter suffix repairs', () => {
  it('gives each repaired dashboard-filter visualization independent shared-filter indexes', () => {
    const result = update_4_24_8_1({
      type: 'dashboard',
      dashboard: { sharedFilters: [{ label: 'State' }, { label: 'County' }] },
      rows: [],
      visualizations: {
        first: { type: 'dashboardFilters' },
        second: { type: 'dashboardFilters' }
      }
    } as any)

    result.visualizations.first.sharedFilterIndexes.pop()

    expect(result.visualizations.first.sharedFilterIndexes).toEqual([0])
    expect(result.visualizations.second.sharedFilterIndexes).toEqual([0, 1])
  })

  it('repairs the legacy filter-dropdowns type in 4.24.8-1', () => {
    const result = update_4_24_8_1({
      type: 'dashboard',
      dashboard: { sharedFilters: [{ label: 'State' }] },
      filterBehavior: 'Apply Button',
      rows: [{ columns: [{ width: 12, widget: 'filters' }] }],
      visualizations: {
        filters: { type: 'filter-dropdowns' }
      }
    } as any)

    expect(result.visualizations.filters).toMatchObject({
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes: [0],
      filterBehavior: 'Apply Button'
    })
    expect(result.filterBehavior).toBeUndefined()
  })

  it('replaces visualization filter behavior from the root when shared-filter indexes are missing', () => {
    const result = update_4_24_8_1({
      type: 'dashboard',
      dashboard: { sharedFilters: [{ label: 'State' }] },
      filterBehavior: 'Filter Change',
      rows: [{ columns: [{ width: 12, widget: 'filters' }] }],
      visualizations: {
        filters: { type: 'dashboardFilters', filterBehavior: 'Apply Button' }
      }
    } as any)

    expect(result.visualizations.filters.sharedFilterIndexes).toEqual([0])
    expect(result.visualizations.filters.filterBehavior).toBe('Filter Change')
  })

  it('leaves missing visualization filter behavior unchanged when shared-filter indexes already exist', () => {
    const result = update_4_24_8_1({
      type: 'dashboard',
      dashboard: { sharedFilters: [{ label: 'State' }] },
      filterBehavior: 'Apply Button',
      rows: [{ columns: [{ width: 12, widget: 'filters' }] }],
      visualizations: {
        filters: { type: 'dashboardFilters', sharedFilterIndexes: [0] }
      }
    } as any)

    expect(result.visualizations.filters.sharedFilterIndexes).toEqual([0])
    expect(result.visualizations.filters.filterBehavior).toBeUndefined()
  })

  it('preserves root filter behavior until a missing dashboard filter is created', () => {
    const afterEarlyRepair = update_4_24_8_1({
      type: 'dashboard',
      dashboard: { sharedFilters: [{ label: 'State' }] },
      filterBehavior: 'Apply Button',
      rows: [],
      visualizations: {}
    } as any)

    expect(afterEarlyRepair.filterBehavior).toBe('Apply Button')

    const result = update_4_24_10_1(afterEarlyRepair)

    expect(result.visualizations.legacySharedFilters.filterBehavior).toBe('Apply Button')
    expect(result.filterBehavior).toBeUndefined()
  })

  it('shifts numeric row filter targets when the late repair prepends a dashboard-filter row', () => {
    const result = update_4_24_10_1({
      type: 'dashboard',
      dashboard: {
        sharedFilters: [{ label: 'State', usedBy: [0, '1', 'chart'] }]
      },
      rows: [{ columns: [{ width: 12, widget: 'chart' }] }, { columns: [{ width: 12, widget: 'map' }] }],
      visualizations: {
        chart: { type: 'chart' },
        map: { type: 'map' }
      }
    } as any)

    expect(result.rows[0].columns[0].widget).toBe('legacySharedFilters')
    expect(result.dashboard.sharedFilters[0].usedBy).toEqual(['1', '2', 'chart'])
  })
})
