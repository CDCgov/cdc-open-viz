import { getLocationInformationRows } from './locationInformation'
import { createNewMapConfig } from './createNewMapConfig'

const makeConfig = (geoType = 'us') =>
  createNewMapConfig({
    general: { type: 'data', geoType },
    columns: { geo: { name: 'Location' } }
  } as any)

describe('location information source rows', () => {
  it.each([
    ['us', 'US-AL', ['AL', 'Alabama', 'alabama'], 'AK'],
    ['world', 'CAN', ['Canada', 'CANADA', 'canada'], 'Mexico']
  ])('preserves duplicate rows and aliases on %s maps without changing source data', (geoType, id, aliases, other) => {
    const rows = [...aliases, other].map((Location, index) => Object.freeze({ Location, Value: index, uid: 'stale' }))
    const result = getLocationInformationRows(makeConfig(geoType), rows, [], id)
    expect(result.map(row => row.Value)).toEqual([0, 1, 2])
    expect(result.every(row => row.uid === id)).toBe(true)
    expect(rows.every(row => row.uid === 'stale')).toBe(true)
    expect(result[0]).not.toBe(rows[0])
    expect(Object.hasOwn(rows, 'fromColumn')).toBe(false)
  })

  it('uses active runtime filters, nested groups, and dashboard filters without mutating them', () => {
    const config = makeConfig()
    const filters = [
      {
        columnName: 'Group',
        active: 'A',
        filterStyle: 'nested-dropdown',
        subGrouping: { columnName: 'Sex', active: 'F' }
      }
    ] as any
    config.dashboardFilters = [{ columnName: 'Period', active: [2024], values: [2023, 2024] }] as any
    const rows = [
      { Location: 'AL', Group: 'A', Sex: 'F', Period: 2024, Value: 10 },
      { Location: 'AL', Group: 'A', Sex: 'F', Period: 2024, Value: 20 },
      { Location: 'AL', Group: 'A', Sex: 'M', Period: 2024, Value: 30 },
      { Location: 'AL', Group: 'B', Sex: 'F', Period: 2024, Value: 40 },
      { Location: 'AL', Group: 'A', Sex: 'F', Period: 2023, Value: 50 }
    ]
    const before = JSON.stringify({ filters, config })
    expect(getLocationInformationRows(config, rows, filters, 'US-AL').map(row => row.Value)).toEqual([10, 20])
    expect(JSON.stringify({ filters, config })).toBe(before)
  })

  it.each(['', 'unknown', 'US-AK'])('returns no rows for an empty or unmatched selection (%s)', selectedId => {
    expect(getLocationInformationRows(makeConfig(), [{ Location: 'AL' }], [], selectedId)).toEqual([])
  })
})
