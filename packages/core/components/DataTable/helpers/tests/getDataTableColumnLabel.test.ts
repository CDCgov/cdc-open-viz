import { describe, expect, it } from 'vitest'
import { getDataTableColumnLabel } from '../getDataTableColumnLabel'

describe('getDataTableColumnLabel', () => {
  it.each([
    {
      caseName: 'customized label for a configured series',
      config: {
        visualizationType: 'Bar',
        columns: { rate: { name: 'rate', label: 'Rate Column' } },
        series: [{ dataKey: 'rate', name: 'Rate Series' }],
        table: {}
      },
      expected: 'Rate Column'
    },
    {
      caseName: 'series name when the column label is unchanged',
      config: {
        visualizationType: 'Bar',
        columns: { rate: { name: 'rate', label: 'rate' } },
        series: [{ dataKey: 'rate', name: 'Rate Series' }],
        table: {}
      },
      expected: 'Rate Series'
    },
    {
      caseName: 'customized HeatMap label',
      config: {
        visualizationType: 'HeatMap',
        columns: { rate: { name: 'rate', label: 'Rate Column' } },
        series: [{ dataKey: 'rate', name: 'Rate Series' }],
        table: {}
      },
      expected: 'Rate Column'
    }
  ])('returns the $caseName', ({ config, expected }) => {
    expect(getDataTableColumnLabel('rate', config as any)).toBe(expected)
  })
})
