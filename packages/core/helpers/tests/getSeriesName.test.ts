import { describe, expect, it } from 'vitest'
import { getSeriesName, getSeriesValueLabel } from '../getSeriesName'

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

describe('getSeriesValueLabel', () => {
  it.each([
    {
      caseName: 'customized column label',
      columns: { rate: { name: 'rate', label: 'Case Rate' } },
      expected: 'Case Rate'
    },
    {
      caseName: 'series name when the column label matches the data key',
      columns: { rate: { name: 'rate', label: 'rate' } },
      expected: 'Reported Cases'
    },
    {
      caseName: 'series name when the column label is cleared',
      columns: { rate: { name: 'rate', label: '' } },
      expected: 'Reported Cases'
    },
    {
      caseName: 'series name when the column config key differs from its source name',
      columns: { additionalColumn1: { name: 'rate', label: 'Case Rate' } },
      expected: 'Case Rate'
    }
  ])('returns the $caseName', ({ columns, expected }) => {
    const config = {
      columns,
      series: [{ dataKey: 'rate', name: 'Reported Cases' }],
      runtime: { seriesLabels: { rate: 'Reported Cases' } }
    }

    expect(getSeriesValueLabel('rate', config)).toBe(expected)
  })
})
