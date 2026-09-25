import { describe, expect, it } from 'vitest'
import { buildBarRaceFrames, clampBarRaceMaxBars, getBarRaceEligibility } from './helpers'

const config = {
  visualizationType: 'Bar',
  visualizationSubType: 'racing',
  orientation: 'horizontal',
  barStyle: 'flat',
  isLollipopChart: false,
  xAxis: { type: 'categorical', dataKey: 'Year' },
  series: [{ dataKey: 'Value', dynamicCategory: 'Place' }],
  runtime: { seriesKeys: ['Beta', 'Alpha', 'Gamma'] },
  barRace: { maxBars: 2 }
} as any

const data = [
  { Year: '2020', Place: 'Alpha', Value: 10 },
  { Year: '2020', Place: 'Beta', Value: 10 },
  { Year: '2020', Place: 'Gamma', Value: 30 },
  { Year: '2021', Place: 'Alpha', Value: 50 },
  { Year: '2021', Place: 'Beta', Value: 20 },
  { Year: '2021', Place: 'Gamma', Value: 'missing' }
]

describe('bar chart race helpers', () => {
  it('preserves frame order, ranks descending, and uses runtime order to break ties', () => {
    const result = buildBarRaceFrames(config, data)

    expect(result.frames.map(frame => frame.key)).toEqual(['2020', '2021'])
    expect(result.frames[0].items.map(item => item.category)).toEqual(['Gamma', 'Beta'])
    expect(result.frames[1].items.map(item => item.category)).toEqual(['Alpha', 'Beta'])
    expect(result.globalMax).toBe(50)
    expect(result.competitorCount).toBe(3)
  })

  it('keeps the global domain stable when the largest value falls outside a frame top N', () => {
    const result = buildBarRaceFrames({ ...config, barRace: { maxBars: 1 } }, [
      ...data,
      { Year: '2022', Place: 'Gamma', Value: 100 }
    ])

    expect(result.frames[0].items).toHaveLength(1)
    expect(result.globalMax).toBe(100)
  })

  it('rejects incompatible or insufficient configs with an actionable reason', () => {
    expect(getBarRaceEligibility(config, data).eligible).toBe(true)
    expect(getBarRaceEligibility({ ...config, smallMultiples: { mode: 'by-column' } }, data)).toMatchObject({
      eligible: false,
      reason: 'Racing mode does not support small multiples.'
    })
    expect(
      getBarRaceEligibility(
        config,
        data.filter(row => row.Year === '2020')
      ).reason
    ).toContain('two valid frame')
    expect(
      getBarRaceEligibility(
        config,
        data.filter(row => row.Place === 'Alpha')
      ).reason
    ).toContain('two valid competitors')
  })

  it('excludes blank, negative, and nonnumeric values and clamps max bars', () => {
    const result = buildBarRaceFrames(config, [
      ...data,
      { Year: '2021', Place: 'Negative', Value: -1 },
      { Year: '2021', Place: 'Blank', Value: '' },
      { Year: '2021', Place: 'Null', Value: null },
      { Year: '2021', Place: 'Boolean', Value: false }
    ])

    expect(result.competitorCount).toBe(3)
    expect(clampBarRaceMaxBars(99, result.competitorCount)).toBe(3)
    expect(clampBarRaceMaxBars(0, result.competitorCount)).toBe(1)
  })

  it('rejects duplicate rows, nonhorizontal orientation, and nonflat styles', () => {
    expect(getBarRaceEligibility(config, [...data, data[0]]).reason).toContain('one row per frame')
    expect(getBarRaceEligibility({ ...config, orientation: 'vertical' }, data).reason).toContain(
      'horizontal orientation'
    )
    expect(getBarRaceEligibility({ ...config, barStyle: 'rounded' }, data).reason).toContain('flat bar style')
  })
})
