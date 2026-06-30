import { describe, expect, it } from 'vitest'
import { getSeriesWithData } from '../dataHelpers'
import { ChartConfig } from '../../types/ChartConfig'

type SeriesInput = {
  dataKey: string
  name?: string
  type?: string
  dynamicCategory?: string
  originalDataKey?: string
}

const buildConfig = (
  data: Record<string, unknown>[],
  series: SeriesInput[],
  overrides: Partial<ChartConfig> = {}
): ChartConfig =>
  ({
    data,
    filters: [],
    legend: { colorCode: '' },
    runtime: { series },
    ...overrides
  } as unknown as ChartConfig)

describe('getSeriesWithData', () => {
  it('includes a series that has at least one numeric non-zero value', () => {
    const config = buildConfig(
      [{ percent_mild: '3.8' }, { percent_mild: '0.0' }],
      [{ dataKey: 'percent_mild', name: 'Mild', type: 'Bar' }]
    )
    expect(getSeriesWithData(config)).toEqual(['Mild'])
  })

  it('excludes a series whose values are all zero (0 and "0.0")', () => {
    const config = buildConfig(
      [{ percent_fever_notemp: '0.0' }, { percent_fever_notemp: 0 }],
      [{ dataKey: 'percent_fever_notemp', name: 'Reported fever', type: 'Bar' }]
    )
    expect(getSeriesWithData(config)).toEqual([])
  })

  it('keeps a series that has a single non-zero value among zeros', () => {
    const config = buildConfig(
      [{ percent_mild: '0.0' }, { percent_mild: '0.0' }, { percent_mild: '1.2' }],
      [{ dataKey: 'percent_mild', name: 'Mild', type: 'Bar' }]
    )
    expect(getSeriesWithData(config)).toEqual(['Mild'])
  })

  it('treats non-numeric placeholder strings as no data', () => {
    const config = buildConfig(
      [{ percent_fever_notemp: 'Not applicable' }, { percent_fever_notemp: '<1.0' }, { percent_fever_notemp: '' }],
      [{ dataKey: 'percent_fever_notemp', name: 'Reported fever', type: 'Bar' }]
    )
    expect(getSeriesWithData(config)).toEqual([])
  })

  it('treats null and undefined values as no data', () => {
    const config = buildConfig(
      [{ percent_fever_notemp: null }, { percent_fever_notemp: undefined }],
      [{ dataKey: 'percent_fever_notemp', name: 'Reported fever', type: 'Bar' }]
    )
    expect(getSeriesWithData(config)).toEqual([])
  })

  it('counts comma- and dollar-formatted numeric strings as data', () => {
    const config = buildConfig(
      [{ revenue: '$1,000' }, { revenue: '0.0' }],
      [{ dataKey: 'revenue', name: 'Revenue', type: 'Bar' }]
    )
    expect(getSeriesWithData(config)).toEqual(['Revenue'])
  })

  it('counts negative non-zero values as data', () => {
    const config = buildConfig([{ delta: '-5' }, { delta: '0' }], [{ dataKey: 'delta', name: 'Delta', type: 'Bar' }])
    expect(getSeriesWithData(config)).toEqual(['Delta'])
  })

  it('applies active filters before evaluating series data', () => {
    const config = buildConfig(
      [
        { reaction: 'Headache', percent_fever_notemp: '0.0', percent_mild: '3.8' },
        { reaction: 'Fever or feverish', percent_fever_notemp: '0.9', percent_mild: '0.0' }
      ],
      [
        { dataKey: 'percent_mild', name: 'Mild', type: 'Bar' },
        { dataKey: 'percent_fever_notemp', name: 'Reported fever', type: 'Bar' }
      ],
      { filters: [{ columnName: 'reaction', active: 'Headache' }] as ChartConfig['filters'] }
    )
    // Under "Headache" the fever column is all zeros, so it drops out of the legend.
    expect(getSeriesWithData(config)).toEqual(['Mild'])
  })

  it('uses originalDataKey for dynamicCategory series', () => {
    const config = buildConfig(
      [
        { category: 'a', value: '4.2', label: 'a-value' },
        { category: 'b', value: '0.0', label: 'b-value' }
      ],
      [
        {
          dataKey: 'a',
          name: 'A',
          type: 'Bar',
          dynamicCategory: 'category',
          originalDataKey: 'value'
        },
        {
          dataKey: 'b',
          name: 'B',
          type: 'Bar',
          dynamicCategory: 'category',
          originalDataKey: 'value'
        }
      ]
    )
    // Series "a" has a non-zero value; series "b" is zero only.
    expect(getSeriesWithData(config)).toEqual(['A'])
  })

  it('splits color-coded Bar series by colorCode values', () => {
    const config = buildConfig(
      [
        { group: 'North', amount: '5' },
        { group: 'South', amount: '0.0' }
      ],
      [{ dataKey: 'amount', name: 'Amount', type: 'Bar' }],
      { legend: { colorCode: 'group' } as ChartConfig['legend'] }
    )
    // Only the "North" rows carry a non-zero amount.
    expect(getSeriesWithData(config)).toEqual(['North'])
  })
})
