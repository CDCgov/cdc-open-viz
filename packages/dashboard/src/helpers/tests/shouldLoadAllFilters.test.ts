import { filter } from 'lodash'
import { shouldLoadAllFilters } from '../shouldLoadAllFilters'

describe('shouldLoadAllFilters', () => {
  it('returns false if not autoloading', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    expect(shouldLoadAllFilters({ rows: [], visualizations: {} })).toBe(false)
  })
  it('returns true if missing data', () => {
    delete window.location
    window.location = new URL('https://www.example.com?cove-auto-load=true')
    const config = {
      visualizations: {
        abc: {
          dataKey: 'abcd'
        }
      },
      rows: [],
      datasets: {
        abcd: {
          data: []
        }
      }
    }
    expect(shouldLoadAllFilters(config)).toBe(true)
    const config2 = {
      multiDashboards: [
        {
          visualizations: {
            abc: {
              dataKey: 'abcd'
            }
          },
          rows: [],
          datasets: {
            abcd: {
              data: []
            }
          }
        }
      ],
      datasets: {
        abcd: {
          data: []
        }
      },
      activeDashboard: 0
    }
    expect(shouldLoadAllFilters(config2)).toBe(true)
  })
  it('returns false if no missing data', () => {
    delete window.location
    window.location = new URL('https://www.example.com?cove-auto-load=true')
    const config = {
      visualizations: {
        abc: {
          dataKey: 'abcd'
        }
      },
      rows: [],
      datasets: {
        abcd: {
          data: [{}]
        }
      }
    }
    expect(shouldLoadAllFilters(config)).toBe(false)
  })
  it('returns true when theres an autoloading filter and no apply filters', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      visualizations: {
        abc: {
          visualizationType: 'dashboardFilters',
          dataKey: 'abcd',
          autoLoad: true
        }
      },
      rows: [],
      datasets: {
        abcd: { data: [] }
      }
    }
    expect(shouldLoadAllFilters(config)).toBe(true)
  })

  it('returns false when theres an autoloading filter and apply filters', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      visualizations: {
        abc: {
          visualizationType: 'dashboardFilters',
          dataKey: 'abcd',
          autoLoad: true
        },
        abc2: {
          visualizationType: 'dashboardFilters',
          dataKey: 'abcde',
          filterBehavior: 'Apply Button'
        }
      },
      rows: [],
      datasets: {
        abcd: { data: [] },
        abcde: { data: [] }
      }
    }
    expect(shouldLoadAllFilters(config)).toBe(false)
  })
})
