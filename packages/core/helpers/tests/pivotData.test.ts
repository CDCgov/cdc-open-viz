import { describe, it, expect } from 'vitest'

import { pivotData } from '../pivotData'
import _ from 'lodash'

describe('pivotData', () => {
  const data = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'San Francisco' },
    { name: 'Jane', age: 27, city: 'New York' },
    { name: 'John', age: 31, city: 'San Francisco' }
  ]
  it('should pivot data correctly', () => {
    const result = pivotData(data, 'name', ['age'], [])
    expect(result).toEqual([
      { city: 'New York', John: 25, Jane: 27, _pivotedFrom: 'age' },
      { city: 'San Francisco', Jane: 30, John: 31, _pivotedFrom: 'age' }
    ])
  })
  it('should fill in columns with no data with empty strings', () => {
    const data2 = [data[0], data[1]]
    const result = pivotData(data2, 'name', ['age'], [])

    expect(result).toEqual([
      { city: 'New York', John: 25, Jane: '', _pivotedFrom: 'age' },
      { city: 'San Francisco', Jane: 30, John: '', _pivotedFrom: 'age' }
    ])

    const data3 = [data[0], data[1], data[2]]
    const result2 = pivotData(data3, 'name', ['age'], [])
    expect(result2).toEqual([
      { city: 'New York', John: 25, Jane: 27, _pivotedFrom: 'age' },
      { city: 'San Francisco', Jane: 30, John: '', _pivotedFrom: 'age' }
    ])
  })
  it('should be able to pivot more than one column', () => {
    // when there are multiple pivot value columns, if any other data is present it will break the pivot.
    // so we need to tell it which columns to exclude from the pivot.
    // 'other' is added here as an example.
    const data = [
      { name: 'John', age: 25, color: 'blue', city: 'New York', other: 'yes' },
      { name: 'Jane', age: 27, color: 'red', city: 'New York', other: 'no' },
      { name: 'Jane', age: 30, color: 'yellow', city: 'San Francisco', other: 'yes' },
      { name: 'John', age: 31, color: 'green', city: 'San Francisco', other: 'no' }
    ]
    const result = pivotData(data, 'name', ['age', 'color'], ['other'])
    expect(result.map(row => _.omit(row, 'other'))).toEqual([
      { city: 'New York', John: 25, Jane: 27, _pivotedFrom: 'age' },
      { city: 'New York', John: 'blue', Jane: 'red', _pivotedFrom: 'color' },
      { city: 'San Francisco', Jane: 30, John: 31, _pivotedFrom: 'age' },
      { city: 'San Francisco', Jane: 'yellow', John: 'green', _pivotedFrom: 'color' }
    ])
  })
  it('should allow for duplicate data when there is 1 Column Header but different columnName data', () => {
    // when there are multiple pivot value columns, if any other data is present it will break the pivot.
    // so we need to tell it which columns to exclude from the pivot.
    // 'other' is added here as an example.
    const data = [
      { name: 'John', age: 27, color: 'blue', city: 'New York', other: 'yes' },
      { name: 'Jane', age: 27, color: 'red', city: 'New York', other: 'no' },
      { name: 'Bob', age: 31, color: 'yellow', city: 'New York', other: 'yes' },
      { name: 'Betty', age: 31, color: 'green', city: 'New York', other: 'no' },
      { name: 'Jane', age: 31, color: 'yellow', city: 'New York', other: 'yes' },
      { name: 'John', age: 31, color: 'green', city: 'New York', other: 'no' },
      { name: 'Bob', age: 27, color: 'blue', city: 'New York', other: 'yes' },
      { name: 'Betty', age: 27, color: 'red', city: 'New York', other: 'no' }
    ]
    const result = pivotData(data, 'city', ['name'], [])
    expect(result).toEqual([
      {
        'New York': 'John',
        age: 27,
        color: 'blue',
        other: 'yes',
        _pivotedFrom: 'name'
      },
      {
        'New York': 'Jane',
        age: 27,
        color: 'red',
        other: 'no',
        _pivotedFrom: 'name'
      },
      {
        'New York': 'Bob',
        age: 31,
        color: 'yellow',
        other: 'yes',
        _pivotedFrom: 'name'
      },
      {
        'New York': 'Betty',
        age: 31,
        color: 'green',
        other: 'no',
        _pivotedFrom: 'name'
      },
      {
        'New York': 'Jane',
        age: 31,
        color: 'yellow',
        other: 'yes',
        _pivotedFrom: 'name'
      },
      {
        'New York': 'John',
        age: 31,
        color: 'green',
        other: 'no',
        _pivotedFrom: 'name'
      },
      {
        'New York': 'Bob',
        age: 27,
        color: 'blue',
        other: 'yes',
        _pivotedFrom: 'name'
      },
      {
        'New York': 'Betty',
        age: 27,
        color: 'red',
        other: 'no',
        _pivotedFrom: 'name'
      }
    ])
  })
})
