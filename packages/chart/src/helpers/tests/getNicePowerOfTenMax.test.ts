import { describe, expect, it } from 'vitest'
import { getNicePowerOfTenMax } from '../getNicePowerOfTenMax'

describe('getNicePowerOfTenMax', () => {
  it.each([
    [3, 3],
    [7.2, 10],
    [25, 30],
    [89, 100],
    [234, 300],
    [5678, 6000],
    [12345, 20000]
  ])('rounds %s to %s', (input, expected) => {
    expect(getNicePowerOfTenMax(input)).toBe(expected)
  })

  it('leaves non-finite values unchanged', () => {
    expect(getNicePowerOfTenMax(Infinity)).toBe(Infinity)
    expect(Number.isNaN(getNicePowerOfTenMax(NaN))).toBe(true)
  })
})
