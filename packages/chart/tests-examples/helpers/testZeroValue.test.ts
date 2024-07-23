import { testZeroValue } from '../../src/components/BarChart/helpers'

describe('testZeroValue', () => {
  test('returns true for "0" as string', () => {
    expect(testZeroValue('0')).toBe(true)
  })

  test('returns true for "0" as number', () => {
    expect(testZeroValue(0)).toBe(true)
  })

  test('returns true for 0.0 as number', () => {
    expect(testZeroValue(0.0)).toBe(true)
  })

  // check false case
  test('returns false for "ABC" as string', () => {
    expect(testZeroValue('ABC')).toBe(false)
  })
  test('returns false for 999 as number', () => {
    expect(testZeroValue(999)).toBe(false)
  })
})
