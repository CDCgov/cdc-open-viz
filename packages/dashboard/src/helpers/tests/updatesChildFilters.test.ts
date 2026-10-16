import { SharedFilter } from '../../types/SharedFilter'
import { updateChildFilters } from '../updateChildFilters'

describe('updateChildFilters', () => {
  it('should filter data based on a single parent filter', () => {
    const filters = [
      {
        tier: 1,
        columnName: 'name',
        active: 'John',
        key: 'Parent Filter',
        values: ['John', 'Kelly', 'Norman', 'Jane'],
        type: 'datafilter'
      },
      {
        tier: 2,
        columnName: 'lastName',
        active: '',
        key: 'Child Filter',
        parents: ['Parent Filter'],
        values: ['Deer', 'Roberts'],
        type: 'datafilter'
      }
    ] as SharedFilter[]
    const data = {
      vizKey: [
        { name: 'John', lastName: 'Deer' },
        { name: 'John', lastName: 'Roberts' },
        { name: 'Kelly', lastName: 'Adams' },
        { name: 'Norman', lastName: 'Sally' },
        { name: 'Jane', lastName: 'Gorman' }
      ]
    }

    const result = updateChildFilters(filters, data)

    expect(result[0]).toEqual(filters[0]) // Parent unchanged
    expect(result[1].values).toEqual(['Deer', 'Roberts']) // Child values filtered
    expect(result[1].active).toBe('Deer') // Active set to first value when empty
  })

  it('should filter data based on multiple parent filters', () => {
    const filters = [
      {
        tier: 1,
        columnName: 'state',
        active: 'CA',
        key: 'State Filter',
        values: ['CA', 'NY', 'TX'],
        type: 'datafilter'
      },
      {
        tier: 1,
        columnName: 'year',
        active: '2023',
        key: 'Year Filter',
        values: ['2022', '2023', '2024'],
        type: 'datafilter'
      },
      {
        tier: 2,
        columnName: 'city',
        active: '',
        key: 'City Filter',
        parents: ['State Filter', 'Year Filter'],
        values: [],
        type: 'datafilter'
      }
    ] as SharedFilter[]
    const data = {
      vizKey: [
        { state: 'CA', year: '2023', city: 'Los Angeles' },
        { state: 'CA', year: '2023', city: 'San Francisco' },
        { state: 'CA', year: '2022', city: 'Sacramento' },
        { state: 'NY', year: '2023', city: 'New York City' },
        { state: 'TX', year: '2023', city: 'Austin' }
      ]
    }

    const result = updateChildFilters(filters, data)

    // Should only include cities where state=CA AND year=2023
    expect(result[2].values).toEqual(['Los Angeles', 'San Francisco'])
    expect(result[2].values).not.toContain('Sacramento') // Different year
    expect(result[2].values).not.toContain('New York City') // Different state
  })
})
