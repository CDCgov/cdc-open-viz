import { describe, it, expect } from 'vitest'
import { filterCountyTableRuntimeDataByStateFips } from '../dataTableHelpers'

describe('filterCountyTableRuntimeDataByStateFips', () => {
  it('filters county rows by selected state fips prefix', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '06013': { uid: '06013', value: 2 },
      '12001': { uid: '12001', value: 3 }
    }

    const filtered = filterCountyTableRuntimeDataByStateFips(runtimeData, '06')

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

    const filtered = filterCountyTableRuntimeDataByStateFips(runtimeData, '06')

    expect(filtered.fromHash).toBe(12345)
    expect(Object.keys(filtered)).toEqual(['06001'])
  })

  it('returns original runtime data when state fips is empty', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 }
    }

    const filtered = filterCountyTableRuntimeDataByStateFips(runtimeData, '')

    expect(filtered).toBe(runtimeData)
  })
})
