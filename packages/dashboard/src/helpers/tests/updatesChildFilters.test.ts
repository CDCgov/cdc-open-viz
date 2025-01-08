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
        active: 'Deer',
        key: 'Child Filter',
        parents: 'Parent Filter',
        values: ['Deer', 'Adams', 'Sally', 'Gorman', 'Roberts']
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

  it('should handle a parent with two child filters', () => {
    const filters = [
      {
        tier: 1,
        columnName: 'category',
        active: 'Electronics',
        key: 'Parent Filter',
        values: ['Electronics', 'Furniture', 'Clothing']
      },
      {
        tier: 2,
        columnName: 'brand',
        key: 'Child Filter 1',
        parents: 'Parent Filter',
        values: ['Sony', 'Samsung', 'IKEA', 'Nike']
      },
      {
        tier: 3,
        columnName: 'priceRange',
        key: 'Child Filter 2',
        parents: 'Parent Filter',
        values: ['Under $50', '$50-$100', 'Over $100']
      }
    ] as SharedFilter[]

    const data = {
      vizKey: [
        [
          { category: 'Electronics', brand: 'Sony', priceRange: '$50-$100' },
          { category: 'Electronics', brand: 'Samsung', priceRange: 'Over $100' },
          { category: 'Furniture', brand: 'IKEA', priceRange: '$50-$100' },
          { category: 'Clothing', brand: 'Nike', priceRange: 'Under $50' }
        ]
      ]
    }

    const expectedResult = [
      {
        tier: 1,
        columnName: 'category',
        active: 'Electronics',
        key: 'Parent Filter',
        values: ['Electronics', 'Furniture', 'Clothing']
      },
      {
        tier: 2,
        columnName: 'brand',
        key: 'Child Filter 1',
        parents: 'Parent Filter',
        values: ['Sony', 'Samsung'] // Updated to match 'Electronics'
      },
      {
        tier: 3,
        columnName: 'priceRange',
        key: 'Child Filter 2',
        parents: 'Parent Filter',
        values: ['$50-$100', 'Over $100'] // Updated to match 'Electronics'
      }
    ]

    const result = updateChildFilters(filters, data)

    expect(result).toEqual(expectedResult)
  })
})
