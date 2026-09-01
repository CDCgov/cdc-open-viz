import { describe, expect, it } from 'vitest'
import { getSeriesName } from '../getSeriesName'

describe('getSeriesName', () => {
  it.each([
    {
      caseName: 'authored series name',
      config: {
        series: [{ dataKey: 'rate', name: 'Rate Series' }],
        columns: { rate: { name: 'rate', label: 'Rate Column' } }
      },
      expected: 'Rate Series'
    },
    {
      caseName: 'runtime series label',
      config: {
        series: [{ dataKey: 'rate' }],
        runtime: {
          series: [{ dataKey: 'rate' }],
          seriesLabels: { rate: 'Runtime Rate' }
        }
      },
      expected: 'Runtime Rate'
    },
    {
      caseName: 'legacy series label',
      config: { series: [{ dataKey: 'rate', label: 'Legacy Rate' }] },
      expected: 'Legacy Rate'
    },
    {
      caseName: 'raw data key instead of a customized column label',
      config: {
        series: [{ dataKey: 'rate' }],
        columns: { rate: { name: 'rate', label: 'Rate Column' } }
      },
      expected: 'rate'
    }
  ])('returns the $caseName', ({ config, expected }) => {
    expect(getSeriesName('rate', config)).toBe(expected)
  })
})
