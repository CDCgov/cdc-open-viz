import { shouldLoadAllFilters } from '../shouldLoadAllFilters'

describe('shouldLoadAllFilters multi-dashboard datasets', () => {
  it('handles a sparse stored tab without visualizations', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      multiDashboards: [{ dashboard: {}, rows: [] }],
      datasets: {},
      activeDashboard: 0
    }

    expect(shouldLoadAllFilters(config)).toBe(false)
  })

  it('uses active multi-dashboard datasets when the root datasets object is empty', () => {
    delete window.location
    window.location = new URL('https://www.example.com?cove-auto-load=true')
    const config = {
      multiDashboards: [
        {
          dashboard: {},
          visualizations: {},
          rows: [],
          datasets: {}
        },
        {
          dashboard: {},
          visualizations: {
            abc: {
              dataKey: 'active-tab-data'
            }
          },
          rows: [],
          datasets: {
            'active-tab-data': {
              data: []
            }
          }
        }
      ],
      datasets: {},
      activeDashboard: 1
    }

    expect(shouldLoadAllFilters(config)).toBe(true)
  })
})
