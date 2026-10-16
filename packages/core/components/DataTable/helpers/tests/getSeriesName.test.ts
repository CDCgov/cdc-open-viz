import { describe, expect, it } from 'vitest'
import { getSeriesName } from '../getSeriesName'

describe('getSeriesName', () => {
  it('prefers customized HeatMap column labels over default series names', () => {
    const config = {
      visualizationType: 'HeatMap',
      columns: {
        Atlanta: {
          name: 'Atlanta',
          label: 'ATL'
        }
      },
      series: [{ dataKey: 'Atlanta', name: 'Atlanta' }],
      table: {}
    }

    expect(getSeriesName('Atlanta', config as any)).toBe('ATL')
  })

  it('keeps non-HeatMap series names ahead of column labels', () => {
    const config = {
      visualizationType: 'Bar',
      columns: {
        rate: {
          name: 'rate',
          label: 'Rate Column'
        }
      },
      series: [{ dataKey: 'rate', name: 'Rate Series' }],
      table: {}
    }

    expect(getSeriesName('rate', config as any)).toBe('Rate Series')
  })
})
