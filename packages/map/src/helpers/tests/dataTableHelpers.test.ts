import { describe, it, expect } from 'vitest'
import { filterCountyTableRuntimeDataByStateCode } from '../dataTableHelpers'

describe('filterCountyTableRuntimeDataByStateCode', () => {
  it('filters county rows by selected state fips prefix', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '06013': { uid: '06013', value: 2 },
      '12001': { uid: '12001', value: 3 }
    }

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '06')

    expect(Object.keys(filtered)).toEqual(['06001', '06013'])
    expect(filtered['06001'].value).toBe(1)
    expect(filtered['12001']).toBeUndefined()
  })

  it('preserves non-enumerable fromHash metadata', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '12001': { uid: '12001', value: 2 }
    }

    Object.defineProperty(runtimeData, 'fromHash', {
      value: 12345,
      enumerable: false
    })

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '06')

    expect(filtered.fromHash).toBe(12345)
    expect(Object.keys(filtered)).toEqual(['06001'])
  })

  it('filters us-geocode rows by configured state column when uid is not county fips', () => {
    const runtimeData = {
      'ID:2472': { uid: 'ID:2472', 'State/Territory': 'Alabama' },
      'ID:1010': { uid: 'ID:1010', 'State/Territory': 'California' },
      'ID:2020': { uid: 'ID:2020', 'State/Territory': 'California' }
    }

    const config = {
      columns: {
        additionalColumn1: { name: 'State/Territory' }
      }
    }

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '06', config)

    expect(Object.keys(filtered)).toEqual(['ID:1010', 'ID:2020'])
    expect(filtered['ID:2472']).toBeUndefined()
  })

  it('returns original runtime data when state fips is empty', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 }
    }

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '')

    expect(filtered).toBe(runtimeData)
  })
})
