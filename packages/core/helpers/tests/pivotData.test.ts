import { describe, it, expect } from 'vitest'

import { pivotData } from '../pivotData'

describe('pivotData', () => {
  const data = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'San Francisco' },
    { name: 'Jane', age: 27, city: 'New York' },
    { name: 'John', age: 31, city: 'San Francisco' }
  ]
  it('should pivot data correctly', () => {
    const result = pivotData(data, 'name', ['age'])
    expect(result).toEqual([
      { city: 'New York', John: 25, Jane: 27 },
      { city: 'San Francisco', Jane: 30, John: 31 }
    ])
  })
  it('should fill in columns with no data with empty strings', () => {
    const data2 = [data[0], data[1]]
    const result = pivotData(data2, 'name', ['age'])

    expect(result).toEqual([
      { city: 'New York', John: 25, Jane: '' },
      { city: 'San Francisco', Jane: 30, John: '' }
    ])

    const data3 = [data[0], data[1], data[2]]
    const result2 = pivotData(data3, 'name', ['age'])
    expect(result2).toEqual([
      { city: 'New York', John: 25, Jane: 27 },
      { city: 'San Francisco', Jane: 30, John: '' }
    ])
  })
  it('should be able to pivot more than one column', () => {
    const data = [
      { name: 'John', age: 25, color: 'blue', city: 'New York' },
      { name: 'Jane', age: 27, color: 'red', city: 'New York' },
      { name: 'Jane', age: 30, color: 'yellow', city: 'San Francisco' },
      { name: 'John', age: 31, color: 'green', city: 'San Francisco' }
    ]
    const result = pivotData(data, 'name', ['age', 'color'])
    expect(result).toEqual([
      { city: 'New York', John: 25, Jane: 27, pivotColumn: 'age' },
      { city: 'New York', John: 'blue', Jane: 'red', pivotColumn: 'color' },
      { city: 'San Francisco', Jane: 30, John: 31, pivotColumn: 'age' },
      { city: 'San Francisco', Jane: 'yellow', John: 'green', pivotColumn: 'color' }
    ])
  })
})
