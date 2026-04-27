import { describe, it, expect } from 'vitest'
import { cleanSharedFilters, stripConfig } from '../formatConfigBeforeSave'
import { DashboardConfig } from '../../types/DashboardConfig'

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
        viz2: { type: 'chart' }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([
      { id: 1, type: 'filter1' },
      { id: 4, type: 'filter4' }
    ])
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

  it('retains filters when sharedFilterIndexes are stored as numbers', () => {
    const config: DashboardConfig = {
      dashboard: {
        sharedFilters: [
          { id: 1, type: 'filter1' },
          { id: 2, type: 'filter2' }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0, 1] }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toHaveLength(2)
  })

  it('retains filters when sharedFilterIndexes are stored as strings (malformed config)', () => {
    // Documents the bug fixed when DashboardFiltersEditor started wrapping e.target.value in Number()
    // so sharedFilterIndexes are stored as numbers instead of strings.
    // cleanSharedFilters normalizes to numbers so malformed configs from older saves are also handled.
    const config: DashboardConfig = {
      dashboard: {
        sharedFilters: [{ id: 1, type: 'filter1' }]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: ['0'] as any }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toHaveLength(1)
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

    expect(config.dashboard.sharedFilters).toEqual([{ id: 1, type: 'urlfilter' }])
  })
})

describe('stripConfig', () => {
  it('removes inline data for non-dashboard URL-backed configs when isEditor is false', () => {
    const config = {
      type: 'bar',
      dataUrl: '/api/data.csv',
      data: [{ value: 10 }],
      runtime: { loaded: true },
      formattedData: [{ value: 10 }]
    }

    const stripped = stripConfig(config)

    expect(stripped.data).toBeUndefined()
    expect(stripped.dataUrl).toBe('/api/data.csv')
    expect(stripped.runtime).toBeUndefined()
    expect(stripped.formattedData).toBeUndefined()
  })

  it('preserves inline data for non-dashboard URL-backed configs when isEditor is true', () => {
    const config = {
      type: 'bar',
      dataUrl: '/api/data.csv',
      data: [{ value: 10 }],
      runtime: { loaded: true },
      formattedData: [{ value: 10 }]
    }

    const stripped = stripConfig(config, true)

    expect(stripped.data).toEqual([{ value: 10 }])
    expect(stripped.dataUrl).toBe('/api/data.csv')
    expect(stripped.runtime).toBeUndefined()
    expect(stripped.formattedData).toBeUndefined()
  })

  it('removes dashboard dataset data when dataset has dataUrl and isEditor is false', () => {
    const config = {
      type: 'dashboard',
      dashboard: { sharedFilters: [] },
      datasets: {
        data_1: {
          dataUrl: '/api/dashboard.csv',
          data: [{ a: 1 }],
          formattedData: [{ a: 1 }]
        }
      },
      visualizations: {},
      rows: []
    } as any

    const stripped = stripConfig(config)

    expect(stripped.datasets.data_1.data).toBeUndefined()
    expect(stripped.datasets.data_1.formattedData).toBeUndefined()
    expect(stripped.datasets.data_1.dataUrl).toBe('/api/dashboard.csv')
  })

  it('preserves dashboard dataset data when dataset has dataUrl and isEditor is true', () => {
    const config = {
      type: 'dashboard',
      dashboard: { sharedFilters: [] },
      datasets: {
        data_1: {
          dataUrl: '/api/dashboard.csv',
          data: [{ a: 1 }],
          formattedData: [{ a: 1 }]
        }
      },
      visualizations: {},
      rows: []
    } as any

    const stripped = stripConfig(config, true)

    expect(stripped.datasets.data_1.data).toEqual([{ a: 1 }])
    expect(stripped.datasets.data_1.formattedData).toBeUndefined()
    expect(stripped.datasets.data_1.dataUrl).toBe('/api/dashboard.csv')
  })
})
