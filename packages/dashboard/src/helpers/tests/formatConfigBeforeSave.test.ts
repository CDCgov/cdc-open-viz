import { addValuesToDashboardFilters } from '../addValuesToDashboardFilters'
import { filterData } from '../filterData'
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

  it('removes all shared filters when dashboardFilters viz has no sharedFilterIndexes', () => {
    const config: DashboardConfig = {
      dashboard: {
        sharedFilters: [{ id: 1, type: 'filter1' }]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters' } as any
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([])
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

  it('omits persisted value arrays from source-ordered filters while preserving defaults', () => {
    const config: DashboardConfig = {
      dashboard: {
        sharedFilters: [
          {
            id: 1,
            type: 'datafilter',
            order: 'data',
            values: ['March', 'January'],
            orderedValues: ['January', 'March'],
            defaultValue: 'January',
            active: 'January'
          }
        ]
      },
      visualizations: {
        viz1: { type: 'dashboardFilters', sharedFilterIndexes: [0] }
      }
    }

    cleanSharedFilters(config)

    expect(config.dashboard.sharedFilters).toEqual([
      { id: 1, type: 'datafilter', order: 'data', defaultValue: 'January' }
    ])
  })
})

describe('stripConfig', () => {
  it('handles sparse multi-dashboard entries without visualizations', () => {
    const config = {
      type: 'dashboard',
      multiDashboards: [{ dashboard: { sharedFilters: [] } }]
    } as any

    const stripped = stripConfig(config, true)

    expect(stripped.multiDashboards).toEqual([{ dashboard: { sharedFilters: [] } }])
  })

  it('omits source-order value arrays from every multi-dashboard filter', () => {
    const createDashboard = label => ({
      label,
      dashboard: {
        sharedFilters: [
          {
            id: 1,
            type: 'datafilter',
            order: 'data',
            values: ['March', 'January'],
            orderedValues: ['January', 'March'],
            defaultValue: 'January'
          }
        ]
      },
      datasets: {},
      rows: [],
      visualizations: {
        filters: { type: 'dashboardFilters', sharedFilterIndexes: [0] }
      }
    })
    const config = {
      type: 'dashboard',
      dashboard: {},
      datasets: {},
      rows: [],
      visualizations: {},
      multiDashboards: [createDashboard('One'), createDashboard('Two')]
    } as any

    const stripped = stripConfig(config)

    stripped.multiDashboards.forEach(dashboard => {
      expect(dashboard.dashboard.sharedFilters[0]).not.toHaveProperty('values')
      expect(dashboard.dashboard.sharedFilters[0]).not.toHaveProperty('orderedValues')
      expect(dashboard.dashboard.sharedFilters[0].defaultValue).toBe('January')
    })
  })

  it('removes inline data for non-dashboard URL-backed configs when isEditor is false', () => {
    const config = {
      type: 'bar',
      dataUrl: '/api/data.csv',
      data: [{ value: 10 }],
      dataMetadata: { lastUpdated: 'June 2026' },
      runtime: { loaded: true },
      formattedData: [{ value: 10 }]
    }

    const stripped = stripConfig(config)

    expect(stripped.data).toBeUndefined()
    expect(stripped.dataMetadata).toBeUndefined()
    expect(stripped.dataUrl).toBe('/api/data.csv')
    expect(stripped.runtime).toBeUndefined()
    expect(stripped.formattedData).toBeUndefined()
  })

  it('preserves inline data for non-dashboard URL-backed configs when isEditor is true', () => {
    const config = {
      type: 'bar',
      dataUrl: '/api/data.csv',
      data: [{ value: 10 }],
      dataMetadata: { lastUpdated: 'June 2026' },
      runtime: { loaded: true },
      formattedData: [{ value: 10 }]
    }

    const stripped = stripConfig(config, true)

    expect(stripped.data).toEqual([{ value: 10 }])
    expect(stripped.dataMetadata).toEqual({ lastUpdated: 'June 2026' })
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
          dataMetadata: { lastUpdated: 'June 2026' },
          formattedData: [{ a: 1 }]
        }
      },
      visualizations: {},
      rows: []
    } as any

    const stripped = stripConfig(config)

    expect(stripped.datasets.data_1.data).toBeUndefined()
    expect(stripped.datasets.data_1.dataMetadata).toBeUndefined()
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
          dataMetadata: { lastUpdated: 'June 2026' },
          formattedData: [{ a: 1 }]
        }
      },
      visualizations: {},
      rows: []
    } as any

    const stripped = stripConfig(config, true)

    expect(stripped.datasets.data_1.data).toEqual([{ a: 1 }])
    expect(stripped.datasets.data_1.dataMetadata).toEqual({ lastUpdated: 'June 2026' })
    expect(stripped.datasets.data_1.formattedData).toBeUndefined()
    expect(stripped.datasets.data_1.dataUrl).toBe('/api/dashboard.csv')
  })

  it('preserves dashboard dataset metadata when dataset is inline', () => {
    const config = {
      type: 'dashboard',
      dashboard: { sharedFilters: [] },
      datasets: {
        data_1: {
          data: [{ a: 1 }],
          dataMetadata: { source: 'Inline import' },
          formattedData: [{ a: 1 }]
        }
      },
      visualizations: {},
      rows: []
    } as any

    const stripped = stripConfig(config)

    expect(stripped.datasets.data_1.data).toEqual([{ a: 1 }])
    expect(stripped.datasets.data_1.dataMetadata).toEqual({ source: 'Inline import' })
    expect(stripped.datasets.data_1.formattedData).toBeUndefined()
  })

  it('removes dashboard visualization runtime data artifacts', () => {
    const config = {
      type: 'dashboard',
      dashboard: { sharedFilters: [] },
      datasets: {},
      rows: [],
      visualizations: {
        chart1: {
          type: 'chart',
          data: [{ value: 1 }],
          dataMetadata: { lastUpdated: 'June 2026' },
          formattedData: [{ value: 1 }],
          originalFormattedData: [{ value: 1 }],
          yAxisDomainData: [{ value: 1 }],
          runtime: { loaded: true },
          editing: true
        }
      }
    } as any

    const stripped = stripConfig(config)

    expect(stripped.visualizations.chart1.data).toBeUndefined()
    expect(stripped.visualizations.chart1.dataMetadata).toBeUndefined()
    expect(stripped.visualizations.chart1.formattedData).toBeUndefined()
    expect(stripped.visualizations.chart1.originalFormattedData).toBeUndefined()
    expect(stripped.visualizations.chart1.yAxisDomainData).toBeUndefined()
    expect(stripped.visualizations.chart1.runtime).toBeUndefined()
    expect(stripped.visualizations.chart1.editing).toBeUndefined()
  })
})

describe('DEV-13957 show-all persistence', () => {
  it.each([true, false])(
    'preserves explicit showAllOption %s and restores its default after JSON export',
    showAllOption => {
      const data = [{ substance: 'Acetone' }, { substance: 'Benzene' }, { substance: 'All' }]
      const config = {
        type: 'dashboard',
        dashboard: {
          sharedFilters: [
            {
              key: 'Substance',
              type: 'datafilter',
              filterStyle: 'multi-select',
              showDropdown: true,
              showAllOption,
              columnName: 'substance',
              defaultValue: 'All',
              active: ['Acetone'],
              queuedActive: ['Benzene'],
              order: 'data',
              values: []
            }
          ]
        },
        rows: [],
        datasets: { small: { data } },
        visualizations: { filters: { type: 'dashboardFilters', sharedFilterIndexes: [0] } }
      } as any
      const saved = JSON.parse(JSON.stringify(stripConfig(config, true)))
      expect(saved.dashboard.sharedFilters[0].showAllOption).toBe(showAllOption)
      expect(saved.dashboard.sharedFilters[0].active).toBeUndefined()
      expect(saved.dashboard.sharedFilters[0].queuedActive).toBeUndefined()
      const filters = addValuesToDashboardFilters(saved.dashboard.sharedFilters, { small: data })
      expect(filters[0].active).toEqual(['All'])
      expect(filterData(filters, data)).toEqual(showAllOption ? data : [data[2]])
    }
  )
})
