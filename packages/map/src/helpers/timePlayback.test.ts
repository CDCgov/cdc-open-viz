import { describe, expect, it } from 'vitest'
import {
  applyNonTimeFilters,
  getOrderedTimeFrames,
  getTimePlaybackEligibility,
  projectTimePlaybackFrame
} from './timePlayback'

const rows = [
  { state: 'AL', year: 2021, rate: 10, region: 'South' },
  { state: 'CA', year: 2021, rate: 20, region: 'West' },
  { state: 'AL', year: 2022, rate: 30, region: 'South' },
  { state: 'CA', year: 2022, rate: 40, region: 'West' },
  { state: 'AL', year: 2023, rate: 50, region: 'South' },
  { state: 'CA', year: 2023, rate: 60, region: 'West' }
]

const config = (overrides: Record<string, unknown> = {}) => ({
  data: rows,
  columns: { geo: { name: 'state' }, primary: { name: 'rate' } },
  general: { geoType: 'us', type: 'data' },
  timePlayback: {
    enabled: true,
    column: 'year',
    secondsPerFrame: 0.5,
    order: 'ascending' as const,
    customOrder: []
  },
  ...overrides
})

describe('getOrderedTimeFrames', () => {
  it('sorts numeric frames and ignores blank values', () => {
    const data = [{ period: '10' }, { period: '' }, { period: 2 }, { period: null }, { period: '1' }]
    expect(getOrderedTimeFrames(data, 'period')).toEqual(['1', 2, '10'])
  })

  it('sorts parseable dates chronologically', () => {
    const data = [{ period: '2024-03-01' }, { period: '2023-12-15' }, { period: '2024-01-02' }]
    expect(getOrderedTimeFrames(data, 'period')).toEqual(['2023-12-15', '2024-01-02', '2024-03-01'])
  })

  it('sorts month/day/year date labels chronologically', () => {
    const data = [{ period: '06/30/2022' }, { period: '12/01/2023' }, { period: '01/15/2021' }]
    expect(getOrderedTimeFrames(data, 'period')).toEqual(['01/15/2021', '06/30/2022', '12/01/2023'])
  })

  it('uses natural ordering for non-date strings', () => {
    const data = [{ period: 'Week 10' }, { period: 'Week 2' }, { period: 'Week 1' }]
    expect(getOrderedTimeFrames(data, 'period')).toEqual(['Week 1', 'Week 2', 'Week 10'])
  })

  it('normalizes boolean frame labels to strings', () => {
    expect(getOrderedTimeFrames([{ period: true }, { period: false }], 'period')).toEqual(['false', 'true'])
  })

  it('uses custom order exactly and appends unmatched values in natural order', () => {
    const data = [{ period: 'Q4' }, { period: 'Q2' }, { period: 'Q3' }, { period: 'Q1' }]
    expect(getOrderedTimeFrames(data, 'period', 'custom', ['Q3', 'Q1', 'missing'])).toEqual(['Q3', 'Q1', 'Q2', 'Q4'])
  })
})

describe('applyNonTimeFilters', () => {
  it('applies non-time filters and omits the authored time-column filter', () => {
    const filtered = applyNonTimeFilters(
      rows,
      [
        { columnName: 'year', active: 2021 },
        { columnName: 'region', active: 'West' }
      ],
      'year'
    )

    expect(filtered).toEqual([
      { state: 'CA', year: 2021, rate: 20, region: 'West' },
      { state: 'CA', year: 2022, rate: 40, region: 'West' },
      { state: 'CA', year: 2023, rate: 60, region: 'West' }
    ])
  })

  it('supports multi-select and nested filters while ignoring URL-only filters', () => {
    const data = [
      { state: 'AL', year: 2022, region: 'South', group: 'A' },
      { state: 'CA', year: 2022, region: 'West', group: 'A' },
      { state: 'OR', year: 2022, region: 'West', group: 'B' }
    ]
    const filtered = applyNonTimeFilters(
      data,
      [
        { columnName: 'state', active: ['CA', 'OR'] },
        {
          columnName: 'region',
          active: 'West',
          filterStyle: 'nested-dropdown',
          subGrouping: { columnName: 'group', active: 'A' }
        },
        { columnName: 'ignored', active: 'no-match', type: 'url' }
      ],
      'year'
    )

    expect(filtered).toEqual([{ state: 'CA', year: 2022, region: 'West', group: 'A' }])
  })
})

describe('projectTimePlaybackFrame', () => {
  it('projects a frame without mutating or returning source row objects', () => {
    const source = rows.map(row => Object.freeze({ ...row }))
    const projected = projectTimePlaybackFrame(source, 'year', '2022')

    expect(projected).toEqual([
      { state: 'AL', year: 2022, rate: 30, region: 'South' },
      { state: 'CA', year: 2022, rate: 40, region: 'West' }
    ])
    expect(projected[0]).not.toBe(source[2])
    expect(source).toEqual(rows)
  })
})

describe('getTimePlaybackEligibility', () => {
  it('returns the latest automatic frame as the eligible initial frame', () => {
    expect(getTimePlaybackEligibility(config())).toMatchObject({
      eligible: true,
      frames: [2021, 2022, 2023],
      initialFrame: 2023
    })
  })

  it('returns the first authored custom frame as the eligible initial frame', () => {
    expect(
      getTimePlaybackEligibility(
        config({
          timePlayback: {
            enabled: true,
            column: 'year',
            order: 'custom',
            customOrder: [2023, 2022, 2021]
          }
        })
      )
    ).toMatchObject({
      eligible: true,
      frames: [2023, 2022, 2021],
      initialFrame: 2023
    })
  })

  it.each([
    ['world maps', { general: { geoType: 'world', type: 'data' } }],
    ['navigation maps', { general: { geoType: 'us', type: 'navigation' } }],
    [
      'bubble maps',
      {
        bubble: {
          layers: [{ columns: { geo: { name: 'state' }, primary: { name: 'rate' } } }]
        }
      }
    ],
    ['small multiples', { smallMultiples: { tileColumn: 'region' } }]
  ])('rejects unsupported %s', (_label, override) => {
    expect(getTimePlaybackEligibility(config(override))).toMatchObject({
      eligible: false,
      reason: 'unsupported-map'
    })
  })

  it('allows the unconfigured default bubble layer on an ordinary state map', () => {
    expect(
      getTimePlaybackEligibility(
        config({
          bubble: {
            layers: [{ columns: { geo: { name: '' }, primary: { name: '' }, size: { name: '' } } }]
          }
        })
      )
    ).toMatchObject({ eligible: true, frames: [2021, 2022, 2023], initialFrame: 2023 })
  })

  it('becomes ineligible when a non-time filter leaves fewer than two frames', () => {
    const oneFrameRows = rows.map(row => ({ ...row, selection: row.year === 2023 ? 'yes' : 'no' }))
    const result = getTimePlaybackEligibility(config({ data: oneFrameRows }), [
      { columnName: 'selection', active: 'yes' }
    ])

    expect(result).toMatchObject({ eligible: false, reason: 'insufficient-frames', frames: [2023] })
  })

  it('reports a configured column that is absent from the data', () => {
    expect(
      getTimePlaybackEligibility(
        config({ timePlayback: { enabled: true, column: 'missing', order: 'ascending', customOrder: [] } })
      )
    ).toMatchObject({ eligible: false, reason: 'missing-column' })
  })

  it('rejects duplicate geography/time pairs after non-time filtering', () => {
    const duplicateRows = [...rows, { ...rows[0], rate: 999 }]
    expect(getTimePlaybackEligibility(config({ data: duplicateRows }))).toMatchObject({
      eligible: false,
      reason: 'duplicate-geography-frame'
    })
  })

  it('ignores blank frame rows when checking duplicate geography/time pairs', () => {
    const data = [...rows, { state: 'AL', year: '', rate: 1 }, { state: 'AL', year: '', rate: 2 }]
    expect(getTimePlaybackEligibility(config({ data }))).toMatchObject({ eligible: true })
  })

  it('does not mutate source rows while building filtered eligibility data', () => {
    const source = rows.map(row => Object.freeze({ ...row }))
    const result = getTimePlaybackEligibility(config({ data: source }))

    expect(result.filteredData[0]).not.toBe(source[0])
    expect(source).toEqual(rows)
  })
})
