import { describe, expect, it } from 'vitest'
import { clampRaceSecondsPerFrame } from '../raceTiming'
import { buildLineRaceFrames, getLineRaceEligibility } from './helpers'

const config = {
  visualizationType: 'Line',
  visualizationSubType: 'racing',
  xAxis: { type: 'categorical', dataKey: 'Year' },
  series: [{ dataKey: 'North' }, { dataKey: 'South' }]
} as any

const data = [
  { Year: '2020', North: 10, South: 20 },
  { Year: '2021', North: 30, South: 15 },
  { Year: '2022', North: 25, South: 40 }
]

describe('line chart race helpers', () => {
  it('clamps authored timing to the supported range', () => {
    expect(clampRaceSecondsPerFrame(undefined)).toBe(0.5)
    expect(clampRaceSecondsPerFrame(-1)).toBe(0)
    expect(clampRaceSecondsPerFrame('1.2')).toBe(1)
    expect(clampRaceSecondsPerFrame('1.3')).toBe(1.5)
    expect(clampRaceSecondsPerFrame(100)).toBe(1.5)
  })

  it('builds cumulative wide-data frames in visible axis order', () => {
    const frames = buildLineRaceFrames(config, data)
    expect(frames.map(frame => frame.key)).toEqual(['2020', '2021', '2022'])
    expect(frames.map(frame => frame.rows.length)).toEqual([1, 2, 3])
    expect(frames.map(frame => frame.currentRows.length)).toEqual([1, 1, 1])
    expect(getLineRaceEligibility(config, data).eligible).toBe(true)
  })

  it('accepts one dynamic-category series and accumulates each frame together', () => {
    const dynamicConfig = { ...config, series: [{ dataKey: 'Value', dynamicCategory: 'Region' }] }
    const dynamicData = [
      { Year: '2020', Region: 'North', Value: 10 },
      { Year: '2020', Region: 'South', Value: 20 },
      { Year: '2021', Region: 'North', Value: 30 },
      { Year: '2021', Region: 'South', Value: 15 }
    ]
    const result = getLineRaceEligibility(dynamicConfig, dynamicData)
    expect(result.eligible).toBe(true)
    expect(result.frames.map(frame => frame.rows.length)).toEqual([2, 4])
  })

  it('applies custom categorical order and chronological or recent-first date order', () => {
    const customConfig = {
      ...config,
      xAxis: { ...config.xAxis, categoryOrderType: 'custom', categoryOrder: ['2022', '2020', '2021'] }
    }
    expect(buildLineRaceFrames(customConfig, data).map(frame => frame.key)).toEqual(['2022', '2020', '2021'])

    const recentFirst = [
      { Date: '2022-01-01', North: 25, South: 40 },
      { Date: '2020-01-01', North: 10, South: 20 },
      { Date: '2021-01-01', North: 30, South: 15 }
    ]
    const dateConfig = { ...config, xAxis: { type: 'date', dataKey: 'Date', sortByRecentDate: true } }
    expect(buildLineRaceFrames(dateConfig, recentFirst).map(frame => frame.key)).toEqual([
      '2022-01-01',
      '2021-01-01',
      '2020-01-01'
    ])
    expect(
      buildLineRaceFrames({ ...dateConfig, xAxis: { ...dateConfig.xAxis, sortByRecentDate: false } }, recentFirst).map(
        frame => frame.key
      )
    ).toEqual(['2020-01-01', '2021-01-01', '2022-01-01'])
  })

  it('rejects invalid dates, duplicates, brushes, and insufficient frames', () => {
    const dateConfig = { ...config, xAxis: { type: 'date', dataKey: 'Year' } }
    expect(getLineRaceEligibility(dateConfig, [{ ...data[0], Year: 'bad-date' }, data[1]]).reason).toContain(
      'valid date'
    )
    expect(getLineRaceEligibility(config, [...data, data[0]]).reason).toContain('one row per frame')
    expect(getLineRaceEligibility({ ...config, xAxis: { ...config.xAxis, brushActive: true } }, data).reason).toContain(
      'date brush'
    )
    expect(getLineRaceEligibility(config, data.slice(0, 1)).reason).toContain('two valid frame')
    expect(getLineRaceEligibility(config, [{ ...data[0], North: -1 }, data[1]]).reason).toContain('negative values')
  })
})
