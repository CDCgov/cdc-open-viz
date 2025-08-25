import { describe, it, expect } from 'vitest'
import { cleanSharedFilters } from '../formatConfigBeforeSave'

describe('cleanSharedFilters', () => {
  it('should remove unused shared filters', () => {
    const config: any = {
      dashboard: {
        sharedFilters: [
          { id: 1, type: 'datafilter' },
          { id: 2, type: 'datafilter' },
          { id: 3, type: 'datafilter' },
          { id: 4, type: 'datafilter' }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0, 3] },
        viz2: { type: 'chart' }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([
      { id: 1, type: 'datafilter' },
      { id: 4, type: 'datafilter' }
    ])
  })

  it('should retain used shared filters and remove their active state', () => {
    const config: any = {
      dashboard: {
        sharedFilters: [
          { id: 1, type: 'datafilter', active: 'test' },
          { id: 2, type: 'datafilter', active: 'test' }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0] },
        viz2: { type: 'dashboardFilters', sharedFilterIndexes: [1] }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([
      { id: 1, type: 'datafilter' },
      { id: 2, type: 'datafilter' }
    ])
  })

  it('should remove values from urlfilter type shared filters', () => {
    const config: any = {
      dashboard: {
        sharedFilters: [
          { id: 1, type: 'urlfilter', values: ['1', '2', '3'] },
          { id: 2, type: 'datafilter' }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0] }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([{ id: 1, type: 'urlfilter' }])
  })
})
