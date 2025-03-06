import { SharedFilter } from '../../types/SharedFilter'
import { updateChildFilters } from '../updateChildFilters'

describe('updateChildFilters', () => {
  it('should filter data based on the provided filters', () => {
    const filters = [
      {
        tier: 1,
        columnName: 'name',
        active: 'John',
        key: 'Parent Filter',
        values: ['John', 'Kelly', 'Norman', 'Jane']
      },
      {
        tier: 2,
        columnName: 'lastName',
        active: '',
        key: 'Child Filter',
        parents: 'Parent Filter',
        values: ['Deer', 'Roberts']
      }
    ] as SharedFilter[]
    const data = {
      vizKey: [
        [
          { name: 'John', lastName: 'Deer' },
          { name: 'John', lastName: 'Roberts' },
          { name: 'Kelly', lastName: 'Adams' },
          { name: 'Norman', lastName: 'Sally' },
          { name: 'Jane', lastName: 'Gorman' }
        ]
      ]
    }

    let exprectedResult = [
      {
        tier: 1,
        columnName: 'name',
        active: 'John',
        key: 'Parent Filter',
        values: ['John', 'Kelly', 'Norman', 'Jane']
      },
      {
        tier: 2,
        columnName: 'lastName',
        active: '',
        key: 'Child Filter',
        parents: 'Parent Filter',
        values: ['Deer', 'Roberts'] // updated values only
      }
    ]
    const result = updateChildFilters(filters, data)

    expect(result).toEqual(exprectedResult)
  })
})
