import { describe, it, expect } from 'vitest'
import { cleanSharedFilters } from '../formatConfigBeforeSave'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

describe('cleanSharedFilters', () => {
  it('should remove unused shared filters', () => {
    const config: DashboardConfig = {
      dashboard: {
        sharedFilters: [
          { id: 1, type: 'filter1' },
          { id: 2, type: 'filter2' },
          { id: 3, type: 'filter3' },
          { id: 4, type: 'filter4' }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0, 3] },
        viz2: { type: 'chart'}
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([{ id: 1, type: 'filter1' }, { id: 4, type: 'filter4' }])
  })

  it('should retain used shared filters and remove their active state', () => {
    const config: DashboardConfig = {
      dashboard: {
        sharedFilters: [
          { id: 1, type: 'filter1', active: true },
          { id: 2, type: 'filter2', active: true }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0] },
        viz2: { type: 'dashboardFilters', sharedFilterIndexes: [1] }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([
      { id: 1, type: 'filter1' },
      { id: 2, type: 'filter2' }
    ])
  })

  it('should remove values from urlfilter type shared filters', () => {
    const config: DashboardConfig = {
      dashboard: {
        sharedFilters: [
          { id: 1, type: 'urlfilter', values: [1, 2, 3] },
          { id: 2, type: 'filter2' }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0] }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([
      { id: 1, type: 'urlfilter' }
    ])
  })
})