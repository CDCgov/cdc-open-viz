import { describe, expect, it } from 'vitest'
import { dashboardFiltersMigrate } from '../4.24.7'

describe('dashboardFiltersMigrate', () => {
  it('shifts row filter targets when it prepends the legacy dashboard-filter row', () => {
    const config: any = {
      type: 'dashboard',
      dashboard: {
        sharedFilters: [{ usedBy: [0, '1', 'chart'] }]
      },
      rows: [{ columns: [{ widget: 'chart' }] }, { columns: [{ widget: 'map' }] }],
      visualizations: {
        chart: { type: 'chart' },
        map: { type: 'map' }
      }
    }

    dashboardFiltersMigrate(config)

    expect(config.rows[0].columns[0].widget).toBe('legacySharedFilters')
    expect(config.dashboard.sharedFilters[0].usedBy).toEqual(['1', '2', 'chart'])
  })

  it('does not shift row filter targets when no row is inserted', () => {
    const config: any = {
      type: 'dashboard',
      dashboard: {
        sharedFilters: [{ usedBy: [0, 'chart'] }]
      },
      rows: [{ columns: [{ widget: 'filters' }] }],
      visualizations: {
        filters: { type: 'dashboardFilters' }
      }
    }

    dashboardFiltersMigrate(config)

    expect(config.rows).toHaveLength(1)
    expect(config.dashboard.sharedFilters[0].usedBy).toEqual([0, 'chart'])
  })
})
