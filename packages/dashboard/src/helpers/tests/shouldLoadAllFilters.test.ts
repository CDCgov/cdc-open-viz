import { shouldLoadAllFilters } from '../shouldLoadAllFilters'

describe('shouldLoadAllFilters', () => {
  it('returns false if not autoloading', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    expect(shouldLoadAllFilters({ rows: [] })).toBe(false)
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
          datakey: 'abcd'
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
})
