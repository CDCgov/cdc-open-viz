import { shouldLoadAllFilters } from '../shouldLoadAllFilters'

describe('shouldLoadAllFilters multi-dashboard datasets', () => {
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
