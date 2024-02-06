import { SharedFilter } from '../../types/SharedFilter'
import { filterData } from '../filterData'

describe('filterData', () => {
  it('should filter data based on the provided filters', () => {
    const filters = [
      { tier: 1, columnName: 'name', active: 'John', queuedActive: 'John', fileName: 'abc', key: 'abc' },
      { tier: 2, columnName: 'age', active: 30, queuedActive: 30, fileName: 'abc', key: 'abc' }
    ] as SharedFilter[]
    const data = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'John', age: 35 },
      { name: 'Jane', age: 30 }
    ]
    const filterBehavior = {}

    const result = filterData(filters, data, filterBehavior)

    expect(result).toEqual([{ name: 'John', age: 30 }])
  })

  it('filters with parents', () => {
    const filters = [
      { columnName: 'name', active: 'John', queuedActive: 'John', fileName: 'abc', key: 'abc' },
      { columnName: 'age', active: 30, queuedActive: 30, fileName: 'abc', key: 'abc', parents: ['name'] }
    ] as SharedFilter[]
    const data = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'John', age: 35 },
      { name: 'Jane', age: 30 }
    ]
    const filterBehavior = {}

    const result = filterData(filters, data, filterBehavior)

    expect(result).toEqual([{ name: 'John', age: 30 }])
  })

  it('causes sideEffects to filters', () => {
    // the side effect is not desired, but current functionality depends on the sideEffect.
    // hopefully the side effect will be refactored in the future to be a returned value.
    const filters = [
      { columnName: 'name', active: 'John', queuedActive: 'John', fileName: 'abc', key: 'name' },
      { columnName: 'age', fileName: 'abc', key: 'age' },
      { columnName: 'color', fileName: 'abc', key: 'color', parents: ['age'] }
    ] as SharedFilter[]
    const data = [
      { name: 'John', age: 30, color: 'blue' },
      { name: 'Jane', age: 25, color: 'red' },
      { name: 'John', age: 35, color: 'yellow' },
      { name: 'Jane', age: 30, color: 'green' }
    ]
    const filterBehavior = {}

    const result = filterData(filters, data, filterBehavior)

    expect(result).toEqual([{ name: 'John', age: 30, color: 'blue' }])

    const sideEffectOfFiltering = [
      {
        columnName: 'name',
        active: 'John',
        queuedActive: 'John',
        fileName: 'abc',
        key: 'name',
        tier: 1
      },
      { columnName: 'age', fileName: 'abc', key: 'age', tier: 1 },
      {
        columnName: 'color',
        fileName: 'abc',
        key: 'color',
        parents: ['age'],
        tier: 2,
        values: ['blue', 'yellow'],
        active: 'blue'
      }
    ]
    expect(filters).toEqual(sideEffectOfFiltering)
  })

  it('should not include data that does not meet the filter criteria', () => {
    const filters = [
      { columnName: 'name', active: 'John', queuedActive: 'John', fileName: 'abc', key: 'abc' },
      { columnName: 'age', fileName: 'abc', key: 'age', parents: ['abc'] }
    ] as SharedFilter[]
    const data = [
      { name: 'Jane', age: 30 },
      { name: 'John', age: 25 }
    ]
    const filterBehavior = {} // replace with actual behavior if needed

    const result = filterData(filters, data, filterBehavior)
    console.log(filters)
    expect(result).toEqual([{ name: 'John', age: 25 }])
  })
})
