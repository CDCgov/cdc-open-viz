import { describe, expect, it } from 'vitest'
import { getCategoryNumericSortKey, sortByConfiguredCategoryOrder } from '../categorySortHelpers'

describe('getCategoryNumericSortKey', () => {
  it('parses supported automatic category range formats', () => {
    expect(getCategoryNumericSortKey('1 to 4')).toEqual({ lower: 1, upper: 4 })
    expect(getCategoryNumericSortKey('>10')).toEqual({ lower: 10, upper: Number.POSITIVE_INFINITY })
    expect(getCategoryNumericSortKey('<10')).toEqual({ lower: 0, upper: 10 })
    expect(getCategoryNumericSortKey('30+')).toEqual({ lower: 30, upper: Number.POSITIVE_INFINITY })
  })

  it('does not treat descending numeric strings as valid ranges', () => {
    expect(getCategoryNumericSortKey('2024-01')).toBeNull()
  })
})

describe('sortByConfiguredCategoryOrder', () => {
  it('sorts known values by configured order and places unknown values last', () => {
    const values = ['Unknown', '0', '1 - 14']

    expect(sortByConfiguredCategoryOrder(values, ['1 - 14', '0'])).toEqual(['1 - 14', '0', 'Unknown'])
  })

  it('supports custom value extraction for object arrays', () => {
    const values = [
      { label: '0', rawLabel: 'Zero' },
      { label: '1 - 14', rawLabel: 'One to Fourteen' }
    ]

    expect(
      sortByConfiguredCategoryOrder(values, ['One to Fourteen', 'Zero'], {
        getValue: item => item.rawLabel ?? item.label
      }).map(item => item.label)
    ).toEqual(['1 - 14', '0'])
  })
})
