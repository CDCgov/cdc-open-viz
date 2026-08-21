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

  it('prefers customized series column labels over series names', () => {
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

    expect(getSeriesName('rate', config as any)).toBe('Rate Column')
  })

  it('keeps the series name when the column label is still the data key', () => {
    const config = {
      visualizationType: 'Bar',
      columns: {
        rate: {
          name: 'rate',
          label: 'rate'
        }
      },
      series: [{ dataKey: 'rate', name: 'Rate Series' }],
      table: {}
    }

    expect(getSeriesName('rate', config as any)).toBe('Rate Series')
  })
})
