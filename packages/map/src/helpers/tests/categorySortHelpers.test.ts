import { describe, expect, it } from 'vitest'
import { getCategoryNumericSortKey } from '../categorySortHelpers'

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
